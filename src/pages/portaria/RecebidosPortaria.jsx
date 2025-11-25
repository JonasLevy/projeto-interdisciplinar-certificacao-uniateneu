import { Button, Fab, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/cards/CardEncomenda';

const RecebidosPortaria = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaEncomendaRenderizacao, setListaEncomendaRenderizacao] = useState([]);
    const [encomendaTemp, setEncomendaTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setEncomendaTemp(listaEncomendaRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarEncomenda = (encomenda) => {
        setListaEncomendaRenderizacao([encomenda, ...listaEncomendaRenderizacao]);
    }

    console.log(encomendaTemp);

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Recebidos</h1>

                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Encomenda"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8 flex flex-col gap-4'> 
                {listaEncomendaRenderizacao?.map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(i)}/>
                ))}

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            
            <BasicModal 
                openModal={openModal}
                title={`${tipoModal} Recebido`} 
                close={() => setOpenModal(false)}>
                
                <FormEncomendas 
                    tipoUsuario={"Portaria"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarEncomenda={criarEncomenda}
                    encomenda={encomendaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default RecebidosPortaria;