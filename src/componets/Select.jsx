import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({list, change}) {
    const [opcaoSelecionada, setOpcaoSelecionada] = React.useState('');

    const handleChange = (event) => {
        setOpcaoSelecionada(event.target.value);
        change(event.target.value)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
            <InputLabel id="demo-select-small-label">Condominio</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={opcaoSelecionada}
                label="Condominio"
                onChange={handleChange}
            >
                {list?.map((opcao, i)=>(
                    <MenuItem value={opcao.id}>{opcao.nome}</MenuItem>      
                    )
                )}
            </Select>
        </FormControl>
    );
}
