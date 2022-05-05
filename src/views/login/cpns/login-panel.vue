<template>
  <div>
    <n-form label-placement="left">
      <n-form-item label="手机号">
        <n-input placeholder="请输入手机号" />
      </n-form-item>
      <n-form-item label="验证码">
        <n-input
          placeholder="验证码"
          style="width: 110px; margin-right: 10px"
        />
        <n-button type="primary">获取验证码</n-button>
      </n-form-item>
    </n-form>
    <n-button type="primary" block secondary strong> 登录 </n-button>
  </div>
</template>

<script setup>
import { NForm, NFormItem, NInput, NButton } from 'naive-ui'
</script>

<style></style>
