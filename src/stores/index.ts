import { useUserStore } from '@/stores/modules/user'
import { useThemeStore } from '@/stores/modules/theme'

const appStore: any = {}
export const registerStore = () => {
  appStore.userStore = useUserStore()
  appStore.themeStore = useThemeStore()
}

export default appStore
