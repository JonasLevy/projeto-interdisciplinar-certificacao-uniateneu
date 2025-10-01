import ButtonPages from "../../componets/ButtonPages"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import HandymanIcon from '@mui/icons-material/Handyman';

const Index = () => {
    return (
        <div className="text-center">
            Index Morador
            <div
                className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 border-box pb-8"
                style={{ maxWidth: "100vw" }}
            >
                <ButtonPages name="Delivery" click='/sindico/delivery'>
                    <DeliveryDiningIcon />
                </ButtonPages>
                <ButtonPages name="Encomendas" click={'/sindico/encomendas'}>
                    <MarkunreadMailboxIcon />
                </ButtonPages>
                <ButtonPages name="Serviços" click={'/sindico/servicos'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Reservas" click={'/sindico/reservas'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Visitas" click={'/sindico/visitas'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Moradores" click={'/sindico/moradores'}>
                    <HandymanIcon />
                </ButtonPages>
                <ButtonPages name="Apatatamentos" click={'/sindico/apatatamentos'}>
                    <HandymanIcon />
                </ButtonPages>
            </div>
        </div>
    )
}

export default Index