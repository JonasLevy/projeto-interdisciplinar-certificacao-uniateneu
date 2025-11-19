import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toastify({ open, setOpen, mensagem, tipo }) {

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}>
                <Alert
                    onClose={handleClose}
                    severity={tipo}
                    variant="filled"
                    sx={{ width: '100%' }}  
                >
                    {mensagem}
                </Alert>
            </Snackbar>
        </div>
    );
}