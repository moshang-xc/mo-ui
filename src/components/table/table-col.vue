<template>
  <div></div>
</template>

<script>
import { copyDeepData, IGuid } from "../libs";
let expandFn = function() {};
export default {
  name: "mo-table-col",
  props: {
    type: String,
    fixed: {
      type: [String, Boolean],
      default: false
    },
    label: {
      //表头文字
      default: "",
      type: String
    },
    prop: {
      //表格字段
      default: "",
      type: String
    },
    width: {
      //宽度
      type: [String, Number],
      default: ""
    },
    isHtmlHeader: {
      //是否支持html
      type: Boolean,
      default: false
    },
    isTooltip: {
      //是否支持提示信息
      type: Boolean,
      default: false
    },
    // 提示信息的配置信息
    tooltipOption: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isNoFixed: {
      //是否没有fixed样式
      type: Boolean,
      default: false
    },
    isSort: {
      //是否支持排序
      type: Boolean,
      default: false
    },
    isSearch: {
      //是否支持搜索
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "left"
    },
    format: {
      type: Function,
      default(prop, data) {
        return data[prop];
      }
    },
    beforeSelected: {
      type: Function,
      default() {
        return true;
      }
    },
    getDisabled: {
      type: Function,
      default() {
        return false;
      }
    }
  },
  computed: {
    // 当前列对应的字段
    tableProp() {
      if (this.prop === "") {
        return IGuid();
      }
      return this.prop;
    }
  },
  mounted() {
    this.$dispatch("mo-table", "add.column", this.getProps());
  },
  methods: {
    getProps() {
      let props = copyDeepData(this.$props);
      props.sortType = "";
      // vue作用域插槽渲染函数,该函数返回相应VNode。
      props.fn = this.$scopedSlots.default;
      if (props.fn === undefined && this.$slots.default) {
        props.fn = this.$slots.default;
      }
      props.expandFn = this.$scopedSlots.expand || expandFn;
      // 表格字段
      props.prop = this.tableProp;
      return props;
    }
  },
  beforeDestroy() {
    this.$dispatch("mo-table", "remove.column", this.tableProp);
  },
  watch: {
    label() {
      this.$dispatch("mo-table", "update.column", this.getProps());
    }
  }
};
</script>
