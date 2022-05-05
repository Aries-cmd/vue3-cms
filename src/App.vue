<template>
  <div>
    <n-message-provider>
      <MessageApi />
    </n-message-provider>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MessageApi from '@/components/message-api.vue'
import { NMessageProvider } from 'naive-ui'
</script>

<style lang="less"></style>
