# Network Request

## Simple to use

> `this.$req` is an instance of `NetworkRequest`

### this.$req.get(url)
- `Description`: get request
- `Param`：
  - **`url`**
    + `Type`: `string`
    + `Required`: `true`
    + `Description`: the address of request
- `Return`: `Promise`

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
- `Description`: post request
- `Param`：
  - **`url`**
    + `Type`: `string`
    + `Required`: `true`
    + `Description`: the address of request
  - **`data`**
    + `Type`: `object`
    + `Required`: `false`
    + `Description`: the data to send
  - **`headers`**
    + `Type`: `object`
    + `Required`: `false`
    + `Description`: request header
- `Return`: `Promise`

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
- `Description`: send request
- `Return`: `Promise`
- `Param`：
  - **`options`**
    + `Type`: `object`
    + `Required`: `true`
    + `Description`: Requested options, including the following items

| Optional | Type | Required | Default | Description
| - | - | - | - | - 
| url | string | true | undefined | Request address
| data | object | false | undefined | the data to send
| files | object | false | undefined | Submit files in form, support multiple file uploads (JSON objects), such as {"file": "path"}, also supports multiple files for the same field: {"file": ["path1", "path2"]} File path, support absolute path, and file path protocols such as fs: //, cache: //, box: //, etc. You can directly use the results returned by other end APIs, such as ret.data of api.getPicture callback, etc.
| method | string | false | 'get' | Request method, this value range is 'get'、'post'、'put'、'delete'、 'head'、 'options'、 'patch'
| encode | boolean | false | true | Whether to encode the url. By default or passed true, Android will always encode the URL, while iOS will only encode when the URL is illegal (such as the presence of Chinese characters). If there are special characters in the url that need to be encoded, it is recommended to encode them in the js layer first, and then this parameter is passed false.
| tag | string | false | `ajax-${new Date().getTime()}` | This field is used to pass the cancelAjax method to cancel the request. If this field is passed in, please ensure that the tag field of each ajax is unique
| timeout | number | false | 30 | Timeout time, unit: second
| headers | object | false | undefined | Request header
| dataType | string | false | 'json' | Returns the data type. If the field is passed json, after receiving the data returned by the server, it will try to convert it into a JSON object. If it cannot be converted into a JSON object, it will return a data type error. The value range is 'json', 'text';
| returnAll |  boolean | false | false | Whether to return all response information (including response header, message body, and status code). When true, the returned header information acquisition method (ret.headers), message body information acquisition method (ret.body), and status code acquisition method ( ret.statusCode)
| charset | string | false | utf-8 | When no character set encoding is returned in the response header, use this encoding to parse the data
| report | boolean | false | false | Whether to return upload file progress in real time
| cache | boolean | false | false | Whether to cache, if cached, the next time the network is requested, the cache will be used, which is only valid for get requests
| certificate | object | false | undefined | Used in the case of https request to enable bidirectional authentication, the client configures the p12 security certificate settings`{ path: 'p12 certificate path, support file path protocols such as fs: //, widget: //, cache: //, string type' ,password:'Certificate password, string type' }`
| safeMode | string | false | 'none' | Set request security mode. After setting, if the data is detected to have a security risk, an "unsafe data" error will be returned. The value range is 'none', 'both', 'request', 'response'
| proxy | object | false | undefined | Set up a proxy request server. `{ host: // server address, string type port: // server port, numeric type }`

### this.$req.setBaseUrl(baseUrl)
- `Description`: Set the base URL of the request, and later requests can use the relative address
- `Param`：
  - **`baseUrl`**
    + `Type`: `string`
    + `Required`: `true`
    + `Description`: Requested base network address

``` js
this.$req.setBaseUrl('https://api.example.com')
```

### this.$req.interceptor
- `Description`: The request interceptor is executed before the request is sent. The request parameters can be pre-processed. The requested options can be accessed through `this.requestOptions`, where` this` points to the `NetworkRequest` instance, and arrow functions cannot be used here. this will point to a Vue instance
- `Type`: `Function`
- `Return`: `boolean`, Returns true to continue sending requests, false to cancel requests

### this.$req.handleError
- `Description`: Error handling, executed when there is an error in sending the request
- `Type`: `Function`
- `Param`: `Error`

### this.$req.afterReauest
- `Description`: Response interceptor
- `Type`: `Function`
- `Param`: Data returned by the server
- `Return`: The returned data will be the requested return data

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
        // Arrow function is not available here, otherwise Param requestOptions of NetworkRequest instance cannot be obtained
        // request interceptor
        // execute before request
        this.requestOptions.headers = {
          ...this.requestOptions.headers,
          'Authorization': Base64.encode(`${Math.floor(new Date().getTime())}-${_this.username}`)
        }
        return true
        // The return value determines whether to initiate the request
        // return true to continue sending requests
        // return false to intercept the request and cancel sending
      }
      this.$req.afterReauest = rs => {
        alert(`After sending the request, the returned data is \n ${JSON.stringify(rs.data, null, 2)}`)
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
- `Description`: Sets the tag of the current request. It is used to cancelAjax by passing the cancelAjax method. If this field is passed in, please ensure that the tag field of each ajax is unique.
- `Param`：
  - **`tag`**
    + `Type`: `string`
    + `Required`: `true`
    + `Description`: Unique flag for each request

### this.$req.getTag()
- `Description`: Get the currently requested tag
- `Return`：
  - **`tag`**
    + `Type`: `string | CancelTokenSource`
    + `Description`: If debugging on the PC side, it returns the `CancelTokenSource` of `axios`, and if debugging on the mobile loader, it returns the set tag string or the default tag string

### this.$req.cancelAjax(tag)
- `Description`: Cancel request by tag
- `Param`：
  - **`tag`**
    + `Type`: `string`
    + `Required`: `true`
    + `Description`: Sign to cancel request

## Global use

create a new file `src/utils/HttpRequest.js`：

``` js
import { NetworkRequest } from 'vue-apicloud-quickstart'
import { Base64 } from 'js-base64'

export default class HttpRequest {
  constructor (baseUrl) {
    // Set the base address
    this.baseUrl = baseUrl
    // Store request queue
    this.queue = {}
  }

  // destroy request instance
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  // request interception
  interceptors (instance, url) {
    // add request interceptor
    instance.interceptor = function () {
      // request interceptor, do something before sending the request
      if (!url.includes('/login')) {
        this.requestOptions.header = {
          // TODO, for example, modify the content of the request header
          ...this.requestOptions.header,
          'Authorization': Base64.encode(`${Math.floor(new Date().getTime())}-${window.$api.getStorage('token')}`)
        }
      }
      return true
    }

    // add response interceptor
    instance.afterReauest = rs => {
      // TODO, Do something after the request
      this.destroy(url)
      return rs
    }

    instance.handleError = (/* err */) => {
      // TODO, Unified error handling
    }
  }

  // create instance
  create () {
    const request = new NetworkRequest()
    request.setBaseUrl(this.baseUrl)
    request.requestOptions.header = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-URL-PATH': location.pathname
    }
    return request
  }

  // request instance
  request (options) {
    const instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance.request(options)
  }
}
```

create a new file `src/utils/request.js`：

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

// Define the business request here
```

Use in pages， `src/paegs/login/index.vue`:

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