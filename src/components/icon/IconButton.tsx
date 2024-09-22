import { ButtonProps } from 'antd'
import { CSSProperties, ReactNode } from 'react'

type Props = {
  style?: CSSProperties
  className?: string
  children: ReactNode
} & ButtonProps

const IconButton: React.FC<Props> = ({
  style,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      style={style}
      className={`flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-hover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton
