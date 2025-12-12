import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import { v4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const FormAmbientes = ({ criarOuEditar, fecharModal, ambiente, listCondomonio }) => {

    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');
    const [idCondominio, setIdCondominio] = useState('');

    const { adicionarAmbientes, editarAmbiente } = useContext(AppContext)

    useEffect(() => {
        if (criarOuEditar == "Editar") {
            setNome(ambiente.nome);
            setInfo(ambiente.info);
        }
    }, [])

    console.log(ambiente)
    const handleClick = () => {
        setNome('');
        setInfo('');
        setIdCondominio('')

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novoAmbiente = {
            nome,
            info,
            id: v4(),
        }

        if (criarOuEditar == "Editar") {
            editarAmbiente(ambiente.id, novoAmbiente)
        }

        criarOuEditar == "Editar" || adicionarAmbientes(novoAmbiente)
        fecharModal()
        //criarMorador(body)
    }

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