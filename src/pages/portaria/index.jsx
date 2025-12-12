import ButtonPages from "../../componets/ButtonPages"
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Portaria = () => {
    return (
        <div className="">Index Portaria
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Serviços" click='/portaria/servicos'>
                    <RoomServiceIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click='/portaria/moradores'>
                    <PeopleIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click='/portaria/encomendas'>
                    <LocalShippingIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click='/portaria/visitas'>
                    <PersonAddIcon />
                </ButtonPages>
            </div>
            
        </div>
    )
}

export default Portaria