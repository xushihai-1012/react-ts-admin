import { isEmpty, or } from 'ramda'
import { useUserPermisson } from '@/stores/userStore'
import { flattenTrees } from '@/utils/tree'
import { useMemo } from 'react'
import { Permission } from '@/types/user'
import { AppRouteObject } from '@/types/router'
import { BasicStatus } from '@/types/enum'
import ProTag from '@/theme/antd/components/tag'
import { Iconify } from '@/components/icon'

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

// 构建绝对路径的函数
const resolveComponent = (path: string) => {
  return pages[`${entryPath}${path}`]
}

/**
 * 返回关于权限的路由
 */
export const usePermissionRouter = () => {
  const permissons = useUserPermisson()

  return useMemo(() => {
    const flatteredPermissons = flattenTrees(permissons!)
    const permissionRoutes = transformPermissionToMenuRoutes()
    return [...permissionRoutes]
  }, [permissons])
}

/**
 * 将Permission[]转换为AppRouteObject[]
 * @param permissons
 * @param flattenedPermissions
 */
const transformPermissionToMenuRoutes = (
  permissons: Permission[],
  flattenedPermissions: Permission[],
) => {
  return permissons.map((permission) => {
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
    } = permission

    const appRoute: AppRouteObject = {
      path: route,
      meta: {
        label,
        key: getCompleteRoute(permission, flattenedPermissions),
        hideMenu: !!hide,
        hideTab,
        disabled: status === BasicStatus.DISABLE,
      },
    }

    if (order) appRoute.order = order
    if (icon) appRoute.meta!.icon = icon
    if (frameSrc) appRoute.meta!.frameSrc = frameSrc

    if (newFeature) {
      appRoute.meta!.suffix = (
        <ProTag
          color="cyan"
          icon={<Iconify icon="solar:bell-bing-bold-duotone" size={14} />}
        >
          NEW
        </ProTag>
      )
    }
  })
}

/**
 * 从根权限路由拆分到当前权限路由
 * @param permission 当前权限
 * @param flattenedPermissions 扁平化权限数组
 * @param route 父权限路径
 * @returns {string} 拼接后的完整路线
 */
const getCompleteRoute = (
  permission: Permission,
  flattenedPermissions: Permission[],
  route = '',
): string => {
  const currentRoute = route
    ? `/${permission.route}${route}`
    : `${permission.route}`

  if (permission.parentId) {
    const parentPermisson = flattenedPermissions.find((p) => {
      return p.id === permission.parentId
    })!
    return getCompleteRoute(parentPermisson, flattenedPermissions, currentRoute)
  }

  return currentRoute
}
