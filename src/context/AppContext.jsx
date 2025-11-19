import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))

    const navigate = useNavigate()
    const [usuario, setUsuario] = useState(null)
    const [condominio, setCodominio] = useState('UniAteneu')
    const [token, setToken] = useState(null)

    useEffect(() => {
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))

        setUsuario(usuarioStorage)

        const tokenStorage = localStorage.getItem("access_token")
        if (tokenStorage) {
            api.defaults.headers.common["Authorization"] = `Bearer ${tokenStorage}`;
        }

    }, [])

    return (
        <AppContext.Provider value={{ usuario, setUsuario, condominio, token, setToken }}>
            {children}
        </AppContext.Provider>
    )

}
