import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const FormReserva = ({ tipoUsuario, criarOuEditar, fecharModal, criarReserva, reserva }) => {
    const { adicionarReserva, ambientes, editarReserva } = useContext(AppContext)

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    //Variavel do select espaco
    const [espaco, setEspaco] = useState('');

    //Variavel data reserva
    const [dataReserva, setDataReserva] = useState(null);

    //Variaveis do horario
    const [reservaHoraEntrada, setReservaHoraEntrada] = useState(null);
    const [reservaHoraSaida, setReservaHoraSaida] = useState(null);

    //Variaveis do Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");

    //Variavel descricao
    const [descricaoReserva, setDescricaoReserva] = useState("");

    const handleChange = (e) => {
        setEspaco(e.target.value)
    }

    const handleClick = () => {
        setEspaco("");
        setDataReserva(null);
        setReservaHoraEntrada(null);
        setReservaHoraSaida(null);
        setApt('');
        setTorre('');
        setDescricaoReserva("");

        fecharModal(); // ## Fecha o modal ao cancelar - prop passada pela pagina pai
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        fecharModal(); // ## Fecha o modal ao cancelar - prop passada pela pagina pai
        const novaReserva = {
            id: v4(),
            espaco,
            dataReserva,
            reservaHoraEntrada,
            reservaHoraSaida,
            descricaoReserva,
            apt,
            torre
        }

        if (editar) {
            editarReserva(reserva.id, novaReserva)
        }

        editar || adicionarReserva(novaReserva)
    }

    // ## monta o formulario ao ser aberto o modal com os dados da reserva para editar
    useEffect(() => {
        if (editar) {
            setApt("202");
            setTorre("B");
            setEspaco(reserva.espaco);
            setDataReserva(reserva.dataReserva);
            setReservaHoraEntrada(reserva.reservaHoraEntrada);
            setReservaHoraSaida(reserva.reservaHoraSaida);
            setDescricaoReserva(reserva.descricaoReserva);
        } 
    }, []);


    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                id="outlined-basic"
                label="Apartemento"
                variant="outlined"
                size='small'
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                disabled={!sindico} // Morador não pode editar o apt
            />

            <TextField
                required
                id="outlined-basic"
                label="Torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                disabled={!sindico} // Morador não pode editar a torre
            />

            <TextField
                required
                select
                label='Espaços'
                size='small'
                value={espaco}
                onChange={handleChange}
            >
                {ambientes?.map(amb => {
                    return (
                        <MenuItem value={amb.nome} >{amb.nome}</MenuItem>
                    )
                })}
            </TextField>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label='Data Reversa'
                    format='DD/MM/YYYY'
                    value={dayjs(dataReserva)}
                    onChange={(newValue) => setDataReserva(newValue)}
                    disablePast
                    minDate={dayjs()}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label="Entrada"
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(reservaHoraEntrada)}
                    onChange={(newValue) => setReservaHoraEntrada(newValue)}
                    minTime={dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label="Saida"
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(reservaHoraSaida)}
                    onChange={(newValue) => setReservaHoraSaida(newValue)}
                    minTime={dayjs(reservaHoraEntrada) || dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />


            </LocalizationProvider>

            <TextField
                required
                id="outlined-basic"
                label="Descrição da reserva" variant="outlined"
                multiline
                maxRows={3}
                value={descricaoReserva}
                onChange={(e) => setDescricaoReserva(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>

                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    {(editar && sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>

                <Button
                    variant="contained"
                    color='error'
                    onClick={handleClick} >
                    Cancelar
                </Button>

            </div>
        </form>
    );
};

export default FormReserva;