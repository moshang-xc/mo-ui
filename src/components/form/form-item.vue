<template>
  <div
    class="mo-form-item"
    :class="[
      { 'mo-form-item--inline': isInline, 'mo-form-item--disabled': isDisabled },
      itemCss
    ]"
  >
    <!-- 左边文字 -->
    <label
      v-if="!isNoLabel"
      :style="{ width: labelWidth + 'px' }"
      ref="label"
      :class="[
        sizeCss,
        {
          'mo-form-item__label--right': labelPosition === 'right'
        }
      ]"
      class="mo-form-item__label"
    >
      <!-- 文字显示 -->
      <span ref="labelTxt" v-if="label">{{ label }}</span>
      <!-- 左边插槽 -->
      <span :class="sizeCss" ref="labelTxt" v-else>
        <slot name="label"></slot>
      </span>
    </label>
    <!-- 右边内容 -->
    <div
      class="mo-form-item__content"
      :class="{
        'mo-form-item__content--no-label': isNoLabel
        // [sizeCss]: sizeCss
      }"
      :style="{
        'margin-left': !isNoLabel ? labelWidth + paddingWidth + 'px' : '0'
      }"
    >
      <slot></slot>
      <slot name="content"></slot>

      <!-- <label class="mo-form-item__tip" v-show="showUnit">
        <label class="mo-form-item__unit">
          <slot name="unit">{{ unit }}</slot>
        </label>
        <slot name="description">
          <label class=" mo-form-item__description" v-if="description">
            {{ description }}
          </label>
        </slot>
      </label> -->
      <label class="mo-form-item__tip">
        <slot name="unit">
          <label class=" mo-form-item__unit" v-if="unit">{{ unit }}</label>
        </slot>

        <slot name="description">
          <label class=" mo-form-item__description" v-if="description"
            >{{ description }}
          </label>
        </slot>
      </label>

      <div
        :style="{ height: showPopError ? '' : errHeight }"
        :class="{ 'mo-form-item__content__error-pop': showPopError }"
      >
        <template v-if="showPopError">
          <mo-tooltip
            v-model="showError"
            trigger="manual"
            :content="errorMsg"
            :position="popErrorPosition"
          >
          </mo-tooltip>
        </template>
        <div
          ref="error"
          class="mo-form-item__content__msg is-error"
          v-else-if="showError"
        >
          {{ errorMsg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sizeToCss } from "../filters";
export default {
  name: "mo-form-item",
  inject: ["getValidateType", "getField", "elForm"],
  provide() {
    return {
      elFormItem: this
    };
  },
  props: {
    //左边文字
    label: String,
    //是否隐藏文字
    isNoLabel: {
      type: Boolean,
      default: false
    },
    // 是否错误提示显示为提示小浮窗
    showPopError: {
      type: Boolean,
      default: false
    },
    // 错误提示方向 参考 mo-tooltip
    popErrorPosition: {
      type: String,
      default: "right-center"
    },
    //属性值，数据验证和提交数据时必填
    prop: String,
    //关联元素的prop
    relativeProp: [String, Array],
    //是否必填
    required: {
      type: Boolean,
      default: true
    },
    ignore: {
      type: Boolean,
      default: false
    },
    //数据验证规则
    valid: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    },
    description: {
      type: [String, Number],
      default: ""
    },
    unit: {
      type: [String, Number],
      default: ""
    }
  },
  computed: {
    //间距
    paddingWidth() {
      return this.elForm.paddingWidth;
    },
    //组件标题宽度
    labelWidth() {
      return this.$getLabelWidth();
    },
    showError() {
      return !!this.errorMsg && this.isShowError;
    },
    sizeCss() {
      return sizeToCss(this.size, "mo-form-item__label--");
    },
    itemCss() {
      return sizeToCss(this.size, "mo-form-item--");
    },
    isDisabled() {
      return (this.elForm && this.elForm.disabled) || this.disabled;
    }
    // showUnit() {
    //   return !!(
    //     this.unit ||
    //     this.description ||
    //     this.$slots.unit ||
    //     this.$slots.description
    //   );
    // }
  },
  data() {
    return {
      errHeight: "", //错误文字高度
      value: "",
      size: "M",
      isMounted: false, //子元素是否挂载
      childVm: null,
      errorMsg: "", //错误信息
      //valid: [], //数据验证规则，由form表单处理
      isShowError: true, //是否显示错误
      showUnit: false,
      labelPosition: "left" //标题文字方向
    };
  },

  created() {
    //失焦后数据验证
    this.$on("form:blur", val => {
      this.checkValid(val);

      //获取关联验证组件
      if (!this.relativeProp) return;

      let relativeProps = Array.isArray(this.relativeProp)
        ? this.relativeProp
        : [this.relativeProp];

      relativeProps.forEach(item => {
        let relativeField = this.getField(item);
        relativeField.forEach(item => {
          //当关联元素没有错误 && 有验证函数时
          !item.error &&
            item.getValue() &&
            item.checkValid &&
            item.checkValid();
        });
      });
    });

    this.$on("form:error", val => {
      this.isShowError = val;
    });
    // //值变化
    // this.$on("form:change", (val) => {
    //   this.value = val;
    // });
    //size变化
    this.$on("form:size", val => {
      this.size = val;
    });

    this.$on("form-item:created", vm => {
      this.childVm = vm;
    });

    this.$on("form-item:remove", () => {
      this.childVm = null;
    });

    //注册组件到form表单
    this.$dispatch("mo-form", "form.addField", this);
  },

  mounted() {
    this.$nextTick(() => {
      //标题文字长度改变事件
      this.changeTitle();
    });
    this.showUnit = !!(
      this.unit ||
      this.description ||
      this.$slots.unit ||
      this.$slots.description
    );
  },
  methods: {
    //数据验证
    checkValid(val) {
      //返回为真 时表示有错误，result为错误文字
      let result = this.checkData(val);
      //错误文字信息
      this.setError(result || "");
      return !result;
    },
    //子组件覆盖此函数
    checkData() {
      return false;
    },
    setError(msg) {
      this.errorMsg = msg;
    },
    changeTitle() {
      if (this.$refs.labelTxt) {
        let width = this.$refs.labelTxt.offsetWidth;
        //取双数
        if (width % 2 === 1) {
          width += 1;
        }
        //将宽度广播到表单组件
        this.$dispatch("mo-form", "label-width", width);
      }
    },
    //子元素值
    getValue() {
      return this.value;
    }
  },
  watch: {
    title: {
      handler() {
        this.changeTitle();
      }
      //immediate: true
    },
    showError: {
      handler(val) {
        if (val) {
          //nextTick是为了拿到$refs.error节点元素
          this.$nextTick(() => {
            let errorHeight = 20,
              lineheight = 20;

            //nextTick是为了在当前错误提示内容变化时更新errorHeight高度
            this.$nextTick(() => {
              if (this.$refs.error) {
                errorHeight = this.$refs.error.clientHeight;
                lineheight =
                  parseInt(
                    window.getComputedStyle(this.$refs.error).lineHeight
                  ) || 20;

                if (errorHeight > lineheight) {
                  this.errHeight = errorHeight - lineheight + "px";
                } else {
                  this.errHeight = "";
                }
              } else {
                this.errHeight = "";
              }
            });
          });
        } else {
          this.errHeight = "";
        }
      },
      immediate: true
    }
  },
  //组件注销时，删除表单的注册
  beforeDestroy() {
    this.setError("");
    this.$dispatch("mo-form", "form.removeField", this);
  }
};
</script>
