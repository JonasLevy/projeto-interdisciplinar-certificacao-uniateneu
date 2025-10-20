import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { data } from 'react-router-dom';

const EncomendasMorador = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dateType, setDateType] = useState("text");

    const [empresa, setEmpresa] = useState('');
    const [dataRecebimento, setDataRecebimento] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleClick = () => {
        setEmpresa(null);
        setDataRecebimento(null);
        setDescricao(null);

        setOpenModal(false);
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

     return (
        <div className="min-h-full w-full ">
            <h1>Encomendas</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Nova encomenda" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
                    <TextField 
                    id="outlined-basic" 
                    label="Empresa" 
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    variant="outlined"
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Data de recebimento" 
                    type={dateType}
                    value={dataRecebimento}
                    onChange={(e) => setDataRecebimento(e.target.value)}
                    onFocus={() => setDateType("date")}
                    onBlur={() => !dataRecebimento && setDateType("text")}
                    />

                    <TextField 
                    id="outlined-basic" 
                    label="Descrição" 
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    variant="outlined"
                    multiline
                    minRows={3}
                    maxRows={10}
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

export default EncomendasMorador;