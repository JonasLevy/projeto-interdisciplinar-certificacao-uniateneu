import { Button, Card, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardDelivery from '../../componets/CardDelivery';


const DeliveryMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);
    }

        return (
            <div className="min-h-full w-full ">
                <div
                    className='flex  h-16 bg-slate-300 p-3 items-center justify-between items-center'
                >
                    <h1>Delivery</h1>
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
                    <CardDelivery />
                </section>
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