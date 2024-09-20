/**
 * 获取路径并缓存起来
 */

import { useLocation } from 'react-router-dom'

export function usePathName() {
  const { pathname } = useLocation()

  return useMemo(() => pathname, [pathname])
}
