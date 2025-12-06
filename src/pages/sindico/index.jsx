import ButtonPages from "../../componets/ButtonPages"
import HandymanIcon from '@mui/icons-material/Handyman';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";


const Index = () => {
    return (
        <div className="text-center">
            Index Sindico
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Apartamentos" click='/sindico/apartamentos'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Portaria" click={'/sindico/portaria'}>
                    <MeetingRoomIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/sindico/servicos'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click={'/sindico/moradores'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/sindico/reservas'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/sindico/visitas'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Notificações" click={'/sindico/notificacoes'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Funcionarios" click={'/sindico/funcionarios'}>
                    <HandymanIcon />
                </ButtonPages>

            </div>
        </div>
    )
}

export default Index