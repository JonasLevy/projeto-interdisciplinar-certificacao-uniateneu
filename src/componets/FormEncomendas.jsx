import React, { useState, useEffect } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

function FormEncomendas({ tipoUsuario, criarOuEditar, fecharModal, criarEncomenda, encomenda}) {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const [dateType, setDateType] = useState("text");
    const [empresa, setEmpresa] = useState('');
    const [dataRecebimento, setDataRecebimento] = useState('');
    const [selectedValue, setSelectValue] = React.useState('Delivery');
    const [codigoEntrega, setCodigoEntrga] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleChange = (e) => {
        setSelectValue(e.target.value);
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
        fecharModal();

        const encomenda = {
            empresa,
            dataRecebimento,
            descricao,
            codigoEntrega
        }

        criarEncomenda(encomenda)
    }

    useEffect(() => {
        if(editar) {
            setEmpresa(encomenda.empresa);
            setDataRecebimento(encomenda.dataRecebimento);
            setCodigoEntrga(encomenda.codigoEntrega);
            setDescricao(encomenda.descricao);
        }
    }, [])


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
                label="Data de recebimento"
                type={dateType}
                value={dataRecebimento}
                onChange={(e) => setDataRecebimento(e.target.value)}
                onFocus={() => setDateType("date")}
                onBlur={() => !dataRecebimento && setDateType("text")}
            />
            <div className='flex justify-around'>
                <p>
                    Delivery<Checkbox
                        checked={selectedValue === 'Delivery'}
                        onChange={handleChange}
                        value="Delivery"
                        name="opcaoEncomenda"
                    />
                </p>
                <p>Entrega<Checkbox
                    checked={selectedValue === 'Entrega'}
                    onChange={handleChange}
                    value="Entrega"
                    name="opcaoEncomenda"
                /></p>
            </div>

            <TextField
                id="outlined-basic"
                label="Codigo Entrega"
                value={codigoEntrega}
                onChange={(e) => setCodigoEntrga(e.target.value)}
                variant="outlined"
                disabled={selectedValue == 'Entrega'}
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

            <Button variant="contained" type='submit' color='success'>{(editar && sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

            <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
        </form>
    )
}

export default FormEncomendas