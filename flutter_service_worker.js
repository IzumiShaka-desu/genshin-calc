'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "96ec25151e143461178ae6bdaa27b896",
".git/config": "22281d2c155d30926e65ecead7e923b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "af18f7bab763430dd4c49936535a8a52",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d584254dbaabe7c865dfaac3317da205",
".git/logs/refs/heads/main": "a1d47671fab4886a5fa22d385a78efbd",
".git/logs/refs/remotes/origin/main": "7a6839bbb86c75dc2355bd42e77251bc",
".git/objects/00/d6fab1321be351a2cf40a7fde2b5d9ce6b51ea": "8be97a6ed08bcfee4e5dc9da2206a071",
".git/objects/03/9a1629bf7a3b6d8df7c7c1f9a33e03d68e91e1": "a59822091e4f3764aa8ace97aef54e5f",
".git/objects/04/481241ddba07026a3b561d0881511864c319a2": "1279d0c7e329a629fb70ffac1d0eb69e",
".git/objects/0a/cf5c11e5fb7df5185bc74111825a45d2aba9bb": "91dd9575b587173b50eff1c7f11b0a65",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/40/a10727c5fa84a9246dac854c01d484552e8c8a": "dad1cf642e164dc6a2aa44681992df4f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/90c156e8f9c55ff15083f84d8bc7bb0c7f536e": "6074a1ac19c3c7b3165273cbc79ac7a6",
".git/objects/4b/4e85753559687eecf31d6a1037801dce07ec3d": "dcce614c6a7776af074cf56761feb7e1",
".git/objects/53/d0da9b5338dd080acc67794e209eba61a6133b": "f02d9020c59cd6ee6a0a5373ff49ca1c",
".git/objects/5a/dfcf4bfe5d34e13d23f8c99cbabf0cdcea76a0": "c95fd7da4000bef1999115de07423ca2",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/e95cdf2cf5c0cfc46ab678e491331499e36d0f": "b36cc9f3dc16e5c2a7a6935830ad0df3",
".git/objects/61/849dd177308a6f4380ea7bd80bd72ca900f172": "27668bd9bc2f452a281117b733d6f596",
".git/objects/63/8960a030bb87d92d736572f8e9450d2093e77f": "b56f12013ea01e52a03392f882fdb217",
".git/objects/67/fa47b38bcfba02667b8ee5965f0ed63c19a24b": "e8507757dd02de5abaf23e5fa94f5389",
".git/objects/69/6d765624ca7716e49bf59e97ee25ba55341056": "c36771de5bb71b76156f34aa9a5b2be1",
".git/objects/6d/4de52e580c3f1af443202a067838b7a9e17173": "4af4647aa914c5e7776e4a291ede2677",
".git/objects/6e/a87dc4342e60ee01fc7767dd0eef5b2f082315": "66c5f8c25c8b1853bf869cb4deecacc6",
".git/objects/70/2eaf4b01d6302e0474cd6a534e39550ab9a5be": "48d9c7eb49dd8dbd92c6e994bbabb103",
".git/objects/74/171834e6c58dcfb360560b4abd9996c49601c2": "e56771cea713b31edd6141cab8eca0b5",
".git/objects/78/dfd5bf3730a2b5e32468195296f5b29b8ebf6d": "f1504e6b6f14f312ca1e38d49c96b97d",
".git/objects/79/800fd00c7995e51d494a224e12c8ff26c30c05": "aaec1f31de3d153db0945b634e01da54",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/ea51616d3a46685b4971c8a1695d9829bd76a5": "b9270680bafc381f37d79dbcb27dbf4d",
".git/objects/9c/47cd5a2052aa267f6fdc38ac1bf58741a4509f": "f7fe58318eb3cc42f7294c9546f69536",
".git/objects/9c/7cfb0512e8077c1e6664f2dba225a46e920199": "d425351c7ab99f3f1fafced70869dd19",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/91068c77f5ad95784d11896d15eb9a7ead5bb4": "c0dd49a6ed7b5385639ca81fe7041703",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/90593b8428d522ee01fb9f7ab817736692d21f": "ec57a7d5a3b234494960fa0287b95418",
".git/objects/c0/9c7daf7bc89040a099a76922de29845ed6b2dd": "8db42f80eebd37bc8da2170a940a03c4",
".git/objects/cd/2ad461b857e861edee746691842eb47a3e0196": "975f0932066ebfbf288df07e7ea67d96",
".git/objects/d7/71b8cec2b10c839148f6ebfb874e71c098c2a6": "25b08ed8f9a334152b36e64f6e72039a",
".git/objects/dc/26d8ba2c0bcee87eb060de4c32a30f548e6c82": "2ad52ed96a6b826b3e2f4a5a0eaa3aa9",
".git/objects/eb/e858db1fb031acf90dc6f620396747285476f4": "4433299baae9a9c7c1e9ac4349ba96b5",
".git/objects/ed/f4054a30f31a3b2068d723e7b73516fe905e1d": "55b938c7c7ce4197ca2d266b8223b314",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "63f1312a7e35a9dd1b156df6b4ca6155",
".git/refs/remotes/origin/main": "63f1312a7e35a9dd1b156df6b4ca6155",
"assets/AssetManifest.json": "1beb16041cb1a5154fbd4fdb01748dac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/gif/paimon.gif": "d15593dc77cd379092b46d693474167f",
"assets/NOTICES": "d8ce5e4c4112b5f5c5d67d124c0986bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5216ae47410e541be793f7bf28cbe48f",
"/": "5216ae47410e541be793f7bf28cbe48f",
"main.dart.js": "522cc9606223593844f043ac2db34c8d",
"manifest.json": "1c01fe835d1ff277b9e447b78487592c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
