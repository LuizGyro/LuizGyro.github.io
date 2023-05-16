'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b4e4b670c2fb1277134d4558ea440e73",
"assets/assets/icons/404.svg": "efdd79ea204f8e9e7985687100331eff",
"assets/assets/icons/arrow_after.svg": "3ecb63cf844a9112b8140eaa291c4595",
"assets/assets/icons/arrow_back.svg": "3c81ee79985d2c8517cbf9c6d9cea7e1",
"assets/assets/icons/arrow_before.svg": "490a3691a17a5d1a0e7cc6da0cf0f661",
"assets/assets/icons/arrow_next_down.svg": "0760be04525f7e00c133c112f06c03fd",
"assets/assets/icons/arrow_next_up.svg": "8ceb672fb266e8773759ff0b9c967024",
"assets/assets/icons/cabins_addphoto.svg": "85837872ea0dad9720c6f6c5a1971c88",
"assets/assets/icons/cabin_add_promotionalvalue.svg": "a892f04eec94b6143c31976e767be365",
"assets/assets/icons/cabin_search.svg": "c0a77cdaa198aaf015cfa0bdc1090095",
"assets/assets/icons/cabin_treehouse.svg": "e47b5821601613fc901a51b80e1897c9",
"assets/assets/icons/chat_arrowback.svg": "2156aa03ce2abe050e2b4bd79df77188",
"assets/assets/icons/chat_checkin.svg": "de384f9681db559cc987b0bef650be1d",
"assets/assets/icons/chat_checkout.svg": "dcd4c9c773c0413c241e20d24b17ea96",
"assets/assets/icons/chat_microphone.svg": "281ca895eda086660db4fa2b15d68ba5",
"assets/assets/icons/chat_paperclip.svg": "0ee835ae175bf3d4e731b7ec7f219b77",
"assets/assets/icons/chat_smile.svg": "d8d1bfb7c128af1044be7ef938632380",
"assets/assets/icons/client_cadastro_card.svg": "22637092fc5c2a1b1a73f7607c4e07cd",
"assets/assets/icons/client_cadastro_pj.svg": "2de976661f1b78e56963490f53a9ecec",
"assets/assets/icons/delete_garbage.svg": "d715289525cc11edcda8332a11e3c331",
"assets/assets/icons/drag_handle.svg": "29d2a39eae53070dc529be989591cefc",
"assets/assets/icons/edit_pencil.svg": "0fe170d85827dec4b0151ca4dc112743",
"assets/assets/icons/extras_no.svg": "8abd7e96841f8f5aac34a2f33645bf95",
"assets/assets/icons/extras_yes.svg": "6a2fee3047cbd7425c3ae13bcc120e30",
"assets/assets/icons/filter_boxview.svg": "5696d6e29359ffc99c8e0a2803d700ec",
"assets/assets/icons/filter_listview.svg": "19348bca82f5a67509e6d7cccff30829",
"assets/assets/icons/financeiro_boleto.svg": "7fb64d4c9026eb527b873b3731e638a4",
"assets/assets/icons/financeiro_creditcard.svg": "04487ab66ac4a90d9b4873c28b87c200",
"assets/assets/icons/financeiro_export.svg": "f18cf0c69b50bd8196624c3dc49221f2",
"assets/assets/icons/financeiro_pix.svg": "9e2b62892f4f2d18d7cbd13cfe507f3a",
"assets/assets/icons/financeiro_print.svg": "437e0db6c0c46e0f74d08c3c8d61f302",
"assets/assets/icons/financeiro_status_complete.svg": "f003b9b0cf867946372361c8f1ab2f71",
"assets/assets/icons/financeiro_status_loss.svg": "6f38d4c830977796f6a3b789200c2830",
"assets/assets/icons/financeiro_status_pending.svg": "f9e7bcb58d0809e248922024dbb186e6",
"assets/assets/icons/header_chat(antigo).svg": "c5d3cb6c7a46920f483938f514b3fea8",
"assets/assets/icons/header_chat.svg": "2fa56b682cd40d5b8b9fc1eae749cf22",
"assets/assets/icons/header_menu.svg": "8e78c477dcc482f5aaf03b08f9eb8a08",
"assets/assets/icons/infobox_bed.svg": "41aba64488d0c295086ebf48b690f6d5",
"assets/assets/icons/infobox_cash.svg": "5f0b17ea6080a0ca790b479bff0b7002",
"assets/assets/icons/infobox_receptionbell.svg": "e6cc74120705080b10d2d087389a3148",
"assets/assets/icons/infobox_withdraw(not%2520used).svg": "fff37a7edd6042d77a80a27e24fbf2af",
"assets/assets/icons/infobox_withdraw.svg": "63430ab4241b95457cfa3a717c7e928e",
"assets/assets/icons/login_person.svg": "29789505ffbeb46eb1b684cd50dab810",
"assets/assets/icons/menu_cabin.svg": "781907efa0fcf53c3c21d93b50701e71",
"assets/assets/icons/menu_client.svg": "dd48e90fe84117d0763956aa87f295af",
"assets/assets/icons/menu_config.svg": "7d02ae98d78c84eb083dd6a06abef605",
"assets/assets/icons/menu_cupons.svg": "85ddc3ea4c9c432979ed816aa89c78ba",
"assets/assets/icons/menu_dashboard.svg": "ecaabf13ef6c2457e2417b54fb61dc89",
"assets/assets/icons/menu_financeiro.svg": "827e249b515e8b68f6ff9c68669d2946",
"assets/assets/icons/menu_marketing.svg": "df7d722a63e680fc05ae6ab836401420",
"assets/assets/icons/menu_profile.svg": "0bf1f3c3d39ec32a4ee48e52280c2169",
"assets/assets/icons/menu_reservations.svg": "da372d24505918d11cae88d03385ba8e",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_terceirizados.svg": "1fea9cef1a1c3dd7394e12d137756df4",
"assets/assets/icons/modal_pencil.svg": "0514c2f40eacbd12f1dbb7d6746d828a",
"assets/assets/icons/money_down.svg": "a4638e2cb03c745f8876af8bec7efcb3",
"assets/assets/icons/money_up.svg": "e144af6a34083c9586bcb0594c78b67e",
"assets/assets/icons/plus_add_new_service.svg": "8d5a640202eaaa079fdee1e09c5971c9",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/images/38974508cadb294a775d52a31c17696f.jpg": "85fdd37823da0066e82ddebcf6493e58",
"assets/assets/images/cabana_collina.jpg": "37d3c1e4850de46ffce2f612050ee2e5",
"assets/assets/images/cabana_collina_micro.png": "f9c9af13b77b6dcc7a061f00d0de14d4",
"assets/assets/images/cabana_valle.jpg": "bc66ab20c2844e7fbc0563ce3ab1f8d5",
"assets/assets/images/cabana_valle_micro.png": "6678d1906d993415fdd49781f4572914",
"assets/assets/images/chat_bg.png": "7be9695c07514e595e5beaa573498d1c",
"assets/assets/images/chat_bg2.png": "b4f84873d9b34148faf35212817c5c95",
"assets/assets/images/logo.png": "25a41eb17d3a7246ffa5f0300dc2b734",
"assets/assets/images/logo.rar": "317068f7b710155a86b8e779af90030d",
"assets/assets/images/profile_pic.png": "affed251c62b3b34a5719d31da0f89e2",
"assets/assets/images/profile_pic_luiz.png": "c01b1b5439e168e84d58a1f336a77ff8",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "56147b2b2edb0fb33cfd60d6b47d7f9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "e9e0d5f097bd5ef4fb6458fce4ae8562",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "665436c5af06a51ae9360af651a8065a",
"icons/Icon-512.png": "e85821ed064ee1b25b9b4e052f37f5f2",
"icons/Icon-maskable-192.png": "665436c5af06a51ae9360af651a8065a",
"icons/Icon-maskable-512.png": "e85821ed064ee1b25b9b4e052f37f5f2",
"index.html": "01474a682b787daaf541a892b1ced626",
"/": "01474a682b787daaf541a892b1ced626",
"main.dart.js": "704ee95f560e4fd04d95b03b71d4b1cb",
"manifest.json": "fd52bf628f7083d6dae36e8a6495dfbb",
"version.json": "e9eb58db72d407be27e9fa052224c304"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
