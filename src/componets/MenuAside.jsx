import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleIcon from "@mui/icons-material/People";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WcIcon from '@mui/icons-material/Wc';
import CampaignIcon from '@mui/icons-material/Campaign';

const menuItems = {
  sindico: [
    {
      label: "Apartamentos",
      icon: <ApartmentIcon className="text-slate-400" />,
    },
    {
      label: "Portaria",
      icon: <MeetingRoomIcon className="text-slate-400" />,
    },
    {
      label: "Serviços",
      icon: <HomeWorkIcon className="text-slate-400" />,
    },
    {
      label: "Moradores",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Reservas",
      icon: <MeetingRoomIcon className="text-slate-400" />
    },
    {
      label: "Visitas",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Notificação",
      icon: <CampaignIcon className="text-slate-400" />
    },
    {
      label: "Funcionarios",
      icon: <WcIcon className="text-slate-400" />
    }
  ],

  morador: [
    {
      label: "Delivery",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Encomendas",
      icon: <MeetingRoomIcon className="text-slate-400" />
    },
    {
      label: "Serviços",
      icon: <HomeWorkIcon className="text-slate-400" />
    },
    {
      label: "Reservas",
      icon: <ApartmentIcon className="text-slate-400" />,
    },
    {
      label: "Visitas",
      icon: <PeopleIcon className="text-slate-400" />
    }
  ],

  portaria: [
    {
      label: "Portaria",
      icon: <MeetingRoomIcon className="text-slate-400" />,
    },
    {
      label: "Serviços",
      icon: <HomeWorkIcon className="text-slate-400" />,
    },
    {
      label: "Moradores",
      icon: <PeopleIcon className="text-slate-400" />
    },
    {
      label: "Encomendas",
      icon: <MeetingRoomIcon className="text-slate-400" />
    },
    {
      label: "Visitas",
      icon: <PeopleIcon className="text-slate-400" />
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

  const clickMenu = (label) => {

    let labelFormatada = label
    labelFormatada = label == "Notificação" ? "notificacao" : labelFormatada.toLowerCase()
    labelFormatada = label == "Serviços" ? "servicos" : labelFormatada.toLowerCase()

    const route = `/${path}/${labelFormatada.toLowerCase()}`
    setOpen(false);
    navegate(route);
  }

  const drawerContent = (
    <div className="h-full w-64 bg-slate-900 text-white shadow-lg flex flex-col z-1">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-blue-800 z-1">
        Menu
      </div>
      <nav className="flex-1">
        <List>
          <ListItem
              button
            key={"Inicio"}
              className="hover:bg-slate-200 transition-colors cursor-pointer text-white z-3"
              onClick={() => clickMenu("/")}
            >
              <ListItemIcon ><HomeFilledIcon className="text-slate-400"/></ListItemIcon>
              <ListItemText primary={"Inicio"} />
            </ListItem>
          {menuItems[path].map((item) => (
            <ListItem
              button
              key={item.label}
              className="hover:bg-blue-600 transition-colors cursor-pointer "
              onClick={() => clickMenu(item.label)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
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
            className="m-2 text-white z-0"
            sx={{ position: "fixed", top: 10, left: 10, zIndex: 0 }}
          >
            <MenuIcon />
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