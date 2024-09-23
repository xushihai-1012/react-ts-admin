/**
 * 动态面包屑解决方案：https://github.com/MinjieChang/myblog/issues/29
 */

import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { Iconify } from '@/components/icon'
import { useMatches, Link } from 'react-router-dom'

const BreadCrumb: React.FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState([])
  const matches = useMatches()

  useEffect(() => {})

  return (
    <Breadcrumb
      items={breadCrumbs}
      className="!text-sm"
      separator={<Iconify icon="ph:dot-uotone" />}
    />
  )
}

export default BreadCrumb
