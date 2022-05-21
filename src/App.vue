<template>
  <div>
    <n-message-provider>
      <message-api />
    </n-message-provider>

    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>

<script setup>
import MessageApi from '@/global/message-api.vue'
import { NMessageProvider, NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
</script>

<style lang="less"></style>
