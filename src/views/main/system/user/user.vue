<template>
  <div class="user-content">
    <page-from :showTitle="true" title="高级检索">
      <n-form
        label-placement="left"
        label-width="170px"
        :model="modelRef"
        ref="formRef"
      >
        <n-grid :x-gap="12" :y-gap="6" :cols="3">
          <n-grid-item>
            <n-form-item label="id" path="id">
              <n-input placeholder="请输入id" v-model:value="modelRef.id" />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="姓名" path="userName">
              <n-input
                placeholder="请输入用户名"
                v-model:value="modelRef.userName"
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="真实姓名" path="name">
              <n-input
                placeholder="请输入真实姓名"
                v-model:value="modelRef.name"
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="手机号" path="phone">
              <n-input
                placeholder="请输入手机号"
                v-model:value="modelRef.phone"
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="选择状态" path="state">
              <n-select
                placeholder="请选择状态"
                :options="selectOptions"
                :clearable="true"
                v-model:value="modelRef.state"
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
          <n-button size="large" @click="resetBtnClick">
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
      :showTableHeader="true"
      :tbodyList="userList"
      :theadValues="theadValues"
    />
  </div>
</template>

<script setup>
import PageFrom from '@/components/page-form/page-from.vue'
import PageTable from '@/components/page-table/page-table.vue'
import { useStore } from 'vuex'
import { ref, h, computed } from 'vue'
import {
  NGrid,
  NGridItem,
  NFormItem,
  NInput,
  NSelect,
  NDatePicker,
  NForm,
  NButton,
  NIcon
} from 'naive-ui'
import { Reset } from '@vicons/carbon'
import { SearchOutline } from '@vicons/ionicons5'

const modelRef = ref({
  id: null,
  userName: null,
  name: null,
  phone: null,
  state: null,
  createTime: null
})

const formRef = ref(null)
const selectOptions = ref([
  {
    label: '启用',
    value: 1
  },
  {
    label: '禁用',
    value: 0
  }
])

// 重置
const resetBtnClick = () => {
  modelRef.value = {
    id: null,
    userName: null,
    name: null,
    phone: null,
    state: null,
    createTime: null
  }
}

const store = useStore()
store.dispatch('systemModule/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  },
  pageName: 'user'
})
const userList = computed(() => store.state.systemModule.userList)
const userCount = computed(() => store.state.systemModule.userCount)

const theadValues = ref([
  {
    type: 'selection'
  },

  {
    title: '序号',
    key: 'id'
  },
  {
    title: '用户名',
    key: 'name'
  },
  {
    title: '真实姓名',
    key: 'realname'
  },
  {
    title: '手机号码',
    key: 'cellphone'
  },
  {
    title: '状态',
    key: 'enable'
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
            type: item.type,
            onClick: () => console.log(item.text)
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

console.log(userCount)
console.log(userList)
</script>

<style scoped lang="less">
.user-content {
  margin: 20px;
  background-color: #000;
}

.button {
  display: flex;
  justify-content: flex-end;
}
</style>
