import { useState } from 'react';
import dayjs from 'dayjs';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';


const VisitasMorador = () => {
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
        let digits = e.target.value.replace(/\D/g, "").slice(0, 11);

        if (digits.length <= 10) {
            digits = digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            digits = digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }

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
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between items-center'
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
                <CardVisita />
            </section>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Cadastrar Visita" close={() => setOpenModal(false)}>
                <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        variant="outlined"
                        size='small'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        size='small'
                        variant="outlined"
                        placeholder='Somente os numeros'
                        value={cpf}
                        onChange={handleChangeCpf}

                    />
                    <TextField
                        label="Telefone"
                        type='tel'
                        size='small'
                        variant="outlined"
                        value={telefone}
                        onChange={(handleChangeTelefone)}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            slotProps={{
                                textField: { size: 'small' }
                            }}
                            label='Horario Visita'
                            format="HH:mm"
                            ampm={false}
                            value={horaVisita}
                            onChange={(newValue) => setHoraVisita(newValue)}
                            minTime={dayjs().hour(7).minute(50)}
                            maxTime={dayjs().hour(22).minute(0)}

                        />

                        <DatePicker
                            slotProps={{
                                textField: { size: 'small' }
                            }}
                            label='Data Visita'
                            format='DD/MM/YYYY'
                            value={dataVisita}
                            onChange={(newValue) => setDataVisita(newValue)}
                            disablePast
                            minDate={dayjs()}

                        />
                    </LocalizationProvider>

                    <div className='flex justify-between'>
                        <Button variant="contained" type='submit' color='success'>Confirmar</Button>

                        <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                        </Button>
                    </div>

                </form>
            </BasicModal>
        </div>
    );
};

export default VisitasMorador;