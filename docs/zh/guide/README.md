# 介绍

<Bit/>

Vue-APICloud-Quickstart 由两部分组成：

- 第一部分是 `ready.plugin`，它主要解决 `api` 的问题，例如 `api`, `apiready` 在 PC 浏览器不存在。 使用 Vue mixin 向 Vue 实例中注册新的生命周期 `onReady`, `onReady` 将在 `mounted` 之后执行，并且保证 `apiready` 已经执行；向 Vue 实例中注册 `apiEvent`, 可快速实现原生事件的监听。

- 另一个部分是 `help.plugin`，它为我们提供了一些常用的助手方法，并且挂载在 Vue 实例上，方便我们调用，如页面跳转可直接使用 `this.$page.push({ name: 'pageName' })`。

## 它是如何工作的？

事实上，Vue-APICloud-Quickstart 是基于 [w-xuefeng/vue-cli-plugin-apicloud](https://github.com/w-xuefeng/vue-cli-plugin-apicloud) 运行的。借助 `Vue CLI` 修改 `webpack` 的 `entry`，以及一些其他配置，实现了使用 Vue 开发多页面应用并且构建为 APICloud 平台所需要的文件目录结构。
