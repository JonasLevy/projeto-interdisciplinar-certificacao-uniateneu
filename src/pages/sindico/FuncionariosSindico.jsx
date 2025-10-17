import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';

const FuncionariosSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');

    const handleClick = () => {
        setNome(null)
        setEmail(null)
        setTelefone(null)
        setCpf(null)
        setCargo(null)

        setOpenModal(false)
    }

    const submitForm = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    return (
        <div className="min-h-full w-full ">
            <h1>Funcionarios</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastro de funcionario" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className="flex flex-col gap-4">
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        variant="outlined"
                    />
                    
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Cargo"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        variant="outlined"
                    />

                    <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '
                        style={{display: "flex", flexDirection: "row", gap: "70px"}}>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>
                    
                        <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
                    </form>
                    
                </form>
            </BasicModal>

        </div>
    );
};

export default FuncionariosSindico;