<template>
  <div class="nav-header">
    <div class="item-v1">
      <hamburger />
      <breadcrumb />
    </div>
    <div class="item-v2">
      <full-screen />
      <drop-down />
    </div>
  </div>
</template>

<script setup>
import Hamburger from './cpns/hamburger.vue'
import Breadcrumb from './cpns/breadcrumb.vue'
import FullScreen from './cpns/full-screen.vue'
import DropDown from './cpns/drop-down.vue'
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  // background-color: #fff;

  .item-v1 {
    display: flex;
    align-items: center;
  }
  .item-v2 {
    margin-right: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
