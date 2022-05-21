<template>
  <div class="login">
    <div class="content">
      <h2 class="title">后台管理系统</h2>
      <n-card>
        <n-tabs size="large" justify-content="space-evenly">
          <n-tab-pane name="signin" tab="账号">
            <login-account></login-account>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="手机登录">
            <login-panel></login-panel>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { NCard, NTabs, NTabPane } from 'naive-ui'
import LoginAccount from './cpns/login-account.vue'
import LoginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  // background-color: #2c3e50;
}

.content {
  width: 320px;
  margin: 0 auto;
  margin-top: 200px;

  .title {
    display: flex;
    justify-content: center;
  }
}
</style>
