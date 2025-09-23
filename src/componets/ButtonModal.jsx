import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ButtonModal = ({click}) => {
    return (
        <div className="fixed bottom-4 right-4">
            <Fab color="primary" aria-label="add" onClick={click}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default ButtonModal;
