import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal.jsx';
import BasicModal from '../../componets/Modal.jsx';
import SearchIcon from '@mui/icons-material/Search';
import CardAmbientes from '../../componets/CardAmbientes.jsx';
import FormAmbientes from '../../componets/FormAmbientes.jsx';
import { AppContext } from '../../context/AppContext.jsx';

const AmbientesSindico = () => {
    const { usuarioLogado, ambientes } = useContext(AppContext);

    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaAmbienteRenderizacao, setlistaAmbienteRenderizacao] = useState([]);
    const [ambienteTemp, setAmbienteTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        const buscaAmbiente = ambientes.find(amb=> amb.id == id)
        setAmbienteTemp(buscaAmbiente)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarAmbiente = (ambiente) => {
        setlistaAmbienteRenderizacao([ambiente, ...listaAmbienteRenderizacao])
    }

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
            <h1>Ambientes </h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {ambientes?.map((ambientemap, i) => (
                    <CardAmbientes ambientes={ambientemap} clickEditar={() => clickEditar(ambientemap.id)} />
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Ambiente`} close={() => setOpenModal(false)}>
                <FormAmbientes
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarAmbiente={criarAmbiente}
                    inquilino={ambienteTemp}
                 />
            </BasicModal>

        </div>
    );
};

export default AmbientesSindico;