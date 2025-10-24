import React, { useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';



const ReservasMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar
    const [reserva, setReserva] = useState(null); // Quado u usuario clicar em editar, armazena o objeto da reserva

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    // ## Função para abrir o modal no modo editar reserva
    const clickEditar = (idReserva) => {
        setTipoModal("Editar");
        setOpenModal(!openModal);
    // fazer logica para buscar a reserva pelo idReserva
    //setIdReserva(idReserva);
    }


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between items-center'
            >
                <h1>Reservas</h1>
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
                <CardReserva clickEditar={() => clickEditar()} />
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} /> {/* ##função  */}

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="Morador" // Passa o tipo de usuário para o formulário
                    objetoReserva={reserva}
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)} />
            </BasicModal >
        </div>
    );
};

export default ReservasMorador;