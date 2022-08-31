/* store get 快捷访问 */
// import { getItem } from '@/utils/storage.js'

const getters = {
  token: state => state.user.token,
  menus: state => state.user.menus,
  asideWidth: state => state.user.asideWidth
  // userInfo: state => state.user.userInfo,
  // // @returns true 表示已存在用户信息
  // hasUserInfo: state => {
  //   return JSON.stringify(state.user.userInfo) !== '{}'
  // }
}

export default getters
