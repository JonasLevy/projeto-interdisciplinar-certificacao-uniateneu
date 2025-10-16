import { useState } from 'react';
import dayjs from 'dayjs';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import BasicChildModal from '../../componets/ChildModal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SearchIcon from '@mui/icons-material/Search';
import CardServico from '../../componets/CardServico';


const ServicosMorador = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openChildModal, setOpenChildModal] = useState(false);

    //Variavel nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState("");

    //Variaveis das datas de inicio e fim
    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);

    //Variaveis dos horarios de entrada e saida
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSaida, setHoraSaida] = useState(null);

    //Variavel da descrição do serviço
    const [descricao, setDescricao] = useState('');

    //Variaveis do prestador de serviço
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');

    //atualização da variavel CPF com Validação
    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    //atualização da variavel telefone com Validação
    const handleChangeTelefone = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setTelefone(digits);
    }

    const handleClick = () => {
        setNomeEmpresa("");
        setDataInicio(null);
        setDataFim(null);
        setHoraEntrada(null);
        setHoraSaida(null);
        setDescricao("");

        setOpenModal(false);
    }

    const clearChildModal = () => {
        setNome('');
        setCpf('');
        setTelefone('');

        setOpenChildModal(false);
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
                <h1>Serviços </h1>
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
                <CardServico />

            </section>
            <ButtonModal click={() => setOpenModal(true)} />
            <BasicModal openModal={openModal} title="Adicionar Serviço" close={() => setOpenModal(false)}>
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
                        <form className='border p-3 flex flex-col gap-5 mb-3 ' >
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
                            <div className='flex justify-between'>
                                <Button onClick={() => setOpenChildModal(false)}
                                    variant="contained"
                                    color='success'>Confirmar</Button>

                                <Button variant="contained" color='error' 
                                    onClick={clearChildModal}> Cancelar
                                </Button>
                            </div>
                        </form>
                    </BasicChildModal>
                    
                    <div className='flex justify-between'>
                        <Button variant="contained" type='submit'
                            color='success'>Confirmar</Button>

                        <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                        </Button>
                    </div>
                </form>

            </BasicModal >

        </div>
    );
};

export default ServicosMorador;