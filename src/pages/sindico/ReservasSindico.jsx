import React, { useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/cards/CardReserva';
import FormReserva from '../../componets/FormReserva';


const ReservasSindico = () => {
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar
    
    const [listaReservaRenderizacao, setListaReservaRenderizacao] = useState([]);
    const [reservaTemp, setReservaTemp] = useState(null);

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    // ## Função para abrir o modal no modo editar reserva
    const clickEditar = (id) => {
        setReservaTemp(listaReservaRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    // fazer logica para buscar a reserva pelo idReserva
    //setIdReserva(idReserva);
    }

    const criarReserva = (reserva) => {
        setListaReservaRenderizacao([reserva, ...listaReservaRenderizacao])
    }

    console.log(reservaTemp);

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
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
                {listaReservaRenderizacao?.map((reserva, i) => (
                    <CardReserva reserva={reserva} clickEditar={() => clickEditar(i)} />
                ))}
                
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} /> {/* ##função  */}

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="Sindico" // Passa o tipo de usuário para o formulário
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)}
                    criarReserva={criarReserva}
                    reserva={reservaTemp}
                 />
            </BasicModal >
        </div >
    );
};

export default ReservasSindico;