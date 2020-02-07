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
    "revision": "fa171f0282611048963308b1a77ff543"
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
    "url": "assets/js/15.440392b0.js",
    "revision": "1cb2514147e6571c2cf68bd5b226cb9b"
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
    "url": "assets/js/21.361637ab.js",
    "revision": "a244f737cab4693d786652ebc58c6cff"
  },
  {
    "url": "assets/js/22.ec83ea76.js",
    "revision": "bb3e22635b12d03b4c5bee51d46ada0b"
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
    "url": "assets/js/app.3d90f6a2.js",
    "revision": "77865ecf7ce0ab749273224772b08b4b"
  },
  {
    "url": "assets/js/vendors~flowchart.2cdfb696.js",
    "revision": "363d61c3f22c6f6d127476a7b7f12b8a"
  },
  {
    "url": "config/index.html",
    "revision": "19e148d0bb31a17fcdf1886b1485a1ec"
  },
  {
    "url": "guide/assets.html",
    "revision": "99f6eb543a43c7dbcd678f8d54acd552"
  },
  {
    "url": "guide/build-package.html",
    "revision": "fb37f81babcf770194c9316478829a7c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2ebccd058aeb0f2e0583ccb887d92975"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ba3a4a65ea6819fcb71f42f8f0a6a95a"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "1ca141a7ae042dd90bd105c05cfb867c"
  },
  {
    "url": "guide/index.html",
    "revision": "0cb307b2645ffd4f092382d671a2e43e"
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
    "revision": "473f8489cc7efae45eecfc181e57281f"
  },
  {
    "url": "zh/config/index.html",
    "revision": "31304d20bd714b6a5e94a080f2f2e86b"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "6e73ca98cc6e5aa045c41cff00583372"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "bd3ce40cfeff3f98b4c7c8eeb2458dcc"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "27a6624e455682cfd0d3fd7ec4660c01"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a7cd6c1b27de062bbd4dacf45b239e1c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "e2cd95c77cde5eee596ced966d59d84c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0b7fc282ae92fc8982eac7df58c0539e"
  },
  {
    "url": "zh/index.html",
    "revision": "63953c41afefab041dbc49ab09dde6b3"
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
