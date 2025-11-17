import { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardServico from '../../componets/CardServico';
import FormSevico from '../../componets/FormSevico';


const ServicosMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [servico, setServico] = useState(null)
    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([])

    const adicionarServico = (servico) => {
        setListaServicoRenderizacao([servico, ...listaServicoRenderizacao])
    }

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setTipoModal("Editar");
        setServico(listaServicoRenderizacao[id])
        setOpenModal(!openModal)
    }

    return (
        <div className="min-h-full max-h-full w-full overflow-y-auto ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between sticky top-0'
            >
                <h1>Serviços</h1>
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

            <section className='p-8 flex flex-col gap-4 '>
                {listaServicoRenderizacao?.map((servico, i) => (
                    <CardServico
                        clickEditar={() => clickEditar(i)}
                        servico={servico} 
                    />
                ))}

            </section>
            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Servico`}
                close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Portaria"}
                    criarServico={adicionarServico}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    servico={servico}
                />
            </BasicModal >
        </div>
    );
};

export default ServicosMorador;