import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom'
// 懒加载
// const Login = lazy(() => import('@/pages/Login'))
// const Home = lazy(async () => await import('@/pages/Home'))
// const Landing = lazy(async () => await import('@/pages/Landing'))
// const Layout = lazy(async () => await import('@/Layout'))

// const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <Navigate to={'/home'} />, //重定向
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'Home',
//         element: <Home />,
//       },
//       {
//         path: 'Landing',
//         element: <Landing />,
//       },
//     ],
//   },
// ]

// export const router = createBrowserRouter(routes, {
//   basename: import.meta.env.VITE_APP_BASE_URL,
// })
import { AppRouteObject } from '@/types/router'
import DashboardLayout from '@/Layout/Dashboard'

const LoginRoute: AppRouteObject = {
  path: '/login',
  Component: lazy(() => import('@/pages/Login')),
}

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env

const Router = () => {
  const asyncRoutes: AppRouteObject = {
    path: '/',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { index: true, element: <Navigate to={HOMEPAGE} replace></Navigate> },
    ],
  }

  const routes = [asyncRoutes, LoginRoute]

  const router = createBrowserRouter(routes as RouteObject[])

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
