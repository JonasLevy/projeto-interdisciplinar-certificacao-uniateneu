import React, { useContext } from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';
import { AppContext } from '../context/AppContext';


export default function CardReserva({ clickEditar, reserva }) {
    const { usuarioLogado, aprovarReserva, usuarios } = useContext(AppContext)

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const morador = usuarios?.find(user => user.id === reserva.idUsuario);
    const {
        espaco,
        dataReserva,
        reservaHoraEntrada,
        reservaHoraSaida,
        descricaoReserva,
        apt,
        torre,
        status  
    } = reserva
    

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Reserva - {espaco}</h2>
                    <p className="text-sm text-gray-500">Reserva para {formatData(dayjs(dataReserva))}</p>
                    <p className="text-sm text-gray-500">Horario: {formatHora(dayjs(reservaHoraEntrada))} as {formatHora(dayjs(reservaHoraSaida))}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">"{descricaoReserva}."</p>
            <p className="text-sm text-gray-500">Morador: {morador.nome}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: {apt} - Torre {torre}</span>
                <span className="text-sm text-gray-500">Status: {status}</span>

                <div className='p-2 '>
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}
                >
                    Editar
                </button>
                    {usuarioLogado.tipo == "sindico" && <button
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 mr-2 ml-2"
                        onClick={() => aprovarReserva(reserva.id, "Aprovado")}
                    >
                        Aprovar
                    </button>}
                    {usuarioLogado.tipo == "sindico" && <button
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        onClick={() => aprovarReserva(reserva.id, "Cancelado")}
                    >
                        Cancelar
                    </button>}
                </div>
            </div>
        </article>
    );
}