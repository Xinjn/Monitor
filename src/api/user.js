import axios from '@/axios'

// 登录
export function login(data) {
  return axios.post('/api/user/login', data)
}
// 用户信息
// export function getUserInfo() {
//   return axios.post('/api/user/info')
// }
export function getUserInfo(id = 0) {
  return axios.get(`/api/user/info/${id}`)
}

// 用户权限菜单
export function getUserMenu(id = 0) {
  return axios.get(`/api/user/menu/${id}`)
}

export function logout() {
  return axios.post('/api/user/logout')
}

export function getMenuList() {
  return axios.post('/api/user/menu')
}

export function queryUserList(
  pagination = {
    current: 1,
    pageSize: 10
  }
) {
  return axios.get('api/useraction/all', {
    params: pagination
  })
}

export function queryUserListId(pagination = { current: 1, pageSize: 10 }, id) {
  return axios.get('api/useraction/one', {
    params: {
      ...pagination,
      id
    }
  })
}
export function queryUserInfo(id) {
  return axios.get(`/api/user/${id}`)
}

export function queryUserStat(id) {
  return axios.get(`/api/user/${id}/stat`)
}

export function queryUserChartInfo() {
  return axios.get('/api/user/chart')
}
