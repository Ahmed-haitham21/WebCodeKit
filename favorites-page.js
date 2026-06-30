/* =====================================================
   WEBCODEKIT — favorites-page.js
   Renders saved favorites in favorites.html
   Uses FAVORITES_DATA from favorites-data.js
   and getFavorites() from favorites.js
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  renderFavoritesPage();
});

function renderFavoritesPage() {
  const container = document.getElementById('favoritesContainer');
  if (!container) return;

  const saved = getFavorites(); // from favorites.js

  if (!saved || saved.length === 0) {
    container.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty-icon"><i class="fas fa-heart-crack"></i></div>
        <h2>No favorites yet</h2>
        <p>Press the <i class="fas fa-heart"></i> icon on any component to save it here.</p>
        <div class="fav-empty-links">
          <a href="buttons.html" class="fav-empty-btn"><i class="fas fa-hand-pointer"></i> Browse Buttons</a>
          <a href="cards.html"   class="fav-empty-btn"><i class="fas fa-clone"></i> Browse Cards</a>
          <a href="forms.html"   class="fav-empty-btn"><i class="fas fa-wpforms"></i> Browse Forms</a>
          <a href="systems.html" class="fav-empty-btn"><i class="fas fa-cubes"></i> Browse Systems</a>
        </div>
      </div>`;
    return;
  }

  // Group by type
  const groups = { Button: [], Card: [], Form: [], System: [], Other: [] };
  saved.forEach(key => {
    const data = (typeof FAVORITES_DATA !== 'undefined' && FAVORITES_DATA[key]) || null;
    const type = data?.type || 'Other';
    const group = groups[type] || groups.Other;
    group.push({ key, data });
  });

  const typeConfig = {
    Button: { icon: 'fa-hand-pointer', color: '#667eea', label: 'Buttons' },
    Card:   { icon: 'fa-clone',        color: '#a855f7', label: 'Cards' },
    Form:   { icon: 'fa-wpforms',      color: '#10b981', label: 'Forms' },
    System: { icon: 'fa-cubes',        color: '#f59e0b', label: 'Systems' },
    Other:  { icon: 'fa-star',         color: '#667eea', label: 'Other' },
  };

  let html = `
    <div class="fav-toolbar">
      <span class="fav-count"><i class="fas fa-heart"></i> ${saved.length} saved component${saved.length !== 1 ? 's' : ''}</span>
      <button class="fav-clear-btn" onclick="clearAllFavorites()">
        <i class="fas fa-trash"></i> Clear All
      </button>
    </div>`;

  Object.entries(groups).forEach(([type, items]) => {
    if (!items.length) return;
    const cfg = typeConfig[type];

    html += `
      <div class="fav-group">
        <div class="fav-group-header">
          <span class="fav-group-icon" style="background:${cfg.color}20;color:${cfg.color}">
            <i class="fas ${cfg.icon}"></i>
          </span>
          <span class="fav-group-label">${cfg.label}</span>
          <span class="fav-group-count">${items.length}</span>
        </div>
        <div class="fav-grid">`;

    items.forEach(({ key, data }) => {
      const name = data?.name || key;
      const page = data?.page || '#';
      const cfg2 = typeConfig[data?.type || 'Other'];

      html += `
          <div class="fav-card" data-key="${key}">
            <button class="fav-remove-btn" onclick="removeFavorite('${key}')" title="Remove from favorites">
              <i class="fas fa-times"></i>
            </button>
            <div class="fav-card-icon" style="background:${cfg2.color}20;color:${cfg2.color}">
              <i class="fas ${cfg2.icon}"></i>
            </div>
            <div class="fav-card-name">${name}</div>
            <div class="fav-card-type">${data?.type || 'Component'}</div>
            <a href="${page}" class="fav-card-link">
              <i class="fas fa-arrow-right"></i> View
            </a>
          </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

function removeFavorite(key) {
  // Use toggleFavorite from favorites.js to remove
  const favs = getFavorites();
  if (favs.includes(key)) {
    toggleFavorite(key);
  }

  // Animate card out then re-render
  const card = document.querySelector(`.fav-card[data-key="${key}"]`);
  if (card) {
    card.style.transition = 'opacity 0.3s, transform 0.3s';
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    setTimeout(() => renderFavoritesPage(), 350);
  } else {
    renderFavoritesPage();
  }
}

function clearAllFavorites() {
  if (!confirm('Remove all favorites? This cannot be undone.')) return;
  localStorage.removeItem('webcodekit_favorites');
  renderFavoritesPage();
}
