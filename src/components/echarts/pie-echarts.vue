<template>
  <div class="pie-echarts">
    <n-card title="懒癌发作，不想写了" :segmented="{ content: true }">
      <div ref="pieRef" style="width: 100%; height: 400px"></div>
    </n-card>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { NCard } from 'naive-ui'

const pieRef = ref(null)

onMounted(() => {
  const myEcharts = echarts.init(pieRef.value, 'dark')

  const options = ref({
    title: {
      text: 'Referer of a Website',
      left: 'center',
      top: '30px'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })

  myEcharts.setOption(options.value)
})
</script>

<style lang="less" scoped></style>
