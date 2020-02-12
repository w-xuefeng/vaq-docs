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
    "revision": "350a081762f7a98416ed27db2bf3f1be"
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
    "url": "assets/js/13.a8c8e055.js",
    "revision": "3c75d6ad99192d77a90c3160d0af50a8"
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
    "url": "assets/js/17.82e054ec.js",
    "revision": "3bf5ed7f0fe9eb24225d9650d9f10d4e"
  },
  {
    "url": "assets/js/18.7c454483.js",
    "revision": "d3ad80d90963a743c7ea5f77ffa1e359"
  },
  {
    "url": "assets/js/19.f3acad95.js",
    "revision": "25778ed954304ba8a58e93d00f02aa6f"
  },
  {
    "url": "assets/js/20.b98509e3.js",
    "revision": "109d69359ffa2deb4dcf9652c6f0ac9a"
  },
  {
    "url": "assets/js/21.996f2752.js",
    "revision": "79f70b78d90f8f8fc8f84f02f25b8a6c"
  },
  {
    "url": "assets/js/22.cec86849.js",
    "revision": "d2431b9aa16ea1e22a10715c670ed033"
  },
  {
    "url": "assets/js/23.8a9a41c4.js",
    "revision": "db6a5fd937f96af6133de938f36a55d7"
  },
  {
    "url": "assets/js/24.dc5368da.js",
    "revision": "336dc5f05b8390d79746f8d79c067453"
  },
  {
    "url": "assets/js/25.8d49276e.js",
    "revision": "e9dca8ba79df96c3861f1f4e0508e712"
  },
  {
    "url": "assets/js/26.789a609e.js",
    "revision": "9210845f086ab8cfa667635439f20ead"
  },
  {
    "url": "assets/js/27.5750abc7.js",
    "revision": "366cc32734ce5b5d6cb27f4fced9188b"
  },
  {
    "url": "assets/js/28.11f18b7f.js",
    "revision": "3fd6175e2a3fabd41ab3fcef51d23a63"
  },
  {
    "url": "assets/js/29.1e5b9e2f.js",
    "revision": "02585012e904c5408b53a0221c6c01a3"
  },
  {
    "url": "assets/js/30.4a424412.js",
    "revision": "c67e2e953e15d4c03663a0aaa1fc5d5f"
  },
  {
    "url": "assets/js/31.8c562316.js",
    "revision": "39db02ff63d7214c1ddd878e1810becf"
  },
  {
    "url": "assets/js/32.3b60401f.js",
    "revision": "01e864921cd1d236ebb3c16e2b3b0e3a"
  },
  {
    "url": "assets/js/33.c1088818.js",
    "revision": "f398f3834b3ca883085a4c3296663941"
  },
  {
    "url": "assets/js/34.64a6d571.js",
    "revision": "6eec9894a5ac1655693008ce12e5fc53"
  },
  {
    "url": "assets/js/35.e9845dd1.js",
    "revision": "60f01edde4e8c1f9fc87b508620fd15e"
  },
  {
    "url": "assets/js/4.f39ac096.js",
    "revision": "18275d960e8c97c9bd6870dae1f65c01"
  },
  {
    "url": "assets/js/5.3e307c57.js",
    "revision": "23db96406e52f8761254a0f56cbf4dc3"
  },
  {
    "url": "assets/js/6.1ac18334.js",
    "revision": "881cce6dd9c8e90bace0f10d7a51be2b"
  },
  {
    "url": "assets/js/7.52bbbc06.js",
    "revision": "5b4b38a5cc83a9e23f8ee2c1331aa9dd"
  },
  {
    "url": "assets/js/8.92941673.js",
    "revision": "45121e3310316b9842a76f48598cbf39"
  },
  {
    "url": "assets/js/9.743f819b.js",
    "revision": "02c63f4eb53cb37b95b956fd6c946a84"
  },
  {
    "url": "assets/js/app.f4ba4af4.js",
    "revision": "0a5fad10a4dd7d6d0e87a2e4bd6b4861"
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
    "revision": "4908182871f3608753cc492963d40215"
  },
  {
    "url": "guide/api-event.html",
    "revision": "899d7592ab3f4a1a9f5917dffac30a88"
  },
  {
    "url": "guide/assets.html",
    "revision": "da19047e1ecf81c7726ad69aed16ec10"
  },
  {
    "url": "guide/build-package.html",
    "revision": "f38b3e08c09c6bd0958c2a737fa9f72a"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "22f2e1b929c37d288a7c33b3f0487709"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ced90829cbef022be2a3e885482cb92c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "41e5437528ff58cbe6c2758ec230a8ae"
  },
  {
    "url": "guide/global-help.html",
    "revision": "efacef0fc11511407f13cf991d501e51"
  },
  {
    "url": "guide/index.html",
    "revision": "cbe5d9a60594f5e6b399160a75377ebc"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "048b42bd683de2026709f8b9eb00d4e1"
  },
  {
    "url": "guide/network-request.html",
    "revision": "09ce37b04590bddcb741a669e2f13a2e"
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
    "revision": "b92f14a9dc029d9a0355a7bf2f0eeb1e"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9242e5e8393dc699402966fd1cef5f9c"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "05505f18846b00f74a4d7a77cb41ad8e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "2e42564abbb3c16b0a6d8ca83015e5d4"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "b9f327858716d2579497a2ddf5b69f5b"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "83baca3b40a9407b3f4b293636cacca0"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "69433d51107ad2c6dc4636e81f95d8da"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8731b968825d4181ff6c317d1a87a1fa"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "30d84a41c5a0f7a0d4954d4f942c794c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "52afd1efd0059deb9c5036c0293483b5"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "2e4cc2f76a20fd0d96def5befa4afe32"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "9ddbcb3e01c62d95a41c038b7b3abaed"
  },
  {
    "url": "zh/index.html",
    "revision": "2391cddeaf64102a702c0ba971d49a04"
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
