import variables from '@/assets/variables.module.scss'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { getItem, setItem } from '@/utils/storage'
import { DEFAULT_COLOR, MAIN_COLOR } from '@/utils/constant'
import { generateColors } from '@/utils/theme'
import appStore from '@/stores'

export const useThemeStore = defineStore('theme', () => {
  const mainColor = ref(getItem(MAIN_COLOR) || DEFAULT_COLOR)
  const cssVar = ref({ ...variables, ...generateColors(getItem(MAIN_COLOR)) })

  watch(mainColor, (newState: string, oldState: string) => {
    setItem(MAIN_COLOR, newState)
    appStore.themeStore.cssVar.menuBg = newState
  })

  return { cssVar, mainColor }
})
