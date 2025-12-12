import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const FormMoradores = ({ tipoUsuario, criarOuEditar, fecharModal, criarMorador, inquilino }) => {

    const { addUsuario, editarUsuario } = useContext(AppContext);

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    //Variaveis do morador
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
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
        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novoUsuario = {
            id: uuidv4(),
            nome,
            email,
            senha,
            cpf,
            tipo: 'morador',
            telefone,
            apt,
            torre
        }

        if (editar) {
            editarUsuario(inquilino.id, novoUsuario);
        }
        editar || addUsuario(novoUsuario);
        fecharModal();

    }

    useEffect(() => {
        if (editar) {
            setNome(inquilino.nome);
            setEmail(inquilino.email);
            setCpf(inquilino.cpf);
            setSenha(inquilino.senha)
            setTelefone(inquilino.telefone);
            setApt(inquilino.apt);
            setTorre(inquilino.torre);
        }
    }, [])

    return (
        <form onSubmit={submitForm} className="border p-3 flex flex-col gap-5 mb-3 ">
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Email"
                placeholder='Ex: MariaSilva@gmail.com'
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="CPF"
                size='small'
                variant="outlined"
                placeholder='Somente os numeros'
                value={cpf}
                onChange={handleChangeCpf}
            />

            <TextField
                required
                id="outlined-password-input"
                label="Senha"
                size='small'
                type="password"
                autoComplete="current-password"
                sx={{ minWidth: 300 }}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />


            <TextField
                required
                label="Telefone"
                size='small'
                variant="outlined"
                value={telefone}
                onChange={(handleChangeTelefone)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Apartemento"
                variant="outlined"
                size='small'
                value={apt}
                onChange={(e) => setApt(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    Salvar
                </Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormMoradores