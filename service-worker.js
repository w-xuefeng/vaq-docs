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
    "revision": "e49e0a2f1ab16fea3657c0cd1dde505d"
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
    "url": "assets/js/14.e1010e34.js",
    "revision": "cdaec9e0e90024c17f2609de60334e72"
  },
  {
    "url": "assets/js/15.100fb7f0.js",
    "revision": "b5a2c88c44eeb54adf05ad84db20dfce"
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
    "url": "assets/js/20.5bc2fb66.js",
    "revision": "4bfce3f6414dbf486c0c006e88c00882"
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
    "url": "assets/js/29.d1f73ac8.js",
    "revision": "62b06009d33120125f01a13de3d9df3c"
  },
  {
    "url": "assets/js/30.af3f5bec.js",
    "revision": "9f6c462b515b233953c54ee0c225a190"
  },
  {
    "url": "assets/js/31.15deb425.js",
    "revision": "beed78d108e091dde57511f956d8c007"
  },
  {
    "url": "assets/js/32.3b25996d.js",
    "revision": "f194015c59c542b227118d0a8c539e51"
  },
  {
    "url": "assets/js/33.114b6bc7.js",
    "revision": "767f9d2b43642dcc40c34b4d409269ad"
  },
  {
    "url": "assets/js/34.0a763394.js",
    "revision": "886ddedbd2db798d4c923cc096cb61b9"
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
    "url": "assets/js/app.ba284660.js",
    "revision": "46128700f32c410c788d73174df5c992"
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
    "revision": "7c2eba0765b6f4ac6a88a49ad62af07d"
  },
  {
    "url": "guide/api-event.html",
    "revision": "8baefdc4f15b154a6baf80adf9e2ea48"
  },
  {
    "url": "guide/assets.html",
    "revision": "c0899800c20ce73fee482f1587c70146"
  },
  {
    "url": "guide/build-package.html",
    "revision": "edbbef294f9644ec45cc81db5d0de3b0"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "8eac04abc6f6e25056a5a2960513d928"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "c56080f609d2ca88cf894d3f5d68d856"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3c111f1e6a162817c166a88eb77ab69f"
  },
  {
    "url": "guide/global-help.html",
    "revision": "ca5ea36094813c8a7f1bdc4c551425eb"
  },
  {
    "url": "guide/index.html",
    "revision": "97ff267c9a2b6af6545cbfe5bb54f16a"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "8478415e7ca4dbac9c3f249a66522083"
  },
  {
    "url": "guide/network-request.html",
    "revision": "115113fbd741d764e6ff8f79d3323af7"
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
    "revision": "4d7d9179c52794901fcbbb9472689bd9"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ddeddc13d4f904efc329e83866d6a758"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "9f3a583638c5c7c9c4e3f59062fcbcf9"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "6574268044430cc8c318078b98fbe669"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "a860058cfe253f5003f60faecd13f995"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "082d1570ee95e1f56607c4cbe10542d2"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "6a941852a25469670382c4e042a58460"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "597c558ce19931a3d77b51dd955c2df9"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "4c349da0543399ef58aa1da33d29d9cd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7c4f7bb13660e97529a75ce63fc9b09e"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "7f2a5c988918178fd21e90ad0f1d31a0"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "9fe85ff284b2feedd1ad60cc33ed741a"
  },
  {
    "url": "zh/index.html",
    "revision": "74495ba3df70b1cc8cd3ebff991aa427"
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
