<template>
  <div class="user-table">
    <table-header
      v-if="showTableHeader"
      :title="tableHeaderTitle"
      :buttonText="tableHeaderButtonText"
    />
    <n-data-table
      :bordered="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :single-line="false"
      :loading="loadingRef"
    />
  </div>
</template>

<script setup>
import { NDataTable } from 'naive-ui'
// import { Edit, Delete } from '@vicons/carbon'
import { computed, defineProps, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { formatUtcTime } from '@/utils/format'
import TableHeader from '@/components/table-header/table-header.vue'

const store = useStore()

const props = defineProps({
  tbodyList: {
    type: Array,
    default: () => []
  },
  theadValues: {
    type: Array,
    default: () => []
  },
  showPaginationMenu: {
    type: Boolean,
    default: true
  },
  showTableHeader: {
    type: Boolean,
    default: () => true
  },
  tableHeaderTitle: {
    type: String,
    default: '用户列表'
  },
  tableHeaderButtonText: {
    type: String,
    default: '新增用户'
  }
})

const data = ref()
const columns = ref()
const pagination = ref()

watch(
  () => props.tbodyList,
  () => {
    const createColumns = (theadValues) => {
      let list = []

      theadValues.forEach((item) => {
        item.align = 'center'
        list.push(item)
      })

      return list
    }

    const createData = (tbodyList) => {
      let list = []
      tbodyList.forEach((item, index) => {
        list.push({
          key: item.id,
          sort: index + 1,
          name: item.name,
          intro: item.intro,
          type: item.type,
          desc: item.desc,
          oldPrice: item.oldPrice,
          newPrice: item.newPrice,
          departmentId: item.departmentId,
          roleId: item.roleId,
          url: item.url,
          icon: item.icon,
          realname: item.realname,
          cellphone: item.cellphone,
          enable: item.enable,
          createAt: formatUtcTime(item.createAt),
          updateAt: formatUtcTime(item.updateAt),
          actions: [
            { text: '编辑', type: 'primary' },
            { text: '删除', type: 'error' }
          ],
          productImage: [{ src: item.imgUrl }]
        })
        function initChildrenMenu(pItem) {
          if (pItem) {
            let children = []
            pItem.forEach((item) => {
              let obj = {
                name: item.name,
                type: item.type,
                url: item.url,
                icon: item.icon,
                createAt: formatUtcTime(item.createAt),
                updateAt: formatUtcTime(item.updateAt),
                actions: [
                  { text: '编辑', type: 'primary' },
                  { text: '删除', type: 'error' }
                ]
              }

              if (item.children) {
                obj.children = initChildrenMenu(item.children)
              }
              children.push(obj)
            })
            return children
          }
        }
        if (item.children) {
          list[index].children = initChildrenMenu(item.children, index)
        }
      })

      return list
    }
    data.value = createData(props.tbodyList)
    columns.value = createColumns(props.theadValues)

    if (props.showPaginationMenu) {
      const paginationStore = computed(() => store.state.pagination)

      pagination.value = reactive({
        page: 1,
        pageSize: paginationStore.value.pageSize,
        showSizePicker: true,
        showQuickJumper: true,
        pageSizes: [3, 5, 7, 10, 15],
        onChange: (page) => {
          pagination.value.page = page
        },
        onUpdatePageSize: (pageSize) => {
          store.commit('changePagination', { name: 'pageSize', size: pageSize })
          pagination.value.pageSize = paginationStore.value.pageSize
        }
      })
    }
  },
  { deep: true, immediate: true }
)
</script>

<style lang="less" scoped>
.user-table {
  margin-top: 20px;
  padding: 20px 15px;
  background-color: #001e26;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.rowClassName {
  text-align: center !important;
}
</style>
