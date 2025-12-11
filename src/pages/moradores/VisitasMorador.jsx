import { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';
import FormVisita from '../../componets/FormVisita';
import { AppContext } from '../../context/AppContext';


const VisitasMorador = () => {
    const { visitas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [listaVisitasRenderizacao, setListaVisitasRenderizacao] = useState([])
    const [visitaTemp, setVisitaTemp] = useState(null) //variavel temporaria para armazenar a visita  especifica para edição

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        setVisitaTemp(listaVisitasRenderizacao[id])
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarVisita = (visita) => {
        setListaVisitasRenderizacao([visita, ...listaVisitasRenderizacao])
    }

    console.log(visitaTemp)

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Visitas</h1>
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
            <section className='p-8 flex flex-col gap-4'>
                {visitas?.map((visita, i) => (
                    <CardVisita visita={visita} clickEditar={() => clickEditar(i)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Visita`}
                close={() => setOpenModal(false)}>

                <FormVisita
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarVisita={criarVisita}
                    visita={visitaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default VisitasMorador;