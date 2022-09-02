import { createApp } from 'vue'
import '@/styles/style.css'
// Element UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Arco UI
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
// Styles
// import '@/styles/global.less'
// 注册全局组件
import globalComponents from '@/components/index.js'
// 注册全局指令
import directive from '@/directive'

import App from '@/App.vue'
import router from './router'
import store from './store'
import 'virtual:windi.css' // windi CSS
import './mock' // 使用 Mock 数据
import '@/permission' // 路由鉴权

const app = createApp(App)

// 全局引入全部elements图标 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// Element
app.use(ElementPlus)
// Arco
app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(globalComponents)
app.use(directive)

app.mount('#app')
