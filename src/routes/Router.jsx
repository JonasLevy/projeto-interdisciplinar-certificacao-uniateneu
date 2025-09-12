import { Route, Routes } from "react-router-dom"
import App from "../App"
import Index from "../pages/sindico/index"
import Apartamentos from "../pages/apartamentos/Apartamentos"
import IndexMorador from "../pages/homeMoradores"
import Reservas from "../pages/reservas/reservas"
import Servico from "../pages/serviços"
import Moradores from "../pages/moradores"
import Portaria from "../pages/portaria"
import Visitas from "../pages/visitas"
import Notificacao from "../pages/notificacao"

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/sindico" element={<App />}>
                <Route index element={<Index />} />
                <Route path="apartamentos" element={<Apartamentos />} />
                <Route path="moradores" element={<Moradores />} />
                <Route path="reservas" element={<Reservas />} />
                <Route path="serviços" element={<Servico />} />
                <Route path="portaria" element={<Portaria />} />
                <Route path="visitas" element={<Visitas />} />
                <Route path="Notificação" element={<Notificacao />} />

            </Route>
            <Route path="morador" element={<App />}>
                <Route index  element={<IndexMorador />} />
                <Route path="reservas" element={<Reservas />} />
                <Route path="portaria" element={<Portaria />} />
            </Route>
            <Route path="portaria" element={<App />}>   
                <Route index  element={<Portaria />} />
                <Route path="moradores" element={<Moradores />} />
                <Route path="encomendas" element={<Reservas />} />
                <Route path="serviços" element={<Servico />} />
                <Route path="visitas" element={<Visitas />} />
            </Route>

        </Routes>

    )
}

export default Router
