// ===== WebCodeKit Favorites Page Renderer =====
// Reads saved favorite keys from localStorage (via the shared helpers in
// favorites.js) and renders them, grouped by type, into #favoritesContainer.
// Relies on FAVORITES_DATA (favorites-data.js) for display name/page/type,
// and on getFavorites()/FAV_STORAGE_KEY (favorites.js) for storage access.

// Icon + plural label for each group, keyed by the "type" field in FAVORITES_DATA.
const FAV_GROUP_META = {
  Button: { icon: "fa-solid fa-square", label: "Buttons" },
  Card: { icon: "fa-solid fa-id-card", label: "Cards" },
  Form: { icon: "fa-solid fa-keyboard", label: "Forms" },
  System: { icon: "fa-solid fa-layer-group", label: "Systems" },
};

// Preferred display order for groups.
const FAV_GROUP_ORDER = ["Button", "Card", "Form", "System"];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmptyState(container) {
  container.innerHTML = `
    <div class="empty-favorites">
      <i class="fa-regular fa-heart"></i>
      <h2>No favorites yet</h2>
      <p>Tap the heart icon on any button, card, form, or system to save it here.</p>
      <a href="index.html" class="browse-btn">Browse Components</a>
    </div>
  `;
}

function buildFavItem(key, info) {
  const name = info ? info.name : key;
  const page = info ? info.page : "index.html";

  return `
    <div class="fav-item" data-fav-key="${escapeHtml(key)}">
      <span class="fav-item-name" title="${escapeHtml(name)}">${escapeHtml(name)}</span>
      <div class="fav-item-actions">
        <a class="fav-view-btn" href="${escapeHtml(page)}">View <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        <button class="fav-remove-btn" title="Remove from favorites" aria-label="Remove from favorites">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  `;
}

function buildGroup(type, keys) {
  const meta = FAV_GROUP_META[type] || { icon: "fa-solid fa-heart", label: type };
  const items = keys.map((key) => buildFavItem(key, FAVORITES_DATA[key])).join("");

  return `
    <div class="fav-group" data-group="${escapeHtml(type)}">
      <h2><i class="${meta.icon}"></i> ${escapeHtml(meta.label)} <span class="fav-count">${keys.length}</span></h2>
      <div class="fav-grid">${items}</div>
    </div>
  `;
}

function renderFavorites() {
  const container = document.getElementById("favoritesContainer");
  if (!container) return;

  const favoriteKeys = getFavorites();

  if (!favoriteKeys.length) {
    renderEmptyState(container);
    return;
  }

  // Group favorite keys by their "type" (Button/Card/Form/System).
  // Keys with no matching entry in FAVORITES_DATA fall into "Other".
  const groups = {};
  favoriteKeys.forEach((key) => {
    const info = FAVORITES_DATA[key];
    const type = info ? info.type : "Other";
    if (!groups[type]) groups[type] = [];
    groups[type].push(key);
  });

  // Render known groups first in preferred order, then any leftover types.
  const orderedTypes = [
    ...FAV_GROUP_ORDER.filter((t) => groups[t]),
    ...Object.keys(groups).filter((t) => !FAV_GROUP_ORDER.includes(t)),
  ];

  container.innerHTML = orderedTypes
    .map((type) => buildGroup(type, groups[type]))
    .join("");

  // Wire up the remove ("x") buttons for each rendered favorite.
  container.querySelectorAll(".fav-remove-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".fav-item");
      if (!item) return;
      const key = item.getAttribute("data-fav-key");
      if (!key) return;

      toggleFavorite(key); // key is currently saved, so this removes it
      renderFavorites(); // re-render so groups/counts/empty-state stay accurate
    });
  });
}

document.addEventListener("DOMContentLoaded", renderFavorites);
