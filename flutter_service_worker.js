'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2b771173e18da62135b3a0dd57b89c48",
"index.html": "44804c9cbcea84b22caf30ad44e35e84",
"/": "44804c9cbcea84b22caf30ad44e35e84",
"main.dart.js": "fda92e446e58c556bf8c6d177f61ab1c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "a02ed5f826f690310fafa9155788f665",
"icons/favicon.ico": "a5ade35ef0a3313f6b5d210f0a059e66",
"icons/apple-touch-icon.png": "7e729a26acb5e6740e666ad0783380d6",
"icons/icon-192.png": "32a6eee353aff2af435ba9c2b33b51ef",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon-192-maskable.png": "82804c6df04f451093e213b54a7fa498",
"icons/icon-512-maskable.png": "a8c2b1a544c2dbfada452685fe4afea9",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "a02ed5f826f690310fafa9155788f665",
"manifest.json": "2445751f5dc56b135e933772ad11abc4",
"assets/AssetManifest.json": "3cb992c88a74aec73be63230ca3b90ae",
"assets/NOTICES": "df1db19d16dc20ed4b561c42bb37600e",
"assets/FontManifest.json": "29edc43963ae2339d887495c0cf2354b",
"assets/AssetManifest.bin.json": "e2e578e1907ddd0b04c8f957e9590af2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "aa38777a7e6c8d4fa6fdcef3bb12016b",
"assets/fonts/MaterialIcons-Regular.otf": "3c50d01988efe5dcd5af3df6f2de6602",
"assets/assets/l10n/app_fr.arb": "be0690be1a8c678db5378d8507434d7b",
"assets/assets/l10n/app_en.arb": "9c410d2080c2c147518ed77cf94c98b5",
"assets/assets/l10n/app_ar.arb": "adfa847e0ee16a844e4faf86c8762c5d",
"assets/assets/images/dashboard.png": "712ad8b15241fd5b0bd8630f981c1244",
"assets/assets/images/dz.png": "dc2d10ab8065685e8d4d9e7a273544c1",
"assets/assets/images/fr.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/images/efriliblue.png": "bc9112f48d728fbab74db0fd893a7a8f",
"assets/assets/images/phone.jpg": "1e4828ce1db13c17c657ebe5cf0fa9b0",
"assets/assets/images/uk.png": "d966049ffec1fe114599bdeda83dcbdd",
"assets/assets/images/google.png": "025ad994a64bcc2ce7496823f25180bc",
"assets/assets/images/facebook.png": "af38f1c3129272023c3b1b4be03cfaef",
"assets/assets/images/auth-bg.jpeg": "6749db79255a9d8a044cda39eed9f950",
"assets/assets/images/onboarding/onboarding1.png": "890435af0e60c46e079f44094a543601",
"assets/assets/images/onboarding/onboarding3.png": "4b4eb53e6a7c0440503548c9dfe9a234",
"assets/assets/images/onboarding/onboarding2.png": "e006c9ad17880b83f4a5a8c453766c49",
"assets/assets/images/onboarding/onboarding4.png": "c9a89b0f49a620bccf60d172d430b264",
"assets/assets/fonts/ProductSans-Regular.otf": "e53952cdac3f3259b71d76a9accc7d5f",
"assets/assets/fonts/ProductSans-Bold.otf": "93da2096a9811cc1e87e8409234a3357",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
