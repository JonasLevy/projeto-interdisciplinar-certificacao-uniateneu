import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import ButtonPages from '../../componets/ButtonPages';
const Visitas = () => (
    <div>
        <h1 className='font-bold'>Visitas Page</h1>
        <div className='mt-4'>
            <ButtonPages name="Adicionar Visitante">
                <AddIcon/> 
            </ButtonPages>
            <ButtonPages name="Lista de Visitantes">
                <GroupsIcon/> 
            </ButtonPages>
        </div>
    </div>
);

export default Visitas;
