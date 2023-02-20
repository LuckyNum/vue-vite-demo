import { useUserStore } from '@/stores/modules/user'
import { useThemeStore } from '@/stores/modules/theme'
import { useAppStore } from '@/stores/modules/app'

const appStore: any = {}
export const registerStore = () => {
  appStore.userStore = useUserStore()
  appStore.themeStore = useThemeStore()
  appStore.applicationStore = useAppStore()
}

export default appStore
