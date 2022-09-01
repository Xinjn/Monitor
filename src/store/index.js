import { createStore } from 'vuex'
// 注册模块
import user from './modules/user'
import permission from './modules/permission'

// 快捷访问
import getters from './getters'

export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    permission
  }
})
