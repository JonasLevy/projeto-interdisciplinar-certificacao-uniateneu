import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';

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
            <h1>Apartamentos</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastro de apartamento" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 ' 
                style={{flexDirection: "row", padding: "10px", Radios: "0px"}}>
                    
                    <TextField
                    id="outlined-basic"
                    label="Andar"
                    value={andar}
                    onChange={(e) => setAndar(e.target.value)}
                    variant="outlined"
                    sx={{width: 100}}
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Numero AP" 
                    value={apartamento}
                    onChange={(e) => setApartamento(e.target.value)}
                    variant="outlined"
                    sx={{width: 100}}
                    />
                    
                    <TextField 
                    id="outlined-basic" 
                    label="Torre/bloco"
                    value={torre}
                    onChange={(e) => setTorre(e.target.value)}
                    variant="outlined"
                    sx={{width: 100}}
                    />
                </form>

                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '
                    style={{display: "flex", flexDirection: "row", gap: "70px"}}>
                    <Button variant="contained" type='submit' color='success'>Confirmar</Button>
                    
                    <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
                </form>
            </BasicModal>

        </div>
        
     );
};

export default Apartamentos;