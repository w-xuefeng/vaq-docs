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
    "revision": "d81e28a52367a9bef3e16f2db3946ab5"
  },
  {
    "url": "assets/css/0.styles.b53fa652.css",
    "revision": "caae2bb935122f907e3f6b07b7a958c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b14d58f1.js",
    "revision": "67db7d78d16e960b897118d12222ce9a"
  },
  {
    "url": "assets/js/11.cf78cbca.js",
    "revision": "13f7bba354ec4f5411fa52a91ede08c4"
  },
  {
    "url": "assets/js/12.05b4d9d9.js",
    "revision": "25ddb0fc80583365010fde0e3046d17c"
  },
  {
    "url": "assets/js/13.eaa78209.js",
    "revision": "26306bbe2f896c456f50ac4b28f01934"
  },
  {
    "url": "assets/js/14.0b906534.js",
    "revision": "8e2fc5a70f4d070e6b3f88eab4afc00d"
  },
  {
    "url": "assets/js/15.f8399ed4.js",
    "revision": "b4159f04e72492b7eb416d7fa0fa8bcd"
  },
  {
    "url": "assets/js/16.be555a69.js",
    "revision": "49ac3095088a3aa2569e888bfc1207de"
  },
  {
    "url": "assets/js/17.b08dcd8c.js",
    "revision": "df5988f888fa2f9cc7911c0934c44f11"
  },
  {
    "url": "assets/js/18.bf465dc8.js",
    "revision": "936c3015ee7dcee6f2af1485e2b1fea9"
  },
  {
    "url": "assets/js/19.cc49e245.js",
    "revision": "ef913d33bd8f5e750eddd7b16a69cd47"
  },
  {
    "url": "assets/js/20.ff4d9b30.js",
    "revision": "57a2cdf4dd56754d67e6dae6a4f55706"
  },
  {
    "url": "assets/js/21.c7a19918.js",
    "revision": "617734ce8599ad5915f2adb9b7febf89"
  },
  {
    "url": "assets/js/22.46c002cc.js",
    "revision": "f95cca90dc3ec9f17dec89f66d122960"
  },
  {
    "url": "assets/js/23.4c235189.js",
    "revision": "62f96c68b72146ac424ce073c93c18a2"
  },
  {
    "url": "assets/js/24.da4fb90b.js",
    "revision": "d120b2c47698f9298e04cbe821eb6d98"
  },
  {
    "url": "assets/js/25.970d2c01.js",
    "revision": "8afde8f3f41fd8388d5c618b557bed94"
  },
  {
    "url": "assets/js/26.6a681f48.js",
    "revision": "b8a1c9fda2f19a5779813d24f964d370"
  },
  {
    "url": "assets/js/3.c644990e.js",
    "revision": "56834a890c7d48446c4af05b0a9d6b59"
  },
  {
    "url": "assets/js/4.9aee33ef.js",
    "revision": "751aed183b932930240a8c4db08919b1"
  },
  {
    "url": "assets/js/5.38ab55bf.js",
    "revision": "4a4e8bf14bf36a892b3540f18bb49cbc"
  },
  {
    "url": "assets/js/6.041f62c2.js",
    "revision": "c0ee76dff0f0f2d37f017dd4a908f512"
  },
  {
    "url": "assets/js/7.3c083d4d.js",
    "revision": "04eefdd700bf4a03ae145e4faf7522b4"
  },
  {
    "url": "assets/js/8.f0c855a6.js",
    "revision": "5e9f8a5a6349e6777ec70b4605a76800"
  },
  {
    "url": "assets/js/9.33122c6f.js",
    "revision": "49a1faaabf5b466236defe48cc1d4e9f"
  },
  {
    "url": "assets/js/app.cef2d4bb.js",
    "revision": "56c6d64520a7aa16bbe006095c666d87"
  },
  {
    "url": "assets/js/vendors~flowchart.8618d281.js",
    "revision": "2c6d0df2c6bfa6303c57bec10f07baf3"
  },
  {
    "url": "config/index.html",
    "revision": "39a7253242ab93691cff35917f2d45cc"
  },
  {
    "url": "guide/assets.html",
    "revision": "515e81435121051885d671dd3af1d6cc"
  },
  {
    "url": "guide/build-package.html",
    "revision": "d1a69938c644b23035347673f1e14140"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "80a229e98bcd63e0c81dc5d9bbb702e4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5f741d3a9739d63ac7826fb2cbc757dd"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "6bb1954c1f70cd478ba5424d879ed534"
  },
  {
    "url": "guide/index.html",
    "revision": "9e77152de5818c94f709a9b096c567df"
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
    "url": "index.html",
    "revision": "9cc3d9c2140223a76d4f7e3fab60957e"
  },
  {
    "url": "zh/config/index.html",
    "revision": "dd30981b7e3923311fbead9df10d578d"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3485e887d608743340237d1f814d03eb"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "a79ca323bec9e4f44c689e90c7c1545f"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "25c2c0c5863e6dcaa7d781fd8251e389"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9f3eca2b4f2ef1ea614d5e02333eb18c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "2fcc2faeaa423b8b99f5908402757fbf"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c3e40b1a7813d59f807769c0438036a0"
  },
  {
    "url": "zh/index.html",
    "revision": "cb6f24cbd8c20681e9eacd3cca78d3f6"
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
