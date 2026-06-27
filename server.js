/* =====================================================
   WEBCODEKIT — AI BACKEND SERVER  server.js
   سيرفر بسيط يحمي مفتاح Anthropic API ويستخدمه بالنيابة
   عن الواجهة (smart-ai.js) في وضعي: chat و code.
   ===================================================== */
"use strict";

require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";

if (!API_KEY) {
  console.error(
    "[FATAL] ANTHROPIC_API_KEY غير موجود. حط مفتاحك في ملف .env (راجع .env.example)."
  );
  process.exit(1);
}

/* ── MIDDLEWARE ───────────────────────────────────────── */
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: ALLOWED_ORIGIN === "*" ? true : ALLOWED_ORIGIN,
  })
);

// حماية بسيطة من إساءة الاستخدام: 30 طلب لكل دقيقة لكل IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "طلبات كثيرة جداً، حاول بعد لحظات." },
});
app.use("/api/", limiter);

/* ── ملفات الموقع (HTML/CSS/JS) ────────────────────────── */
// السيرفر ده بيخدّم الموقع نفسه كمان، عشان تشغّل أمر واحد بس
app.use(express.static(__dirname));

/* ── SYSTEM PROMPTS (نفس منطق الواجهة الأمامية) ───────── */
const CHAT_SYSTEM_PROMPT = `You are a helpful AI assistant for WebCodeKit, a UI component library.
You answer questions about HTML, CSS, JavaScript, web development, and UI design in a friendly, clear way.
Respond in the same language the user uses (Arabic or English).
Keep answers concise and practical. Use examples when helpful.
Do NOT generate code blocks unless the user explicitly asks for code.`;

const CODE_SYSTEM_PROMPT = `You are a UI code generator for WebCodeKit. Return ONLY valid JSON (no markdown, no backticks):
{"html":"...","css":"...","js":"...","name":"Component Name"}

Rules:
- Generate clean, modern, dark-themed component code
- If user is refining a previous component (says modify/change/عدّل/غيّر), keep its structure
- If referencing a previous component, build upon the last generated code
- Keep consistent color palette across a session unless asked to change
- Always return complete, self-contained code`;

/* ── HELPERS ──────────────────────────────────────────── */
function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .slice(-30) // نفس الحد بتاع الواجهة الأمامية (30 رسالة)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }));
}

async function callAnthropic({ system, messages, max_tokens }) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens,
      system,
      messages,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Anthropic API error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const text = data.content?.find((b) => b.type === "text")?.text || "";
  return text;
}

/* ── ROUTE: CHAT MODE ─────────────────────────────────── */
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message مطلوب." });
    }

    const messages = [...sanitizeHistory(history), { role: "user", content: message }];

    const text = await callAnthropic({
      system: CHAT_SYSTEM_PROMPT,
      messages,
      max_tokens: 1000,
    });

    res.json({ reply: text });
  } catch (err) {
    console.error("Chat error:", err.message);
    res.status(500).json({ error: "حصل خطأ في توليد الرد." });
  }
});

/* ── ROUTE: CODE MODE ──────────────────────────────────── */
app.post("/api/code", async (req, res) => {
  try {
    const { prompt, history } = req.body || {};
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "prompt مطلوب." });
    }

    const messages = [...sanitizeHistory(history), { role: "user", content: prompt }];

    const text = await callAnthropic({
      system: CODE_SYSTEM_PROMPT,
      messages,
      max_tokens: 3000,
    });

    let parsed;
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
    } catch (parseErr) {
      console.error("JSON parse error from model output:", text.slice(0, 300));
      return res.status(502).json({ error: "الموديل رجّع صيغة غير صالحة." });
    }

    res.json(parsed);
  } catch (err) {
    console.error("Code error:", err.message);
    res.status(500).json({ error: "حصل خطأ في توليد الكود." });
  }
});

/* ── HEALTH CHECK ──────────────────────────────────────── */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", model: MODEL });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

module.exports = app;