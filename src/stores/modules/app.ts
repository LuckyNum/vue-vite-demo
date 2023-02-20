import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarOpened = ref(true)

  const triggerSidebarOpened = () => {
    sidebarOpened.value = !sidebarOpened.value
  }

  return { sidebarOpened, triggerSidebarOpened }
})
