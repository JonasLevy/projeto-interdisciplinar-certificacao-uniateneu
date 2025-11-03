import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const FormDelivey = ({tipoUsuario, criarOuEditar, fecharModal}) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";


    const [empresa, setEmpresa] = useState('');
    const [codEntrega, setCodEntrega] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleClick = () => {
        setEmpresa(null);
        setCodEntrega(null);
        setDescricao(null);

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();
    }

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                id="outlined-basic"
                label="Empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                variant="outlined"
            />

            <TextField
                id="outlined-basic"
                label="Codigo da entrega"
                value={codEntrega}
                onChange={(e) => setCodEntrega(e.target.value)}
                variant="outlined"
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
            <div className='flex flex-col justify-between gap-4 '>
                <Button 
                    variant="contained" 
                    type='submit' 
                    color='success'>
                    {(editar && sindico) || criarOuEditar =="Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
            </div>
        </form>

    )
}

export default FormDelivey