<template>
  <div class="table-header">
    <h2>{{ title }}</h2>
    <n-button @click="showDialog" type="primary">{{ buttonText }}</n-button>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { defineProps } from 'vue'
import emitter from '@/utils/eventbus.js'

defineProps({
  title: {
    type: String
  },
  buttonText: {
    type: String
  }
})

const showDialog = () => {
  emitter.emit('createShowDialog')
  emitter.emit('handleDialogTitle')
}
</script>

<style lang="less" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  margin-bottom: 10px;
}
</style>
