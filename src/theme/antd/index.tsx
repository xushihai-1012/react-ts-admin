/**
 * 封装antd组件全局主题样式
 */
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, theme } from 'antd'
import 'antd/dist/reset.css'
import {
  customThemeTokenConfig,
  themeModeToken,
  colorPrimarys,
  customComponentConfig,
} from './theme'
import useSettingStore from '@/stores/settings'
import { ThemeMode } from '@/types/enum'

type Props = {
  children: React.ReactNode
}

const AntdConfig: React.FC<Props> = ({ children }) => {
  const useSettings = useSettingStore()
  const { settings } = useSettings

  const colorPrimary = colorPrimarys[settings.themeColorPresets]

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
          ...customThemeTokenConfig,
          ...themeModeToken[settings.themeMode].token,
        },
        components: {
          ...customComponentConfig,
          ...themeModeToken[settings.themeMode].components,
        },
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  )
}

export default AntdConfig
