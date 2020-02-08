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
    "revision": "9f8e761305dc04aa8a633855ecec092f"
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
    "url": "assets/js/23.4c430633.js",
    "revision": "080a0364e298946e655f5df27e9b3d06"
  },
  {
    "url": "assets/js/24.98c0e18e.js",
    "revision": "e63d63fc5982f527b1976e60ff2c81f1"
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
    "url": "assets/js/28.d34eb04a.js",
    "revision": "039dda84c115fe8551e7abe8e1d4d7fc"
  },
  {
    "url": "assets/js/29.97ef1a79.js",
    "revision": "aff6b035f9f04600adaff7b47ee7f4ce"
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
    "url": "assets/js/app.a395a5d8.js",
    "revision": "f03a8471f3b030a062d6cab5031a5310"
  },
  {
    "url": "assets/js/vendors~flowchart.2cdfb696.js",
    "revision": "363d61c3f22c6f6d127476a7b7f12b8a"
  },
  {
    "url": "config/index.html",
    "revision": "6146373612b67341259f7d45b08dd1dd"
  },
  {
    "url": "guide/api-event.html",
    "revision": "08764a036c847f1daeb18f49d830c0de"
  },
  {
    "url": "guide/assets.html",
    "revision": "70db0a51f1ba9f755f2fec5812010ee7"
  },
  {
    "url": "guide/build-package.html",
    "revision": "f21b3ca23a0028f74a9f452b3eaf5d9b"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "4e499f0d41f892bd55215bbde44788ac"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9d064669fa42cdd35acfd7bbf9e3e5e9"
  },
  {
    "url": "guide/global-help.html",
    "revision": "880a2a435b4d7cfbe97ece96a1b2e7f0"
  },
  {
    "url": "guide/index.html",
    "revision": "ee4aef4928b7338f61b2f657e2e9e7b5"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "b9f109c5afbe390a314a65cae7181003"
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
    "revision": "48c61419f9bdabcc42ce883f897f88d5"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ee34390ce4607f21f7cf809f26ecbd00"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "568f060269bb2e3c51acd6ad925b1407"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "80a5bdc010a361b1a22850ac773fcad9"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "bf76a89eec578bd56e1560d7d1f19284"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "95e8b68bd6c047bef7068b7d59ad2e24"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "70812606f4f8ea04d39872b2d16b47b5"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "083a9093b8996a75eb2c3e138b130af6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "dc1ac36a3db801440a54ec9374cf8af3"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "b251c34ad6afdf251d38ac9c20f9b099"
  },
  {
    "url": "zh/index.html",
    "revision": "8ff527f49b257f3771c54ec0467f2b6a"
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
