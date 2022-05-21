<template>
  <div class="table-header">
    <h2>{{ title }}</h2>
    <n-button type="primary">{{ buttonText }}</n-button>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String
  },
  buttonText: {
    type: String
  }
})
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
