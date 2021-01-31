<template>
  <div class="container">
    <st-table width="1000px" :title="thead" :tabledata="data"  dividerColor="#fff" :checkbox="true" @checkHandler="changeCheck">
      <!-- 插入到操作里 -->
      <template v-slot="index">
        <img src="../assets/images/主担配置icon.png" alt="user" class="operation-btn" @click="opeartionState(index)">
      </template>
    </st-table>
  </div>
</template>

<script>
import StTable from '@/components/st-table/index'

export default {
  components: {
    'st-table': StTable
  },
  data () {
    return {
      thead: [
        {
          title: '供应商编号',
          name: 'supplierId',
          width: 150
        },
        {
          title: '供应商名称',
          name: 'supplierName',
          width: 200
        },
        {
          title: '项目主担',
          name: 'projectPrincipal'
        },
        {
          title: '线路主担',
          name: 'linePrincipal'
        },
        {
          // 注意：当name为operation时，将开启插槽。可插入自定义的按钮等内容
          title: '操作',
          name: 'operation',
          width: 100
        }
      ],
      data: [
        {
          supplierId: '1',
          supplierName: '景睿',
          projectPrincipal:
            '张叁、李肆、宋智、陈冬张叁、李肆、宋智、陈冬张叁、李肆、宋智、陈冬张叁、李肆、宋智、陈冬',
          linePrincipal: '王大锤、陈冬冬、肖赞赞',
          operation: '1'
        },
        {
          supplierId: '1',
          supplierName: '景睿',
          projectPrincipal:
            '张叁、李肆、宋智、陈冬',
          linePrincipal: '王大锤、陈冬冬、肖赞赞',
          operation: '1'
        },
        {
          supplierId: '1',
          supplierName: '景睿',
          projectPrincipal:
            '张叁、李肆、宋智、陈冬',
          linePrincipal: '王大锤、陈冬冬、肖赞赞',
          operation: '1'
        },
        {
          supplierId: '1',
          supplierName: '景睿',
          projectPrincipal:
            '张叁、李肆、宋智、陈冬',
          linePrincipal: '王大锤、陈冬冬、肖赞赞',
          operation: '1'
        }
      ]
    }
  },
  methods: {
    opeartionState (index) {
      console.log(index)
    },
    // 获取选中的数据的索引
    changeCheck (val) {
      console.log(val)
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}

.operation-btn {
  border: none;
  cursor: pointer;
}
</style>
