<template>
  <div class="role-content">
    <page-from
      :showTitle="true"
      v-model="roleFormModelRef"
      :formConfig="roleFormConfig"
      title="高级检索"
      @update:modelValue="changeUserModelRef"
    >
      <template #button>
        <div class="form-button">
          <n-button @click="handleResetClick">
            <n-icon>
              <reset />
            </n-icon>
            重置
          </n-button>
          &nbsp;
          <n-button type="primary" @click="handleQueryClick">
            <n-icon>
              <search-outline />
            </n-icon>
            搜索
          </n-button>
        </div>
      </template>
    </page-from>
    <page-table
      :theadValues="theadValues"
      :tbodyList="roleList"
      tableHeaderTitle="角色列表"
      :showPaginationMenu="false"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import PageTable from '@/components/page-table/page-table.vue'
import PageFrom from '@/components/page-form/page-from.vue'
import { h, ref } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import { Reset } from '@vicons/carbon'
import { SearchOutline } from '@vicons/ionicons5'
import { modelRef, formConfig } from './role-form.js'
const store = useStore()

// form
const roleFormModelRef = ref(modelRef)
const roleFormConfig = ref(formConfig)
const changeUserModelRef = (item) => {
  roleFormModelRef.value = item
}

store.dispatch('systemModule/getPageListAction', {
  pageUrl: '/role/list',
  queryInfo: {
    offset: 0,
    size: 10
  },
  pageName: 'roles'
})
const roleList = computed(() => store.state.systemModule.roleList)

const theadValues = ref([
  {
    type: 'selection'
  },

  {
    title: '序号',
    key: 'sort'
  },
  {
    title: '角色名',
    key: 'name'
  },
  {
    title: '权限介绍',
    key: 'intro'
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
.role-content {
  margin: 20px;
  background-color: #000;
}

.form-button {
  display: flex;
  justify-content: flex-end;
}
</style>
