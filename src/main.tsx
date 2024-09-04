import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import routes from './router'

import 'normalize.css'
// 引入图标
import 'virtual:svg-icons-register'
// import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
