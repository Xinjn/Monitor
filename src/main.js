import { createApp } from 'vue'
import '@/styles/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:windi.css'
import './mock' // 使用 Mock 数据
import '@/permission' // 路由鉴权

const app = createApp(App)

// 全局引入全部elements图标 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
