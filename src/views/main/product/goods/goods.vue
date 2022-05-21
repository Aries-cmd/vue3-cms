<template>
  <div class="goods-content">
    <page-table
      :theadValues="theadValues"
      :tbodyList="tbodyList"
      tableHeaderTitle="商品列表"
    />
  </div>
</template>

<script setup>
import { computed, ref, h } from 'vue'
import { useStore } from 'vuex'
import { NImage, NButton } from 'naive-ui'
import PageTable from '@/components/page-table/page-table.vue'

const store = useStore()

store.dispatch('productModule/getPageListAction', {
  pageUrl: '/goods/list',
  queryInfo: {
    offset: 0,
    size: 100
  },
  pageName: 'product'
})

const tbodyList = computed(() => store.state.productModule.productList)
console.log(tbodyList)

const theadValues = ref([
  {
    type: 'selection'
  },
  {
    title: '序号',
    key: 'id',
    width: 60
  },
  {
    title: '商品名称',
    key: 'desc',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '原价格',
    key: 'oldPrice',
    width: 100
  },
  {
    title: '现价格',
    key: 'newPrice',
    width: 100
  },
  {
    title: '商品图片',
    key: 'productImage',
    width: 100,
    render(row) {
      const productImageActions = row.productImage.map((item) => {
        return h(NImage, {
          style: {
            // width: '60px',
            height: '60px'
          },
          src: item.src
        })
      })
      return productImageActions
    }
  },
  {
    title: '创建时间',
    key: 'createAt'
  },
  {
    title: '更新时间',
    key: 'updateAt'
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      const actions = row.actions.map((item) => {
        return h(
          NButton,
          {
            style: {
              marginRight: '6px'
            },
            type: item.type
          },
          {
            default: () => item.text
          }
        )
      })
      return actions
    }
  }
])
</script>

<style lang="less" scoped>
.goods-content {
  margin: 20px;
  background-color: #000;
}
</style>
