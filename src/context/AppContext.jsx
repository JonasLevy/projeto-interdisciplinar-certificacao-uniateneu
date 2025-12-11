import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [usuarioLogado, setUsuarioLogado] = useState(null)
    const [ambientes, setAmbientes] = useState([])
    const [reservas, setReservas] = useState([])
    const [encomendas, setEncomendas] = useState([])
    const [servicos, setServico] = useState([])

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "12345",
            cpf: "203201256325",
            tipo: "sindico",
            condominio: "A",
            apt: "123"
        },
        {
            id: 2,
            nome: "Luis",
            email: "luis@gmail.com",
            senha: "12345",
            cpf: "0325698544",
            tipo: "portaria",
        }
    ]);

    const condominio = {
        nome: "Brisa do Mar",
        rua: "Avenida Beira mar, 2500",
        telefone: "85985858585"
    }

    useEffect(() => {
    // checa se tem uma lista de usuarios já salva no localStorage
        const saved = localStorage.getItem("usuarios");
        saved || localStorage.setItem("usuarios", JSON.stringify(usuarios))
        saved && setUsuarios(JSON.parse(saved));

        // checa se já tem um usuario logado
        const usuarioLogadoLocalStorage = localStorage.getItem("usuarioLog");
        usuarioLogadoLocalStorage && setUsuarioLogado(JSON.parse(usuarioLogadoLocalStorage))
        const listaDeAmbientesLocalStorage = localStorage.getItem("ambientes");
        listaDeAmbientesLocalStorage && setAmbientes(JSON.parse(listaDeAmbientesLocalStorage))
        const listaDeEncomendasLocalStorage = localStorage.getItem("encomendas");
        listaDeEncomendasLocalStorage && setEncomendas(JSON.parse(listaDeEncomendasLocalStorage))
        const listaDeServicosLocalStorage = localStorage.getItem("servicos");
        listaDeServicosLocalStorage && setServico(JSON.parse(listaDeServicosLocalStorage))

        const listaDeReservas = localStorage.getItem("reservas");
        listaDeReservas && setReservas(JSON.parse(listaDeReservas))

    }, []);

    const adicionarServico = (novoServico) => {
        const novalista = [...servicos, novoServico]
        setServico(novalista)
        localStorage.setItem("servicos", JSON.stringify(novalista))
    }

    const adicionarEncomendas = (novaEncomenda) => {
        const novalista = [...encomendas, novaEncomenda]
        setEncomendas(novalista)
        localStorage.setItem("encomendas", JSON.stringify(novalista))
    }

    const adicionarReserva = (novaReserva) => {
        const novalista = [...reservas, novaReserva]
        setReservas(novalista)
        localStorage.setItem("reservas", JSON.stringify(novalista))
    }

    const adicionarAmbientes = (novoAmbiente) => {
        const novalista = [...ambientes, novoAmbiente]
        setAmbientes(novalista)
        localStorage.setItem("ambientes", JSON.stringify(novalista))
    }

    const addUsuario = (novoUsuario) => {
        const novaLista = [...usuarios, novoUsuario]
        setUsuarios(novaLista);
        localStorage.setItem("usuarios", JSON.stringify(novaLista))
    };



    return (
        <AppContext.Provider value={{ usuarios, addUsuario, setUsuarioLogado, usuarioLogado, condominio, adicionarAmbientes, ambientes, adicionarReserva, reservas, encomendas, adicionarEncomendas, servicos, adicionarServico }}>
            {children}
        </AppContext.Provider>
    );
};
