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
    "revision": "9fd018509e6066f45022905c6c8be61b"
  },
  {
    "url": "assets/css/0.styles.71d6eec3.css",
    "revision": "2f27c25e4ac31cc22edb40535f2fb607"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8953a5e3.js",
    "revision": "a763315290c11848e671c33c924d23ac"
  },
  {
    "url": "assets/js/11.9e8f4d90.js",
    "revision": "341f5a8da8167141d84f94c286ce928b"
  },
  {
    "url": "assets/js/12.880d1216.js",
    "revision": "d8f621d6f014868eb98c6bd5b70ed1b2"
  },
  {
    "url": "assets/js/13.4882d7b8.js",
    "revision": "b7d8bf582fa742673e40ac2e7cfcc79e"
  },
  {
    "url": "assets/js/14.6bc88d39.js",
    "revision": "740145c0121e33d12a745a615e4741c7"
  },
  {
    "url": "assets/js/15.8f25b916.js",
    "revision": "d8aa099e1d6633406113f68282fc2601"
  },
  {
    "url": "assets/js/16.db8b3147.js",
    "revision": "be21868270d63573de6e5eb9db737ab1"
  },
  {
    "url": "assets/js/17.8bee4221.js",
    "revision": "b9b9bcf30fc368082fc11a0faf17a3d4"
  },
  {
    "url": "assets/js/18.ade5a067.js",
    "revision": "1043b4ae29d1b702d8ae9598db7face6"
  },
  {
    "url": "assets/js/19.f8b0f446.js",
    "revision": "8b162b45cbbad646cb37280d4463a80c"
  },
  {
    "url": "assets/js/20.0ad3ccae.js",
    "revision": "a79c37398f3e25a3cb9ecffdc483e6ac"
  },
  {
    "url": "assets/js/21.6777e8ee.js",
    "revision": "dd10a5be609538c6c800943e148c5662"
  },
  {
    "url": "assets/js/22.6aa90bf9.js",
    "revision": "a58a5558bf400c4f580306ad3fa5ec6c"
  },
  {
    "url": "assets/js/23.a8ad1c7b.js",
    "revision": "79f88b3dd6aeded98ecd5f5880f14a12"
  },
  {
    "url": "assets/js/24.064dd130.js",
    "revision": "c7d6a1a2f4057e1f8476970f7cbc900e"
  },
  {
    "url": "assets/js/25.54e23a68.js",
    "revision": "e482075fb33b6969e8ad4f2b392fcaa3"
  },
  {
    "url": "assets/js/26.70e3807a.js",
    "revision": "0c7d6a6d22a10ce33491485983c8e07d"
  },
  {
    "url": "assets/js/27.b65aa959.js",
    "revision": "e377fe85ca28c45a68fce4950a42c086"
  },
  {
    "url": "assets/js/28.6a8d6aad.js",
    "revision": "eb239d91fe9b4bab52bd012b8282242c"
  },
  {
    "url": "assets/js/29.49aa2b78.js",
    "revision": "25cb195566f312f545260bddb9317b59"
  },
  {
    "url": "assets/js/30.b5701d27.js",
    "revision": "65e7d0b859758edc400948a45da8eed1"
  },
  {
    "url": "assets/js/31.cc17588b.js",
    "revision": "11a5ef410ee49683d009ed971ef30696"
  },
  {
    "url": "assets/js/32.f216aea1.js",
    "revision": "ba3a609682d30252d3195b49ae335ab9"
  },
  {
    "url": "assets/js/33.13a874ad.js",
    "revision": "e2ee9c8f28fd93e8f552cf1d56a8eccb"
  },
  {
    "url": "assets/js/34.10aa78f9.js",
    "revision": "beb1dd0b69569e599215e2c6adf6494d"
  },
  {
    "url": "assets/js/35.a0a9ff8b.js",
    "revision": "2b02969c39b3d9de65d59a42d7dd9a61"
  },
  {
    "url": "assets/js/4.a21c4009.js",
    "revision": "cec3812f0e4eddef0e876792a48c144f"
  },
  {
    "url": "assets/js/5.301a3c30.js",
    "revision": "bf6564c422e691da2c688f6eb31f18a4"
  },
  {
    "url": "assets/js/6.1c389658.js",
    "revision": "a6720960e10bac23cb69f6e62a6a5943"
  },
  {
    "url": "assets/js/7.3df693fb.js",
    "revision": "5ea61b5cbd7ca4a91efcab99c744358a"
  },
  {
    "url": "assets/js/8.90a8cb9c.js",
    "revision": "0ee7d8fd9dc3ee1337e46bb8b1de45a4"
  },
  {
    "url": "assets/js/9.a8caca65.js",
    "revision": "9e3857ab3d39953f2d81c06c1bee1843"
  },
  {
    "url": "assets/js/app.f3542d3c.js",
    "revision": "ff13421fa1edb5584fa87468137bb151"
  },
  {
    "url": "assets/js/vendors~flowchart.45f32910.js",
    "revision": "edb2b6f13d20967f0bff6095b655ebb4"
  },
  {
    "url": "assets/js/vendors~notification.defb923b.js",
    "revision": "4f654f7da455c695fb1f0f2105c84d8f"
  },
  {
    "url": "config/index.html",
    "revision": "64d6b5ae8ccef34031db44124054c36b"
  },
  {
    "url": "guide/api-event.html",
    "revision": "c02983139991b44b7874912a02c26b4f"
  },
  {
    "url": "guide/assets.html",
    "revision": "4e0e96da43e7320901fd226f3d8d7c7c"
  },
  {
    "url": "guide/build-package.html",
    "revision": "fdcbfe1d3b62683932c881c003d8a193"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "4282de6c36893a21ff511b3523a4c4a1"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8dfe04e22d1825fcddead55c79bc9fcd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d1f60fe0078449010623141693070f40"
  },
  {
    "url": "guide/global-help.html",
    "revision": "21a73e7a4232d0d57659084dc1095402"
  },
  {
    "url": "guide/index.html",
    "revision": "0e61a36c1046691727a91235185674c6"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "5af99f5af1a85e0d1bfe28be186b677c"
  },
  {
    "url": "guide/network-request.html",
    "revision": "750187b60603483f2203d0169cef92be"
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
    "revision": "b68a014bad1ae23ee148a1d8784d2a6b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "2cb02e9b19c514090b56883253611bc9"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "ee125b590956beed3c3270f191a9a796"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "8f61a783df504025b0cfe3b982fb8dcb"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "9b001c57d854f400058dc6f4ff421779"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "8eb2ca09814c9754974f7889a22f8940"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "996f11cdb20379e5cb5c25ab4bce471c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "0c77fb5f351448729e1ec75353e7ea3b"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "4ba7e0bd4581e5238eddc93630d2a4ec"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e490e9fbcf1756cd6aa351f1730d6f3b"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "2a9c8ca50c27523c524c560a505b8372"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "ed489e7336634d181700b9b8e784687d"
  },
  {
    "url": "zh/index.html",
    "revision": "c86ba20b806f426baf7e507d32b14fca"
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
