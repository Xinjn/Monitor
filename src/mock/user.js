import Mock from 'mockjs'
// Mock请求模型
import setupMock, { successResponseWrap, failResponseWrap } from '@/utils/setup-mock'

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 登录
    Mock.mock(new RegExp('/api/user/login'), params => {
      const { username, password } = JSON.parse(params.body)

      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 50000)
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 50000)
      }
      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('userRole', 'admin')
        return successResponseWrap({
          token: '12345'
        })
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('userRole', 'user')
        return successResponseWrap({
          token: '54321'
        })
      }
      return failResponseWrap(null, '账号或者密码错误', 50000)
    })

    // 登出
    Mock.mock(new RegExp('/api/user/logout'), () => {})

    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), params => {
      return failResponseWrap(null, '账号或者密码错误', 50000)
    })

    // 用户的服务端菜单
    Mock.mock(new RegExp('/api/user/menu'), params => {
      const { url } = params
      const id = url.match(/[^/]+$/g)[0]
      // 模拟用户权限菜单
      const menus = [
        {
          id: 5,
          rule_id: 0,
          status: 1,
          create_time: '2019-08-11 13:36:09',
          update_time: '2021-12-21 19:31:11',
          name: '概览',
          desc: 'index',
          frontpath: '/general',
          condition: null,
          menu: 1,
          order: 1,
          icon: 'help',
          method: 'GET',
          child: [
            {
              id: 10,
              rule_id: 5,
              status: 1,
              create_time: '2019-08-11 13:37:02',
              update_time: '2021-12-21 20:21:23',
              name: '用户总览',
              desc: 'index',
              frontpath: '/general/overview',
              condition: null,
              menu: 1,
              order: 20,
              icon: 'home-filled',
              method: 'GET',
              child: []
            }
          ]
        },
        {
          id: 6,
          rule_id: 0,
          status: 1,
          create_time: '2019-08-11 13:36:36',
          update_time: '2021-12-21 19:37:11',
          name: '用户',
          desc: 'shop_goods_list',
          frontpath: '/user',
          condition: null,
          menu: 1,
          order: 2,
          icon: 'shopping-bag',
          method: 'GET',
          child: [
            {
              id: 13,
              rule_id: 6,
              status: 1,
              create_time: '2019-12-28 13:42:13',
              update_time: '2021-12-21 20:21:42',
              name: '用户细查',
              desc: 'shop_goods_list',
              frontpath: '/user/useraction',
              condition: '',
              menu: 1,
              order: 20,
              icon: 'shopping-cart-full',
              method: 'GET',
              child: []
            }
          ]
        },
        {
          id: 173,
          rule_id: 0,
          status: 1,
          create_time: '2021-12-21 19:38:21',
          update_time: '2021-12-21 19:38:21',
          name: '错误',
          desc: '',
          frontpath: '/error',
          condition: '',
          menu: 1,
          order: 3,
          icon: 'user',
          method: 'GET',
          child: [
            {
              id: 21,
              rule_id: 173,
              status: 1,
              create_time: '2019-12-28 13:46:45',
              update_time: '2021-12-21 20:22:35',
              name: '异常数据',
              desc: 'user_user-list_list',
              frontpath: '/error/issues',
              condition: '',
              menu: 1,
              order: 20,
              icon: 'user-filled',
              method: 'GET',
              child: []
            }
          ]
        },
        {
          id: 7,
          rule_id: 0,
          status: 1,
          create_time: '2019-08-11 13:36:40',
          update_time: '2021-12-21 19:37:18',
          name: '性能',
          desc: 'order_order_list',
          frontpath: '/performance',
          condition: null,
          menu: 1,
          order: 4,
          icon: 'message-box',
          method: 'GET',
          child: [
            {
              id: 18,
              rule_id: 7,
              status: 1,
              create_time: '2019-12-28 13:45:42',
              update_time: '2021-12-21 20:23:02',
              name: '页面性能',
              desc: 'order_order_list',
              frontpath: '/performance/page',
              condition: '',
              menu: 1,
              order: 1,
              icon: 'reading',
              method: 'GET',
              child: []
            },
            {
              id: 17,
              rule_id: 7,
              status: 1,
              create_time: '2019-12-28 13:44:56',
              update_time: '2021-12-21 20:22:26',
              name: '接口性能',
              desc: 'shop_comment_list',
              frontpath: '/performance/api',
              condition: '',
              menu: 1,
              order: 20,
              icon: 'comment',
              method: 'GET',
              child: []
            }
          ]
        }
      ]

      if (id) {
        return successResponseWrap({
          menus
        })
      }
    })
  }
})
