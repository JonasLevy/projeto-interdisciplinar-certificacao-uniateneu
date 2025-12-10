import React, { useContext, useState } from 'react';
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

    const [listaReservasRenderizacao, setListaReservasRenderizacao] = useState([]);
    const [reservasTemp, setReservasTemp] = useState(null);

    const criarReserva = (reserva) => {
        alert("sdasd")
        setListaReservasRenderizacao([...reserva, listaReservasRenderizacao])
    }

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    // ## Função para abrir o modal no modo editar reserva
    const clickEditar = (id) => {
        const buscaReservas = reservas.find(res => res.id == id)
        setReservasTemp(buscaReservas)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    console.log("reservasTemp:", reservasTemp);

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
                {listaReservasRenderizacao?.map((reserva, i) => (
                    <CardReserva reservas={reserva} key={reserva.id} clickEditar={() => clickEditar(i)} />
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
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarEncomenda={criarReserva}
                    encomenda={reservasTemp}/>
            </BasicModal >
        </div>
    );
};

export default ReservasMorador;