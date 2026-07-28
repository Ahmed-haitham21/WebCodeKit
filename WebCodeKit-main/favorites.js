// ===== WebCodeKit Favorites (localStorage) =====
// Shared across buttons.html, cards.html, forms.html, systems.html.
// Each favorite is stored as a key like "btn-1", "card-12", "form-login",
// "system-7" inside a single localStorage array under FAV_STORAGE_KEY.

const FAV_STORAGE_KEY = "webcodekit_favorites";

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAV_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to read favorites:", err);
    return [];
  }
}

function saveFavorites(list) {
  try {
    localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to save favorites:", err);
  }
}

function isFavorite(key) {
  return getFavorites().includes(key);
}

function toggleFavorite(key) {
  const favorites = getFavorites();
  const index = favorites.indexOf(key);
  if (index === -1) {
    favorites.push(key);
  } else {
    favorites.splice(index, 1);
  }
  saveFavorites(favorites);
  return favorites.includes(key);
}

// Sync every .fav-btn on the page with localStorage state, and wire up clicks.
document.addEventListener("DOMContentLoaded", function () {
  const favButtons = document.querySelectorAll(".fav-btn");

  favButtons.forEach((btn) => {
    const key = btn.getAttribute("data-fav");
    if (!key) return;

    const icon = btn.querySelector("i");

    // Set initial visual state from storage
    if (isFavorite(key)) {
      btn.classList.add("active");
      if (icon) icon.className = "fas fa-heart";
    }

    btn.addEventListener("click", function (event) {
      // Prevent the click from triggering parent card actions
      // (e.g. opening a code modal) since the card itself is clickable
      // on some pages.
      event.preventDefault();
      event.stopPropagation();

      const nowActive = toggleFavorite(key);
      btn.classList.toggle("active", nowActive);
      if (icon) {
        icon.className = nowActive ? "fas fa-heart" : "far fa-heart";
      }
    });
  });
});
