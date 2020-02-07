(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{260:function(e,s,t){"use strict";t.r(s);var a=t(2),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[e._v("#")]),e._v(" 快速上手")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("请确保你的 Node.js 版本 >= 8。")])]),e._v(" "),t("h2",{attrs:{id:"新项目安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新项目安装"}},[e._v("#")]),e._v(" 新项目安装")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 假设你已经全局安装了最新版的 vue-cli")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 vue-cli 创建一个新的 vue 项目")]),e._v("\nvue create project\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切换到项目目录下")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" project\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装 vue-apicloud-quickstart")]),e._v("\nvue "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @w-xuefeng/apicloud\n")])])]),t("p",[e._v("根据提示语句输入相关信息即可完成安装")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("? 请输入项目 ID "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the app "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" of your project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A6000000000001\n? 请输入项目名称 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the app name of your project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" vue-apicloud-template\n? 请输入项目描述 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the description of your project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A Vue.js APP with APICloud\n? 请输入项目作者 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the author of your project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" @w-xuefeng/vue-cli-plugin-apicloud\n? 请输入运行项目的端口号，默认 "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the port number of the running project, the default is "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])])]),t("ul",[t("li",[e._v("APICloud 项目 ID，在 APICloud 控制台获取。这里默认为 "),t("code",[e._v("A6000000000001")]),e._v("（非真实 ID，仅作展示使用，请替换为自己项目的真实 ID）")]),e._v(" "),t("li",[e._v("项目名称，默认 "),t("code",[e._v("vue-apicloud-template")])]),e._v(" "),t("li",[e._v("项目描述，默认 "),t("code",[e._v("A Vue.js APP with APICloud")])]),e._v(" "),t("li",[e._v("项目作者，默认 "),t("code",[e._v("@w-xuefeng/vue-cli-plugin-apicloud")])]),e._v(" "),t("li",[e._v("运行项目的端口号，默认 "),t("code",[e._v("8080")])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("APICloud 项目 ID 与 自定义 Loader 的项目 ID 是一致的，否则无法进行 wifi 调试")]),e._v(" "),t("p",[e._v("若 8080 端口已经被其他程序占用，你应该输入一个新的未被占用的端口号。\n安装完成后，如果要修改端口号，你应该要修改 "),t("code",[e._v("package.json")]),e._v(" 中"),t("code",[e._v('"serve": "vue-cli-service serve --port 8080"')]),e._v("的端口号 与 "),t("code",[e._v("index.html")]),e._v(" 中 "),t("code",[e._v("url: 'http://你的IP地址:8080/indexindex.html'")]),e._v("中的端口号，然后重启项目并执行一次 WiFi 同步。")])]),e._v(" "),t("h2",{attrs:{id:"现有项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现有项目"}},[e._v("#")]),e._v(" 现有项目")]),e._v(" "),t("p",[e._v("如果你想在一个现有项目中使用 vue-apicloud-quickstart，则首先应该将本地的修改进行提交，因为安装 vue-apicloud-quickstart 之后，会对本地项目文件进项修改。同上，根据提示语句输入相关信息即可完成安装。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装")]),e._v("\nvue "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @w-xuefeng/apicloud\n")])])]),t("p",[e._v("根据项目需要，自行决定是否保留更改。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("✔  Successfully invoked generator "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" plugin: @w-xuefeng/vue-cli-plugin-apicloud\n   The following files have been updated / added:\n\n     .syncignore\n     config.xml\n     index.html\n     public/res/img/logo.png\n     src/assets/img/logo.png\n     src/config/pages.js\n     src/pages/home/index.vue\n     src/pages/home/web.vue\n     src/pages/index/index.vue\n     src/pages/login/index.vue\n     vue.config.js\n     .gitignore\n     package.json\n     public/index.html\n     src/assets/logo.png\n     src/components/HelloWorld.vue\n     src/main.js\n     yarn.lock\n\n   You should review these changes with "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" and commit them.\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);