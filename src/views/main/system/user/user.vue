<template>
  <div class="user-content">
    <page-from
      :showTitle="true"
      v-model="userModelRef"
      :formConfig="userFormConfig"
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
      :showTableHeader="true"
      :tbodyList="userList"
      :theadValues="theadValues"
    />
    <n-dialog-provider>
      <dialog-vue
        v-if="showDialog"
        v-model="dialogFormModelRef"
        @update:modelValue="changeDialogFormModelRef"
        :formConfig="dialogFormConfig"
        :formSubmitKey="dialogFormSubmitKey"
        @createUserClick="handleCreateClick"
        @editUserClick="handleEditClick"
        :title="dialogTitle"
      />
    </n-dialog-provider>
  </div>
</template>

<script setup>
import PageFrom from '@/components/page-form/page-from.vue'
import PageTable from '@/components/page-table/page-table.vue'
import DialogVue from '@/components/dialog/dialog.vue'
import emitter from '@/utils/eventbus'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { NDialogProvider, NButton, NIcon } from 'naive-ui'
import { Reset } from '@vicons/carbon'
import { SearchOutline } from '@vicons/ionicons5'
import { userRefModel, userFormConfig } from './user-form.js'
import { userTableTheadValues } from './user-table.js'
import {
  createUserDialogFormConfig,
  editUserDialogFormConfig,
  createUserDialogFormModel,
  editUserDialogFormModel
} from './user-dialog-form.js'

// page-form
const userModelRef = ref(userRefModel)
const changeUserModelRef = (item) => {
  userModelRef.value = item
}
const handleResetClick = () => {
  Object.keys(userModelRef.value).forEach((item) => {
    userModelRef.value[item] = null
  })
  getPageDataAction()
}
const handleQueryClick = () => {
  const queryData = userModelRef.value
  Object.keys(queryData).forEach((item) => {
    if (queryData[item] === null) {
      delete queryData[item]
    }
  })
  getPageDataAction(queryData)
}

// page-table
const store = useStore()
const getPageDataAction = (info) => {
  store.dispatch('systemModule/getPageListAction', {
    pageUrl: '/users/list',
    queryInfo: {
      offset: 0,
      size: 10,
      ...info
    },
    pageName: 'users'
  })
}
getPageDataAction()
const userList = computed(() => store.state.systemModule.userList)
const theadValues = ref(userTableTheadValues)

// dialog
const dialogTitle = ref('新建用户')
const dialogFormConfig = ref()
const dialogFormModelRef = ref()
const dialogFormSubmitKey = ref()

const changeDialogFormModelRef = (item) => {
  dialogFormModelRef.value = item
}

// 监听是否显示dialog
const showDialog = ref(false)
emitter.on('handleShowDialog', (item) => {
  showDialog.value = item
})

// 动态添加部门和角色列表
const departmentList = computed(() => store.state.entireDepartment)
const roleList = computed(() => store.state.entireRole)

const departmentOptions = ref([])
departmentList.value.forEach((item) => {
  departmentOptions.value.push({ label: item.name, value: item.id })
})
const roleOptions = ref([])
roleList.value.forEach((item) => {
  roleOptions.value.push({ label: item.name, value: item.id })
})

// show create dialog
emitter.on('createShowDialog', () => {
  dialogFormSubmitKey.value = 1
  dialogFormConfig.value = createUserDialogFormConfig(
    departmentOptions,
    roleOptions
  )
  dialogFormModelRef.value = createUserDialogFormModel
  // 将原本的 modelref 的值设置为空
  Object.keys(dialogFormModelRef.value).forEach((key) => {
    dialogFormModelRef.value[key] = null
  })

  dialogTitle.value = '新建用户'

  showDialog.value = true
})

// show edit dialog
emitter.on('editShowDialog', (item) => {
  dialogFormSubmitKey.value = 0
  dialogFormModelRef.value = editUserDialogFormModel(item)
  dialogFormConfig.value = editUserDialogFormConfig(
    departmentOptions,
    roleOptions
  )
  dialogTitle.value = '编辑用户'
  showDialog.value = true
})

// dialog title handle
emitter.on('handleDialogTitle', () => {
  dialogTitle.value = '新建用户'
})

// 编辑/删除/新建操作
emitter.on('handleDelectClick', (row) => {
  handleDelectClick(row)
})
const handleDelectClick = (item) => {
  store.dispatch('systemModule/deletePageDataAction', {
    pageName: 'users',
    id: item.key
  })
}
const handleCreateClick = () => {
  store.dispatch('systemModule/createUserDataAction', {
    url: '/users',
    data: dialogFormModelRef.value
  })
  store.dispatch('getInitialDataAction')
}
const handleEditClick = () => {
  store.dispatch('systemModule/editUserDataAction', {
    url: `/users/${dialogFormModelRef.value.id}`,
    data: dialogFormModelRef.value
  })
  store.dispatch('getInitialDataAction')
}
</script>

<style scoped lang="less">
.user-content {
  margin: 20px;
}

.form-button {
  display: flex;
  justify-content: flex-end;
}
</style>
