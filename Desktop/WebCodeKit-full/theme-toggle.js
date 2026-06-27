function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.setAttribute("data-theme", "light");
    icon.className = "fa-regular fa-moon";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    icon.className = "fa-regular fa-sun";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");

  html.setAttribute("data-theme", savedTheme);
  icon.className =
    savedTheme === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon";
});
