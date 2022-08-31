// 模拟 Mock 接口
import debug from './env'

export default ({ mock, setup }) => {
  if (mock !== false && debug) setup()
}

// 请求成功模型
export const successResponseWrap = data => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000
  }
}

// 请求失败模型
export const failResponseWrap = (data, msg, code = 50000) => {
  return {
    data,
    status: 'fail',
    msg,
    code
  }
}
