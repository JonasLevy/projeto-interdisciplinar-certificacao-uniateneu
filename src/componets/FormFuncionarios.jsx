import { Button, Fab, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const FormFuncionarios = ({ tipoUsuario, criarOuEditar, fecharModal, criarFuncionario, funcionario }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

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

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();

        const funcionario = {
            nome,
            email,
            telefone,
            cpf,
            cargo
        }

        criarFuncionario(funcionario)
    }

    useEffect(() => {
        if (editar) {
            setNome(funcionario.nome);
            setEmail(funcionario.email);
            setTelefone(funcionario.telefone);
            setCpf(funcionario.cpf);
            setCargo(funcionario.tipo);
        }
    }, []);

    return (
        <form onSubmit={submitForm} className="border flex flex-col gap-4 p-4">
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                variant="outlined"
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    {(editar && !sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
            </div>

        </form>
    )
}

export default FormFuncionarios