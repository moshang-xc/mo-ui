<template>
  <div
    class="mo-timepicker"
    :class="sizeCss"
    :style="{ width: timePickerWidth }"
    @mouseover="handlerMouseover"
    @mouseout="isMouseover = false"
  >
    <div
      :name="name"
      :data-name="_name"
      class="mo-timepicker__label input-text size-0"
      :class="{ 'is-disabled': isDisabled, 'is-focus': showTimePanel }"
      @click="showPanel"
    >
      <!-- 开始时间 -->
      <mo-input
        class="mo-input--no-border mo-timepicker__input"
        :class="{ 'mo-timepicker__input--half': isRange }"
        v-model="startTime"
        :disabled="isDisabled"
        @click.native="clickInput"
        :placeholder="placeholder"
        ref="start"
        @input="inputStartTime"
        @change="changeStartTime"
      ></mo-input>
      <!-- 结束时间 -->
      <template v-if="isRange">
        <span class="mo-timepicker__splitter v-icon-spliter"></span>
        <mo-input
          class="mo-input--no-border mo-timepicker__input"
          :class="{ 'mo-timepicker__input--half': isRange }"
          v-model="endTime"
          :disabled="isDisabled"
          @click.native="clickInput"
          :placeholder="endPlaceholder"
          ref="end"
          @input="inputEndTime"
          @change="changeEndTime"
        ></mo-input>
      </template>
    </div>
    <!-- 图标信息 -->
    <span
      class="mo-timepicker__icon"
      :class="[
        hasClear ? 'v-icon-close-plane' : 'v-icon-time',
        { 'mo-timepicker__icon--disabled': isDisabled }
      ]"
      @click="clickIcon"
    ></span>
    <!-- 下拉内容 -->
    <create-to-body
      :class="sizeCss"
      :data-name="_name"
      :show="showTimePanel"
      v-clickoutside="hide"
      :width="timePanelWidth"
      :scale="isRange ? 2 : 1"
    >
      <mo-row v-if="isRange">
        <mo-col class="mo-timepicker__title" :span="12">{{
          _("Start Time")
        }}</mo-col>
        <mo-col class="mo-timepicker__title" :span="12">{{
          _("End Time")
        }}</mo-col>
      </mo-row>
      <mo-row>
        <!-- 开始时间 -->
        <mo-col class="mo-timepicker__wrapper" :span="isRange ? 12 : 24">
          <time-panel
            :format="format"
            :minuteInterval="minuteInterval"
            :secondInterval="secondInterval"
            :time="startTime"
            :is-all-day="isAllDay"
            ref="startPanel"
            :min="min"
            :max="max"
            @change="changeStartTime"
          ></time-panel>
        </mo-col>
        <!-- 结束时间 -->
        <mo-col v-if="isRange" class="mo-timepicker__wrapper" :span="12">
          <time-panel
            :format="format"
            :minuteInterval="minuteInterval"
            :secondInterval="secondInterval"
            :time="endTime"
            ref="endPanel"
            :is-all-day="isAllDay"
            :min="min"
            :max="max"
            @change="changeEndTime"
          ></time-panel>
        </mo-col>
      </mo-row>
      <div class="mo-timepicker__footer">
        <mo-button
          type="primary"
          size="S"
          :disabled="isSubmitDisabled"
          @click="setTime"
          >{{ _("OK") }}</mo-button
        >
      </div>
    </create-to-body>
  </div>
</template>

<script>
import TimePanel from "./time-panel";
import CreateToBody from "../create-to-body.vue";
import FormMixin from "../form-mixins";
import { size } from "../filters";
import { preFormatDate, isValidTime, parseDate, getTimeNumber } from "../libs";
export default {
  name: "mo-timepicker",
  mixins: [FormMixin],
  components: {
    TimePanel,
    CreateToBody
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    //时间值  支持范围时为数组形式
    value: [String, Array],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    //宽度
    width: [String, Number],
    //面板宽度
    panelWidth: [String, Number],
    //是否支持清空
    isClear: {
      type: Boolean,
      default: true
    },
    //是否支持范围
    isRange: {
      type: Boolean,
      default: false
    },
    isCrossDay: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default() {
        return this.isRange ? _("Start Time") : _("Choose Time");
      }
    },
    endPlaceholder: {
      type: String,
      default: _("End Time")
    },
    //时间格式
    format: {
      type: String,
      default: "hh:mm"
    },
    min: String,
    max: String,
    //分钟间隔
    minuteInterval: {
      type: Number,
      default: 1
    },
    //秒钟间隔
    secondInterval: {
      type: Number,
      default: 1
    },
    //暂时不支持size配置
    // size: {
    //   type: String,
    //   default: "M"
    // },
    isAllDay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "mo-timepicker--medium",
        S: "mo-timepicker--small",
        L: "mo-timepicker--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //是否显示清除标志 支持清除 && 时间不为空 && 鼠标放在上面
    hasClear() {
      return this.isClear && this.value.length && this.isMouseover;
    },
    //宽度
    timePickerWidth() {
      return size(this.width);
    },
    timePanelWidth() {
      return size(this.panelWidth) || this.timePickerWidth;
    },
    isSubmitDisabled() {
      if (this.isRange) {
        return this.startTime == "" || this.endTime == "";
      }
      return this.startTime == "";
    },
    //是否支持分钟
    hasMinute() {
      return this.format.indexOf("mm") > -1;
    },
    //是否支持秒
    hasSecond() {
      return this.format.indexOf("ss") > -1;
    }
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      initStartTime: "",
      initEndTime: "",
      showTimePanel: false,
      isMouseover: false
    };
  },
  methods: {
    clickInput(e) {
      if (this.showTimePanel) {
        e.stopPropagation();
      }
    },
    //手动输入
    inputStartTime(val) {
      if (!isValidTime(val, this.format, this.isAllDay)) {
        return;
      }
      if (
        !this.isAllDay &&
        ((this.minuteInterval > 1 && this.hasMinute) ||
          (this.secondInterval > 1 && this.hasSecond))
      ) {
        let timeObj = parseDate(val, this.format);
        if (this.hasMinute) {
          if (timeObj.minute % this.minuteInterval !== 0) {
            return;
          }
        }
        if (this.hasSecond) {
          if (timeObj.second % this.secondInterval !== 0) {
            return;
          }
        }
      }
      this.startTime = val;
    },
    changeStartTime() {
      let time = this.$refs.startPanel.getTime();
      this.startTime = time;
      this.$refs.start.setInputValue(time);
      this.$refs.start && this.$refs.start.focus();
    },
    inputEndTime(val) {
      if (!isValidTime(val, this.format, this.isAllDay)) {
        return;
      }
      if (
        !this.isAllDay &&
        ((this.minuteInterval > 1 && this.hasMinute) ||
          (this.secondInterval > 1 && this.hasSecond))
      ) {
        let timeObj = parseDate(val, this.format);
        if (this.hasMinute) {
          if (timeObj.minute % this.minuteInterval !== 0) {
            return;
          }
        }
        if (this.hasSecond) {
          if (timeObj.second % this.secondInterval !== 0) {
            return;
          }
        }
      }
      this.endTime = val;
    },
    changeEndTime() {
      let time = this.$refs.endPanel.getTime();
      this.endTime = time;
      this.$refs.end.setInputValue(time);
      this.$refs.end && this.$refs.end.focus();
    },
    initTime() {
      let value = this.value;
      if (this.isRange) {
        this.startTime = preFormatDate(value[0] || "", this.format);
        this.endTime = preFormatDate(value[1] || "", this.format);
      } else {
        this.startTime = preFormatDate(value || "", this.format);
      }
      this.initStartTime = this.startTime;
      this.initEndTime = this.endTime;
    },
    showPanel() {
      if (this.isDisabled) return;
      this.showTimePanel = !this.showTimePanel;
    },
    clickIcon() {
      if (this.isDisabled) return;
      if (this.hasClear) {
        if (this.isRange) {
          this.$emit("change", []);
        } else {
          this.$emit("change", "");
        }
        this.checkValid("");
      } else {
        this.showPanel();
      }
    },
    hide() {
      this.showTimePanel = false;
      this.checkValid(this.value);
    },
    setTime() {
      if (this.isRange) {
        const startTimeObj = parseDate(this.startTime, this.format),
          endTimeObj = parseDate(this.endTime, this.format),
          startTime = getTimeNumber({
            hour: startTimeObj.hour,
            minute: startTimeObj.minute,
            second: startTimeObj.second
          }),
          endTime = getTimeNumber({
            hour: endTimeObj.hour,
            minute: endTimeObj.minute,
            second: endTimeObj.second
          });

        if (startTime > endTime && !this.isCrossDay) {
          this.$emit("change", [this.endTime, this.startTime]);
        } else {
          this.$emit("change", [this.startTime, this.endTime]);
        }
      } else {
        this.$emit("change", this.startTime);
      }
      this.$nextTick(() => {
        this.hide();
      });
    },
    handlerMouseover() {
      if (!this.isDisabled) this.isMouseover = true;
    },
    beforeCheckError(val) {
      if (this.isRange) {
        let startTime = val[0] || "",
          endTime = val[1] || "";
        if (!startTime && !endTime) {
          return _("Please select the peroid");
        } else if (!startTime) {
          return _("Please select the start time");
        } else if (!endTime) {
          return _("Please select the end time");
        }
      }
    }
  },
  watch: {
    value: {
      handler() {
        this.initTime();
      },
      immediate: true
    },
    showTimePanel(val) {
      this.initTime();
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("mo-form-item", "form:error", !val);
      }
    }
  }
};
</script>
