function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.setAttribute("data-theme", "light");
    icon.className = "fa-regular fa-moon";
  } else {
    html.setAttribute("data-theme", "dark");
    icon.className = "fa-regular fa-sun";
  }
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
