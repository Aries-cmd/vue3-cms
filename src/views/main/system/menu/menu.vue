<template>
  <div class="menu-content">
    <page-table
      :theadValues="theadValues"
      tableHeaderTitle="菜单列表"
      :tbodyList="tbodyList"
      :showPaginationMenu="false"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref, h } from 'vue'
import { NButton } from 'naive-ui'
import PageTable from '@/components/page-table/page-table.vue'

const store = useStore()

const theadValues = ref([
  {
    title: '菜单名称',
    key: 'name'
  },
  {
    title: '类型',
    key: 'type'
  },
  {
    title: '菜单url',
    key: 'url'
  },
  {
    title: '菜单icon',
    key: 'icon'
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
store.dispatch('systemModule/getPageMenuList', {
  url: '/menu/list'
})
const tbodyList = computed(() => store.state.systemModule.menuList)
console.log(tbodyList)
</script>

<style lang="less" scoped>
.menu-content {
  margin: 20px;
  background-color: #000;
}

.button {
  display: flex;
  justify-content: flex-end;
}
</style>
