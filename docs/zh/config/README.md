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

是页面文件相对于 `src/pages` 目录的相对路径，不需要加文件扩展名，如 `src/pages/login/index.vue` 的 path 为 `login/index`

## APICloud 应用配置

::: tip
`config.xml`中的配置项，详见APICloud 官方文档，以下文档来源为 [APICloud 官方文档](https://docs.apicloud.com/Dev-Guide/app-config-manual)
::: 

:::  warning 注意
该 XML 文件必须采用`UTF-8`编码。
:::

### [Overview](https://docs.apicloud.com/Dev-Guide/app-config-manual#1)
- [概述](https://docs.apicloud.com/Dev-Guide/app-config-manual#2)
- [配置清单描述](https://docs.apicloud.com/Dev-Guide/app-config-manual#3)
### [access](https://docs.apicloud.com/Dev-Guide/app-config-manual#3-1)
### [Preference](https://docs.apicloud.com/Dev-Guide/app-config-manual#4)
- [配置App全局背景](https://docs.apicloud.com/Dev-Guide/app-config-manual#5)
- [配置Window默认背景](https://docs.apicloud.com/Dev-Guide/app-config-manual#6)
- [配置Frame默认背景颜色](https://docs.apicloud.com/Dev-Guide/app-config-manual#7)
- [配置页面是否弹动](https://docs.apicloud.com/Dev-Guide/app-config-manual#7-0)
- [配置页面默认是否显示滚动条](https://docs.apicloud.com/Dev-Guide/app-config-manual#8)
- [配置启动页是否自动隐藏](https://docs.apicloud.com/Dev-Guide/app-config-manual#9)
- [配置iOS状态栏和页面是否重合（沉浸式效果）](https://docs.apicloud.com/Dev-Guide/app-config-manual#10-0)
- [配置状态栏和页面是否重合（沉浸式效果）](https://docs.apicloud.com/Dev-Guide/app-config-manual#10)
- [配置应用是否全屏运行](https://docs.apicloud.com/Dev-Guide/app-config-manual#11)
- [配置应用是否自动检测更新](https://docs.apicloud.com/Dev-Guide/app-config-manual#12)
- [配置应用是否支持增量更新、云修复](https://docs.apicloud.com/Dev-Guide/app-config-manual#13)
- [配置应用开启/关闭调试模式](https://docs.apicloud.com/Dev-Guide/app-config-manual#14)
- [配置是否允许使用第三方键盘](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-5)
- [配置键盘弹出方式](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-0)
- [配置是否显示键盘上方的工具条](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-11)
- [配置是否允许页面默认拖拽行为](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-14)
- [配置字体](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-1)
- [配置后台运行](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-2)
- [配置URL Scheme](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-3)
- [配置可被检测的URL Scheme](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-4)
- [配置网页里被禁止跳转的URL Scheme](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-10)
- [配置User Agent](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-6)
- [配置iTunes文件共享](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-7)
- [配置自定义下拉刷新模块](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-8)
- [配置是否在桌面显示应用图标](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-9)
- [配置是否检查https证书是受信任的](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-12)
- [配置是否校验应用证书](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-13)
- [配置支持的CPU设备类型](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-15)
- [配置用户界面风格](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-16)
- [配置是否使用WKWebView](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-17)
- [配置WKWebView页面恢复模式](https://docs.apicloud.com/Dev-Guide/app-config-manual#14-18)
### [Feature](https://docs.apicloud.com/Dev-Guide/app-config-manual#15)
- [微信](https://docs.apicloud.com/Dev-Guide/app-config-manual#16)
- [新浪微博](https://docs.apicloud.com/Dev-Guide/app-config-manual#17)
- [百度定位](https://docs.apicloud.com/Dev-Guide/app-config-manual#18)
- [百度地图](https://docs.apicloud.com/Dev-Guide/app-config-manual#19)
- [支付宝支付](https://docs.apicloud.com/Dev-Guide/app-config-manual#20)
- [QQ登录/分享](https://docs.apicloud.com/Dev-Guide/app-config-manual#21)
- [极光推送](https://docs.apicloud.com/Dev-Guide/app-config-manual#21-0)
- [融云即时通信](https://docs.apicloud.com/Dev-Guide/app-config-manual#21-1)
### [Permission](https://docs.apicloud.com/Dev-Guide/app-config-manual#22)
- [读取手机状态和身份](https://docs.apicloud.com/Dev-Guide/app-config-manual#23)
- [直接拨打电话](https://docs.apicloud.com/Dev-Guide/app-config-manual#24)
- [直接发送短信](https://docs.apicloud.com/Dev-Guide/app-config-manual#25)
- [使用拍照和视频](https://docs.apicloud.com/Dev-Guide/app-config-manual#26)
- [使用录音](https://docs.apicloud.com/Dev-Guide/app-config-manual#27)
- [访问地理位置信息](https://docs.apicloud.com/Dev-Guide/app-config-manual#28)
- [访问文件系统](https://docs.apicloud.com/Dev-Guide/app-config-manual#29)
- [完全的访问网络权限](https://docs.apicloud.com/Dev-Guide/app-config-manual#30)
- [开机启动](https://docs.apicloud.com/Dev-Guide/app-config-manual#31)
- [控制振动/闪光灯/屏幕休眠等硬件设备](https://docs.apicloud.com/Dev-Guide/app-config-manual#32)
- [访问设备通讯录](https://docs.apicloud.com/Dev-Guide/app-config-manual#33)
### [Meta-Data](https://docs.apicloud.com/Dev-Guide/app-config-manual#35-1)
### [Intent-Filter](https://docs.apicloud.com/Dev-Guide/app-config-manual#35-2)
### [Reference](https://docs.apicloud.com/Dev-Guide/app-config-manual#36)


完整的 `config.xml` 文件参考：

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