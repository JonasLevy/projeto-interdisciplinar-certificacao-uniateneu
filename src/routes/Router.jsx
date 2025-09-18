import { Route, Routes } from "react-router-dom"
import App from "../App"
import Index from "../pages/sindico/index"
import Reservas from "../pages/reservas/reservas"
import Servico from "../pages/serviços"
import Moradores from "../pages/moradores"
import Portaria from "../pages/portaria"
import Visitas from "../pages/visitas"
import HomeMorador from "../pages/moradores"
import ReservasMorador from "../pages/moradores/ReservasMorador"
import ServicosMorador from "../pages/moradores/ServiçosMorador"
import VisitasMorador from "../pages/moradores/VisitasMorador"
import DeliveryMorador from "../pages/moradores/DeliveryMorador"
import EncomendasMorador from "../pages/moradores/EncomendasMorador"

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/sindico" element={<App />}>
                <Route index element={<Index />} />
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
