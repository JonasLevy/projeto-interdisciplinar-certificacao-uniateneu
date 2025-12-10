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
    console.log("sindicoEmCondominiosList: ",sindicoEmCondominiosList)
    console.log("usuario: ", usuario)
    const [condominioSelecionado, setCondominioSelecionado] = useState(sindicoEmCondominiosList[0]?.id)
    console.log("condominioSelecionado: ", condominioSelecionado)


    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);
    console.log("listaMoradorRenderizacao: ",listaMoradorRenderizacao)

    console.log("moradorTemp: ",moradorTemp)

    useEffect(() => {
        if (!condominioSelecionado) return;
        api.get(`/sindico/morador/${condominioSelecionado}`).then((res) => {
            console.log("RES DATA:", res.data);
            setListaMoradorRenderizacao(res.data)
        }).catch((err) => {
            console.log("API error: ", err.response)
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
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    inquilino={moradorTemp}
                    listCondomonio={sindicoEmCondominiosList}
                />
            </BasicModal>

        </div>
    );
};

export default MoradoresSindico;