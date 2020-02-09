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
    "revision": "e6e155f3382e79ed969b75bf80cab0d5"
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
    "url": "assets/js/10.130620a8.js",
    "revision": "be3c8c63adc015c2377bffab9f2928ec"
  },
  {
    "url": "assets/js/11.bcd77b92.js",
    "revision": "21002b20f355de18578930fae32b7e36"
  },
  {
    "url": "assets/js/12.5d4c1f3c.js",
    "revision": "b3fa4a3768086960e97004bf5a164095"
  },
  {
    "url": "assets/js/13.8fabfb7a.js",
    "revision": "ea46591c124b4f4afeccc117cb6d7d1a"
  },
  {
    "url": "assets/js/14.33290e70.js",
    "revision": "de45f16c7467be1cf40045e601b62773"
  },
  {
    "url": "assets/js/15.6ce9b609.js",
    "revision": "affff1be2cac4a769380657e10d50b9e"
  },
  {
    "url": "assets/js/16.7dcb7ba5.js",
    "revision": "982554ba386226cb5cd96f14dddba8af"
  },
  {
    "url": "assets/js/17.5c722c4d.js",
    "revision": "fe853b4e87211a9956199ba650b64ba1"
  },
  {
    "url": "assets/js/18.ff9ebd4f.js",
    "revision": "43d011ceacd501e02ac8e72d39e24631"
  },
  {
    "url": "assets/js/19.77a33f58.js",
    "revision": "7c9994a0c333ec706e983e20a0d67690"
  },
  {
    "url": "assets/js/20.edc0be40.js",
    "revision": "efb9831cb32fca0977931f090b0b8488"
  },
  {
    "url": "assets/js/21.f03ea933.js",
    "revision": "90101b40d6ca3e974b6fe28a27ebdbb8"
  },
  {
    "url": "assets/js/22.b50b099d.js",
    "revision": "a32c554ffc71637a6b4445de77b864b2"
  },
  {
    "url": "assets/js/23.2f518281.js",
    "revision": "d70d0e4f0c22b22fc7e79080596f635a"
  },
  {
    "url": "assets/js/24.4e96792d.js",
    "revision": "d2f49157dc0cc065b8f794d278a7bf4a"
  },
  {
    "url": "assets/js/25.5c5e148d.js",
    "revision": "4f7785af1486eee3dc392a599bcdc96a"
  },
  {
    "url": "assets/js/26.b62b791c.js",
    "revision": "c68e4215d6d801cba09e235dd86b2ec3"
  },
  {
    "url": "assets/js/27.7808f39e.js",
    "revision": "152da993e1a55250513169134c59c922"
  },
  {
    "url": "assets/js/28.73177fcb.js",
    "revision": "6173e3e3c6d32d49f8e80dc37512a79b"
  },
  {
    "url": "assets/js/29.466c18fc.js",
    "revision": "59c4cd4b4c78052edff20e2ffc0ed8ce"
  },
  {
    "url": "assets/js/3.41a9a706.js",
    "revision": "7351ee85e4618348aa1de0536f8ede21"
  },
  {
    "url": "assets/js/30.92d0c221.js",
    "revision": "bb3e9b0b3685a828cb527ec10871f5e2"
  },
  {
    "url": "assets/js/4.3720a336.js",
    "revision": "4e2248708f28f6abd8aca881e88502fd"
  },
  {
    "url": "assets/js/5.10f32708.js",
    "revision": "bfd87aacd93edb856e3ce2e9037159c6"
  },
  {
    "url": "assets/js/6.dde546b1.js",
    "revision": "acc90214fa4bff8e801da6a18e374ecb"
  },
  {
    "url": "assets/js/7.90d179b0.js",
    "revision": "2b7edff9d38bec3d758e447793b4285d"
  },
  {
    "url": "assets/js/8.103a4474.js",
    "revision": "f279693459a440e9457dd8ca2dcd95ac"
  },
  {
    "url": "assets/js/9.cb6bce5a.js",
    "revision": "8073bcb2e6a7309c2d84a19de9a16cb5"
  },
  {
    "url": "assets/js/app.fa47c557.js",
    "revision": "a91abe635cd8236df56d9043ddebbce1"
  },
  {
    "url": "assets/js/vendors~flowchart.2cdfb696.js",
    "revision": "363d61c3f22c6f6d127476a7b7f12b8a"
  },
  {
    "url": "config/index.html",
    "revision": "7301fe02b013867c88b08b57d8a049e9"
  },
  {
    "url": "guide/api-event.html",
    "revision": "ed8e48cfc12d69087579587b0124ed18"
  },
  {
    "url": "guide/assets.html",
    "revision": "6e265de89143aa9726d721e87fd31317"
  },
  {
    "url": "guide/build-package.html",
    "revision": "d2c437eaa9103c01497831e7e1a81ae8"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ccb7a184296e854f1561a2ca3050277a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e510886f91ab23bba95a7c266024d9da"
  },
  {
    "url": "guide/global-help.html",
    "revision": "f436c2986c945119f0495900c8034e8e"
  },
  {
    "url": "guide/index.html",
    "revision": "2920cf36698b254c44916125ddb385ad"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "747c221d7bfaf81b4ef44fe2d8dbbb7f"
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
    "revision": "ba5d6569a3dbec0ae44d7fe0874ef404"
  },
  {
    "url": "zh/config/index.html",
    "revision": "a682fa6b6667705b4f9c7e769d4915cc"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "24b3b4d104ebb764f67530b082e3cdf8"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a8c2c09ffd06c71a9b540c216f747b58"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "6caaeb815c3bf4b44fba00f4312d701e"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "42d09e89e5b7397b17bdc0dd0697bb7f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6dae228095dd4eede11d82081de83116"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "0223c2a0fdd428631e72d55b2a0c1a3b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "80a9f1eff8fc0c0baeddfe95346da540"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "caaea38ffe1a35c0c698dbcafccc3d87"
  },
  {
    "url": "zh/index.html",
    "revision": "41c62e78929530b495a590be88425d9c"
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
