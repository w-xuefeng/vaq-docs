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
    "url": "assets/css/0.styles.29bc3b55.css",
    "revision": "bada68c8d632d72132ffda57d835ccf1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3be963aa.js",
    "revision": "e3e7a8e331626820d15c47cffbe820d7"
  },
  {
    "url": "assets/js/11.c47ed569.js",
    "revision": "5a2aeb9b3edb6b913da6ad40264d06ed"
  },
  {
    "url": "assets/js/12.8796de88.js",
    "revision": "e27356e168430d1b6ada7f1b04094377"
  },
  {
    "url": "assets/js/13.44dc371c.js",
    "revision": "86bd61027667bdde502c50e6c787c837"
  },
  {
    "url": "assets/js/14.4a0784f8.js",
    "revision": "e55b7d54be680e158489e050edbc05b6"
  },
  {
    "url": "assets/js/15.e668be2a.js",
    "revision": "f452f473f07b6f2d66c32516374753a2"
  },
  {
    "url": "assets/js/16.9b1d0dfe.js",
    "revision": "be8310d465faf764ad480249a272d877"
  },
  {
    "url": "assets/js/17.f6f93a3f.js",
    "revision": "257d239ac1f08099fa3d55fb59a99df3"
  },
  {
    "url": "assets/js/18.cfe37126.js",
    "revision": "191658baaca54b41b4a2dcb45a0a2074"
  },
  {
    "url": "assets/js/19.f1845527.js",
    "revision": "86fc07e2a6ff73b734782434a86bc4b5"
  },
  {
    "url": "assets/js/20.66174b38.js",
    "revision": "6c9974dddaaefaa9850882b6e1587c43"
  },
  {
    "url": "assets/js/21.4216a6c5.js",
    "revision": "b37721a65523a93edce511ddfb7ce589"
  },
  {
    "url": "assets/js/22.f110199b.js",
    "revision": "6c84d7c756632a051769904203dc0bb2"
  },
  {
    "url": "assets/js/23.d81eb684.js",
    "revision": "d84bf9c7d8a1aa6991ee430b428da629"
  },
  {
    "url": "assets/js/24.bff93af7.js",
    "revision": "4cb8b29036e54b00c30b2bd7527353a2"
  },
  {
    "url": "assets/js/25.4f1be202.js",
    "revision": "aa67d95871446190a3c9b87dfe483b5b"
  },
  {
    "url": "assets/js/26.ee492e01.js",
    "revision": "f9a454debd7a4b24a4735f44df5c6e84"
  },
  {
    "url": "assets/js/27.6e1f1849.js",
    "revision": "079bf15d8b65b5393a1233a9bed166a1"
  },
  {
    "url": "assets/js/28.9346c664.js",
    "revision": "6bf4ebeaeab6971f7e3eece889ab032d"
  },
  {
    "url": "assets/js/29.c3d4a78d.js",
    "revision": "d7dd56d39a87eb815d06ef071175160c"
  },
  {
    "url": "assets/js/30.9c5a6098.js",
    "revision": "bdd5f78491298bb2db4488395b2f3c36"
  },
  {
    "url": "assets/js/31.0588db44.js",
    "revision": "1162308252cdb979efd8be68b3ac0212"
  },
  {
    "url": "assets/js/32.b15b5319.js",
    "revision": "166fc95625b07f809198d21032df62ad"
  },
  {
    "url": "assets/js/33.80fceba5.js",
    "revision": "29a1843ae3405618466f85a9e805b0d5"
  },
  {
    "url": "assets/js/34.fad2d742.js",
    "revision": "9cf924783ecf29c426c7903b8a87e6ca"
  },
  {
    "url": "assets/js/35.30a458ec.js",
    "revision": "2b02969c39b3d9de65d59a42d7dd9a61"
  },
  {
    "url": "assets/js/36.5691b7ae.js",
    "revision": "bd025131c1ae4edf3992251d551274dc"
  },
  {
    "url": "assets/js/4.9c80ea4d.js",
    "revision": "defbeac9fe3ef9f2b44d31be6ff2aba9"
  },
  {
    "url": "assets/js/5.9d883050.js",
    "revision": "3043e3ffc16899639a0e189d13f9f3fc"
  },
  {
    "url": "assets/js/6.73ce2ae1.js",
    "revision": "51dbd6955aad66084ba8de14e6550e5d"
  },
  {
    "url": "assets/js/7.d951d7c2.js",
    "revision": "7b39febdb2984d472d59c7792c1abfc6"
  },
  {
    "url": "assets/js/8.8d852e00.js",
    "revision": "6d5a184396416f665eef0c0051ff62a0"
  },
  {
    "url": "assets/js/9.5f55bb91.js",
    "revision": "0f849089a0c12352742352a119881b68"
  },
  {
    "url": "assets/js/app.d36a6b75.js",
    "revision": "f0341a46d5968132820c7f7d6d87c4e4"
  },
  {
    "url": "assets/js/vendors~flowchart.0b1e36f3.js",
    "revision": "7598345c2b0294cc97b19ccba46d3009"
  },
  {
    "url": "assets/js/vendors~notification.a61ca296.js",
    "revision": "12c1be2352d7f83f0e77eb04221e9cf5"
  },
  {
    "url": "config/index.html",
    "revision": "0b9d7935bca7ab7930db48b4880fb2c5"
  },
  {
    "url": "guide/api-event.html",
    "revision": "0489884577dc2da288e8e2ff1dcc226e"
  },
  {
    "url": "guide/assets.html",
    "revision": "f5606675e50ac9553aebfbaf4ba5563d"
  },
  {
    "url": "guide/build-package.html",
    "revision": "944ac44814f7116e1cc4cfc0316ddebc"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "dd30a40025657f0e446d546488cd0d10"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "f679a3e9e3aa18937430d70d1040c22b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "34a2c6fc9004b7853c656325fc545898"
  },
  {
    "url": "guide/global-help.html",
    "revision": "1ab169c19dddada7261c677a0d0c5a7e"
  },
  {
    "url": "guide/index.html",
    "revision": "f7dc4b44a813e25a2d7c066f7ad3bbc4"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "e0d474da4e4030be5374d16a117a272e"
  },
  {
    "url": "guide/network-request.html",
    "revision": "74554d98e8ac0c85a11c6d3baa2caaec"
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
    "revision": "3fa60e23587b67b752b213352dfef0e8"
  },
  {
    "url": "zh/config/index.html",
    "revision": "1fc1fccdd7e09fc216a53128a108e1cc"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "ae727e7040d0b8a0937af548ac88412e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "badb3e5ddd0fc5096f257b2c9561bac0"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "ab48cc733b6aa0f313c653f7229349ab"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "389cf8b3cffa8d8f0294e3e79774a782"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "843c7b45d76a9933445bf4048a0d7499"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "b5700f34e9f54e7f4fe9293f7f36c36b"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "7a14e896094c38ef11e6684db34d3440"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ae22a8a26f7c3f6f7a1dc2be83efeb43"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "957e8f528d86b98b4efac07caea8bee1"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "1e6a99f8419119eb9b6239e00b2df9e5"
  },
  {
    "url": "zh/index.html",
    "revision": "0d40017841e7ff1f4f759a1211c88c72"
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
