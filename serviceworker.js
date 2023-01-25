var staticCacheName = 'pwa';

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(['.']);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then(function (response) {
        return response || fetch(event.request);
      })
  );
});
