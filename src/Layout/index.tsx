import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
const Layout: React.FC = () => {
  return (
    <>
      <nav className="text-white h-14 bg-zinc-800 flex items-center px-4">
        布局layout
      </nav>
      <Suspense fallback={<div>加载中...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout
