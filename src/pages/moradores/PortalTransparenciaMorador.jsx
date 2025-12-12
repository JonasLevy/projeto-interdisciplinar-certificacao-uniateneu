import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardPortal from '../../componets/CardPortal';
import { AppContext } from '../../context/AppContext';

const PortalTransparenciaMorador = () => {
    const { gastos } = useContext(AppContext);
    const [listaGastos, setListaGastos] = useState([]);

    useEffect(() => {
        setListaGastos(gastos);
    }, [gastos]);

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Portal da Transparência</h1>
                
            </div>

            <section className='p-8 flex flex-col gap-4'>
                {listaGastos?.map((gasto, i) => (
                    <CardPortal gasto={gasto} key={gasto?.id ?? i} />
                ))}
            </section>
        </div>
    )
}

export default PortalTransparenciaMorador;
