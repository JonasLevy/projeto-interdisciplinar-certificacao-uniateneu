import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CardNotificacao from '../../componets/CardNotificacao';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function NotificacaoMorador() {
    const { notificacao, usuarioLogado } = useContext(AppContext);

    return (
        <div className="notificacao-container ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between mb-8'
                        >
                            <h1>Notificações</h1>
                            
                        </div>
            <div className="notificacoes-lista space-y-4 p-4">
                {notificacao?.filter(notif=>notif.destinatario == usuarioLogado.id ).map((notificacao, i) => (
                    <CardNotificacao key={i} notificacao={notificacao} clickEditar={() => clickEditar(notificacao)} />
                ))}
            </div>
        </div>
    );
}