import { isEmpty } from 'ramda'

// 使用import.meta.glob获取所有路由组件
const pages = import.meta.glob('/src/pages/**/*.tsx')
// console.log(pages)
const entryPath = '/src/pages'
export const pagesSelect = Object.entries(pages).map(([path]) => {
  const pagePath = path.replace(entryPath, '')
  return {
    label: pagePath,
    value: pagePath,
  }
})

/**
 * 返回关于权限的路由
 */
export const usePermissionRouter = () => {}
