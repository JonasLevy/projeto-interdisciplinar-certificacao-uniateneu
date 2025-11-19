import { Route, Routes } from "react-router-dom"
import App from "../App"
import Index from "../pages/sindico/index"
import TelaLogin from "../componets/TelaLogin"
import Portaria from "../pages/portaria"
import HomeMorador from "../pages/moradores"
import ReservasMorador from "../pages/moradores/ReservasMorador"
import ServicosMorador from "../pages/moradores/ServiçosMorador"
import VisitasMorador from "../pages/moradores/VisitasMorador"
import DeliveryMorador from "../pages/moradores/DeliveryMorador"
import EncomendasMorador from "../pages/moradores/EncomendasMorador"
import ServicosSindico from "../pages/sindico/ServiçosSindico"
import MoradoresSindico from "../pages/sindico/MoradoresSindico"
import ReservasSindico from "../pages/sindico/ReservasSindico"
import Notificacoes from "../pages/sindico/Notificacoes"
import PortariaSindico from "../pages/sindico/PortariaSindico"
import Apartamentos from "../pages/sindico/Apartamentos"
import FuncionariosSindico from "../pages/sindico/FuncionariosSindico"
import EncomendasSindico from "../pages/sindico/EncomendasSindico"
import MoradoresPortaria from "../pages/portaria/MoradoresPortaria"
import RecebidosPortaria from "../pages/portaria/RecebidosPortaria"
import ServicosPortaria from "../pages/portaria/ServicosPortaria"
import VisitasPortaria from "../pages/portaria/VisitasPortaria"
import PrivateRoute from "../componets/PrivateRoute"


const Router = () => {

    return (
        <Routes>
            <Route index element={<TelaLogin />} />
            <Route
                element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                }
            >
                {/* SÍNDICO */}
                <Route path="sindico">
                    <Route index element={<Index />} />
                    <Route path="portaria" element={<PortariaSindico />} />
                    <Route path="reservas" element={<ReservasSindico />} />
                    <Route path="servicos" element={<ServicosSindico />} />
                    <Route path="visitas" element={<VisitasMorador />} />
                    <Route path="encomendas" element={<EncomendasSindico />} />
                    <Route path="apartamentos" element={<Apartamentos />} />
                    <Route path="moradores" element={<MoradoresSindico />} />
                    <Route path="funcionarios" element={<FuncionariosSindico />} />
                    <Route path="notificacao" element={<Notificacoes />} />
                </Route>

                {/* MORADOR */}
                <Route path="morador">
                    <Route index element={<HomeMorador />} />
                    <Route path="reservas" element={<ReservasMorador />} />
                    <Route path="servicos" element={<ServicosMorador />} />
                    <Route path="visitas" element={<VisitasMorador />} />
                    <Route path="delivery" element={<DeliveryMorador />} />
                    <Route path="encomendas" element={<EncomendasMorador />} />
                </Route>

                {/* PORTARIA */}
                <Route path="portaria">
                    <Route index element={<Portaria />} />
                    <Route path="moradores" element={<MoradoresPortaria />} />
                    <Route path="encomendas" element={<RecebidosPortaria />} />
                    <Route path="servicos" element={<ServicosPortaria />} />
                    <Route path="visitas" element={<VisitasPortaria />} />
                </Route>

            </Route>

            <Route path="*" element={<h1>Página não encontrada</h1>} />


        </Routes>

    )
}

export default Router
