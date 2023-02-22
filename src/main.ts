import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import { registerStore } from '@/stores'
import i18n from '@/i18n'
import { createPinia } from 'pinia'

const app = createApp(App)
// vue-router
app.use(router)

// element-plus
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 多语言
app.use(i18n)
// svg icons
app.component('svg-icon', SvgIcon)

// Pinia
app.use(createPinia())
registerStore()

app.mount('#app')
