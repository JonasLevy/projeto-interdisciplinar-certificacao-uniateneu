import ButtonPages from "../../componets/ButtonPages"
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Index = () => {
    return (
        <div className="text-center p-8">
            Index Sindico
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Apartamentos" click='/sindico/apartamentos'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click={'/sindico/encomendas'}>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Ambientes" click={'/sindico/ambientes'}>
                    <MeetingRoomIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/sindico/servicos'}>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click={'/sindico/moradores'}>
                    <PeopleIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/sindico/reservas'}>
                    <EventAvailableIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/sindico/visitas'}>
                    <PersonAddIcon />
                </ButtonPages>
                <ButtonPages name="Notificação" click={'/sindico/notificacao'}>
                    <CampaignIcon />
                </ButtonPages>
                <ButtonPages name="Funcionarios" click={'/sindico/funcionarios'}>
                    <BadgeIcon />
                </ButtonPages>
                <ButtonPages name="Transparencia" click={'/sindico/transparencia'}>
                    <AccountBalanceWalletIcon />
                </ButtonPages>
                <ButtonPages name="Informacoes" click={'/sindico/informacoes'}>
                    <AccountCircleIcon />
                </ButtonPages>

            </div>
        </div>
    )
}

export default Index