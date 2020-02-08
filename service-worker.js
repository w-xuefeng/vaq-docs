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
    "revision": "d8829dfcc5141d1cf805ac841bd7deea"
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
    "url": "assets/js/13.22a0cce3.js",
    "revision": "fbb7855fa263574045c3e79ad8fd11fa"
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
    "url": "assets/js/17.6a4fad00.js",
    "revision": "7c09a961c79d9f268dddcd525d22766d"
  },
  {
    "url": "assets/js/18.ff9ebd4f.js",
    "revision": "43d011ceacd501e02ac8e72d39e24631"
  },
  {
    "url": "assets/js/19.b0bf6c84.js",
    "revision": "87027e64d45c44e4c50996e76a7b6fcb"
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
    "url": "assets/js/23.3ea37535.js",
    "revision": "ba68389b326f29e84e63b7ebc7aea6dd"
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
    "url": "assets/js/27.a8991298.js",
    "revision": "5c78fffe1c2ead8e80f64813fcf5a42f"
  },
  {
    "url": "assets/js/28.73177fcb.js",
    "revision": "6173e3e3c6d32d49f8e80dc37512a79b"
  },
  {
    "url": "assets/js/29.eea14400.js",
    "revision": "186ac578d848602372cd43bd2705c1d0"
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
    "url": "assets/js/app.56ef2129.js",
    "revision": "4474960849b056b02b8606072bfd6f8f"
  },
  {
    "url": "assets/js/vendors~flowchart.2cdfb696.js",
    "revision": "363d61c3f22c6f6d127476a7b7f12b8a"
  },
  {
    "url": "config/index.html",
    "revision": "58d837fe87a5b15f025f08498726251c"
  },
  {
    "url": "guide/api-event.html",
    "revision": "ff992d673143b8da4daa3f6e8a65452c"
  },
  {
    "url": "guide/assets.html",
    "revision": "116018ada439fd8d3a8877a34fd9869c"
  },
  {
    "url": "guide/build-package.html",
    "revision": "381f6555803779fa15a59fed860c9a01"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "16d426729d17590d1082b53e2f69bb33"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bebcb4b20ce89cbbbcb8526188aaa35b"
  },
  {
    "url": "guide/global-help.html",
    "revision": "a1177cffae11a90655389bb038baaace"
  },
  {
    "url": "guide/index.html",
    "revision": "62348bbd17bce9ec303dfd0709aa887d"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "523519bddba741764a9396cf07b1e111"
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
    "revision": "970931e3a33648225cb33d720c5a2d69"
  },
  {
    "url": "zh/config/index.html",
    "revision": "3ca11347ec8b41c6cefa5a06c9c00fe4"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "6026a2ce79c796d351d1267579b4d399"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3b30efbb23178fdccc088b8af27b874c"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "4929436b6896656d88534c620cf36613"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "ea087737431e4d592335dec6ab715932"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "19fada597ec6cdefd80e9f735102ac40"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "8fb00df894c9ec87875317389cbbea78"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e0597d5e07f88353e91b41dc606116a7"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "05a786749f8542b898d4fc747eb64a34"
  },
  {
    "url": "zh/index.html",
    "revision": "de8edd56a0fd54a21f9cd98fe96807c2"
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
