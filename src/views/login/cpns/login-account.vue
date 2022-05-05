<template>
  <div>
    <n-form
      ref="formRef"
      :model="modelRef"
      :rules="rules"
      label-placement="left"
    >
      <n-form-item label="账号" path="name">
        <n-input placeholder="请输入账号" v-model:value="modelRef.name" />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input
          type="password"
          v-model:value="modelRef.password"
          clearable
          placeholder="请输入密码"
        />
      </n-form-item>
    </n-form>
    <div class="bottom-select">
      <span>
        <n-checkbox></n-checkbox>
        记住密码
      </span>
      <span>忘记密码</span>
    </div>
    <n-button type="primary" block secondary strong @click="loginClick">
      登录
    </n-button>
  </div>
</template>

<script setup>
import { NForm, NFormItem, NInput, NButton, NCheckbox } from 'naive-ui'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const formRef = ref(null)
const modelRef = ref({
  name: null,
  password: null
})
const rules = {
  name: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('账号不得为空')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('账号不得为空')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ]
}

const loginClick = (e) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (errors) {
      window.$message.error('请按照规定的方式填写账号或密码')
    } else {
      store.dispatch('loginModule/login', modelRef.value)
    }
  })
}
</script>

<style lang="less" scoped>
.bottom-select {
  width: 270px;
  margin-top: -5px;
  margin-bottom: 10px;
  color: #18a058;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
