(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{262:function(t,e,n){"use strict";n.r(e);var s,i=n(34),i={name:"component-doc",components:{"mo-demo0":(s={data:function(){return{active:0}},methods:{handleButtonClick:function(){4<=this.active++&&(this.active=0),console.log(this.active)}}},Object(i.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",{staticClass:"steps-demo"},[e("mo-steps",{attrs:{active:t.active}},[e("mo-step",{attrs:{title:"步骤1",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤2",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤3",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤4",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}})],1),t._v(" "),e("div",{staticClass:"next-step-btn-wrapper"},[e("mo-button",{staticClass:"next-step-btn",on:{click:t.handleButtonClick}},[t._v("下一步")])],1)],1)]],2)},staticRenderFns:[]},s)),"mo-demo1":Object(i.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("mo-steps",{attrs:{active:t.active,"align-center":!1}},[e("mo-step",{attrs:{title:"步骤1",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤2",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤3",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤4",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{active:0}}}),"mo-demo2":Object(i.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("mo-steps",{attrs:{active:t.active,space:100}},[e("mo-step",{attrs:{title:"步骤1",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤2",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤3",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{title:"步骤4",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{active:0}}}),"mo-demo3":Object(i.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("mo-steps",[e("mo-step",{attrs:{title:"正在处理",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{status:"wait",title:"等待处理",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{status:"error",title:"运行错误",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{status:"finish",title:"处理完成",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{status:"disabled",title:"禁用步骤",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{active:0}}}),"mo-demo4":Object(i.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("mo-steps",[e("mo-step",{attrs:{icon:"v-icon-edit",title:"编辑",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{icon:"v-icon-image",title:"图片",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{icon:"v-icon-calendar",title:"日历",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),t._v(" "),e("mo-step",{attrs:{icon:"v-icon-time",title:"时间",description:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{active:0}}})}},n=n(1),i=Object(n.a)(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[t._m(0),e("p",[t._v("引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。")]),t._m(1),t._m(2),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="steps-demo">\n    <mo-steps :active="active">\n      <mo-step\n        title="步骤1"\n        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n      ></mo-step>\n      <mo-step\n        title="步骤2"\n        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n      ></mo-step>\n      <mo-step\n        title="步骤3"\n        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n      ></mo-step>\n      <mo-step\n        title="步骤4"\n        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n      ></mo-step>\n    </mo-steps>\n\n    <div class="next-step-btn-wrapper">\n      <mo-button class="next-step-btn" @click="handleButtonClick"\n        >下一步</mo-button\n      >\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: 0\n    };\n  },\n  methods: {\n    handleButtonClick() {\n      if (this.active++ >= 4) this.active = 0;\n      console.log(this.active);\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(4),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("align-center")]),t._v("为"),e("code",[t._v("false")]),t._v("即可实现文字左对齐，文字默认居中对齐。")])]),e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mo-steps :active="active" :align-center="false">\n    <mo-step\n      title="步骤1"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤2"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤3"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤4"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n  </mo-steps>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: 0\n    };\n  }\n};\n<\/script>\n')])])])],2),t._m(5),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("space")]),t._v("来确定每个步骤间的间距，值为"),e("code",[t._v("Number")]),t._v("类型，默认自适应。")])]),e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mo-steps :active="active" :space="100">\n    <mo-step\n      title="步骤1"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤2"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤3"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      title="步骤4"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n  </mo-steps>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: 0\n    };\n  }\n};\n<\/script>\n')])])])],2),t._m(6),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("step")]),t._v("组件的"),e("code",[t._v("status")]),t._v("来自定义每个步骤的状态，不设置则会根据"),e("code",[t._v("steps")]),t._v("来确定状态。子组件"),e("code",[t._v("step")]),t._v("的优先级比"),e("code",[t._v("steps")]),t._v("高。")])]),e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mo-steps>\n    <mo-step\n      title="正在处理"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      status="wait"\n      title="等待处理"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      status="error"\n      title="运行错误"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      status="finish"\n      title="处理完成"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      status="disabled"\n      title="禁用步骤"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n  </mo-steps>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: 0\n    };\n  }\n};\n<\/script>\n')])])])],2),t._m(7),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("step")]),t._v("的属性"),e("code",[t._v("icon")]),t._v("设置图标。")])]),e("template",{slot:"source"},[e("mo-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <mo-steps>\n    <mo-step\n      icon="v-icon-edit"\n      title="编辑"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      icon="v-icon-image"\n      title="图片"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      icon="v-icon-calendar"\n      title="日历"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n    <mo-step\n      icon="v-icon-time"\n      title="时间"\n      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n    ></mo-step>\n  </mo-steps>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      active: 0\n    };\n  }\n};\n<\/script>\n')])])])],2),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"bu-zou-tiao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-zou-tiao"}},[t._v("¶")]),t._v(" 步骤条")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Steps } from "@reasy-team/mo-ui";\n\nVue.use(Steps);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"wen-zi-zuo-dui-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-zuo-dui-qi"}},[t._v("¶")]),t._v(" 文字左对齐")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"bu-zou-jian-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-zou-jian-ju"}},[t._v("¶")]),t._v(" 步骤间距")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"bu-zou-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-zou-zhuang-tai"}},[t._v("¶")]),t._v(" 步骤状态")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"zi-ding-yi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi"}},[t._v("¶")]),t._v(" 自定义")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shu-xing-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h4",{attrs:{id:"stepsshu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stepsshu-xing"}},[t._v("¶")]),t._v(" steps属性")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("active")]),e("td",[t._v("设置当前激活步骤")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("space")]),e("td",[t._v("每个step的间距，单位：px。不填写则自适应间距")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("process-status")]),e("td",[t._v("设置当前步骤的状态")]),e("td",[t._v("string")]),e("td",[t._v("wait/process/finish/error/disabled")]),e("td",[t._v("process")])]),e("tr",[e("td",[t._v("finish-status")]),e("td",[t._v("设置结束步骤的状态")]),e("td",[t._v("string")]),e("td",[t._v("wait/process/finish/error/disabled")]),e("td",[t._v("finish")])]),e("tr",[e("td",[t._v("align-center")]),e("td",[t._v("文字进行居中对齐")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h4",{attrs:{id:"stepshu-xing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stepshu-xing"}},[t._v("¶")]),t._v(" step属性")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string/slot")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("描述性文字")]),e("td",[t._v("string/slot")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("icon的class类名")]),e("td",[t._v("string/slot")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("status")]),e("td",[t._v("设置当前步骤的状态，不设置则根据steps确定状态")]),e("td",[t._v("string")]),e("td",[t._v("wait/process/finish/error/disabled")]),e("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h4",{attrs:{id:"step-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-slot"}},[t._v("¶")]),t._v(" step Slot")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("icon")]),e("td",[t._v("自定义图标")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("自定义标题")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("自定义描述文字")])])])])}],!1,null,null,null);e.default=i.exports}}]);