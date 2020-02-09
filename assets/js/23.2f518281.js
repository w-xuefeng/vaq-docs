(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{259:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原生事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生事件"}},[t._v("#")]),t._v(" 原生事件")]),t._v(" "),s("h2",{attrs:{id:"原生事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生事件监听"}},[t._v("#")]),t._v(" 原生事件监听")]),t._v(" "),s("p",[t._v("在 APICloud 项目中，监听原生事件如下所示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eventName'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error Handel")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在 vue-apicloud-quickstart 中，可以和上面一样，直接使用 "),s("code",[t._v("addEventListener")]),t._v(" 方法监听原生事件，如")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event-demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listenKeyBack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyback'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'按下了返回键'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error Handel")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadMore")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrolltobottom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        extra"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loadMore TODO")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'已滚动到底部'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReady")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listenKeyBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadMore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("也可以使用更加便捷的 "),s("code",[t._v("apiEvent")]),t._v(" 语法糖，如")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event-demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  apiEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'按下了返回键'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error Handel")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scrolltobottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      extra"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        threshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*ret, err*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loadMore TODO")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'已滚动到底部'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"支持的原生事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的原生事件"}},[t._v("#")]),t._v(" 支持的原生事件")]),t._v(" "),s("p",[t._v("支持除 "),s("code",[t._v("apiready")]),t._v(" 外所有的原生事件，包括自定义事件。")]),t._v(" "),s("p",[t._v("发送自定义事件如下所示，")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendMyEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    content\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'send-event-demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMyEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myEventName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        extra"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          key1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          key2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value2'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("监听自定义事件如下所示，")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event-listener-demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  apiEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myEventName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO width  key1, key2 ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error Handel")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("以下是支持 "),s("code",[t._v("apiEvent")]),t._v(" 监听的原生事件列表，来自 APICloud 官方文档。关于详细的原生事件参数，请参考"),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c0",target:"_blank",rel:"noopener noreferrer"}},[t._v("APICloud 官方文档-API对象-Event"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"batterylow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batterylow"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c1",target:"_blank",rel:"noopener noreferrer"}},[t._v("batterylow"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"batterystatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batterystatus"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c2",target:"_blank",rel:"noopener noreferrer"}},[t._v("batterystatus"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"keyback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyback"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c3",target:"_blank",rel:"noopener noreferrer"}},[t._v("keyback"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"keymenu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keymenu"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c4",target:"_blank",rel:"noopener noreferrer"}},[t._v("keymenu"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"volumeup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volumeup"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c21",target:"_blank",rel:"noopener noreferrer"}},[t._v("volumeup"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"volumedown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volumedown"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c22",target:"_blank",rel:"noopener noreferrer"}},[t._v("volumedown"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"offline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c5",target:"_blank",rel:"noopener noreferrer"}},[t._v("offline"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"online"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#online"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c6",target:"_blank",rel:"noopener noreferrer"}},[t._v("online"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"pause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c7",target:"_blank",rel:"noopener noreferrer"}},[t._v("pause"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"resume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resume"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("resume"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"scrolltobottom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolltobottom"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c9",target:"_blank",rel:"noopener noreferrer"}},[t._v("scrolltobottom"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"shake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shake"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c10",target:"_blank",rel:"noopener noreferrer"}},[t._v("shake"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"takescreenshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#takescreenshot"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c24",target:"_blank",rel:"noopener noreferrer"}},[t._v("takescreenshot"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"appidle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appidle"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#appidle",target:"_blank",rel:"noopener noreferrer"}},[t._v("appidle"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"swipedown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swipedown"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c11",target:"_blank",rel:"noopener noreferrer"}},[t._v("swipedown"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"swipeleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swipeleft"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c12",target:"_blank",rel:"noopener noreferrer"}},[t._v("swipeleft"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"swiperight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swiperight"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c13",target:"_blank",rel:"noopener noreferrer"}},[t._v("swiperight"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"swipeup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swipeup"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c14",target:"_blank",rel:"noopener noreferrer"}},[t._v("swipeup"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"tap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tap"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c15",target:"_blank",rel:"noopener noreferrer"}},[t._v("tap"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"longpress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#longpress"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c23",target:"_blank",rel:"noopener noreferrer"}},[t._v("longpress"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"viewappear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewappear"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c16",target:"_blank",rel:"noopener noreferrer"}},[t._v("viewappear"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"viewdisappear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewdisappear"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c17",target:"_blank",rel:"noopener noreferrer"}},[t._v("viewdisappear"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"noticeclicked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noticeclicked"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c18",target:"_blank",rel:"noopener noreferrer"}},[t._v("noticeclicked"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"appintent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appintent"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c19",target:"_blank",rel:"noopener noreferrer"}},[t._v("appintent"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"smartupdatefinish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smartupdatefinish"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c20",target:"_blank",rel:"noopener noreferrer"}},[t._v("smartupdatefinish"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"launchviewclicked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launchviewclicked"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#c25",target:"_blank",rel:"noopener noreferrer"}},[t._v("launchviewclicked"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"keyboardshow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyboardshow"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#keyboardshow",target:"_blank",rel:"noopener noreferrer"}},[t._v("keyboardshow"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"keyboardhide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyboardhide"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#keyboardhide",target:"_blank",rel:"noopener noreferrer"}},[t._v("keyboardhide"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"safeareachanged"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safeareachanged"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#safeareachanged",target:"_blank",rel:"noopener noreferrer"}},[t._v("safeareachanged"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"navtitle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navtitle"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#navtitle",target:"_blank",rel:"noopener noreferrer"}},[t._v("navtitle"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"navbackbtn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navbackbtn"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#navbackbtn",target:"_blank",rel:"noopener noreferrer"}},[t._v("navbackbtn"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"navitembtn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navitembtn"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#navitembtn",target:"_blank",rel:"noopener noreferrer"}},[t._v("navitembtn"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"tabitembtn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabitembtn"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#tabitembtn",target:"_blank",rel:"noopener noreferrer"}},[t._v("tabitembtn"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"tabframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabframe"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://docs.apicloud.com/Client-API/api#tabframe",target:"_blank",rel:"noopener noreferrer"}},[t._v("tabframe"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);