import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import api from "../api"
import SelectSmall from './Select';

const FormMoradores = ({ tipoUsuario, criarOuEditar, fecharModal, criarMorador, inquilino, listCondomonio }) => {

    //Variaveis do morador
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idCondominio, setIdCondominio] = useState('');

    //Variaveis do Apt e torre
    const [apartamento, setApt] = useState("");
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

    useEffect(() => {
        if (criarOuEditar == "Editar") {
            setNome(inquilino.nome);
            setEmail(inquilino.email);
            setCpf(inquilino.cpf);
            setTelefone(inquilino.telefone);
            setApt(inquilino.apartamento);
            setTorre(inquilino.torre);

        }
    })

    const cancelar = () => {
        setNome('');
        setCpf('');
        setTelefone('');
        setEmail('')
        setApt('');
        setTorre('');
        setSenha('')
        setIdCondominio('')

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const body = {
            nome,
            email,
            senha,
            cpf,
            telefone,
            idCondominio,
            apartamento,
            torre
        }

        api.post("/sindico/criarmorador", body).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })

        fecharModal()
        //criarMorador(body)
    }

    return (
        <form onSubmit={submitForm} className="border p-3 flex flex-col gap-5 mb-3 ">
            <SelectSmall list={listCondomonio} change={setIdCondominio} />

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
                label="Senha"
                placeholder='senha'
                variant="outlined"
                size="small"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
                value={apartamento}
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

                <Button variant="contained" color='error' onClick={cancelar}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormMoradores