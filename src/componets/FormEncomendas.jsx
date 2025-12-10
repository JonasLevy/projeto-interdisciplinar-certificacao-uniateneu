import React, { useState, useEffect, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormEncomendas = ({ tipoUsuario, criarOuEditar, fecharModal, criarEncomenda, encomenda }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const { adicionarEncomendas } = useContext(AppContext)
    const [dateType, setDateType] = useState("text");
    const [empresa, setEmpresa] = useState('');
    const [dataRecebimento, setDataRecebimento] = useState(dayjs());
    const [tipoEncomenda, setTipoEncomenda] = React.useState('Delivery');
    const [codigoEntrega, setCodigoEntrga] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleChange = (e) => {
        setTipoEncomenda(e.target.value);
    }

    const handleClick = () => {
        setEmpresa(null);
        setDataRecebimento(null);
        setDescricao(null);
        setCodigoEntrga(null);

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();

        const encomenda = {
            id: v4(),
            tipoEncomenda,
            empresa,
            dataRecebimento,
            descricao,
            codigoEntrega
        }
        adicionarEncomendas(encomenda)
        fecharModal();
    }

    useEffect(() => {
        if (editar) {
            setEmpresa(encomenda.empresa);
            setDataRecebimento(encomenda.dataRecebimento);
            setCodigoEntrga(encomenda.codigoEntrega);
            setDescricao(encomenda.descricao);
        }
    }, [])


    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <div className='flex justify-around'>
                <p>
                    Delivery<Checkbox
                        checked={tipoEncomenda === 'Delivery'}
                        onChange={handleChange}
                        value="Delivery"
                        name="opcaoEncomenda"
                    />
                </p>
                <p>Entrega<Checkbox
                    checked={tipoEncomenda === 'Entrega'}
                    onChange={handleChange}
                    value="Entrega"
                    name="opcaoEncomenda"
                /></p>
            </div>

            <TextField
                required
                id="outlined-basic"
                label="Empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                variant="outlined"
                size='small'
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{
                        textField: { size: 'small', required: "true", }
                    }}
                    label='Data Reversa'
                    format='DD/MM/YYYY'
                    value={dayjs(dataRecebimento)}
                    onChange={(newValue) => setDataRecebimento(newValue)}
                    disablePast
                    minDate={dayjs()}
                />
            </LocalizationProvider >

            <TextField
                id="outlined-basic"
                label="Codigo Entrega"
                value={codigoEntrega}
                onChange={(e) => setCodigoEntrga(e.target.value)}
                variant="outlined"
                disabled={tipoEncomenda == 'Entrega'}
                required={tipoEncomenda == 'Delivery'}
                size='small'
            />

            <TextField
                id="outlined-basic"
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                variant="outlined"
                multiline
                minRows={3}
                maxRows={10}
            />

            <Button variant="contained" type='submit' color='success'>{(editar && sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

            <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
        </form>
    )
}

export default FormEncomendas