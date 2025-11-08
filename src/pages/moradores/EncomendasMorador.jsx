import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';
// import { data } from 'react-router-dom';

const EncomendasMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = () => {
        // setVisitaTemp(listaVisitasRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

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
                <CardEncomenda clickEditar={() => clickEditar()}/>


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
                />
            </BasicModal>

        </div>

    );
};

export default EncomendasMorador;