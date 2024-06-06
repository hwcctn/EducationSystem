import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import gloablComponent from './components/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import pinia from './store'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(ElementPlus).use(router).mount('#app')
app.use(gloablComponent)

