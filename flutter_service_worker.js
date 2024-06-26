'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
  "assets/AssetManifest.bin": "7556377901a3b2b3638d2ea27e5796c6",
  "assets/AssetManifest.bin.json": "3d3b152d131e853dab7cbace0e3c2fa1",
  "assets/AssetManifest.json": "4c2b33bb42383f978e423179479a2467",
  "assets/assets/fonts/InterBold.ttf": "ba74cc325d5f67d0efbeda51616352db",
  "assets/assets/fonts/InterMedium.ttf": "cad1054327a25f42f2447d1829596bfe",
  "assets/assets/fonts/InterRegular.ttf": "ea5879884a95551632e9eb1bba5b2128",
  "assets/assets/fonts/PTSerifRegular.ttf": "30e6f341123ce95115a85122d239f8a0",
  "assets/assets/fonts/WorkSansItalicRegular.ttf": "12427590f82046194707b200ca953582",
  "assets/assets/fonts/WorkSansRomanBlack.ttf": "b2aba36e3bf90520d734ccf777833847",
  "assets/assets/fonts/WorkSansRomanBold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
  "assets/assets/fonts/WorkSansRomanMedium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
  "assets/assets/fonts/WorkSansRomanRegular.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
  "assets/assets/fonts/WorkSansRomanSemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
  "assets/assets/icons/bx-download.svg": "4577d7a1f6012cf41efccfaf6a30d5dc",
  "assets/assets/icons/bx-location-plus.svg": "1f501ede4698360b0d5055f29a2ad653",
  "assets/assets/icons/bxl-google.svg": "c263304be0a8a657361c387e6e1737e9",
  "assets/assets/icons/bxs-envelope.svg": "b3550f34aa960f0f0964c35b76e1b4ba",
  "assets/assets/icons/bxs-phone.svg": "6ee77a483fb2ded8b4199b5f5f5e3f5b",
  "assets/assets/icons/bx_save.svg": "fff79229865e7dc14cb0f45a79e6ba12",
  "assets/assets/icons/img_arrowdown.svg": "e21d32b6e84a4f5c425bf77825a73d74",
  "assets/assets/icons/img_arrow_left.svg": "a6a28dc0e114747e9accb6784d88ed74",
  "assets/assets/icons/img_arrow_left_black_900.svg": "d5ee3469a1c98549776cfb6d04d1c7ab",
  "assets/assets/icons/img_arrow_right.svg": "26e3b4b5558e8300c0815710a971c0dd",
  "assets/assets/icons/img_checkmark.svg": "30075c9ea35cf4118cc617cfbbc1dc28",
  "assets/assets/icons/img_depth_3_frame_1.svg": "d46f9897a3805a694fa61f92dac46941",
  "assets/assets/icons/img_depth_3_frame_2.svg": "fb33fbf3635c017745655c20481a6a28",
  "assets/assets/icons/img_depth_4_frame_0.svg": "8e416bac112574d0f58c31226526cf53",
  "assets/assets/icons/img_depth_4_frame_0_24x24.svg": "7ed57d81d553b7f51ed16a0ebe8c95a5",
  "assets/assets/icons/img_depth_4_frame_0_black_900.svg": "d036dcd1ec44706af9c5fd6605099ef2",
  "assets/assets/icons/img_depth_4_frame_0_black_900_20x29.svg": "4a2203875ad5b9a1275b40171468ea71",
  "assets/assets/icons/img_depth_4_frame_0_onprimarycontainer_1x29.svg": "34b2d1c1406f12544305402b42e68493",
  "assets/assets/icons/img_depth_4_frame_0_onprimarycontainer_24x24.svg": "f5ee1b0637712b1da7a8ca03a811cf77",
  "assets/assets/icons/img_depth_4_frame_0_onprimarycontainer_30x48.svg": "61630d0dbe35cbebd82ae750a9a8c2d2",
  "assets/assets/icons/img_depth_4_frame_0_secondarycontainer.svg": "a439b18ed459be2aa55dea054e4addea",
  "assets/assets/icons/img_depth_4_frame_0_secondarycontainer_20x29.svg": "0be9ed27697ffeabb19327baa28fa07b",
  "assets/assets/icons/img_forward.svg": "4f37aa635d07692282f8edaac088a2ab",
  "assets/assets/icons/img_frame.svg": "64b1739b898547acc53d5435382e55b4",
  "assets/assets/icons/img_frame_1.svg": "62d32fba0dccd5d35d056acbfca115ee",
  "assets/assets/icons/img_frame_2.svg": "1c891e7de53b51b178eb5d813ac79400",
  "assets/assets/icons/img_frame_24x24.svg": "705f0f26b66a784c56e1a373d5d66ede",
  "assets/assets/icons/img_frame_3.svg": "2eded4d7b7295123c28f46eb29c4b88b",
  "assets/assets/icons/img_frame_4.svg": "b95e846bc0572cd7f57201ed3be8847f",
  "assets/assets/icons/img_frame_5.svg": "5637d2303b31ee8df951f883d4f14892",
  "assets/assets/icons/img_frame_6.svg": "3d9ea5b682a88493595eb44770b861b9",
  "assets/assets/icons/img_frame_7.svg": "384a85908b24e6e8372a4f60529ce23c",
  "assets/assets/icons/img_frame_black_900.svg": "a50723ba120c4a1d0bb322923c98e8cd",
  "assets/assets/icons/img_frame_black_900_18x18.svg": "d63df60b0a812d490a30639226b699f6",
  "assets/assets/icons/img_frame_black_900_24x24.svg": "ae7da17ccf83fedb68649de4606564b9",
  "assets/assets/icons/img_frame_black_900_44x48.svg": "4f2c8eab0a1fab7bac574db1b0a765a2",
  "assets/assets/icons/img_frame_blue_gray_500.svg": "151c127b65d82821b0e6e8d8c3e6503f",
  "assets/assets/icons/img_nav_buscar.svg": "9a1eb222df624497540e62a976645943",
  "assets/assets/icons/img_nav_buscar_black_900.svg": "1eb5bf5480addaeeccb64cbb033ce270",
  "assets/assets/icons/img_nav_chat.svg": "59e568330c25cb5b589e902412160863",
  "assets/assets/icons/img_nav_contactos.svg": "db5c74411c9955ac8c3df0ac057105d4",
  "assets/assets/icons/img_nav_contrataci_n.svg": "96ea553a24a0ea2a5aebf47cf8cf0280",
  "assets/assets/icons/img_nav_detalles.svg": "888c5ce83edc3fc6653bf21eb31af868",
  "assets/assets/icons/img_nav_home.svg": "8e6953aaeb20c6b2877b9e084168d0de",
  "assets/assets/icons/img_nav_jobs.svg": "698d91d4ad6b3d45f521789b33047eb6",
  "assets/assets/icons/img_nav_mensajes.svg": "1c11e61c0103c32d4394135a09b5d3f6",
  "assets/assets/icons/img_nav_mis_datos.svg": "23be14fccc8fc90f8b2a13f05f17b5ba",
  "assets/assets/icons/img_nav_notifications.svg": "02ce3d80000f9eecb38ee1f020eb596a",
  "assets/assets/icons/img_nav_post.svg": "f28ea482327bb00e62cd9e83e10e940e",
  "assets/assets/icons/img_nav_qr.svg": "883486f818d23815e528726c70e66bd8",
  "assets/assets/icons/img_settings.svg": "fca80cceb72bc84535fc5868fc5cf256",
  "assets/assets/icons/img_user.svg": "f12dff08403c3376aa1b2fc4bdb39d27",
  "assets/assets/icons/img_user_black_900.svg": "f47f2421da003ffab1562c82fee234dc",
  "assets/assets/icons/img_user_pink_a200.svg": "e600fee5c9dbbc257d1ea3b6a7448321",
  "assets/assets/icons/redes_sociales/apple_music.svg": "8764587a14876978523490a5212f0a19",
  "assets/assets/icons/redes_sociales/facebook.svg": "1c5cbcbab7d6520d63f6a05f8743d373",
  "assets/assets/icons/redes_sociales/github.svg": "d034e91c48877eab6dc2fe130a906510",
  "assets/assets/icons/redes_sociales/gmail.svg": "3a7ad661f59f8062cf718527317841ad",
  "assets/assets/icons/redes_sociales/instagram.svg": "d20d6b891e862c6b7c8895efef6d8d74",
  "assets/assets/icons/redes_sociales/linkedin.svg": "bf6279299dca9209c74e226b60c1bf39",
  "assets/assets/icons/redes_sociales/paypal.svg": "5d6b0108034acdb21fe35457ea0fb797",
  "assets/assets/icons/redes_sociales/reddit.svg": "1a44f74e1d30481a1d6364c3a56a1f3c",
  "assets/assets/icons/redes_sociales/skype.svg": "79b2384335cf5817668b1d9c83286443",
  "assets/assets/icons/redes_sociales/spotify.svg": "be47a26d51af752d2a4970d6fd12df5a",
  "assets/assets/icons/redes_sociales/telegram.svg": "555c8c51286aff56a586f6e5479968ae",
  "assets/assets/icons/redes_sociales/tiktok.svg": "63fa5f841f30978236ff62157bcc6d68",
  "assets/assets/icons/redes_sociales/twitch.svg": "a5708aa546322f38360fc21825aadd8b",
  "assets/assets/icons/redes_sociales/twitter.svg": "d697b0e6b489c5933dd965be3e695002",
  "assets/assets/icons/redes_sociales/vsco.svg": "b2956f2d9c15a1377fad3864a5d62c20",
  "assets/assets/icons/redes_sociales/whatsapp.svg": "bc7feb8ce5b8216118d0c39128922751",
  "assets/assets/icons/redes_sociales/x.svg": "b3e42fb6f667f0f9e135efa8fcfac4b0",
  "assets/assets/icons/redes_sociales/youtube.svg": "ba4f7a908c16d130fbe202213e704fd8",
  "assets/assets/images/fondo_usuario.avif": "6628836743aea344afb40d8ed216c865",
  "assets/assets/images/house1.webp": "580827c5ea698ea97ba5f4f9b4a38ed0",
  "assets/assets/images/house2.jpg": "26017ebde5dbca293cab33ccf6ffc2de",
  "assets/assets/images/house3.jpg": "e47a5e7e49104e99ee2d9162d700ba1d",
  "assets/assets/images/house4.jpg": "865318ad77920595884e859aa2b131d1",
  "assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
  "assets/assets/images/img_depth_3_frame_0.png": "f44aee8c5cf62a09d105051d89583f17",
  "assets/assets/images/img_depth_3_frame_0_1.png": "c7d2b2dc993070981084a70f70bc3de1",
  "assets/assets/images/img_depth_3_frame_0_72x72.png": "4f260f6969b4c47bd16d013b34a5e1a4",
  "assets/assets/images/img_depth_4_frame_0_1.png": "369f2174eff6959ddd6cb6edaf8736cc",
  "assets/assets/images/img_depth_4_frame_0_173x173.png": "519381c8b2699a356b2dac872ac35d02",
  "assets/assets/images/img_depth_4_frame_0_2.png": "0777d80275589ad0a47387155d148fbf",
  "assets/assets/images/img_depth_4_frame_0_3.png": "00ad3946838a7f6204aa5d59eeafb271",
  "assets/assets/images/img_depth_5_frame_0.png": "24a01fa1e9e75c965da9935fc2d017d2",
  "assets/assets/images/img_depth_5_frame_0_128x128.png": "a71d8f317e1b7e0a8be1afbd4cc3e996",
  "assets/assets/images/img_group_11.png": "2f295230bbbcd9df9c570c317a165d89",
  "assets/assets/images/img_group_13.png": "4e1023a91a94483b87b5d8d96d4b1c2b",
  "assets/assets/images/img_grupo_2.png": "8452ba8d6c13a662190903ad55a79d34",
  "assets/assets/images/img_grupo_4.png": "39e3169f8e382170a0e51ddec07d7e11",
  "assets/assets/images/img_image_1.png": "91433abac3c1a90c6a55fae942699122",
  "assets/assets/images/img_image_2.png": "365057ea5894794a29fe7726be802156",
  "assets/assets/images/img_image_4.png": "144d74f34bc700e4a814b64fad63ea3b",
  "assets/assets/images/img_image_5.png": "89414d5986d8124a686f18c22c75f932",
  "assets/assets/images/img_ring_phone.png": "da29a9d0ae175f1a76b894b6c8c8195b",
  "assets/assets/images/marker.png": "322f14585f47711a132c6b99f8bfc61c",
  "assets/assets/images/redes_sociales/apple_music.png": "ef8a5211b2b1079dc0c9b414a36991cc",
  "assets/assets/images/redes_sociales/facebook.png": "8a5fa54a32cc78ebe1c5b1e95400c0b2",
  "assets/assets/images/redes_sociales/github.png": "a6de4407d9c9865708a35614749971c6",
  "assets/assets/images/redes_sociales/gmail.png": "371e208c222839d7ccf5d19a6d31e540",
  "assets/assets/images/redes_sociales/instagram.png": "6def5365cb813ecf84d1c2208fe2d1cd",
  "assets/assets/images/redes_sociales/linkedin.png": "797ed8284109e0db154b6647784e3739",
  "assets/assets/images/redes_sociales/paypal.png": "f7c1f55ad05c1aa3c0772cbd67c3713a",
  "assets/assets/images/redes_sociales/reddit.png": "7acf9f878b3841eccca0c3fe613e6f05",
  "assets/assets/images/redes_sociales/skype.png": "264dbdbf8c02672be5b3a62b0179431a",
  "assets/assets/images/redes_sociales/spotify.png": "234387baa4b9a4c61877651bd65e2a4f",
  "assets/assets/images/redes_sociales/telegram.png": "78007441f612eb30d25d79645eb229cc",
  "assets/assets/images/redes_sociales/tiktok.png": "8a296877dc2807f516acdd5277b30a5e",
  "assets/assets/images/redes_sociales/twitch.png": "2d3725f360b1bdf564d62eb346d62d87",
  "assets/assets/images/redes_sociales/vsco.png": "692fa341c6935b00d2f87a98dc69ef6e",
  "assets/assets/images/redes_sociales/whatsapp.png": "7c28f241c51d255f7ff6128c152ecb32",
  "assets/assets/images/redes_sociales/x.png": "f81777194afeed903bd6cd2501ee9b7a",
  "assets/assets/images/redes_sociales/youtube.png": "a8edd2abfb91b9187a6778edf0bef47f",
  "assets/assets/images/rive/loading_animation.riv": "f0f7d2510cc6cfeacd82bf543cb8b9ec",
  "assets/FontManifest.json": "7a660205e6ecef6e96c4aa186c52b36c",
  "assets/fonts/MaterialIcons-Regular.otf": "707eefc33cb52d916fc7acbc72244c25",
  "assets/NOTICES": "f81079eae6d4c7d32d75d177f846aef2",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
  "assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
  "assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
  "assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
  "canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
  "canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
  "canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
  "canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
  "canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
  "canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
  "canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
  "canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
  "canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
  "canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
  "flutter_bootstrap.js": "f7c5cf4b8bf6a0ba779f256355a78ba1",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "index.html": "0ce3a439e960a0be3d896e591fe69be1",
  "/": "0ce3a439e960a0be3d896e591fe69be1",
  "main.dart.js": "4cdf6e6fe43b8ce0f7535be45756e890",
  "manifest.json": "ffe138d9d71c456ac4b0d8d1ed4ba285",
  "version.json": "6a1b1a154f65c5034fe24fb4c5507192"
};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
  "index.html",
  "flutter_bootstrap.js",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
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
    .then((cache) => {
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
