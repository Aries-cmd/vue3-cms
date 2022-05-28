<template>
  <div>
    <n-card
      :title="title"
      size="small"
      :segmented="{
        footer: 'soft'
      }"
      :header-style="{ fontSize: '12px' }"
      :content-style="{ fontSize: '30px' }"
    >
      <template #header-extra>
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-icon>
              <query />
            </n-icon>
          </template>
          苹果的销量
        </n-tooltip>
      </template>
      ￥
      <n-number-animation
        ref="contentRef"
        :from="0.0"
        :to="contentNums"
        :active="false"
        :precision="3"
        locale="ru-RU"
        show-separator
      >
      </n-number-animation>
      <template #footer>
        销售总量:
        <n-number-animation
          ref="footerRef"
          :from="0.0"
          :to="footerNums"
          :active="false"
          :precision="3"
          locale="ru-RU"
          show-separator
        >
        </n-number-animation>
      </template>
    </n-card>
  </div>
</template>

<script setup>
import { NCard, NIcon, NTooltip, NNumberAnimation } from 'naive-ui'
import { Query } from '@vicons/carbon'
import { ref, onMounted, defineProps } from 'vue'

defineProps({
  title: {
    type: String
  },
  contentNums: {
    type: Number
  },
  footerNums: {
    type: Number
  }
})

const contentRef = ref(null)
const footerRef = ref(null)

onMounted(() => {
  contentRef.value?.play()
  footerRef.value?.play()
})
</script>

<style lang="less" scoped></style>
