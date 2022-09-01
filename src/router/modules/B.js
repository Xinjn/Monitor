import layout from '@/layouts'

// 私有主路有B
export default {
  name: 'B', // 权限统一
  path: '/B',

  component: layout,
  redirect: '/B/B-1',
  meta: {
    title: 'B',
    icon: 'help'
  },
  children: [
    {
      path: '/B/B-1',
      name: 'B-1',
      component: () => import('@/views/B/B-1.vue'),
      meta: {
        title: 'B-1',
        icon: 'help'
      }
    },
    {
      path: '/B/B-2',
      name: 'B-2',
      component: () => import('@/views/B/B-2.vue'),
      meta: {
        title: 'B-2',
        icon: 'help'
      }
    }
  ]
}
