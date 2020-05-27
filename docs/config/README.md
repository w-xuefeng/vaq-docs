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
  import pages from '@/config/pages.json'

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

It is the relative path of the page file relative to the `src/pages` directory. You do not need to add a file extension. For example, the path of `src/pages/login/index.vue` is `login/index`

## Status bar style configuration

### color

- Type: `string`
- Default: `#000`

Status bar background color, only valid for Android 5.0 and above

### style

- Type: `'light' | 'dark'`
- Default: `light`

The font color of the status bar supports iOS, Android supports Xiaomi MIUI 6.0 and above phones, Meizu Flyme 4.0 and above phones, and other Android 6.0 and above phones. Due to differences in customization of device manufacturers, frequent switching of styles may not take effect. If not set, it will automatically judge whether the transmitted background color is light color through `$isLightColor`, the light color is` dark`, otherwise it is `light`

### animated

- Type: `boolean`
- Default: `false`

Is there an animation effect, only valid for iOS

Examples:

``` vue
<script>
export default {
  name: 'set-status-bar-style-demo',
  statusBar: {
    color: 'transparent',
    style: 'light'
  }
}
</script>
```

```vue
<script>
export default {
  name: 'set-status-bar-style-demo',
  statusBar: {
    color: 'transparent',
    style: 'light',
    animated: true
  }
}
</script>
```

Configure in `typescript`

``` vue
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueAPICloud } from 'vue-apicloud-quickstart'
@VueAPICloud
@Component({
  statusBar: {
    color: 'transparent',
    style: 'light'
  }
})
export default class Demo extends Vue {}
</script>
```

Or directly configure `color`, the `style` will be automatically judged by `$isLightColor`

``` vue
<script>
export default {
  name: 'set-status-bar-style-demo',
  statusBar: 'transparent'
}
</script>
```

```vue
<script>
export default {
  name: 'set-status-bar-style-demo',
  statusBar: '#007ACC'
}
</script>
```

Configure in `typescript`

``` vue
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueAPICloud } from 'vue-apicloud-quickstart'
@VueAPICloud
@Component({ statusBar: 'transparent' })
export default class Demo extends Vue {}
</script>
```

```vue
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueAPICloud } from 'vue-apicloud-quickstart'
@VueAPICloud
@Component({ statusBar: '#007ACC' })
export default class Demo extends Vue {}
</script>
```

## APICloud application configuration

::: tip
For the configuration items in `config.xml`, see the APICloud official documentation for details. The source of the following documents is [APICloud official documentation](https://docs.apicloud.com/Dev-Guide/app-config-manual)
:::

:::  warning Note
The XML file must be encoded in `UTF-8`.
:::

### [Overview](https://docs.apicloud.com/Dev-Guide/app-config-manual#1)
### [access](https://docs.apicloud.com/Dev-Guide/app-config-manual#3-1)
### [Preference](https://docs.apicloud.com/Dev-Guide/app-config-manual#4)
### [Feature](https://docs.apicloud.com/Dev-Guide/app-config-manual#15)
### [Permission](https://docs.apicloud.com/Dev-Guide/app-config-manual#22)
### [Meta-Data](https://docs.apicloud.com/Dev-Guide/app-config-manual#35-1)
### [Intent-Filter](https://docs.apicloud.com/Dev-Guide/app-config-manual#35-2)
### [Reference](https://docs.apicloud.com/Dev-Guide/app-config-manual#36)


Complete `config.xml` file reference:

``` xml
<widget id="A12345678901"  version="0.0.1">
    <name>API Example</name>
    <description>
        API Example App.
    </description>
    <author email="developer@apicloud.com" href="//www.apicloud.com">
        APICloud.SIR
    </author>
    <content src="index.html" />
    <access origin="*" />
    <preference name="pageBounce" value="false" />
    <preference name="appBackground" value="#000" />
    <preference name="windowBackground" value="rgba(0,0,0,0.0)" />
    <preference name="frameBackgroundColor" value="rgba(0,0,0,0.0)" />
    <preference name="hScrollBarEnabled" value="true" />
    <preference name="vScrollBarEnabled" value="true" />
    <preference name="autoLaunch" value="true" />
    <preference name="autoUpdate" value="true" />
    <preference name="smartUpdate" value="false" />
    <preference name="fullScreen" value="false" />
    <preference name="statusBarAppearance" value="true" />
    <preference name="softInputMode" value="resize"/>
    <preference name="debug" value="true"/>
    <permission name="readPhoneState" />
    <permission name="call" />
    <permission name="sms" />
    <permission name="camera" />
    <permission name="record" />
    <permission name="location" />
    <permission name="fileSystem" />
    <permission name="internet" />
    <permission name="bootCompleted" />
    <permission name="hardware" />
    <permission name="contact" />
    <feature name="weiXin">
        <param name="urlScheme" value="wx7779c7c063a9d4d9" />
        <param name="apiKey" value="wx7779c7c063a9d4d9" />
    </feature>
    <feature name="sinaWeiBo">
        <param name="urlScheme" value="wb1062272715" />
        <param name="apiKey" value="1062272715" />
    </feature>
    <feature name="aliPay">
         <param name="urlScheme" value="AliPayA00000000001" />
    </feature>
    <feature name="baiduLocation">
        <param name="apiKey" value="fef72715gshjelke" />
    </feature>
    <feature name="baiduMap">
        <param name="android_api_key" value="fef72715gshjelke" />
        <param name="ios_api_key" value="fef72715gshjelke" />
    </feature>
    <feature name="qq">
        <param name="urlScheme" value="tencent9c7c063a9d4d9" />
        <param name="apiKey" value="9c7c063a9d4d9" />
    </feature>
</widget>
```
## WIFI Sync ignore file directory configuration

::: tip
For details, please refer to the APICloud official documentation [APICloud Studio WiFi Real Machine Synchronization and WiFi Real Machine Preview Instructions](https://docs.apicloud.com/Dev-Tools/wifi-debug)
::: 

- Customize files and folders ignored during WiFi sync
- Supports standard [`Glob`](https://github.com/isaacs/node-glob#glob-primer) expressions.

### Examples of common formats

- Ignore certain types of files, such as `* .js.map` files:

  ``` bash
  **/*.js.map
  ```

- Ignore all folders of a certain name in the project and their subfiles (folders), such as the `node_modules` directory:

  ``` bash
  **/node_modules/**
  ```

- Ignore all files (folders) in a directory in the root directory, such as the `src` directory:
  ``` bash
  src/**
  ```
- Based on expressions commonly used by automated build tools such as automated webpack:
  ``` bash
  {**/*.js.map,**/node_modules/**,src/**}
  ```