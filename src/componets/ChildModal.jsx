import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ChildModal({ children, openChildModal, title, closeChild }) {
    return (
        <Modal
            open={openChildModal}
            onClose={closeChild}
            aria-labelledby="modalChild-title"
            aria-describedby="modalChild-description"
        >
            <Box sx={style}>
                <Typography id="modalChild-title" variant="h6" component="h4">
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    );
}
