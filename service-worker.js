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
    "revision": "06067bddf6bb9d30eb06f7d6cc555765"
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
    "url": "assets/js/12.e3f5273f.js",
    "revision": "676af181d12bec4adbc7d925e9956a23"
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
    "url": "assets/js/15.db6a1935.js",
    "revision": "bccb359c47593b7aad85648c1bf747a4"
  },
  {
    "url": "assets/js/16.24d59d1d.js",
    "revision": "9ff8f4b565ca6334a3b4ce65d471520d"
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
    "url": "assets/js/20.40ae871d.js",
    "revision": "99c87ae819dcf6cd4c27253a028b9872"
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
    "url": "assets/js/24.fd2aae2b.js",
    "revision": "51b2199f7412a3d283015a772d9b0a28"
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
    "url": "assets/js/32.9f48a58a.js",
    "revision": "540077d4eb8dbbe0447d069f0c186846"
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
    "url": "assets/js/app.adec2a67.js",
    "revision": "84790160f9dd7434a849e410b9b326da"
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
    "revision": "3118fc27a836cf601619fc8f45ecf186"
  },
  {
    "url": "guide/api-event.html",
    "revision": "4d2f10c32c6ec5007dba9be5e3694e7c"
  },
  {
    "url": "guide/assets.html",
    "revision": "9719bae322b99a9d7f848bcd236e02f1"
  },
  {
    "url": "guide/build-package.html",
    "revision": "beb3b36351ae943e6ce56ed1bfd4659e"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "f4b7ae719f34409b3795c8f05c51e8e4"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "12a43ddccbbf1a675fdc66783b9fc7f5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d7fe2843c4fdc55fd95ea25240333433"
  },
  {
    "url": "guide/global-help.html",
    "revision": "df5823b7d39f865d322cea4b9f072fa4"
  },
  {
    "url": "guide/index.html",
    "revision": "4cf048948f664459d84d80a8d33aee7a"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "ef05eadec7a86c6df153b77470a047de"
  },
  {
    "url": "guide/network-request.html",
    "revision": "635df2c009a5f7d86ba9f761764a84c6"
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
    "revision": "eeed69bd9c0e81203563bee8f88823c9"
  },
  {
    "url": "zh/config/index.html",
    "revision": "14d81d8e9d0ec7fff1d8f3a9458affe8"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "63ec8de247e97c4e9f74e4c81b1570a3"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "b10c410e679482c3b3c3af730c06359b"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "862df388cc40425914fb8bd565858519"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "4de73e1327864c25d4bdcd5245ef6ef3"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "88b373a501a1cbd497c11b5ceef3947e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a1f0956a98fdf7ff2d77b5a13f8bbecc"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "a8719b0fb922c72bfe875e7149702891"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "db11085ed98aaa9164754c620c1a7df9"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "8a3e9f851751bd6532f326863c06a6c5"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "605ce37b461dfe8d2ecb7529c0e34caa"
  },
  {
    "url": "zh/index.html",
    "revision": "c3a04f22f489330eccaec53675d31297"
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
