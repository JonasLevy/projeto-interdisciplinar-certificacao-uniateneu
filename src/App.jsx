import './App.css'
import MenuAside from './componets/MenuAside'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './componets/Header'
import { useMediaQuery } from '@mui/material';
import { AppContext, AppProvider } from './context/AppContext';
import { useContext, useEffect } from 'react';

function App() {

  return (
    <AppProvider>
      <div className="w-full h-svh flex p-0 m-0">
        <MenuAside />
        <Header />
        <main className="flex-1 bg-gray-100 overflow-y-auto mt-16">
          <Outlet />
        </main>
      </div>
    </AppProvider>
  )
}

export default App
