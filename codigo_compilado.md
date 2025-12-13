# Projeto Interdisciplinar

**Faculdade:** [Nome da Faculdade]
**Alunos:** [Nome dos Alunos]
**Professor:** [Nome do Professor]
**Disciplina:** [Nome da Disciplina]

---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/index.jsx
```jsx
import ButtonPages from "../../componets/ButtonPages"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HomeMorador = () => {

    return (
        <div className="text-center ">
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box p-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Encomendas" click={'/morador/encomendas'}>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/morador/servicos'}>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/morador/reservas'}>
                    <EventAvailableIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/morador/visitas'}>
                    <PersonAddIcon />
                </ButtonPages>
                <ButtonPages name="Notificação" click={'/morador/notificacao'}>
                    <CampaignIcon />
                </ButtonPages>
                <ButtonPages name="Transparencia" click={'/morador/transparencia'}>
                    <AccountBalanceWalletIcon />
                </ButtonPages>
                <ButtonPages name="Informacoes" click={'/morador/informacoes'}>
                    <AccountCircleIcon />
                </ButtonPages>
            </div>
        </div>
    )
}

export default HomeMorador
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/index.jsx
```jsx
import ButtonPages from "../../componets/ButtonPages"
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Index = () => {
    return (
        <div className="text-center p-8">
            Index Sindico
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Apartamentos" click='/sindico/apartamentos'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click={'/sindico/encomendas'}>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Ambientes" click={'/sindico/ambientes'}>
                    <MeetingRoomIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/sindico/servicos'}>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click={'/sindico/moradores'}>
                    <PeopleIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/sindico/reservas'}>
                    <EventAvailableIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/sindico/visitas'}>
                    <PersonAddIcon />
                </ButtonPages>
                <ButtonPages name="Notificação" click={'/sindico/notificacao'}>
                    <CampaignIcon />
                </ButtonPages>
                <ButtonPages name="Funcionarios" click={'/sindico/funcionarios'}>
                    <BadgeIcon />
                </ButtonPages>
                <ButtonPages name="Transparencia" click={'/sindico/transparencia'}>
                    <AccountBalanceWalletIcon />
                </ButtonPages>
                <ButtonPages name="Informacoes" click={'/sindico/informacoes'}>
                    <AccountCircleIcon />
                </ButtonPages>

            </div>
        </div>
    )
}

export default Index
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/portaria/index.jsx
```jsx
import ButtonPages from "../../componets/ButtonPages"
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Portaria = () => {
    return (
        <div className="">Index Portaria
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Serviços" click='/portaria/servicos'>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click='/portaria/moradores'>
                    <PeopleIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click='/portaria/encomendas'>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click='/portaria/visitas'>
                    <PersonAddIcon />
                </ButtonPages>
            </div>
            
        </div>
    )
}

export default Portaria
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/MenuAside.jsx
```jsx
import React, { useContext, useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from "../context/AppContext";
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';

const menuItems = {
  sindico: [
    {
      label: "Moradores",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Ambientes",
      icon: <MeetingRoomIcon className="text-slate-400" />
    },
    {
      label: "Reservas",
      icon: <EventAvailableIcon className="text-slate-400" />
    },
    {
      label: "Encomendas",
      icon: <LocalShippingIcon className="text-slate-400" />,
    },
    {
      label: "Apartamentos",
      icon: <ApartmentIcon className="text-slate-400" />,
    },
    {
      label: "Serviços",
      icon: <RoomServiceIcon className="text-slate-400" />,
    },
    {
      label: "Visitas",
      icon: <PersonAddIcon className="text-slate-400" />
    },
    {
      label: "Notificação",
      icon: <CampaignIcon className="text-slate-400" />
    },
    {
      label: "Funcionarios",
      icon: <BadgeIcon className="text-slate-400" />
    }
    , {
      label: "Transparencia",
      icon: <AccountBalanceWalletIcon className="text-slate-400" />
    }
    , {
      label: "Informacoes",
      icon: <AccountCircleIcon className="text-slate-400" />
    }

  ],

  morador: [
    {
      label: "Encomendas",
      icon: <LocalShippingIcon className="text-slate-400" />
    },
    {
      label: "Serviços",
      icon: <RoomServiceIcon className="text-slate-400" />
    },
    {
      label: "Reservas",
      icon: <EventAvailableIcon className="text-slate-400" />,
    },
    {
      label: "Notificação",
      icon: <CampaignIcon className="text-slate-400" />
    },
    {
      label: "Visitas",
      icon: <PersonAddIcon className="text-slate-400" />
    }
    , {
      label: "Transparencia",
      icon: <AccountBalanceWalletIcon className="text-slate-400" />
    }
    , {
      label: "Informacoes",
      icon: <AccountCircleIcon className="text-slate-400" />
    }
  ],

  portaria: [
    {
      label: "Serviços",
      icon: <RoomServiceIcon className="text-slate-400" />,
    },
    {
      label: "Moradores",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Encomendas",
      icon: <LocalShippingIcon className="text-slate-400" />
    },
    {
      label: "Visitas",
      icon: <PersonAddIcon className="text-slate-400" />
    }
  ]
};

const MenuAside = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1].toLowerCase();
  const navegate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const { usuarioLogado, notificacao, marcarNotificacoesLidas, setUsuarioLogado } = useContext(AppContext);


  const clickMenu = (label) => {

    let labelFormatada = label
    labelFormatada = label == "Notificação" ? "notificacao" : labelFormatada.toLowerCase()
    labelFormatada = label == "Serviços" ? "servicos" : labelFormatada.toLowerCase()

    const route = `/${path}/${labelFormatada.toLowerCase()}`
    setOpen(false);
    if (label === 'Notificação') {
      // marca como lidas quando o usuário acessar a tela de notificações
      marcarNotificacoesLidas(usuarioLogado?.id);
    }
    navegate(route);
  }

  const logout = () => {
    localStorage.removeItem("usuarioLog")
    navegate("/")
    setUsuarioLogado(null)
    return null
  }

  const drawerContent = (
    <div className="h-full w-64 bg-slate-900 text-white shadow-lg flex flex-col z-1 mt-16">
      <nav className="flex-1">
        <List>
          <ListItem key={"Inicio"} disablePadding>
            <ListItemButton className="hover:bg-slate-200 hover:font-bold transition-colors cursor-pointer text-white z-3" onClick={() => clickMenu("/")}>
              <ListItemIcon><HomeFilledIcon className="text-slate-400" /></ListItemIcon>
              <ListItemText primary={"Inicio"} />
            </ListItemButton>
          </ListItem>
          {menuItems[path].map((item) => {
            const isNotification = item.label === 'Notificação' || item.label === 'Notificações' || item.label === 'Notificacao';
            const countNew = notificacao?.filter(n => !n.isOpen && (n.destinatario === 'Todos' || n.destinatario === 'todos' || n.destinatario == usuarioLogado?.id)).length || 0;

            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  className="hover:bg-blue-600 hover:font-bold transition-colors cursor-pointer"
                  onClick={() => clickMenu(item.label)}
                >
                <ListItemIcon>
                  {isNotification ? (
                    <Badge color="error" badgeContent={countNew} invisible={countNew === 0}>
                      {item.icon}
                    </Badge>
                  ) : item.icon}
                </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
            </ListItem>
            )
          })}
          <ListItem
            button
            key={"Sair"}
            className="hover:bg-blue-600 hover:font-bold transition-colors cursor-pointer fixed bottom-0"
            onClick={logout}
          >
            <ListItemIcon> <LogoutIcon className="text-slate-400" /> </ListItemIcon>
            <ListItemText primary={"Sair"} />
          </ListItem>
        </List>
      </nav>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(!open)}
            className="m-2 text-white"
            sx={{ position: "fixed", top: 10, left: 10, zIndex: 80 }}
          >
            <MenuIcon className=" text-slate-400" />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: { backgroundColor: "#1a202c", color: "#fff" },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <aside className="h-full w-64 bg-gray-900 text-white shadow-lg flex flex-col">
          {drawerContent}

        </aside>
      )}
    </>
  );
};

export default MenuAside;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/Header.jsx
```jsx
import React, { use, useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Header = () => {

    const { usuarioLogado, condominio } = useContext(AppContext)
    return (
        <header className="w-full h-16 bg-slate-900 text-white shadow-lg flex items-center justify-between px-6 z-10 fixed">
            <h1></h1>
            <h1 className=" font-bold tracking-wide">{condominio.nome}</h1>
            <h1 className=" font-bold tracking-wide">{usuarioLogado?.nome}</h1>
        </header>
    );
};

export default Header;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/InformacoesMorador.jsx
```jsx
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const InformacoesMorador = () => {
    const { usuarioLogado, condominio } = useContext(AppContext)

    return (
        <div className="min-h-full w-full">
            <div className='flex h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Informações</h1>
            </div>

            <section className='p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do usuário</h2>
                    <p><strong>Nome:</strong> {usuarioLogado?.nome}</p>
                    <p><strong>Email:</strong> {usuarioLogado?.email}</p>
                    <p><strong>Apartamento:</strong> {usuarioLogado?.apt || '-'}</p>
                    <p><strong>Torre:</strong> {usuarioLogado?.torre || '-'}</p>
                    <p><strong>Telefone:</strong> {usuarioLogado?.telefone}</p>
                </article>

                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do Condomínio</h2>
                    <p><strong>Nome:</strong> {condominio?.nome}</p>
                    <p><strong>Endereço:</strong> {condominio?.rua}</p>
                    <p><strong>Telefone:</strong> {condominio?.telefone}</p>
                </article>
            </section>
        </div>
    )
}

export default InformacoesMorador
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/InformacoesSindico.jsx
```jsx
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const InformacoesSindico = () => {
    const { usuarioLogado, usuarios, condominio } = useContext(AppContext)

    return (
        <div className="min-h-full w-full">
            <div className='flex h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Informações</h1>
            </div>

            <section className='p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do usuário</h2>
                    <p><strong>Nome:</strong> {usuarioLogado?.nome}</p>
                    <p><strong>Email:</strong> {usuarioLogado?.email}</p>
                    <p><strong>Tipo:</strong> {usuarioLogado?.tipo}</p>
                    <p><strong>Telefone:</strong> {usuarioLogado?.telefone}</p>
                    <p><strong>Apartamento:</strong> {usuarioLogado?.apt || '-'}</p>
                    <p><strong>Torre:</strong> {usuarioLogado?.torre || '-'}</p>
                </article>

                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do Condomínio</h2>
                    <p><strong>Nome:</strong> {condominio?.nome}</p>
                    <p><strong>Endereço:</strong> {condominio?.rua}</p>
                    <p><strong>Telefone:</strong> {condominio?.telefone}</p>
                </article>
            </section>
        </div>
    )
}

export default InformacoesSindico
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/routes/Router.jsx
```jsx
import { Route, Routes } from "react-router-dom"
import App from "../App"
import Index from "../pages/sindico/index"
import TelaLogin from "../componets/TelaLogin"
import Portaria from "../pages/portaria"
import HomeMorador from "../pages/moradores"
import ReservasMorador from "../pages/moradores/ReservasMorador"
import ServicosMorador from "../pages/moradores/ServiçosMorador"
import VisitasMorador from "../pages/moradores/VisitasMorador"
import EncomendasMorador from "../pages/moradores/EncomendasMorador"
import ServicosSindico from "../pages/sindico/ServiçosSindico"
import MoradoresSindico from "../pages/sindico/MoradoresSindico"
import ReservasSindico from "../pages/sindico/ReservasSindico"
import Notificacoes from "../pages/sindico/Notificacoes"
import PortalTransparencia from "../pages/sindico/PortalTransparencia"
import InformacoesSindico from "../pages/sindico/InformacoesSindico"
import PortariaSindico from "../pages/sindico/PortariaSindico"
import Apartamentos from "../pages/sindico/Apartamentos"
import FuncionariosSindico from "../pages/sindico/FuncionariosSindico"
import EncomendasSindico from "../pages/sindico/EncomendasSindico"
import MoradoresPortaria from "../pages/portaria/MoradoresPortaria"
import RecebidosPortaria from "../pages/portaria/RecebidosPortaria"
import ServicosPortaria from "../pages/portaria/ServicosPortaria"
import VisitasPortaria from "../pages/portaria/VisitasPortaria"
import AmbientesSindico from "../pages/sindico/AmbienteSinidico"
import VisitasSindico from "../pages/sindico/VisitasSindico"
import PrivateRoute from "../componets/RotaProtegida"
import NotificacaoMorador from "../pages/moradores/NotificacaoMorador"
import PortalTransparenciaMorador from "../pages/moradores/PortalTransparenciaMorador"
import InformacoesMorador from "../pages/moradores/InformacoesMorador"

const Router = () => {

    return (
        <Routes>
            <Route index element={<TelaLogin />} />
            <Route path="/sindico" element={<PrivateRoute> <App /></PrivateRoute>}>
                <Route index element={<Index />} />
                <Route path="portaria" element={<PortariaSindico />} />
                <Route path="reservas" element={<ReservasSindico />} />
                <Route path="servicos" element={<ServicosSindico />} />
                <Route path="visitas" element={<VisitasSindico />} />
                <Route path="encomendas" element={<EncomendasSindico />} />
                <Route path="apartamentos" element={<Apartamentos />} />
                <Route path="moradores" element={<MoradoresSindico />} />
                <Route path="funcionarios" element={<FuncionariosSindico />} />
                <Route path="notificacao" element={<Notificacoes />} />
                <Route path="ambientes" element={<AmbientesSindico />} />
                <Route path="transparencia" element={<PortalTransparencia />} />
                <Route path="informacoes" element={<InformacoesSindico />} />

            </Route>
            <Route path="morador" element={<PrivateRoute><App /></PrivateRoute>}>
                <Route index  element={<HomeMorador />} />
                <Route path="reservas" element={<ReservasMorador />} />
                <Route path="servicos" element={<ServicosMorador />} />
                <Route path="visitas" element={<VisitasMorador />} />
                <Route path="encomendas" element={<EncomendasMorador />} />
                <Route path="notificacao" element={<NotificacaoMorador />} />
                <Route path="transparencia" element={<PortalTransparenciaMorador />} />
                <Route path="informacoes" element={<InformacoesMorador />} />
            </Route>
            <Route path="portaria" element={<PrivateRoute><App /></PrivateRoute>}>   
                <Route index  element={<Portaria />} />
                <Route path="moradores" element={<MoradoresPortaria />} />
                <Route path="encomendas" element={<RecebidosPortaria />} />
                <Route path="servicos" element={<ServicosPortaria />} />
                <Route path="visitas" element={<VisitasPortaria />} />
            </Route>
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>

    )
}

export default Router
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/context/AppContext.jsx
```jsx
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
    const [gastos, setGastos] = useState([])

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "12345",
            cpf: "203201256325",
            tipo: "sindico",
            condominio: "A",
            apt: "Escritorio",
            torre: "a",
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
        const listaDeGastos = localStorage.getItem("gastos");
        listaDeGastos && setGastos(JSON.parse(listaDeGastos))

    }, []);

    const adicionarNotificacao = (novaNotificacao) => {
        const novalista = [...notificacao, novaNotificacao]
        setnotificacao(novalista)
        localStorage.setItem("notificacao", JSON.stringify(novalista))
    }

    const adicionarGasto = (novoGasto) => {
        const novalista = [...gastos, novoGasto]
        setGastos(novalista)
        localStorage.setItem("gastos", JSON.stringify(novalista))
    }

    const editarGasto = (id, modificacao) => {
        const novaLista = gastos.map(g => {
            if (g.id == id) {
                const { titulo, descricao, valor, data, categoria } = modificacao
                return { ...g, titulo, descricao, valor, data, categoria }
            }
            return g
        })
        setGastos(novaLista)
        localStorage.setItem("gastos", JSON.stringify(novaLista))
    }

    const removerGasto = (id) => {
        const novaLista = gastos.filter(g => g.id != id)
        setGastos(novaLista)
        localStorage.setItem("gastos", JSON.stringify(novaLista))
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

    const marcarNotificacoesLidas = (usuarioId) => {
        const novaLista = notificacao.map(notif => {
            const isForAll = (notif.destinatario === 'Todos' || notif.destinatario === 'todos');
            const isForUser = notif.destinatario == usuarioId;
            if (isForAll || isForUser) {
                return { ...notif, isOpen: true };
            }
            return notif;
        });
        setnotificacao(novaLista);
        localStorage.setItem("notificacao", JSON.stringify(novaLista));
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

    const aprovarReserva = (id, statusReserva) => {
        alert(`Reserva ${statusReserva} com sucesso!`)
        const novaLista = reservas.map(reserv => {
            if (reserv.id == id) {
                return {
                    ...reserv, status: statusReserva
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

    const editarUsuario = (id, modificação) => {
        const novaLista = usuarios.map(user => {
            if (user.id == id) {
                const { nome,
                    email,
                    senha,
                    cpf,
                    telefone,
                    apt,
                    torre } = modificação
                return { ...user, nome, email, senha, cpf, telefone, apt, torre }
            }

            return user
        })

        setUsuarios(novaLista);
        localStorage.setItem("usuarios", JSON.stringify(novaLista))
    }



    return (
        <AppContext.Provider value={{ usuarios, addUsuario, setUsuarioLogado, usuarioLogado, condominio, adicionarAmbientes, ambientes, adicionarReserva, reservas, encomendas, adicionarEncomendas, servicos, adicionarServico, visitas, adicionarVisita, notificacao, adicionarNotificacao, editarNotificação, marcarNotificacoesLidas, editarVisita, editarServico, editarEncomendas, editarReserva, editarAmbiente, editarUsuario, aprovarReserva, gastos, adicionarGasto, editarGasto, removerGasto }}>
            {children}
        </AppContext.Provider>
    );
};
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/TelaLogin.jsx
```jsx
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
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/VisitasMorador.jsx
```jsx
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';
import FormVisita from '../../componets/FormVisita';
import { AppContext } from '../../context/AppContext';


const VisitasMorador = () => {
    const { usuarioLogado, visitas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [listaVisitasRenderizacao, setListaVisitasRenderizacao] = useState([])
    const [visitaTemp, setVisitaTemp] = useState(null) //variavel temporaria para armazenar a visita  especifica para edição

    useEffect(() => {
        setListaVisitasRenderizacao(visitas)
    }, [visitas])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (visita) => {
        setVisitaTemp(visita)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarVisita = (visita) => {
        setListaVisitasRenderizacao([visita, ...listaVisitasRenderizacao])
    }


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Visitas</h1>

            </div>
            <section className='p-8'>
                {visitas?.filter((vis => vis.idUsuario == usuarioLogado.id)).map((visita, i) => (
                    <CardVisita visita={visita} clickEditar={() => clickEditar(visita)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Visita`}
                close={() => setOpenModal(false)}>

                <FormVisita
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarVisita={criarVisita}
                    visita={visitaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default VisitasMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/ReservasMorador.jsx
```jsx
import React, { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext';

const ReservasMorador = () => {
    const { usuarioLogado, reservas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [reservasTemp, setReservasTemp] = useState(null); // Quado u usuario clicar em editar, armazena o objeto da reserva
    const [listaReservas, setListasReservas] = useState([])

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        const buscarReserva = reservas.find(reserv => reserv.id == id)
        setReservasTemp(buscarReserva)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Reservas</h1>

            </div>
            <section className='p-8'>
                {reservas?.filter((res => res.idUsuario == usuarioLogado.id)).map((reserva, i) => (
                    <CardReserva reserva={reserva} clickEditar={() => clickEditar(reserva.id)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="Morador" // Passa o tipo de usuário para o formulário
                    objetoReserva={reservas}
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    reserva={reservasTemp}
                    fecharModal={() => setOpenModal(!openModal)} />
            </BasicModal >
        </div>
    );
};

export default ReservasMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/ServiçosMorador.jsx
```jsx
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, IconButton, InputBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormSevico from '../../componets/FormSevico';
import CardServico from '../../componets/CardServico';
import { AppContext } from '../../context/AppContext';


const ServicosMorador = () => {
    const { usuarioLogado, servicos } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([]);
    const [servicoTemp, setServicoTemp] = useState(null);

    useEffect(() => {
        setListaServicoRenderizacao(servicos) 
    }, [servicos])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (servico) => {
        setServicoTemp(servico)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarServico = (servico) => {
        setListaServicoRenderizacao([servico, ...listaServicoRenderizacao]);
    }

    return (
        <div className="min-h-full w-full  gap-4 flex flex-col">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Serviços </h1>

            </div>

            <section className='p-8'>
                {servicos?.filter((serv => serv.idUsuario == usuarioLogado.id)).map((servico, i) => (
                    <CardServico servico={servico} clickEditar={() => clickEditar(servico)} />
                ))
                }

            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Serviço`} close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarServico={criarServico}
                    servico={servicoTemp}
                />

            </BasicModal >

        </div>
    );
};

export default ServicosMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/PortalTransparenciaMorador.jsx
```jsx
import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardPortal from '../../componets/CardPortal';
import { AppContext } from '../../context/AppContext';

const PortalTransparenciaMorador = () => {
    const { gastos } = useContext(AppContext);
    const [listaGastos, setListaGastos] = useState([]);

    useEffect(() => {
        setListaGastos(gastos);
    }, [gastos]);

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Portal da Transparência</h1>
                
            </div>

            <section className='p-8 flex flex-col gap-4'>
                {listaGastos?.map((gasto, i) => (
                    <CardPortal gasto={gasto} key={gasto?.id ?? i} />
                ))}
            </section>
        </div>
    )
}

export default PortalTransparenciaMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/NotificacaoMorador.jsx
```jsx
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CardNotificacao from '../../componets/CardNotificacao';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function NotificacaoMorador() {
    const { notificacao, usuarioLogado } = useContext(AppContext);

    return (
        <div className="notificacao-container ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between mb-8'
                        >
                            <h1>Notificações</h1>
                            
                        </div>
            <div className="notificacoes-lista space-y-4 p-4">
                {notificacao?.filter(notif=>notif.destinatario == usuarioLogado.id ).map((notificacao, i) => (
                    <CardNotificacao key={i} notificacao={notificacao} clickEditar={() => clickEditar(notificacao)} />
                ))}
            </div>
        </div>
    );
}
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/moradores/EncomendasMorador.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';
import { AppContext } from '../../context/AppContext';

const EncomendasMorador = () => {
    const { usuarioLogado, encomendas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaEncomendaRenderizacao, setListaEncomendaRenderizacao] = useState([]);
    const [encomendaTemp, setEncomendaTemp] = useState(null);
    
    useEffect(() => {
        setListaEncomendaRenderizacao(encomendas)
    }, [encomendas])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (encomenda) => {
        setEncomendaTemp(encomenda)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarEncomenda = (encomenda) => {
        setListaEncomendaRenderizacao([encomenda, ...listaEncomendaRenderizacao]);
    }


    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Encomendas</h1>

            </div>
            <section className='p-8'>
                {encomendas?.filter((encom => encom.idUsuario == usuarioLogado.id)).map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(encomenda)} />
                ))
                }

            </section>

            <ButtonModal click  ={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Encomenda`} close={() => setOpenModal(false)}>
                <FormEncomendas 
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarEncomenda={criarEncomenda}
                    encomenda={encomendaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default EncomendasMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/Notificacoes.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormNotificacoes from '../../componets/FormNotificacoes';
import CardNotificacao from '../../componets/CardNotificacao';
import { AppContext } from '../../context/AppContext';

const Notificacoes = () => {
    const { notificacao } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    
    const [tipoModal, setTipoModal] = useState(null);

    const [listaNotificacaoRenderizacao, setListaNotificacaoRenderizacao] = useState([]);

    useEffect(() => {
        setListaNotificacaoRenderizacao(notificacao)
    }, [notificacao])
    const [notificacaoTemp, setNotificacaoTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (notificacao) => {
        setNotificacaoTemp(notificacao)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarNotificacao = (notificacao) => {
        setListaNotificacaoRenderizacao([notificacao, ...listaNotificacaoRenderizacao])
    }


    return ( 
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Notificações</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <section className='p-8 flex flex-col gap-4'>
                {listaNotificacaoRenderizacao?.map((notificacao, i) => (
                    <CardNotificacao notificacao={notificacao} clickEditar={() => clickEditar(notificacao)} />
                ))
                }

            </section>

            <BasicModal 
                openModal={openModal} 
                title={`${tipoModal} Notificação`} 
                close={() => setOpenModal(false)}>
                
                <FormNotificacoes 
                    tipoUsuario={"Sindico"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarNotificacao={criarNotificacao}
                    notificacao={notificacaoTemp}
                />
                
            </BasicModal>
        </div>
    );
};

export default Notificacoes;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/RotaProtegida.jsx
```jsx
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLog"))
  const { usuarioLogado } = useContext(AppContext)


  const location = useLocation();
  const path = location.pathname.split("/")[1].toLowerCase();
  if (usuario && usuario.tipo != path) {
    return <Navigate to={`/${usuario.tipo}`} replace />;
  }

  // Sem login → volta ao login
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormPortal.jsx
```jsx
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const categoriasPadrao = [
    'Manutenção',
    'Serviço',
    'Impostos',
    'Outros'
];

const FormPortal = ({ tipoUsuario, criarOuEditar, fecharModal, criarGasto, gasto }) => {
    const { adicionarGasto, editarGasto } = useContext(AppContext);

    const editar = criarOuEditar === 'Editar';

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState(dayjs());
    const [categoria, setCategoria] = useState(categoriasPadrao[0]);

    const handleClick = () => {
        setTitulo('');
        setDescricao('');
        setValor('');
        setData(dayjs());
        setCategoria(categoriasPadrao[0]);
        fecharModal();
    };

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();

        const novoGasto = {
            id: editar ? gasto.id : v4(),
            titulo,
            descricao,
            valor,
            data: data ? dayjs(data).format('DD/MM/YYYY') : null,
            categoria
        };

        if (editar) {
            editarGasto(gasto.id, novoGasto);
            return;
        }
        adicionarGasto(novoGasto);
        criarGasto && criarGasto(novoGasto);
    };

    useEffect(() => {
        if (editar && gasto) {
            setTitulo(gasto.titulo);
            setDescricao(gasto.descricao);
            setValor(gasto.valor);
            setData(gasto.data ? dayjs(gasto.data, 'DD/MM/YYYY') : dayjs());
            setCategoria(gasto.categoria || categoriasPadrao[0]);
        }
    }, [editar, gasto]);

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                id='titulo'
                label='Título'
                variant='outlined'
                size='small'
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />

            <TextField
                id='descricao'
                label='Descrição'
                variant='outlined'
                multiline
                minRows={3}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <TextField
                required
                id='valor'
                label='Valor (R$)'
                variant='outlined'
                type='number'
                size='small'
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{ textField: { size: 'small', required: true } }}
                    label='Data'
                    format='DD/MM/YYYY'
                    value={dayjs(data)}
                    onChange={(newValue) => setData(newValue)}
                />
            </LocalizationProvider>

            <TextField
                required
                id='categoria'
                select
                label='Categoria'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                {categoriasPadrao.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
            </TextField>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant='contained' type='submit' color='success'>Salvar</Button>
                <Button variant='contained' color='error' onClick={handleClick}>Cancelar</Button>
            </div>
        </form>
    )
}

export default FormPortal;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardPortal.jsx
```jsx
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CardPortal = ({ clickEditar, clickRemover, gasto }) => {
    const { usuarioLogado } = useContext(AppContext)
    const { titulo, descricao, valor, data, categoria } = gasto

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">{titulo}</h2>
                <span className="text-sm text-gray-600">{categoria}</span>
            </div>
            <p className="mb-2 text-gray-700">{descricao}</p>
            <div className="flex items-center justify-between">
                <div className="text-gray-700">Valor: <strong>R$ {valor}</strong></div>
                <div className="text-gray-500">{data}</div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
                {usuarioLogado?.tipo === 'sindico' && (
                    <>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={clickEditar}>Editar</button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700" onClick={clickRemover}>Remover</button>
                    </>
                )}
            </div>
        </article>
    )
}

export default CardPortal
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/PortalTransparencia.jsx
```jsx
import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormPortal from '../../componets/FormPortal';
import CardPortal from '../../componets/CardPortal';
import { AppContext } from '../../context/AppContext';

const PortalTransparencia = () => {
    const { gastos, removerGasto } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);
    const [listaGastos, setListaGastos] = useState([]);
    const [gastoTemp, setGastoTemp] = useState(null);

    useEffect(() => {
        setListaGastos(gastos);
    }, [gastos]);

    const clickOpenModal = () => {
        setTipoModal('Criar');
        setOpenModal(!openModal);
    };

    const clickEditar = (gasto) => {
        setGastoTemp(gasto);
        setTipoModal('Editar');
        setOpenModal(!openModal);
    };

    const criarGasto = (g) => {
        setListaGastos([g, ...listaGastos]);
    };

    const removerGastoLocal = (id) => {
        removerGasto(id);
        setListaGastos(listaGastos.filter(g => g.id !== id));
    };

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Portal da Transparência</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Buscar"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <section className='p-8 flex flex-col gap-4'>
                {listaGastos?.map((gasto, i) => (
                    <CardPortal gasto={gasto} key={gasto?.id ?? i} clickEditar={() => clickEditar(gasto)} clickRemover={() => removerGastoLocal(gasto.id)} />
                ))}
            </section>

            <BasicModal openModal={openModal} title={`${tipoModal} Gasto`} close={() => setOpenModal(false)}>
                <FormPortal tipoUsuario={'Sindico'} criarOuEditar={tipoModal} fecharModal={() => setOpenModal(!openModal)} criarGasto={criarGasto} gasto={gastoTemp} />
            </BasicModal>
        </div>
    )
}

export default PortalTransparencia;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardNotificacao.jsx
```jsx
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CardNotificacao = ( {clickEditar, notificacao }) => {
    
    const OnClickDetalhe = () => {
        clickEditar()
    }

    const { usuarios, usuarioLogado } = useContext(AppContext)
    const {
        mensagem,
        destinatario
    } = notificacao
    const usuario = usuarios.find(user => user.id == destinatario)

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Destinatario: {destinatario === 'Todos' ? "Para todos os moradores" : `${usuario.nome}`} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Mensagem: {mensagem}</p>
            <p className="mb-4 text-gray-700">Apartamento: {usuario.apt} - Torre: {usuario.torre}</p>
            <div className="flex justify-between items-center">
                {usuarioLogado.tipo == "sindico" &&

                    <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}>
                    Editar
                    </button>}
            </div>
        </article>
    )
}

export default CardNotificacao
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormNotificacoes.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormNotificacoes = ({ tipoUsuario, criarOuEditar, fecharModal, criarNotificacao, notificacao }) => {

    const { usuarios, adicionarNotificacao, editarNotificação } = useContext(AppContext)

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";
    
    
    const [destinatario, setDestinatario] = useState('');
    const [nomeMorador, setNomeMorador] = useState('')
    const [mensagem, setMensagem] = useState('')


    const handleClick = () => {
        setNomeMorador(null);
        setMensagem(null);

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();


        const novaNotificacao = {
            id: v4(),
            mensagem,
            destinatario,
            isOpen: false
        }


        if (editar) {
            return editarNotificação(notificacao.id, { mensagem, destinatario })
        }
        adicionarNotificacao(novaNotificacao)
    }



    useEffect(() => {
        if(editar) {
            setDestinatario(notificacao.destinatario);
            setMensagem(notificacao.mensagem)
        }
    }, [])

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                select
                label='Destinatario'
                value={destinatario}
                onChange={(e) => setDestinatario(e.target.value)}

            >
                <MenuItem value={"todos"}>"Todos"</MenuItem>
                {usuarios?.filter(user => user.tipo == "morador").map(user => {
                    return (
                        <MenuItem value={user.id}>{user.nome}</MenuItem>

                    )
                })}
            </TextField>


            <TextField
                required
                id="outlined-basic"
                label="Notificação"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                variant="outlined"
                multiline
                minRows={5}
                maxRows={10}
            />
            <div className='flex flex-col justify-between gap-4'>
                <Button 
                    variant="contained" 
                    type='submit' 
                    color='success'>
                    Salvar
                </Button>
                <Button 
                    variant="contained"
                    color='error' 
                    onClick={handleClick} > 
                    Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormNotificacoes
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardReserva.jsx
```jsx
import React, { useContext } from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';
import { AppContext } from '../context/AppContext';


export default function CardReserva({ clickEditar, reserva }) {
    const { usuarioLogado, aprovarReserva, usuarios } = useContext(AppContext)

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const morador = usuarios?.find(user => user.id === reserva.idUsuario);
    const {
        espaco,
        dataReserva,
        reservaHoraEntrada,
        reservaHoraSaida,
        descricaoReserva,
        apt,
        torre,
        status  
    } = reserva
    

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Reserva - {espaco}</h2>
                    <p className="text-sm text-gray-500">Reserva para {formatData(dayjs(dataReserva))}</p>
                    <p className="text-sm text-gray-500">Horario: {formatHora(dayjs(reservaHoraEntrada))} as {formatHora(dayjs(reservaHoraSaida))}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">"{descricaoReserva}."</p>
            <p className="text-sm text-gray-500">Morador: {morador.nome}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: {apt} - Torre {torre}</span>
                <span className="text-sm text-gray-500">Status: {status}</span>

                <div className='p-2 '>
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}
                >
                    Editar
                </button>
                    {usuarioLogado.tipo == "sindico" && <button
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 mr-2 ml-2"
                        onClick={() => aprovarReserva(reserva.id, "Aprovado")}
                    >
                        Aprovar
                    </button>}
                    {usuarioLogado.tipo == "sindico" && <button
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        onClick={() => aprovarReserva(reserva.id, "Cancelado")}
                    >
                        Cancelar
                    </button>}
                </div>
            </div>
        </article>
    );
}
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormReserva.jsx
```jsx
import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const FormReserva = ({ tipoUsuario, criarOuEditar, fecharModal, criarReserva, reserva }) => {
    const { adicionarReserva, ambientes, editarReserva, usuarioLogado, usuarios } = useContext(AppContext)

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    //Variavel do select espaco
    const [espaco, setEspaco] = useState('');

    //Variavel data reserva
    const [dataReserva, setDataReserva] = useState(dayjs());

    //Variaveis do horario
    const [reservaHoraEntrada, setReservaHoraEntrada] = useState(dayjs());
    const [reservaHoraSaida, setReservaHoraSaida] = useState(dayjs());

    //Variaveis do Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");

    //Variavel descricao
    const [descricaoReserva, setDescricaoReserva] = useState("");

    const handleChange = (e) => {
        setEspaco(e.target.value)
    }

    const handleClick = () => {
        setEspaco("");
        setDataReserva(null);
        setReservaHoraEntrada(null);
        setReservaHoraSaida(null);
        setApt('');
        setTorre('');
        setDescricaoReserva("");

        fecharModal(); // ## Fecha o modal ao cancelar - prop passada pela pagina pai
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        fecharModal(); // ## Fecha o modal ao cancelar - prop passada pela pagina pai
        const novaReserva = {
            id: v4(),
            espaco,
            dataReserva,
            reservaHoraEntrada,
            reservaHoraSaida,
            descricaoReserva,
            apt,
            torre,
            idUsuario: usuarioLogado.id,
            status: editar ? reserva.status : "Pendente",
        }

        if (editar) {
            editarReserva(reserva.id, novaReserva)
        }

        editar || adicionarReserva(novaReserva)
    }

    // ## monta o formulario ao ser aberto o modal com os dados da reserva para editar
    useEffect(() => {
        if (!editar) {
            setApt(usuarioLogado.apt);
            setTorre(usuarioLogado.torre);
        }
        if (editar) {
            const morador = usuarios.find(user => user.id == reserva?.idUsuario)
            setApt(morador.apt);
            setTorre(morador.torre);
            setEspaco(reserva.espaco);
            setDataReserva(reserva.dataReserva);
            setReservaHoraEntrada(reserva.reservaHoraEntrada);
            setReservaHoraSaida(reserva.reservaHoraSaida);
            setDescricaoReserva(reserva.descricaoReserva);
        } 
    }, []);


    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <TextField
                required
                id="outlined-basic"
                label="Apartemento"
                variant="outlined"
                size='small'
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                disabled={!sindico} // Morador não pode editar o apt
            />

            <TextField
                required
                id="outlined-basic"
                label="Torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                disabled={!sindico} // Morador não pode editar a torre
            />

            <TextField
                required
                select
                label='Espaços'
                size='small'
                value={espaco}
                onChange={handleChange}
            >
                {ambientes?.map(amb => {
                    return (
                        <MenuItem value={amb.nome} >{amb.nome}</MenuItem>
                    )
                })}
            </TextField>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label='Data Reversa'
                    format='DD/MM/YYYY'
                    value={dayjs(dataReserva)}
                    onChange={(newValue) => setDataReserva(newValue)}
                    disablePast
                    minDate={dayjs()}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label="Entrada"
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(reservaHoraEntrada)}
                    onChange={(newValue) => setReservaHoraEntrada(newValue)}
                    minTime={dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />

                <TimePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label="Saida"
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(reservaHoraSaida)}
                    onChange={(newValue) => setReservaHoraSaida(newValue)}
                    minTime={dayjs(reservaHoraEntrada) || dayjs().hour(6).minute(29)}
                    maxTime={dayjs().hour(22).minute(59)}
                />


            </LocalizationProvider>

            <TextField
                id="outlined-basic"
                label="Descrição da reserva" variant="outlined"
                multiline
                maxRows={3}
                value={descricaoReserva}
                onChange={(e) => setDescricaoReserva(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>

                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    {(editar && sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>

                <Button
                    variant="contained"
                    color='error'
                    onClick={handleClick} >
                    Cancelar
                </Button>

            </div>
        </form>
    );
};

export default FormReserva;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/ReservasSindico.jsx
```jsx
import React, { useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardReserva from '../../componets/CardReserva';
import FormReserva from '../../componets/FormReserva';
import { AppContext } from '../../context/AppContext';


const ReservasSindico = () => {
    const { reservas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar
    
    const [listaReservaRenderizacao, setListaReservaRenderizacao] = useState([]);
    const [reservaTemp, setReservaTemp] = useState(null);

    // ## Função para abrir o modal de criar ou editar reserva
    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    // ## Função para abrir o modal no modo editar reserva
    const clickEditar = (id) => {
        const buscarReserva = reservas.find(reserv => reserv.id == id)
        setReservaTemp(buscarReserva)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    // fazer logica para buscar a reserva pelo idReserva
    //setIdReserva(idReserva);
    }

    const criarReserva = (reserva) => {
        setListaReservaRenderizacao([reserva, ...listaReservaRenderizacao]);
    };

    // Ordena a lista para que reservas com status 'pendente' apareçam primeiro
    const listaOrdenada = React.useMemo(() => {
        const base = [...listaReservaRenderizacao, ...(reservas || [])];
        return base.sort((a, b) => {
            const aPend = (a?.status || '').toString().toLowerCase() === 'pendente';
            const bPend = (b?.status || '').toString().toLowerCase() === 'pendente';
            if (aPend && !bPend) return -1;
            if (!aPend && bPend) return 1;
            return 0; // mantém ordem relativa entre itens do mesmo tipo
        });
    }, [listaReservaRenderizacao, reservas]);

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Reservas</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                {listaOrdenada?.map((reserva, i) => (
                    <CardReserva
                        key={reserva?.id ?? i}
                        reserva={reserva}
                        clickEditar={() => clickEditar(reserva.id)}
                    />
                ))}
                
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} /> {/* ##função  */}

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Reserva`} // Título dinâmico conforme o tipo de modal
                close={() => setOpenModal(false)}
            >
                <FormReserva
                    tipoUsuario="Sindico" // Passa o tipo de usuário para o formulário
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)}
                    criarReserva={criarReserva}
                    reserva={reservaTemp}
                 />
            </BasicModal >
        </div >
    );
};

export default ReservasSindico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormMoradores.jsx
```jsx
import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const FormMoradores = ({ tipoUsuario, criarOuEditar, fecharModal, criarMorador, inquilino }) => {

    const { addUsuario, editarUsuario } = useContext(AppContext);

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    //Variaveis do morador
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    //Variaveis do Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");

    //Validação campo Cpf
    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    //Validação compo telefone
    const handleChangeTelefone = (e) => {
        let digits = e.target.value.replace(/\D/g, "").slice(0, 11);

        if (digits.length <= 10) {
            digits = digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            digits = digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }

        setTelefone(digits);
    }

    const handleClick = () => {
        setNome('');
        setCpf('');
        setTelefone('');
        setEmail('')
        setApt('');
        setTorre('');
        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novoUsuario = {
            id: uuidv4(),
            nome,
            email,
            senha,
            cpf,
            tipo: 'morador',
            telefone,
            apt,
            torre
        }

        if (editar) {
            editarUsuario(inquilino.id, novoUsuario);
        }
        editar || addUsuario(novoUsuario);
        fecharModal();

    }

    useEffect(() => {
        if (editar) {
            setNome(inquilino.nome);
            setEmail(inquilino.email);
            setCpf(inquilino.cpf);
            setSenha(inquilino.senha)
            setTelefone(inquilino.telefone);
            setApt(inquilino.apt);
            setTorre(inquilino.torre);
        }
    }, [])

    return (
        <form onSubmit={submitForm} className="border p-3 flex flex-col gap-5 mb-3 ">
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Email"
                placeholder='Ex: MariaSilva@gmail.com'
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="CPF"
                size='small'
                variant="outlined"
                placeholder='Somente os numeros'
                value={cpf}
                onChange={handleChangeCpf}
            />

            <TextField
                required
                id="outlined-password-input"
                label="Senha"
                size='small'
                type="password"
                autoComplete="current-password"
                sx={{ minWidth: 300 }}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />


            <TextField
                required
                label="Telefone"
                size='small'
                variant="outlined"
                value={telefone}
                onChange={(handleChangeTelefone)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Apartemento"
                variant="outlined"
                size='small'
                value={apt}
                onChange={(e) => setApt(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    Salvar
                </Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormMoradores
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormSevico.jsx
```jsx
import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { Button, Fab, MenuItem, TextField } from '@mui/material';
import BasicChildModal from '../componets/ChildModal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import FormPrestadorServico from './FormPrestadorServico';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormSevico = ({ tipoUsuario, criarOuEditar, fecharModal, criarServico, servico }) => {
    const [openChildModal, setOpenChildModal] = useState(false);
    const { adicionarServico, editarServico, usuarioLogado, usuarios } = useContext(AppContext)

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";

    //Variavel nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState("");

    //Variaveis das datas de inicio e fim
    const [dataInicio, setDataInicio] = useState(dayjs());
    const [dataFim, setDataFim] = useState(dayjs());

    //Variaveis dos horarios de entrada e saida
    const [horaEntrada, setHoraEntrada] = useState(dayjs());
    const [horaSaida, setHoraSaida] = useState(dayjs());

    //Variaveis Apt e torre
    const [apt, setApt] = useState("");
    const [torre, setTorre] = useState("");
    const [destinatario, setDestinatario] = useState("");

    //Variavel da descrição do serviço
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (usuarioLogado != "portaria") {
            setApt(usuarioLogado.apt)
            setTorre(usuarioLogado.torre)
        }
        if (editar) {
            setNomeEmpresa(servico.nomeEmpresa);
            setDataInicio(dayjs(servico.dataInicio));
            setDataFim(dayjs(servico.dataFim));
            setHoraEntrada(dayjs(servico.horaEntrada));
            setHoraSaida(dayjs(servico.horaSaida));
            setApt(servico.apt);
            setTorre(servico.torre);
            setDescricao(servico.descricao);
            if (usuarioLogado.tipo == "portaria") {
                setDestinatario(servico.idUsuario)
            }
        }
    }, [])

    useEffect(() => {
        const morador = usuarios.find(user => user.id == destinatario)
        if (morador) {
            setApt(morador.apt)
            setTorre(morador.torre)
        }
    }, [destinatario])





    const handleClick = () => {
        setNomeEmpresa("");
        setDataInicio(null);
        setDataFim(null);
        setHoraEntrada(null);
        setHoraSaida(null);
        setApt('');
        setTorre('');
        setDescricao("");

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novoServico = {
            id: v4(),
            nomeEmpresa,
            dataInicio,
            dataFim,
            horaEntrada,
            horaSaida,
            apt,
            torre,
            descricao, 
            idUsuario: usuarioLogado.tipo == "portaria" ? destinatario : usuarioLogado.id
        }
        if (editar) {
            editarServico(servico.id, novoServico)
        }
        editar || adicionarServico(novoServico)
        fecharModal()
    }

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            {usuarioLogado.tipo == "portaria" &&
                <TextField
                    required
                    select
                    label='Destinatario'
                    value={destinatario}
                    onChange={(e) => setDestinatario(e.target.value)}
                    size='small'
                >
                    {usuarios?.filter(user => user.tipo != "portaria").map(user => {
                        return (
                            <MenuItem value={user.id}>{`${user.nome} - apto: ${user.apt} - ${user.torre && user.torre}`}</MenuItem>

                        )
                    })}
                </TextField>}
            <TextField
                required
                id="outlined-basic"
                label="Empresa"
                variant="outlined"
                size='small'
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <div className='flex gap-1'>

                    <DatePicker
                        slotProps={{
                            textField: {
                                size: 'small', required:"true",
                                sx: { width: '155px' }
                            }
                        }}
                        label='Data Inicio'
                        format='DD/MM/YYYY'
                        value={dayjs(dataInicio)}
                        onChange={(newValue) => setDataInicio(newValue)}
                        disablePast
                        minDate={dayjs()}
                    />
                    <DatePicker
                        slotProps={{
                            textField: {
                                size: 'small', required:"true",
                                sx: { width: '155px' }
                            }
                        }}
                        label='Data Fim'
                        format='DD/MM/YYYY'
                        value={dayjs(dataFim)}
                        onChange={(newValue) => setDataFim(newValue)}
                        disablePast
                        minDate={dataInicio || dayjs()}
                    />
                </div>
                <div className='flex gap-1'>
                    <TimePicker
                        slotProps={{
                            textField: {
                                size: 'small', required:"true",
                                sx: { width: '150px' }
                            }
                        }}
                        label="Entrada"
                        format="HH:mm"
                        ampm={false}
                        value={dayjs(horaEntrada)}
                        onChange={(newValue) => setHoraEntrada(newValue)}
                        minTime={dayjs().hour(7).minute(29)}
                        maxTime={dayjs().hour(17).minute(0)}
                    />
                    <TimePicker
                        slotProps={{
                            textField: {
                                size: 'small', required:"true",
                                sx: { width: '151px' }
                            }
                        }}
                        label="Saida"
                        format="HH:mm"
                        ampm={false}
                        value={dayjs(horaSaida)}
                        onChange={(newValue) => setHoraSaida(newValue)}
                        minTime={dayjs(horaEntrada) || dayjs().hour(7).minute(29)}
                        maxTime={dayjs().hour(19).minute(30)}
                    />
                </div>
            </LocalizationProvider>

            <TextField
                required
                id="outlined-basic"
                label="Apartemento"
                variant="outlined"
                size='small'
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                disabled={!sindico}
            />


            <TextField
                required
                id="outlined-basic"
                label="Torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                disabled={!sindico}
            />



            <TextField
                id="outlined-multiline-flexible"
                label="Descrição do Serviço"
                multiline
                maxRows={5}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <Button onClick={() => setOpenChildModal(true)}
                variant="outlined">Adicionar Prestador de Serviço</Button>

            <BasicChildModal
                openChildModal={openChildModal} title="Dados"
                closeChild={() => setOpenChildModal(false)}>

                <FormPrestadorServico
                    fecharChildModal={() => setOpenChildModal(!openChildModal)}
                />
            </BasicChildModal>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant="contained" type='submit'
                    color='success'>{(editar && sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormSevico
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardFuncionarios.jsx
```jsx
import React from 'react';

const CardFuncionarios = ({ clickEditar, funcionario }) => {

    const onClickDetalhe = () => {
        clickEditar()
    }

    const {
        nome,
        email,
        telefone,
        cpf,
        cargo,
        tipo
    } = funcionario

    return (
        <article>
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
                <div className="flex items-center mb-3">
                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-900">{nome}</h2>
                        <p className="text-sm text-gray-500">Cargo: {tipo}</p>
                    </div>
                </div>
                <p className="mb-1 text-gray-800">Email:<span className="text-gray-700"> {email}</span></p>
                <p className="mb-1 text-gray-800">Telefone:<span className="text-gray-700"> {telefone}</span></p>
                <p className="mb-4 text-gray-800">Cpf: <span className="text-gray-700">{cpf}</span></p>
                <div className="flex justify-between items-center">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => onClickDetalhe("123")} >Editar</button>
                </div>
            </div>
        </article>
    );
};

export default CardFuncionarios;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardEncomenda.jsx
```jsx
import React, { useContext } from 'react'
import dayjs from 'dayjs';
import { formatData } from '../hooks/formatData';
import { AppContext } from '../context/AppContext';

const CardEncomenda = ({ clickEditar, encomenda }) => {
    const { usuarios } = useContext(AppContext)
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        tipoEncomenda,
        empresa, 
        dataRecebimento,
        descricao,
        codigoEntrega,
        idUsuario
    } = encomenda


    const morador = usuarios.find(user => user.id == idUsuario)

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mt-2 mb-4">123
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{(tipoEncomenda)} - {empresa} </h2> 
                </div>
            </div>
            <p className="mb-1 text-gray-700">Data Recebimento: {formatData(dayjs(dataRecebimento))}</p>
            {codigoEntrega.trim() === "" ? (<p></p>) : (<p className="mb-1 text-gray-700">Codigo: {codigoEntrega}</p>)}
            <p className="mb-1 text-gray-700">Descrição: {descricao}</p>
            {morador && <p className="mb-4 text-gray-700">apto: {morador?.apt} - torre: ${morador?.torre}</p>}
            <div className="flex justify-between items-center">
                <button 
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}>
                    Editar
                </button>
            </div>
        </article>
    )
}

export default CardEncomenda
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardVisita.jsx
```jsx
import React from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';


const CardVisita = ({ clickEditar, visita }) => {

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nome,
        cpf,
        telefone,
        dataVisita,
        horaVisita
    } = visita

    return (
        <article className="border p-4 rounded shadow-md bg-white mb-4">
            <h2 className="text-lg font-semibold mb-2">{nome}</h2>
            <p className="text-gray-700 text-xs">Detalhes da visita serão exibidos aqui.</p>
            <p className="text-gray-700 text-xs">Data: {formatData(dayjs(dataVisita))}</p>
            <p className="text-gray-700 text-xs">Hora de Entrada: {formatHora(dayjs(horaVisita))}</p>
            <p className="text-gray-700 text-xs">Apartamento: 101</p>

            <div className="flex justify-end ">
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}
                >
                    Editar
                </button>
            </div>
        </article>
    );
};

export default CardVisita;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardServico.jsx
```jsx
import React from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';

const CardServico = ({ clickEditar, servico }) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nomeEmpresa,
        dataInicio,
        dataFim,
        horaEntrada,
        horaSaida,
        apt,
        torre,
        descricao
    } = servico

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Nome da Empresa: {nomeEmpresa}</h2>
                    <p className="text-sm text-gray-500">Data inicio: {formatData(dayjs(dataInicio))}</p>
                    <p className="text-sm text-gray-500">Data Fim: {formatData(dayjs(dataFim))}</p>
                    <p className="text-sm text-gray-500">Entrada: {formatHora(dayjs(horaEntrada))}</p>
                    <p className="text-sm text-gray-500">Saida: {formatHora(dayjs(horaSaida))}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: {descricao}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: {apt} - Torre {torre}</span>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}>Editar</button>
            </div>
        </article>
    );
};

export default CardServico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardApartamentos.jsx
```jsx

const CardApartamentos = ({clickEditar, apt}) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        andar,
        apartamento,
        torre 
    } = apt
    
    return(
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4 ">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Ap-{apt.apt} - Torre {torre}</h2>
                    <p className="text-sm text-gray-500">Responsavel: {apt.nome}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Telefone: {apt.telefone}</p>
            <div className="flex justify-between items-center">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}>Editar</button>
            </div>
        </article>
    )
}

export default CardApartamentos;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardAmbientes.jsx
```jsx
import React from 'react';

const CardAmbientes = ({ clickEditar, ambientes }) => {

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nome,
        info,
    } = ambientes

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{nome} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: {info}</p>
            <div className="flex justify-between items-center">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")} >Editar</button>
            </div>
        </article>
    );
};

export default CardAmbientes;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormEncomendas.jsx
```jsx
import React, { useState, useEffect, useContext } from 'react';
import { Button, Fab, MenuItem, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormEncomendas = ({ tipoUsuario, criarOuEditar, fecharModal, criarEncomenda, encomenda }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const { adicionarEncomendas, editarEncomendas, usuarioLogado, usuarios } = useContext(AppContext)
    const [dateType, setDateType] = useState("text");
    const [empresa, setEmpresa] = useState('');
    const [dataRecebimento, setDataRecebimento] = useState(dayjs());
    const [tipoEncomenda, setTipoEncomenda] = React.useState('Delivery');
    const [codigoEntrega, setCodigoEntrga] = useState('');
    const [descricao, setDescricao] = useState('');
    const [destinatario, setDestinatario] = useState('');

    const handleChange = (e) => {
        setTipoEncomenda(e.target.value);
    }

    const handleClick = () => {
        setEmpresa(null);
        setDataRecebimento(null);
        setDescricao(null);
        setCodigoEntrga(null);

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();

        const novaEncomenda = {
            id: v4(),
            tipoEncomenda,
            empresa,
            dataRecebimento,
            descricao,
            codigoEntrega,
            idUsuario: usuarioLogado.tipo == "portaria" ? destinatario : usuarioLogado.id
        }

        if (editar) {
            editarEncomendas(encomenda.id, novaEncomenda)
        }
        editar || adicionarEncomendas(novaEncomenda)
        fecharModal();
    }

    useEffect(() => {
        if (editar) {
            setEmpresa(encomenda.empresa);
            setDataRecebimento(encomenda.dataRecebimento);
            setCodigoEntrga(encomenda.codigoEntrega);
            setDescricao(encomenda.descricao);
        }
    }, [])


    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
            <div className='flex justify-around'>
                <p>
                    Delivery<Checkbox
                        checked={tipoEncomenda === 'Delivery'}
                        onChange={handleChange}
                        value="Delivery"
                        name="opcaoEncomenda"
                    />
                </p>
                <p>Entrega<Checkbox
                    checked={tipoEncomenda === 'Entrega'}
                    onChange={handleChange}
                    value="Entrega"
                    name="opcaoEncomenda"
                /></p>
            </div>

            {usuarioLogado.tipo == "portaria" && <TextField
                required
                select
                label='Destinatario'
                value={destinatario}
                onChange={(e) => setDestinatario(e.target.value)}
                size='small'


            >
                {usuarios?.filter(user => user.tipo != "portaria").map(user => {
                    return (
                        <MenuItem value={user.id}>{`${user.nome} - apto: ${user.apt} - ${user.torre && user.torre}`}</MenuItem>

                    )
                })}
            </TextField>}

            <TextField
                required
                id="outlined-basic"
                label="Empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                variant="outlined"
                size='small'
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    slotProps={{
                        textField: { size: 'small', required: "true", }
                    }}
                    label='Data'
                    format='DD/MM/YYYY'
                    value={dayjs(dataRecebimento)}
                    onChange={(newValue) => setDataRecebimento(newValue)}
                    disablePast
                    minDate={dayjs()}
                />
            </LocalizationProvider >

            <TextField
                id="outlined-basic"
                label="Codigo"
                value={codigoEntrega}
                onChange={(e) => setCodigoEntrga(e.target.value)}
                variant="outlined"
                size='small'
            />

            <TextField
                id="outlined-basic"
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                variant="outlined"
                multiline
                minRows={3}
                maxRows={10}
            />

            <Button variant="contained" type='submit' color='success'>{(editar && sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

            <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
        </form>
    )
}

export default FormEncomendas
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/CardMorador.jsx
```jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CardMorador = ({ clickEditar, morador }) => {
    const { usuarioLogado } = useContext(AppContext)

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nome,
        email,
        cpf,
        telefone,
        apt,
        torre
    } = morador

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{nome} </h2>
                    <p className="text-sm text-gray-500">Apartamento: {apt} - Torre {torre}</p>
                </div>
            </div>
            <p className="mb-1 text-gray-700">Email: {email}</p>
            <p className="mb-1 text-gray-700">Telefone: {telefone}</p>
            <p className="mb-2 text-gray-700">Cpf: {cpf}</p>
            <div className="flex justify-between items-center">
                {usuarioLogado.tipo == "sindico" && <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")} >Editar</button>}
            </div>
        </article>
    );
};

export default CardMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormVisita.jsx
```jsx
import { useContext, useEffect, useState } from 'react';
import { Button, Fab, MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AppContext } from '../context/AppContext';
import { v4 } from 'uuid';

const FormVisita = ({ tipoUsuario, criarOuEditar, fecharModal, criarVisita, visita }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const { adicionarVisita, usuarioLogado, editarVisita, usuarios } = useContext(AppContext)
    const portaria = usuarioLogado.tipo == "portaria"
    //Variaveis dados da visita
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [torre, setTorre] = useState('');
    const [destinatario, setDestinatario] = useState("");
    const [responsavel, setResponsavel] = useState("");


    //Variavel horario visita
    const [horaVisita, setHoraVisita] = useState(dayjs())

    //Variavel data vista
    const [dataVisita, setDataVisita] = useState(dayjs());

    useEffect(() => {
        if (usuarioLogado != "portaria") {
            setApartamento(usuarioLogado.apt)
            setTorre(usuarioLogado.torre)
            setResponsavel(usuarioLogado.id)
        }
    }, [])

    useEffect(() => {
        const morador = usuarios.find(user => user.id == destinatario)
        if (morador) {
            setApartamento(morador.apt)
            setTorre(morador.torre)
            setResponsavel(morador.id)

        }
    }, [destinatario])

    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    const handleChangeTelefone = (e) => {
        let digits = e.target.value.replace(/\D/g, "").slice(0, 11);

        if (digits.length <= 10) {
            digits = digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            digits = digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }

        setTelefone(digits);
    }

    const handleClick = () => {
        setNome("");
        setCpf('');
        setTelefone('');
        setHoraVisita(null);
        setDataVisita(null);

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novaVisita = {
            id: v4(),
            nome,
            cpf,
            telefone,
            dataVisita,
            horaVisita,
            apto: apartamento,
            torre,
            responsavel,
            tipo: usuarioLogado.tipo,
            idUsuario: usuarioLogado.tipo == "portaria" ? destinatario : usuarioLogado.id

        }

        if (editar) {
            editarVisita(visita.id, {
                nome,
                cpf,
                telefone,
                dataVisita,
                horaVisita,
                apto: portaria ? apartamento : usuarioLogado.apt,
                torre: portaria ? torre : usuarioLogado.torre,
                responsavel: usuarioLogado.nome,
                tipo: usuarioLogado.tipo
            })
            fecharModal();
        }
        editar || adicionarVisita(novaVisita)
        fecharModal();

    }

    useEffect(() => {
        if(editar) {
            setNome(visita.nome);
            setCpf(visita.cpf);
            setTelefone(visita.telefone);
            setHoraVisita(visita.horaVisita);
            setDataVisita(visita.dataVisita);
        }
    }, []) 

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>

            {usuarioLogado.tipo == "portaria" &&
                <TextField
                    required
                    select
                    label='Destinatario'
                    value={destinatario}
                    onChange={(e) => setDestinatario(e.target.value)}
                    size='small'
                >
                    {usuarios?.filter(user => user.tipo != "portaria").map(user => {
                        return (
                            <MenuItem value={user.id}>{`${user.nome} - apto: ${user.apt} - ${user.torre && user.torre}`}</MenuItem>

                        )
                    })}
                </TextField>}

            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <TextField
                required
                id="outlined-basic"
                label="CPF"
                size='small'
                variant="outlined"
                placeholder='Somente os numeros'
                value={cpf}
                onChange={handleChangeCpf}

            />
            <TextField
                required
                label="Telefone"
                type='tel'
                size='small'
                variant="outlined"
                value={telefone}
                onChange={(handleChangeTelefone)}
            />
            {portaria && <TextField
                required
                id="outlined-basic"
                label="apartamento"
                variant="outlined"
                size='small'
                value={apartamento}
                onChange={(e) => setApartamento(e.target.value)}
                disabled={true}

            />}
            {portaria && <TextField
                required
                id="outlined-basic"
                label="torre"
                variant="outlined"
                size='small'
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                disabled={true}

            />}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    slotProps={{
                        textField: { size: 'small', required:"true", }
                    }}
                    label='Horario Visita'
                    format="HH:mm"
                    ampm={false}
                    value={dayjs(horaVisita)}
                    onChange={(newValue) => setHoraVisita(newValue)}
                    minTime={dayjs().hour(7).minute(50)}
                    maxTime={dayjs().hour(22).minute(0)}

                />

                <DatePicker
                    slotProps={{
                        textField: { size: 'small',  required:"true", }
                    }}
                    label='Data Visita'
                    format='DD/MM/YYYY'
                    value={dayjs(dataVisita)}
                    onChange={(newValue) => setDataVisita(newValue)}
                    disablePast
                    minDate={dayjs()}

                />
            </LocalizationProvider>

            <div className='flex flex-col justify-between gap-4'>
                <Button variant="contained" type='submit' color='success'>{(editar && sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}</Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>

        </form>
    )
}

export default FormVisita
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/VisitasSindico.jsx
```jsx
import { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';
import FormVisita from '../../componets/FormVisita';
import { AppContext } from '../../context/AppContext';


const VisitasMorador = () => {
    const { visitas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null); // Criar ou Editar

    const [listaVisitasRenderizacao, setListaVisitasRenderizacao] = useState([])
    const [visitaTemp, setVisitaTemp] = useState(null) //variavel temporaria para armazenar a visita  especifica para edição

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        const buscarVisita = visitas.find(vis => vis.id == id)
        setVisitaTemp(buscarVisita)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarVisita = (visita) => {
        setListaVisitasRenderizacao([visita, ...listaVisitasRenderizacao])
    }

    console.log(visitaTemp)

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Visitas</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8 flex flex-col gap-4'>
                {visitas?.map((visita, i) => (
                    <CardVisita visita={visita} clickEditar={() => clickEditar(visita.id)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Visita`}
                close={() => setOpenModal(false)}>

                <FormVisita
                    tipoUsuario={"Morador"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarVisita={criarVisita}
                    visita={visitaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default VisitasMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/ServiçosSindico.jsx
```jsx
import { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, IconButton, InputBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormSevico from '../../componets/FormSevico';
import CardServico from '../../componets/CardServico';
import { AppContext } from '../../context/AppContext';

const ServicosSindico = () => {
    const { servicos } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [servico, setServico] = useState(null);
    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([]);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (servico) => {
        setTipoModal("Editar");
        setServico(servico);
        setOpenModal(!openModal);
    }

    const criarServico = (servico) => {
        setListaServicoRenderizacao([servico, ...listaServicoRenderizacao]);
    }

    return (
        <div className="min-h-full w-full  gap-4 flex flex-col">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Serviços </h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                {servicos?.map((servico, i) => (
                    <CardServico servico={servico} clickEditar={() => clickEditar(servico)} />
                ))}
                

            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Serviço`} close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Sindico"} // Passa o tipo de usuário para o formulário
                    criarOuEditar={tipoModal} // Indica se é para criar ou editar
                    fecharModal={() => setOpenModal(!openModal)}
                    criarServico={criarServico}
                    servico={servico}
                />

            </BasicModal >

        </div>
    );
};

export default ServicosSindico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/MoradoresSindico.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/CardMorador';
import FormMoradores from '../../componets/FormMoradores';
import { AppContext } from '../../context/AppContext';

const MoradoresSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    const { usuarios } = useContext(AppContext)

    useEffect(() => {
        setListaMoradorRenderizacao(usuarios)
    }, [usuarios])

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (morador) => {
        setMoradorTemp(morador)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarMorador = (morador) => {
        setListaMoradorRenderizacao([morador, ...listaMoradorRenderizacao])
    }


    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Moradores </h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {usuarios?.filter((user => user.tipo == "morador")).map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickEditar(morador)} />
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Morador`} close={() => setOpenModal(false)}>
                <FormMoradores 
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarMorador={criarMorador}
                    inquilino={moradorTemp}
                />
            </BasicModal>

        </div>
    );
};

export default MoradoresSindico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/FuncionariosSindico.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardFuncionarios from '../../componets/CardFuncionarios';
import FormFuncionarios from '../../componets/FormFuncionarios';
import { AppContext } from '../../context/AppContext';


const FuncionariosSindico = () => {
    const { usuarios } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaFuncionarioRenderizacao, setListaFuncionarioRenderizacao] = useState([]);
    const [funcionarioTemp, setFuncionarioTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (funcionario) => {
        setFuncionarioTemp(funcionario)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

   const criarFuncionario = (funcionario) => {
        setListaFuncionarioRenderizacao([funcionario, ...listaFuncionarioRenderizacao])
    }

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Funcionarios</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                {usuarios?.filter(user => user.funcionario == true).map((funcionario, i) => (
                    <CardFuncionarios funcionario={funcionario} clickEditar={() => clickEditar(funcionario)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Funcionairo`} close={() => setOpenModal(false)}>
                <FormFuncionarios 
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarFuncionario={criarFuncionario}
                    funcionario={funcionarioTemp} 
                />
            </BasicModal>

        </div>
    );
};

export default FuncionariosSindico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/EncomendasSindico.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';
import { AppContext } from '../../context/AppContext';

const EncomendasSindico = () => {

    const { encomendas } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaEncomendaRenderizacao, setListaEncomendaRenderizacao] = useState([]);
    const [encomendaTemp, setEncomendaTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (encomenda) => {
        setEncomendaTemp(encomenda)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Encomendas</h1>

                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8 flex flex-col gap-4'>
                {encomendas?.map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(encomenda)} />
                ))}

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Encomenda`}
                close={() => setOpenModal(false)}>

                <FormEncomendas
                    tipoUsuario={"Sindico"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    encomenda={encomendaTemp}
                />
            </BasicModal>
        </div>
    )
}

export default EncomendasSindico
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/Apartamentos.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CardApartamentos from '../../componets/CardApartamentos';
import FormApt from '../../componets/FormApt';
import { AppContext } from '../../context/AppContext';


const Apartamentos = () => {
    const { usuarios } = useContext(AppContext)
    const moradores = usuarios.filter(u => u.tipo === "morador");
    const apartamentos = [...new Set(moradores.map(m => m))];
    console.log(apartamentos)


    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaAptRenderizacao,
    setListaAptRenderizacao] = useState([]);
    const [aptTemp, setAptTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (apt) => {
        setAptTemp(apt);
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarApt = (apt) => {
        setListaAptRenderizacao([apt, ...listaAptRenderizacao])
    }

    console.log(aptTemp);


    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Apartamentos</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    //value={apt}
                    // onChange={(e) => setApt(e.target.value)}
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8'>
                {apartamentos?.map((apt, i) => (
                    <CardApartamentos apt={apt} clickEditar={() => clickEditar(apt)} />
                ))}
            </section>


            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Apartamento`} close={() => setOpenModal(false)}>
                <FormApt
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarApt={criarApt}
                    apt={aptTemp}

                />

            </BasicModal>

        </div>

    );
};

export default Apartamentos;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/AmbienteSinidico.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useEffect, useState } from 'react';
import ButtonModal from '../../componets/ButtonModal.jsx';
import BasicModal from '../../componets/Modal.jsx';
import SearchIcon from '@mui/icons-material/Search';
import CardAmbientes from '../../componets/CardAmbientes.jsx';
import FormAmbientes from '../../componets/FormAmbientes.jsx';
import { AppContext } from '../../context/AppContext.jsx';

const AmbientesSindico = () => {
    const { usuarioLogado, ambientes } = useContext(AppContext);

    const [openModal, setOpenModal] = useState(false);
    const [tipoModal, setTipoModal] = useState(null);

    const [listaAmbienteRenderizacao, setlistaAmbienteRenderizacao] = useState([]);
    const [ambienteTemp, setAmbienteTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (ambiente) => {
        setAmbienteTemp(ambiente)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarAmbiente = (ambiente) => {
        setlistaAmbienteRenderizacao([ambiente, ...listaAmbienteRenderizacao])
    }

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
            <h1>Ambientes </h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {ambientes?.map((ambientemap, i) => (
                    <CardAmbientes ambientes={ambientemap} clickEditar={() => clickEditar(ambientemap)} />
                ))
                }

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal openModal={openModal} title={`${tipoModal} Ambiente`} close={() => setOpenModal(false)}>
                <FormAmbientes
                    tipoUsuario="Sindico"
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarAmbiente={criarAmbiente}
                    ambiente={ambienteTemp}
                 />
            </BasicModal>

        </div>
    );
};

export default AmbientesSindico;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/portaria/VisitasPortaria.jsx
```jsx
import { useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardVisita from '../../componets/CardVisita';
import FormVisita from '../../componets/FormVisita';
import { AppContext } from '../../context/AppContext';


const VisitasPortaria = () => {
    const { visitas } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaVisitasRenderizacao, setListaVisitasRenderizacao] = useState([])
    const [visitaTemp, setVisitaTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (id) => {
        const buscarVisita = visitas.find(vis => vis.id == id)
        setVisitaTemp(buscarVisita)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarVisita = (visita) => {
        setListaVisitasRenderizacao([visita, ...listaVisitasRenderizacao])
    }

    console.log(visitaTemp)

    return (
        <div className="min-h-full w-full ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Visitas</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8 flex flex-col gap-4'>
                {visitas?.map((visita, i) => (
                    <CardVisita visita={visita} clickEditar={() => clickEditar(visita.id)} />
                ))
                }
            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />

            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Visita`}
                close={() => setOpenModal(false)}>

                <FormVisita
                    tipoUsuario={"Portaria"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarVisita={criarVisita}
                    visita={visitaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default VisitasPortaria;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/portaria/ServicosPortaria.jsx
```jsx
import { useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardServico from '../../componets/CardServico';
import FormSevico from '../../componets/FormSevico';
import { AppContext } from '../../context/AppContext';

const ServicosMorador = () => {
    const {servicos} = useContext(AppContext);

    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [servico, setServico] = useState(null)
    const [listaServicoRenderizacao, setListaServicoRenderizacao] = useState([])

    const adicionarServico = (servico) => {
        setListaServicoRenderizacao([servico, ...listaServicoRenderizacao])
    }

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (servico) => {
        setTipoModal("Editar");
        setServico(servico)
        setOpenModal(!openModal)
    }

    return (
        <div className="min-h-full max-h-full w-full overflow-y-auto ">
            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between sticky top-0'
            >
                <h1>Serviços</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <section className='p-8 flex flex-col gap-4 '>
                {servicos?.map((servico, i) => (
                    <CardServico
                        servico={servico} 
                        clickEditar={() => clickEditar(servico)}
                         
                    />
                ))}

            </section>
            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            <BasicModal
                openModal={openModal}
                title={`${tipoModal} Servico`}
                close={() => setOpenModal(false)}>
                <FormSevico
                    tipoUsuario={"Portaria"}
                    criarServico={adicionarServico}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    servico={servico}
                />
            </BasicModal >
        </div>
    );
};

export default ServicosMorador;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/portaria/RecebidosPortaria.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useContext } from 'react';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import FormEncomendas from '../../componets/FormEncomendas';
import CardEncomenda from '../../componets/CardEncomenda';
import { AppContext } from '../../context/AppContext';

const RecebidosPortaria = () => {

    const { encomendas } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    const [tipoModal, setTipoModal] = useState(null);

    const [listaEncomendaRenderizacao, setListaEncomendaRenderizacao] = useState([]);
    const [encomendaTemp, setEncomendaTemp] = useState(null);

    const clickOpenModal = () => {
        setTipoModal("Criar");
        setOpenModal(!openModal);
    }

    const clickEditar = (encomenda) => {
        setEncomendaTemp(encomenda)
        setTipoModal("Editar");
        setOpenModal(!openModal);
    }

    const criarEncomenda = (encomenda) => {
        setListaEncomendaRenderizacao([encomenda, ...listaEncomendaRenderizacao]);
    }

    console.log(encomendaTemp);

    return (
        <div className="min-h-full w-full ">
            <div className='flex  h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Recebidos</h1>

                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Encomenda"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8 flex flex-col gap-4'> 
                {encomendas?.map((encomenda, i) => (
                    <CardEncomenda encomenda={encomenda} clickEditar={() => clickEditar(encomenda)}/>
                ))}

            </section>

            <ButtonModal click={() => clickOpenModal()} tipoModal={tipoModal} />
            
            <BasicModal 
                openModal={openModal}
                title={`${tipoModal} Recebido`} 
                close={() => setOpenModal(false)}>
                
                <FormEncomendas 
                    tipoUsuario={"Portaria"}
                    criarOuEditar={tipoModal}
                    fecharModal={() => setOpenModal(!openModal)}
                    criarEncomenda={criarEncomenda}
                    encomenda={encomendaTemp}
                />
            </BasicModal>
        </div>
    );
};

export default RecebidosPortaria;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/portaria/MoradoresPortaria.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CardMorador from '../../componets/CardMorador';
import { AppContext } from '../../context/AppContext';

const MoradoresPortaria = () => {
    const { usuarios } = useContext(AppContext);

    const [listaMoradorRenderizacao, setListaMoradorRenderizacao] = useState([]);
    const [moradorTemp, setMoradorTemp] = useState(null);

    useEffect(() => {
        setListaMoradorRenderizacao(usuarios)
    }, [usuarios])


    const clickEditar = (id) => {
        setMoradorTemp(listaMoradorRenderizacao[id])
    }
    
    console.log(moradorTemp)

    return (
        <div className="min-h-full w-full ">

            <div
                className='flex  h-16 bg-slate-300 p-3 items-center justify-between'
            >
                <h1>Moradores</h1>
                <div className='flex gap-1'>
                    <TextField
                        id="outlined-basic"
                        label="Apartamento"
                        variant="outlined"
                        size='small'
                    />
                    <Button variant="contained" aria-label="search" size='small' color='success'>
                        <SearchIcon />
                    </Button>
                </div>
            </div>
            <section className='p-8'>
                {listaMoradorRenderizacao?.map((morador, i) => (
                    <CardMorador morador={morador} clickEditar={() => clickEditar(i)}/>
                ))
                }
            </section>
        </div>
    );
};

export default MoradoresPortaria;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider> 
        <Router />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
)
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormFuncionarios.jsx
```jsx
import { Button, Fab, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const FormFuncionarios = ({ tipoUsuario, criarOuEditar, fecharModal, criarFuncionario, funcionario }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');

    const handleClick = () => {
        setNome(null)
        setEmail(null)
        setTelefone(null)
        setCpf(null)
        setCargo(null)

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal();

        const funcionario = {
            nome,
            email,
            telefone,
            cpf,
            cargo
        }

        criarFuncionario(funcionario)
    }

    useEffect(() => {
        if (editar) {
            setNome(funcionario.nome);
            setEmail(funcionario.email);
            setTelefone(funcionario.telefone);
            setCpf(funcionario.cpf);
            setCargo(funcionario.tipo);
        }
    }, []);

    return (
        <form onSubmit={submitForm} className="border flex flex-col gap-4 p-4">
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                variant="outlined"
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    {(editar && !sindico) || criarOuEditar == "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
            </div>

        </form>
    )
}

export default FormFuncionarios
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormApt.jsx
```jsx
import { Button,TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const FormApt = ({ tipoUsuario, criarOuEditar, fecharModal, criarApt, apt }) => {

    let editar = criarOuEditar === "Editar";
    let sindico = tipoUsuario === "Sindico";
    let morador = tipoUsuario === "Morador";

    const [andar, setAndar] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [torre, setTorre] = useState('');

    const handleClick = () => {
        setAndar(null);
        setApartamento(null);
        setTorre(null);

        fecharModal()
    }

    const submitForm = (e) => {
        e.preventDefault();
        fecharModal()

        const novoApt = {
            andar,
            apartamento,
            torre
        }
        if (editar) {

        }
        editar || criarApt(novoApt);
    }

    useEffect(() => {
        if(editar) {
            setAndar(apt.andar);
            setApartamento(apt.apartamento);
            setTorre(apt.torre)
        }
    }, [])
    

    return (
        <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '
            style={{ flexDirection: "column", padding: "8px", Radios: "0px" }}>

            <TextField
                required
                id="outlined-basic"
                label="Andar"
                value={andar}
                onChange={(e) => setAndar(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Numero AP"
                value={apartamento}
                onChange={(e) => setApartamento(e.target.value)}
                variant="outlined"
            />

            <TextField
                required
                id="outlined-basic"
                label="Torre/bloco"
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                variant="outlined"
            />
            <div className='flex flex-row justify-between gap-4 sm:flex-col'>
                <Button 
                    variant="contained" 
                    type='submit' 
                    color='success'>
                    {(editar && !sindico)|| criarOuEditar== "Criar" ? "Salvar" : "Solicitar Edição"}
                </Button>
                <Button variant="contained" color='error' onClick={handleClick} > Cancelar</Button>
            </div>
        </form>
    )
}

export default FormApt
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormAmbientes.jsx
```jsx
import { useEffect, useState, useContext } from 'react';
import { Button, Fab, TextField } from '@mui/material';
import { v4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const FormAmbientes = ({ criarOuEditar, fecharModal, ambiente, listCondomonio }) => {

    const [nome, setNome] = useState('');
    const [info, setInfo] = useState('');
    const [idCondominio, setIdCondominio] = useState('');

    const { adicionarAmbientes, editarAmbiente } = useContext(AppContext)

    useEffect(() => {
        if (criarOuEditar == "Editar") {
            setNome(ambiente.nome);
            setInfo(ambiente.info);
        }
    }, [])

    console.log(ambiente)
    const handleClick = () => {
        setNome('');
        setInfo('');
        setIdCondominio('')

        fecharModal();
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        const novoAmbiente = {
            nome,
            info,
            id: v4(),
        }

        if (criarOuEditar == "Editar") {
            editarAmbiente(ambiente.id, novoAmbiente)
        }

        criarOuEditar == "Editar" || adicionarAmbientes(novoAmbiente)
        fecharModal()
        //criarMorador(body)
    }

    return (
        <form onSubmit={submitForm} className="border p-3 flex flex-col gap-5 mb-3 ">
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <TextField
                required
                id="outlined-basic"
                label="Descrição"
                placeholder='Ex: MariaSilva@gmail.com'
                variant="outlined"
                size="small"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>
                <Button
                    variant="contained"
                    type='submit'
                    color='success'>
                    Salvar
                </Button>

                <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormAmbientes;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/App.jsx
```jsx
import './App.css'
import MenuAside from './componets/MenuAside'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header'
import { useMediaQuery } from '@mui/material';
import { AppProvider } from './context/AppContext';

function App() {


  return (
    <AppProvider>
      <div className="w-full h-svh flex p-0 m-0">
        <MenuAside />
        <Header />
        <main className="flex-1 bg-gray-100 overflow-y-auto mt-16">
          <Outlet />
        </main>
      </div>
    </AppProvider>
  )
}

export default App
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/App.css
```css

```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/ButtonModal.jsx
```jsx
import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ButtonModal = ({ click, tipoModal }) => {

    return (
        <div className="fixed bottom-4 right-4">
            <Fab color="primary" aria-label="add" onClick={click}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default ButtonModal;

```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/ButtonPages.jsx
```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const hover = " hover:bg-slate-600 hover:text-white transition-colors duration-300 ease-in-out "
const shadow = " shadow-md shadow-slate-400 "
const responsive = " w-full sm:w-[250px] "
const dimension = " bg-white text-slate-700 border border-slate-400 px-4 py-4 rounded "
const style = `${dimension} ${hover} ${shadow} ${responsive}`


const ButtonPages = ({ children, name, click }) => {
    const navigateTo = useNavigate();

    return (
        <button
            onClick={() => navigateTo(click)}
            className={style}>
            {children}
            <p className='font-bold'>{name}</p>
        </button>
    );
};

export default ButtonPages;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/ChildModal.jsx
```jsx
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
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/FormPrestadorServico.jsx
```jsx
import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Fab, TextField } from '@mui/material';

const FormPrestadorServico = ({fecharChildModal}) => {

    //Variaveis do prestador de serviço
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');

    //atualização da variavel CPF com Validação
    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    //atualização da variavel telefone com Validação
    const handleChangeTelefone = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setTelefone(digits);
    }

    const clearChildModal = () => {
        setNome('');
        setCpf('');
        setTelefone('');

        fecharChildModal()
    }

    return (
        <form className='border p-3 flex flex-col gap-5 mb-3 ' >
            <TextField
                required
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                size='small'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <TextField
                required
                id="outlined-basic"
                label="CPF"
                size='small'
                variant="outlined"
                placeholder='Somente os numeros'
                value={cpf}
                onChange={handleChangeCpf}
            />
            <TextField
                required
                label="Telefone"
                type='tel'
                size='small'
                variant="outlined"
                value={telefone}
                onChange={(handleChangeTelefone)}
            />
            <div className='flex justify-between'>
                <Button onClick={() => fecharChildModal()}
                    variant="contained"
                    color='success'>Confirmar</Button>

                <Button variant="contained" color='error'
                    onClick={clearChildModal}> Cancelar
                </Button>
            </div>
        </form>
    )
}

export default FormPrestadorServico
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/componets/Modal.jsx
```jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ children, openModal, title, close }) {

    return (
        <Modal
            open={openModal}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    );
}
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/hooks/formatData.js
```js
export const formatData = (data) =>{
    return `${data.$D}/${data.$M + 1}/${data.$y}`;
}
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/hooks/formatHora.js
```js
export const formatHora = (hora) => {
  return `${hora.$H}:${hora.$m}`;
};
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/index.css
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
---
## Arquivo: projeto-interdisciplinar-certificacao-uniateneu/src/pages/sindico/PortariaSindico.jsx
```jsx
import { useState } from 'react';
import dayjs from 'dayjs';
import ButtonModal from '../../componets/ButtonModal';
import BasicModal from '../../componets/Modal';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const PortariaSindico = () => {
    const [openModal, setOpenModal] = useState(false);

    //Variaveis dados da visita
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    //Variavel horario visita
    const [horaVisita, setHoraVisita] = useState(null)

    //Variavel data vista
    const [dataVisita, setDataVisita] = useState(null);

    const handleChangeCpf = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setCpf(digits);
    }

    const handleChangeTelefone = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setTelefone(digits);
    }

    const handleClick = () => {
        setNome("");
        setCpf('');
        setTelefone('');
        setHoraVisita(null);
        setDataVisita(null);

        setOpenModal(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        setOpenModal(false);

    }
    return (
        <div className="min-h-full w-full ">
            <h1>Visitas do Morador
                <ButtonModal click={() => setOpenModal(true)} />
                <BasicModal openModal={openModal} title="Cadastrar Visita" close={() => setOpenModal(false)}>
                    <form onSubmit={submitForm} className='border p-3 flex flex-col gap-5 mb-3 '>
                        <TextField
                            id="outlined-basic"
                            label="Nome"
                            variant="outlined"
                            size='small'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="CPF"
                            size='small'
                            variant="outlined"
                            placeholder='Somente os numeros'
                            value={cpf}
                            onChange={handleChangeCpf}

                        />
                        <TextField
                            label="Telefone"
                            type='tel'
                            size='small'
                            variant="outlined"
                            value={telefone}
                            onChange={(handleChangeTelefone)}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                slotProps={{
                                    textField: { size: 'small' }
                                }}
                                label='Horario Visita'
                                format="HH:mm"
                                ampm={false}
                                value={horaVisita}
                                onChange={(newValue) => setHoraVisita(newValue)}
                                minTime={dayjs().hour(7).minute(50)}
                                maxTime={dayjs().hour(22).minute(0)}

                            />

                            <DatePicker
                                slotProps={{
                                    textField: { size: 'small' }
                                }}
                                label='Data Visita'
                                format='DD/MM/YYYY'
                                value={dataVisita}
                                onChange={(newValue) => setDataVisita(newValue)}
                                disablePast
                                minDate={dayjs()}

                            />
                        </LocalizationProvider>

                        <div className='flex justify-between'>
                            <Button variant="contained" type='submit' color='success'>Confirmar</Button>

                            <Button variant="contained" color='error' onClick={handleClick}> Cancelar
                            </Button>
                        </div>

                    </form>


                </BasicModal>


            </h1>
        </div>
    );
};

export default PortariaSindico;
```
