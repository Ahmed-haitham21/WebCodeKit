/* =====================================================
   WEBCODEKIT — lang.js
   Arabic / English language toggle.
   Translates navbar, buttons, and UI text.
   ===================================================== */

const TRANSLATIONS = {
  en: {
    home: "Home", buttons: "Buttons", cards: "Cards", forms: "Forms",
    systems: "Systems", kits: "Kits", ai: "AI Assistant", about: "About Us",
    favorites: "Favorites", search: "Search components...",
    getCode: "Get This Code", copyAll: "Copy All Code", open: "Open",
    exploreComponents: "Explore Components", readySystems: "Ready Systems",
    all: "All", gradient: "Gradient", outline: "Outline", dark: "Dark", colorful: "Colorful",
    primaryColor: "Primary Color:", backToTop: "Back to top",
  },
  ar: {
    home: "الرئيسية", buttons: "الأزرار", cards: "البطاقات", forms: "النماذج",
    systems: "الأنظمة", kits: "المجموعات", ai: "المساعد الذكي", about: "من نحن",
    favorites: "المفضلة", search: "ابحث عن component...",
    getCode: "احصل على الكود", copyAll: "نسخ كل الكود", open: "فتح",
    exploreComponents: "استكشف المكونات", readySystems: "أنظمة جاهزة",
    all: "الكل", gradient: "متدرج", outline: "مخطط", dark: "داكن", colorful: "ملون",
    primaryColor: "اللون الأساسي:", backToTop: "للأعلى",
  }
};

let currentLang = localStorage.getItem("wck_lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("wck_lang", lang);
  const t = TRANSLATIONS[lang];
  const isAr = lang === "ar";

  // RTL
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // Navbar links — use firstChild to preserve badge/icon child elements
  const navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    const labelMap = {
      "index.html":     t.home,
      "buttons.html":   t.buttons,
      "cards.html":     t.cards,
      "forms.html":     t.forms,
      "systems.html":   t.systems,
      "kits.html":      t.kits,
      "about.html":     t.about,
      "favorites.html": t.favorites,
    };
    const label = labelMap[href] || (a.classList.contains("nav-ai-link") ? t.ai : null);
    if (label) {
      // Preserve non-text child nodes (badge span, icons)
      const childNodes = Array.from(a.childNodes);
      const nonTextNodes = childNodes.filter(n => n.nodeType !== Node.TEXT_NODE);
      a.textContent = label;
      nonTextNodes.forEach(n => a.appendChild(n));
    }
  });

  // Mobile menu links
  const mobileLinks = document.querySelectorAll(".mobile-menu li a");
  mobileLinks.forEach(a => {
    const href = a.getAttribute("href");
    const labelMap = {
      "index.html":     t.home,
      "buttons.html":   t.buttons,
      "cards.html":     t.cards,
      "forms.html":     t.forms,
      "systems.html":   t.systems,
      "kits.html":      t.kits,
      "about.html":     t.about,
    };
    const label = labelMap[href] || (a.classList.contains("mobile-ai-link") ? t.ai : null);
    if (label) {
      const childNodes = Array.from(a.childNodes);
      const nonTextNodes = childNodes.filter(n => n.nodeType !== Node.TEXT_NODE);
      a.textContent = label;
      nonTextNodes.forEach(n => a.appendChild(n));
    }
  });

  // Search placeholder
  const searchInput = document.getElementById("globalSearch");
  if (searchInput) searchInput.placeholder = t.search;

  // Category filters
  document.querySelectorAll(".category-btn").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === "all")      btn.textContent = t.all;
    if (cat === "gradient") btn.textContent = t.gradient;
    if (cat === "outline")  btn.textContent = t.outline;
    if (cat === "dark")     btn.textContent = t.dark;
    if (cat === "colorful") btn.textContent = t.colorful;
  });

  // Get This Code buttons
  document.querySelectorAll(".get-code-btn, [onclick*='getCode'], [onclick*='showCode']").forEach(btn => {
    if (btn.textContent.includes("Code") || btn.textContent.includes("الكود")) {
      btn.innerHTML = `<i class="fas fa-code"></i> ${t.getCode}`;
    }
  });

  // Copy all button
  document.querySelectorAll(".copy-all-btn").forEach(btn => {
    btn.innerHTML = `<i class="fas fa-copy"></i> ${t.copyAll}`;
  });

  // Color customizer label
  const colorLabel = document.querySelector(".color-customizer-label");
  if (colorLabel) colorLabel.innerHTML = `<i class="fas fa-palette"></i> ${t.primaryColor}`;

  // Hero buttons
  const heroBtnPrimary = document.querySelector(".hero-btn-primary");
  if (heroBtnPrimary) heroBtnPrimary.innerHTML = `<i class="fas fa-layer-group"></i> ${t.exploreComponents}`;
  const heroBtnSecondary = document.querySelector(".hero-btn-secondary");
  if (heroBtnSecondary) heroBtnSecondary.innerHTML = `<i class="fas fa-rocket"></i> ${t.readySystems}`;

  // Update lang toggle button
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = isAr ? "EN" : "عر";

  // Back to top
  const btt = document.getElementById("back-to-top");
  if (btt) btt.title = t.backToTop;
}

function toggleLang() {
  applyLang(currentLang === "en" ? "ar" : "en");
}

// Build lang toggle button
function buildLangToggle() {
  const btn = document.createElement("button");
  btn.id = "lang-toggle";
  btn.className = "lang-toggle-btn";
  btn.onclick = toggleLang;
  btn.title = "Toggle Arabic / English";
  btn.textContent = currentLang === "en" ? "عر" : "EN";
  document.body.appendChild(btn);
}

document.addEventListener("DOMContentLoaded", () => {
  buildLangToggle();
  applyLang(currentLang);
});
