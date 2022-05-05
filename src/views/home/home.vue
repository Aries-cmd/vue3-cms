<template>
  <n-layout has-sider class="layout">
    <n-layout-sider
      class="sider"
      bordered
      collapse-mode="width"
      :collapsed-width="50"
      width="210px"
      show-trigger="arrow-circle"
      :on-update:collapsed="changeCollapsed"
      :native-scrollbar="false"
    >
      <nav-menu
        :collapsed="collapsed"
        :logPaddingLeft="logPaddingLeft"
      ></nav-menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="header">{{ collapsed }}</n-layout-header>
      <n-layout-content class="content"> 平山道 </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { NLayout, NLayoutSider, NLayoutContent, NLayoutHeader } from 'naive-ui'
import NavMenu from '@/components/nav-menu/nav-menu.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const collapsed = computed(() => {
  return store.state.menuModule.collapsed
})
const logPaddingLeft = computed(() => {
  return store.state.menuModule.logPaddingLeft
})

const changeCollapsed = () => {
  console.log(1)
  store.commit('menuModule/changeCollapsed')
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;

  .sider {
    height: 100%;
  }

  .header {
    width: 100%;
    height: 50px;
    background-color: green;
  }

  .content {
    width: 100%;
    // background-color: pink;
    height: calc(100% - 50px);
  }
}
</style>
