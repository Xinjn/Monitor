import { useCookies } from '@vueuse/integrations/useCookies'
const TokenKey = 'token'
const cookie = useCookies()

/**
 * 存储数据
 */
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = key => {
  window.localStorage.clear()
}

// 获取token
export function getToken() {
  return cookie.get(TokenKey)
}

// 设置token
export function setToken(token) {
  return cookie.set(TokenKey, token)
}

// 清除token
export function removeToken() {
  return cookie.remove(TokenKey)
}
