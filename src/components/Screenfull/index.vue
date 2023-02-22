<template>
  <div>
    <svg-icon
      id="guide-full"
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="onToggle"
    />
  </div>
</template>
<script setup lang="ts">
import screenfull from 'screenfull'
import { onMounted, onUnmounted, ref } from 'vue'

// 是否全屏
const isFullscreen = ref(false)

// 监听变化
const change = () => {
  isFullscreen.value = (screenfull as any).isFullscreen
}

// 切换事件
const onToggle = () => {
  ;(screenfull as any).toggle()
}

// 设置侦听器
onMounted(() => {
  ;(screenfull as any).on('change', change)
})

// 删除侦听器
onUnmounted(() => {
  ;(screenfull as any).off('change', change)
})
</script>
<style lang="scss" scoped></style>
