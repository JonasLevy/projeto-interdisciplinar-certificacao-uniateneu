import './App.css'
import MenuAside from './componets/MenuAside'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header'
import { useMediaQuery } from '@mui/material';
import { AppProvider } from './context/AppContext';
import PrivateRoute from './componets/PrivateRoute';

function App() {


  return (

    <div className="w-full h-svh flex p-0 m-0">
      <MenuAside />
      <Header />
      <main className="flex-1 bg-gray-100 mt-16">
        <Outlet />

      </main>
    </div>
  )
}

export default App
