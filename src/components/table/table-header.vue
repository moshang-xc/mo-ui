<template>
  <table
    ref="table"
    class="table mo-table__header"
    :class="{ 'mo-table__border': border }"
  >
    <colgroup>
      <col
        v-for="(col, index) in columns"
        :width="col.width"
        :key="index + 1"
        :align="col.align"
      />
    </colgroup>
    <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :key="index + 1"
          :class="[{ 'mo-table__header--sort': col.isSort }, `is_${col.align}`]"
          @click="sortTable(col)"
        >
          <!-- 选择框 -->
          <mo-checkbox
            v-if="col.type === 'selection'"
            class="mo-table__header__checkbox"
            :before-change="beforeSelectAll"
            v-model="isSelectedAll"
            :hasValue="isSelected"
            :disabled="isSelectAllDisabled"
          ></mo-checkbox>
          <!-- 表头文字 -->
          <!-- 支持显示html -->
          <span
            class="mo-table__header__label"
            v-if="col.isHtmlHeader"
            v-html="col.label"
          ></span>
          <!-- text格式显示 -->
          <span class="mo-table__header__label" v-else>{{ col.label }}</span>
          <!-- 排序 -->
          <span v-if="col.isSort" class="mo-table__sort">
            <span
              class="mo-table__icon mo-table__icon--up"
              :class="{
                active: col.sortType === 'asc' && sortProp === col.prop
              }"
            ></span>
            <span
              class="mo-table__icon mo-table__icon--down"
              :class="{
                active: col.sortType === 'desc' && sortProp === col.prop
              }"
            ></span>
          </span>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
export default {
  props: {
    //全选值
    value: Boolean,
    //表头选项
    columns: Array,
    //是否有边框
    border: Boolean,
    //排序元素
    sortProp: String,
    //是否有选项框被选中
    isSelected: Boolean,
    beforeSelectAll: Function,
    isSelectAllDisabled: Boolean,
    disabled: Boolean
  },
  computed: {
    isSelectedAll: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    },
    isDisabled() {
      return this.disabled || this.$parent.disabled;
    }
  },
  methods: {
    getHeight() {
      return parseInt(this.$refs.table.scrollHeight);
    },
    getWidth() {
      return parseInt(this.$refs.table.scrollWidth);
    },
    sortTable(col) {
      if (this.isDisabled) {
        return;
      }

      if (!col.isSort) return;
      if (col.sortType === "asc") {
        col.sortType = "desc";
      } else {
        col.sortType = "asc";
      }
      this.$emit("sort", col.prop, col.sortType);
    }
  }
};
</script>
