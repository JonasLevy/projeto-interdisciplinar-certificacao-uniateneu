import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal.jsx';
import BasicModal from '../../componets/Modal.jsx';
import SearchIcon from '@mui/icons-material/Search';
import CardAmbientes from '../../componets/cards/CardAmbientes.jsx';
import FormAmbientes from '../../componets/FormAmbientes.jsx';
import api from "../../api.js"
import { AppContext } from '../../context/AppContext.jsx';
import SelectSmall from '../../componets/Select.jsx';

const AmbientesSindico = () => {
    const { usuario } = useContext(AppContext);
    const { sindicoEmCondominiosList } = usuario;
    const [condominioSelecionado, setCondominioSelecionado] = useState(sindicoEmCondominiosList[0]?.id);
    console.log("usuario: ", usuario);
    console.log("condominioSelecionado: ", condominioSelecionado);
    

    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaAmbienteRenderizacao, setlistaAmbienteRenderizacao] = useState([]);
    const [ambienteTemp, setAmbienteTemp] = useState(null);

    
    useEffect(() => {
        if (!condominioSelecionado) return;
        api.get(`/sindico/ambiente/${condominioSelecionado}`).then((res) => {
            setlistaAmbienteRenderizacao(res.data.ambientes)
        }).catch((err) => {
            console.log("err.response: ", err.response)
        })
    }, [condominioSelecionado, usuario])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setAmbienteTemp(listaAmbienteRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Ambientes </h1>
                <SelectSmall list={sindicoEmCondominiosList} change={setCondominioSelecionado} />
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
                {listaAmbienteRenderizacao?.map((ambientes, i) => (
                    <CardAmbientes ambientes={ambientes} clickEditar={() => clickEditar(i)} />
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Ambiente`} close={() => setOpenModal(false)}>
                <FormAmbientes
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    inquilino={ambienteTemp}
                    listCondomonio={sindicoEmCondominiosList}
                />
            </BasicModal>

        </div>
    );
};

export default AmbientesSindico;