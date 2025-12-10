import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import SelectSmall from './Select.jsx';
import api from "../api.js"

const FormReserva = ({ listCondomonio, criarOuEditar, fecharModal, reserva }) => {

    const [idCondominio, setIdCondominio] = useState('');
    const [listaAmbientes, setListaAmbientes] = useState([]);
    const [idAmbiente, setIdAmbiente] = useState('');
    const [dataReserva, setDataReserva] = useState(null);
    const [horaInicio, setHoraInicio] = useState(null);
    const [horaFim, setHoraFim] = useState(null);
    const [statusReserva, setStatusReserva] = useState("");
    const [infoReserva, setInfoReserva] = useState("");

    useEffect(() => {
        if (criarOuEditar == "Editar") {
            setIdCondominio(reserva.idCondominio);
            setIdAmbiente(reserva.idAmbiente);
            setDataReserva(reserva.dataReserva);
            setHoraInicio(reserva.horaInicio);
            setHoraFim(reserva.horaFim);
            setStatusReserva(reserva.statusReserva);
            setInfoReserva(reserva.infoReserva);
        }
    },[])

    useEffect(() => {
        if (!idCondominio) return;
        api.get(`/sindico/ambiente/${idCondominio}`)
            .then((res) => {
                setListaAmbientes(res.data.ambientes || []);
            })
            .catch((err) => {
                console.log("erro get ambientes", err);
                setListaAmbientes([]);
            })
    }, [idCondominio])

    const handleClick = () => {
        setIdCondominio("");
        setIdAmbiente("");
        setDataReserva(null);
        setHoraInicio(null);
        setHoraFim(null);
        setStatusReserva('');
        setInfoReserva('');

        fecharModal(); // ## Fecha o modal ao cancelar - prop passada pela pagina pai
    }

    const submitForm = (e) => {
        e.preventDefault();

        const body = {
            idAmbiente: idAmbiente,
            dataReserva: dataReserva.format('YYYY-MM-DD'),
            horaInicio: horaInicio.format('HH:mm'),
            horaFim: horaFim.format('HH:mm'),
            status: statusReserva,
        }

        api.post(`/sindico/reserva/${idCondominio}`, body)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Erro na requisição:", err.response?.data);
            })

            fecharModal();
    }

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <SelectSmall list={listCondomonio} change={setIdCondominio} />
            
            <SelectSmall list={listaAmbientes} change={setIdAmbiente} label="Ambiente" />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{
                        textField: { size: 'small',  required: true, }
                    }}
                    label='Data Reversa'
                    format='DD/MM/YYYY'
                    value={dataReserva}
                    onChange={(newValue) => setDataReserva(newValue)}
                    disablePast
                    minDate={dayjs()}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required: true, }
                    }}
                    label="Entrada"
                    format="HH:mm"
                    ampm={false}
                    value={horaInicio}
                    onChange={(newValue) => setHoraInicio(newValue)}
                    minTime={dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required: true, }
                    }}
                    label="Saida"
                    format="HH:mm"
                    ampm={false}
                    value={horaFim}
                    onChange={(newValue) => setHoraFim(newValue)}
                    minTime={dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />
            </LocalizationProvider>

            <TextField
                required
                id="outlined-basic"
                label="Status Reserva"
                variant="outlined"
                size='small'
                value={statusReserva}
                onChange={(e) => setStatusReserva(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                size='small'
                value={infoReserva}
                onChange={(e) => setInfoReserva(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    Salvar
                </Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    );
};

export default FormReserva;