import ButtonPages from "../../componets/ButtonPages"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HomeMorador = () => {

    return (
        <div className="text-center ">
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box p-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Encomendas" click={'/morador/encomendas'}>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/morador/servicos'}>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/morador/reservas'}>
                    <EventAvailableIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/morador/visitas'}>
                    <PersonAddIcon />
                </ButtonPages>
                <ButtonPages name="Notificação" click={'/morador/notificacao'}>
                    <CampaignIcon />
                </ButtonPages>
                <ButtonPages name="Transparencia" click={'/morador/transparencia'}>
                    <AccountBalanceWalletIcon />
                </ButtonPages>
                <ButtonPages name="Informacoes" click={'/morador/informacoes'}>
                    <AccountCircleIcon />
                </ButtonPages>
            </div>
        </div>
    )
}

export default HomeMorador