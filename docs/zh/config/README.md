---
sidebarDepth: 3
sidebar: auto
---

# 配置

## 参数配置

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

- 类型: `Array`
- 默认值: `无`

页面配置，配置每个页面的 `title`， `name`， `path`，类似于 `页面路由`, 详见[页面配置](#页面配置)

### debugOnPC

- 类型: `Boolean`
- 默认值: `false`

  - 当 `debugOnPC` 为默认值即 `false` 时, Vue 页面的实例将在 `apiready` 的 `Hooks` 中执行，因此在 PC 端浏览器内无法预览调试页面。
  - 当 `debugOnPC` 为 true 时，将直接执行 new Vue() 创建页面实例，此时，所有 `api` 相关的语句无法执行，但是与 `api` 无关的页面内容将会正常显示在浏览器内。

  - 推荐使用场景
    - 前期开发页面，调试样式时将 debugOnPC 设置为 true，可在 PC 浏览器端调试
    - 后期开发功能，调试功能时将 debugOnPC 设置为 false，在自定义Loader中调试
    - 或者也可以始终将 debugOnPC 设置为 false，在自定义Loader中调试
  - APICloud 会在 APPLoader 或者 自定义 Loader 中向 `window` 注入全局变量 `api`, 所以在移动端设备上使用 Loader 调试时可以通过 `api` 来实现调用原生模块的能力。为保证调用原生模块时都已经初始化完成，所有调用原生模块的语句都应该放在 `apiready` 的 `Hooks` 中执行。

## 页面配置

### name

- 类型: `string`
- 默认值: `无`

作为当前页面的唯一标识，不能与其他页面重复，将作为 APICloud 中 window 或 frame 的 name

### title

- 类型: `string`
- 默认值: `无`

title 作为编译后 html 文件的 title，可为空，页面所展示的 title 不在此处配置

### path

- 类型: `string`
- 默认值: `无`

是页面文件相对于 src 目录的相对路径，不需要加文件扩展名，如 `src/login/index.vue` 的 path 为 `login/index`
