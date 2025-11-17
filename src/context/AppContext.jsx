import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children})=>{

    const [usuario, setUsuario] = useState(null)
    const [condominio, setCodominio] = useState('UniAteneu')
    const [token, setToken] = useState(null)

    return(
        <AppContext.Provider value={{ usuario, setUsuario, condominio, token, setToken }}>
            {children}
        </AppContext.Provider>
    )

}
