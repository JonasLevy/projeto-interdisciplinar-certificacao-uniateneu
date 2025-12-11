import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [usuarioLogado, setUsuarioLogado] = useState(null)
    const [ambientes, setAmbientes] = useState([])
    const [reservas, setReservas] = useState([])
    const [encomendas, setEncomendas] = useState([])
    const [servicos, setServico] = useState([])
    const [visitas, setVisitas] = useState([])
    const [notificacao, setnotificacao] = useState([])

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "12345",
            cpf: "203201256325",
            tipo: "sindico",
            condominio: "A",
            apt: "123",
            telefone: "(85) 98585-8585"
        },
        {
            id: 2,
            nome: "Luis",
            email: "luis@gmail.com",
            senha: "12345",
            cpf: "0325698544",
            tipo: "portaria",
            funcionario: true,
            telefone: "(85) 98585-8585",
            ativo: true

        },
        {
            id: 3,
            nome: "Levy",
            email: "levy@gmail.com",
            senha: "12345",
            cpf: "20242119743",
            tipo: "morador",
            torre: "A",
            apt: "404 ",
            telefone: "(85) 98585-8585",
            ativo: true 
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
        const listaDeVisitasLocalStorage = localStorage.getItem("visitas");
        listaDeVisitasLocalStorage && setVisitas(JSON.parse(listaDeVisitasLocalStorage))
        const listaDenotificacoesLocalStorage = localStorage.getItem("notificacao");
        listaDenotificacoesLocalStorage && setnotificacao(JSON.parse(listaDenotificacoesLocalStorage))


        const listaDeReservas = localStorage.getItem("reservas");
        listaDeReservas && setReservas(JSON.parse(listaDeReservas))

    }, []);

    const adicionarNotificacao = (novaNotificacao) => {
        const novalista = [...notificacao, novaNotificacao]
        setnotificacao(novalista)
        localStorage.setItem("notificacao", JSON.stringify(novalista))
    }

    const editarNotificação = (id, modificação) => {
        const novaLista = notificacao.map(notif => {
            if (notif.id == id) {
                const { mensagem, destinatario } = modificação
                return { ...notif, mensagem, destinatario }
            }
            return notif
        })

        setnotificacao(novaLista)
        localStorage.setItem("notificacao", JSON.stringify(novaLista))
    }

    const adicionarVisita = (novaVisita) => {
        const novalista = [...visitas, novaVisita]
        setVisitas(novalista)
        localStorage.setItem("visitas", JSON.stringify(novalista))
    }

    const editarVisita = (id, modificacao) => {
        const novaLista = visitas.map(visit => {
            if (visit.id == id) {
                const { nome,
                    cpf,
                    telefone,
                    dataVisita,
                    horaVisita,
                    apto,
                    torre,
                    responsavel } = modificacao
                return {
                    ...visit,
                    nome,
                    cpf,
                    telefone,
                    dataVisita,
                    horaVisita,
                    apto,
                    torre,
                    responsavel
                }
            }
            return visit
        })

        setVisitas(novaLista)
        localStorage.setItem("visitas", JSON.stringify(novaLista))
    }

    const adicionarServico = (novoServico) => {
        const novalista = [...servicos, novoServico]
        setServico(novalista)
        localStorage.setItem("servicos", JSON.stringify(novalista))
    }

    const editarServico = (id, modificação) => {
        const novaLista = servicos.map(serv => {
            if (serv.id == id) {
                const { nomeEmpresa,
                    dataInicio,
                    dataFim,
                    horaEntrada,
                    horaSaida,
                    apt,
                    torre,
                    descricao } = modificação
                return {
                    ...serv, nomeEmpresa,
                    dataInicio,
                    dataFim,
                    horaEntrada,
                    horaSaida,
                    apt,
                    torre,
                    descricao
                }
            }
            return serv
        })

        setServico(novaLista)
        localStorage.setItem("servicos", JSON.stringify(novaLista))
    }

    const adicionarEncomendas = (novaEncomenda) => {
        const novalista = [...encomendas, novaEncomenda]
        setEncomendas(novalista)
        localStorage.setItem("encomendas", JSON.stringify(novalista))
    }

    const editarEncomendas = (id, modificação) => {
        const novaLista = encomendas.map(encom => {
            if (encom.id == id) {
                const { tipoEncomenda,
                    empresa,
                    dataRecebimento,
                    descricao,
                    codigoEntrega } = modificação
                return {
                    ...encom, tipoEncomenda,
                    empresa,
                    dataRecebimento,
                    descricao,
                    codigoEntrega
                }
            }
            return encom
        })
        setEncomendas(novaLista)
        localStorage.setItem("encomendas", JSON.stringify(novaLista))
    }

    const adicionarReserva = (novaReserva) => {
        const novalista = [...reservas, novaReserva]
        setReservas(novalista)
        localStorage.setItem("reservas", JSON.stringify(novalista))
    }

    const editarReserva = (id, modificação) => {
        const novaLista = reservas.map(reserv => {
            if (reserv.id == id) {
                const { espaco,
                    dataReserva,
                    reservaHoraEntrada,
                    reservaHoraSaida,
                    descricaoReserva,
                    apt,
                    torre } = modificação
                return {
                    ...reserv, espaco,
                    dataReserva,
                    reservaHoraEntrada,
                    reservaHoraSaida,
                    descricaoReserva,
                    apt,
                    torre
                }
            }
            return reserv
        })
        setReservas(novaLista)
        localStorage.setItem("reservas", JSON.stringify(novaLista))
    }

    const adicionarAmbientes = (novoAmbiente) => {
        const novalista = [...ambientes, novoAmbiente]
        setAmbientes(novalista)
        localStorage.setItem("ambientes", JSON.stringify(novalista))
    }

    const editarAmbiente = (id, modificação) => {
        const novaLista = ambientes.map(amb => {
            if (amb.id == id) {
                const { nome, info } = modificação
                return { ...amb, nome, info }
            }
            return amb
        })

        setAmbientes(novaLista)
        localStorage.setItem("ambientes", JSON.stringify(novaLista))
    }


    const addUsuario = (novoUsuario) => {
        const novaLista = [...usuarios, novoUsuario]
        setUsuarios(novaLista);
        localStorage.setItem("usuarios", JSON.stringify(novaLista))
    };



    return (
        <AppContext.Provider value={{ usuarios, addUsuario, setUsuarioLogado, usuarioLogado, condominio, adicionarAmbientes, ambientes, adicionarReserva, reservas, encomendas, adicionarEncomendas, servicos, adicionarServico, visitas, adicionarVisita, notificacao, adicionarNotificacao, editarNotificação, editarVisita, editarServico, editarEncomendas, editarReserva, editarAmbiente }}>
            {children}
        </AppContext.Provider>
    );
};
