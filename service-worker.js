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
    "revision": "6f1f044c2a876825afb7545766628dd6"
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
    "url": "assets/js/13.10b14baa.js",
    "revision": "915ad04e9cdaaf20aacb0f85387ae75e"
  },
  {
    "url": "assets/js/14.fbd22160.js",
    "revision": "318f26c186ecc9b1f5279c477de92e92"
  },
  {
    "url": "assets/js/15.3ff11a29.js",
    "revision": "776fb0b7f4947f0a56a48e6fb5b4933f"
  },
  {
    "url": "assets/js/16.2ae5275c.js",
    "revision": "0200bd85c5ff51d849137d064a5a731b"
  },
  {
    "url": "assets/js/17.9edc8e33.js",
    "revision": "c67ec406e455adb142dbb410ab6632ee"
  },
  {
    "url": "assets/js/18.34be4a13.js",
    "revision": "cee05968e2674cfdd0c35be8ecbd4aa5"
  },
  {
    "url": "assets/js/19.97ddf958.js",
    "revision": "4fb03a6adc30ad678aada820942b5919"
  },
  {
    "url": "assets/js/20.91ce7056.js",
    "revision": "89e6c527841d67306499adfb7b5830e7"
  },
  {
    "url": "assets/js/21.2a2952c0.js",
    "revision": "c42ba7cf1aa9224a5045227fc753c707"
  },
  {
    "url": "assets/js/22.a850ab2b.js",
    "revision": "ec8fe7fd128450fa71fccec5361df352"
  },
  {
    "url": "assets/js/23.8dda8738.js",
    "revision": "c2ad7a49f797f0be3402bc52330662b6"
  },
  {
    "url": "assets/js/24.3b6510bc.js",
    "revision": "715ef9bab8ffd0c09f26908d967c0330"
  },
  {
    "url": "assets/js/25.eed8b19d.js",
    "revision": "33662d4b384ca7f2660fb3a673533962"
  },
  {
    "url": "assets/js/26.e91091b3.js",
    "revision": "1b8cf3acfd889279a6acc81f79042746"
  },
  {
    "url": "assets/js/3.41a9a706.js",
    "revision": "7351ee85e4618348aa1de0536f8ede21"
  },
  {
    "url": "assets/js/4.b0ce9e66.js",
    "revision": "8fd4db79299d49f425348ea90a4c309f"
  },
  {
    "url": "assets/js/5.3d3491f0.js",
    "revision": "614028da26031d5674a177529b876b37"
  },
  {
    "url": "assets/js/6.973d742a.js",
    "revision": "b711b199127eda8d0ea7fd70a9c6aab2"
  },
  {
    "url": "assets/js/7.90d179b0.js",
    "revision": "2b7edff9d38bec3d758e447793b4285d"
  },
  {
    "url": "assets/js/8.37d14e24.js",
    "revision": "2423fcbdd25c53b6c373b3e7cc73c7a7"
  },
  {
    "url": "assets/js/9.cb6bce5a.js",
    "revision": "8073bcb2e6a7309c2d84a19de9a16cb5"
  },
  {
    "url": "assets/js/app.3451b8c8.js",
    "revision": "62d639724af6e4aed9857f45676cb71f"
  },
  {
    "url": "assets/js/vendors~flowchart.2cdfb696.js",
    "revision": "363d61c3f22c6f6d127476a7b7f12b8a"
  },
  {
    "url": "config/index.html",
    "revision": "667c79f7368b905bbd8f6778f653eea6"
  },
  {
    "url": "guide/assets.html",
    "revision": "285d751af4a8ff6e310871dbc972a535"
  },
  {
    "url": "guide/build-package.html",
    "revision": "a8ddd2e3cb0228a1fc2d0e2892856eed"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "d68f1aa3faa7b1a33ef67b16127b5e00"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d31bde69940a393a91b761ba655c0fed"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "d57e20d25890662b41c70e45c5d045d9"
  },
  {
    "url": "guide/index.html",
    "revision": "220ba17e097a18018d7d1fa123a1012d"
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
    "revision": "0969e997dd4c875fc2e5b3d298ecfb8a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "18748104092ca5cfe2094a01128ae5ba"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "bd3eea38591161feca81b015a37efea3"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "80c8c9eda1945a09c3ef531448e94937"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "c1aafb50e3b21b3602b8022f3be7339f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8aa9a7a68c0f92825fd01a54f64ce3ce"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "8cd43c83312869d73884c3ae794172fe"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2fdc9138d684cd34d17ddab16b4a7d77"
  },
  {
    "url": "zh/index.html",
    "revision": "4acc04e6719db8eed91d79478d8952d7"
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
