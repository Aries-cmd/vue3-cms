<template>
  <div class="menu">
    <div class="log">
      <img class="img" src="@/assets/img/logo.svg" />
      <h2 v-if="!collapsed" class="title">Vue3+JS</h2>
    </div>
    <n-menu
      :collapsed="collapsed"
      :collapsed-icon-size="22"
      :options="menuOptions"
      key-field="whateverKey"
      label-field="whateverLabel"
      children-field="whateverChildren"
    />
  </div>
</template>

<script setup>
import { h, defineProps } from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import {
  DesktopOutline,
  SettingsOutline,
  BagRemoveOutline,
  ChatbubbleEllipses
} from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    whateverLabel: '系统总览',
    whateverKey: 'hear-the-wind-sing',
    icon: renderIcon(DesktopOutline)
  },
  {
    whateverLabel: '系统管理',
    whateverKey: 'pinball-1973',
    icon: renderIcon(SettingsOutline),
    // disabled: true,
    whateverChildren: [
      {
        whateverLabel: '鼠',
        whateverKey: 'rat'
      }
    ]
  },
  {
    whateverLabel: '商品中心',
    whateverKey: 'a-wild-sheep-chase',
    icon: renderIcon(BagRemoveOutline)
  },
  {
    whateverLabel: '随便聊聊',
    whateverKey: 'dance-dance-dance',
    icon: renderIcon(ChatbubbleEllipses),
    whateverChildren: [
      {
        type: 'group',
        whateverLabel: '人物',
        whateverKey: 'people',
        whateverChildren: [
          {
            whateverLabel: '叙事者',
            whateverKey: 'narrator',
            icon: renderIcon(SettingsOutline)
          },
          {
            whateverLabel: '羊男',
            whateverKey: 'sheep-man',
            icon: renderIcon(SettingsOutline)
          }
        ]
      },
      {
        whateverLabel: '饮品',
        whateverKey: 'beverage',
        icon: renderIcon(BagRemoveOutline),
        whateverChildren: [
          {
            whateverLabel: '威士忌',
            whateverKey: 'whisky'
          }
        ]
      },
      {
        whateverLabel: '食物',
        whateverKey: 'food',
        whateverChildren: [
          {
            whateverLabel: '三明治',
            whateverKey: 'sandwich'
          }
        ]
      },
      {
        whateverLabel: '过去增多，未来减少',
        whateverKey: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  logPaddingLeft: {
    type: String,
    default: '20px'
  }
})
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
  }
}
</style>
