import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuAside from './componets/MenuAside'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex p-0 m-0">
      <MenuAside />
      <main className="flex-1 h-full">
        <Outlet />
      </main>
    </div>
  ) 
}

export default App
