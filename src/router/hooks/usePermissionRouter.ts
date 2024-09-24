import { useUserPermisson } from '@/stores/userStore'
import { flattenTrees } from '@/utils'
import { Permission } from '@/types/user'
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

const resolveComponent = (path: string) => {
  return pages[`${entryPath}${path}`]
}

/**
 * 返回关于权限的路由
 */
export const usePermissionRouter = () => {
  const userPermisson = useUserPermisson()
  return useMemo(() => {
    const flattenedPermissions = flattenTrees(userPermisson!)
  }, [])
}

const transformPermissionToMenuRoutes = (
  permission: Permission[],
  flattenedPermissions: Permission[],
) => {
  permission.map((item) => {
    const {
      route,
      type,
      label,
      icon,
      order,
      hide,
      hideTab,
      status,
      frameSrc,
      newFeature,
      component,
      parentId,
      children = [],
    } = item
  })
}
