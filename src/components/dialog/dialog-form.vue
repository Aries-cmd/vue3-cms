<template>
  <div>
    <n-form label-placement="left" :model="modelRef">
      <template v-for="item in formConfig" :key="item">
        <template v-if="item.type === 'input'">
          <n-form-item :label="item.label">
            <n-input
              :placeholder="item.placeholder"
              :type="item.inputType"
              v-model:value="modelRef[item.field]"
              @input="changeModelRef"
            />
          </n-form-item>
        </template>
        <template v-if="item.type === 'select'">
          <n-form-item :label="item.label">
            <n-select
              :options="item.options"
              :placeholder="item.placeholder"
              v-model:value="modelRef[item.field]"
              @update:value="changeModelRef"
            />
          </n-form-item>
        </template>
      </template>
    </n-form>
  </div>
</template>

<script setup>
import { NForm, NFormItem, NInput, NSelect } from 'naive-ui'
import { defineProps, ref, defineEmits } from 'vue'

const props = defineProps({
  dialogModelRef: {
    type: Object
  },
  formConfig: {
    type: Array
  }
})
const emit = defineEmits(['updateDialogModelRef'])

const modelRef = ref(props.dialogModelRef)

const changeModelRef = () => {
  emit('updateDialogModelRef', modelRef.value)
}
</script>

<style lang="less" scoped></style>
