# Global Help Methods and Properties

## api
- `Description`: That is, `window.api`, which is used by` this.api` in the `Vue` instance. For details, please refer to [APICloud Official Documentation - API Object](https://docs.apicloud.com/Client-API/api)

### [Attributes](https://docs.apicloud.com/Client-API/api#attr-content)
### [Constant](https://docs.apicloud.com/Client-API/api#const-content)
### [Event](https://docs.apicloud.com/Client-API/api#evt-content)
### [Method](https://docs.apicloud.com/Client-API/api#method-content)

For example:

``` js
this.api.appId
```

## $api
- `type`: `object`
- `Description`: APICloud official packaged js framework, used in `Vue` instance via `this.$api`, please refer to [APICloud official documentation - APICloud front-end framework](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide) for specific parameter details, All methods are as follows:

Method | Description
- | -
[.trim()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#1) | Strip leading and trailing spaces from a string |
[.trimAll()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#2) | Remove all spaces from the string |
[.isArray()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#3) | Determine if the object is an array |
[.addEvt()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#4) | Binding events for DOM elements |
[.rmEvt()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#5) | Remove DOM element binding event |
[.one()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#6) | Binding events for DOM elements, the event is executed only once |
[.dom()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#7) | Select the first matching DOM element |
[.domAll()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#8) | Select all matching DOM elements |
[.byId()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#9) | Select DOM element by Id |
[.first()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#10) | Select the first child element of the DOM element |
[.last()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#11) | Select the last child element of a DOM element |
[.eq()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#12) | Select the few child elements |
[.not()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#13) | Select child elements based on exclusion selector |
[.prev()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#14) | Select adjacent previous element |
[.next()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#15) | Select adjacent next element |
[.contains()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#16) | Determine if an element contains the target element |
[.closest()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#17) | Match nearest parent element based on selector |
[.remove()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#18) | Remove DOM Elements |
[.attr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#19) | Get or set attributes of DOM elements |
[.removeAttr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#20) | Remove attributes from DOM elements |
[.hasCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#21) | Does the DOM element contain a className |
[.addCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#22) | Add className to DOM element |
[.removeCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#23) | Remove the specified className |
[.toggleCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#24) | Toggle the specified className |
[.val()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#25) | Get or set the value of the common Form element |
[.prepend()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#26) | Inside the DOM element, insert an HTML string before the first child element |
[.append()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#27) | Inside the DOM element, insert an HTML string after the last child element |
[.before()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#28) | Insert HTML string in front of DOM element |
[.after()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#29) | Insert HTML string after DOM element |
[.html()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#30) | Get or set the innerHTML of the DOM element |
[.text()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#31) | Set or get the text content of the element |
[.offset()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#32) | Get the position and width and height of the element in the page,(this is from the left side of the page And the top position, not the position from the window) |
[.css()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#33) | Set the style of the DOM element passed in, multiple styles can be passed in |
[.cssVal()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#34) | Get the full value of the specified attribute of the specified DOM element, such as 800px |
[.jsonToStr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#35) | Convert a standard JSON object to a string format |
[.strToJson()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#36) | Convert JSON String to JSON Object |
[.setStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#37) | Set localStorage data |
[.getStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#38) | Get localStorage data, must be used with $api.setStorage() |
[.rmStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#39) | Clear the value corresponding to the key name in localStorage |
[.clearStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#40) | Clear all data from localStorage, use with caution |
[.fixIos7Bar()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#41) | Adapt to iOS7 + system status bar, add 20px top and bottom to the incoming DOM element Margins |
[.fixStatusBar()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#45) | Adapt to iOS7 +, Android4.4 + system status bar, for incoming DOM elements Increase appropriate top padding to avoid header and status bar overlapping |
[.toast()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#42) | Delay prompt box |
[.get()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#43) | Get method shorthand for api.ajax() method |
[.post()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#44) | Post method shorthand for api.ajax() method |

For example:

``` js
this.$api.setStorage('username', username)
```

## $req
- `Description`: For network requests, `axios` is used for PC debugging, and `api.ajax()` method is used for WiFi debugging and formal packaging

See [Network Request](./network-request) for details

## element.getRect()

- `Param`: `None`
- `Return`: `DOMRect`
- `Description`: The method returns the size of the element and its position relative to the viewport, and is an encapsulation of `Element.getBoundingClientRect()`.

`DOMRect`:

  property |	type |	description
  - | - | -
  bottom | float | Y axis, relative to the bottom of the rectangular box of the viewport origin. Read-only.
  height | float | The height of the rectangular box (equivalent to bottom minus top). Read-only.
  left | float | X axis, relative to the left side of the viewport origin rectangular box. Read-only.
  right | loat | X axis, relative to the right side of the viewport origin rectangular box. Read-only.
  top | float | Y axis, relative to the top of the viewport origin rectangular box. Read-only.
  width | float | The width of the rectangular box (equivalent to right minus left). Read-only.
  x | float | X axis, relative to the left side of the viewport origin rectangular box. Read-only.
  y | float | Y axis, relative to the top of the viewport origin rectangular box. Read-only.

For example:

``` js
this.$api.dom('#id').getRect();
```

## element.computedStyle()

- `Param`: `None`
- `Return`: `CSSStyleDeclaration `
- `Description`: Returns an object that reports the values of all CSS properties of an element after applying the active style sheet and parsing any basic calculations that these values may contain. Private CSS property values can be accessed through the API provided by the object or by simply indexing using CSS property names. It is a wrapper for `window.getComputedStyle(element)`.

For example:

``` js
this.$api.dom('#id').computedStyle();
```

## $page

- `Type`: `Object`
- `Description`: Method objects for manipulating pages, including `open`,` push`, `close`,` closeToWin`, `pageParam` methods.

### open(url, options)
- `Description`: Open the `window` page. If` window` already exists, the `window` will be displayed on the front. At the same time, if the` url` changes or the `reload` parameter is` true`, the page will reload. A wrapper for the `api.openWin()` method.
- `Param`: 
  - **`url`**: 
    + `Type`: `string`,
    + `Required`: `true`
    + `Description`: The page address can be a local file path, relative path and absolute path, as well as protocol paths such as widget://, fs://, or remote addresses. When the `winOpts.data` parameter is not empty,` url` will be used as `baseUrl`, and the root path of the resource file referenced by` html` in `winOpts.data` will be based on the` url`.
  - **`options`**:
    + `type`: `object`
    + `Required`: `false`
    + `Description`: Parameters for opening the page, including the following items

    | options | type | required | Description
    | - | - | - | -
    | name | `string` | `false` | the `name` of `window`, the default is `win_${url}`
    | pageParam | `any` | `false` | Data passed to the window to be opened, no default value
    | winOpts | `object` | `false` | To open all the parameters of the page `window`, see [Official Documentation](https://docs.apicloud.com/Client-API/api#33) for details. Internal parameters can override external parameters
    | animation | `object` | `false` | The animation effect of the page opening, see [Official Documents](https://docs.apicloud.com/Client-API/api#33)

    The internal parameters of `animation` are as follows
    
    | options | type | required | Description
    | - | - | - | -
    | `type` | `string` | `false` | Animation type
    | `subType` | `string` | `false` | Animation subtype
    | `duration` | `number` | `false` | Animation transition time, default 300 milliseconds

    ``` js
    {
        type: "none",                // Animation type (see animation type constants for details)
        subType: "from_right",       // animation subtype (see the animation subtype constant for details)
        duration: 300                // Animation transition time, default 300 milliseconds
    }

    value range of `type`：

    none            // no animation effect
    push            // new view pushes old view away
    movein          // move the new view over the old view
    fade            // Cross-fade transition (transition direction is not supported)
    flip            // flip effect
    reveal          // move the old view away and show the new view below
    ripple          // drip effect (transition direction is not supported)
    curl            // page up
    un_curl         // page down
    suck            // shrink effect (transition direction is not supported)
    cube            // cube roll effect

    subType 取值范围：

    from_right      // start the animation from the right
    from_left       // start the animation from the left
    from_top        // start the animation from the top
    from_bottom     // start the animation from the bottom

    （Android系统flip，ripple，curl，un_curl，suck，cube 类型不支持）
    ```

For example:

``` vue
<script>
export default {
  name: 'open-window-page-demo',
  methods: {
    openDetails() {
      this.$page.open('article/details', {
        name: 'articleDetailsPage',
        pageParam: {
          title: 'this is title',
          content: 'this is content'
        }
      })
    },
    openBaidu() {
      this.$page.open('https://www.baidu.com', {
        animation: {
          type: 'fade',
          subType: 'from_right',
          duration: 300
        }
      })
    }
  }
}
</script>
```

### push(urlOrOptions)
- `Description`: 打开一个新的 `window` 页面, `open` 方法的封装
- `Param`: 
  - **`urlOrOptions`**:
    + `Type`: `string | object`
    + `Required`: 是
    + `Description`: The parameter to open the page, if it is a `string` type, it is passed directly to the open () method as` url`, if it is `object`, it contains the following items

    | options | type | required | description
    | - | - | - | -
    | name | `string` | `false` | To open the `name` of `window`, you can fill in the `name` of the page configured in `src/config/pages.js`. It will open the page directly.
    | pageParam | `any` | `false` | Data passed to the window to be opened, no default value
    | winOpts | `object` | `false` | To open all the parameters of the page `window`, see [Official Documentation](https://docs.apicloud.com/Client-API/api#33) for details. Internal parameters can override external parameters
    | animation | `object` | `false` | The animation effect of the page opening, see [Official Documents](https://docs.apicloud.com/Client-API/api#33), Same as `open()` method parameter `options.animation`

For example:

``` vue
<script>
export default {
  name: 'open-window-page-demo',
  methods: {
    gotoLogin() {
      this.$page.push({ name: 'login' })
    },
    openBaidu() {
      this.$page.push('https://www.baidu.com')
    },
    openIndex() {
      this.$page.push({
        name: 'index',
        pageParam: { loginTime: new Date().getTime() }
      })
    }
  }
}
</script>
```

### close()
- `Description`: Close the current `window` page, the wrapper of the` api.closeWin() `method.
- `Param`: `None`

For example:

``` vue
<script>
export default {
  name: 'close-window-page-demo',
  methods: {
    close() {
      this.$page.close()
    },
  }
}
</script>
```

### closeToWin(options)
- `Description`: 关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭，`api.closeToWin()` 方法的封装。
- `Param`: 
  - **`options`**:
    + `Type`: `object`
    + `Required`: `true`
    + `Description`: Options to close to the specified window, including the following items

    | options | type | required | description
    | - | - | - | -
    | name | `string` | `true` | Specify window name
    | animation | `object` | `false` | The animation effect of the page opening, see [Official Documents](https://docs.apicloud.com/Client-API/api#33), Same as `open()` method parameter `options.animation`

For example:

``` vue
<script>
export default {
  name: 'closeToWin-demo',
  methods: {
    closeToIndex() {
      this.$page.closeToWin({ name: 'root' })
    },
  }
}
</script>
```

### pageParam()
-`Description`: Used to get the parameter values passed between pages, which are `api.openWin()`, `api.openFrame()`, `$page.open()`, `$page.push()`, `$frame.open()` corresponding value of the pageParam parameter in methods. It is a wrapper for the `api.pageParam` property.
-`Param`: `None`
-`Return`:` sny`

For example:

``` vue
<script>
export default {
  name: 'closeToWin-demo',
  data() {
    return {
      article: null
    }
  },
  methods: {
    getData() {
      this.article = this.$page.pageParam()
    },
  },
  onReady() {
    this.getData()
  }
}
</script>
```

## $frame
- `Type`: `Object`
- `Description`: Method object for manipulating `Frame`, including `open()` method.

### open(options)
- `Description`: Open the frame, if the frame already exists, it will display the window to the front and display it. If the url and the previous url are changed, or the reload is true, the page will be refreshed. This method has no effect on the frame in the frameGroup, it is a wrapper for the `api.openFrame()` method
- `Param`:
  - **`options`**:
    + `Type`: `object`
    + `Required`: `false`
    + `Description`: Open the parameters of `frame`, see [official documentation](https://docs.apicloud.com/Client-API/api#27)

For example:

``` vue
<script>
export default {
  name: 'open-frame-demo',
  methods: {
    openHeader(title) {
      this.$frame.open({
        url: this.$n2p('header'),
        name: 'common-header',
        rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: 60
        },
        pageParam: { title }
      })
    },
  },
  onReady() {
    this.openHeader('Article Title')
  }
}
</script>
```
## $toast(options)
- `Description`: Pop up a prompt box that closes automatically at regular intervals, the wrapper of the `api.toast()` method
- `Param`: 
  - **`options`**:
    + `Type`: `object`
    + `Required`: `true`
    + `Description`: the options of toast, including the following items

    | options | type | required | description
    | - | - | - | -
    | msg | `string` | `true` | message
    | duration | `number` | `false` | Duration in milliseconds, default 3000
    | location | `string` | `false` | Pop position, top, middle or bottom, default by `bottom`
    
    `location` value range:

    ``` js
    top
    middle
    bottom
    ```

For example:

``` vue
<script>
export default {
  name: 'toast-demo',
  onReady() {
    this.$toast({ msg: '页面已经打开', location: 'top' })
  }
}
</script>
```

## $pagesInfo
- `Description`: Get page configuration information and return it as an array

For example:

``` js
console.log(this.$pagesInfo)
/**
[
  {
    title: "Open ad page",
    name: "index",
    path: "index/index",
    htmlPath: "indexindex"
  },
  {
    title: "Login page",
    name: "login",
    path: "login/index",
    htmlPath: "loginindex"
  },
  {
    title: "Home page",
    name: "home",
    path: "home/index",
    htmlPath: "homeindex"
  },
  {
    title: "Web page",
    name: "web",
    path: "home/web",
    htmlPath: "homeweb"
  },
  ...
] 
*/
```

## $getPageMap()
- `Description`: Get page configuration information, returned as an object, the `key` of the page is the `name` of the configured page
- `Param`: `None`
- `Return`: `object`

For example:

``` js
console.log(this.$getPageMap())

/**
{
  index: {
    title: "Open ad page",
    name: "index",
    path: "index/index",
    htmlPath: "indexindex"
  },
  login: {
    title: "Login page",
    name: "login",
    path: "login/index",
    htmlPath: "loginindex"
  },
  home: {
    title: "Home page",
    name: "home",
    path: "home/index",
    htmlPath: "homeindex"
  },
  web: {
    title: "Web page",
    name: "web",
    path: "home/web",
    htmlPath: "homeweb"
  },
  ...
}
*/
```

## $bindKeyBackExitApp()
- `Description`: Bind `keyback` to exit the application by pressing 2 times
- `Param`: `None`

For example:

``` vue
<script>
export default {
  name: 'bindKeyBackExitApp-demo',
  onReady() {
    this.$bindKeyBackExitApp()
  }
}
</script>
```

## $n2p(name)
- `Description`: Convert page's `name` to page's `htmlPath`
- `Param`: 
  - **`name`**:
    + `Type`: `string`
    + `Required`：`true`
    + `Description`: `name` of pages configured in `src/config/pages.js` file
- `Return` : 
  + `Type`: `string`
  + `Description`: `htmlPath` of the page

For example:

``` vue
<script>
export default {
  name: 'n2p-demo',
  methods: {
    gotoLogin() {
      this.$page.open(this.$n2p('login'));
    }
  }
}
</script>
```

## $getSafeArea()
- `Description`: Area where the page is not obscured by other content, such as the status bar，Through `safeArea`, you can know where the current page is covered, and make corresponding adjustments to ensure that important elements of the page are not covered. For example, if the top header is partially covered by the status bar, you can add a `paddingTop` to the header., It is a wrapper for the `api.safeArea` property.
- `Param`: `None`
- `Return` : `object`
``` js
{
    top:       // The upper edge of the safe area. For windows in immersive mode, the value is usually the height of the status bar, and 0 in full screen or non-immersive mode (44 in full screen when the iPhone X is in vertical screen).
    left:      // Left edge of safe area, usually 0 (44 in iPhone X landscape)
    bottom:    // Lower edge of the safe area, usually 0 (iPhone X is 34 in portrait and 21 in landscape)
    right:     // Right edge of safe area, usually 0 (44 in iPhone X landscape)
}
```

For example:

``` vue
<script>
export default {
  name: 'getSafeArea-demo',
  methods: {
    fixHeader() {
      const { top } = this.$getSafeArea()
      this.$api.dom('#header').style.paddingTop = `${top}px`
    }
  },
  onReady() {
    this.fixHeader()
  }
}
</script>
```

## $getWinSize()
- `Description`: Gets the screen size, including `winHeight`,` winWidth`, which are wrappers for the `api.winHeight`,` api.winWidth` properties.
- `Param`: `None`
- `Return` : `object`

``` js
{
  winHeight: // Screen height
  winWidth:  // Screen width
}
```

For example:

``` js
const { winHeight, winWidth } = this.$getWinSize()
// TODO
```

## $setPullDownRefresh(callback，options)
- `Description`: The default pull-down refresh component is displayed. When the default pull-down refresh component is used, the snap properties of the page are automatically reset. A wrapper for the `api.setRefreshHeaderInfo()` method.
- `Param`: 
  - **`callback`**:
    + `Type`：`Function`
    + `Required`: `true`
    + `Description`: Callback in pull-down refresh state
  - `options`: `object`
    + `Type`：`object`
    + `Required`: `false`
    + `Description`: Optional refresh options, including the following items

    | options | type | default | description
    | - | - | - | -
    | visible | `boolean` | `true` | is visible
    | bgColor | `string` | `rgba (187, 236, 153, 1.0)` when `defaultRefreshHeader` is `pull`, `#fff` when it is `swipe` | background color   
    | pathColor | `string`  | `#0F9D58` | The color of the progress bar, which takes effect when `defaultRefreshHeader` is `swipe`.
    | loadingImg | `string` | Rotate arrow image | Picture address when pulling up or down. Effective when `defaultRefreshHeader` is `pull`.
    | textColor | `string` | `rgba (109, 128, 153, 1.0)` | `defaultRefreshHeader` takes effect when it is `pull`.
    | textDown | `string` | `Dropdown can refresh ...`| Dropdown text description, effective when `defaultRefreshHeader` is `pull`.
    | textUp | `string` | `Release to refresh ...`| Text description when released, effective when `defaultRefreshHeader` is `pull`.
    | textLoading | `string` | Default: `Loading ...`| Loading status text description, effective when `defaultRefreshHeader` is `pull`.
    | textTime | `string` | `Last update plus datetime` | Update time text description, effective when `defaultRefreshHeader` is `pull`.
    | showTime | `boolean` | `true` | Whether to show the update time, which takes effect when `defaultRefreshHeader` is `pull`.


For example:

``` vue
<script>
export default {
  name: 'setPullDownRefresh-demo',
  data() {
    return {
      data: {}
    }
  },
  methods: {
    initData() {
      this.$req.get('/url').then(rs => {
        this.data = rs.data
        this.api.refreshHeaderLoadDone();
      })
    }
  },
  onReady() {
    this.$setPullDownRefresh(() => {
      // TODO
      // Load data from the server here.
      // After loading, call this.api.refreshHeaderLoadDone() method to restore the component to the default state.
      this.initData();
    })
  }
}
</script>
```