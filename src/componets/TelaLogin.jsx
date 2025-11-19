import React, { use, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import axios from 'axios';
import BASE_URL from "../BASE_URL"
import api from '../api.js';
import { AppContext } from '../context/AppContext.jsx';
import Toastify from './Toastify.jsx';


function TelaLogin() {
    const navigate = useNavigate();
    const { setToken, setUsuario, usuario } = useContext(AppContext)
    const [toastTipo, setToastTipo] = useState("")
    const [toastMensagem, setToastMensagem] = useState("")
    const [toastError, setToastError] = useState(false)

    useEffect(() => {
        usuario && navigate(`/${usuario.tipo}`)
    }, [usuario])


    const [usuarioLocal, setUsuarioLocal] = useState("");
    const [senha, setSenha] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            "email": usuarioLocal,
            "senha": senha
        }
        api.post(`/auth/login`, body)
            .then((resp) => {
                const { access_token, refresh_token, usuario } = resp.data;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("refresh_token", refresh_token);
                localStorage.setItem("usuario", JSON.stringify(usuario))
                setUsuario(usuario)
                api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
                navigate(`${usuario.tipo}`)

                // opcional: setar header default
            })
            .catch((err) => {
                setToastMensagem(err.response.data.detail)
                setToastTipo("error")
                setToastError(true)
            })
    }

    return (
        <div className='h-screen flex justify-center items-center  bg-gray-900'>
            <Box component="section" sx={{ margin: 2, p: 2, border: '1px solid white', borderRadius: 5, bgcolor: "#fff" }}>
                <Typography variant="h3" sx={{ marginBottom: 4, textAlign: 'center' }}>
                    Login
                </Typography>

                <form
                    className='flex flex-col justify-center gap-8'
                    onSubmit={handleSubmit}
                >

                    <TextField
                        id="outlined-basic"
                        label="UsuarioLocal"
                        variant="outlined"
                        sx={{ minWidth: 300 }}
                        value={usuarioLocal}
                        onChange={(e) => setUsuarioLocal(e.target.value)}
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        sx={{ minWidth: 300 }}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <Link href="#">Esqueceu a senha</Link>

                    <Button
                        type='submit'
                        sx={{ bgcolor: "rgb(30 64 175)" }}
                        variant="contained">
                        Sindico
                    </Button>
                </form>

            </Box>
            <Toastify open={toastError} setOpen={setToastError} mensagem={toastMensagem} tipo={toastTipo} />
        </div>

    )
}

export default TelaLogin