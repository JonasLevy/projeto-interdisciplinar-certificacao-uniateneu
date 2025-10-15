import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { data } from 'react-router-dom';

const Apartamentos = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dateType, setDateType] = useState("text");
    const [value, setValue] = useState("");
    
    const submitForm = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

     return (
        <div className="min-h-full w-full ">
            <h1>Encomendas</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Nova encomenda" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className="flex flex-col gap-4">
                    <TextField 
                    id="outlined-basic" 
                    label="Empresa" 
                    variant="outlined"
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Descrição" 
                    variant="outlined"
                    />
                    
                    <TextField 
                    id="outlined-basic" 
                    label="Data de recebimento" 
                    type={dateType}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setDateType("date")}
                    onBlur={() => !value && setDateType("text")}
                    />
                    
                    <Button 
                    variant="contained" 
                    type='submit'
                    >
                    Confirmar
                    </Button>
                    
                </form>
            </BasicModal>

        </div>
        
     );
};

export default Apartamentos;