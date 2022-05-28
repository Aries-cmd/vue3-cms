<template>
  <div class="menu">
    <div class="log">
      <img class="img" src="@/assets/img/logo.svg" />
      <h2 v-if="!collapsed" class="title">Vue3+JS</h2>
    </div>
    <n-menu
      :inverted="true"
      :collapsed="collapsed"
      :collapsed-icon-size="22"
      :default-expanded-keys="defaultExpandedKeys"
      :options="menuOptions"
      :on-update:expanded-keys="updateExpandedKeys"
      :on-update:value="updateValue"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { h, defineProps, computed } from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { getMenuList } from './config'
import {
  DesktopOutline,
  SettingsOutline,
  BagRemoveOutline,
  ChatbubbleEllipses
} from '@vicons/ionicons5'

const store = useStore()

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  logPaddingLeft: {
    type: String,
    default: '20px'
  },
  userMenus: {
    type: Array,
    default: () => []
  }
})

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 菜单列表
const icons = [
  DesktopOutline,
  SettingsOutline,
  BagRemoveOutline,
  ChatbubbleEllipses
]
const menuOptions = getMenuList(
  props.userMenus,
  icons,
  h,
  renderIcon,
  RouterLink
)

// 默认展开的 menu
const defaultExpandedKeys = computed(() => {
  return store.state.menuModule.defaultExpandedKeys
})
const defaultValue = computed(() => {
  return store.state.menuModule.defaultValue
})
const updateExpandedKeys = (e) => {
  defaultExpandedKeys.value = e[e.length - 1]
  store.commit('menuModule/changeDefaultExpandedKeys', e[e.length - 1])
}
const updateValue = (e) => {
  store.commit('menuModule/changeDefaultValue', e)
}
</script>

<style lang="less" scoped>
.menu {
  // width: 100%;
  height: 100%;

  .log {
    display: flex;
    width: 100%;
    height: 48px;
    padding-left: v-bind('logPaddingLeft');
    align-items: center;
    border-bottom: 1px solid #999;

    .img {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }

    .title {
      color: #fff;
    }
  }
}
</style>
