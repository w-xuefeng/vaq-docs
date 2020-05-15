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
    "revision": "ee45c897eeb8fc3e9d37ee21fcdd2bc9"
  },
  {
    "url": "assets/css/0.styles.c3f68c5f.css",
    "revision": "321b0379d100a1cb6f192980dcb38975"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6069e13e.js",
    "revision": "994deb4a6a349cc2608256e874b681b6"
  },
  {
    "url": "assets/js/11.374680e7.js",
    "revision": "23c110ef3b1e649c33f4db1d43f68151"
  },
  {
    "url": "assets/js/12.8d34b19d.js",
    "revision": "c7e195c3eecd87c13393aff13bff9f40"
  },
  {
    "url": "assets/js/13.4183f3d0.js",
    "revision": "a437380146d4f592aa87943a1e07a1ca"
  },
  {
    "url": "assets/js/14.fca06daf.js",
    "revision": "cdaec9e0e90024c17f2609de60334e72"
  },
  {
    "url": "assets/js/15.b199dd31.js",
    "revision": "b5a2c88c44eeb54adf05ad84db20dfce"
  },
  {
    "url": "assets/js/16.b5ee50a1.js",
    "revision": "763dcddef2d0695067c7f746500ecb8a"
  },
  {
    "url": "assets/js/17.79ce5763.js",
    "revision": "5c1ca95772aec99459901c6e1efc1223"
  },
  {
    "url": "assets/js/18.222c71e8.js",
    "revision": "83fc8650385000204e8e532c4d77c46c"
  },
  {
    "url": "assets/js/19.93f79228.js",
    "revision": "8230f9994a28b8470f9f7e095babe83e"
  },
  {
    "url": "assets/js/20.ade42a5a.js",
    "revision": "46d0b11b280f8ec6878f8a9642895b23"
  },
  {
    "url": "assets/js/21.ac956492.js",
    "revision": "a2cf692050879c4fe5e4b237f2c3528b"
  },
  {
    "url": "assets/js/22.054e6ad9.js",
    "revision": "916edcd5b57284e00073feed958ee4d0"
  },
  {
    "url": "assets/js/23.1f161376.js",
    "revision": "f1bfd56fb6901d47da71626236244b16"
  },
  {
    "url": "assets/js/24.4bec2ffd.js",
    "revision": "6ef7f38fa87a3fd9ac24b1d74d0fddc4"
  },
  {
    "url": "assets/js/25.01540aff.js",
    "revision": "5a9b8484baa3460876b78e3ca545731b"
  },
  {
    "url": "assets/js/26.f688268c.js",
    "revision": "907003e8cd9e03f1b879072ba9359c5a"
  },
  {
    "url": "assets/js/27.ea4f33f8.js",
    "revision": "e0fdba3bd70c7a7e8fd742ae6463f98a"
  },
  {
    "url": "assets/js/28.74126742.js",
    "revision": "0f860fd98d3c692d7b79136bfc022d59"
  },
  {
    "url": "assets/js/29.a8c0d7c6.js",
    "revision": "62b06009d33120125f01a13de3d9df3c"
  },
  {
    "url": "assets/js/30.65f4a1ac.js",
    "revision": "9f6c462b515b233953c54ee0c225a190"
  },
  {
    "url": "assets/js/31.cad7df94.js",
    "revision": "beed78d108e091dde57511f956d8c007"
  },
  {
    "url": "assets/js/32.d5ef7274.js",
    "revision": "4f9e4c9807e32f6c8b544cdb5de35217"
  },
  {
    "url": "assets/js/33.29b31a92.js",
    "revision": "767f9d2b43642dcc40c34b4d409269ad"
  },
  {
    "url": "assets/js/34.7edb077f.js",
    "revision": "886ddedbd2db798d4c923cc096cb61b9"
  },
  {
    "url": "assets/js/35.fc9d9f69.js",
    "revision": "716154575f118ced167972f20962531b"
  },
  {
    "url": "assets/js/4.7e4cd4a8.js",
    "revision": "c5094b8c87b669487b4ab5feac25e006"
  },
  {
    "url": "assets/js/5.596d02f8.js",
    "revision": "82b344bca47f7d9a99178ce735515400"
  },
  {
    "url": "assets/js/6.857c7ef3.js",
    "revision": "341f6dfe37586954058f8ccb62c459f8"
  },
  {
    "url": "assets/js/7.e7146b6a.js",
    "revision": "45a71de00c3a354bc64234e13d625e6f"
  },
  {
    "url": "assets/js/8.5b1e28be.js",
    "revision": "37a7af7b740841bf3982cfeff0dcf906"
  },
  {
    "url": "assets/js/9.dba2e670.js",
    "revision": "d379c8ff2ff4592a48ccbbeed36924ad"
  },
  {
    "url": "assets/js/app.26718a4c.js",
    "revision": "2f047218e56c1dc0c816c5a242489f39"
  },
  {
    "url": "assets/js/vendors~flowchart.76f4a6bb.js",
    "revision": "a421bca6f4a60abce9c46bc54bab5455"
  },
  {
    "url": "assets/js/vendors~notification.a93b571a.js",
    "revision": "38da61a7d76216a081853e1d513648ff"
  },
  {
    "url": "config/index.html",
    "revision": "e88db5956ee4e16161b14d911918a94e"
  },
  {
    "url": "guide/api-event.html",
    "revision": "ba30ad91cfbe71e3e974109639f4361a"
  },
  {
    "url": "guide/assets.html",
    "revision": "13112086f89870b41d9fbd8fe9756d53"
  },
  {
    "url": "guide/build-package.html",
    "revision": "21de04d8596c1fa98c863533b8b0f9a8"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "284c1ec5941900628176e310efcbf7fb"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "de73dd98f0932b92e8e82f43c3326c44"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7e18c9fd098ba0deb6407f2c147700d3"
  },
  {
    "url": "guide/global-help.html",
    "revision": "2a22eaa811cc5a5ce314ae926b057381"
  },
  {
    "url": "guide/index.html",
    "revision": "28102ed00535aa00e34722e52ca716f9"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "10d372e0258f5610968d8af994918899"
  },
  {
    "url": "guide/network-request.html",
    "revision": "b44064e5f8c8d5ae23fefbc3a920f945"
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
    "revision": "37be1cc2c195dc485facbe6d5711f103"
  },
  {
    "url": "zh/config/index.html",
    "revision": "c401dc27b3de1a05f216ac842b109376"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "261cc98d7b2ca3e27478e7d6e0c80a06"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f1011d374a9f6db9cd1ddaf860383e42"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "26b05b45c578398ebdfbfbde854717ce"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "d6b04a6490fccd01a2ede20ef41c8331"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "e38d06b29012218ebde361c53c661f00"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "26c0129b9ffa161ebbdf206f05ebc98b"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "696e8ea8cd28f73f8de7a78c13641dd8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "825e772760e93a2a312baa112e30410b"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "1350e05c166ab1811f0a3f4de02b3759"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "c123ea24281151c1193a175a58b7395b"
  },
  {
    "url": "zh/index.html",
    "revision": "e524d573a195fc6a3ba6596d615c5eb0"
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
