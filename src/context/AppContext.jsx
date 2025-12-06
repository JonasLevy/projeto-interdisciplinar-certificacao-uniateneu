import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const admPadrao = {
        nome: "Pedro",
        email: "pedro@gmail.com",
        senha: "12345",
        cpf: "203201256325",
        tipo: "sindico",
        condominio: "A",
        apt: "123"
    };

    const porteiroPadrao = {
        nome: "Luis",
        email: "luis@gmail.com",
        senha: "1010",
        cpf: "0325698544",
        tipo: "porteiro",
    }

    const [usuarios, setUsuarios] = useState(() => {
        const saved = localStorage.getItem("usuarios");
        return saved ? JSON.parse(saved) : [admPadrao, porteiro]; 
    });

    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }, [usuarios]);

    const addUsuario = (novoUsuario) => {
        setUsuarios(prev => [...prev, novoUsuario]);
    };

    return (
        <AppContext.Provider value={{ usuarios, addUsuario }}>
            {children}
        </AppContext.Provider>
    );
};
