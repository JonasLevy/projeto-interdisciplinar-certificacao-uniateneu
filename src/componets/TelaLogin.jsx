import { useState, React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { AppContext } from '../context/AppContext';


function TelaLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("sindico");

    const [validacao, setValidacao] = useState(null);

    const { usuarios, setUsuarioLogado } = useContext(AppContext);

    const login = () => {
        const usuarioEncontrado = usuarios.find((user) => user.email == email && user.senha == senha);
        if (!usuarioEncontrado) return alert("Usuario não encontrado!")
        localStorage.setItem("usuarioLog", JSON.stringify(usuarioEncontrado))
        setUsuarioLogado(usuarioEncontrado)
        usuarioEncontrado && navigate(`/${usuarioEncontrado.tipo}`);
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
            </Box>
        </div>

    )
}

export default TelaLogin