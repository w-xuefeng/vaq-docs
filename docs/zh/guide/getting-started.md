# 快速上手

::: warning 注意
请确保你的 Node.js 版本 >= 8。
:::

## 新项目安装

``` bash
# 假设你已经全局安装了最新版的 vue-cli
# 使用 vue-cli 创建一个新的 vue 项目
vue create project

# 切换到项目目录下
cd project

# 安装 vue-apicloud-quickstart
vue add @w-xuefeng/apicloud
```

根据提示语句输入相关信息即可完成安装

``` bash
? 请输入项目 ID (Please enter the app id of your project) A6000000000001
? 请输入项目名称 (Please enter the app name of your project) vue-apicloud-template
? 请输入项目描述 (Please enter the description of your project) A Vue.js APP with APICloud
? 请输入项目作者 (Please enter the author of your project) @w-xuefeng/vue-cli-plugin-apicloud
? 请输入运行项目的端口号，默认 8080 (Please enter the port number of the running project, the default is 8080) 8080
```

- APICloud 项目 ID，在 APICloud 控制台获取。这里默认为 `A6000000000001`（非真实 ID，仅作展示使用，请替换为自己项目的真实 ID）
- 项目名称，默认 `vue-apicloud-template`
- 项目描述，默认 `A Vue.js APP with APICloud`
- 项目作者，默认 `@w-xuefeng/vue-cli-plugin-apicloud`
- 运行项目的端口号，默认 `8080`

::: warning 注意
APICloud 项目 ID 与 自定义 Loader 的项目 ID 是一致的，否则无法进行 wifi 调试

若 8080 端口已经被其他程序占用，你应该输入一个新的未被占用的端口号。
安装完成后，如果要修改端口号，你应该要修改 `package.json` 中`"serve": "vue-cli-service serve --port 8080"`的端口号 与 `index.html` 中 `url: 'http://你的IP地址:8080/indexindex.html'`中的端口号，然后重启项目并执行一次 WiFi 同步。
:::

## 现有项目

如果你想在一个现有项目中使用 vue-apicloud-quickstart，则首先应该将本地的修改进行提交，因为安装 vue-apicloud-quickstart 之后，会对本地项目文件进项修改。同上，根据提示语句输入相关信息即可完成安装。

``` bash
# 安装
vue add @w-xuefeng/apicloud
```

根据项目需要，自行决定是否保留更改。

``` bash
✔  Successfully invoked generator for plugin: @w-xuefeng/vue-cli-plugin-apicloud
   The following files have been updated / added:

     .syncignore
     config.xml
     index.html
     public/res/img/logo.png
     src/assets/img/logo.png
     src/config/pages.js
     src/pages/home/index.vue
     src/pages/home/web.vue
     src/pages/index/index.vue
     src/pages/login/index.vue
     vue.config.js
     .gitignore
     package.json
     public/index.html
     src/assets/logo.png
     src/components/HelloWorld.vue
     src/main.js
     yarn.lock

   You should review these changes with git diff and commit them.
```