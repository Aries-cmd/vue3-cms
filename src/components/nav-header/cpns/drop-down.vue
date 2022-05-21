<template>
  <div class="dropdown">
    <n-dropdown
      trigger="hover"
      :options="options"
      :show-arrow="true"
      @select="handleSelect"
    >
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-dropdown>
  </div>
</template>

<script setup>
import { NDropdown } from 'naive-ui'
import { NAvatar } from 'naive-ui'
import { useStore } from 'vuex'

const store = useStore()

const options = [
  {
    label: '退出',
    key: 'exit'
  }
]

const handleSelect = (key) => {
  if (key === 'exit') {
    store.dispatch('headerModule/logout')
  }
}
</script>

<style lang="less" scoped>
.dropdown {
  display: flex;
}
</style>
