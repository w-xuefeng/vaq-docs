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
    "revision": "794562f56b61e1df7329baa6fe6240bb"
  },
  {
    "url": "assets/css/0.styles.e4b9c397.css",
    "revision": "a21ed65bc07cc047f8f0fe4718e0e172"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5fce3fb0.js",
    "revision": "da5dc3acd4dc281ba117e7b1388b4e88"
  },
  {
    "url": "assets/js/11.606ead7a.js",
    "revision": "2dbf4a0b9049ba993bb17bdc2be00e74"
  },
  {
    "url": "assets/js/12.9cc82876.js",
    "revision": "104ecb1005b2c30c45c04fdea86bfdc9"
  },
  {
    "url": "assets/js/13.140e2f99.js",
    "revision": "f0891bfb620067cfb6bd12271d5bcd53"
  },
  {
    "url": "assets/js/14.8d3e5e14.js",
    "revision": "08edd6034013369bf4d7356636d9df34"
  },
  {
    "url": "assets/js/15.da06e788.js",
    "revision": "248db369b34bffac73384f22ab433b55"
  },
  {
    "url": "assets/js/16.2ebecf76.js",
    "revision": "73bde052b3b0ce0a0f7d78bbf6f10e71"
  },
  {
    "url": "assets/js/17.da8ca223.js",
    "revision": "24b03d19222928ac3b92d40d25ac2e8b"
  },
  {
    "url": "assets/js/18.c6c6edc5.js",
    "revision": "80a43e347775b27911aec6ac589f82e0"
  },
  {
    "url": "assets/js/19.f3c13e31.js",
    "revision": "525ae95399bd13ed937c9bbe33fa4c6e"
  },
  {
    "url": "assets/js/20.b428b337.js",
    "revision": "f0e08a98e879b0ac6ce57dafb9b5be66"
  },
  {
    "url": "assets/js/21.0d4efed1.js",
    "revision": "caeebc536052ed4b8d6581252d01095d"
  },
  {
    "url": "assets/js/22.efe5bdc0.js",
    "revision": "56b6314c45f3a514b3304ca54e0d68ae"
  },
  {
    "url": "assets/js/23.3828f8ec.js",
    "revision": "4e9ae41d518053c47a4ab17bb27c5f3e"
  },
  {
    "url": "assets/js/24.44d0d434.js",
    "revision": "6788ef2b83196fd8dfec569b17cb0c6e"
  },
  {
    "url": "assets/js/25.5d3dc728.js",
    "revision": "afc85f73344a7dad817c014b3857692e"
  },
  {
    "url": "assets/js/26.597da0ae.js",
    "revision": "a4fe056e9c17270f9b2b39117c022c6f"
  },
  {
    "url": "assets/js/27.c559dc47.js",
    "revision": "14a0a07719f69a046446083b336a7ad5"
  },
  {
    "url": "assets/js/28.49ef8583.js",
    "revision": "01994a60930f18659d902802cd7579eb"
  },
  {
    "url": "assets/js/29.afab4dd7.js",
    "revision": "b097fbb13b337649f53a99aa296b4e56"
  },
  {
    "url": "assets/js/30.616ef404.js",
    "revision": "536072ec2b4f5e77ee3f8344a4ffd709"
  },
  {
    "url": "assets/js/31.38e44bf4.js",
    "revision": "f33719e8c15c402a392499f1e1932f3b"
  },
  {
    "url": "assets/js/32.7eb044a5.js",
    "revision": "51099143323ede464c7051c6ad83288a"
  },
  {
    "url": "assets/js/33.8483ef53.js",
    "revision": "90a4eaef690dbda8d31be63c248fa1b0"
  },
  {
    "url": "assets/js/34.14b8e406.js",
    "revision": "9e0e25062febe40c74a4f265975db6cf"
  },
  {
    "url": "assets/js/35.87f64ac9.js",
    "revision": "9f701fde3238ce14492e5b737efa83bc"
  },
  {
    "url": "assets/js/36.37cb5102.js",
    "revision": "03a174b4c99eefa94ae6654089d02439"
  },
  {
    "url": "assets/js/37.3bd712db.js",
    "revision": "9b520851a8170cefe67a81fa12e60512"
  },
  {
    "url": "assets/js/38.eb176181.js",
    "revision": "f9c8764a5b13eb5e76be298e646f367e"
  },
  {
    "url": "assets/js/39.31691f75.js",
    "revision": "a48ae04f85c6bf03a3762893184c6b68"
  },
  {
    "url": "assets/js/4.ec9c17f0.js",
    "revision": "bad73cee6d767c24153b1cea9ff99ed2"
  },
  {
    "url": "assets/js/40.475bd9b5.js",
    "revision": "a4ff8aaf4f98816304b427cccd76a92d"
  },
  {
    "url": "assets/js/41.94bc774c.js",
    "revision": "f091f01087e35e80f2384d7a6865d9a2"
  },
  {
    "url": "assets/js/42.bceda309.js",
    "revision": "3257573f7b683a21c2ff3a42bdc6df9a"
  },
  {
    "url": "assets/js/43.3ed4c596.js",
    "revision": "fbb6c28c6d4b5ac51136cc292021f14a"
  },
  {
    "url": "assets/js/44.bd888182.js",
    "revision": "5e10f875e34b606708c67fa2103ca774"
  },
  {
    "url": "assets/js/5.a81a4d65.js",
    "revision": "39d06fb798d81081210d073090d335c6"
  },
  {
    "url": "assets/js/6.95605a71.js",
    "revision": "8c2f3dc8ce62871d5587396ad0efb2ac"
  },
  {
    "url": "assets/js/7.7bc6b80f.js",
    "revision": "23f5f83ec6ecea96945ba9a5d0e5b1c2"
  },
  {
    "url": "assets/js/8.77438de1.js",
    "revision": "cca889bf582ee717be68b3fe5a683127"
  },
  {
    "url": "assets/js/9.b9fc533f.js",
    "revision": "aee62da5756d8062f8a3f4218c3f65de"
  },
  {
    "url": "assets/js/app.73e1ee49.js",
    "revision": "699e53dd25183f47c4d8040d1018c833"
  },
  {
    "url": "assets/js/vendors~flowchart.b9211b2b.js",
    "revision": "b2c76bee9d5a2147e79e91228b914b50"
  },
  {
    "url": "assets/js/vendors~notification.40d33992.js",
    "revision": "f54e853cb963fe26a17f45a806516ef8"
  },
  {
    "url": "config/index.html",
    "revision": "5c591ee03fb608f791ecce1de1c2411d"
  },
  {
    "url": "guide/api-event.html",
    "revision": "048f3cedae7eef69e9f7c83a55b24fe8"
  },
  {
    "url": "guide/assets.html",
    "revision": "ab1c6c4d105645a323848bd09f986999"
  },
  {
    "url": "guide/build-package.html",
    "revision": "88df265bce91fef82ba8de0ae30ab260"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "80c4b80508d0210c7bee3c7a2a45655f"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "be3e570a108756e37b6d769c91614889"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "dfc90d1d8fe0ed7670007e3787dbb3cb"
  },
  {
    "url": "guide/global-help.html",
    "revision": "34a910adcfa99e632b813107c29da94b"
  },
  {
    "url": "guide/index.html",
    "revision": "a743ec3e48d52a2a957aa535059268bf"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "c1f3154ea8ea7f1e7cafbe6ee81fe673"
  },
  {
    "url": "guide/network-request.html",
    "revision": "b6a684b6f1ebbf7a97e59f954eb1f304"
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
    "url": "img/qrcode.jpg",
    "revision": "04f7caaf97c96c40b5517ab9d8eeaea5"
  },
  {
    "url": "img/vscode-plugin-apicloud.png",
    "revision": "05dd0190abc494bd6c6317f22406812d"
  },
  {
    "url": "index.html",
    "revision": "d7d8d4fac8f4693df7101c704319d8ca"
  },
  {
    "url": "video/first.html",
    "revision": "58dc975f2fe532629dfb9b2576022344"
  },
  {
    "url": "video/index.html",
    "revision": "9768b9cb13e5b0144fd57fb1bd20667c"
  },
  {
    "url": "video/second.html",
    "revision": "20d55448dfbe20c50967ca6206536057"
  },
  {
    "url": "video/third.html",
    "revision": "f1690dd62a698dc63ec585a3330c726b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6348d87be13abcdda80882f661c94533"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "8f910d3448de01e18eb9ea8ea85cfdf7"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "2f8a9dfd9f5dac7db36cd3381ba7ef23"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "889c1d1fbee330c22d707515a394fa7d"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "7c0a930d68873f86578acdc54d740e74"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "d8cbbc2ed2db1e84991629e3904fc6e4"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9a973e04ceff3274c27e8da025261af0"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "4835986e9dac95b3d79acdcbd8d56ddb"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1aff8d27b7232ad479ab0a4d994abd5d"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "23f5a1663ee64fe6d9c1b790d9db34f7"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "3a617e97cccd18db22e3fb3e5e51f9ff"
  },
  {
    "url": "zh/index.html",
    "revision": "4c09f35d594fdaeb5a33c5afb7033e62"
  },
  {
    "url": "zh/video/first.html",
    "revision": "92fc805f1c2ad22c03d822aaaa0db21a"
  },
  {
    "url": "zh/video/index.html",
    "revision": "1eeb669e2b5627bef486cf88ef9fc2ce"
  },
  {
    "url": "zh/video/second.html",
    "revision": "af6e760f16a5d46c1f1ea97b3aedc000"
  },
  {
    "url": "zh/video/third.html",
    "revision": "ea5cfb268556ce21b6df9fee15873195"
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
