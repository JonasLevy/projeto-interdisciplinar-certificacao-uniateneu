import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormNotificacoes = ({ tipoUsuario, criarOuEditar, fecharModal, criarNotificacao, notificacao }) => {

    const { usuarios, adicionarNotificacao, editarNotificação } = useContext(AppContext)

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


        const novaNotificacao = {
            id: v4(),
            mensagem,
            destinatario
        }


        if (editar) {
            return editarNotificação(notificacao.id, { mensagem, destinatario })
        }
        adicionarNotificacao(novaNotificacao)
    }



    useEffect(() => {
        if(editar) {
            setDestinatario(notificacao.destinatario);
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
                <MenuItem value={"todos"}>"Todos"</MenuItem>
                {usuarios?.filter(user => user.tipo == "morador").map(user => {
                    return (
                        <MenuItem value={user.id}>{user.nome}</MenuItem>

                    )
                })}
            </TextField>


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
                    Salvar
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