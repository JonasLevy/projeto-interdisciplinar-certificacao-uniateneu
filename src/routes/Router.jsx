import { Route, Routes, useLocation } from "react-router-dom"
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
            <Route path="/" element={<TelaLogin />} />
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
