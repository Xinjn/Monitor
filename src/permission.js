/* 路由守卫 */
import router, { addRoutes } from '@/router'
import { getItem } from '@/utils/storage'
import { toast } from '@/composables/util'
import store from './store'

// 路由白名单
const whiteList = ['/login']

let hasGetInfo = false

router.beforeEach(async (to, from, next) => {
  // 如果用户登录了，自动获取用户信息，并存储在vuex当中
  // let hasNewRoutes = false
  // if (token && !hasGetInfo) {
  //   let { menus } = await store.dispatch('user/getUserMenu')
  //   hasGetInfo = true
  //   // 动态添加路由
  //   hasNewRoutes = addRoutes(menus)
  // }

  // 有 token
  if (store.getters.token) {
    // 防止重复登录
    if (to.path === '/login') {
      toast('请勿重复登录', 'error')
      next('/')
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action,并获取用户当前权限
        const { permission } = await store.dispatch('user/getUserInfo')
        // console.log('用户权限', permission.menus)
        // 处理用户权限，筛选出需要添加的权限（同时过滤二级隐藏路由，不进行菜单展示）
        const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus)
        // console.log('过滤路由', filterRoutes)
        // 利用 addRoute 循环添加公共路由，数据格式为扁平
        filterRoutes.forEach(item => {
          router.addRoute(item)
        })
        // console.log('总路有', router.getRoutes())
        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path)
      }
      next()
    }
  } else {
    // 没有 token
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      toast('请先登录', 'error')
      next('/login')
    }
  }
})

// 全局后置守卫
// router.afterEach((to, from) => hideFullLoading())
