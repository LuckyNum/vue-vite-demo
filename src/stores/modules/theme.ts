import variables from '@/assets/variables.module.scss'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const cssVar = ref(variables)
  return { cssVar }
})
