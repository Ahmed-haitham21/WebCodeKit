/* =====================================================
   WEBCODEKIT — color-customizer.js
   Lets users pick a primary color and preview
   all components in that color live.
   ===================================================== */

(function () {
  let currentColor = "#667eea";

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return { r, g, b };
  }

  function darken(hex, amount = 20) {
    let { r, g, b } = hexToRgb(hex);
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);
    return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`;
  }

  function lighten(hex, amount = 40) {
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, r + amount);
    g = Math.min(255, g + amount);
    b = Math.min(255, b + amount);
    return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`;
  }

  function toRgbStr(hex) {
    const { r, g, b } = hexToRgb(hex);
    return `${r}, ${g}, ${b}`;
  }

  function applyColor(color) {
    currentColor = color;
    const dark   = darken(color);
    const light  = lighten(color);
    const rgb    = toRgbStr(color);

    // Inject/update CSS variable overrides
    let styleEl = document.getElementById("color-customizer-vars");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "color-customizer-vars";
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      :root {
        --custom-primary: ${color};
        --custom-primary-dark: ${dark};
        --custom-primary-light: ${light};
        --custom-primary-rgb: ${rgb};
      }

      /* Override gradient buttons */
      .btn-3, .btn-4, .btn-5, .btn-6, .btn-9, .btn-10,
      .btn-11, .btn-12, .btn-13 {
        background: linear-gradient(135deg, ${color}, ${dark}) !important;
      }

      /* Override solid colored buttons */
      .btn-14, .btn-15, .btn-16, .btn-17, .btn-18 {
        background: ${color} !important;
      }

      /* Override outline buttons */
      .btn-7, .btn-8 {
        border-color: ${color} !important;
        color: ${color} !important;
      }

      /* Tab active, copy buttons, etc. */
      .tab-btn.active {
        background: ${color} !important;
        box-shadow: 0 2px 12px rgba(${rgb}, 0.4) !important;
      }

      .category-btn.active {
        background: linear-gradient(135deg, ${color}, ${dark}) !important;
        border-color: transparent !important;
        box-shadow: 0 4px 15px rgba(${rgb}, 0.4) !important;
      }

      .copy-btn {
        background: rgba(${rgb}, 0.15) !important;
        color: ${color} !important;
        border-color: rgba(${rgb}, 0.3) !important;
      }

      .copy-all-btn, .hero-btn-primary {
        background: linear-gradient(135deg, ${color}, ${dark}) !important;
        box-shadow: 0 4px 20px rgba(${rgb}, 0.3) !important;
      }

      /* Swatch active ring */
      .swatch.active {
        box-shadow: 0 0 0 3px rgba(${rgb}, 0.5), 0 0 0 2px ${color} !important;
      }
    `;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Swatches
    document.querySelectorAll(".swatch").forEach((sw) => {
      sw.addEventListener("click", function () {
        document.querySelectorAll(".swatch").forEach(s => s.classList.remove("active"));
        this.classList.add("active");
        const color = this.getAttribute("data-color");
        document.getElementById("customColor").value = color;
        applyColor(color);
      });
    });

    // Custom color picker
    const picker = document.getElementById("customColor");
    if (picker) {
      picker.addEventListener("input", function () {
        document.querySelectorAll(".swatch").forEach(s => s.classList.remove("active"));
        applyColor(this.value);
      });
    }

    // Apply default color on load
    applyColor(currentColor);
  });
})();
