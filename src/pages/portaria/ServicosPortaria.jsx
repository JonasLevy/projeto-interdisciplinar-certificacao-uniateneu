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

    const [servico, setServico] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (idReserva) => {
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Serviços</h1>
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
                <CardServico clickEditar={() => clickEditar()} />

            </section>
            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal 
                openModal={openModal} 
                title={`${tipoModal} Servico`} 
                close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Portaria"}
                    criarServico={servico}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                />
            </BasicModal >
        </div>
    );
};

export default ServicosMorador;