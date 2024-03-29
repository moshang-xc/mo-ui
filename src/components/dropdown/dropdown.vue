<template>
  <div class="mo-dropdown">
    <!-- mo-button 不满足使用 -->
    <div
      :class="['mo-dropdown__label', dropdownLabelType]"
      @click="proxyDisabledHandler(disabled, handleLabelClick)"
      @mouseenter="proxyDisabledHandler(disabled, handleLabelMouseenter)"
      @mouseleave="proxyDisabledHandler(disabled, handleLabelMouseleave)"
    >
      <label class="ver-align-middle">{{ label }}</label>
      <i class="v-icon-down"></i>
    </div>
    <create-to-body
      :show="dropdownShow"
      v-clickoutside="hide"
      :class="[panelClass]"
    >
      <div
        class="mo-dropdown__menu"
        @mouseenter="handleDropdownMouseenter"
        @mouseleave="handleDropdownMouseleave"
      >
        <mo-x-scroll
          ref="scroll"
          :count="displayOptionsNumber"
          :is-block="true"
          :to-index="selectIndex"
          @mounted="setPosition"
        >
          <ul>
            <li
              v-for="(item, idx) in options"
              :key="item.value + idx"
              :class="[
                'mo-dropdown__option',
                {
                  'mo-dropdown__option--divided': item.devided,
                  'mo-dropdown__option--active': selectIndex === idx,
                  'mo-dropdown__option--disabled': item.disabled
                }
              ]"
              @click="
                () =>
                  proxyDisabledHandler(
                    item.disabled,
                    handleOptionClick,
                    item,
                    idx
                  )
              "
            >
              <i
                v-if="item.icon"
                class="mo-dropdown__icon"
                :class="item.icon"
              ></i>
              <span class="mo-dropdown__text">{{ item.text }}</span>
            </li>
          </ul>
        </mo-x-scroll>
      </div>
    </create-to-body>
  </div>
</template>

<script>
import CreateToBody from "../create-to-body";

export default {
  name: "mo-dropdown",
  components: {
    CreateToBody
  },
  props: {
    type: {
      type: String,
      default: "link",
      validator(val) {
        return ["link", "button"].includes(val);
      }
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click"
    },
    hideAfterSelected: {
      type: Boolean,
      default: true
    },
    displayOptionsNumber: {
      type: Number,
      default: 4
    },
    options: {
      type: Array,
      default() {
        return [
          /* {
            text: "",
            value: "",
            disabled: false,
            devided: false,
            icon: "",
          } */
        ];
      }
    },
    panelClass: String
  },
  data() {
    return {
      isLabelEnter: false,
      dropdownShow: false,
      selectIndex: 0,
      isDropdownEnter: false,
      timer: null
    };
  },
  computed: {
    dropdownLabelType() {
      const { dropdownShow, disabled, type } = this;

      return {
        "mo-dropdown__label--active": dropdownShow,
        "mo-dropdown__label--disabled": disabled,
        [`mo-dropdown__label-${type}`]: true
      };
    }
  },
  methods: {
    handleLabelClick() {
      if (this.trigger === "click") {
        this.menuVisible(!this.dropdownShow);
      }
    },
    menuVisible(isShow) {
      if (this.dropdownShow !== isShow) {
        this.dropdownShow = isShow;
        this.$emit("visible-change", isShow);
      }
    },
    handleLabelMouseenter() {
      if (this.trigger === "hover") {
        this.isLabelEnter = true;
        this.show();
      }
    },
    handleLabelMouseleave() {
      if (this.trigger === "hover") {
        this.isLabelEnter = false;
        this.hideAfterSeconds();
      }
    },
    handleDropdownMouseenter() {
      if (this.trigger === "hover") {
        this.clearTimer();
        this.isDropdownEnter = true;
      }
    },
    handleDropdownMouseleave() {
      if (this.trigger === "hover") {
        this.isDropdownEnter = false;
        this.hideAfterSeconds();
      }
    },
    handleOptionClick(option, idx) {
      this.selectIndex = idx;

      this.$emit("click-item", option, idx);

      if (this.hideAfterSelected) {
        this.hide();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    show() {
      this.menuVisible(true);
    },
    hide() {
      this.menuVisible(false);
    },
    hideAfterSeconds() {
      if (this.timer) {
        this.clearTimer();
      }

      this.timer = setTimeout(() => {
        this.clearTimer();

        if (this.trigger === "hover") {
          if (!this.isLabelEnter && !this.isDropdownEnter) {
            this.hide();
          }
        } else {
          this.hide();
        }
      }, 200);
    },
    /**
     * disabled拦截处理函数
     */
    proxyDisabledHandler(disabled, fn = () => {}, ...args) {
      return !disabled && fn(...args);
    },
    setPosition() {
      this.$dispatch("create-to-body", "update:position");
    }
  }
};
</script>
