import React, { useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const ReservasMorador = () => {
    const [openModal, setOpenModal] = useState(false);

    //Variavel do select espaco
    const [espaco, setEspaco] = useState('');

    //Variavel data reserva
    const [dataReserva, setDataReserva] = useState(null);

    //Variaveis do horario
    const [reservaHoraEntrada, setReservaHoraEntrada] = useState(null);
    const [reservaHoraSaida, setReservaHoraSaida] = useState(null);

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
        setDescricaoReserva("");

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);
    }


    return (
        <div className="min-h-full w-full ">
            <h1>Reservas do Morador
                <ButtonModal click={() => setOpenModal(true)} />
                <BasicModal openModal={openModal} title="Fazer Reversa" close={() => setOpenModal(false)} >
                    <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
                        <TextField
                            select
                            label='Espaços'
                            size='small'
                            value={espaco}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Salao de festas'} >Salão de Festas</MenuItem>
                            <MenuItem value={'Area da piscina'} >Area da Piscina </MenuItem>
                            <MenuItem value={'Campo socity'} >Campo Socity</MenuItem>
                            <MenuItem value={'Quadra de tênis'} >Quadra de Tênis</MenuItem>
                            <MenuItem value={'Deck secundario'} >Deck Secundario</MenuItem>
                        </TextField>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                slotProps={{
                                    textField: { size: 'small' }
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
                                    textField: { size: 'small' }
                                }}
                                label="Entrada"
                                format="HH:mm"
                                ampm={false}
                                value={reservaHoraEntrada}
                                onChange={(newValue) => setReservaHoraEntrada(newValue)}
                                minTime={dayjs().hour(6).minute(29)}
                                maxTime={dayjs().hour(22).minute(59)}

                            />

                            <TimePicker
                                slotProps={{
                                    textField: { size: 'small' }
                                }}
                                label="Saida"
                                format="HH:mm"
                                ampm={false}
                                value={reservaHoraSaida}
                                onChange={(newValue) => setReservaHoraSaida(newValue)}
                                minTime={reservaHoraEntrada || dayjs().hour(6).minute(29)}
                                maxTime={dayjs().hour(22).minute(59)}
                            />


                        </LocalizationProvider>

                        <TextField
                            id="outlined-basic"
                            label="Descrição da reserva" variant="outlined"
                            multiline
                            maxRows={4}
                            value={descricaoReserva}
                            onChange={(e) => setDescricaoReserva(e.target.value)}
                        />

                        <div className='flex justify-between'>
                            <Button variant="contained" type='submit' color='success'>Confirmar</Button>

                            <Button variant="contained" color='error' onClick={handleClick} > Cancelar
                            </Button>
                        </div>
                    </form>

                </BasicModal >
            </h1>
        </div>
    );
};

export default ReservasMorador;