import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
} from 'react-router-dom'
// import App from '@/App'
// import Layout from '@/Layout'
// import Login from '@/pages/Login'
// 懒加载
const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(async () => await import('@/pages/Home'))
const Landing = lazy(async () => await import('@/pages/Landing'))
const Layout = lazy(async () => await import('@/Layout'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />, //重定向
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Landing',
        element: <Landing />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASE_URL,
})
