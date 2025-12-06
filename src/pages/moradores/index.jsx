import ButtonPages from "../../componets/ButtonPages"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import HandymanIcon from '@mui/icons-material/Handyman';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const HomeMorador = () => {
    
    const {usuarios} = useContext(AppContext);
    
    console.log(usuarios.nome);

    return (
        <div className="text-center">
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box p-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Delivery" click='/morador/delivery'>
                    <DeliveryDiningIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click={'/morador/encomendas'}>
                    <MarkunreadMailboxIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/morador/servicos'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/morador/reservas'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/morador/visitas'}>
                    <HandymanIcon />
                </ButtonPages>
            </div>
        </div>
    )
}

export default HomeMorador