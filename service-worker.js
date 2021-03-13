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
    "revision": "1c6120160f7a0762b209ae2f4a2404bb"
  },
  {
    "url": "assets/css/0.styles.b72994bc.css",
    "revision": "e595c5ebcaf4db66fa54d52f762bd23f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.55f667f3.js",
    "revision": "c2783f0a20e6f51f4a888d052d6eda0c"
  },
  {
    "url": "assets/js/11.e394c228.js",
    "revision": "709d0641d2525ba92f65b52a4edb8fd5"
  },
  {
    "url": "assets/js/12.bad43366.js",
    "revision": "a24b1f39412bacd46036117ce0ab9ad1"
  },
  {
    "url": "assets/js/13.e0ad10cc.js",
    "revision": "7593528441f780a60d9c9020f2bf297f"
  },
  {
    "url": "assets/js/14.1aaeb978.js",
    "revision": "923870cbaaa12800db1768cf223a79cc"
  },
  {
    "url": "assets/js/15.f5a350ba.js",
    "revision": "1543a2b65c30f43cf0b95c71e36c0077"
  },
  {
    "url": "assets/js/16.ae5a8d20.js",
    "revision": "9ee1eee7ba526d83173fe58afa6c8744"
  },
  {
    "url": "assets/js/17.e014fac9.js",
    "revision": "6d28beed083dd0fde5da21d3f52d96d5"
  },
  {
    "url": "assets/js/18.8f0b912c.js",
    "revision": "a1d42587dd60ac51910a7f2abb588e0a"
  },
  {
    "url": "assets/js/19.a9c328a9.js",
    "revision": "7a382cedbaf542ed18c464fedca88c54"
  },
  {
    "url": "assets/js/20.c21dad76.js",
    "revision": "11c6dee39844fa5cd998b883adcf05a3"
  },
  {
    "url": "assets/js/21.27f06312.js",
    "revision": "e6f3d92e0929a5d35239973eaf3a1736"
  },
  {
    "url": "assets/js/22.32567287.js",
    "revision": "e155f5501f7a33a604ab6049729305ca"
  },
  {
    "url": "assets/js/23.ac159ab0.js",
    "revision": "c04444cd62af9afc39e381a4ad26533b"
  },
  {
    "url": "assets/js/24.cbfbd84e.js",
    "revision": "74df702d1a48afc711ccb29631054512"
  },
  {
    "url": "assets/js/25.665b8cb1.js",
    "revision": "1361f245f3bdefcd68bb9ffd4ce519a0"
  },
  {
    "url": "assets/js/26.7063dce3.js",
    "revision": "36772a9f8287b63ac37e9d7b87261557"
  },
  {
    "url": "assets/js/27.88adabda.js",
    "revision": "5c109bf2d97263bc327446076b6acef1"
  },
  {
    "url": "assets/js/28.b8fb851a.js",
    "revision": "0af5a23a1629e3647b506a733e657a57"
  },
  {
    "url": "assets/js/29.8f00eca8.js",
    "revision": "dd4ea7914297cf0ec7bfb1787d51e496"
  },
  {
    "url": "assets/js/30.31b427a3.js",
    "revision": "08515e4372421dba66c73f70bcc8fc31"
  },
  {
    "url": "assets/js/31.3270979c.js",
    "revision": "c7793afbcb9d84a283076c6927ba4c76"
  },
  {
    "url": "assets/js/32.7f703cb3.js",
    "revision": "37a8372c4602bf12742a3a14a2746939"
  },
  {
    "url": "assets/js/33.0407d8cd.js",
    "revision": "faa37444e3357a7052ab5ad04c7c08a8"
  },
  {
    "url": "assets/js/34.2bdac48d.js",
    "revision": "027d126ea297ff9e32abf3fc61e3f5c2"
  },
  {
    "url": "assets/js/35.64f9513f.js",
    "revision": "cbe1544b768a3327ed966082a8630ab4"
  },
  {
    "url": "assets/js/36.a5422b90.js",
    "revision": "749392c7d9a14e477aacc60111672cf7"
  },
  {
    "url": "assets/js/37.a3401c3e.js",
    "revision": "d09028c589ae52afc6cebaae50806175"
  },
  {
    "url": "assets/js/38.a15e0903.js",
    "revision": "78b61e614223315624272fc1a3cdfbd8"
  },
  {
    "url": "assets/js/39.095c4b33.js",
    "revision": "1f813755cab0ef3c8e8e8c175100344b"
  },
  {
    "url": "assets/js/4.77aa1557.js",
    "revision": "4156c44f4595e062ad4c782c7b4ac8e2"
  },
  {
    "url": "assets/js/40.80661a04.js",
    "revision": "05c1bcda4b19d5d727c6c874758a9cf0"
  },
  {
    "url": "assets/js/41.abf315c5.js",
    "revision": "e5c78b834b87e28b958058c94822596a"
  },
  {
    "url": "assets/js/42.72f05593.js",
    "revision": "d78cc7a83177a1d3bd785fd0286fe625"
  },
  {
    "url": "assets/js/43.15af8870.js",
    "revision": "53f4ff248f91cab375f00e01a7ebf01a"
  },
  {
    "url": "assets/js/44.49c704b2.js",
    "revision": "5be850db703f25d494d7597c3c7a7799"
  },
  {
    "url": "assets/js/45.26d13e04.js",
    "revision": "734f75dffbd18de70dc34208c00d452a"
  },
  {
    "url": "assets/js/46.9608108f.js",
    "revision": "8c3f4482f2097fdc5a36768c1b95268f"
  },
  {
    "url": "assets/js/5.03b00aeb.js",
    "revision": "41577f12e7d46e06c083254976ba42ef"
  },
  {
    "url": "assets/js/6.3ce8509d.js",
    "revision": "72506eadb88e8ae4a83ca1d68dc8cfa3"
  },
  {
    "url": "assets/js/7.dde54aac.js",
    "revision": "de6287deba458ad384afa70b37ff77a1"
  },
  {
    "url": "assets/js/8.236bd57a.js",
    "revision": "c34946019d8c82c93dc3c6b8ab0f8978"
  },
  {
    "url": "assets/js/9.b24ce27e.js",
    "revision": "fbeaf216a09324bb59e0dbb47ad71ac5"
  },
  {
    "url": "assets/js/app.eb6315c1.js",
    "revision": "bf1ca96809431b4c8ce01d437130700d"
  },
  {
    "url": "assets/js/vendors~flowchart.cfb01c61.js",
    "revision": "f163cec474575182ebf33dc2e26cbeb4"
  },
  {
    "url": "assets/js/vendors~notification.c64967ec.js",
    "revision": "38da61a7d76216a081853e1d513648ff"
  },
  {
    "url": "config/index.html",
    "revision": "cba79569bba1bf43f85b561ce25f84d5"
  },
  {
    "url": "guide/api-event.html",
    "revision": "c607016ecd7f31ca7ec7a04c3f91a2d6"
  },
  {
    "url": "guide/assets.html",
    "revision": "fe2ac6d3641633e736b848a91536cb76"
  },
  {
    "url": "guide/build-package.html",
    "revision": "ec1a966cb92a6448478d8718ab721366"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "6d1eb535deaa59cdf56651ff9ef6973b"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "478f890c2b3db0b5fef1c095876f8a0f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bb434e510c82d67198bf4e15b4299f21"
  },
  {
    "url": "guide/global-help.html",
    "revision": "7cea86c224e160415b3dad25ccf36c96"
  },
  {
    "url": "guide/index.html",
    "revision": "c39cec7edb672376b800ae7a35cc2d8b"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "f0111405d9fc1e6c5c6f612cef8eb643"
  },
  {
    "url": "guide/network-request.html",
    "revision": "2a67bf12000ed38f26fc2ec787f92bfc"
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
    "revision": "2c3a25d19f87a5df4dac6137392c7074"
  },
  {
    "url": "video/first.html",
    "revision": "7aeacab4c8e57dab9ecd87ac3aace19e"
  },
  {
    "url": "video/index.html",
    "revision": "85bc674c0efd3bc49f4d6e976bfc335d"
  },
  {
    "url": "video/second.html",
    "revision": "50b54afaa39b45f29d5125169ed9eaab"
  },
  {
    "url": "video/third.html",
    "revision": "17a894ae23f7be85a92c258d23114e80"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9ebebe6969c993fb7b3bb07882ba8d95"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "4f62cb387c97a8738a5c3846710cf325"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "044604919e4d02f0da6c08d0435c88aa"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "fa1501987ac0351e4fe9616fed9ba4cc"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "f36ae8ce3145e64b83808a0d14a76784"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "633fe0f11d6c4a77f5f1189080623e61"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "707f826390fdecaaa07329d54aa0d313"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "1c527f3e56fec961067dfc6ab7a33d0a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "501e79e78626d3cf8a1913866b38fa44"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "ed83803f4c001dc1513c3a976251b5ac"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "47e357cf96d76798cd3529a48ad518db"
  },
  {
    "url": "zh/index.html",
    "revision": "f72bfbb383c05270b634afc409632a68"
  },
  {
    "url": "zh/video/first.html",
    "revision": "c19a6285c08409dd16bd3d059c0fe2c8"
  },
  {
    "url": "zh/video/index.html",
    "revision": "db1a217a0af757221bb2fabbe68734df"
  },
  {
    "url": "zh/video/second.html",
    "revision": "01d7fcba1609b3e27de661236526a533"
  },
  {
    "url": "zh/video/third.html",
    "revision": "7c5bc1975ad70ad57bc6d8f7720ebb03"
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
