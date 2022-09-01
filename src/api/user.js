import axios from '@/axios'

// 登录
export function login(data) {
  return axios.post('/api/user/login', data)
}
// 用户信息
export function getUserInfo(id = 0) {
  return axios.get(`/api/user/info/${id}`)
}
// 用户权限菜单
export function getUserMenu(id = 0) {
  return axios.get(`/api/user/menu/${id}`)
}
