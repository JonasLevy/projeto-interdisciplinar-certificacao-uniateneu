import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { AppContext } from '../context/AppContext';


function TelaLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("sindico");

    const [validacao, setValidacao] = useState(null);

    const { usuarios, setUsuarioLogado } = useContext(AppContext);
    const [mostrarUsuarios, setMostrarUsuarios] = useState(false);

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLog"))

    useEffect(() => {
        try {
            if (usuarioLogado.tipo) {
                navigate(`/${usuarioLogado.tipo}`)
            }

        } catch (error) {
            navigate(`/`)

        }
    }, [])

    const login = () => {
        const usuarioEncontrado = usuarios.find((user) => user.email == email && user.senha == senha);
        if (!usuarioEncontrado) return alert("Usuario não encontrado!")
        localStorage.setItem("usuarioLog", JSON.stringify(usuarioEncontrado))
        setUsuarioLogado(usuarioEncontrado)
        usuarioEncontrado && navigate(`/${usuarioEncontrado.tipo}`);
    }

    const preencherUsuario = (user) => {
        setEmail(user.email);
        setSenha(user.senha);
        setTipoUsuario(user.tipo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();

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
                        label="Usuario"
                        variant="outlined"
                        sx={{ minWidth: 300 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        Entrar
                    </Button>
                </form>
                <div className='mt-4'>
                    <Button size='small' variant='outlined' onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>
                        {mostrarUsuarios ? 'Ocultar usuários' : 'Mostrar usuários (teste)'}
                    </Button>
                    {mostrarUsuarios && (
                        <List className='mt-3 w-72'>
                            {usuarios?.map((user) => (
                                <ListItem key={user.id} className='bg-slate-100 rounded mb-2'>
                                    <ListItemText primary={`${user.nome} (${user.tipo})`} secondary={`Apt: ${user.apt || '-'}  —  ${user.email}`} />
                                    <IconButton edge='end' aria-label='usar' onClick={() => preencherUsuario(user)} sx={{ ml: 'auto' }}>
                                        <ContentPasteGoIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </div>
            </Box>
        </div>

    )
}

export default TelaLogin