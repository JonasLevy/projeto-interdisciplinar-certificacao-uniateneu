import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/CardMorador';

const MoradoresPortaria = () => {
    const [listaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    const clickEditar = (id) => {
        setMoradorTemp(listaMoradorRenderizacao[id])
    }
    
    console.log(moradorTemp)

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Moradores</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {listaMoradorRenderizacao?.map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickEditar(i)}/>
                ))
                }
            </section>
        </div>
    );
};

export default MoradoresPortaria;