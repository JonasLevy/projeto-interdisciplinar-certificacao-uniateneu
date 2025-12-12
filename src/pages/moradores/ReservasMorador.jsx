import React, { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext';

const ReservasMorador = () => {
    const { usuarioLogado, reservas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [reservasTemp, setReservasTemp] = useState(null); // Quado u usuario clicar em editar, armazena o objeto da reserva
    const [listaReservas, setListasReservas] = useState([])

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        const buscarReserva = reservas.find(reserv => reserv.id == id)
        setReservasTemp(buscarReserva)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Reservas</h1>

            </div>
            <section className='p-8'>
                {reservas?.filter((res => res.idUsuario == usuarioLogado.id)).map((reserva, i) => (
                    <CardReserva reserva={reserva} clickEditar={() => clickEditar(reserva.id)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="Morador" // Passa o tipo de usuário para o formulário
                    objetoReserva={reservas}
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    reserva={reservasTemp}
                    fecharModal={() => setOpenModal(!openModal)} />
            </BasicModal >
        </div>
    );
};

export default ReservasMorador;