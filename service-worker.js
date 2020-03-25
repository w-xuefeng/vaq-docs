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
    "url": "assets/js/10.0b1bb6b3.js",
    "revision": "ca54d28fa99d0b3f04b8a258614f8119"
  },
  {
    "url": "assets/js/11.6753d2df.js",
    "revision": "36f0789c7fc2ed96315f486ca0872d14"
  },
  {
    "url": "assets/js/12.fec25723.js",
    "revision": "8575748844ba3689f6ffa549c047051e"
  },
  {
    "url": "assets/js/13.9277d7ae.js",
    "revision": "9c8679c188f7b3adaa07ecbdf10b8de8"
  },
  {
    "url": "assets/js/14.3b1f0724.js",
    "revision": "e2030aa6dae65f6affd66c1ccbb126d3"
  },
  {
    "url": "assets/js/15.16a6b29c.js",
    "revision": "01d466f37d4c0d7e9129fa84e27ed1d1"
  },
  {
    "url": "assets/js/16.8b041a8b.js",
    "revision": "baea4f36cff567c833d5c87d8ffd95be"
  },
  {
    "url": "assets/js/17.0ed9b582.js",
    "revision": "406dc238e419f24244f3fbacb4aa0567"
  },
  {
    "url": "assets/js/18.479c68ca.js",
    "revision": "8544e87789b07d2a685bd462742b8eaa"
  },
  {
    "url": "assets/js/19.cf25de64.js",
    "revision": "a85c1cec0e97bb78f88cf14905cb3589"
  },
  {
    "url": "assets/js/20.441231db.js",
    "revision": "13b7f29fd40466f1ecad999b843cab1d"
  },
  {
    "url": "assets/js/21.d26c91be.js",
    "revision": "a3181aec97e1e3a789aec7cb1bbdb64f"
  },
  {
    "url": "assets/js/22.810f9ec2.js",
    "revision": "3cb3fcfd23f74899f1563cd3dd49c4eb"
  },
  {
    "url": "assets/js/23.eb307d76.js",
    "revision": "4fb376449df94bfed68c6a6b23b22335"
  },
  {
    "url": "assets/js/24.2283ac0a.js",
    "revision": "e9c0a3e99541f63ffd5e26c867a8c262"
  },
  {
    "url": "assets/js/25.60c2d414.js",
    "revision": "e9a3d8e05e1476980651abb9058e7fb7"
  },
  {
    "url": "assets/js/26.a72be368.js",
    "revision": "3bf5cfff8d08c4b0a2c1fcfc2a145e0a"
  },
  {
    "url": "assets/js/27.1feed6e2.js",
    "revision": "5456ed8b5ec4f4388dee9e005c170aa9"
  },
  {
    "url": "assets/js/28.9fb88bd2.js",
    "revision": "ffd4db2de4a5eebf1fcff35295e99659"
  },
  {
    "url": "assets/js/29.4bc96d85.js",
    "revision": "2a986b6278a867229505610367f9288e"
  },
  {
    "url": "assets/js/30.91987e97.js",
    "revision": "34f20ca3c9a9fbe4b074f7f91944dcbf"
  },
  {
    "url": "assets/js/31.1c02d00e.js",
    "revision": "4698469fb5faff8068986ce446915a55"
  },
  {
    "url": "assets/js/32.0d3f6a90.js",
    "revision": "88bf7d300b20a29b4469773c043dfee1"
  },
  {
    "url": "assets/js/33.bf000c6e.js",
    "revision": "d6837a87adf83c3b83db173802059f38"
  },
  {
    "url": "assets/js/34.bd37fc5e.js",
    "revision": "7f0399da6b346d96ca672af41ffd29c7"
  },
  {
    "url": "assets/js/35.4e6c05ea.js",
    "revision": "b29d89909d1d5b44cf607c4f0c73cbc8"
  },
  {
    "url": "assets/js/36.b0348863.js",
    "revision": "8f67dc7d2fe25cca3ef32c4efb828783"
  },
  {
    "url": "assets/js/4.b243987d.js",
    "revision": "d737851428deaff0bbc0781178363b2f"
  },
  {
    "url": "assets/js/5.28059cdc.js",
    "revision": "7d1a3ce1c69900b429c64665fb33e918"
  },
  {
    "url": "assets/js/6.88ae504a.js",
    "revision": "7195bd935601774ff84c06c428bc3937"
  },
  {
    "url": "assets/js/7.77035419.js",
    "revision": "e18bdfae537b41ec92eecdc6f880c876"
  },
  {
    "url": "assets/js/8.ebf1fe2f.js",
    "revision": "7cce679d0b68c0bfe3378e9f7cf52c68"
  },
  {
    "url": "assets/js/9.f56baf6f.js",
    "revision": "c1c8f67c0713b0a0e13466886cefe7cb"
  },
  {
    "url": "assets/js/app.61ba7ad2.js",
    "revision": "cd9fc2b21a6aa4a37fd73c1e0360ebef"
  },
  {
    "url": "assets/js/vendors~flowchart.b6c3a119.js",
    "revision": "d6e9ea720cd9f72cbab272f75e209f50"
  },
  {
    "url": "assets/js/vendors~notification.48f318ab.js",
    "revision": "af758111b0205f31b9321f90c9d7d71b"
  },
  {
    "url": "config/index.html",
    "revision": "c4d10089b2db3863cd859281882f0f4b"
  },
  {
    "url": "guide/api-event.html",
    "revision": "0d05ebcb6948d10443167f3f36670281"
  },
  {
    "url": "guide/assets.html",
    "revision": "044abf9e4c059057e2846305fa93bdff"
  },
  {
    "url": "guide/build-package.html",
    "revision": "0f1a9fa9c6a15256decbf08eb6c44270"
  },
  {
    "url": "guide/dev-tools.html",
    "revision": "6dc52c3266d019a366f2407ee55cd8e0"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2446f6901157ffd021f0592c7f71e15f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "07432ab863cb3d5e7859d9faaa7565de"
  },
  {
    "url": "guide/global-help.html",
    "revision": "d1ca20f1dea9e3cc5c078df5d162f4b5"
  },
  {
    "url": "guide/index.html",
    "revision": "47ea84d3fe7f75b2e38bedab933d4949"
  },
  {
    "url": "guide/life-cycle.html",
    "revision": "c266e58ffe8de00095b5f4ed45d4a8ed"
  },
  {
    "url": "guide/network-request.html",
    "revision": "12ab74e0466dd8b480b0991aa0a91cdb"
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
    "revision": "75370d049ed8ca97303a0fca82f63281"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b040c424e6c19761a84933b69e4bf262"
  },
  {
    "url": "zh/guide/api-event.html",
    "revision": "98d3c4793ab8c5a37c9c97d46195ff57"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "400aa34e80a5eb1e14f8e7162c3b73bc"
  },
  {
    "url": "zh/guide/build-package.html",
    "revision": "c377dac2a2cccb694b20701fd5606fdb"
  },
  {
    "url": "zh/guide/dev-tools.html",
    "revision": "d9466145145f744f377ac10d56d29000"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "7e2593e60f9736f7b9729fcb226d3ba5"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "50e58486a444177ab9d1738ca3420c45"
  },
  {
    "url": "zh/guide/global-help.html",
    "revision": "353e116cb7a6e3a2b106bb231695590e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4d2464086406f9ddf7fe85882d9028e4"
  },
  {
    "url": "zh/guide/life-cycle.html",
    "revision": "bb15d3d421c8d94d16970786b1ce1e5b"
  },
  {
    "url": "zh/guide/network-request.html",
    "revision": "8f3c22e1a42debc4ed85dbd775c66628"
  },
  {
    "url": "zh/index.html",
    "revision": "2536a29c11221156b5cb113990a6f809"
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
