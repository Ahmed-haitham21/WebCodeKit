/* ===== WebCodeKit — Theme Toggle ===== */

function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.setAttribute("data-theme", "light");
    if (icon) icon.className = "fa-regular fa-moon";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    if (icon) icon.className = "fa-regular fa-sun";
    localStorage.setItem("theme", "dark");
  }
}

// Apply saved theme immediately on load (before DOMContentLoaded to prevent flash)
(function () {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();

// Sync icon after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("theme") || "dark";
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = saved === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon";
  }
});
