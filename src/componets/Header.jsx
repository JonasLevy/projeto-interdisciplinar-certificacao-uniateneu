import React, { use, useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Header = () => {
    const { usuario } = useContext(AppContext)
    const { condominio, nome } = usuario

    return (
        <header className="w-full h-16 bg-slate-900 text-white shadow-lg flex items-center justify-between px-6 z-10 fixed">
            <h1 className=" font-bold tracking-wide">{condominio}</h1>
            <h1 className=" font-bold tracking-wide">{nome}</h1>
        </header>
    );

};

export default Header;