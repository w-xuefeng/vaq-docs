/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "de4509bd0f9a1840195cf609e15e6a07"
  },
  {
    "url": "assets/css/0.styles.76f97c26.css",
    "revision": "2f27c25e4ac31cc22edb40535f2fb607"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c457d104.js",
    "revision": "e31d8b5506e8dd5e7b4cb3f2fc7ef24c"
  },
  {
    "url": "assets/js/11.b3111ddf.js",
    "revision": "1af121e92e517abd59cbea77516444b8"
  },
  {
    "url": "assets/js/12.d7cdd6b0.js",
    "revision": "502c23e3ef93ffa223c27deb70b3db99"
  },
  {
    "url": "assets/js/13.12f3da5f.js",
    "revision": "31c623c50cfcee40a2ff8320bbe750bc"
  },
  {
    "url": "assets/js/14.c48b1415.js",
    "revision": "b8ff30f5db73896d777f6bce25b878cd"
  },
  {
    "url": "assets/js/15.9c3094e2.js",
    "revision": "9ba9a3a2852c75b0538a19e86c4ce678"
  },
  {
    "url": "assets/js/16.a4cf6268.js",
    "revision": "34e52dd3a8022ad1fe31a09d3a120d4f"
  },
  {
    "url": "assets/js/17.a2572546.js",
    "revision": "c6ee9a3fc9b02ee56362e525971f78e4"
  },
  {
    "url": "assets/js/18.309be781.js",
    "revision": "f503c33077eb5ec3e2e2ca5635fc6029"
  },
  {
    "url": "assets/js/19.41a16051.js",
    "revision": "9a878475472a76389a52734d4daf7b7c"
  },
  {
    "url": "assets/js/20.a960fa34.js",
    "revision": "d2acd71ee66e2845181642d15226fe40"
  },
  {
    "url": "assets/js/21.2448f933.js",
    "revision": "ef81b91bcff6dd500f357890eb66b5b1"
  },
  {
    "url": "assets/js/22.332eb7fc.js",
    "revision": "be6a7023d055da1ac6a11a38324d77bd"
  },
  {
    "url": "assets/js/23.24a6be03.js",
    "revision": "6e2a3212572f5962e4bd39398c5bee7a"
  },
  {
    "url": "assets/js/24.b1910858.js",
    "revision": "9a540c5c78bef0653e1dbb50819ecf50"
  },
  {
    "url": "assets/js/25.458df8d8.js",
    "revision": "7ce7f6d3ff80add0264773cf99332008"
  },
  {
    "url": "assets/js/26.adf350be.js",
    "revision": "11cd61972132c1b74e60572bc45e95b1"
  },
  {
    "url": "assets/js/27.b441d0d6.js",
    "revision": "b81df3c54da52427e3440b45a6d8d60c"
  },
  {
    "url": "assets/js/28.d29d0ced.js",
    "revision": "e97556939f0326516d594cc6cb9a9ca1"
  },
  {
    "url": "assets/js/29.bebebac5.js",
    "revision": "b025dba8606d5e4dd1df8dd3ba51b68b"
  },
  {
    "url": "assets/js/30.c8a931ad.js",
    "revision": "4a7ad1ed0306b6b76fa879b3dabe44a0"
  },
  {
    "url": "assets/js/31.77e22e06.js",
    "revision": "7f8e5fb3daf7ed42bfefd1bb8d2abcc4"
  },
  {
    "url": "assets/js/32.bbf32a6d.js",
    "revision": "8dbd63e8ab43ed9ebbb87e7f9243bf8d"
  },
  {
    "url": "assets/js/33.4a40a253.js",
    "revision": "93e682bfb73076113bf3bdad21e5b77c"
  },
  {
    "url": "assets/js/4.f39ac096.js",
    "revision": "18275d960e8c97c9bd6870dae1f65c01"
  },
  {
    "url": "assets/js/5.b7d3e44e.js",
    "revision": "5fe235e49305516ba5803b06ae42fd9b"
  },
  {
    "url": "assets/js/6.01716a2d.js",
    "revision": "684b31a5452d6f6545cffcd45f1ca8e8"
  },
  {
    "url": "assets/js/7.cb38cd79.js",
    "revision": "9bf303a02e28c7a77d3dd33a62ab05de"
  },
  {
    "url": "assets/js/8.92941673.js",
    "revision": "45121e3310316b9842a76f48598cbf39"
  },
  {
    "url": "assets/js/9.03fc4603.js",
    "revision": "9ab08d2f0c1f0df6d5674644349817a5"
  },
  {
    "url": "assets/js/app.335d469e.js",
    "revision": "33b6a607801838c72d8db6630c4a1b27"
  },
  {
    "url": "assets/js/vendors~flowchart.eccf2bad.js",
    "revision": "48a682ff438e6a02922b0de94eb1853c"
  },
  {
    "url": "assets/js/vendors~notification.bc996db8.js",
    "revision": "3c4b50edf242fdcd96b03a16044bce8d"
  },
  {
    "url": "config/index.html",
    "revision": "890e2422d576e851f7e46adf39ba1000"
  },
  {
    "url": "guide/api-event.html",
    "revision": "e58a5a944f439689492797369ac0f1e2"
  },
  {
    "url": "guide/assets.html",
    "revision": "d7d6d09360b70b561161a61f04bae8f3"
  },
  {
    "url": "guide/build-package.html",
    "revision": "aac066244e6ec1c6f80b3453a72a1051"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "979e6d9d2cafd28a51d9a0b205f1e87e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7dc36916d38776f9cdee5bd121861755"
  },
  {
    "url": "guide/global-help.html",
    "revision": "dae7f17e98d73c4a8b89ba512b883d7f"
  },
  {
    "url": "guide/index.html",
    "revision": "a3a0df7beb9e78d4c9e6a583e3641c4a"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "e00f47fb9838a8ea2aea86349e42c969"
  },
  {
    "url": "guide/network-request.html",
    "revision": "e6b57bf182332ce04c1f247d7bd27f05"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/cli-input.png",
    "revision": "8a1a58b27939278263377a19df25c5c9"
  },
  {
    "url": "img/logo.png",
    "revision": "5f1e248de46dfee56be4a7e19c6f993d"
  },
  {
    "url": "img/page-index.png",
    "revision": "13963958f6ad30f001dfa431f0201a45"
  },
  {
    "url": "index.html",
    "revision": "cb06e522338b5f106b6ada12238c089c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "1d800c219796ed15bd9ff96375497619"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "922c67521ba66b46cc28e35e7ff0abae"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f5a92fe9937c47bdcf430b5f5760089d"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "0c634513bed905e871472c2fe4539783"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "aa565d82fc040020796846a2867b83d1"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "d5b95ce9a89898b34fa349b250e40c8f"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "18df131b558b157dda73f1c4eef8713d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c37f8a86e64b3d0ded7ea8fde2dd8941"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "4c2eedd1c566d72deb7ccececbc28d2d"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "68f69b6dbca694d105ac4a783480536c"
  },
  {
    "url": "zh/index.html",
    "revision": "2171c409d5f2ac8dc5427139be0a2d65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
