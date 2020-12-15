(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,r){"use strict";r.r(e);var n,a=r(152),a={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("div",{staticStyle:{height:"200px"}},[t("mo-chart-percent",{attrs:{value:.7}})],1)])},staticRenderFns:[]},{}),"mo-demo1":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("mo-row",{attrs:{gutter:24}},[t("mo-col",{attrs:{span:12}},[t("mo-chart-percent",{attrs:{height:200,value:.7,type:"circle",title:"圆环"}})],1),this._v(" "),t("mo-col",{attrs:{span:12}},[t("mo-chart-percent",{attrs:{height:200,value:.7,type:"line",title:"条形"}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo2":(n={data:function(){return{val:0}},methods:{interval:function(){var t=this;this.timer=setInterval(function(){t.val<1?t.val+=.01:t.val=0},100)}},mounted:function(){this.interval()},beforeDestroy:function(){clearInterval(this.timer)}},Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("div",{staticStyle:{height:"200px"}},[t("mo-chart-percent",{attrs:{value:this.val,colors:["#6ebbff","#7ee6f2","#ace06f","#ffcd58","#b792f7","#ff7348"],"color-value":[.2,.35,.5,.65,.8,1]}})],1)])},staticRenderFns:[]},n)),"mo-demo3":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("mo-row",{attrs:{gutter:24}},[t("mo-col",{attrs:{span:12}},[t("mo-chart-percent",{attrs:{height:200,value:.5,"stroke-width":20,type:"circle",title:"stroke-width: 20"}})],1),this._v(" "),t("mo-col",{attrs:{span:12}},[t("mo-chart-percent",{attrs:{height:200,value:.8,padding:30,title:"padding: 30"}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo4":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("mo-row",{attrs:{gutter:24}},[e("mo-col",{attrs:{span:12}},[e("mo-chart-percent",{attrs:{height:200,value:.5,type:"circle"}},[t._v("\n      自定义的文本\n    ")])],1),t._v(" "),e("mo-col",{attrs:{span:12}},[e("mo-chart-percent",{attrs:{height:200,value:.8,type:"line"}},[t._v("\n      自定义的文本\n    ")])],1)],1)],1)},staticRenderFns:[]},{})}},r=r(0),a=Object(r.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content element-doc"},[t._m(0),e("p",[t._v("用于表示在一个内容中占该内容整体的百分之多少。")]),t._m(1),e("p",[t._v("百分比图的默认配置示例。")]),e("demo-block",[e("div",[e("p",[t._v("默认配置要保证组件的外层容器有对应的"),e("code",[t._v("高")]),t._v("和"),e("code",[t._v("宽")]),t._v("，否则无法渲染图表。")])]),e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div style="height: 200px;">\n  <mo-chart-percent :value=".7"></mo-chart-percent>\n</div>\n')])])])],2),t._m(2),e("p",[t._v("提供圆环和条形两种百分比图的样式可供选择。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("type")]),t._v("设置百分比图的样式类型，可选值为"),e("code",[t._v("circle")]),t._v("、"),e("code",[t._v("line")]),t._v("，其中默认值为"),e("code",[t._v("circle")]),t._v("。")])]),e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<mo-row :gutter="24">\n  <mo-col :span="12">\n    <mo-chart-percent\n      :height="200"\n      :value=".7"\n      type="circle"\n      title="圆环"\n    ></mo-chart-percent>\n  </mo-col>\n  <mo-col :span="12">\n    <mo-chart-percent\n      :height="200"\n      :value=".7"\n      type="line"\n      title="条形"\n    ></mo-chart-percent>\n  </mo-col>\n</mo-row>\n')])])])],2),t._m(3),e("p",[t._v("设置百分比图不同区间值对应不同的颜色和底色。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("color-value")]),t._v("设置区间值，通过"),e("code",[t._v("colors")]),t._v("属性设置区间值对应的颜色，通过"),e("code",[t._v("back-color")]),t._v("属性设置区间值对应的底色值。")])]),e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<div style=\"height: 200px;\">\n  <mo-chart-percent\n    :value=\"val\"\n    :colors=\"['#6ebbff', '#7ee6f2', '#ace06f', '#ffcd58', '#b792f7', '#ff7348']\"\n    :color-value=\"[0.2, 0.35, 0.5, 0.65, 0.8, 1]\"\n  ></mo-chart-percent>\n</div>\n\n<script>\n  export default {\n    data() {\n      return { val: 0 };\n    },\n    methods: {\n      interval() {\n        this.timer = setInterval(() => {\n          if (this.val < 1) {\n            this.val += 0.01;\n          } else {\n            this.val = 0;\n          }\n        }, 100);\n      }\n    },\n    mounted() {\n      this.interval();\n    },\n    beforeDestroy() {\n      clearInterval(this.timer);\n    }\n  };\n<\/script>\n")])])])],2),t._m(4),e("p",[t._v("设置百分比图的圆环的粗细和边距。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("stroke-width")]),t._v("属性设置圆环的粗细，通过"),e("code",[t._v("padding")]),t._v("属性设置容器的内边距。")])]),e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<mo-row :gutter="24">\n  <mo-col :span="12">\n    <mo-chart-percent\n      :height="200"\n      :value=".5"\n      :stroke-width="20"\n      type="circle"\n      title="stroke-width: 20"\n    ></mo-chart-percent>\n  </mo-col>\n  <mo-col :span="12">\n    <mo-chart-percent\n      :height="200"\n      :value=".8"\n      :padding="30"\n      title="padding: 30"\n    ></mo-chart-percent>\n  </mo-col>\n</mo-row>\n')])])])],2),t._m(5),e("p",[t._v("设置自定义文本信息。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("default slot")]),t._v("设置自定义的文本信息。")])]),e("template",{slot:"source"},[e("mo-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<mo-row :gutter="24">\n  <mo-col :span="12">\n    <mo-chart-percent :height="200" :value=".5" type="circle">\n      自定义的文本\n    </mo-chart-percent>\n  </mo-col>\n  <mo-col :span="12">\n    <mo-chart-percent :height="200" :value=".8" type="line">\n      自定义的文本\n    </mo-chart-percent>\n  </mo-col>\n</mo-row>\n')])])])],2),t._m(6),t._m(7),t._m(8),t._m(9)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"bai-fen-bi-tu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bai-fen-bi-tu"}},[t._v("¶")]),t._v(" 百分比图")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"bai-fen-bi-tu-lei-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bai-fen-bi-tu-lei-xing"}},[t._v("¶")]),t._v(" 百分比图类型")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"qu-jian-zhi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qu-jian-zhi"}},[t._v("¶")]),t._v(" 区间值")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"yang-shi-she-zhi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yang-shi-she-zhi"}},[t._v("¶")]),t._v(" 样式设置")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("¶")]),t._v(" Slot")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shu-xing-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("number")]),e("td",[t._v("circle、line")]),e("td",[t._v("circle")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("值")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("colors")]),e("td",[t._v("区间对应的颜色值")]),e("td",[t._v("array")]),e("td",[t._v("-")]),e("td",[t._v("['#ACE06F']")])]),e("tr",[e("td",[t._v("color-value")]),e("td",[t._v("颜色对应的值区间")]),e("td",[t._v("array")]),e("td",[t._v("-")]),e("td",[t._v("[1]")])]),e("tr",[e("td",[t._v("back-color")]),e("td",[t._v("与 colors 对应的底色值")]),e("td",[t._v("array")]),e("td",[t._v("-")]),e("td",[t._v("['#F5F5F5']")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("宽，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("外层容器的宽")])]),e("tr",[e("td",[t._v("height")]),e("td",[t._v("高，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("外层容器的高")])]),e("tr",[e("td",[t._v("stroke-width")]),e("td",[t._v("线条的粗细，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("padding")]),e("td",[t._v("图形容器的内边距，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("20")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"slot-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot-1"}},[t._v("¶")]),t._v(" Slot")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("默认显示百分比，在圆环内或者在直线上")])])])])}],!1,null,null,null);e.default=a.exports},152:function(t,e,r){"use strict";function c(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function n(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){var e,r;e=n,t=a[r=t],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))})}return n}r.d(e,"a",function(){return n})}}]);