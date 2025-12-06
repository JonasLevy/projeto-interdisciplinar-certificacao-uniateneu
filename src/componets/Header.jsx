import React, { use, useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Header = () => {

    return (
        <header className="w-full h-16 bg-slate-900 text-white shadow-lg flex items-center justify-between px-6 z-10 fixed">
            <h1 className=" font-bold tracking-wide"></h1>
            <h1 className=" font-bold tracking-wide"></h1>
        </header>
    );
};

export default Header;