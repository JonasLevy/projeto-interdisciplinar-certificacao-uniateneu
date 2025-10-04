import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';

const MoradoresSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    //Variaveis do morador
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    //Variaveis do Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");

    //Validação campo Cpf
    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    //Validação compo telefone
    const handleChangeTelefone = (e) => {
        let digits = e.target.value.replace(/\D/g, "").slice(0, 11);

        if (digits.length <= 10) {
            digits = digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            digits = digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }

        setTelefone(digits);
    }

    const handleClick = () => {
        setNome('');
        setCpf('');
        setTelefone('');
        setEmail('')
        setApt('');
        setTorre('');

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);
    }

    return (
        <div className="min-h-full w-full ">
            <h1>Moradores</h1>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastrar Morador" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className="border p-3 flex flex-col gap-5 mb-3 ">
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        variant="outlined"
                        size='small'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Email"
                        placeholder='Ex: MariaSilva@gmail.com'
                        variant="outlined"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        size='small'
                        variant="outlined"
                        placeholder='Somente os numeros'
                        value={cpf}
                        onChange={handleChangeCpf}

                    />
                    <TextField
                        label="Telefone"
                        size='small'
                        variant="outlined"
                        value={telefone}
                        onChange={(handleChangeTelefone)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Apartemento"
                        variant="outlined"
                        size='small'
                        value={apt}
                        onChange={(e) => setApt(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Torre"
                        variant="outlined"
                        size='small'
                        value={torre}
                        onChange={(e) => setTorre(e.target.value)}
                    />

                    <div className='flex justify-between'>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>

                        <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                        </Button>
                    </div>
                </form>
            </BasicModal>

        </div>
    );
};

export default MoradoresSindico;