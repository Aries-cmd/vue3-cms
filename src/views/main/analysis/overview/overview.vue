<template>
  <div class="overview">
    <n-card
      class="card card-item-v1"
      title="关于"
      :segmented="{ content: true }"
    >
      Vue3Admin 是基于 Vue3、Vuex、VueRouter、webpack、 Naive UI 、Echart5
      等后台系统解决方案。
    </n-card>
    <n-card
      class="card card-item-v1"
      title="其实 ..."
      :segmented="{ content: true }"
    >
      由于是自己完成的第一个且独立完成的（不参考任何教程）后台管理系统的项目，所以代码写的很屎（主要就是随便写的，优化啥的也没做）...
      以后当自己的技术能力和编程思想到了一定的地步后，会用 TS
      重构一下，或者...再另写一个
    </n-card>
    <n-card
      class="card card-item-v1"
      title="如果 ..."
      :segmented="{ content: true }"
    >
      如果...遇到某些 bug
      ，嗯...多刷新。如果刷新也没用，嗯...那我也不知道。只完成了用户管理的增删改查功能。其他的懒得写
    </n-card>
    <n-card
      class="card card-item-v1"
      title="总结"
      :segmented="{ content: true }"
    >
      由于我这个人很懒，在学习上也不太用心，经常10天打鱼9天晒网...所以过去的一段时间编程能力基本上没多大进步。但从自己独立完成这个项目开始，我决定不再颓废了。立誓：到了下个学期，编程能力蜕变！感觉我这样子好傻逼...丢人啊
    </n-card>
    <n-card
      class="card card-item-v2"
      title="技术栈"
      :segmented="{ content: true }"
    >
      <ul>
        <li v-for="item in technologyList" :key="item.label">
          <span>{{ item.label }}:</span>
          &nbsp;&nbsp;
          <a href="#">{{ item.value }}</a>
        </li>
      </ul>
    </n-card>
    <n-card
      class="card card-item-v3"
      title="项目结构"
      :segmented="{ content: true }"
    >
      <code-vue :code="treeText" />
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'
import CodeVue from '@/components/code/code.vue'
import { treeText } from './tree-text'

const technologyList = [
  {
    label: '开发工具',
    value: 'Visual Studio Code'
  },
  {
    label: '编程语言',
    value: 'Javascript'
  },
  {
    label: '构建工具',
    value: 'Webpack 4.x'
  },
  {
    label: '前端框架',
    value: 'Vue 3.x'
  },
  {
    label: '状态管理',
    value: 'Vuex 4.x'
  },
  {
    label: '路由工具',
    value: 'vVue-router 4.x'
  },
  {
    label: 'UI 框架',
    value: 'Naive UI'
  },
  {
    label: '可视化',
    value: 'Echarts 5.x'
  },
  {
    label: '富文本',
    value: 'WangEditor 5.x'
  },
  {
    label: '工具库',
    value: '@vueuse/core + dayjs + mitt'
  },
  {
    label: 'CSS 预编译',
    value: 'Sass / Less'
  },
  {
    label: 'HTTP工具',
    value: 'Axios'
  },
  {
    label: '代码规范',
    value: 'EditorConfig + Prettier + ESLint'
  }
]
</script>

<style lang="less" scoped>
.overview {
  width: 97%;
  margin: 0 auto;

  .card {
    width: 100%;
    margin: 20px 0;
    background-color: #001e26;
  }
}

a {
  text-decoration: none;
}

.card-item-v2 {
  li {
    width: 100%;
    margin: 10px 0;

    span {
      font-weight: bold;
    }
  }
}
</style>
