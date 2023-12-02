'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2b771173e18da62135b3a0dd57b89c48",
"index.html": "1892b9714fb163cf35f925c0a9e1cf0b",
"/": "1892b9714fb163cf35f925c0a9e1cf0b",
"main.dart.js": "1bcb75e2fbede8521728b6ef3e983dd6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "831256f7f299e307b25a16937fbd675e",
"icons/favicon.ico": "f58885b6fdf94d414e016605181dca2f",
"icons/apple-touch-icon.png": "c8617758fe346f3d29e1a794b6b0877c",
"icons/icon-192.png": "4063a9f6bea09478aadb4b38c70e452e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon-192-maskable.png": "0051eadc7f47c9747f476ba253faa50d",
"icons/icon-512-maskable.png": "2ff53329aec417cbb2710127de852de6",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "831256f7f299e307b25a16937fbd675e",
"manifest.json": "2445751f5dc56b135e933772ad11abc4",
"assets/AssetManifest.json": "1415f43ca87254950adb141615b10949",
"assets/NOTICES": "8184b3dc703efb78d406c0a93307459c",
"assets/FontManifest.json": "29edc43963ae2339d887495c0cf2354b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "206fb77a61f37876e6e9db1d629b5cbf",
"assets/fonts/MaterialIcons-Regular.otf": "e46bf21da1116ee030c6e6008b77f722",
"assets/assets/l10n/app_fr.arb": "59b534598679d72d971dee1d90669162",
"assets/assets/l10n/app_en.arb": "624dbc16292ce7ba231c37a54b120784",
"assets/assets/l10n/app_ar.arb": "987ae4e0f6c7d6edd051e1462744e704",
"assets/assets/images/paper.png": "789cb834c2e6b538b79c15fd4d332f9e",
"assets/assets/images/metal.png": "1673b2606c2afe2d4a4ec1b09045cf06",
"assets/assets/images/plastic.png": "d3d78a98a62b346463d40fca750f40f4",
"assets/assets/images/unknown.png": "8b95ffd19b2a8a310dbe2e7e867b9363",
"assets/assets/images/dz.png": "dc2d10ab8065685e8d4d9e7a273544c1",
"assets/assets/images/fr.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/images/heart.png": "ffb840383f7b654bbc26ed80e5fcb0fe",
"assets/assets/images/logo.png": "6a3e07b9a61bdad846741d1d30fcf646",
"assets/assets/images/tooth.png": "dad74a1a9a726f5d41038854c8c6f739",
"assets/assets/images/head.png": "36a2e0706fb3539a76eb9508552c5b5a",
"assets/assets/images/eye.png": "f38eaa3cfe82c8a9b716f899b34681da",
"assets/assets/images/phone.jpg": "1e4828ce1db13c17c657ebe5cf0fa9b0",
"assets/assets/images/uk.png": "d966049ffec1fe114599bdeda83dcbdd",
"assets/assets/images/organic.png": "b2103bd095c15ac1733e24a5a159241e",
"assets/assets/images/trash.png": "dc8c0bcab3aee8d9dea69c3e315dd2d1",
"assets/assets/images/glass.png": "43709f94e37032e29bbe0545c177de8d",
"assets/assets/images/truck.png": "fab4c93803032fddeed3e0e95c39c25a",
"assets/assets/images/google.png": "025ad994a64bcc2ce7496823f25180bc",
"assets/assets/images/facebook.png": "af38f1c3129272023c3b1b4be03cfaef",
"assets/assets/images/logo.svg": "e9066dd8e8c40190c31c5b957cdb1c01",
"assets/assets/images/auth-bg.jpeg": "6749db79255a9d8a044cda39eed9f950",
"assets/assets/images/onboarding/onboarding1.png": "890435af0e60c46e079f44094a543601",
"assets/assets/images/onboarding/onboarding3.png": "4b4eb53e6a7c0440503548c9dfe9a234",
"assets/assets/images/onboarding/onboarding2.png": "e006c9ad17880b83f4a5a8c453766c49",
"assets/assets/images/onboarding/onboarding4.png": "c9a89b0f49a620bccf60d172d430b264",
"assets/assets/images/bg.jpg": "f01367cb96301a73c5577f0016a5673f",
"assets/assets/fonts/ProductSans-Regular.otf": "e53952cdac3f3259b71d76a9accc7d5f",
"assets/assets/fonts/ProductSans-Bold.otf": "93da2096a9811cc1e87e8409234a3357",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
