# 目录结构

vue-apicloud-quickstart 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

::: vue
.
├── public                   # 静态资源
│   ├── index.html           # 页面模板
│   └── res                  # 静态资源
├── src
│   ├── pages                # 页面入口
│   └── config               # 配置入口
|       └── pages.js         # 页面配置
├── index.html               # APP入口
├── config.xml               # APICloud 项目配置文件
├── .syncignore              # APICloud wifi 同步忽略文件
├── ...
└── package.json
:::

::: warning 注意
文件和目录命名时请尽量遵守 APICloud 平台的代码加密规范，如下：

- 文件夹命名，文件命名不能带 - 或多个. 不要有大写字符
- 正确文件命名格式举例：`login.js`
- 错误文件命名格式举例：`login-test.js`; `login.test.js`; `login-test-js.js`
- 正确文件夹命名格式举例： `loginhtml`
- 错误文件夹命名格式举例： `login-html`; `login.html`
:::

- `public`: 静态资源目录。
- `public/index.html`: 页面模板。
- `public/res`: 静态媒体资源目录。
- `src/pages`: 页面目录。
- `src/config`: 用于存放配置文件的目录。
- `src/config/pages.js`: 页面配置文件。
- `index.html`: APP入口，只有在移动端 Loader WiFi 调试或正式打包时才会使用。
- `config.xml`: APICloud 项目配置文件。
- `.syncignore `: APICloud wifi 同步忽略文件。

::: warning 注意
当你想要在`src/pages`目录下新建页面时，必须要在`src/config/pages.js`中配置相关参数才能生效。
:::

**同时阅读:**

- [配置](../config/README.md)

## 默认的页面

当在浏览器调试时（`debugOnPC` 为 `true`），需要手动在地址栏中输入完整的页面路径才能正确的打开页面调试。
例如，现有如下文件目录结构：

::: vue
.
├── public
│   ├── index.html
│   └── res
|        └── img
|             └── logo.png
├── src
|   |
│   ├── pages
|   |   ├── index
|   |   |   └── index.vue
|   |   ├── login
|   |   |   └── index.vue
|   |   └── home
|   |       ├── index.vue
|   |       └── web.vue
│   └── config
|       └── pages.js
:::

`src/config/pages.js` 文件中对应的页面配置如下：

``` js
module.exports = [
  {
    title: '开屏广告页',
    name: 'index',
    path: 'index/index'
  },
  {
    title: '登录页',
    name: 'login',
    path: 'login/index'
  },
  {
    title: '应用首页',
    name: 'home',
    path: 'home/index'
  },
  {
    title: 'web页面',
    name: 'web',
    path: 'home/web'
  }
]

```
则其对应的编译后页面文件路径如下：

::: vue
.
├── js
│   ├── chunk-vendors.js
│   ├── indexindex.js
│   ├── loginindex.js
│   ├── homeindex.js
│   └── homeweb.js
├── index.html
├── indexindex.html
├── loginindex.html
├── homeindex.html
├── homeweb.html
├── favicon.ico
├── res
│    └── img
│         └── logo.png
:::

::: tip 提示
可以在浏览器中输入 `/webpack-dev-server` 查看编译后的文件目录结构。其中 `index.html` 为`页面导航`，仅用于 PC 浏览器端调试页面，构建打包时将会忽略该页面。
:::

