<template>
  <div class="dashboard">
    <div class="card">
      <template v-for="item in cardConfig" :key="item">
        <card-vue
          class="card-item"
          :title="item.title"
          :contentNums="item.contentNums"
          :footerNums="item.footerNums"
        />
      </template>
    </div>
    <div class="echarts">
      <pie-echarts />
    </div>
  </div>
</template>

<script setup>
import CardVue from '@/components/card/card.vue'
import { cardConfig } from './card-config'
import PieEcharts from '@/components/echarts/pie-echarts.vue'
</script>

<style lang="less" scoped>
.dashboard {
  // margin: 20px;
  margin: 0 auto;
  width: 97%;
}

.card {
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .card-item {
    flex: 1;
    margin: 20px 0;
    margin-right: 15px;
    box-shadow: 0 0 3px 0 #fff;
  }

  .card-item:last-child {
    margin-right: 0;
  }
}
</style>
