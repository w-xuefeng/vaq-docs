# 原生事件

## 原生事件监听

在 APICloud 项目中，监听原生事件如下所示：

``` js
api.addEventListener({
  name: 'eventName'
}, (ret, err) => {
  if (ret) {
    // TODO
  } else {
    // Error Handle
  }
});
```
在 vue-apicloud-quickstart 中，可以和上面一样，直接使用 `addEventListener` 方法监听原生事件，如

``` vue
<script>
export default {
  name: 'event-demo',
  methods: {
    listenKeyBack () {
      this.api.addEventListener({
        name: 'keyback'
      }, (ret, err) => {
        if (ret) {
          this.$toast({ msg: '按下了返回键' })
        } else {
          // Error Handle
        }
      });
    },
    loadMore () {
      this.api.addEventListener({
        name: 'scrolltobottom',
        extra: { threshold: 0 }
      }, (ret, err) => {
        // loadMore TODO
        this.$toast({ msg: '已滚动到底部' });
      });
    }
  },
  onReady () {
    this.listenKeyBack();
    this.loadMore();
  }
}
</script>
```

也可以使用更加便捷的 `apiEvent` 语法糖，如

``` vue
<script>
export default {
  name: 'event-demo',
  apiEvent: {
    keyback (ret, err) {
      if (ret) {
        this.$toast({ msg: '按下了返回键' });
      } else {
        // Error Handle
      }
    },
    scrolltobottom: {
      extra: {
        threshold: 0
      },
      handle (/*ret, err*/) {
        // loadMore TODO
        this.$toast({ msg: '已滚动到底部' });
      }
    }
  }
}
</script>
```

## 支持的原生事件

支持除 `apiready` 外所有的原生事件，包括自定义事件。

发送自定义事件如下所示，

``` vue
<template>
  <div @click="sendMyEvent">
    content
  </div>
</template>

<script>
export default {
  name: 'send-event-demo',
  methods: {
    sendMyEvent () {
      this.api.sendEvent({
        name: 'myEventName',
        extra: {
          key1: 'value1',
          key2: 'value2'
        }
      });
    },
  }
}
</script>
```

监听自定义事件如下所示，

``` vue
<script>
export default {
  name: 'event-listener-demo',
  apiEvent: {
    myEventName (ret, err) {
      if (ret) {
        const { key1, key2 } = ret.value;
        // TODO width  key1, key2 
      } else {
        // Error Handle
      }
    },
  }
}
</script>
```

::: tip
以下是支持 `apiEvent` 监听的原生事件列表，来自 APICloud 官方文档。关于详细的原生事件参数，请参考[APICloud 官方文档-API对象-Event](https://docs.apicloud.com/Client-API/api#c0)
::: 

事件名 | 事件说明
- | -
[batterylow](https://docs.apicloud.com/Client-API/api#c1) | 设备电池电量低事件，字符串类型 |
[batterystatus](https://docs.apicloud.com/Client-API/api#c2) | 设备电池状态改变事件，如电量变化或正在充电，字符串类型 |
[keyback](https://docs.apicloud.com/Client-API/api#c3) | 设备 back 键被点击事件，仅 Android 平台有效，字符串类型。该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调 |
[keymenu](https://docs.apicloud.com/Client-API/api#c4) | 设备 menu 键被点击事件，仅 Android 平台有效。该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调 |
[volumeup](https://docs.apicloud.com/Client-API/api#c21) | 设备音量加键被点击事件，仅 Android 平台有效。该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调 |
[volumedown](https://docs.apicloud.com/Client-API/api#c22) | 设备音量减键被点击事件，仅 Android 平台有效。该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调 |
[offline](https://docs.apicloud.com/Client-API/api#c5) | 监听设备断开网络的事件，字符串类型 |
[online](https://docs.apicloud.com/Client-API/api#c6) | 监听设备连接到网络的事件，字符串类型 |
[pause](https://docs.apicloud.com/Client-API/api#c7) | 应用进入后台事件，字符串类型 |
[resume](https://docs.apicloud.com/Client-API/api#c8) | 应用从后台回到前台事件，字符串类型 |
[scrolltobottom](https://docs.apicloud.com/Client-API/api#c9) | Window 或者 Frame 页面滑动到底部事件，字符串类型。可用于实现滚动到底部，加载更多功能 |
[shake](https://docs.apicloud.com/Client-API/api#c10) | 设备摇动事件，字符串类型。设置该监听后，当前 APP 将立即开启摇动检测功能。可用于实现摇一摇功能 |
[takescreenshot](https://docs.apicloud.com/Client-API/api#c24) | 应用在前台运行期间，用户屏幕截图事件（比如同时按下了 home 键和电源键），只支持 iOS |
[appidle](https://docs.apicloud.com/Client-API/api#appidle) | 应用多长时间不操作屏幕后触发的事件，字符串类型 |
[swipedown](https://docs.apicloud.com/Client-API/api#c11) | Window 或者 Frame 的页面全局向下轻扫事件，字符串类型 |
[swipeleft](https://docs.apicloud.com/Client-API/api#c12) | Window 或者 Frame 的页面全局向左轻扫事件，字符串类型 |
[swiperight](https://docs.apicloud.com/Client-API/api#c13) | Window 或者 Frame 的页面全局向右轻扫事件，字符串类型 |
[swipeup](https://docs.apicloud.com/Client-API/api#c14) | Window 或者 Frame 的页面全局向上轻扫事件，字符串类型 |
[tap](https://docs.apicloud.com/Client-API/api#c15) | Window 或者 Frame 的页面全局单击事件，字符串类型。监听该事件后，点击 window 或者 frame 的任意位置，都将收到 tap 回调。 |
[longpress](https://docs.apicloud.com/Client-API/api#c23) | Window 或者 Frame 的页面全局长按事件，字符串类型。 |
[viewappear](https://docs.apicloud.com/Client-API/api#c16) | Window 显示到屏幕的事件，字符串类型。收到 viewappear 事件回调，即标识当前 Window 已经动画结束，并且完全显示到屏幕上。该事件的作用对象为 Window，Frame 的显示不会收到事件 |
[viewdisappear](https://docs.apicloud.com/Client-API/api#c17) | Window 离开屏幕的事件，字符串类型。收到 viewdisappear 事件回调，即标识当前 Window 已经动画结束，并且完全从屏幕上移除。该事件的作用对象为 Window，Frame 的隐藏不会收到事件，若是 Window 被关闭，此事件不会再回调 |
[noticeclicked](https://docs.apicloud.com/Client-API/api#c18) | 状态栏通知被用户点击后的回调，字符串类型。注意：该事件仅针对api.notification以及官方 push 模块发出的状态栏通知有效，无法接收第三方模块或者SDK发出的状态栏通知 |
[appintent](https://docs.apicloud.com/Client-API/api#c19) | 本应用被其他应用调起来时（Android 平台也可以通过 Activity 打开），收到相关数据的回调，字符串类型。在任意页面中注册该监听后，如果本应用被其他应用调起，将触发该监听函数，同时将传给该应用的数据回调给网页 |
[smartupdatefinish](https://docs.apicloud.com/Client-API/api#c20) | 云修复使用静默修复时，更新完毕事件。可通过监听此事件来通知用户做是否强制重启应用等操作或者提示，以使更新生效，字符串类型。如果是提示修复，则不会触发该事件 |
[launchviewclicked](https://docs.apicloud.com/Client-API/api#c25) | 闪屏广告被用户点击后的回调，字符串类型 |
[keyboardshow](https://docs.apicloud.com/Client-API/api#keyboardshow) | 系统键盘弹出的回调，只支持iOS，字符串类型 |
[keyboardhide](https://docs.apicloud.com/Client-API/api#keyboardhide) | 系统键盘隐藏的回调，只支持iOS，字符串类型 |
[safeareachanged](https://docs.apicloud.com/Client-API/api#safeareachanged) | 页面安全区域发生变化的回调，可以在回调里根据需要调整页面，只iOS 11及以上系统有效，字符串类型 |
[navtitle](https://docs.apicloud.com/Client-API/api#navtitle) | 监听 tabLayout 中导航栏标题点击事件 |
[navbackbtn](https://docs.apicloud.com/Client-API/api#navbackbtn) | 监听 tabLayout 中导航栏默认返回按钮点击事件。点击返回按钮时默认会关闭当前 window，如果监听了此事件则不会自动关闭 |
[navitembtn](https://docs.apicloud.com/Client-API/api#navitembtn) | 监听 tabLayout 中导航栏左右两边自定义按钮点击事件，字符串类型 |
[tabitembtn](https://docs.apicloud.com/Client-API/api#tabitembtn) | 监听 tabLayout 中 tabBar 项的点击事件。默认点击每一项时会切换到对应的页面，如果监听了此事件则页面不会自动切换过去，可以通过setTabBarAttr设置选中项，字符串类型 |
[tabframe](https://docs.apicloud.com/Client-API/api#tabframe) | 监听 tabLayout 中有 tabBar 时 frame 项的切换事件。字符串类型 |


## 监听屏幕方向的变化

监听屏幕方向变化有所不同，如下所示：

``` vue
<script>
export default {
  name: 'on-window-change-demo',
  onWindowChange () {
    // TODO
    this.$toast({ msg: '屏幕方向发生了改变' })
  }
}
</script>
```

## 使用 Typescript

在 `Typescript` 中，将使用 `VueAPICloud` 与 `APIEvent` 两个装饰器完成, 其中 `onWindowChange` 不需要装饰器

``` vue {5,9,14}
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueAPICloud, APIEvent } from 'vue-apicloud-quickstart'

@VueAPICloud
@Component
export default class Demo extends Vue {

  @APIEvent({ extra: { threshold: 0 } })
  scrolltobottom () {
    this.$toast({ msg: '已滚动到底部' });
  }

  @APIEvent()
  myEventName (ret: any, err: any) {
    if (ret) {
      const { key1, key2 } = ret.value;
      // TODO width  key1, key2 
    } else {
      // Error Handle
    }
  }

  onWindowChange () {
    // TODO
    this.$toast({ msg: '屏幕方向发生了改变' })
  }
}
</script>
```




