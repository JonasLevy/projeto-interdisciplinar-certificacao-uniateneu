import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import api from "../api.js"
import SelectSmall from './Select.jsx';

const FormAmbientes = ({ criarOuEditar, fecharModal, inquilino, listCondomonio }) => {

    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');
    const [idCondominio, setIdCondominio] = useState('');

    useEffect(() => {
        if (criarOuEditar == "Editar") {
            setNome(inquilino.nome);
            setInfo(inquilino.info);
        }
    },[])

    const handleClick = () => {
        setNome('');
        setInfo('');
        setIdCondominio('')

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const body = {
            nome,
            info,
            idCondominio,
        }

        api.post("/sindico/criarambiente", body).then((res) => {
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
                label="Descrição"
                placeholder='Ex: MariaSilva@gmail.com'
                variant="outlined"
                size="small"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
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

export default FormAmbientes;