import { CSSProperties } from 'react'
import { Drawer } from 'antd'
import Color from 'color'
import useSettingsStore from '@/stores/settingsStore'
import { useThemeToken, useResponsive } from '@/theme/hooks'
import { ThemeLayout } from '@/types/enum'
import {
  NAV_COLLAPSED_WIDTH,
  NAV_WIDTH,
  HEADER_HEIGHT,
  OFFSET_HEADER_HEIGHT,
} from './config'
import { IconButton, IconSvg } from '@/components/icon'
import Logo from '@/components/Logo'
import BreadCrumb from '../components/BreadCrumb'

type Props = {
  className?: string
  offsetTop?: boolean
}

const Header: React.FC<Props> = ({ className = '', offsetTop = false }) => {
  const useSettings = useSettingsStore()
  const { settings } = useSettings
  const { colorBorder, colorBgElevated } = useThemeToken()
  const { screenMap } = useResponsive()

  //   console.log(colorBorder, Color(colorBorder).alpha(0.6).toString())
  //   console.log(Color('rgba(123,123,125, .5)').hex())

  const headerStyle: CSSProperties = {
    position:
      settings.themeLayout === ThemeLayout.Horizontal ? 'relative' : 'fixed',
    borderBottom:
      settings.themeLayout === ThemeLayout.Horizontal
        ? `1px dashed ${Color(colorBorder).alpha(0.6).toString()}`
        : '',
    backgroundColor: Color(colorBgElevated).alpha(1).toString(),
  }
  if (settings.themeLayout === ThemeLayout.Horizontal) {
    headerStyle.width = '100vw'
  } else if (screenMap.md) {
    headerStyle.right = '0px'
    headerStyle.left = 'auto'
    headerStyle.width = `calc(100% - ${settings.themeLayout === ThemeLayout.Vertical ? NAV_WIDTH : NAV_COLLAPSED_WIDTH}px)`
  } else {
    headerStyle.width = '100vw'
  }

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <header className={`z-20 w-full ${className}`} style={headerStyle}>
      <div
        className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
        style={{
          height: offsetTop ? OFFSET_HEADER_HEIGHT : HEADER_HEIGHT,
          transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        <div className="flex items-baseline">
          {settings.themeLayout !== ThemeLayout.Horizontal ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              className="h-10 w-10 md:hidden"
            >
              <IconSvg icon="ic-menu" size="24" />
            </IconButton>
          ) : (
            <Logo></Logo>
          )}
          <div className="ml-4 hidden md:block">
            {settings.breadCrumb ? <BreadCrumb></BreadCrumb> : null}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
