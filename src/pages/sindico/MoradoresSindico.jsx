import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/CardMorador';
import FormMoradores from '../../componets/FormMoradores';
import { AppContext } from '../../context/AppContext';

const MoradoresSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    const { usuarios } = useContext(AppContext)

    useEffect(() => {
        setListaMoradorRenderizacao(usuarios)
    }, [usuarios])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (morador) => {
        setMoradorTemp(morador)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarMorador = (morador) => {
        setListaMoradorRenderizacao([morador, ...listaMoradorRenderizacao])
    }


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
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {usuarios?.filter((user => user.tipo == "morador")).map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickEditar(morador)} />
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