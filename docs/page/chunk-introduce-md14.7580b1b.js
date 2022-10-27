(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{269:function(e,n,t){"use strict";t.r(n);var s=[function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("h3",{attrs:{id:"kuang-jia"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kuang-jia"}},[e._v("¶")]),e._v(" 框架")])},function(){var e=this.$createElement,e=this._self._c||e;return e("p",[e("img",{attrs:{src:t(272),alt:"框架"}})])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("h3",{attrs:{id:"dai-ma-jie-gou"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-jie-gou"}},[e._v("¶")]),e._v(" 代码结构")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("pre",[n("code",[e._v("├─ build # 打包相关文件\n├─ demo # 使用文档根目录\n├─ dist # 打包后文件，用于上传至npm\n├─ docs # 打包后的使用文档根，用于github pages展示\n├─ src # 组件库源码\n")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("h3",{attrs:{id:"da-bao-huan-jing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#da-bao-huan-jing"}},[e._v("¶")]),e._v(" 打包环境")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("pre",[n("code",[e._v("├─ build # 打包相关文件\n|   ├─ md-loader # markdown文件解析\n|   |   ├─ index.js # markdown解析主入口文件\n|   ├─ components.js # 单个组件对应的js打包入口文件配置\n|   ├─ scss.js # 单个组件对应的CSS打包入口配置\n|   ├─ webpack.component.js # 单个组件对应的js打包配置\n|   ├─ webpack.demo.js # 使用文档打包配置\n|   ├─ webpack.publish.js # 所有组件合并打包配置\n|   ├─ webpack.scss.js # 单个组件对应的scss打包配置\n|   ├─ webpack.theme.full.js # 所有组件CSS合并打包配置\n|   ├─ webpack.theme.single.js # 单个组件css打包配置\n")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("h3",{attrs:{id:"zu-jian-kai-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-kai-fa"}},[e._v("¶")]),e._v(" 组件开发")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("pre",[n("code",[e._v("├─ src # 组件库源码\n|   ├─ components # 各组件源码，核心文件夹\n|   |   ├─ xxx文件夹 # 组件源码\n|   |   ├─ base.js # 组件公共install配置\n|   |   ├─ create-to-body.vue # 弹窗组件\n|   |   ├─ ease-function.js # 组件使用到的缓动函数集\n|   |   ├─ filters.js # 组件过滤器\n|   |   ├─ form-mixins.js # form表单组件公共功能mixin\n|   |   ├─ index.js # 全组件入口文件\n|   |   ├─ lib.js # 组件工具函数文件\n|   |   ├─ translate.js # 内置翻译机制\n|   ├─ scss # 各组件样式文件\n|   ├─ views # 开发自测试用例文件\n|   ├─ router # 开的自测试用例导航配置\n|   ├─ App.vue # 用例主页\n|   ├─ main.js # 用例入口文件\n")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("ul",[n("li",[e._v("开发前，先确定组件的接口和使用方式，并讨论审核通过")]),n("li",[e._v("风格设计需遵循设计规范")]),n("li",[e._v("在"),n("code",[e._v("components")]),e._v("文件夹下添加以组件名命名的文件夹")]),n("li",[e._v("文件夹内天"),n("code",[e._v("index.js")]),e._v("和"),n("code",[e._v("v-组件名.vue")]),e._v("文件")]),n("li",[e._v("两个文件的编码格式都需要满足编程规范")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("p",[n("code",[e._v("index.js")]),e._v("的文件内容如下：")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("pre",[n("code",{staticClass:"language-js"},[e._v('/// Demo为组件名，首字母大写\nimport Demo from "./demo.vue";\n\nDemo.install = function(Vue) {\n  Vue.component(Demo.name, Demo);\n};\n\nexport default Demo;\n')])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("p",[n("code",[e._v("组件名.vue")]),e._v("的文件内容格式如下：")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("pre",[n("code",{staticClass:"language-html"},[e._v('<template>\n  <div class="mo-xxx">\n    ---\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "mo-xxx",\n  props: {\n    ---\n  }\n};\n<\/script>\n')])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("h3",{attrs:{id:"shi-yong-wen-dang-kai-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-wen-dang-kai-fa"}},[e._v("¶")]),e._v(" 使用文档开发")])},function(){var e=this.$createElement,e=this._self._c||e;return e("pre",[e("code",[this._v("├─ demo # 使用文档根目录\n|   ├─ components # 使用文档相关组件，无需关注\n|   ├─ demo-styles # 使用文档相关样式\n|   ├─ docs\n|   |   ├─ xxx.md # xxx组件使用文档\n|   ├─ pages\n\n")])])},function(){var e=this.$createElement,e=this._self._c||e;return e("pre",[e("code",[this._v('::: demo\n\n```html\n<div class="input-group">\n  <mo-input type="text" v-model="sizeL" size="L"></mo-input>\n</div>\n<div class="input-group">\n  <mo-input type="text" v-model="sizeM" size="M"></mo-input>\n</div>\n<div class="input-group">\n  <mo-input type="text" v-model="sizeS" size="S"></mo-input>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeL: "L",\n        sizeM: "M",\n        sizeS: "S"\n      };\n    }\n  };\n<\/script>\n```                                                                   .\n:::\n')])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("p",[e._v("以"),n("code",[e._v("::: demo")]),e._v("开始，以"),n("code",[e._v(":::")]),e._v("结束，中间填写合法的"),n("code",[e._v("Vue")]),e._v("代码即可正常解析显示。")])}],a=t(1),s=Object(a.a)({},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("section",{staticClass:"content reasy-doc"},[e._m(0),e._m(1),n("div",{staticStyle:{color:"#999","text-align":"center",padding:"2px","margin-top":"-40px","font-size":"12px"}},[e._v("表单组件框架")]),e._m(2),e._m(3),e._m(4),n("p",[e._v("代码目录")]),e._m(5),n("p",[e._v("markdown解析原理:")]),n("p",[e._v("将markdown转成抽象语法树AST，然后解析AST，生成html代码在浏览器中展示，对于自定义的指令进行解析，提取Vue相关代码，以插件的形式注入到页面中，显示为对应的组件。")]),n("p",[e._v("组件打包:")]),n("p",[e._v("打包环境分为，组件合并打包、组件单独打包、使用文档打包三块，分别对应不同的配置文件。")]),n("p",[e._v("组件单独打包一每个组件为入口文件，多入口的形式，同时对每个组件分别进行打包，各组件之间相互独立。")]),e._m(6),n("p",[e._v("代码目录如下：")]),e._m(7),n("p",[e._v("开发步骤：")]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),n("p",[e._v("代码目录")]),e._m(14),n("p",[e._v("使用文档的格式完全按照Markdowm标准格式去写即可。在原语法的基础上添加了一个自定义的指令用于渲染组件，具体如下：")]),e._m(15),e._m(16),n("side-link")],1)},s,!1,null,null,null);n.default=s.exports},272:function(e,n,t){e.exports=t.p+"font/37029ed3.1.png"}}]);