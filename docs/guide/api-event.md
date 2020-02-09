# API Native Event

## API Native Event Listener

In the APICloud project, listening for native events looks like this:

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

In vue-apicloud-quickstart, you can directly use the `addEventListener` method to listen to native events, as shown below.

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
          this.$toast({ msg: 'Back key pressed' })
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
        this.$toast({ msg: 'Scrolled to the bottom' });
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

You can also use the more convenient `apiEvent` syntactic sugar, as shown below

``` vue
<script>
export default {
  name: 'event-demo',
  apiEvent: {
    keyback (ret, err) {
      if (ret) {
        this.$toast({ msg: 'Back key pressed' });
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

## Supported native events

Supports all native events except `apiready`, including custom events.

Sending custom events is shown below,

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

Listening to custom events is shown below,

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
The following is a list of native events that support `apiEvent` listening, from the official APICloud documentation. For detailed native event parameters, please refer to [APICloud Official Documentation - API Object - Event](https://docs.apicloud.com/Client-API/api#c0)
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

