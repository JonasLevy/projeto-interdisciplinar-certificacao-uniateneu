import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { usuarioLogado } = useContext(AppContext);
  const location = useLocation();

  // Não logado → login
  if (!usuarioLogado) {
    return <Navigate to="/" replace />;
  }

  const path = location.pathname.split("/")[1];

  // Tipo errado → redireciona para o módulo correto
  if (usuarioLogado.tipo !== path) {
    return <Navigate to={`/${usuarioLogado.tipo}`} replace />;
  }

  return children;
};

export default PrivateRoute;
