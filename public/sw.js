// let cacheData = "appData"

// self.addEventListener('install', function (event) {
//     // Perform install steps
//     event.waitUntil(
//         caches.open(cacheData)
//             .then(function (cache) {
//                 console.log('Opened cache');
//                 return cache.addAll([

//                     "https://jsonplaceholder.typicode.com/users",
//                     "index.html",
//                     "/users",
//                     "/about",
//                     "/"
//                 ]);
//             })
//     );
// });
console.log("Registered")
let cacheName = "website"

//Cache Files
let cacheFiles = [
    "./static/js/2.37a28cfc.chunk.js",
    "./static/js/main.fd13b631.chunk.js",
    "./static/css/main.e57e4dff.chunk.css",
    "./favicon.ico",
    "./manifest.json",
    "index.html",
    "/",
    "https://fcm.googleapis.com/fcm/send"
];
self.addEventListener("install", (e) => {
    self.skipWaiting();
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
        console.log("cacheFiles", cacheFiles);
        return cache.addAll(cacheFiles);
      })
    );
  });

// Activate Service Worker
self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
  });

  // Fetch Service Worker
self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
      event.respondWith(
        caches
          .match(event.request)
          .then((response) => {
            if (response) {
              // console.log(response);
              return response || fetch.response;
            }
          })
          .catch((err) => {
            console.log("err", err);
          })
      );
    }
  });
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 return fetch(event.request);
//             }
//             )
//     );
// });