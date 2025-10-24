import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardFuncionarios from '../../componets/CardFuncionarios';


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

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between items-center'
            >
                <h1>Funcionarios</h1>
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
                <CardFuncionarios />
            </section>

            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastro de funcionario" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className="border flex flex-col gap-4 p-4">
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

                    <div className='flex flex-col justify-between gap-4'>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>
                        <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
                    </div>


                </form>
            </BasicModal>

        </div>
    );
};

export default FuncionariosSindico;