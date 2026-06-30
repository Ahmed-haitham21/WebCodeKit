/* =====================================================
   WEBCODEKIT — live-preview.js
   Shared live preview logic for all component pages
   ===================================================== */

function updateLivePreview() {
  const html = document.getElementById("htmlCode")?.textContent || "";
  const css  = document.getElementById("cssCode")?.textContent  || "";
  const js   = document.getElementById("jsCode")?.textContent   || "";

  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const bg = isDark ? "#0f1219" : "#f8fafc";

  const doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  min-height: 100vh;
  background: ${bg};
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
${css}
</style>
</head>
<body>
${html}
<script>${js.replace(/<\/script>/gi, '<\\/script>')}<\/script>
</body>
</html>`;

  const iframe = document.getElementById("livePreviewFrame");
  if (iframe) iframe.srcdoc = doc;
}

// Hook into any tab switching that exists on the page
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab-btn, .code-tab").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab") || this.getAttribute("data-code-tab");
      if (tabName === "preview") updateLivePreview();
    });
  });
});
