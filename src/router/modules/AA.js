import layout from '@/layouts'

// 私有主路有AA
export default {
  name: 'AA', // 权限统一
  path: '/AA',

  component: layout,
  redirect: '/A/A-1',
  meta: {
    title: 'A',
    icon: 'help'
  },
  children: [
    {
      path: '/AA/AA-1',
      name: 'AA-1',
      component: () => import('@/views/AA/AA-1.vue'),
      meta: {
        title: 'AA-1',
        icon: 'help'
      }
    }
  ]
}
