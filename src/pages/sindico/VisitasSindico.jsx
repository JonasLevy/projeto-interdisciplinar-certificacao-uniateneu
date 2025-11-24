import { useState } from 'react';
import dayjs from 'dayjs';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const VisitasSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    //Variaveis dados da visita
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    //Variavel horario visita
    const [horaVisita, setHoraVisita] = useState(null)

    //Variavel data vista
    const [dataVisita, setDataVisita] = useState(null);

    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    const handleChangeTelefone = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setTelefone(digits);
    }

    const handleClick = () => {
        setNome("");
        setCpf('');
        setTelefone('');
        setHoraVisita(null);
        setDataVisita(null);

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);

    }
    return (
        <div className="min-h-full w-full ">
            <h1>Visitas do Morador</h1>

            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastrar Visita" close={() => setOpenModal(false)}>

            </BasicModal>
        </div>
    );
};

export default VisitasSindico;