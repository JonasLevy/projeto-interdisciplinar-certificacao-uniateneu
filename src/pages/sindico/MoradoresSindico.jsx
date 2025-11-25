import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/cards/CardMorador';
import FormMoradores from '../../componets/FormMoradores';
import api from "../../api"
import { AppContext } from '../../context/AppContext';
import SelectSmall from '../../componets/Select';

const MoradoresSindico = () => {
    const { usuario } = useContext(AppContext)
    const { sindicoEmCondominiosList } = usuario
    console.log(sindicoEmCondominiosList)
    console.log(usuario)
    const [condominioSelecionado, setCondominioSelecionado] = useState(sindicoEmCondominiosList[0]?.id)

    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    useEffect(() => {
        api.get(`/sindico/moradores/${condominioSelecionado}`).then((res) => {
            setListaMoradorRenderizacao(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
    }, [condominioSelecionado, usuario])

    const clickOpenModalCriar = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickOpenModalEditar = (indice) => {
        setMoradorTemp(listaMoradorRenderizacao[indice])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarMorador = (morador) => {
        setListaMoradorRenderizacao([morador, ...listaMoradorRenderizacao])
    }

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Moradores </h1>
                <SelectSmall list={sindicoEmCondominiosList} change={setCondominioSelecionado} />
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
                {listaMoradorRenderizacao?.map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickOpenModalEditar(i)} />
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModalCriar()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Morador`} close={() => setOpenModal(false)}>
                <FormMoradores
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarMorador={criarMorador}
                    inquilino={moradorTemp}
                    listCondomonio={sindicoEmCondominiosList}
                />
            </BasicModal>

        </div>
    );
};

export default MoradoresSindico;