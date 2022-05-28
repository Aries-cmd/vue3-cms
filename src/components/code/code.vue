<template>
  <div class="code">
    <n-code :code="code" language="bash"></n-code>
  </div>
</template>

<script setup>
import { NCode } from 'naive-ui'
import { defineProps } from 'vue'

defineProps({
  code: {
    type: String
  }
})
</script>

<style lang="less" scoped>
.code {
  background-color: #18181c;
  padding-left: 10px;
}
</style>
