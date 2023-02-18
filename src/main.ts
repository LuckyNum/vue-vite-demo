import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import { registerStore } from '@/stores'

const app = createApp(App)
// Pinia
app.use(createPinia())
registerStore()

// vue-router
app.use(router)

// element-plus
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// svg icons
app.component('svg-icon', SvgIcon)

app.mount('#app')
