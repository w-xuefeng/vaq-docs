# Getting Started

::: warning COMPATIBILITY NOTE
vue-apicloud-quickstart requires Node.js >= 8.
:::

## Installation for a New Project

``` bash
# Assuming you have the latest version of vue-cli installed globally
# Create a new vue project using vue-cli
vue create project

# Change to the project directory
cd project

# install vue-apicloud-quickstart
vue add @w-xuefeng/apicloud
```

Enter the relevant information as prompted to complete the installation

``` bash
? 请输入项目 ID (Please enter the app id of your project) A6000000000001
? 请输入项目名称 (Please enter the app name of your project) vue-apicloud-template
? 请输入项目描述 (Please enter the description of your project) A Vue.js APP with APICloud
? 请输入项目作者 (Please enter the author of your project) @w-xuefeng/vue-cli-plugin-apicloud
? 请输入运行项目的端口号，默认 8080 (Please enter the port number of the running project, the default is 8080) 8080
```

- APICloud project ID, obtained in the APICloud console. The default here is `A6000000000001` (non-real ID, only for display, please replace with the real ID of your project)
- Project name, default `vue-apicloud-template`
- Project description, default `A Vue.js APP with APICloud`
- Project author, default `@ w-xuefeng / vue-cli-plugin-apicloud`
- Port number for running the project, default `8080`

::: warning Notice
The APICloud project ID is consistent with the project ID of the custom loader, otherwise WiFi debugging cannot be performed

If port 8080 is already occupied by another program, you should enter a new unoccupied port number.
After installation, if you want to modify the port number, you should modify the port number of `"serve": "vue-cli-service serve --port 8080"` in the `package.json`, and  `url: 'http://your IP address:8080/indexindex.html'` in the `index.html`.Then restart the project and perform a WiFi sync.

Similarly, during WiFi debugging, if your local IP has changed, you need to modify the IP address of `url: 'http://your IP address:8080/indexindex.html'` in the `index.html`, and then perform a WiFi synchronization.
:::


## Inside an Existing Project

If you want to use vue-apicloud-quickstart in an existing project, you should first submit your local changes, because after installing vue-apicloud-quickstart, it will make changes to the local project files. As above, enter the relevant information according to the prompt to complete the installation.

``` bash
# 安装
vue add @w-xuefeng/apicloud
```

Decide whether to keep the changes according to the needs of the project.

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