import ButtonPages from "../../componets/ButtonPages"
import HandymanIcon from '@mui/icons-material/Handyman';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Portaria = () => {
    return (
        <div className="">Index Portaria
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Moradores" click='/portaria/moradores'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Recebidos" click='/portaria/recebidos'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Servicos" click='/portaria/servicos'>
                    <ApartmentIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click='/portaria/visitas'>
                    <ApartmentIcon />
                </ButtonPages>
            </div>
            
        </div>
    )
}

export default Portaria