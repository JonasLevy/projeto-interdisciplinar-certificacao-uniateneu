import { Button,TextField } from '@mui/material';
import { useState } from 'react';

const FormApt = ({ tipoUsuario, criarOuEditar, fecharModal, criarApt, apt }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const [andar, setAndar] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [torre, setTorre] = useState('');

    const handleClick = () => {
        setAndar(null);
        setApartamento(null);
        setTorre(null);

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal()

        const apt = {
            andar,
            apartamento,
            torre
        }

        criarApt(apt);
    }

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '
            style={{ flexDirection: "column", padding: "8px", Radios: "0px" }}>

            <TextField
                id="outlined-basic"
                label="Andar"
                value={andar}
                onChange={(e) => setAndar(e.target.value)}
                variant="outlined"
            />

            <TextField
                id="outlined-basic"
                label="Numero AP"
                value={apartamento}
                onChange={(e) => setApartamento(e.target.value)}
                variant="outlined"
            />

            <TextField
                id="outlined-basic"
                label="Torre/bloco"
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                variant="outlined"
            />
            <div className='flex flex-row justify-between gap-4 sm:flex-col'>
                <Button 
                    variant="contained" 
                    type='submit' 
                    color='success'>
                    {(editar && !sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
            </div>
        </form>
    )
}

export default FormApt