/* =====================================================
   WEBCODEKIT — service-worker.js
   PWA Service Worker — makes the site work offline
   ===================================================== */

const CACHE_NAME    = 'webcodekit-v1';
const CACHE_STATIC  = 'webcodekit-static-v1';

// Files to cache immediately on install
const STATIC_FILES = [
  '/',
  '/index.html',
  '/buttons.html',
  '/cards.html',
  '/forms.html',
  '/systems.html',
  '/kits.html',
  '/favorites.html',
  '/about.html',
  '/404.html',
  '/smart-ai.html',
  '/theme-variables.min.css',
  '/navbar.min.css',
  '/modal-shared.css',
  '/search.css',
  '/buttons.min.css',
  '/cards.min.css',
  '/forms.min.css',
  '/systems.min.css',
  '/smart-ai.css',
  '/home-preview.css',
  '/buttons.js',
  '/cards.js',
  '/forms.js',
  '/systems.js',
  '/home.js',
  '/smart-ai.js',
  '/navbar.js',
  '/theme-toggle.js',
  '/favorites.js',
  '/favorites-data.js',
  '/rating.js',
  '/search.js',
  '/lang.js',
  '/utils.js',
  '/live-preview.js',
  '/color-customizer.js',
];

// Install — cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => {
      console.log('[SW] Caching static files');
      return cache.addAll(STATIC_FILES).catch((err) => {
        console.warn('[SW] Some files failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_STATIC && key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — Cache First strategy for static, Network First for API
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET and cross-origin requests
  if (event.request.method !== 'GET') return;
  if (!url.origin.includes(self.location.origin) && !url.hostname.includes('cdnjs')) return;

  // API calls — always network
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache First for everything else
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});

// Background sync for when connection returns
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-favorites') {
    console.log('[SW] Syncing favorites...');
  }
});

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  self.registration.showNotification(data.title || 'WebCodeKit', {
    body: data.body || 'New components available!',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  });
});
