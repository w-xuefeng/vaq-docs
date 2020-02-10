# 网络请求

## 简单使用

> this.$req 是 NetworkRequest 的一个实例

### this.$req.get(url)
- `描述`: get 请求
- `参数`：
  - **`url`**
    + `类型`: `string`
    + `是否必须`: 是
    + `描述`: 请求的地址
- `返回值`: `Promise`

``` vue
<script>
export default {
  name: 'ajax-get-demo',
  methods: {
    getDataA() {
      this.$req.get('url').then(rs => {
        // TODO
      }).catch(err => {
        // Error handle
        this.$toast({ 'msg': err.message })
      })
    },
    async getDataB() {
      const rs = await this.$req.get('url/?param1=A&param2=B')
      // TODO
    },
  }
}
</script>
```

### this.$req.post(url, data, headers)
- `描述`: post 请求
- `参数`：
  - **`url`**
    + `类型`: `string`
    + `是否必须`: 是
    + `描述`: 请求的地址
  - **`data`**
    + `类型`: `object`
    + `是否必须`: 否
    + `描述`: 发送的数据
  - **`headers`**
    + `类型`: `object`
    + `是否必须`: 否
    + `描述`: 发送的请求头
- `返回值`: `Promise`

``` vue
<script>
import { Base64 } from 'js-base64'

export default {
  name: 'ajax-post-demo',
  data() {
    return {
      username: '',
      password: '',
      someInfo: {}
    }
  },
  methods: {
    postDataA() {
      this.$req.post('url', {
        username: this.username,
        password: this.password
      }).then(rs => {
        // TODO
      }).catch(err => {
        // Error handle
        this.$toast({ 'msg': err.message })
      })
    },
    async postDataB() {
      const token = Base64.encode(`${Math.floor(new Date().getTime())}-${this.username}`)
      const rs = await this.$req.post('url', this.someInfo, { Authorization: token })
      // TODO
    },
  }
}
</script>
```
### this.$req.request(options)
- `描述`: 发送请求
- `返回值`: `Promise`
- `参数`：
  - **`options`**
    + `类型`: `object`
    + `是否必须`: 是
    + `描述`: 请求的可选项，包括以下几项

| 可选项 | 类型 | 是否必须 | 默认值 | 描述
| - | - | - | - | - 
| url | string | true | undefined | 请求地址
| data | object | false | undefined | 发送的数据
| files | object | false | undefined | 以表单方式提交文件，支持多文件上传（JSON对象）,如 {"file": "path"}，也支持同一字段对应多文件：{"file":["path1","path2"]}。文件路径，支持绝对路径，以及fs://、cache://、box://等文件路径协议。可直接使用其他端 API 返回的结果，如 api.getPicture 回调的 ret.data 等.
| method | string | false | 'get' | 请求方式，取值范围 'get'、'post'、'put'、'delete'、 'head'、 'options'、 'patch'
| encode | boolean | false | true | 是否对url进行编码。默认或传 true 时，Android 将始终对 url 编码，而 iOS 只有在 url 不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在 js 层进行编码，然后此参数传 false。
| tag | string | false | `ajax-${new Date().getTime()}` | 该字段用于传给 cancelAjax 方法来取消请求，如果传入该字段，请保证各个 ajax 的 tag 字段唯一
| timeout | number | false | 30 | 超时时间，单位：秒
| headers | object | false | undefined | 请求头
| dataType | string | false | 'json' | 返回数据类型。若该字段传 json，接收到服务器返回的数据后会尝试将其转换成 JSON 对象，如果无法转成 JSON 对象，将返回数据类型错误，取值范围 'json','text';
| returnAll |  boolean | false | false | 是否需要返回所有 response 信息（包括响应头、消息体、状态码），为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)
| charset | string | false | utf-8 | 当响应头里面没有返回字符集编码时，使用此编码来解析数据
| report | boolean | false | false | 是否实时返回上传文件进度
| cache | boolean | false | false | 是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在 get 请求有效
| certificate | object | false | undefined | 用于https请求开启双向认证的情况下，客户端配置p12安全证书设置。`{ path: 'p12证书路径，支持fs://、widget://、cache://等文件路径协议，字符串类型' ,password:'证书密码，字符串类型' }`
| safeMode | string | false | 'none' |设置请求安全模式。设置后，若检测到数据有安全风险时将返回 “不安全的数据” 错误 ，取值范围 'none'， 'both'，'request'， 'response';
| proxy | object | false | undefined | 设置代理请求服务器。`{ host: // 服务器地址，字符串类型 port: // 服务器端口，数字类型 }`

### this.$req.setBaseUrl(baseUrl)
- `描述`: 设置请求的基础 url，之后请求即可使用相对地址
- `参数`：
  - **`baseUrl`**
    + `类型`: `string`
    + `是否必须`: 是
    + `描述`: 请求的基础网络地址

``` js
this.$req.setBaseUrl('https://api.example.com')
```

### this.$req.interceptor
- `描述`: 请求拦截器，在发送请求之前执行，可对请求参数进行预处理，通过 `this.requestOptions` 访问到请求的 `options`，这里 `this` 指向 `Request` 实例，这里不可用箭头函数代替，否则 this 将指向 Vue 实例
- `类型`: `Function`
- `返回值`: `boolean`, 返回 true 将继续发送请求，返回 false 将取消请求发送

### this.$req.handleError
- `描述`: 错误处理，在发送请求出错时执行
- `类型`: `Function`
- `参数`: `Error`

### this.$req.afterReauest
- `描述`: 响应拦截器
- `类型`: `Function`
- `参数`: 服务端返回的数据
- `返回值`: 返回的数据将作为请求的返回数据

``` vue
<script>
import { Base64 } from 'js-base64'

export default {
  name: 'ajax-interceptor-handleError-afterReauest-demo',
  data() {
    return {
      username: '',
      password: '',
      someInfo: {}
    }
  },
  methods: {
    initRequest () {
      const _this = this
      this.$req.setBaseUrl('https://api.example.com')
      this.$req.interceptor = function () {
        // 此处不可用箭头函数， 否则无法获取 Request 实例的参数 requestOptions
        // 请求拦截器
        // 在发起请求前执行
        this.requestOptions.headers = {
          ...this.requestOptions.headers,
          'Authorization': Base64.encode(`${Math.floor(new Date().getTime())}-${_this.username}`)
        }
        return true
        // 返回值决定是否发起请求
        // 返回 true 继续发送请求
        // 返回 false 拦截请求，取消发送
      }
      this.$req.afterReauest = rs => {
        alert(`发送请求结束，返回的数据为 \n ${JSON.stringify(rs.data, null, 2)}`)
        return rs.data
      }
      this.$req.handleError = err => {
        // Error Handle
        this.$toast({ 'msg': err.message })
      }
    }
  },
  onReady() {
    this.initRequest()
  }
}
</script>
```

### this.$req.setTag(tag)
- `描述`: 设置当前请求的 tag， 用于传给 cancelAjax 方法来取消请求，如果传入该字段，请保证各个 ajax 的 tag 字段唯一
- `参数`：
  - **`tag`**
    + `类型`: `string`
    + `是否必须`: 是
    + `描述`: 每个请求的唯一标志

### this.$req.getTag()
- `描述`: 获取当前请求的 tag
- `返回值`：
  - **`tag`**
    + `类型`: `string | CancelTokenSource`
    + `描述`: 若在 PC 端调试，则返回 `axios` 的 `CancelTokenSource`，若在 移动端 Loader 调试，则返回 设置的 tag 字符串或者默认的 tag 字符串

### this.$req.cancelAjax(tag)
- `描述`: 取消传入 tag 的请求
- `参数`：
  - **`tag`**
    + `类型`: `string`
    + `是否必须`: 是
    + `描述`: 要取消请求的标志

## 全局使用

新建 `src/utils/HttpRequest.js`：

``` js
import { NetworkRequest } from 'vue-apicloud-quickstart'

export default class HttpRequest {
  constructor (baseUrl) {
    // 设置基础地址
    this.baseUrl = baseUrl
    // 存储请求队列
    this.queue = {}
  }

  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptor = function () {
      // 请求拦截器，在发送请求之前做点什么
      this.requestOptions.header = {
        // TODO 如修改请求头内容
      }
      return true
    }

    // 添加响应拦截器
    instance.afterReauest = rs => {
      // TODO 请求结束之后做点什么
      this.destroy(url)
      return rs
    }

    instance.handleError = (/* err */) => {
      // TODO 统一的错误处理
    }
  }

  // 创建实例
  create () {
    const request = new NetworkRequest()
    request.setBaseUrl(this.baseUrl)
    request.requestOptions.header = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-URL-PATH': location.pathname
    }
    return request
  }

  // 请求实例
  request (options) {
    const instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance.request(options)
  }
}
```

新建 `src/utils/request.js`：

``` js
import HttpRequest from './HttpRequest'

const Req = new HttpRequest('https://api.example.com')

export const login = (username, password) => {
  const data = { username, password }
  return Req.request({
    url: '/login',
    method: 'post',
    data
  })
}

export const getUserinfo = usertoken => {
  return Req.request({ url: `/users/${usertoken}` })
}

// 在这里定义业务的请求
```

在页面中使用， `src/paegs/login/index.vue`:

``` vue
<script>
import { login, getUserinfo } from '@/utils/request'

export default {
  name: 'ajax-demo',
  data() {
    return {
      username: '',
      password: '',
      usertoken: '',
      userinfo: {}
    }
  },
  methods: {
    loginApp() {
      login(this.username, this.password).then(rs => {
        this.usertoken = rs.usertoken
        this.getUserInfo()
      })
    },
    async getUserInfo() {
      const rs = await getUserinfo(this.usertoken)
      this.$api.setStorage('userinfo', rs.userinfo)
      this.userinfo = rs.userinfo
    }
  }
}
</script>
```