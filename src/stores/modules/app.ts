import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { LANG } from '@/utils/constant'
import { getItem, setItem } from '@/utils/storage'

export const useAppStore = defineStore('app', () => {
  // 侧边栏是否打开
  const sidebarOpened = ref(true)
  // 多语言
  const language = ref(getItem(LANG) || 'zh')
  /**
   * 监听language的变化，存储到localStorage
   */
  watch(language, (newState: string, oldState: string) => {
    setItem(LANG, newState)
  })

  const triggerSidebarOpened = () => {
    sidebarOpened.value = !sidebarOpened.value
  }

  return { language, sidebarOpened, triggerSidebarOpened }
})
