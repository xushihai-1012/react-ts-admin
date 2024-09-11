import {
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import useSettingStore from '@/stores/settings'

// 递归找到匹配的菜单项
const findSelectedKeys = () => {
  const seletctedKeys = []
  let openKeys = []
}

const items = [
  {
    icon: <HomeOutlined />,
    label: <Link to="/landing">首页</Link>,
    key: '/landing',
  },
  {
    icon: <UserOutlined />,
    label: <Link to="/useManagement">用户管理</Link>,
    key: '/useManagement',
  },
  {
    icon: <VideoCameraOutlined />,
    label: '一级菜单',
    key: '/nav',
    children: [
      {
        key: '/nav/sub-1',
        label: <Link to="/nav/sub-1">二级菜单-1</Link>,
      },
      {
        key: '/nav/sub-2',
        label: <Link to="/nav/sub-2">二级菜单-2</Link>,
      },
    ],
  },
]

export default function Sider() {
  const location = useLocation()

  const firstRenderRef = useRef(true)

  const [selectedKeys, setSelectedKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([])

  const collapsed = useSettingStore((state) => state.collapsed)
}
