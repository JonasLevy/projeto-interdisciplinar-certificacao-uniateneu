import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';

const FormPrestadorServico = ({fecharChildModal}) => {

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

    const clearChildModal = () => {
        setNome('');
        setCpf('');
        setTelefone('');

        fecharChildModal()
    }

    return (
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
                <Button onClick={() => fecharChildModal()}
                    variant="contained"
                    color='success'>Confirmar</Button>

                <Button variant="contained" color='error'
                    onClick={clearChildModal}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormPrestadorServico