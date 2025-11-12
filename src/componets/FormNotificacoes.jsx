import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect } from 'react';

const FormNotificacoes = ({ tipoUsuario, criarOuEditar, fecharModal, criarNotificacao, notificacao }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";
    
    
    const [destinatario, setDestinatario] = useState('');
    const [nomeMorador, setNomeMorador] = useState('')
    const [mensagem, setMensagem] = useState('')


    const handleClick = () => {
        setNomeMorador(null);
        setMensagem(null);

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();

        const notificacao = {
            nomeMorador,
            mensagem,
            destinatario
        }

        criarNotificacao(notificacao);
    }

    useEffect(() => {
        if(editar) {
            setNomeMorador(notificacao.nomeMorador);
            setMensagem(notificacao.mensagem)
        }
    }, [])


    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                select
                label='Destinatario'
                value={destinatario}
                onChange={(e) => setDestinatario(e.target.value)}
            >
                <MenuItem value={"Um"}>Morador</MenuItem>
                <MenuItem value={"Todos"}>Todos os Moradores</MenuItem>

            </TextField>

            <TextField
                id="outlined-basic"
                label="Nome Morador"
                value={nomeMorador}
                onChange={(e) => setNomeMorador(e.target.value)}
                variant="outlined"
                disabled={destinatario === "Todos"}
                required={destinatario === "Um"}
            />

            <TextField
                required
                id="outlined-basic"
                label="Notificação"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                variant="outlined"
                multiline
                minRows={5}
                maxRows={10}
            />
            <div className='flex flex-col justify-between gap-4'>
                <Button 
                    variant="contained" 
                    type='submit' 
                    color='success'>
                    {(editar && !sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button 
                    variant="contained"
                    color='error' 
                    onClick={handleClick} > 
                    Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormNotificacoes