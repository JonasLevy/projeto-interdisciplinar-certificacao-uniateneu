import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';
import { AppContext } from '../../context/AppContext';

const EncomendasMorador = () => {
    const { usuarioLogado, encomendas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaEncomendaRenderizacao, setListaEncomendaRenderizacao] = useState([]);
    const [encomendaTemp, setEncomendaTemp] = useState(null);
    
    useEffect(() => {
        setListaEncomendaRenderizacao(encomendas)
    }, [encomendas])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (encomenda) => {
        setEncomendaTemp(encomenda)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarEncomenda = (encomenda) => {
        setListaEncomendaRenderizacao([encomenda, ...listaEncomendaRenderizacao]);
    }


    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Encomendas</h1>

            </div>
            <section className='p-8'>
                {encomendas?.filter((encom => encom.idUsuario == usuarioLogado.id)).map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(encomenda)} />
                ))
                }

            </section>

            <ButtonModal click  ={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Encomenda`} close={() => setOpenModal(false)}>
                <FormEncomendas 
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarEncomenda={criarEncomenda}
                    encomenda={encomendaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default EncomendasMorador;