import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormPortal from '../../componets/FormPortal';
import CardPortal from '../../componets/CardPortal';
import { AppContext } from '../../context/AppContext';

const PortalTransparencia = () => {
    const { gastos, removerGasto } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);
    const [listaGastos, setListaGastos] = useState([]);
    const [gastoTemp, setGastoTemp] = useState(null);

    useEffect(() => {
        setListaGastos(gastos);
    }, [gastos]);

    const clickOpenModal = () => {
        setTipoModal('Criar');
        setOpenModal(!openModal);
    };

    const clickEditar = (gasto) => {
        setGastoTemp(gasto);
        setTipoModal('Editar');
        setOpenModal(!openModal);
    };

    const criarGasto = (g) => {
        setListaGastos([g, ...listaGastos]);
    };

    const removerGastoLocal = (id) => {
        removerGasto(id);
        setListaGastos(listaGastos.filter(g => g.id !== id));
    };

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Portal da Transparência</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Buscar"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <section className='p-8 flex flex-col gap-4'>
                {listaGastos?.map((gasto, i) => (
                    <CardPortal gasto={gasto} key={gasto?.id ?? i} clickEditar={() => clickEditar(gasto)} clickRemover={() => removerGastoLocal(gasto.id)} />
                ))}
            </section>

            <BasicModal openModal={openModal} title={`${tipoModal} Gasto`} close={() => setOpenModal(false)}>
                <FormPortal tipoUsuario={'Sindico'} criarOuEditar={tipoModal} fecharModal={() => setOpenModal(!openModal)} criarGasto={criarGasto} gasto={gastoTemp} />
            </BasicModal>
        </div>
    )
}

export default PortalTransparencia;
