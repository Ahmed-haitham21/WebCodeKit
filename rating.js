/* =====================================================
   WEBCODEKIT — rating.js
   Star rating system for components.
   Saves ratings in localStorage.
   ===================================================== */

(function () {
  const STORAGE_KEY = "wck_ratings";

  function getRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveRating(id, value) {
    const ratings = getRatings();
    ratings[id] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  }

  function getRating(id) {
    return getRatings()[id] || 0;
  }

  function buildStars(id, currentRating) {
    let html = `<div class="star-rating" data-id="${id}" aria-label="Rate this component">`;
    for (let i = 1; i <= 5; i++) {
      html += `<button class="star ${i <= currentRating ? 'active' : ''}" 
        data-value="${i}" 
        title="Rate ${i} star${i > 1 ? 's' : ''}"
        aria-label="${i} star${i > 1 ? 's' : ''}">
        <i class="fa${i <= currentRating ? 's' : 'r'} fa-star"></i>
      </button>`;
    }
    html += `<span class="rating-count">${currentRating > 0 ? currentRating + '/5' : ''}</span>`;
    html += `</div>`;
    return html;
  }

  function attachRatingListeners(wrapper) {
    const stars = wrapper.querySelectorAll(".star");
    const id = wrapper.getAttribute("data-id");
    const countEl = wrapper.querySelector(".rating-count");

    stars.forEach((star) => {
      // Hover preview
      star.addEventListener("mouseenter", function () {
        const val = parseInt(this.getAttribute("data-value"));
        stars.forEach((s, i) => {
          const icon = s.querySelector("i");
          icon.className = i < val ? "fas fa-star" : "far fa-star";
          s.classList.toggle("hover", i < val);
        });
      });

      // Reset on mouse leave
      wrapper.addEventListener("mouseleave", function () {
        const saved = getRating(id);
        stars.forEach((s, i) => {
          const icon = s.querySelector("i");
          icon.className = i < saved ? "fas fa-star" : "far fa-star";
          s.classList.remove("hover");
          s.classList.toggle("active", i < saved);
        });
      });

      // Click to rate
      star.addEventListener("click", function () {
        const val = parseInt(this.getAttribute("data-value"));
        saveRating(id, val);
        stars.forEach((s, i) => {
          s.classList.toggle("active", i < val);
          s.querySelector("i").className = i < val ? "fas fa-star" : "far fa-star";
        });
        if (countEl) countEl.textContent = val + "/5";

        // Animate
        this.style.transform = "scale(1.4)";
        setTimeout(() => { this.style.transform = ""; }, 300);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Inject ratings into button-item, card-item, form-card
    const items = document.querySelectorAll(".button-item, .card-item, .form-card, .system-card");
    
    items.forEach((item) => {
      // Get ID from fav-btn or data attribute
      const favBtn = item.querySelector(".fav-btn");
      const id = favBtn?.getAttribute("data-fav") || item.getAttribute("data-id") || Math.random().toString(36).slice(2);
      const ratingId = "rating_" + id;
      const current = getRating(ratingId);

      const ratingEl = document.createElement("div");
      ratingEl.innerHTML = buildStars(ratingId, current);
      const wrapper = ratingEl.querySelector(".star-rating");

      // Insert after fav-btn or at top of item
      if (favBtn) {
        favBtn.insertAdjacentElement("afterend", ratingEl.firstElementChild);
      } else {
        item.insertAdjacentElement("afterbegin", ratingEl.firstElementChild);
      }

      attachRatingListeners(item.querySelector(".star-rating"));
    });
  });
})();
