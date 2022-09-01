import layout from '@/layouts'

// 私有主路有A
export default {
  name: 'A', // 权限统一
  path: '/A',
  component: layout,
  redirect: '/A/A-1',
  meta: {
    title: 'A',
    icon: 'help'
  },
  children: [
    // 展示路由
    {
      path: '/A/A-1',
      name: 'A-1',
      component: () => import('@/views/A/A-1.vue'),
      meta: {
        title: 'A',
        icon: 'help'
      }
    },
    // 隐藏路有：不写meta或者meta中icon/title，
    // 左右：负责跳转
    {
      path: '/A/A-2',
      name: 'A-2',
      component: () => import('@/views/A/A-2.vue')
    },
    {
      path: '/A/A-3',
      name: 'A-3',
      component: () => import('@/views/A/A-3.vue')
    }
  ]
}
