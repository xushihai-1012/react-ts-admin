import { useThemeToken } from '@/theme/hooks'
import HeaderSimple from '../components/HeaderSimple'

type Props = {
  children: React.ReactNode
}

const SimpleLayout: React.FC<Props> = ({ children }: Props) => {
  const { colorBgElevated, colorTextBase } = useThemeToken()

  return (
    <div
      className="flex h-screen w-full flex-col"
      style={{ color: colorBgElevated, background: colorTextBase }}
    >
      <HeaderSimple></HeaderSimple>
      {children}
    </div>
  )
}

export default SimpleLayout
