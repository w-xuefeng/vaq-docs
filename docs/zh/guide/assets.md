# 静态资源

## 原样复制的静态资源

一些原生组件需要用到的静态资源，或者不需要 `Webpack Loader` 处理的静态资源，编译构建的时候需要原样复制，它们一般存放在 `public/res` 目录下，编译构建后，它们将被复制到 `res` 目录下。

如，`public/res/img/logo.png` 文件, 在 `html` 中这样使用

``` html
<img src="res/img/logo.png" alt="logo" />
```

因为 `CSS` 中资源的加载需要经过 Loader 处理，因此不推荐在 `CSS` 中引用 `public/res` 目录下的静态资源文件。如果有非使用不可的理由的话，那么可以通过下面这样实现引用

``` css
.logo {
  background-image: url('~@/../public/res/img/logo.png');
}
```

但是这样，在打包编译时会将该文件从 `res/img` 目录下复制一份到 `img` 目录下。


## 经过 Webpack Loader 加载的静态资源

在 `.vue` 或 `.js` 文件中，加载静态资源文件需要经过 `Loader` 的处理，它们一般存放在 `src/assets` 目录下。

如，`src/assets/img/logo.png` 文件, 在 `.vue`, `.js` 中这样使用

``` vue
<template>
  <img alt="Vue logo" :src="logo" />
</template>

<script>
import logo from '@/assets/img/logo.png'
export default {
  name: 'demo',
  data() {
    return {
      logo
    }
  }
}
</script>
```

在 `CSS` 中这样使用

``` css
.logo {
  background-image: url('~@/assets/img/logo.png');
}
```