import React, { useContext, useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/cards/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext.jsx';
import SelectSmall from '../../componets/Select.jsx';
import api from "../../api.js"

const ReservasSindico = () => {
    const { usuario } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const { sindicoEmCondominiosList } = usuario;
    const [condominioSelecionado, setCondominioSelecionado] = useState(sindicoEmCondominiosList[0]?.id);
    
    
    const [listaReservaRenderizacao, setListaReservaRenderizacao] = useState([]);
    const [reservaTemp, setReservaTemp] = useState(null);
    
    console.log("condominioSelecionado: ", condominioSelecionado)

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

    console.log("reservaTemp: ",reservaTemp);

    useEffect(() => {
        if (!condominioSelecionado) return;
        api.get(`/sindico/reserva/${condominioSelecionado}`).then((res) => {
            console.log("RESPONSE URL (Network):", `/sindico/reserva/${condominioSelecionado}`);
            console.log("API returned (res.data):", res.data);
            // detalhe por item
            res.data?.forEach((r, idx) => {
                console.log(idx, "-> idCondominio:", r?.ReservaAmbiente?.idCondominio, "idAmbiente:", r?.ReservaAmbiente?.idAmbiente);
            });
            setListaReservaRenderizacao(res.data);
        }).catch((err) => {
            console.log("API error:", err.response ?? err);
        })
    }, [condominioSelecionado, usuario])

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Reservas</h1>
                <SelectSmall list={sindicoEmCondominiosList} change={setCondominioSelecionado}/>
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
                {listaReservaRenderizacao?.map((reserva, i) => (
                    <CardReserva key={reserva.id ?? i} reserva={reserva} clickEditar={() => clickEditar(i)} />
                ))}
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Reserva`} close={() => setOpenModal(false)}>
                <FormReserva
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    reserva={reservaTemp}
                    listCondomonio={sindicoEmCondominiosList}
                />
            </BasicModal>
        </div >
    );
};

export default ReservasSindico;