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
    "revision": "74560d36353ebde4e5c64219120d08ec"
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
    "url": "assets/js/14.4592bdbb.js",
    "revision": "b533f86bbc245b3a2a2ae958ab6af523"
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
    "url": "assets/js/18.8348a6ae.js",
    "revision": "c1a2369ea7a9a5a50cd419f169b76644"
  },
  {
    "url": "assets/js/19.af9bde64.js",
    "revision": "59daef6831c6001898d6d666572fe4b0"
  },
  {
    "url": "assets/js/20.a960fa34.js",
    "revision": "d2acd71ee66e2845181642d15226fe40"
  },
  {
    "url": "assets/js/21.5c5746e7.js",
    "revision": "02a83060bc4b0f2adee14ac3b11254d4"
  },
  {
    "url": "assets/js/22.72067ed8.js",
    "revision": "8e4b971cd296a6ca2d21b74f6afd6b49"
  },
  {
    "url": "assets/js/23.55bd9285.js",
    "revision": "7dd2ce31b880328c70352034076dc227"
  },
  {
    "url": "assets/js/24.99ae502c.js",
    "revision": "a993a693078d836efc8fe625becc5048"
  },
  {
    "url": "assets/js/25.41a7ee39.js",
    "revision": "89d0146543f2d4e14d932d5ebf7479cb"
  },
  {
    "url": "assets/js/26.c75f0bca.js",
    "revision": "3353831b81da113cb286e0ce8471c696"
  },
  {
    "url": "assets/js/27.476303f0.js",
    "revision": "f735d266aaa6c472ceff252fa05f57fb"
  },
  {
    "url": "assets/js/28.a86f45ab.js",
    "revision": "1d2306d89fc6d9873c1943c0b1814446"
  },
  {
    "url": "assets/js/29.a606b9f6.js",
    "revision": "e5fd93aa2ce3a063f66d3b25d2c86167"
  },
  {
    "url": "assets/js/30.4bd1567a.js",
    "revision": "9af4bc0558861a69114e6cf14dd2ca48"
  },
  {
    "url": "assets/js/31.640199f3.js",
    "revision": "5da2502e9efe0eb4c95e75ea66b7166f"
  },
  {
    "url": "assets/js/4.f39ac096.js",
    "revision": "18275d960e8c97c9bd6870dae1f65c01"
  },
  {
    "url": "assets/js/5.15fce340.js",
    "revision": "14e3538e4f4be1d9a48e0718086eec2d"
  },
  {
    "url": "assets/js/6.3dab9da6.js",
    "revision": "65b2bac4bade4d4b4dd9914f95939528"
  },
  {
    "url": "assets/js/7.b2c62619.js",
    "revision": "919a6c9b6397756cc823716d18b54bd2"
  },
  {
    "url": "assets/js/8.92941673.js",
    "revision": "45121e3310316b9842a76f48598cbf39"
  },
  {
    "url": "assets/js/9.c0fcb0ee.js",
    "revision": "f613d46763b7e3e7353e20fcd2d69079"
  },
  {
    "url": "assets/js/app.bca3c634.js",
    "revision": "6cff6090bb875aadf55891cccff66e5d"
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
    "revision": "1e997a3ce77939a42286ab0b7d07dd60"
  },
  {
    "url": "guide/api-event.html",
    "revision": "753fd250889398da7636a681a7a09992"
  },
  {
    "url": "guide/assets.html",
    "revision": "8b607f6693bee2c48abcb855c0ddcd34"
  },
  {
    "url": "guide/build-package.html",
    "revision": "99726e854c686f6b582263f865c6fc1c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "685b1c9e440ac3576ce5b7b903d94551"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f10ea317f6eb449cae74c3ed6a0d2b38"
  },
  {
    "url": "guide/global-help.html",
    "revision": "3c8c93b17dc16ea99714aee95e892aaf"
  },
  {
    "url": "guide/index.html",
    "revision": "ad7e6cf40eba1ba0d7d23ce337562c82"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "7f84ee308817c7d4d28ad44e243a30be"
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
    "revision": "cd64cd45498a1bc787d32902e330e64f"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6bd7baf58bd686006aeb7805c58e0d35"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "d05cb996ea8a34e4b1d31785aaaf81f5"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "aae255eb1b52e924c4719a70682fe527"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "eaba8d30d923e74e9966b8aab0efc564"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "df220d57e19c25443e731ea965047051"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "17edb328269ef753d08890bcb2943b89"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "ca086fe3f1f79f3942ee500a0d3e178d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e306e0cee693dd11069d5fb44a7bfa27"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "07b85ad8e85104e30d42fa16f229cf50"
  },
  {
    "url": "zh/index.html",
    "revision": "d6415e4f794d42f5ed466fb44ecf1bc0"
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
