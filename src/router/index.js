import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layouts/index.vue'
// modules
// // 组A
// import A from './modules/A'
// import AA from './modules/AA'
// // 组B
// import B from './modules/B'

// 默认路由，所有用户共享
export const publicRoutes = [
  {
    path: '/', // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layout
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      requiresAuth: false
    }
  },
  //  404
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/notFound/index')
  }
]

// 动态路由（私有路由），用于匹配菜单动态添加路由
// export const privateRoutes = [A, AA, B]

// 动态路由（私有路由），用于匹配菜单动态添加路由
export const privateRoutes = [
  // 概览
  {
    path: '/general',
    name: 'general',
    component: layout,
    redirect: '/general/overview',
    meta: {
      title: '概览',
      icon: 'help',
      order: 0
    },
    children: [
      {
        path: '/general/overview',
        name: 'overview',
        component: () => import('@/views/overview/index.vue'),
        meta: {
          title: '用户总览',
          icon: 'help'
        }
      }
    ]
  },
  // 用户
  {
    path: '/user',
    name: 'user',
    component: layout,
    redirect: '/user/useraction',
    meta: {
      requiresAuth: true,
      title: '用户',
      icon: 'user',
      order: 1
    },
    children: [
      {
        path: '/user/useraction',
        name: 'useraction',
        component: () => import('@/views/useraction/index.vue'),
        meta: {
          title: '用户细查',
          icon: 'Search'
        }
      },
      {
        path: '/user/userDetail/:id',
        name: 'UserDetail',
        component: () => import('@/views/userDetail/index.vue')
      }
    ]
  },
  // 错误
  {
    path: '/error',
    name: 'error',
    component: layout,
    meta: {
      title: '错误',
      icon: 'circle-close',
      order: 2
    },
    children: [
      {
        path: '/error/issues',
        name: 'Issues',
        component: () => import('@/views/error/issues/index.vue'),
        meta: {
          title: '异常数据',
          icon: 'bell'
        }
      },
      {
        path: '/error/issuedetails/:issueid', // 通过issueid返回对应的数据 再渲染到页面
        name: 'IssueDetails',
        component: () => import('@/views/error/issuedetails/index.vue')
      }
    ]
  },
  // 性能
  {
    path: '/performance',
    name: 'performance',
    component: () => import('@/layouts/index.vue'),
    meta: {
      title: '性能',
      icon: 'Compass',
      order: 3
    },
    children: [
      {
        path: '/performance/page',
        name: 'Page',
        component: () => import('@/views/performance/page.vue'),
        meta: { title: '页面性能', icon: 'Monitor' }
      },
      {
        path: '/performance/pageinfo/:fdURL',
        name: 'PageInfo',
        component: () => import('@/views/performance/page-info.vue')
      },
      {
        path: '/performance/api',
        name: 'API',
        component: () => import('@/views/performance/api.vue'),
        meta: { title: '接口性能', icon: 'Pointer' }
      },
      {
        path: '/performance/apiinfo/:apiurl',
        name: 'APIInfo',
        component: () => import('@/views/performance/api-info.vue')
      }
    ]
  }
]

// 动态添加路由的方法（跳转后展示）
export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  const findAndAddRoutesByMenus = arr => {
    arr.forEach(e => {
      let item = privateRoutes.find(o => o.path == e.frontpath)
      if (item && !router.hasRoute(item.path)) {
        router.addRoute('admin', item)
        hasNewRoutes = true
      }
      if (e.child && e.child.length > 0) {
        findAndAddRoutesByMenus(e.child)
      }
    })
  }
  findAndAddRoutesByMenus(menus)
  return hasNewRoutes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
