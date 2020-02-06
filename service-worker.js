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
    "revision": "982bf3210942cf3cefac9533dab75f59"
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
    "url": "assets/js/11.1b95621a.js",
    "revision": "3511ca660c3b14e11936ae873df86a5f"
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
    "url": "assets/js/19.5ceb1b38.js",
    "revision": "8eecb98f7b220384b262218c085c43d8"
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
    "url": "assets/js/app.26ed8ec9.js",
    "revision": "22e88a53d51b6de1b16387154742dad6"
  },
  {
    "url": "assets/js/vendors~flowchart.8618d281.js",
    "revision": "2c6d0df2c6bfa6303c57bec10f07baf3"
  },
  {
    "url": "config/index.html",
    "revision": "62438ef7a6a05a43a807eec3af69481c"
  },
  {
    "url": "guide/assets.html",
    "revision": "d5ce8253e665af1509e204802d73d7e2"
  },
  {
    "url": "guide/build-package.html",
    "revision": "d196585b3df46c6bf1b21434769a4e68"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "a301974ed0ac6a368f581fee89b2e97c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "af036da9e3f756b0851a1480c2020044"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "0d03f43415f32481a664bd41f9c1e607"
  },
  {
    "url": "guide/index.html",
    "revision": "e6082290c98365c2eda84e3a27216885"
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
    "revision": "b4bada0a77eaf98f8e04077b100d5501"
  },
  {
    "url": "zh/config/index.html",
    "revision": "bfca9327ef128e44a2cfbe5422788fc4"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f0fb6643c2ca428517f2be199b00fbf1"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "4bfb7c5d987e2e8d09c3403f163b342b"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "da5735b6a22dab9dd893a8e2a0506aeb"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "4eaba98aba609234be949014e4df7bce"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "f22e41c69b5d024b9365dae0132a3c0f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0946d428cde611a41f38d2b01a84e9c7"
  },
  {
    "url": "zh/index.html",
    "revision": "4dbc16091a6aee35c6e67d9e5349b07c"
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
