import { NavLink } from 'react-router-dom'
import { useThemeToken } from '@/theme/hooks'
import { Iconify } from '../icon'

interface Props {
  size?: number | string
}

const Logo: React.FC<Props> = ({ size = 50 }) => {
  const { colorPrimary } = useThemeToken()

  return (
    <NavLink to={'/'}>
      <Iconify
        icon="solar:code-square-bold"
        color={colorPrimary}
        size={size}
      ></Iconify>
    </NavLink>
  )
}

export default Logo
