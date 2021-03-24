<template>
  <div class="wst">
    <Select
      :list="selectList"
      value="苹果"
      placeholder="请选中您喜欢的水果"
      label="水果："
      :maxheight="240"
      @click="selectHandler"
    />
  </div>
</template>

<script>
import Select from '@/components/select.vue'

export default {
  components: {
    Select
  },
  data () {
    return {
      selectList: [
        { id: 1, text: '香蕉' },
        { id: 2, text: '桃子' },
        { id: 3, text: '菠萝' },
        { id: 4, text: '苹果' },
        { id: 5, text: '桔子' },
        { id: 6, text: '樱桃' },
        { id: 7, text: '枇杷' }
      ]
    }
  },
  methods: {
    selectHandler (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped>
.wst {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>
