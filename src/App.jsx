import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuAside from './componets/MenuAside'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-svh flex p-0 m-0">
      <MenuAside />
      <main className="flex-1 h-full p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  ) 
}

export default App
