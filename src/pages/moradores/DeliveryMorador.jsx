import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';

const DeliveryMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);
    }

        return (
            <div className="min-h-full w-full ">
                <h1>Delivery</h1>
                <ButtonModal click={() => setOpenModal(true)} />
                <BasicModal openModal={openModal} title="Novo pedido" close={() => setOpenModal(false)}>
                    <form onSubmit={submitForm} className="flex flex-col gap-4">
                        <TextField 
                        id="outlined-basic" 
                        label="Empresa" 
                        variant="outlined" 
                        />
                        <TextField 
                        id="outlined-basic" 
                        label="Codigo da entrega" 
                        variant="outlined" 
                        />

                        <TextField 
                        id="outlined-basic" 
                        label="Descrição" 
                        variant="outlined" 
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

    export default DeliveryMorador;