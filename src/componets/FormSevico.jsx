import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import BasicChildModal from '../componets/ChildModal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import FormPrestadorServico from './FormPrestadorServico';

const FormSevico = ({ tipoUsuario, criarOuEditar, fecharModal, criarServico }) => {
    const [openChildModal, setOpenChildModal] = useState(false);

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    //Variavel nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState("");

    //Variaveis das datas de inicio e fim
    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);

    //Variaveis dos horarios de entrada e saida
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSaida, setHoraSaida] = useState(null);

    //Variaveis Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");

    //Variavel da descrição do serviço
    const [descricao, setDescricao] = useState('');


    const handleClick = () => {
        setNomeEmpresa("");
        setDataInicio(null);
        setDataFim(null);
        setHoraEntrada(null);
        setHoraSaida(null);
        setApt('');
        setTorre('');
        setDescricao("");

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        fecharModal()

    }

    useEffect(() => {
        if (editar) {
            setNomeEmpresa("LT - Construções");
            setDataInicio(dayjs("01-01-2024"))
            setDataFim(dayjs("10-02-2024"));
            setHoraEntrada(dayjs().hour(7));
            setHoraSaida(dayjs().hour(17));
            setApt("101");
            setTorre("A");
            setDescricao("Reforma das paredes dos apartamentos");
        }
    }, []);

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                id="outlined-basic"
                label="Empresa"
                variant="outlined"
                size='small'
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <div className='flex gap-1'>

                    <DatePicker
                        slotProps={{
                            textField: {
                                size: 'small',
                                sx: { width: '155px' }
                            }
                        }}
                        label='Data Inicio'
                        format='DD/MM/YYYY'
                        value={dataInicio}
                        onChange={(newValue) => setDataInicio(newValue)}
                        disablePast
                        minDate={dayjs()}
                    />
                    <DatePicker
                        slotProps={{
                            textField: {
                                size: 'small',
                                sx: { width: '155px' }
                            }
                        }}
                        label='Data Fim'
                        format='DD/MM/YYYY'
                        value={dataFim}
                        onChange={(newValue) => setDataFim(newValue)}
                        disablePast
                        minDate={dataInicio || dayjs()}
                    />
                </div>
                <div className='flex gap-1'>
                    <TimePicker
                        slotProps={{
                            textField: {
                                size: 'small',
                                sx: { width: '150px' }
                            }
                        }}
                        label="Entrada"
                        format="HH:mm"
                        ampm={false}
                        value={horaEntrada}
                        onChange={(newValue) => setHoraEntrada(newValue)}
                        minTime={dayjs().hour(7).minute(29)}
                        maxTime={dayjs().hour(17).minute(0)}
                    />
                    <TimePicker
                        slotProps={{
                            textField: {
                                size: 'small',
                                sx: { width: '151px' }
                            }
                        }}
                        label="Saida"
                        format="HH:mm"
                        ampm={false}
                        value={horaSaida}
                        onChange={(newValue) => setHoraSaida(newValue)}
                        minTime={horaEntrada || dayjs().hour(7).minute(29)}
                        maxTime={dayjs().hour(19).minute(30)}
                    />
                </div>
            </LocalizationProvider>

            {sindico && (
                <TextField
                    id="outlined-basic"
                    label="Apartemento"
                    variant="outlined"
                    size='small'
                    value={apt}
                    onChange={(e) => setApt(e.target.value)}
                />
            )}

            {sindico && (
                <TextField
                    id="outlined-basic"
                    label="Torre"
                    variant="outlined"
                    size='small'
                    value={torre}
                    onChange={(e) => setTorre(e.target.value)}
                />
            )}



            <TextField
                id="outlined-multiline-flexible"
                label="Descrição do Serviço"
                multiline
                maxRows={5}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <Button onClick={() => setOpenChildModal(true)}
                variant="outlined">Adicionar Prestador de Serviço</Button>

            <BasicChildModal
                openChildModal={openChildModal} title="Dados"
                closeChild={() => setOpenChildModal(false)}>

                <FormPrestadorServico
                    fecharChildModal={() => setOpenChildModal(!openChildModal)}
                />
            </BasicChildModal>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant="contained" type='submit'
                    color='success'>{(editar && sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormSevico