/* =====================================================
   WEBCODEKIT — search.js
   Global search that works across all pages.
   Indexes all visible components and filters them.
   ===================================================== */

(function () {
  // Build search UI
  function buildSearchUI() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    const searchWrapper = document.createElement("div");
    searchWrapper.className = "global-search-wrapper";
    searchWrapper.innerHTML = `
      <div class="global-search-box">
        <i class="fas fa-search search-icon" aria-hidden="true"></i>
        <input 
          type="search" 
          id="globalSearch" 
          placeholder="Search components..." 
          autocomplete="off"
          aria-label="Search components"
        >
        <kbd class="search-shortcut">/</kbd>
      </div>
      <div class="search-results" id="searchResults" role="listbox" aria-label="Search results"></div>
    `;

    // Insert before the fav link
    const favLink = nav.querySelector(".nav-fav-link");
    if (favLink) {
      nav.insertBefore(searchWrapper, favLink);
    } else {
      nav.appendChild(searchWrapper);
    }

    attachSearchListeners();
  }

  // Index all items on current page
  function indexItems() {
    const items = [];
    const page = window.location.pathname.split("/").pop() || "index.html";

    // Buttons
    document.querySelectorAll(".button-item, .btn-card").forEach(el => {
      const btn = el.querySelector("button:not(.fav-btn):not(.star)");
      const id  = el.querySelector(".fav-btn")?.getAttribute("data-fav") || "";
      if (btn) items.push({
        name: btn.textContent.trim() || id,
        type: "Button",
        icon: "fa-hand-pointer",
        color: "#667eea",
        el,
      });
    });

    // Cards
    document.querySelectorAll(".card-item").forEach(el => {
      const h3 = el.querySelector("h3, .card-title");
      const id = el.querySelector(".fav-btn")?.getAttribute("data-fav") || "";
      items.push({
        name: h3?.textContent.trim() || id || "Card",
        type: "Card",
        icon: "fa-clone",
        color: "#a855f7",
        el,
      });
    });

    // Forms
    document.querySelectorAll(".form-card").forEach(el => {
      const h3 = el.querySelector("h3, h2");
      items.push({
        name: h3?.textContent.trim() || "Form",
        type: "Form",
        icon: "fa-wpforms",
        color: "#10b981",
        el,
      });
    });

    // Systems
    document.querySelectorAll(".system-card").forEach(el => {
      const h3 = el.querySelector("h3");
      items.push({
        name: h3?.textContent.trim() || "System",
        type: "System",
        icon: "fa-cubes",
        color: "#f59e0b",
        el,
      });
    });

    return items;
  }

  // Cross-page search index (static)
  const crossPageIndex = [
    // Buttons page
    { name: "Signup Button",     type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    { name: "Login Button",      type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    { name: "Gradient Button",   type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    { name: "Outline Button",    type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    { name: "Dark Button",       type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    { name: "Glow Button",       type: "Button", icon: "fa-hand-pointer", color: "#667eea", href: "buttons.html" },
    // Cards page
    { name: "Profile Card",      type: "Card",   icon: "fa-clone",        color: "#a855f7", href: "cards.html" },
    { name: "Product Card",      type: "Card",   icon: "fa-clone",        color: "#a855f7", href: "cards.html" },
    { name: "Stats Card",        type: "Card",   icon: "fa-clone",        color: "#a855f7", href: "cards.html" },
    { name: "Pricing Card",      type: "Card",   icon: "fa-clone",        color: "#a855f7", href: "cards.html" },
    // Forms page
    { name: "Login Form",        type: "Form",   icon: "fa-wpforms",      color: "#10b981", href: "forms.html" },
    { name: "Register Form",     type: "Form",   icon: "fa-wpforms",      color: "#10b981", href: "forms.html" },
    { name: "Contact Form",      type: "Form",   icon: "fa-wpforms",      color: "#10b981", href: "forms.html" },
    { name: "Search Form",       type: "Form",   icon: "fa-wpforms",      color: "#10b981", href: "forms.html" },
    // Systems
    { name: "Calculator System", type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    { name: "Login System",      type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    { name: "Todo List System",  type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    { name: "Image Gallery",     type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    { name: "Weather System",    type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    { name: "Clock System",      type: "System", icon: "fa-cubes",        color: "#f59e0b", href: "systems.html" },
    // Kits
    { name: "Dashboard Kit",     type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
    { name: "Landing Page Kit",  type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
    { name: "Auth Kit",          type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
    { name: "E-Commerce Kit",    type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
    { name: "Blog Kit",          type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
    { name: "Portfolio Kit",     type: "Kit",    icon: "fa-layer-group",  color: "#06b6d4", href: "kits.html" },
  ];

  function attachSearchListeners() {
    const input   = document.getElementById("globalSearch");
    const results = document.getElementById("searchResults");
    if (!input || !results) return;

    let pageItems = [];
    let selectedIndex = -1;

    // Lazy index on first focus
    let indexed = false;
    input.addEventListener("focus", () => {
      if (!indexed) { pageItems = indexItems(); indexed = true; }
    });

    // Keyboard shortcut: press "/" to focus search
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input &&
          !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === "Escape") {
        input.value = "";
        results.style.display = "none";
        selectedIndex = -1;
      }
    });

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.style.display = "none"; return; }

      // Search page items + cross-page index
      const allItems = [
        ...pageItems.filter(i => i.name.toLowerCase().includes(q) || i.type.toLowerCase().includes(q)),
        ...crossPageIndex.filter(i => 
          (i.name.toLowerCase().includes(q) || i.type.toLowerCase().includes(q)) &&
          !pageItems.some(p => p.name.toLowerCase() === i.name.toLowerCase())
        ),
      ].slice(0, 8);

      if (!allItems.length) {
        results.innerHTML = `<div class="search-empty"><i class="fas fa-search"></i> No results for "<strong>${q}</strong>"</div>`;
        results.style.display = "block";
        return;
      }

      results.innerHTML = allItems.map((item, i) => `
        <div class="search-result-item ${item.href ? 'cross-page' : 'same-page'}" 
             data-index="${i}" 
             role="option"
             tabindex="-1">
          <div class="sri-icon" style="background:${item.color}20;color:${item.color}">
            <i class="fas ${item.icon}"></i>
          </div>
          <div class="sri-body">
            <div class="sri-name">${highlight(item.name, q)}</div>
            <div class="sri-type">${item.type}${item.href ? ' · ' + item.href.replace('.html','') : ' · This page'}</div>
          </div>
          ${item.href ? '<i class="fas fa-arrow-right sri-arrow"></i>' : '<i class="fas fa-eye sri-arrow" style="opacity:0.4"></i>'}
        </div>
      `).join("");

      results.style.display = "block";
      selectedIndex = -1;

      // Click handlers
      results.querySelectorAll(".search-result-item").forEach((el, i) => {
        el.addEventListener("click", () => {
          const item = allItems[i];
          if (item.href) {
            window.location.href = item.href;
          } else if (item.el) {
            results.style.display = "none";
            input.value = "";
            item.el.scrollIntoView({ behavior: "smooth", block: "center" });
            item.el.style.outline = `2px solid #667eea`;
            item.el.style.borderRadius = "12px";
            setTimeout(() => { item.el.style.outline = ""; item.el.style.borderRadius = ""; }, 2500);
          }
        });
      });
    });

    // Arrow key navigation
    input.addEventListener("keydown", (e) => {
      const items = results.querySelectorAll(".search-result-item");
      if (!items.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle("selected", i === selectedIndex));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        items.forEach((el, i) => el.classList.toggle("selected", i === selectedIndex));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        items[selectedIndex].click();
      }
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".global-search-wrapper")) {
        results.style.display = "none";
      }
    });
  }

  function highlight(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  }

  document.addEventListener("DOMContentLoaded", buildSearchUI);
})();
