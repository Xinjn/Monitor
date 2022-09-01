/* 处理路由数据 */
import path from 'path-browserify'

/**
 * 返回所有的子路由
 */
const getChildrenRoutes = routes => {
  const result = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 存在重复的路由数据：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRouters = routes => {
  // 获取所有的子路由
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter(route => {
    // 删除 一级路由中child 中相同的 二级路由
    const res = !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
    return res
  })
}

/**
 * 判断数据是否为空值
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

/**
 * 不满足该条件 meta && meta.title && meta.icon 的数据不应该存在:根据 routes 数据，返回对应 menu 规则数组，例如 login / 404 等路由因该剔除掉
 * @param {*} routes 处理后的路由结构：filterRoutes
 * @param {*} basePath 处理后的路由结构
 */
export function generateMenus(routes, basePath = '') {
  const result = []
  // 递归遍历路由表
  routes.forEach(item => {
    // console.log('item', item)
    /* 不存在children和meta */
    // 作用：children 和 meta 可以不写，否则报错
    if (isNull(item.children) && isNull(item.meta)) return

    // /* 存在children 不存在meta */
    // if (!isNull(item.children) && isNull(item.meta)) {
    //   return result.push(...generateMenus(item.children))
    // }

    /* 存在children 存在mate */
    // 获取路由路径
    const routePath = path.resolve(basePath, item.path)

    // 数组中 查找是否 存在同名父路由
    let route = result.find(item => item.paht === routePath)

    // 数组中不存在，插入
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // 重要隐藏路有：meta 中的 icon 与 title 必须全部存在，可以过滤 \、login、404和二级隐藏路有
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 递归子项
    if (item.children) {
      const child = generateMenus(item.children)
      // console.log('子项', child)
      route.children.push(...child) // 注意：原数据:[],用...析构赋值展开:{},{}...
    }
  })
  return result
}
