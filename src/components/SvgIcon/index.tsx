interface PropsType {
  prefix?: string
  name: string
  color?: string
  size?: number | string
}

import styles from './index.module.scss'

const SvgIcon: React.FC<PropsType> = ({
  prefix = '#icon',
  name,
  color,
  size = 20,
}) => {
  //   console.log(prefix, name, color, size)

  const getStyle = () => {
    let s = `${size}`
    s = `${s.replace('px', '')}px`
    return {
      fontSize: s,
    }
  }

  return (
    <i className={styles.icon} style={getStyle()}>
      <svg aria-hidden="true">
        <use xlinkHref={`${prefix}-${name}`} fill={color} />
      </svg>
    </i>
  )
}

export default SvgIcon
