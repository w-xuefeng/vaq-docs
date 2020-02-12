(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{255:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("COMPATIBILITY NOTE")]),e._v(" "),a("p",[e._v("vue-apicloud-quickstart requires Node.js >= 8.")])]),e._v(" "),a("h2",{attrs:{id:"installation-for-a-new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-for-a-new-project"}},[e._v("#")]),e._v(" Installation for a New Project")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Assuming you have the latest version of vue-cli installed globally")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a new vue project using vue-cli")]),e._v("\n$ vue create project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change to the project directory")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install vue-apicloud-quickstart")]),e._v("\n$ vue "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @w-xuefeng/apicloud\n")])])]),a("p",[e._v("Or execute the following command in the project directory")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @w-xuefeng/vue-cli-plugin-apicloud     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or use yarn")]),e._v("\n$ vue invoke @w-xuefeng/apicloud\n")])])]),a("p",[e._v("Enter the relevant information as prompted to complete the installation")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("? 请输入项目 ID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the app "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" of your project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A6000000000001\n? 请输入项目名称 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the app name of your project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" vue-apicloud-template\n? 请输入项目描述 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the description of your project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" A Vue.js APP with APICloud\n? 请输入项目作者 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the author of your project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" @w-xuefeng/vue-cli-plugin-apicloud\n? 请输入运行项目的端口号，默认 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Please enter the port number of the running project, the default is "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])])]),a("ul",[a("li",[e._v("APICloud project ID, obtained in the APICloud console. The default here is "),a("code",[e._v("A6000000000001")]),e._v(" (non-real ID, only for display, please replace with the real ID of your project)")]),e._v(" "),a("li",[e._v("Project name, default "),a("code",[e._v("vue-apicloud-template")])]),e._v(" "),a("li",[e._v("Project description, default "),a("code",[e._v("A Vue.js APP with APICloud")])]),e._v(" "),a("li",[e._v("Project author, default "),a("code",[e._v("@ w-xuefeng / vue-cli-plugin-apicloud")])]),e._v(" "),a("li",[e._v("Port number for running the project, default "),a("code",[e._v("8080")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),a("p",[e._v("The APICloud project ID is consistent with the project ID of the custom loader, otherwise WiFi debugging cannot be performed")]),e._v(" "),a("p",[e._v("If port 8080 is already occupied by another program, you should enter a new unoccupied port number.\nAfter installation, if you want to modify the port number, you should modify the port number of "),a("code",[e._v('"serve": "vue-cli-service serve --port 8080"')]),e._v(" in the "),a("code",[e._v("package.json")]),e._v(", and  "),a("code",[e._v("url: 'http://your IP address:8080/indexindex.html'")]),e._v(" in the "),a("code",[e._v("index.html")]),e._v(".Then restart the project and perform a WiFi sync.")]),e._v(" "),a("p",[e._v("Similarly, during WiFi debugging, if your local IP has changed, you need to modify the IP address of "),a("code",[e._v("url: 'http://your IP address:8080/indexindex.html'")]),e._v(" in the "),a("code",[e._v("index.html")]),e._v(", and then perform a WiFi synchronization.")])]),e._v(" "),a("h2",{attrs:{id:"inside-an-existing-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inside-an-existing-project"}},[e._v("#")]),e._v(" Inside an Existing Project")]),e._v(" "),a("p",[e._v("If you want to use vue-apicloud-quickstart in an existing project, you should first submit your local changes, because after installing vue-apicloud-quickstart, it will make changes to the local project files. As above, enter the relevant information according to the prompt to complete the installation.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# installation")]),e._v("\n$ vue "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @w-xuefeng/apicloud\n")])])]),a("p",[e._v("Or execute the following command in the project directory")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @w-xuefeng/vue-cli-plugin-apicloud     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or use yarn")]),e._v("\n$ vue invoke @w-xuefeng/apicloud\n")])])]),a("p",[e._v("Decide whether to keep the changes according to the needs of the project.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("✔  Successfully invoked generator "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" plugin: @w-xuefeng/vue-cli-plugin-apicloud\n   The following files have been updated / added:\n\n     .syncignore\n     config.xml\n     index.html\n     public/res/img/logo.png\n     src/assets/img/logo.png\n     src/config/pages.js\n     src/pages/home/index.vue\n     src/pages/home/web.vue\n     src/pages/index/index.vue\n     src/pages/login/index.vue\n     vue.config.js\n     .gitignore\n     package.json\n     public/index.html\n     src/assets/logo.png\n     src/components/HelloWorld.vue\n     src/main.js\n     yarn.lock\n\n   You should review these changes with "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" and commit them.\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);