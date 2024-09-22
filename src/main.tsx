import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import worker from './_mock'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'

import 'normalize.css'
// 引入图标
import 'virtual:svg-icons-register'
import './index.scss'

if (import.meta.env.MODE === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' })
}

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重试次数
      gcTime: 300_000, // 缓存有效期 5m
      staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<div>加载中...</div>}>
          <App />
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
