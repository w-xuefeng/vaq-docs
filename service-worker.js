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
    "revision": "9515296508a51e13ddfaa17e81f17616"
  },
  {
    "url": "assets/css/0.styles.db0b46df.css",
    "revision": "321b0379d100a1cb6f192980dcb38975"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4958616e.js",
    "revision": "994deb4a6a349cc2608256e874b681b6"
  },
  {
    "url": "assets/js/11.0d043ea5.js",
    "revision": "23c110ef3b1e649c33f4db1d43f68151"
  },
  {
    "url": "assets/js/12.09c2b23a.js",
    "revision": "7457975fbcac28564f1c810a7cbe7d02"
  },
  {
    "url": "assets/js/13.b6c00923.js",
    "revision": "a437380146d4f592aa87943a1e07a1ca"
  },
  {
    "url": "assets/js/14.09ba15dd.js",
    "revision": "07ac764f2160ad9c329239837314ec4a"
  },
  {
    "url": "assets/js/15.b0ea02df.js",
    "revision": "1b7ac8e38e1c96aa8e50fa0fe90cdb48"
  },
  {
    "url": "assets/js/16.6dd88fac.js",
    "revision": "763dcddef2d0695067c7f746500ecb8a"
  },
  {
    "url": "assets/js/17.20a3318b.js",
    "revision": "5c1ca95772aec99459901c6e1efc1223"
  },
  {
    "url": "assets/js/18.a0596cf8.js",
    "revision": "83fc8650385000204e8e532c4d77c46c"
  },
  {
    "url": "assets/js/19.79ba2539.js",
    "revision": "8230f9994a28b8470f9f7e095babe83e"
  },
  {
    "url": "assets/js/20.ef4e9548.js",
    "revision": "e503257baf716c365071de7dbf417589"
  },
  {
    "url": "assets/js/21.c8a984f8.js",
    "revision": "a2cf692050879c4fe5e4b237f2c3528b"
  },
  {
    "url": "assets/js/22.560218c4.js",
    "revision": "916edcd5b57284e00073feed958ee4d0"
  },
  {
    "url": "assets/js/23.19bb52c1.js",
    "revision": "f1bfd56fb6901d47da71626236244b16"
  },
  {
    "url": "assets/js/24.a6a99a13.js",
    "revision": "6b234ec4851d967f4157e790c6e4ad45"
  },
  {
    "url": "assets/js/25.c14286bf.js",
    "revision": "5a9b8484baa3460876b78e3ca545731b"
  },
  {
    "url": "assets/js/26.d4bd2c1b.js",
    "revision": "907003e8cd9e03f1b879072ba9359c5a"
  },
  {
    "url": "assets/js/27.600dd1a0.js",
    "revision": "e0fdba3bd70c7a7e8fd742ae6463f98a"
  },
  {
    "url": "assets/js/28.5af358d1.js",
    "revision": "0f860fd98d3c692d7b79136bfc022d59"
  },
  {
    "url": "assets/js/29.541ab14b.js",
    "revision": "bfb7133a4d600f0d223d7c5e56ac6adc"
  },
  {
    "url": "assets/js/30.8679ac62.js",
    "revision": "cf69fe7cd2c8cc1957e2a0703f1eb9a3"
  },
  {
    "url": "assets/js/31.a4086254.js",
    "revision": "54685c1d6a95c0dc819e46f1f92e363a"
  },
  {
    "url": "assets/js/32.07f25ab6.js",
    "revision": "99f0396460a419532183b1f1d992483b"
  },
  {
    "url": "assets/js/33.3adf6d00.js",
    "revision": "54be0057c5348636dd7ee05133b6fc44"
  },
  {
    "url": "assets/js/34.65090233.js",
    "revision": "aa2d817c55d5e8f02cf2c358b5c3c537"
  },
  {
    "url": "assets/js/35.41e52d68.js",
    "revision": "716154575f118ced167972f20962531b"
  },
  {
    "url": "assets/js/4.00184eb1.js",
    "revision": "c5094b8c87b669487b4ab5feac25e006"
  },
  {
    "url": "assets/js/5.19308f1c.js",
    "revision": "82b344bca47f7d9a99178ce735515400"
  },
  {
    "url": "assets/js/6.3c438d3a.js",
    "revision": "341f6dfe37586954058f8ccb62c459f8"
  },
  {
    "url": "assets/js/7.b7c98efc.js",
    "revision": "45a71de00c3a354bc64234e13d625e6f"
  },
  {
    "url": "assets/js/8.a30d95cb.js",
    "revision": "37a7af7b740841bf3982cfeff0dcf906"
  },
  {
    "url": "assets/js/9.3ae47381.js",
    "revision": "d379c8ff2ff4592a48ccbbeed36924ad"
  },
  {
    "url": "assets/js/app.cd492dcb.js",
    "revision": "964149a4b00aa8abc6b0910bd71edd3d"
  },
  {
    "url": "assets/js/vendors~flowchart.9d5e433e.js",
    "revision": "a421bca6f4a60abce9c46bc54bab5455"
  },
  {
    "url": "assets/js/vendors~notification.e2a2740a.js",
    "revision": "38da61a7d76216a081853e1d513648ff"
  },
  {
    "url": "config/index.html",
    "revision": "6e5068c7eacb94356763168ec8fd3754"
  },
  {
    "url": "guide/api-event.html",
    "revision": "0034dd37d79461efda8180fa6dc20433"
  },
  {
    "url": "guide/assets.html",
    "revision": "82b3a382f7c5c16f8a0b7d1333ebb217"
  },
  {
    "url": "guide/build-package.html",
    "revision": "4df87d66dd6ab02ac0372b372500e42b"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "bfd3a3a6c440b168732dc19350a0deba"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "7733be47dd948f5745a104a243ffd6e2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "960c6cedf4e86e2fcc06c35c7a9ba9c9"
  },
  {
    "url": "guide/global-help.html",
    "revision": "85126896d326617b47f23c94ff95b971"
  },
  {
    "url": "guide/index.html",
    "revision": "3508605c44594ad5327ce353fe50d88e"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "2e443379a947f6a45e000e03b6ee756c"
  },
  {
    "url": "guide/network-request.html",
    "revision": "adeda2778a2c7c2750860ce99755155a"
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
    "url": "img/vscode-plugin-apicloud.png",
    "revision": "05dd0190abc494bd6c6317f22406812d"
  },
  {
    "url": "index.html",
    "revision": "a66fa4caaeb3cb243c49f33051597d3c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "24314fa9f35e68f503a30eb223cc01b5"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "44476079fc006a0df93ede85bf34c166"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "5290bd0944811eb4af1bb50aaaec5ce7"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "be59ca1ff04c7f5969fc3599b341ccc3"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "fb02cd0e940482bf746db9aadc168365"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "f402f0f4a6493c6d7c1a57d841bd8a52"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6bcb3a5f7a2fc0f29bb495742eba2d7d"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "77184b1a94b8e2e7321a04a8da19c688"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1704d9795a45ef2b17b679e0a5483c17"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "afbd1eeae0b038849bf2b4bcd9100392"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "4b528d5d002b9e1b9d4cdd6dd745412d"
  },
  {
    "url": "zh/index.html",
    "revision": "4ceb1f4b19f23416570c28298c36fc11"
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
