import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import { getItem } from '@/utils/storage'
import { LANG } from '@/utils/constant'

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

const getLanguage = () => {
  // TODO：这个时候pinia还没有加载，无法调用appStore。如何解决？
  return getItem(LANG) ? getItem(LANG) : 'zh'
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
