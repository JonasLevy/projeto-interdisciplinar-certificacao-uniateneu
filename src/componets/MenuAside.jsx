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

const menuItems = {
  sindico: [
    {
      label: "Apartamentos",
      icon: <ApartmentIcon />,
    },
    {
      label: "Portaria",
      icon: <MeetingRoomIcon />,
    },
    {
      label: "Serviços",
      icon: <HomeWorkIcon />,
    },
    {
      label: "Moradores",
      icon: <PeopleIcon />
    },
    {
      label: "Reservas",
      icon: <MeetingRoomIcon />
    },
    {
      label: "Visitas",
      icon: <PeopleIcon />
    },
    {label: "Notificação",
      icon: <PeopleIcon />
    }
  ],

  morador: [
    {
      label: "Reservas",
      icon: <ApartmentIcon />,
    },
    {
      label: "Portaria",
      icon: <MeetingRoomIcon />,
    }
  ],

 portaria: [
    {
      label: "Portaria",
      icon: <MeetingRoomIcon />,
    },
    {
      label: "Serviços",
      icon: <HomeWorkIcon />,
    },
    {
      label: "Moradores",
      icon: <PeopleIcon />
    },
    {
      label: "Encomendas",
      icon: <MeetingRoomIcon />
    },
    {
      label: "Visitas",
      icon: <PeopleIcon />
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

  const drawerContent = (
    <div className="h-full w-64 bg-gray-900 text-white shadow-lg flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-blue-800">
        Menu
      </div>
      <nav className="flex-1">
        <List>
          {menuItems[path].map((item) => (
            <ListItem
              button
              key={item.label}
              className="hover:bg-blue-800 transition-colors cursor-pointer"
              onClick={()=>navegate(`/${path}/${item.label.toLowerCase()}`)}
            >
              <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
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
            className="m-2 text-white"
            sx={{ position: "fixed", top: 10, left: 10, zIndex: 1300 }}
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