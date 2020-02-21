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
    "revision": "04b14db22334067b8508b4863f177361"
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
    "url": "assets/js/10.83e9b541.js",
    "revision": "a763315290c11848e671c33c924d23ac"
  },
  {
    "url": "assets/js/11.73269247.js",
    "revision": "341f5a8da8167141d84f94c286ce928b"
  },
  {
    "url": "assets/js/12.57f35184.js",
    "revision": "d8f621d6f014868eb98c6bd5b70ed1b2"
  },
  {
    "url": "assets/js/13.07512076.js",
    "revision": "b7d8bf582fa742673e40ac2e7cfcc79e"
  },
  {
    "url": "assets/js/14.a6b9b890.js",
    "revision": "740145c0121e33d12a745a615e4741c7"
  },
  {
    "url": "assets/js/15.eb0df6ab.js",
    "revision": "d8aa099e1d6633406113f68282fc2601"
  },
  {
    "url": "assets/js/16.38ec10d4.js",
    "revision": "be21868270d63573de6e5eb9db737ab1"
  },
  {
    "url": "assets/js/17.e5b9ced9.js",
    "revision": "b9b9bcf30fc368082fc11a0faf17a3d4"
  },
  {
    "url": "assets/js/18.9bbce4be.js",
    "revision": "1043b4ae29d1b702d8ae9598db7face6"
  },
  {
    "url": "assets/js/19.1e433ebf.js",
    "revision": "8b162b45cbbad646cb37280d4463a80c"
  },
  {
    "url": "assets/js/20.318859d0.js",
    "revision": "a79c37398f3e25a3cb9ecffdc483e6ac"
  },
  {
    "url": "assets/js/21.ed266fd9.js",
    "revision": "dd10a5be609538c6c800943e148c5662"
  },
  {
    "url": "assets/js/22.ac389e3c.js",
    "revision": "ab79883ee5fc5f0770baf8608e3abb50"
  },
  {
    "url": "assets/js/23.823f1709.js",
    "revision": "79f88b3dd6aeded98ecd5f5880f14a12"
  },
  {
    "url": "assets/js/24.14c3ce72.js",
    "revision": "c7d6a1a2f4057e1f8476970f7cbc900e"
  },
  {
    "url": "assets/js/25.12801f00.js",
    "revision": "e482075fb33b6969e8ad4f2b392fcaa3"
  },
  {
    "url": "assets/js/26.a491d820.js",
    "revision": "0c7d6a6d22a10ce33491485983c8e07d"
  },
  {
    "url": "assets/js/27.a5e86906.js",
    "revision": "e377fe85ca28c45a68fce4950a42c086"
  },
  {
    "url": "assets/js/28.09b65e47.js",
    "revision": "eb239d91fe9b4bab52bd012b8282242c"
  },
  {
    "url": "assets/js/29.17cc0e81.js",
    "revision": "25cb195566f312f545260bddb9317b59"
  },
  {
    "url": "assets/js/30.cf41b7ba.js",
    "revision": "65e7d0b859758edc400948a45da8eed1"
  },
  {
    "url": "assets/js/31.4347063d.js",
    "revision": "11a5ef410ee49683d009ed971ef30696"
  },
  {
    "url": "assets/js/32.6f756bd3.js",
    "revision": "ba3a609682d30252d3195b49ae335ab9"
  },
  {
    "url": "assets/js/33.af7a4e77.js",
    "revision": "e2ee9c8f28fd93e8f552cf1d56a8eccb"
  },
  {
    "url": "assets/js/34.7cf69a8f.js",
    "revision": "ce33b49cb4904d697b9f54b058942620"
  },
  {
    "url": "assets/js/35.ccf185d2.js",
    "revision": "2b02969c39b3d9de65d59a42d7dd9a61"
  },
  {
    "url": "assets/js/4.eebe3e00.js",
    "revision": "cec3812f0e4eddef0e876792a48c144f"
  },
  {
    "url": "assets/js/5.eb9ad1fc.js",
    "revision": "bf6564c422e691da2c688f6eb31f18a4"
  },
  {
    "url": "assets/js/6.dd4da767.js",
    "revision": "a6720960e10bac23cb69f6e62a6a5943"
  },
  {
    "url": "assets/js/7.15d4f296.js",
    "revision": "5ea61b5cbd7ca4a91efcab99c744358a"
  },
  {
    "url": "assets/js/8.429d4ef3.js",
    "revision": "0ee7d8fd9dc3ee1337e46bb8b1de45a4"
  },
  {
    "url": "assets/js/9.b6e90304.js",
    "revision": "9e3857ab3d39953f2d81c06c1bee1843"
  },
  {
    "url": "assets/js/app.378268f2.js",
    "revision": "6bb39b0fed6df4fac3e6cff5e27dfcb9"
  },
  {
    "url": "assets/js/vendors~flowchart.1d34db29.js",
    "revision": "93939fe80f0d78c50b73ead1ae24dd9f"
  },
  {
    "url": "assets/js/vendors~notification.bc996db8.js",
    "revision": "3c4b50edf242fdcd96b03a16044bce8d"
  },
  {
    "url": "config/index.html",
    "revision": "a26a2974bddea5c05e12410b301561a4"
  },
  {
    "url": "guide/api-event.html",
    "revision": "44464971ef17a267736e95d165aef091"
  },
  {
    "url": "guide/assets.html",
    "revision": "1e5680668c7c530480ddb1091879d047"
  },
  {
    "url": "guide/build-package.html",
    "revision": "530202259e67f197696b9e09ae073405"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "42cb1ef5b1d6d6e772470286311ab0c3"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2e074a9b33ed6af0f942ca04fc9e312e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "30e231655e0aceeba7dd94045866894a"
  },
  {
    "url": "guide/global-help.html",
    "revision": "56a63006aa94e769974d5fa803858894"
  },
  {
    "url": "guide/index.html",
    "revision": "700b8760b7207cb77ca56bcc51741f76"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "f11db228a524498b534d5b04ea9b4324"
  },
  {
    "url": "guide/network-request.html",
    "revision": "314406e84ae15e2354f1ce2eb03e6752"
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
    "revision": "5b82ec3f23ebd91909be273f765a6594"
  },
  {
    "url": "zh/config/index.html",
    "revision": "254066d30dd8a82322e60b49e800b056"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "172accce59b42ae2c448090b0e7eae24"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "95840c48e5253e3c9057214b7185dec4"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "abb95626740e58011daa37b66ae1c885"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "af9ee41f7d4217e90a5c64a706856ca4"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "a26df88d09e3ee80a150bd8d732ab8c5"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "261bb8e36953e9b54a836fecabbf670d"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "6ed9dd33f68810a35f686b3d375a9a39"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ae6bf681540a33ba30f8253f1f395f0a"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "396520ef7b55db348c4cf2132fb9b65f"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "104278afc1a57fa2bd1594dad839816b"
  },
  {
    "url": "zh/index.html",
    "revision": "30b73179f68821ca444eb1f15eb47913"
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
