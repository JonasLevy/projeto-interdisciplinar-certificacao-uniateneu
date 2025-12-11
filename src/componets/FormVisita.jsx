import { useContext, useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormVisita = ({ tipoUsuario, criarOuEditar, fecharModal, criarVisita, visita }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const { adicionarVisita, usuarioLogado } = useContext(AppContext)
    const portaria = usuarioLogado.tipo == "portaria"
    //Variaveis dados da visita
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [torre, setTorre] = useState('');

    //Variavel horario visita
    const [horaVisita, setHoraVisita] = useState(dayjs())

    //Variavel data vista
    const [dataVisita, setDataVisita] = useState(dayjs());

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

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const visita = {
            id: v4(),
            nome,
            cpf,
            telefone,
            dataVisita,
            horaVisita,
            apto: portaria ? apartamento : usuarioLogado.apt,
            torre: portaria ? torre : usuarioLogado.torre,
            responsavel: usuarioLogado.nome,
            tipo: usuarioLogado.tipo

        }
        adicionarVisita(visita)
        fecharModal();

    }

    useEffect(() => {
        if(editar) {
            setNome(visita.nome);
            setCpf(visita.cpf);
            setTelefone(visita.telefone);
            setHoraVisita(visita.horaVisita);
            setDataVisita(visita.dataVisita);
        }
    }, [])

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <TextField
                required
                id="outlined-basic"
                label="CPF"
                size='small'
                variant="outlined"
                placeholder='Somente os numeros'
                value={cpf}
                onChange={handleChangeCpf}

            />
            <TextField
                required
                label="Telefone"
                type='tel'
                size='small'
                variant="outlined"
                value={telefone}
                onChange={(handleChangeTelefone)}
            />
            {portaria && <TextField
                required
                id="outlined-basic"
                label="apartamento"
                variant="outlined"
                size='small'
                value={apartamento}
                onChange={(e) => setApartamento(e.target.value)}
            />}
            {portaria && <TextField
                required
                id="outlined-basic"
                label="torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
            />}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    slotProps={{
                        textField: { size: 'small', required:"true", }
                    }}
                    label='Horario Visita'
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(horaVisita)}
                    onChange={(newValue) => setHoraVisita(newValue)}
                    minTime={dayjs().hour(7).minute(50)}
                    maxTime={dayjs().hour(22).minute(0)}

                />

                <DatePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label='Data Visita'
                    format='DD/MM/YYYY'
                    value={dayjs(dataVisita)}
                    onChange={(newValue) => setDataVisita(newValue)}
                    disablePast
                    minDate={dayjs()}

                />
            </LocalizationProvider>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant="contained" type='submit' color='success'>{(editar && sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>

        </form>
    )
}

export default FormVisita