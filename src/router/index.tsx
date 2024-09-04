import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
// import Login from '@/pages/Login'
// 懒加载
const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/home'} />, //重定向
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default routes
