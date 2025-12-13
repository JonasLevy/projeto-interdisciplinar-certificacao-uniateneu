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

  const { usuarioLogado, notificacao, marcarNotificacoesLidas, logout } = useContext(AppContext);


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