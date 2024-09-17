import { theme } from "antd";

// 获取antd中token并缓存起来
export function useThemeToken () {
  const {token} = theme.useToken()
  return useMemo(() => token, [token])

}