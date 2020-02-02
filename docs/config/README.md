---
sidebarDepth: 3
sidebar: auto
---

# Config Reference

## Param Config

  ```js {4,10,11}
  import App from './App.vue'
  import Vue from 'vue'
  import VAQ from 'vue-apicloud-quickstart'
  import pages from '@/config/pages'

  Vue.config.productionTip = false

  Vue
    .use(VAQ, {
      pages,
      debugOnPC: true
    })
    .init({
      el: '#app',
      render: h => h(App)
    })
  ```

### pages

- Type: `Array`
- Default: `none`

For page configuration, configure 'title', 'name', 'path' of each page, similar to 'page routing'. For details, see [Pages Config](#pages-config)

### debugOnPC

- Type: `Boolean`
- Default: `false`

  - When `debugOnPC` is the default value `false`, the instance of Vue page will execute in hooks of `apiready`, so the debugging page cannot be previewed in PC browser.
  - When `debugOnPC` is true, `new vue()` will be executed directly to create a page instance. At this time, all `api` related statements cannot be executed, but the page content unrelated to `api` will be displayed in the browser normally.

  - Recommended scenarios
    - When development page and debugging the style in the early, you could set debugonpc to true, which can be debugged in the PC browser
    - When development and debugging function later, you could set debugOnPC to false, debugging in custom Loader.
    - Or you can always set debugOnPC to false and debug in custom Loader.
  - Because apicloud will inject global variables `api `into `window` in apploader or custom loader, the ability to call native modules can be realized through `api` when using loader debugging on mobile devices. To ensure that the initialization is completed when calling the native module, all statements calling the native module should be executed in hooks of `apiready`.

## Pages Config

### name

- Type: `string`
- Default: `none`

As the unique identification of the current page, it cannot be repeated with other pages. It will be used as the name of window or frame in apicloud

### title

- Type: `string`
- Default: `none`

`title` is the title of the compiled HTML file, which can be empty. The title displayed on the page is not configured here

### path

- Type: `string`
- Default: `none`

It is the relative path of the page file relative to the `src` directory. You do not need to add a file extension. For example, the path of `src/login/index.vue` is `login/index`
