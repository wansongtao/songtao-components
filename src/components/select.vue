<template>
  <div class="select" v-click-outside="closeSelect" :style="`width: ${width};`">
    <div class="label" v-if="label">{{label}}</div>
    <div class="item">
      <input
        type="text"
        :value="text"
        :placeholder="placeholder"
        readonly
      />
      <div
        :class="{ 'item-btn': true, 'active-btn': open }"
        @click="openSelect"
      >
        <div class="arrow"></div>
      </div>
      <div
        class="select-list"
        :style="open ? `padding: 10px 15px;height: ${selectHeight + 20}px;` : 'height: 0px;'"
      >
        <div
          :class="['select-item', selectIndex === index ? 'active-item' : '']"
          v-for="(item, index) in list"
          :key="index"
          @click="selectHandler(index)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { // 下拉选择项的数据
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: function () {
        return [
          { id: 1, text: '香蕉' },
          { id: 2, text: '桃子' }
        ]
      }
    },
    value: { // 默认选中的值，可不传
      type: [String, Number],
      default: ''
    },
    placeholder: { // 提示语
      type: String,
      default: '请选择'
    },
    width: { // 选择框宽度
      type: String,
      default: '300px'
    },
    label: { // label文本，不传则不显示
      type: String,
      default: ''
    },
    maxheight: { // 下拉选择框的最大高度，超出则出现滚动条
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      text: '',
      open: false,
      selectIndex: -1
    }
  },
  created () {
    // eslint-disable-next-line prefer-const
    let value = this.value
    if (value !== '') {
      // 默认选中用户传的值
      this.selectIndex = this.list.findIndex((item) => {
        if (item.text === value) {
          return true
        }

        return false
      })

      this.text = value
    }
  },
  computed: {
    // 计算下拉框的高度
    selectHeight () {
      // 40是每个选项的高度
      const height = this.list.length * 40

      // 如果所有选项的高度超出了设置的最大高度，则返回最大高度，反之返回原本高度
      if (height > this.maxheight) {
        return this.maxheight
      }

      return height
    }
  },
  methods: {
    /**
     * @description 打开下拉选择框
     */
    openSelect () {
      this.open = !this.open
    },
    /**
     * @description 下拉框选择事件
     */
    selectHandler (index) {
      this.selectIndex = index
      this.text = this.list[index].text
      this.closeSelect()

      // 抛出选中项的索引
      this.$emit('click', index)
    },
    /**
     * @description 关闭下拉选择框
     */
    closeSelect () {
      this.open = false
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .label {
    padding: 0 10px;
    font-size: 18px;
  }

  .item {
    position: relative;
    flex: 1 1 auto;

    input {
      padding-left: 15px;
      box-sizing: border-box;
      width: 100%;
      height: 30px;
      outline: none;
      border: none;
      background: #f1f3f6;
      border-radius: 8px;

      &::placeholder {
        font-size: 12px;
        color: #999;
      }
    }

    .item-btn {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition: all 0.5s;
    }

    .active-btn {
      transform: rotate(180deg);
    }

    .arrow {
      width: 0px;
      height: 0px;
      border-top: 8px solid #999;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
  }
}

.select-list {
  position: absolute;
  top: 30px;
  left: 0;
  overflow: auto;
  z-index: 999;
  padding: 0 15px;
  width: 100%;
  height: 0;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 24px 62px 0px #e0e0e0;
  transition: height 0.5s ease-out;

  &::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    background: #eaedef;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #002870;
  }

  .select-item {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 40px;
    font-size: 18px;
    color: #666;
    cursor: pointer;
    border-radius: 8px;
  }

  .active-item {
    color: white;
    background: yellowgreen;
  }
}
</style>
