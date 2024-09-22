import { CSSProperties } from 'react'

type Props = {
  className?: string
  style?: CSSProperties
  icon: string
  prefix?: string
  size?: string
  color?: string
}

const IconSvg: React.FC<Props> = ({
  className,
  style,
  icon,
  prefix = 'icon',
  size = '1em',
  color = 'currentColor',
}) => {
  const symbolId = `#${prefix}-${icon}`
  const svgStyle: CSSProperties = {
    verticalAlign: 'middle',
    width: size,
    height: size,
    color,
    ...style,
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`anticon fill-current inline-block h-[1em] w-[1em] overflow-hidden outline-none ${className}`}
      style={svgStyle}
    >
      <use xlinkHref={symbolId} fill="currentColor"></use>
    </svg>
  )
}

export default IconSvg
