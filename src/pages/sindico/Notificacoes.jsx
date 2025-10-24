import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';

const Notificacoes = () => {
    const [openModal, setOpenModal] = useState(false);

    const [morador, setMorador] = useState('')
    const [notificacao, setNotificacao] = useState('')

    const handleClick = () => {
        setMorador(null);
        setNotificacao(null);

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    return (
        <div className="min-h-full w-full ">
            <h1>Notificações</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Nova notificação" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
                    <TextField
                        id="outlined-basic"
                        label="Morador"
                        value={morador}
                        onChange={(e) => setMorador(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Notificação"
                        value={notificacao}
                        onChange={(e) => setNotificacao(e.target.value)}
                        variant="outlined"
                        multiline
                        minRows={5}
                        maxRows={10}
                    />
                    <div className='flex flex-col justify-between gap-4'>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>
                        <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
                    </div>
                </form>
            </BasicModal>
        </div>
    );
};

export default Notificacoes;