<template>
  <n-config-provider :theme="darkTheme">
    <n-layout has-sider class="layout">
      <n-layout-sider
        class="sider"
        bordered
        collapse-mode="width"
        :collapsed-width="50"
        width="210px"
        :collapsed="collapsed"
        show-trigger="arrow-circle"
        :on-update:collapsed="changeCollapsed"
        :native-scrollbar="false"
      >
        <nav-menu 
          :collapsed="collapsed"
          :logPaddingLeft="logPaddingLeft"
          :userMenus="userMenus"
        ></nav-menu>
      </n-layout-sider>
      <n-layout>
        <n-layout-header class="header">
          <nav-header @changeCollapsed="changeCollapsed"></nav-header>
        </n-layout-header>
        <n-layout-content class="content">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NLayoutHeader,
  NConfigProvider,
  darkTheme
} from 'naive-ui'
import NavMenu from '@/components/nav-menu/nav-menu.vue'
import NavHeader from '@/components/nav-header/nav-header.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const userMenus = computed(() => store.state.loginModule.userMenus)

// 菜单栏以及title是否隐藏
const collapsed = computed(() => {
  return store.state.menuModule.collapsed
})
const logPaddingLeft = computed(() => {
  return store.state.menuModule.logPaddingLeft
})

const changeCollapsed = () => {
  store.commit('menuModule/changeCollapsed')
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;

  .sider {
    height: 100%;
    // background-color: #03213e;
  }

  .header {
    width: 100%;
    height: 48px;
  }

  .content {
    width: 100%;
    // background-color: pink;
    height: calc(100% - 50px);
    // background-color: #f0f2f5;
  }
}
</style>
