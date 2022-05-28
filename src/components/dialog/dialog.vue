<template>
  <div></div>
</template>

<script setup>
import { useDialog } from 'naive-ui'
import { h, defineProps, defineEmits, ref, onMounted } from 'vue'
import dialogForm from './dialog-form.vue'
import emitter from '@/utils/eventbus'

const props = defineProps({
  title: {
    type: String,
    default: '新建用户'
  },
  formConfig: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  formSubmitKey: {
    type: Number
  }
})

const emit = defineEmits(['submitDialogClick', 'update:modelValue'])

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emitter.emit('handleShowDialog', false)
    }
  })
})

const dialogFormModel = ref(props.modelValue)

const dialog = useDialog()

dialog.success({
  showIcon: false,
  title: () => {
    return h(
      'p',
      {
        style: {
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center'
        }
      },
      {
        default: () => props.title
      }
    )
  },
  content: () => {
    return initDialogForm()
  },
  positiveText: '确定',
  negativeText: '取消',
  maskClosable: false,
  onMaskClick: () => {
    window.$message.success('不能关闭')
  },
  onPositiveClick: () => {
    emitter.emit('handleShowDialog', false)
    switch (props.formSubmitKey) {
      case 1:
        emit('createUserClick')
        break
      case 0:
        emit('editUserClick')
    }
  },
  onNegativeClick: () => {
    emitter.emit('handleShowDialog', false)
  },
  onClose: () => {
    emitter.emit('handleShowDialog', false)
  }
})

const initDialogForm = () => {
  return h(dialogForm, {
    dialogModelRef: dialogFormModel,
    formConfig: props.formConfig,
    onUpdateDialogModelRef: changeDialogFormModel
  })
}

const changeDialogFormModel = (item) => {
  dialogFormModel.value = item
  emit('update:modelValue', dialogFormModel.value)
}
</script>

<style lang="less" scoped></style>
