import { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, IconButton, InputBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormSevico from '../../componets/FormSevico';
import CardServico from '../../componets/CardServico';

const ServicosSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [servico, setServico] = useState(null);
    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([]);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setTipoModal("Editar");
        setServico(listaServicoRenderizacao[id]);
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
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                {listaServicoRenderizacao?.map((servico, i) => (
                    <CardServico servico={servico} clickEditar={() => clickEditar(i)} />
                ))}
                

            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Serviço`} close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Sindico"} // Passa o tipo de usuário para o formulário
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)}
                    criarServico={criarServico}
                    servico={servico}
                />

            </BasicModal >

        </div>
    );
};

export default ServicosSindico;