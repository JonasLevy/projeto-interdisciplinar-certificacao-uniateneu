import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  //const usuario = JSON.parse(localStorage.getItem("usuario"))
  const { usuario } = useContext(AppContext)


  const location = useLocation();
  const path = location.pathname.split("/")[1].toLowerCase();
  if (usuario && usuario.tipo != path) {
    return <Navigate to={`/${usuario.tipo}`} replace />;
  }

  // Carregando...
  if (usuario === null) {
    return null; // coloque um spinner se quiser
  }

  // Sem login → volta ao login
  if (!usuario) {
    return <Navigate to="/" replace />;
  }



  return children;
};

export default PrivateRoute;
