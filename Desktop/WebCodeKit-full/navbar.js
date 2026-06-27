/* =====================================================
   WEBCODEKIT — UNIFIED NAVBAR JS v2.0
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ── ELEMENTS ── */
  const navbar     = document.querySelector(".navbar");
  const hamburger  = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  /* ── ACTIVE PAGE HIGHLIGHT ── */
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ── STICKY SHADOW ON SCROLL ── */
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  /* ── HAMBURGER TOGGLE ── */
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* ── CLOSE ON LINK CLICK ── */
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  /* ── CLOSE ON OUTSIDE CLICK ── */
  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });

  /* ── CLOSE ON ESC ── */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ── CLOSE ON RESIZE ── */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeMenu();
  }, { passive: true });

  function closeMenu() {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

});
