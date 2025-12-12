import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const categoriasPadrao = [
    'Manutenção',
    'Serviço',
    'Impostos',
    'Outros'
];

const FormPortal = ({ tipoUsuario, criarOuEditar, fecharModal, criarGasto, gasto }) => {
    const { adicionarGasto, editarGasto } = useContext(AppContext);

    const editar = criarOuEditar === 'Editar';

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState(dayjs());
    const [categoria, setCategoria] = useState(categoriasPadrao[0]);

    const handleClick = () => {
        setTitulo('');
        setDescricao('');
        setValor('');
        setData(dayjs());
        setCategoria(categoriasPadrao[0]);
        fecharModal();
    };

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();

        const novoGasto = {
            id: editar ? gasto.id : v4(),
            titulo,
            descricao,
            valor,
            data: data ? dayjs(data).format('DD/MM/YYYY') : null,
            categoria
        };

        if (editar) {
            editarGasto(gasto.id, novoGasto);
            return;
        }
        adicionarGasto(novoGasto);
        criarGasto && criarGasto(novoGasto);
    };

    useEffect(() => {
        if (editar && gasto) {
            setTitulo(gasto.titulo);
            setDescricao(gasto.descricao);
            setValor(gasto.valor);
            setData(gasto.data ? dayjs(gasto.data, 'DD/MM/YYYY') : dayjs());
            setCategoria(gasto.categoria || categoriasPadrao[0]);
        }
    }, [editar, gasto]);

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                id='titulo'
                label='Título'
                variant='outlined'
                size='small'
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />

            <TextField
                id='descricao'
                label='Descrição'
                variant='outlined'
                multiline
                minRows={3}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <TextField
                required
                id='valor'
                label='Valor (R$)'
                variant='outlined'
                type='number'
                size='small'
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{ textField: { size: 'small', required: true } }}
                    label='Data'
                    format='DD/MM/YYYY'
                    value={dayjs(data)}
                    onChange={(newValue) => setData(newValue)}
                />
            </LocalizationProvider>

            <TextField
                required
                id='categoria'
                select
                label='Categoria'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                {categoriasPadrao.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
            </TextField>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant='contained' type='submit' color='success'>Salvar</Button>
                <Button variant='contained' color='error' onClick={handleClick}>Cancelar</Button>
            </div>
        </form>
    )
}

export default FormPortal;
