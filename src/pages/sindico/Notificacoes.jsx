import { Button, Fab, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormNotificacoes from '../../componets/FormNotificacoes';
import CardNotificacao from '../../componets/CardNotificacao';
import { AppContext } from '../../context/AppContext';

const Notificacoes = () => {
    const { notificacao } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    
    const [tipoModal, setTipoModal] = useState(null);

    const [listaNotificacaoRenderizacao, setListaNotificacaoRenderizacao] = useState([]);

    useEffect(() => {
        setListaNotificacaoRenderizacao(notificacao)
    }, [notificacao])
    const [notificacaoTemp, setNotificacaoTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (notificacao) => {
        setNotificacaoTemp(notificacao)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarNotificacao = (notificacao) => {
        setListaNotificacaoRenderizacao([notificacao, ...listaNotificacaoRenderizacao])
    }


    return ( 
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Notificações</h1>
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

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <section className='p-8 flex flex-col gap-4'>
                {listaNotificacaoRenderizacao?.map((notificacao, i) => (
                    <CardNotificacao notificacao={notificacao} clickEditar={() => clickEditar(notificacao)} />
                ))
                }

            </section>

            <BasicModal 
                openModal={openModal} 
                title={`${tipoModal} Notificação`} 
                close={() => setOpenModal(false)}>
                
                <FormNotificacoes 
                    tipoUsuario={"Sindico"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarNotificacao={criarNotificacao}
                    notificacao={notificacaoTemp}
                />
                
            </BasicModal>
        </div>
    );
};

export default Notificacoes;