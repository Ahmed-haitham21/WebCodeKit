/* =====================================================
   WEBCODEKIT — navbar-component.js
   Auto-injects the shared navbar in all pages.
   Add <div id="navbar-root"></div> at the top of body,
   then <script src="navbar-component.js"></script>.
   ===================================================== */

(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = [
    { href: "index.html",     label: "Home",         cls: "" },
    { href: "buttons.html",   label: "Buttons",      cls: "" },
    { href: "cards.html",     label: "Cards",        cls: "" },
    { href: "forms.html",     label: "Forms",        cls: "" },
    { href: "systems.html",   label: "Systems",      cls: "" },
    { href: "smart-ai.html",  label: "AI Assistant", cls: "nav-ai-link" },
    { href: "about.html",     label: "About Us",     cls: "" },
  ];

  function buildLinks(mobile = false) {
    return links.map(l => {
      const isActive = l.href === currentPage ? " active" : "";
      const cls = [l.cls, isActive].filter(Boolean).join(" ");
      return `<li><a href="${l.href}"${cls ? ` class="${cls}"` : ""}>${l.label}</a></li>`;
    }).join("\n        ");
  }

  const navbar = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="logo-hamburger-wrapper">
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <a href="index.html" class="logo">
          <i class="fas fa-code" aria-hidden="true"></i> WebCodeKit
        </a>
      </div>
      <ul class="nav-links" role="list">
        ${buildLinks()}
      </ul>
      <a href="favorites.html" class="nav-fav-link" title="My Favorites" aria-label="My Favorites">
        <i class="fas fa-heart" aria-hidden="true"></i>
      </a>
    </nav>

    <ul class="mobile-menu" id="mobileMenu" role="list" aria-label="Mobile navigation">
      ${buildLinks(true)}
      <li class="menu-divider"></li>
      <li><a href="favorites.html"><i class="fas fa-heart"></i> My Favorites</a></li>
    </ul>

    <button class="theme-btn" onclick="toggleTheme()" title="Toggle Light/Dark Mode" aria-label="Toggle theme">
      <i class="fa-regular fa-sun" id="theme-icon" aria-hidden="true"></i>
    </button>`;

  const root = document.getElementById("navbar-root");
  if (root) {
    root.innerHTML = navbar;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navbar);
  }
})();
