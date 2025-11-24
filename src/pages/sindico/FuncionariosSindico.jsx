import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardFuncionarios from '../../componets/cards/CardFuncionarios';
import FormFuncionarios from '../../componets/FormFuncionarios';


const FuncionariosSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaFuncionarioRenderizacao, setListaFuncionarioRenderizacao] = useState([]);
    const [funcionarioTemp, setFuncionarioTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setFuncionarioTemp(listaFuncionarioRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

   const criarFuncionario = (funcionario) => {
        setListaFuncionarioRenderizacao([funcionario, ...listaFuncionarioRenderizacao])
    }

    console.log(funcionarioTemp);

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Funcionarios</h1>
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
                {listaFuncionarioRenderizacao?.map((funcionario, i) => (
                    <CardFuncionarios funcionario={funcionario} clickEditar={() => clickEditar(i)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Funcionairo`} close={() => setOpenModal(false)}>
                <FormFuncionarios 
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarFuncionario={criarFuncionario}
                    funcionario={funcionarioTemp} 
                />
            </BasicModal>

        </div>
    );
};

export default FuncionariosSindico;