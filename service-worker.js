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
    "revision": "3a4c3ffca049fe6fa6265ef9ff85897f"
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
    "url": "assets/js/10.c457d104.js",
    "revision": "e31d8b5506e8dd5e7b4cb3f2fc7ef24c"
  },
  {
    "url": "assets/js/11.b3111ddf.js",
    "revision": "1af121e92e517abd59cbea77516444b8"
  },
  {
    "url": "assets/js/12.d7cdd6b0.js",
    "revision": "502c23e3ef93ffa223c27deb70b3db99"
  },
  {
    "url": "assets/js/13.12f3da5f.js",
    "revision": "31c623c50cfcee40a2ff8320bbe750bc"
  },
  {
    "url": "assets/js/14.c48b1415.js",
    "revision": "b8ff30f5db73896d777f6bce25b878cd"
  },
  {
    "url": "assets/js/15.9c3094e2.js",
    "revision": "9ba9a3a2852c75b0538a19e86c4ce678"
  },
  {
    "url": "assets/js/16.a4cf6268.js",
    "revision": "34e52dd3a8022ad1fe31a09d3a120d4f"
  },
  {
    "url": "assets/js/17.a2572546.js",
    "revision": "c6ee9a3fc9b02ee56362e525971f78e4"
  },
  {
    "url": "assets/js/18.309be781.js",
    "revision": "f503c33077eb5ec3e2e2ca5635fc6029"
  },
  {
    "url": "assets/js/19.d02438c8.js",
    "revision": "d116758f96945f1e2375e420fa9914db"
  },
  {
    "url": "assets/js/20.a960fa34.js",
    "revision": "d2acd71ee66e2845181642d15226fe40"
  },
  {
    "url": "assets/js/21.707986d8.js",
    "revision": "814ff1d3837ab92e194a095acf788752"
  },
  {
    "url": "assets/js/22.332eb7fc.js",
    "revision": "be6a7023d055da1ac6a11a38324d77bd"
  },
  {
    "url": "assets/js/23.24a6be03.js",
    "revision": "6e2a3212572f5962e4bd39398c5bee7a"
  },
  {
    "url": "assets/js/24.06478150.js",
    "revision": "e3c99085565c9f4cc5c433082f8e3217"
  },
  {
    "url": "assets/js/25.458df8d8.js",
    "revision": "7ce7f6d3ff80add0264773cf99332008"
  },
  {
    "url": "assets/js/26.adf350be.js",
    "revision": "11cd61972132c1b74e60572bc45e95b1"
  },
  {
    "url": "assets/js/27.b441d0d6.js",
    "revision": "b81df3c54da52427e3440b45a6d8d60c"
  },
  {
    "url": "assets/js/28.d29d0ced.js",
    "revision": "e97556939f0326516d594cc6cb9a9ca1"
  },
  {
    "url": "assets/js/29.bebebac5.js",
    "revision": "b025dba8606d5e4dd1df8dd3ba51b68b"
  },
  {
    "url": "assets/js/30.a5657747.js",
    "revision": "bdba14fbe7f78156bbe8728403730b55"
  },
  {
    "url": "assets/js/31.77e22e06.js",
    "revision": "7f8e5fb3daf7ed42bfefd1bb8d2abcc4"
  },
  {
    "url": "assets/js/32.82e2c8d7.js",
    "revision": "802f265547171b8bf911d59ac2f3b754"
  },
  {
    "url": "assets/js/33.4a40a253.js",
    "revision": "93e682bfb73076113bf3bdad21e5b77c"
  },
  {
    "url": "assets/js/4.f39ac096.js",
    "revision": "18275d960e8c97c9bd6870dae1f65c01"
  },
  {
    "url": "assets/js/5.b7d3e44e.js",
    "revision": "5fe235e49305516ba5803b06ae42fd9b"
  },
  {
    "url": "assets/js/6.01716a2d.js",
    "revision": "684b31a5452d6f6545cffcd45f1ca8e8"
  },
  {
    "url": "assets/js/7.cb38cd79.js",
    "revision": "9bf303a02e28c7a77d3dd33a62ab05de"
  },
  {
    "url": "assets/js/8.92941673.js",
    "revision": "45121e3310316b9842a76f48598cbf39"
  },
  {
    "url": "assets/js/9.03fc4603.js",
    "revision": "9ab08d2f0c1f0df6d5674644349817a5"
  },
  {
    "url": "assets/js/app.6daf40ca.js",
    "revision": "1e06decb452dad3e64453e84e7916d96"
  },
  {
    "url": "assets/js/vendors~flowchart.eccf2bad.js",
    "revision": "48a682ff438e6a02922b0de94eb1853c"
  },
  {
    "url": "assets/js/vendors~notification.bc996db8.js",
    "revision": "3c4b50edf242fdcd96b03a16044bce8d"
  },
  {
    "url": "config/index.html",
    "revision": "72b7f7b88ede3e930bd122032056b03c"
  },
  {
    "url": "guide/api-event.html",
    "revision": "20eaf10e6f6b4f2806f5d17b071e66cc"
  },
  {
    "url": "guide/assets.html",
    "revision": "794e83b86314e5ab0aa9818357f7152f"
  },
  {
    "url": "guide/build-package.html",
    "revision": "b3191319101f2e4ec9c20e18ae083fc8"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "9889d8e0b5b4b4f12e6eaf2566e92810"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c2dbe0b41c848ed1eeb8ae159f12ef10"
  },
  {
    "url": "guide/global-help.html",
    "revision": "649244d1c4cd9774bfc38f59be9643fe"
  },
  {
    "url": "guide/index.html",
    "revision": "d464253dc1a3041089654899d6ed61a5"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "1e8c83dd8e6c105ef00f2e6d7b50b696"
  },
  {
    "url": "guide/network-request.html",
    "revision": "e306728d40b964f751735488f22e9ea9"
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
    "url": "index.html",
    "revision": "86bb9d2c995f5b8fd597f592175cfe3f"
  },
  {
    "url": "zh/config/index.html",
    "revision": "cf1e1ae1408c36747855be15a5e242b0"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "64f96bb14b940120fe759d2c0950cff0"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a20321a981a8aa70936425a28260c4ea"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "a83a1871df202897c43d894a7d340f24"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "8346844c88d7519e95309f1465ea347a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a35acae0a81d79fec42d46c47bac68c1"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "7f73443e0e34fc791ed34c64dd14a0fb"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5f2aa3a728dd6f6af6e321c5834d560c"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "3abde970f89cc8b1e71f39a39b1fc5ad"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "fcd1f514a343150f1afdf8228805ffa5"
  },
  {
    "url": "zh/index.html",
    "revision": "03091e141b94f237f65b4f440ac206a5"
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
