import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardApartamentos from '../../componets/CardApartamentos';
import FormApt from '../../componets/FormApt';


const Apartamentos = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [apt, setApt] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (idReserva) => {
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Apartamentos</h1>
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
                <CardApartamentos clickEditar={() => clickEditar()} />
            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Apartamento`} close={() => setOpenModal(false)}>
                <FormApt
                    tipoUsuario="Sindico"
                    objetoReserva={apt}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                />

            </BasicModal>

        </div>

    );
};

export default Apartamentos;