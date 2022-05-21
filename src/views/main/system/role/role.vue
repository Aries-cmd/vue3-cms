<template>
  <div class="role-content">
    <page-from>
      <n-form
        label-placement="left"
        label-width="170px"
        :model="modelRef"
        ref="formRef"
      >
        <n-grid :x-gap="12" :y-gap="6" :cols="3">
          <n-grid-item>
            <n-form-item label="角色名称" path="name">
              <n-input
                placeholder="请输入用户名"
                v-model:value="modelRef.name"
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="权限介绍" path="intro">
              <n-input
                placeholder="请输入权限介绍"
                v-model:value="modelRef.phone"
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="创建时间" path="createTime">
              <n-date-picker
                type="daterange"
                v-model:value="modelRef.createTime"
                clearable
              />
            </n-form-item>
          </n-grid-item>
        </n-grid>
        <div class="button">
          <n-button size="large">
            <template #icon>
              <n-icon>
                <reset />
              </n-icon>
            </template>
            重置
          </n-button>
          &nbsp;
          <n-button size="large" type="primary" @click="searchClick">
            <template #icon>
              <n-icon>
                <search-outline />
              </n-icon>
            </template>
            搜索
          </n-button>
        </div>
      </n-form>
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
import {
  NGrid,
  NGridItem,
  NFormItem,
  NInput,
  NDatePicker,
  NForm,
  NButton,
  NIcon
} from 'naive-ui'
import { Reset } from '@vicons/carbon'
import { SearchOutline } from '@vicons/ionicons5'

const modelRef = ref({
  name: null,
  intro: null,
  createTime: null
})

const store = useStore()
store.dispatch('systemModule/getPageListAction', {
  pageUrl: '/role/list',
  queryInfo: {
    offset: 0,
    size: 10
  },
  pageName: 'role'
})
const roleList = computed(() => store.state.systemModule.roleList)
console.log(roleList)

const theadValues = ref([
  {
    type: 'selection'
  },

  {
    title: '序号',
    key: 'id'
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

.button {
  display: flex;
  justify-content: flex-end;
}
</style>
