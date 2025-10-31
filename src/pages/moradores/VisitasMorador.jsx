import { useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';
import FormVisita from '../../componets/FormVisita';


const VisitasMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

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
                <h1>Delivery</h1>
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
                <CardVisita clickEditar={() => clickEditar()}  />
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal openModal={openModal} title="Cadastrar Visita" close={() => setOpenModal(false)}>

                <FormVisita
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)} />
            </BasicModal>
        </div>
    );
};

export default VisitasMorador;