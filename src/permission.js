/* 路由守卫 */
import router, { addRoutes } from '@/router'
import { getItem } from '@/utils/storage'
import { toast } from '@/composables/util'
import store from './store'

let hasGetInfo = false

router.beforeEach(async (to, from, next) => {
  const token = getItem('token')

  // 没有登录，强制跳转回登录页
  if (!token && to.path !== '/login') {
    toast('请先登录', 'error')
    return next({ path: '/login' })
  }

  // 防止重复登录
  if (token && to.path == '/login') {
    toast('请勿重复登录', 'error')
    return next({ path: from.path ? from.path : '/' })
  }

  // 如果用户登录了，自动获取用户信息，并存储在vuex当中
  let hasNewRoutes = false
  if (token && !hasGetInfo) {
    let { menus } = await store.dispatch('user/getUserMenu')
    hasGetInfo = true
    // 动态添加路由
    hasNewRoutes = addRoutes(menus)
  }

  next()
})

// 全局后置守卫
// router.afterEach((to, from) => hideFullLoading())
