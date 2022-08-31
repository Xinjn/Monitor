import { createRouter, createWebHashHistory } from 'vue-router'

// 默认路由，所有用户共享
const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/layouts/index')
  },
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
    component: () => import('@/views/not-found/index')
  }
]

// 动态路由（私有路由），用于匹配菜单动态添加路由
const asyncRoutes = [
  // 概览
  {
    path: '/general',
    name: 'general',
    component: () => import('@/views/overview/index'),
    meta: {
      locale: 'menu.general',
      requiresAuth: true,
      icon: 'icon-dashboard',
      order: 0
    }
    // redirect: '/general/overview',
    // children: [
    //   {
    //     path: 'overview',
    //     name: 'Overview',
    //     component: () => import('@/views/overview/index'),
    //     meta: {
    //       locale: 'menu.user.overview',
    //       requiresAuth: true,
    //       roles: ['*']
    //     }
    //   }
    // ]
  },
  // 用户
  {
    path: '/user',
    name: 'user',
    component: null,
    meta: {
      locale: 'menu.user',
      requiresAuth: true,
      icon: 'icon-user',
      order: 1
      // hideChildrenInMenu: true,
    }
    // children: [
    //   {
    //     path: 'useraction',
    //     name: 'Useraction',
    //     component: () => import('@/views/useraction/index.vue'),
    //     meta: {
    //       locale: 'menu.useraction',
    //       requiresAuth: true,
    //       roles: ['*']
    //     }
    //   },
    // ]
  },
  // 错误
  {
    path: '/error',
    name: 'error',
    component: null,
    meta: {
      locale: 'menu.error',
      requiresAuth: true,
      icon: 'icon-close-circle',
      order: 2
    }
    // children: [
    //   {
    //     path: 'issues',
    //     name: 'Issues',
    //     component: () => import('@/views/error/issues/index.vue'),
    //     meta: {
    //       locale: 'menu.error.issues',
    //       requiresAuth: true,
    //       roles: ['*']
    //     }
    //   },
    //   {
    //     path: 'issue-details/:issueid', // 通过issueid返回对应的数据 再渲染到页面
    //     name: 'IssueDetails',
    //     component: () => import('@/views/error/issue-details/index.vue'),
    //     meta: {
    //       locale: 'menu.error.issueDetails',
    //       requiresAuth: true,
    //       roles: ['*'],
    //       hideInMenu: true
    //     }
    //   }
    // ]
  },
  // 性能
  {
    path: '/performance',
    name: 'performance',
    component: null,
    meta: {
      locale: 'menu.performance',
      requiresAuth: true,
      icon: 'icon-thunderbolt',
      order: 3
    }
    // children: [
    //   {
    //     path: 'page',
    //     name: 'Page',
    //     component: () => import('@/views/performance/page/index.vue'),
    //     meta: {
    //       locale: 'menu.performance.page',
    //       requiresAuth: true,
    //       roles: ['*']
    //     }
    //   },
    //   {
    //     path: 'pageinfo/:fdURL',
    //     name: 'PageInfo',
    //     component: () => import('@/views/performance/page/page-info.vue'),
    //     meta: {
    //       locale: 'menu.performance.pageInfo',
    //       requiresAuth: true,
    //       roles: ['*'],
    //       hideInMenu: true
    //     }
    //   },
    //   {
    //     path: 'api',
    //     name: 'API',
    //     component: () => import('@/views/performance/api/index.vue'),
    //     meta: {
    //       locale: 'menu.performance.api',
    //       requiresAuth: true,
    //       roles: ['*']
    //     }
    //   },
    //   {
    //     path: 'apiinfo/:apiurl',
    //     name: 'APIInfo',
    //     component: () => import('@/views/performance/api/api-info.vue'),
    //     meta: {
    //       locale: 'menu.performance.apiInfo',
    //       requiresAuth: true,
    //       roles: ['*'],
    //       hideInMenu: true
    //     }
    //   }
    // ]
  }
]

// 动态添加路由的方法（跳转后展示）
export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  const findAndAddRoutesByMenus = arr => {
    arr.forEach(e => {
      console.log('e', e)
      let item = asyncRoutes.find(o => o.path == e.frontpath)
      console.log('item', item)
      // if (item && !router.hasRoute(item.path)) {
      //   router.addRoute('admin', item)
      //   hasNewRoutes = true
      // }
      // if (e.child && e.child.length > 0) {
      //   findAndAddRoutesByMenus(e.child)
      // }
    })
  }
  findAndAddRoutesByMenus(menus)
  return hasNewRoutes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
