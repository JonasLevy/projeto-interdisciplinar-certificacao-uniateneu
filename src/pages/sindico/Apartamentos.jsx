import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardApartamentos from '../../componets/CardApartamentos';


const Apartamentos = () => {
    const [openModal, setOpenModal] = useState(false);

    const [andar, setAndar] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [torre, setTorre] = useState('');

    const handleClick = () => {
        setAndar(null);
        setApartamento(null);
        setTorre(null);

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between items-center'
            >
                <h1>Apartamentos</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                <CardApartamentos />
            </section>


            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastro de apartamento" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '
                    style={{ flexDirection: "column", padding: "8px", Radios: "0px" }}>

                    <TextField
                        id="outlined-basic"
                        label="Andar"
                        value={andar}
                        onChange={(e) => setAndar(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Numero AP"
                        value={apartamento}
                        onChange={(e) => setApartamento(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Torre/bloco"
                        value={torre}
                        onChange={(e) => setTorre(e.target.value)}
                        variant="outlined"
                    />
                    <div className='flex w-full justify-between'>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>

                        <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
                    </div>
                </form>
            </BasicModal>

        </div>

    );
};

export default Apartamentos;