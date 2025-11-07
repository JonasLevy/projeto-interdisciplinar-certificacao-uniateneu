import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/CardMorador';
import FormMoradores from '../../componets/FormMoradores';

const MoradoresSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setMoradorTemp(listaMoradorRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarMorador = (morador) => {
        setListaMoradorRenderizacao([morador, ...listaMoradorRenderizacao])
    }

    console.log(moradorTemp)

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Moradores </h1>
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
            <section className='p-8'>
                {listaMoradorRenderizacao?.map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickEditar(i)}/>
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Morador`} close={() => setOpenModal(false)}>
                <FormMoradores 
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarMorador={criarMorador}
                    inquilino={moradorTemp}
                />
            </BasicModal>

        </div>
    );
};

export default MoradoresSindico;