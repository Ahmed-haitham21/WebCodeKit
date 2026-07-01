/* =====================================================
   WEBCODEKIT — utils.js
   Back to Top button + misc utilities
   ===================================================== */

// ===== BACK TO TOP =====
function buildBackToTop() {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.className = "back-to-top-btn";
  btn.title = "Back to top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== COPY FEEDBACK TOAST =====
function showToast(message, type = "success") {
  let toast = document.getElementById("wck-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "wck-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `wck-toast wck-toast-${type} visible`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

// ===== COMPONENT COUNT BADGE in navbar =====
function updateComponentCount() {
  const count =
    document.querySelectorAll(".button-item, .card-item, .form-card, .system-card").length;
  if (!count) return;

  const page = window.location.pathname.split("/").pop();
  const linkMap = {
    "buttons.html": "buttons.html",
    "cards.html":   "cards.html",
    "forms.html":   "forms.html",
    "systems.html": "systems.html",
  };

  const href = linkMap[page];
  if (!href) return;

  const link = document.querySelector(`.nav-links a[href="${href}"]`);
  if (link && !link.querySelector(".nav-count")) {
    const badge = document.createElement("span");
    badge.className = "nav-count";
    badge.textContent = count;
    link.appendChild(badge);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildBackToTop();
  updateComponentCount();
});

// ===== PWA SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('[WebCodeKit] PWA: Service Worker registered', reg.scope);
      })
      .catch(err => {
        console.warn('[WebCodeKit] PWA: Service Worker failed', err);
      });
  });
}

// ===== PWA INSTALL PROMPT =====
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;

  // Show install button
  showInstallButton();
});

function showInstallButton() {
  if (document.getElementById('pwa-install-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'pwa-install-btn';
  btn.className = 'pwa-install-btn';
  btn.innerHTML = '<i class="fas fa-download"></i> Install App';
  btn.title = 'Install WebCodeKit as an app';
  btn.onclick = installPWA;
  document.body.appendChild(btn);
}

async function installPWA() {
  if (!deferredInstallPrompt) return;
  const result = await deferredInstallPrompt.prompt();
  console.log('[WebCodeKit] PWA Install result:', result.outcome);
  deferredInstallPrompt = null;
  document.getElementById('pwa-install-btn')?.remove();
}

window.addEventListener('appinstalled', () => {
  console.log('[WebCodeKit] PWA installed successfully!');
  document.getElementById('pwa-install-btn')?.remove();
  showToast('WebCodeKit installed as app! 🎉');
});
