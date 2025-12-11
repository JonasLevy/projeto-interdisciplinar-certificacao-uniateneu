import React, { useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext';



const ReservasMorador = () => {
    const { reservas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [listaReservaRenderizacao, setListaReservaRenderizacao] = useState([]);
    const [reservaTemp, setReservaTemp] = useState(null);

    const criarReserva = (reserva) => {
        setListaReservaRenderizacao([reserva, ...listaReservaRenderizacao])
    }

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    // ## Função para abrir o modal no modo editar reserva
    const clickEditar = (id) => {
        setTipoModal("Editar");
        setReservaTemp(listaReservas[id])
        setOpenModal(!openModal);
    // fazer logica para buscar a reserva pelo idReserva
    //setIdReserva(idReserva);
    }


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
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8 gap-4 flex flex-col'>
                {reservas?.map((reserva, i) => (
                    <CardReserva reserva={reserva} key={reserva.id} clickEditar={() => clickEditar(i)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} /> {/* ##função  */}

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="morador" // Passa o tipo de usuário para o formulário
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)}
                    criarReserva={criarReserva}
                    reserva={reservaTemp}/>
            </BasicModal >
        </div>
    );
};

export default ReservasMorador;