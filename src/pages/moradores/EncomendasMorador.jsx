import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';

const EncomendasMorador = () => {

    // Estados para controle de modal e lista de encomendas
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
                <h1>Encomendas</h1>

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
            <section className='p-8 flex flex-col gap-4'> 
                {listaEncomendaRenderizacao?.map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(i)}/>
                ))}

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            
            <BasicModal 
                openModal={openModal}
                title={`${tipoModal} Encomenda`} 
                close={() => setOpenModal(false)}>
                
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