import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children})=>{

    const [nome, setNome] = useState('Francisco')
    const [condominio, setCodominio] = useState('UniAteneu')

    return(
        <AppContext.Provider value={{nome, condominio}}>
            {children}
        </AppContext.Provider>
    )

}
