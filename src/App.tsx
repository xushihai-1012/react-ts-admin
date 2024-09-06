import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.scss'
import { App as AntdApp, ConfigProvider } from 'antd'
import useSettingsStore from '@/stores/settings'

import zh_ch from 'antd/locale/zh_CN'

function App() {
  const { colorPrimary } = useSettingsStore()

  // 获取环境变量
  //   console.log(import.meta.env.VITE_APP_BASE_URL)

  return (
    <ConfigProvider
      locale={zh_ch}
      theme={{
        cssVar: true, //开启css变量
        hashed: false, // 如果你的应用中只存在一个版本的 antd，你可以设置为 false 来进一步减小样式体积。
        token: {
          colorPrimary,
        },
      }}
      componentSize="large"
    >
      <Suspense fallback={<div>loading...</div>}>
        <AntdApp>
          <RouterProvider
            router={router}
            fallbackElement={<div>加载中...</div>}
          ></RouterProvider>
        </AntdApp>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
