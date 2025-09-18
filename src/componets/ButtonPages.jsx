import React from 'react';
import { useNavigate } from 'react-router-dom';

const hover = " hover:bg-slate-600 hover:text-white transition-colors duration-300 ease-in-out "
const shadow = " shadow-md shadow-slate-400 "
const responsive = " w-full sm:w-[250px] "
const dimension = " bg-white text-slate-700 border border-slate-400 px-4 py-4 rounded "
const style = `${dimension} ${hover} ${shadow} ${responsive}`


const ButtonPages = ({ children, name, click }) => {
    const navigateTo = useNavigate();

    return (
        <button
            onClick={() => navigateTo(click)}
            className={style}>
            {children}
            <p className='font-bold'>{name}</p>
        </button>
    );
};

export default ButtonPages;