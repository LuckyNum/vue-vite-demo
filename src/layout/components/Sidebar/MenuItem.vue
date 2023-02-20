<template>
  <svg-icon :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>
<script setup lang="ts">
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
