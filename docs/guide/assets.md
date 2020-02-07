# Asset Handling

## Static Resources loaded by Copy

Some static resources that native components need to use or do not need to be processed by `Webpack Loader` need to be copied as they are when compiling and building. They are generally stored in the `public/res` directory. After compiling and building, they will be copied to the `res` directory.

For example, the file `public/res/img/logo.png` is used in `HTML` as follows

``` html
<img src="res/img/logo.png" alt="logo" />
```

Because the loading of resources in `CSS` needs to be processed by loader, it is not recommended to reference static resource files in `public/res` directory in `CSS`. If there is a reason to use it, you can use it as follows

``` css
.logo {
  background-image: url('~@/../public/res/img/logo.png');
}
```

However, this file will be copied from the `res/img` directory to the `img` directory during package compilation.

## Static Resources loaded by webpack loader

In `.vue` or `.js` files, loading static resource files need to be processed by `Webpack Loader`. They are usually stored in the `src/assets` directory.

For example, the file `src/assets/img/logo.png` is used in `.vue`, `.js`

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

used in `CSS`

``` css
.logo {
  background-image: url('~@/assets/img/logo.png');
}
```