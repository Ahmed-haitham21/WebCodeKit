// ===== WebCodeKit Favorites Page Renderer =====
// Reads the saved favorite keys (via favorites.js helpers) and the
// display data (via favorites-data.js), then renders them grouped by
// type into #favoritesContainer. Relies on favorites-data.js and
// favorites.js being loaded first.

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("favoritesContainer");
  if (!container) return;

  renderFavorites();

  function renderFavorites() {
    const keys = getFavorites();

    if (!keys.length) {
      container.innerHTML = `
        <div class="empty-favorites">
          <i class="far fa-heart"></i>
          <h2>No favorites yet</h2>
          <p>Tap the heart icon on any button, card, form, or system to save it here.</p>
          <a href="buttons.html" class="browse-btn">Browse Components</a>
        </div>
      `;
      return;
    }

    // Group keys by their type, skipping any stale keys with no data entry.
    const groups = {};
    keys.forEach((key) => {
      const data = FAVORITES_DATA[key];
      if (!data) return;
      if (!groups[data.type]) groups[data.type] = [];
      groups[data.type].push({ key, ...data });
    });

    const typeOrder = ["Button", "Card", "Form", "System"];
    const typeIcon = {
      Button: "fa-square",
      Card: "fa-id-card",
      Form: "fa-wpforms",
      System: "fa-layer-group",
    };

    const orderedTypes = Object.keys(groups).sort(
      (a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b),
    );

    if (!orderedTypes.length) {
      container.innerHTML = `
        <div class="empty-favorites">
          <i class="far fa-heart"></i>
          <h2>No favorites yet</h2>
          <p>Tap the heart icon on any button, card, form, or system to save it here.</p>
          <a href="buttons.html" class="browse-btn">Browse Components</a>
        </div>
      `;
      return;
    }

    container.innerHTML = orderedTypes
      .map((type) => {
        const items = groups[type];
        const icon = typeIcon[type] || "fa-heart";
        return `
          <div class="fav-group">
            <h2>
              <i class="fas ${icon}"></i>
              ${type}s
              <span class="fav-count">${items.length}</span>
            </h2>
            <div class="fav-grid">
              ${items.map((item) => renderItem(item)).join("")}
            </div>
          </div>
        `;
      })
      .join("");

    // Wire up remove buttons.
    container.querySelectorAll(".fav-remove-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-fav");
        toggleFavorite(key);
        renderFavorites();
      });
    });
  }

  function renderItem(item) {
    return `
      <div class="fav-item">
        <span class="fav-item-name">${escapeHtml(item.name)}</span>
        <div class="fav-item-actions">
          <a href="${item.page}" class="fav-view-btn">View <i class="fas fa-arrow-right"></i></a>
          <button class="fav-remove-btn" data-fav="${item.key}" title="Remove from favorites">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
});
