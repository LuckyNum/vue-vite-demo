<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import appStore from '@/stores'
import { computed } from 'vue'

const toggleClick = () => {
  appStore.applicationStore.triggerSidebarOpened()
}

const icon = computed(() => {
  return appStore.applicationStore.sidebarOpened
    ? 'hamburger-opened'
    : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
