import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, IconButton, InputBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormSevico from '../../componets/FormSevico';
import CardServico from '../../componets/CardServico';
import { AppContext } from '../../context/AppContext';


const ServicosMorador = () => {
    const { usuarioLogado, servicos } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([]);
    const [servicoTemp, setServicoTemp] = useState(null);

    useEffect(() => {
        setListaServicoRenderizacao(servicos) 
    }, [servicos])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (servico) => {
        setServicoTemp(servico)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarServico = (servico) => {
        setListaServicoRenderizacao([servico, ...listaServicoRenderizacao]);
    }

    return (
        <div className="min-h-full w-full  gap-4 flex flex-col">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Serviços </h1>
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
                {servicos?.filter((serv => serv.idUsuario == usuarioLogado.id)).map((servico, i) => (
                    <CardServico servico={servico} clickEditar={() => clickEditar(servico)} />
                ))
                }

            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Serviço`} close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarServico={criarServico}
                    servico={servicoTemp}
                />

            </BasicModal >

        </div>
    );
};

export default ServicosMorador;