<template>
  <div class="readcrumb">
    <n-breadcrumb>
      <n-breadcrumb-item href="#" class="breadcrumb-item-v1">
        {{ propName }}&nbsp;
      </n-breadcrumb-item>
      <n-breadcrumb-item href="#" class="breadcrumb-item-v2"
        >/ {{ groupName }}
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { watch, ref } from 'vue'

const route = useRoute()
const store = useStore()

const propName = ref('')
const groupName = ref('')

const userMenus = store.state.loginModule.userMenus
const getRoute = () => {
  const groupPath = route.matched[1].path
  userMenus.forEach((item) => {
    for (let i of item.children) {
      if (groupPath === i.url) {
        propName.value = item.name
        groupName.value = i.name
      }
    }
  })
}

watch(
  route,
  () => {
    if (route.path !== '/login') {
      getRoute()
    }
  },
  { deep: true, immediate: true }
)
</script>

<style lang="less" scoped>
.breadcrumb-item-v1 {
  font-weight: bold;
}
.breadcrumb-item-v1:hover {
  color: #18a058;
  cursor: pointer;
}
.breadcrumb-item-v2 {
  color: #777;
}
</style>
