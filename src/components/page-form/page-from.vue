<template>
  <div class="user-from">
    <h1 class="title" v-if="showTitle">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: '高级检索'
  }
})
</script>

<style lang="less" scoped>
.user-from {
  padding: 20px 0;
  padding-right: 100px;
  background-color: #2c3e50;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title {
  text-align: center;
  color: #fff;
}
</style>
