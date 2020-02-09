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

Event name | Event description
-|-
[batterylow](https://docs.apicloud.com/Client-API/api#c1) | Device Battery Low Event, String Type |
[batterystatus](https://docs.apicloud.com/Client-API/api#c2) | Device battery status change event, such as battery change or charging, string type |
[keyback](https://docs.apicloud.com/Client-API/api#c3) | Device back key click event, only valid for Android platform, string type. This event must be registered in the Window to be effective, the registration in the Frame is invalid, and only the window on the current screen can receive the callback |
[keymenu](https://docs.apicloud.com/Client-API/api#c4) | Device menu key click event, only available on Android platform. This event must be registered in the Window to be effective, the registration in the Frame is invalid, and only the window on the current screen can receive the callback |
[volumeup](https://docs.apicloud.com/Client-API/api#c21) | Device volume plus key click event, only valid on Android platform. This event must be registered in the Window to be effective, the registration in the Frame is invalid, and only the window on the current screen can receive the callback |
[volumedown](https://docs.apicloud.com/Client-API/api#c22) | Device volume down key click event, only available on Android platform. This event must be registered in the Window to be effective, the registration in the Frame is invalid, and only the window on the current screen can receive the callback |
[offline](https://docs.apicloud.com/Client-API/api#c5) | Listen for events when the device is disconnected from the network, string type |
[online](https://docs.apicloud.com/Client-API/api#c6) | Listen for events when the device connects to the network, string type |
[pause](https://docs.apicloud.com/Client-API/api#c7) | Application enters background event, string type |
[resume](https://docs.apicloud.com/Client-API/api#c8) | Application returns to the foreground event from the background, string type |
[scrolltobottom](https://docs.apicloud.com/Client-API/api#c9) | Window or Frame page slide to bottom event, string type. Can be used to scroll to the bottom to load more features |
[shake](https://docs.apicloud.com/Client-API/api#c10) | Device shake event, string type. After this monitoring is set, the current APP will immediately turn on the shake detection function. Can be used to implement the shake function |
[takescreenshot](https://docs.apicloud.com/Client-API/api#c24) | While the application is running in the foreground, the user's screenshot event (such as pressing the home button and the power button at the same time), only supports iOS |
[appidle](https://docs.apicloud.com/Client-API/api#appidle) | How long does it take for the app to not trigger the screen? String type |
[swipedown](https://docs.apicloud.com/Client-API/api#c11) | Window or Frame page global swipe down event, string type |
[swipeleft](https://docs.apicloud.com/Client-API/api#c12) | Window or Frame page global swipe event to the left, string type |
[swiperight](https://docs.apicloud.com/Client-API/api#c13) | Window or Frame page global swipe right event, string type |
[swipeup](https://docs.apicloud.com/Client-API/api#c14) | Window or Frame page global swipe up event, string type |
[tap](https://docs.apicloud.com/Client-API/api#c15) | Window or Frame page global click event, string type. After listening to this event, clicking anywhere on the window or frame will receive a tap callback. |
[longpress](https://docs.apicloud.com/Client-API/api#c23) | Window or Frame page global long-press event, string type. |
[viewappear](https://docs.apicloud.com/Client-API/api#c16) | Window Event displayed on the screen, string type. Receive a viewappear event callback, which indicates that the current Window has been animated and completely displayed on the screen. The object of this event is Window. The display of Frame will not receive the event.
[viewdisappear](https://docs.apicloud.com/Client-API/api#c17) | Window leave screen event, string type. Receive a viewdisappear event callback, which indicates that the current Window has been animated and completely removed from the screen. The object of this event is Window. The hiding of the Frame will not receive the event. If the Window is closed, this event will not be called back.
[noticeclicked](https://docs.apicloud.com/Client-API/api#c18) | Callback when status bar notification is clicked by user, string type. Note: This event is only valid for status bar notifications issued by api.notification and the official push module, and cannot receive status bar notifications from third-party modules or SDKs |
[appintent](https://docs.apicloud.com/Client-API/api#c19) | When this application is called up by other applications (Android platform can also be opened through Activity), receive the callback of related data, string Types of. After registering the listener on any page, if this application is called by another application, the listener function will be triggered, and the data passed to the application will be called back to the web page |
[smartupdatefinish](https://docs.apicloud.com/Client-API/api#c20) | Cloud repair When the silent repair is used, the update completion event. You can listen to this event to notify the user to perform operations or prompts such as whether to force restart the application, so that the update takes effect, a string type. This event will not be triggered if prompted to repair |
[launchviewclicked](https://docs.apicloud.com/Client-API/api#c25) | Callback after the user clicks on the splash screen ad, string type |
[keyboardshow](https://docs.apicloud.com/Client-API/api#keyboardshow) | Callback for system keyboard popup, only supports iOS, string type |
[keyboardhide](https://docs.apicloud.com/Client-API/api#keyboardhide) | Callback hidden by system keyboard, only supports iOS, string type |
[safeareachanged](https://docs.apicloud.com/Client-API/api#safeareachanged) | Callback where the safe area of ​​the page changes, you can adjust the page as needed in the callback. Only iOS 11 and above systems are valid. String Type |
[navtitle](https://docs.apicloud.com/Client-API/api#navtitle) | Listen for navigation bar title click events in tabLayout |
[navbackbtn](https://docs.apicloud.com/Client-API/api#navbackbtn) | Listen to the default button click event of the navigation bar in tabLayout. When you click the back button, the current window will be closed by default. If you listen to this event, it will not close automatically.
[navitembtn](https://docs.apicloud.com/Client-API/api#navitembtn) | Listen for custom button click events on the left and right sides of the navigation bar in tabLayout, string type |
[tabitembtn](https://docs.apicloud.com/Client-API/api#tabitembtn) | Listen for click events on tabBar items in tabLayout. By default, each item is clicked to switch to the corresponding page. If this event is monitored, the page will not automatically switch over. You can set the selected item through setTabBarAttr. String type |
[tabframe](https://docs.apicloud.com/Client-API/api#tabframe) | Listen for the frame item's switching event when there is a tabBar in the tabLayout. String type |




## Screen orientation changes listener

The listener for screen orientation changes is different as follows:

``` vue
<script>
export default {
  name: 'on-window-change-demo',
  onWindowChange () {
    // TODO
    this.$toast({ msg: 'Screen orientation changed' })
  }
}
</script>
```
