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
    // Error Handel
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
          // Error Handel
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
        // Error Handel
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
        // Error Handel
      }
    },
  }
}
</script>
```

::: tip
以下是支持 `apiEvent` 监听的原生事件列表，来自 APICloud 官方文档。关于详细的原生事件参数，请参考[APICloud 官方文档-API对象-Event](https://docs.apicloud.com/Client-API/api#c0)
::: 

### [batterylow](https://docs.apicloud.com/Client-API/api#c1)
### [batterystatus](https://docs.apicloud.com/Client-API/api#c2)
### [keyback](https://docs.apicloud.com/Client-API/api#c3)
### [keymenu](https://docs.apicloud.com/Client-API/api#c4)
### [volumeup](https://docs.apicloud.com/Client-API/api#c21)
### [volumedown](https://docs.apicloud.com/Client-API/api#c22)
### [offline](https://docs.apicloud.com/Client-API/api#c5)
### [online](https://docs.apicloud.com/Client-API/api#c6)
### [pause](https://docs.apicloud.com/Client-API/api#c7)
### [resume](https://docs.apicloud.com/Client-API/api#c8)
### [scrolltobottom](https://docs.apicloud.com/Client-API/api#c9)
### [shake](https://docs.apicloud.com/Client-API/api#c10)
### [takescreenshot](https://docs.apicloud.com/Client-API/api#c24)
### [appidle](https://docs.apicloud.com/Client-API/api#appidle)
### [swipedown](https://docs.apicloud.com/Client-API/api#c11)
### [swipeleft](https://docs.apicloud.com/Client-API/api#c12)
### [swiperight](https://docs.apicloud.com/Client-API/api#c13)
### [swipeup](https://docs.apicloud.com/Client-API/api#c14)
### [tap](https://docs.apicloud.com/Client-API/api#c15)
### [longpress](https://docs.apicloud.com/Client-API/api#c23)
### [viewappear](https://docs.apicloud.com/Client-API/api#c16)
### [viewdisappear](https://docs.apicloud.com/Client-API/api#c17)
### [noticeclicked](https://docs.apicloud.com/Client-API/api#c18)
### [appintent](https://docs.apicloud.com/Client-API/api#c19)
### [smartupdatefinish](https://docs.apicloud.com/Client-API/api#c20)
### [launchviewclicked](https://docs.apicloud.com/Client-API/api#c25)
### [keyboardshow](https://docs.apicloud.com/Client-API/api#keyboardshow)
### [keyboardhide](https://docs.apicloud.com/Client-API/api#keyboardhide)
### [safeareachanged](https://docs.apicloud.com/Client-API/api#safeareachanged)
### [navtitle](https://docs.apicloud.com/Client-API/api#navtitle)
### [navbackbtn](https://docs.apicloud.com/Client-API/api#navbackbtn)
### [navitembtn](https://docs.apicloud.com/Client-API/api#navitembtn)
### [tabitembtn](https://docs.apicloud.com/Client-API/api#tabitembtn)
### [tabframe](https://docs.apicloud.com/Client-API/api#tabframe)

