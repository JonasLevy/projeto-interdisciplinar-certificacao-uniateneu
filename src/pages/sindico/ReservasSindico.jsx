import React, { useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext';


const ReservasSindico = () => {
    const { reservas } = useContext(AppContext)
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
        const buscarReserva = reservas.find(reserv => reserv.id == id)
        setReservaTemp(buscarReserva)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    // fazer logica para buscar a reserva pelo idReserva
    //setIdReserva(idReserva);
    }

    const criarReserva = (reserva) => {
        setListaReservaRenderizacao([reserva, ...listaReservaRenderizacao]);
    };

    // Ordena a lista para que reservas com status 'pendente' apareçam primeiro
    const listaOrdenada = React.useMemo(() => {
        const base = [...listaReservaRenderizacao, ...(reservas || [])];
        return base.sort((a, b) => {
            const aPend = (a?.status || '').toString().toLowerCase() === 'pendente';
            const bPend = (b?.status || '').toString().toLowerCase() === 'pendente';
            if (aPend && !bPend) return -1;
            if (!aPend && bPend) return 1;
            return 0; // mantém ordem relativa entre itens do mesmo tipo
        });
    }, [listaReservaRenderizacao, reservas]);

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
                {listaOrdenada?.map((reserva, i) => (
                    <CardReserva
                        key={reserva?.id ?? i}
                        reserva={reserva}
                        clickEditar={() => clickEditar(reserva.id)}
                    />
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