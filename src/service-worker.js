importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

if (workbox) {

  // will be populated by workbox-cli script: injectManifest
  // precaches are defined in workbox-config.js and updated by executing the script
  workbox.precaching.precacheAndRoute(
    // @ts-ignore
    self.__WB_MANIFEST
  );

  // cache all content pages
  workbox.routing.registerRoute(
    new RegExp(/./),
    new workbox.strategies.NetworkFirst({
      cacheName: 'page-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );


  const FALLBACK_HTML_URL = '/offline.html';
  // "Warm" the page-cache with overview pages
  self.addEventListener('install', (event) => {
    const urls = [
      '/de',
      '/de/vita',
      '/de/projects',
      '/de/publications',
      '/de/talks',
      '/en',
      '/en/vita',
      '/en/projects',
      '/en/publications',
      '/en/talks',
      '/404.html',
      FALLBACK_HTML_URL
    ];
    const cacheName = 'page-cache';
    // @ts-ignore
    event.waitUntil(caches.open(cacheName)
      .then((cache) => cache.addAll(urls)));
  });



  // This "catch" handler is triggered when any of the other routes fail to
// generate a response.
  // @ts-ignore
  workbox.routing.setCatchHandler(({ event }) => {
    // The FALLBACK_URL entries must be added to the cache ahead of time, either
    // via runtime or precaching. If they are precached, then call
    // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
    // to get the response from the correct cache.
    //
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (event.request.destination) {
      case 'document':
        // If using precached URLs:
        // return matchPrecache(FALLBACK_HTML_URL);
        return caches.match(FALLBACK_HTML_URL);
        break;
      default:
        // If we don't have a fallback, just return an error response.
        return Response.error();
    }
  });


}
