// /* 用于处理所有和 用户相关 的内容 */
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { login, getUserInfo, getUserMenu } from '@/api/user'
import { toast } from '@/composables/util'

export default {
  namespaced: true,
  /* 数据库 */
  state: () => ({
    token: getItem(TOKEN) || '', //  token 保存至 vuex 与 localStorage 中
    userInfo: {}, //  用户信息
    menus: [], // 用户菜单
    asideWidth: '250px' // 侧边宽度
  }),
  /* 同步方法:commit 提交 */
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setUserMenu(state, menus) {
      state.menus = menus
    },
    // 展开/缩起侧边
    setAsideWidth(state) {
      state.asideWidth = state.asideWidth == '250px' ? '64px' : '250px'
    }
  },
  /* 异步方法:dispach 提交 */
  actions: {
    // 登录
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: password
        })
          .then(data => {
            if (data?.token) {
              // 设置token
              this.commit('user/setToken', data.token)
              resolve(data)
            }
            reject('账号或者密码错误')
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserMenu(context, userId) {
      return new Promise((resolve, reject) => {
        getUserMenu()
          .then(data => {
            const { menus } = data
            // 设置menu
            this.commit('user/setUserMenu', menus)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    // 退出登录
    logout(context) {
      // resetRouter()
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
