# Directory Structure

vue-apicloud-quickstart follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

<!-- textlint-disable terminology -->

::: vue
.
├── public                   # Static resource
│   ├── index.html           # Page template
│   └── res                  # Static resource
├── src
│   ├── pages                # Page entry
│   └── config               # Configuration entry
|       └── pages.js         # Page configuration
├── index.html               # APP entrance
├── config.xml               # APICloud project configuration file
├── .syncignore              # APICloud wifi-sync ignore file
├── ...
└── package.json
:::

<!-- textlint-enable -->

::: warning Note
When naming files and directories, please follow the code encryption specifications of the APICloud platform as much as possible, as follows：

- Folder naming, file naming cannot be `-` or more `.` , Do not have uppercase characters
- Example of correct file naming format: `login.js`
- Example of incorrect file naming format: `login-test.js`; `login.test.js`; `login-test-js.js`
- Example of correct folder naming format： `loginhtml`
- Example of incorrect folder naming format： `login-html`; `login.html`
:::

- `public`: Static resource directory.
- `public/index.html`: Page template.
- `public/res`: Directory of static media resources.
- `src/pages`: Page directory.
- `src/config`: Directory for the configuration files.
- `src/config/pages.js`: Page configuration file.
- `index.html`: The APP entrance is only used when debugging of Loader WiFi on the mobile side or formal packaging.
- `config.xml`: APICloud project configuration file.
- `.syncignore `: APICloud wifi-sync ignore file.

::: warning Note
When you want to create a new page in the `src/pages` directory, you must configure related parameters in` src/config/pages.js` to take effect.
:::

**Also see:**

- [Config](../config/README.md)

## Default Page

When debugging in the browser (`debugOnPC` is` true`), you need to manually enter the full page path in the address bar to properly open the page debugging.
For example, the following file directory structure exists:

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

The corresponding page configuration in the `src/config/pages.js` is as follows:

``` js
module.exports = [
  {
    title: 'Open ad page',
    name: 'index',
    path: 'index/index'
  },
  {
    title: 'login page',
    name: 'login',
    path: 'login/index'
  },
  {
    title: 'home page',
    name: 'home',
    path: 'home/index'
  },
  {
    title: 'web page',
    name: 'web',
    path: 'home/web'
  }
]

```
The corresponding compiled page file path is as follows:

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

::: tip tip
You can enter `/webpack-dev-server` in the browser to view the compiled file directory structure. The page of `index.html` is `Page Navigation`，iit is only used for PC browser side debugging page, which will be ignored when building package.
:::



