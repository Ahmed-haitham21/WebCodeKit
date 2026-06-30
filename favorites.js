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
  updateFavNavBadge();
  return favorites.includes(key);
}

// ===== NAVBAR BADGE =====
// Shows the total favorites count on the heart icon in the navbar.
function updateFavNavBadge() {
  const count = getFavorites().length;
  let badge = document.getElementById("fav-nav-badge");

  const navLink = document.querySelector(".nav-fav-link");
  if (!navLink) return;

  if (count === 0) {
    if (badge) badge.remove();
    return;
  }

  if (!badge) {
    badge = document.createElement("span");
    badge.id = "fav-nav-badge";
    badge.className = "fav-nav-badge";
    navLink.appendChild(badge);
  }
  badge.textContent = count > 99 ? "99+" : count;
}

// ===== TOAST NOTIFICATION =====
function showFavToast(message, type) {
  // Use shared showToast if available (utils.js), otherwise create our own
  if (typeof showToast === "function") {
    showToast(message, type);
    return;
  }
  let toast = document.getElementById("fav-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "fav-toast";
    toast.className = "fav-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = "fav-toast fav-toast-" + type + " visible";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("visible"), 2500);
}

// Sync every .fav-btn on the page with localStorage state, and wire up clicks.
document.addEventListener("DOMContentLoaded", function () {
  // Set initial badge count
  updateFavNavBadge();

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
      event.preventDefault();
      event.stopPropagation();

      const nowActive = toggleFavorite(key);
      btn.classList.toggle("active", nowActive);
      if (icon) {
        icon.className = nowActive ? "fas fa-heart" : "far fa-heart";
      }

      // Show toast feedback
      if (nowActive) {
        showFavToast("Added to favorites ❤️", "success");
      } else {
        showFavToast("Removed from favorites", "info");
      }
    });
  });
});
