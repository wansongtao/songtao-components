<template>
  <div class="container">
    <div>
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        :style="'width: ' + width"
        v-if="tabledata.length > 0"
      >
        <colgroup>
          <col name="table-col-check" width="50" v-if="checkbox" />
          <template v-for="(item, index) in title">
            <col
              :name="'table-col-' + index"
              :width="item.width"
              :key="index"
              v-if="item.width && item.width > 0"
            />
            <col :name="'table-col-' + index" :key="index" v-else />
          </template>
        </colgroup>
        <thead>
          <tr :style="'border-bottom: 4px solid ' + dividerColor + ';'">
            <th colspan="1" rowspan="1" class="table-col-check" v-if="checkbox">
              <div
                :class="{ checkbox: true, active: isAllCheck }"
                @click="allCheck"
              >
                <img
                  src="../../assets/images/check_selected.png"
                  alt="selected"
                  v-show="isAllCheck"
                />
              </div>
            </th>
            <template v-for="(item, index) in title">
              <th
                colspan="1"
                rowspan="1"
                :class="'table-col-' + index"
                :key="index"
                :style="theadStyle"
              >
                <div class="cell">{{ item.title }}</div>
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in tabledata"
            :key="index"
            :style="'border-bottom: 4px solid ' + dividerColor + ';'"
          >
            <td colspan="1" rowspan="1" class="table-col-check" v-if="checkbox">
              <div
                :class="{
                  checkbox: true,
                  active: isAllCheck || selectedIndex.indexOf(index) !== -1,
                }"
                @click="singleSelection(index)"
              >
                <img
                  src="../../assets/images/check_selected.png"
                  alt="selected"
                  v-show="isAllCheck || selectedIndex.indexOf(index) !== -1"
                />
              </div>
            </td>
            <template v-for="(val, key, tdIndex) in item">
              <td
                colspan="1"
                rowspan="1"
                :class="'table-col-' + tdIndex"
                :key="key"
                :style="tbodyStyle"
              >
                <div class="cell" v-if="key !== 'operation'">{{ val }}</div>
                <div class="cell" v-else>
                  <slot :index="index"></slot>
                </div>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      /** 表格宽度 */
      type: String,
      required: false
    },
    title: {
      /** 表头, 格式：[{title: '表头标题', width: 100(可选)}] */
      type: Array,
      required: true
    },
    tabledata: {
      /** 格式：[{key: 'value'}] */
      type: Array,
      required: true
    },
    theadStyle: {
      /** 表头样式: th */
      type: String,
      default: ''
    },
    tbodyStyle: {
      /** 表格主体的单元格样式: td */
      type: String,
      default: ''
    },
    dividerColor: {
      /** 分割线颜色 */
      type: String,
      default: '#fff'
    },
    checkbox: {
      /** 是否开启复选框 */
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      /** 是否全选 */
      isAllCheck: false,
      /** 选中的项的索引集合 */
      selectedIndex: []
    }
  },
  watch: {
    isAllCheck (val) {
      // 当用户全选时，将所选中的项的索引传给父组件
      if (val === true) {
        const data = this.tabledata
        const selectedIndexArr = []

        for (let i = 0; i < data.length; i++) {
          selectedIndexArr.push(i)
        }

        this.selectedIndex = selectedIndexArr

        this.$emit('checkHandler', selectedIndexArr)
      }
    }
  },
  methods: {
    // 全选方法
    allCheck () {
      this.isAllCheck = !this.isAllCheck

      // 用户取消全选时，清空选中的项
      if (this.isAllCheck === false) {
        this.selectedIndex = []
      }
    },
    // 单选方法
    singleSelection (index) {
      // 之前选中了，则移除，未选中，则添加
      const selectedIndex = this.selectedIndex.indexOf(index)
      if (selectedIndex === -1) {
        this.selectedIndex.push(index)
      } else {
        this.selectedIndex.splice(selectedIndex, 1)
      }

      if (this.selectedIndex.length === this.tabledata.length) {
        this.isAllCheck = true
      }

      if (this.selectedIndex.length < this.tabledata.length) {
        this.isAllCheck = false
      }

      // 将用户选中的项的索引传给父组件
      if (this.selectedIndex.length > 0) {
        this.$emit('checkHandler', this.selectedIndex)
      }
    }
  }
}
</script>

<style lang="less" scoped>
table {
  display: table;
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;

  tr {
    display: table-row;

    .cell {
      padding-left: 10px;
      box-sizing: border-box;
      vertical-align: middle;
    }

    th {
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #002870;
      font-size: 18px;
      background: #e6e3e3;
    }

    td {
      line-height: 30px;
      text-align: center;
      color: #8891a1;
      font-size: 18px;
      background: #e6e3e3;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 36px;
      height: 36px;
      vertical-align: middle;
      background: #f2f4f8;
      border: 1px solid #8891a1;
      border-radius: 8px;
      cursor: pointer;
    }

    .active {
      border: none;
      background: #002870;
    }
  }
}
</style>
