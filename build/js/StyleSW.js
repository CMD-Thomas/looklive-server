var cacheVersion    = 1;
var ServiceWorker   = "StyleSW";
var cacheName       = ServiceWorker+"-"+cacheVersion;

console.log('started ' +ServiceWorker+ "version: "+ cacheVersion);

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                '/',
                '/styles/style.css',
                '/js/output.min.js',
                '/icons/icons.png',
                '/images/header.jpg',
                '/images/logo.png'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request)
        .then(function(response) {
        // Cache hit - return response
        if (response) {
            return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have 2 streams.
            var responseToCache = response.clone();

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
        })
    );
});
