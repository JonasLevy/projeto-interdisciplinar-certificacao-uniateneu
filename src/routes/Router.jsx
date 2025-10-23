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

const Router = () => {

    return (
        <Routes>
            <Route index element={<TelaLogin/>} />
            <Route path="/sindico" element={<App />}>
                <Route index element={<Index />} />
                <Route path="portaria" element={<PortariaSindico />} />
                <Route path="reservas" element={<ReservasSindico />} />
                <Route path="servicos" element={<ServicosSindico />} />
                <Route path="visitas" element={<VisitasMorador />} />
                <Route path="apartamentos" element={<Apartamentos />} />
                <Route path="moradores" element={<MoradoresSindico />} />
                <Route path="funcionarios" element={<FuncionariosSindico />} />
                <Route path="notificacao" element={<Notificacoes />} />

            </Route>
            <Route path="morador" element={<App />}>
                <Route index  element={<HomeMorador />} />
                <Route path="reservas" element={<ReservasMorador />} />
                <Route path="servicos" element={<ServicosMorador />} />
                <Route path="visitas" element={<VisitasMorador />} />
                <Route path="delivery" element={<DeliveryMorador /> } />
                <Route path="encomendas" element={<EncomendasMorador/>} />
            </Route>
            <Route path="portaria" element={<App />}>   
                <Route index  element={<Portaria />} />
            </Route>
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>

    )
}

export default Router
