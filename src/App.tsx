// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.scss'
// import SvgIcon from '@/components/SvgIcon'
import { Outlet } from 'react-router-dom'

function App() {
  //   const [count, setCount] = useState(0)

  // 获取环境变量
  //   console.log(import.meta.env.VITE_APP_BASE_URL)

  return (
    <>
      {/* <SvgIcon name="up" color="red"></SvgIcon>
      <SvgIcon name="notice" color="red"></SvgIcon> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Outlet />
    </>
  )
}

export default App
