# 全局助手方法

## api
- `Description`: 即 `window.api`, 在 `Vue` 实例中通过 `this.api` 使用，详情请查询[APICloud 官方文档 - API 对象](https://docs.apicloud.com/Client-API/api)

### [属性](https://docs.apicloud.com/Client-API/api#attr-content)
### [常量](https://docs.apicloud.com/Client-API/api#const-content)
### [事件](https://docs.apicloud.com/Client-API/api#evt-content)
### [方法](https://docs.apicloud.com/Client-API/api#method-content)

用例:

``` js
this.api.appId
```

## $api
- `type`: `object`
- `Description`: APICloud 官方封装的 js 框架，在 `Vue` 实例中通过 `this.$api` 使用, 具体参数详情请查询[APICloud 官方文档 - APICloud 前端框架](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide), 所有方法如下：

方法名 | 方法简介
- | -
[.trim()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#1) | 去掉字符串首尾空格 |
[.trimAll()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#2) | 去掉字符串所有空格 |
[.isArray()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#3) | 判断对象是否为数组 |
[.addEvt()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#4) | 为DOM元素绑定事件 |
[.rmEvt()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#5) | 移除DOM元素绑定的事件 |
[.one()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#6) | 为DOM元素绑定事件，事件只执行一次 |
[.dom()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#7) | 选择首个匹配的DOM元素 |
[.domAll()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#8) | 选择所有匹配的DOM元素 |
[.byId()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#9) | 通过Id选择DOM元素 |
[.first()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#10) | 选择DOM元素的第一个子元素 |
[.last()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#11) | 选择DOM元素的最后一个子元素 |
[.eq()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#12) | 选择第几个子元素 |
[.not()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#13) | 根据排除选择器选择子元素 |
[.prev()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#14) | 选择相邻的前一个元素 |
[.next()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#15) | 选择相邻的下一个元素 |
[.contains()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#16) | 判断某一个元素是否包含目标元素 |
[.closest()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#17) | 根据选择器匹配最近的父元素 |
[.remove()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#18) | 移除DOM元素 |
[.attr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#19) | 获取或设置DOM元素的属性 |
[.removeAttr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#20) | 移除DOM元素的属性 |
[.hasCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#21) | DOM元素是否含有某个className |
[.addCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#22) | 为DOM元素增加className |
[.removeCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#23) | 移除指定的className |
[.toggleCls()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#24) | 切换指定的className |
[.val()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#25) | 获取或设置常用 Form 表单元素的 value 值 |
[.prepend()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#26) | 在DOM元素内部，首个子元素前插入HTML字符串 |
[.append()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#27) | 在DOM元素内部，最后一个子元素后面插入HTML字符串 |
[.before()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#28) | 在DOM元素前面插入HTML字符串 |
[.after()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#29) | 在DOM元素后面插入HTML字符串 |
[.html()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#30) | 获取或设置DOM元素的innerHTML |
[.text()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#31) | 设置或者获取元素的文本内容 |
[.offset()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#32) | 获取元素在页面中的位置与宽高，(此为距离页面左侧及顶端的位置，并非距离窗口的位置) |
[.css()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#33) | 设置所传入的DOM元素的样式，可传入多条样式 |
[.cssVal()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#34) | 获取指定DOM元素的指定属性的完整的值，如800px |
[.jsonToStr()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#35) | 将标准的JSON 对象转换成字符串格式 |
[.strToJson()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#36) | 将JSON字符串转换成JSON对象 |
[.setStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#37) | 设置localStorage数据 |
[.getStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#38) | 获取localStorage数据，必须与 $api.setStorage() 配套使用 |
[.rmStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#39) | 清除localStorage中与键名对应的值 |
[.clearStorage()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#40) | 清除localStorage的所有数据，慎用 |
[.fixIos7Bar()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#41) | 适配iOS7+系统状态栏，为传入的DOM元素增加20px的上内边距 |
[.fixStatusBar()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#45) | 适配iOS7+、Android4.4+系统状态栏，为传入的DOM元素增加适当的上内边距，避免header与状态栏重叠 |
[.toast()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#42) | 延时提示框 |
[.get()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#43) | api.ajax()方法的get方式简写 |
[.post()](https://docs.apicloud.com/Front-end-Framework/framework-dev-guide#44) | api.ajax()方法的post方式简写 |

用例:

``` js
this.$api.setStorage('username', username)
```



## $req
- `Description`: 网络请求，`PC` 调试时，使用的是 `axios`, wifi 调试和正式打包时使用的是 `api.ajax()` 方法

详情请查看[网络请求](./network-request)

## element.getRect()

- `Param`: 无
- `Return`: `DOMRect`
- `Description`: 方法返回元素的大小及其相对于视口的位置, 是 `Element.getBoundingClientRect()` 的封装。

`DOMRect`:

  属性 |	类型 |	描述
  - | - | -
  bottom |	float |	Y 轴，相对于视口原点（viewport origin）矩形盒子的底部。只读。 
  height |	float |	矩形盒子的高度（等同于 bottom 减 top）。只读。
  left |	float |	X 轴，相对于视口原点（viewport origin）矩形盒子的左侧。只读。 
  right |	loat |	X 轴，相对于视口原点（viewport origin）矩形盒子的右侧。只读。 
  top |	float |	Y 轴，相对于视口原点（viewport origin）矩形盒子的顶部。只读。
  width |	float |	矩形盒子的宽度（等同于 right 减 left）。只读。 
  x |	float |	X 轴，相对于视口原点（viewport origin）矩形盒子的左侧。只读。 
  y |	float |	Y 轴，相对于视口原点（viewport origin）矩形盒子的顶部。只读。

用例:

``` js
this.$api.dom('#id').getRect();
```

## element.computedStyle()

- `Param`: 无
- `Return`: `CSSStyleDeclaration `
- `Description`: 返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。私有的CSS属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。是 `window.getComputedStyle(element)` 的封装。

用例:

``` js
this.$api.dom('#id').computedStyle();
```


## $page

- `Type`: `Object`
- `Description`: 操作页面的方法对象，包含 `open`, `push`, `close`, `closeToWin`, `pageParam` 方法。

### open(url, options)
- `Description`: 打开 `window` 页面, 若 `window` 已存在，则会把该 `window` 显示到最前面，同时若 `url` 有变化或者 `reload` 参数为 `true` 时，页面会重新加载。`api.openWin()` 方法的封装。
- `Param`: 
  - `url`: `string`, 必填项，页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs:// 等协议路径，也可以为远程地址。 当 `winOpts.data` 参数不为空时，`url` 将做为`baseUrl`，`winOpts.data` 中的 `html` 引用的资源文件根路径以该 `url` 为基础。
  - `options`: `object`, 打开页面的参数，包含以下几项
    - `name`: `string`, 可选项，要打开 `window` 的 `name`, 默认为 `win_${url}`, 
    - `pageParam`: `any`, 可选项，向要打开 `window` 页面传递的数据，无默认值
    - `winOpts`: `object`, 可选项，要打开页面 `window` 的所有参数，详见[官方文档](https://docs.apicloud.com/Client-API/api#33), 内部参数可覆盖外部参数
    - `animation`: `object`, 可选项，页面打开的动画效果， 详见[官方文档](https://docs.apicloud.com/Client-API/api#33)
      - `type`: 动画类型
      - `subType`: 动画子类型
      - `duration`: `number`, 动画过渡时间，默认300毫秒
    ``` js
    {
        type: "none",                //动画类型（详见动画类型常量）
        subType: "from_right",       //动画子类型（详见动画子类型常量）
        duration: 300                //动画过渡时间，默认300毫秒
    }

    type 取值范围：

    none            // 无动画效果
    push            // 新视图将旧视图推开
    movein          // 新视图移到旧视图上面
    fade            // 交叉淡化过渡（不支持过渡方向）
    flip            // 翻转效果
    reveal          // 将旧视图移开,显示下面的新视图
    ripple          // 滴水效果（不支持过渡方向）
    curl            // 向上翻一页
    un_curl         // 向下翻一页
    suck            // 收缩效果（不支持过渡方向）
    cube            // 立方体翻滚效果

    subType 取值范围：

    from_right      // 从右边开始动画
    from_left       // 从左边开始动画
    from_top        // 从顶部开始动画
    from_bottom     // 从底部开始动画

    （Android系统flip，ripple，curl，un_curl，suck，cube 类型不支持）
    ```
用例:

``` vue
<script>
export default {
  name: 'open-window-page-demo',
  methods: {
    openDetails() {
      this.$page.open('article/details', {
        name: 'articleDetailsPage',
        pageParam: {
          title: '标题',
          content: '内容'
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
  - `urlOrOptions`: `string | object`, 必填项，打开页面的参数，如果是 `string` 类型，则当作 `url` 直接传递给 `open()` 方法， 如果是 `object`, 则包含以下几项
    - `name`: `string`, 可选项，要打开 `window` 的 `name`, 这里可以填写 `src/config/pages.js` 里面配置的页面的 `name`，可直接打开该页面
    - 其余参数与 `open()` 方法一样

用例:

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
- `Description`: 关闭当前 `window` 页面，`api.closeWin()` 方法的封装。
- `Param`: 无

用例:

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
  - `options`: `object`
    - `name`： `string`, window 名字
    - `animation`：`object` （可选项）动画参数，不传时使用默认动画, 详见 `open()` 方法的 `animation` 参数

用例:

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
- `Description`: 用于获取页面间传递的参数值，为 `api.openWin()`、`api.openFrame()`、`$page.open()`、`$page.push()`、`$frame.open()` 等方法中的 `pageParam` 参数对应值， `api.pageParam` 属性的封装。
- `Param`: 无
- `Return`: `any`

用例:

``` vue
<script>
export default {
  name: 'closeToWin-demo',
  data () {
    return {
      article: null
    }
  },
  methods: {
    getData() {
      this.article = this.$page.pageParam()
    },
  },
  onReady () {
    this.getData()
  }
}
</script>
```

## $frame
- `Type`: `Object`
- `Description`: 操作 `Frame` 的方法对象，包含 `open()` 方法。

### open(options)
- `Description`: 打开 frame, 若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新.此方法对 frameGroup 里面的 frame 不起作用，`api.openFrame()` 方法的封装
- `Param`: 
  - `url`: `string`, 必填项，打开页面的路径，支持相对路径，绝对路径，网络协议 `http`， `https`， 相对协议 `//`
  - `options`: `object`, 打开 `frame` 的参数，详见[官方文档](https://docs.apicloud.com/Client-API/api#27)
  
用例:

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
  onReady () {
    this.openHeader('Article Title')
  }
}
</script>
```
## $toast(options)
- `Description`: 弹出一个定时自动关闭的提示框, `api.toast()` 方法的封装
- `Param`: 
  - `options`: `object`
    - `msg`: `string`, 提示消息
    - `duration`: `number`,（可选项）持续时长，单位：毫秒, 默认值 3000
    - `location`：`string`,（可选项）弹出位置，顶部、中间或底部

    取值范围:

    ``` js
    top         // 顶部
    middle      // 中间
    bottom      // 底部
    ```
用例:

``` vue
<script>
export default {
  name: 'toast-demo',
  onReady () {
    this.$toast({ msg: '页面已经打开', location: 'top' })
  }
}
</script>
```

## $pagesInfo
- `Description`: 获取页面配置信息， 以数组的形式返回

用例：

``` js
console.log(this.$pagesInfo)
/**
[
  {
    title: "开屏广告页",
    name: "index",
    path: "index/index",
    htmlPath: "indexindex"
  },
  {
    title: "登录页",
    name: "login",
    path: "login/index",
    htmlPath: "loginindex"
  },
  {
    title: "应用首页",
    name: "home",
    path: "home/index",
    htmlPath: "homeindex"
  },
  {
    title: "web页面",
    name: "web",
    path: "home/web",
    htmlPath: "homeweb"
  },
  ...
] 
*/
```

## $getPageMap()
- `Description`: 获取页面配置信息, 以对象的形式返回，页面的 `key` 即配置的页面的 `name`
- `Param`: 无
- `Return`: `object`

用例：

``` js
console.log(this.$getPageMap())

/**
{
  index: {
    title: "开屏广告页",
    name: "index",
    path: "index/index",
    htmlPath: "indexindex"
  },
  login: {
    title: "登录页",
    name: "login",
    path: "login/index",
    htmlPath: "loginindex"
  },
  home: {
    title: "应用首页",
    name: "home",
    path: "home/index",
    htmlPath: "homeindex"
  },
  web: {
    title: "web页面",
    name: "web",
    path: "home/web",
    htmlPath: "homeweb"
  },
  ...
}
*/
```

## $bindKeyBackExitApp()
- `Description`: 绑定 `keyback` 为连续按下 2 次退出应用
- `Param`: 无

用例:

``` vue
<script>
export default {
  name: 'bindKeyBackExitApp-demo',
  onReady () {
    this.$bindKeyBackExitApp()
  }
}
</script>
```

## $n2p(name)
- `Description`: 将页面的 `name` 转换为页面的 `htmlPath`
- `Param`: 
  - `name`: `string`, 必填项， 为 `src/config/pages.js` 文件中配置的页面的 `name`
- `Return` : `string`, 页面的 `htmlPath`

用例:

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
- `Description`: 页面不被其它内容（如状态栏）遮住的区域，`JSON` 对象，通过 `safeArea` 能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住，比如应对顶部 `header` 被状态栏遮住一部分，可以为 `header` 增加一个 `paddingTop，``api.safeArea` 属性的封装
- `Param`: 无
- `Return` : `object`
``` js
{
    top:       // 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）
    left:      // 安全区域左边缘，通常为0（iPhone X横屏时为44）
    bottom:    // 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）
    right:     // 安全区域右边缘，通常为0（iPhone X横屏时为44）
}
```

用例:

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
- `Description`: 获取屏幕尺寸，包括 `winHeight`, `winWidth`, 是`api.winHeight`、`api.winWidth` 属性的封装。
- `Param`: 无
- `Return` : `object`

``` js
{
  winHeight: // 屏幕高度
  winWidth:  // 屏幕宽度
}
```

用例:

``` js
const { winHeight, winWidth } = this.$getWinSize()
// TODO
```

## $setPullDownRefresh(callback，options)
- `Description`: 显示默认下拉刷新组件，使用默认下拉刷新组件时会自动重新设置页面的弹动属性。`api.setRefreshHeaderInfo()` 方法的封装。
- `Param`: 
  - `callback`: `Function`, 必填项，处于下拉刷新状态的回调
  - `options`: `object`, 可选项
    - `visible`：
      - 类型：布尔
      - 默认值：`true`
      - 描述：（可选项）是否可见
    - `bgColor`：
      - 类型：字符串
      - 默认值：当 `defaultRefreshHeader` 为 `pull` 时为 `rgba(187, 236, 153, 1.0)`，为 `swipe `时为 `#fff`
      - 描述：（可选项）背景颜色    
    - `pathColor`：
      - 类型：字符串
      - 默认值：`#0F9D58`
      - 描述：（可选项）进度条的颜色，`defaultRefreshHeader` 为 `swipe` 时生效。
    - `loadingImg`：
      - 类型：字符串
      - 默认值：旋转箭头图片
      - 描述：（可选项）上拉下拉时的图片地址，`defaultRefreshHeader` 为 `pull` 时生效。
    - `textColor`：
      - 类型：字符串
      - 默认值：`rgba(109, 128, 153, 1.0)`
      - 描述：（可选项）文本颜色，`defaultRefreshHeader` 为 `pull`时生效。
    - `textDown`：
      - 类型：字符串
      - 默认值：`下拉可以刷新...`
      - 描述：（可选项）下拉文字描述，`defaultRefreshHeader` 为 `pull` 时生效。
    - `textUp`：
      - 类型：字符串
      - 默认值：`松开可以刷新...`
      - 描述：（可选项）松开时文字描述，`defaultRefreshHeader` 为 `pull` 时生效。
    - `textLoading`：
      - 类型：字符串
      - 默认值：`加载中...`
      - 描述：（可选项）加载状态文字描述，`defaultRefreshHeader` 为 `pull` 时生效。
    - `textTime`：
      - 类型：字符串
      - 默认值：`最后更新加日期时间`
      - 描述：（可选项）更新时间文字描述，`defaultRefreshHeader` 为 `pull` 时生效。
    - `showTime`：
      - 类型：布尔
      - 默认值：`true`
      - 描述：（可选项）是否显示更新时间，`defaultRefreshHeader` 为 `pull` 时生效。

用例:

``` vue
<script>
export default {
  name: 'setPullDownRefresh-demo',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    initData () {
      this.$req.get('/url').then(rs => {
        this.data = rs.data
        this.api.refreshHeaderLoadDone();
      })
    }
  },
  onReady() {
    this.$setPullDownRefresh(() => {
      // TODO
      // 在这里从服务器加载数据，加载完成后调用 this.api.refreshHeaderLoadDone() 方法恢复组件到默认状态
      this.initData();
    })
  }
}
</script>
```