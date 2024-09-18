import { Icon } from '@iconify/react'
import styled from 'styled-components'
import type { IconProps } from '@iconify/react'

interface Props extends IconProps {
  size?: IconProps['width']
}

const Iconify: React.FC<Props> = ({
  icon,
  size = '1em',
  className = '',
  ...other
}) => {
  return (
    <StyledIconify className="anticon">
      <Icon
        icon={icon}
        width={size}
        height={size}
        className={`m-auto ${className}`}
        {...other}
      ></Icon>
    </StyledIconify>
  )
}

const StyledIconify = styled.div`
  display: inline-flex;
  vertical-align: middle;
  svg {
    display: inline-block;
  }
`

export default Iconify
