<template>
  <div class="form">
    <h1 class="title" v-if="showTitle">{{ title }}</h1>
    <n-form label-placement="left" label-width="170px" :model="modleRef">
      <n-grid :y-gap="6" :cols="3">
        <n-grid-item v-for="item in formConfig" :key="item">
          <template v-if="item.type === 'input'">
            <n-form-item :label="item.label">
              <n-input
                :type="item.inputType"
                :placeholder="item.placeholder"
                v-model:value="modleRef[item.field]"
                @input="changeModelRef"
              />
            </n-form-item>
          </template>
          <template v-if="item.type === 'select'">
            <n-form-item :label="item.label">
              <n-select
                :options="item.options"
                :placeholder="item.placeholder"
                v-model:value="modleRef[item.field]"
                @update:value="changeModelRef"
              />
            </n-form-item>
          </template>
          <template v-if="item.type === 'picker'">
            <n-form-item :label="item.label">
              <n-date-picker
                :type="item.pickerType"
                clearable
                v-model:value="modleRef[item.field]"
                @update:value="changeModelRef"
              />
            </n-form-item>
          </template>
        </n-grid-item>
      </n-grid>
    </n-form>
    <slot name="button"></slot>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import {
  NGrid,
  NGridItem,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NDatePicker
} from 'naive-ui'

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: '高级检索'
  },
  modelValue: {
    type: Object
  },
  formConfig: {
    type: Array
  }
})

const emit = defineEmits(['update:modelValue'])

const modleRef = ref(props.modelValue)

const changeModelRef = () => {
  emit('update:modelValue', modleRef.value)
}
</script>

<style lang="less" scoped>
.form {
  padding: 20px 0;
  padding-right: 100px;
  background-color: #001e26;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title {
  text-align: center;
  color: #fff;
}
</style>
