import { ThemeLayout, ThemeMode } from '@/types/enum'
import styled from 'styled-components'
import Progress from '@/components/ProgressBar'
import useSettingsStore from '@/stores/settings'
import { useThemeToken } from '@/theme/hooks'
import { Suspense } from 'react'
import { CircleLoading } from '@/components/Loading'

const DashBoardLayout: React.FC = () => {
  const useSettings = useSettingsStore()
  const { settings } = useSettings
  const { colorBgElevated, colorTextBase } = useThemeToken()

  return (
    <StyleWrapper>
      <Progress />
      <div
        className={`flex h-screen overflow-hidden ${settings.themeLayout === ThemeLayout.Horizontal ? 'flex-col' : ''}`}
        style={{
          color: colorTextBase,
          backgroundAttachment: colorBgElevated,
          transition:
            'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        <Suspense fallback={<CircleLoading />}></Suspense>
        DashBoardLayout
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div<{ $themeMode?: ThemeMode }>`
  /* 设置滚动条的整体样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置滚动条宽度 */
  }

  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? '#2c2c2c' : '#FAFAFA'};
  }

  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? '#6b6b6b' : '#C1C1C1'};
  }

  /* 设置鼠标悬停在滚动条上的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? '#939393' : '##7D7D7D'};
  }
`

export default DashBoardLayout
