<template>
  <div class="mo-datepicker" :style="{ width: datePickerWidth }">
    <date-panel
      class="mo-datepicker--panel"
      :date="tmpDate"
      :isClickRange="isClickRange"
      :originDate="originDate"
      :originEndDate="originDate"
      :minDate="minDate"
      :maxDate="maxDate"
      :format="dateFormat"
      :active-list="selectList"
      @change-header="changeHeader"
      @change="changeTmpDate"
      @clickDate="changeDate"
    ></date-panel>
  </div>
</template>

<script>
import DatePanel from "./date-panel.vue";
import FormMixin from "../form-mixins";
import { size } from "../filters";

import { parseDate, formatDate } from "../libs";
export default {
  name: "mo-datepicker-panel",
  mixins: [FormMixin],
  components: {
    DatePanel //日期面板
    //HeaderPanel //头部面板
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Array],
    //日期类型 值为date， datetime
    type: {
      type: String,
      default: "date"
    },
    name: String,
    //时间日期格式
    format: String,
    min: {
      type: String,
      default: "1970-01-01 00:00:00"
    },
    max: {
      type: String,
      default: "2037-12-31 23:59:59"
    },
    activeList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    //处理默认时间格式
    dateFormat() {
      if (this.format) return this.format;
      if (this.type === "datetime") {
        return "YYYY-MM-DD hh:mm:ss";
      }
      return "YYYY-MM-DD";
    },
    //宽度
    datePickerWidth() {
      return size(this.width);
    },
    selectList() {
      let list = [];
      this.activeList.forEach(item => {
        list.push(parseDate(item, this.dateFormat));
      });
      return list;
    }
  },
  data() {
    return {
      isClickRange: false,
      originDate: {
        //真实数据
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      tmpDate: {
        //当前显示年月日数据
        year: "",
        month: "",
        day: ""
      },
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      maxDate: {},
      minDate: {},
      isMouseover: false
    };
  },
  methods: {
    getNowDate() {
      let now = new Date();
      return {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      };
    },
    handlerMouseover() {
      if (!this.isDisabled) this.isMouseover = true;
    },
    setFirstClick(year, month, day) {
      this.originDate.year = year;
      this.originDate.month = month;
      this.originDate.day = day;
    },
    changeTmpDate(year, month, day) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.tmpDate.day = day;
      this.setFirstClick(year, month, day);
    },

    //修改header
    changeHeader(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.$emit("change-header", { year, month });
    },
    changeDate() {
      //开始日期
      let startDate = new Date(
        this.originDate.year,
        this.originDate.month,
        this.originDate.day
      );

      startDate = formatDate(startDate, this.dateFormat);
      this.startDate = startDate;

      this.setDateTime();
    },
    //设置日期时间
    setDateTime() {
      let dateTime = this.startDate;

      if (dateTime != this.value) {
        this.$emit("change", dateTime);
      }
    },
    formatData(value) {
      if (value) {
        let dateObj = parseDate(value, this.dateFormat);
        Object.assign(this.originDate, dateObj);
        this.startDate = value;
        this.tmpDate.year = dateObj.year;
        this.tmpDate.month = dateObj.month;
        this.tmpDate.day = dateObj.day;
      } else {
        this.startDate = "";
        Object.assign(this.originDate, {
          year: "",
          month: "",
          day: "",
          hour: "",
          minute: "",
          second: ""
        });
        let dateObj = new Date();
        this.tmpDate.year = dateObj.getFullYear();
        this.tmpDate.month = dateObj.getMonth();
        this.tmpDate.day = dateObj.getDate();
      }
    },
    formatMinData(value) {
      let dateObj = parseDate(value, this.dateFormat);
      this.minDate = dateObj;
    },
    formatMaxData(value) {
      let dateObj = parseDate(value, this.dateFormat);
      this.maxDate = dateObj;
    },
    initData() {
      this.formatData(this.value);
    }
  },
  watch: {
    value: {
      handler() {
        this.initData();
      },
      immediate: true
    },
    min: {
      handler(value) {
        this.formatMinData(value);
      },
      immediate: true
    },
    max: {
      handler(value) {
        this.formatMaxData(value);
      },
      immediate: true
    }
  }
};
</script>
