import React from 'react';
import { formatData } from '../../hooks/formatData';
import { formatHora } from '../../hooks/formatHora';

export default function CardReserva({ clickEditar, reserva }) {

    const OnClickDetalhe = () => {
        clickEditar();
    };

    console.log("Reserva:", reserva);


    const ambiente = reserva?.Ambiente ?? "Ambiente";
    const reservaData = reserva?.ReservaAmbiente ?? {};
    const dataReserva = reservaData.dataReserva ?? null;
    const horaInicio = reservaData.horaInicio ?? null;
    const horaFim = reservaData.horaFim ?? null;
    const statusReserva = reservaData.status ?? "";
    const nomeMorador = reserva?.nome ?? "Morador";
    const apartamento = reserva?.apartamento ?? null;

    const formatDate = (date) => {
        if (!date) return "Sem data";
        return new Date(date + "T00:00:00").toLocaleDateString("pt-BR");
    };

    const formatTime = (time) => {
        if (!time) return "--:--";
        return time.substring(0, 5);
    };
/*
    const {
        ambiente,
        dataReserva,
        horaInicio,
        horaFim,
        statusReserva,
        nomeMorador,
        apartamento,
    } = reserva
*/
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Reserva - {ambiente}
                    </h2>

                    <p className="text-sm text-gray-500">
                        Reserva para {formatDate(dataReserva)}
                    </p>

                    <p className="text-sm text-gray-500">
                        Horário: {formatTime(horaInicio)} às {formatTime(horaFim)}
                    </p>

                    <p className="text-sm text-gray-500">
                        Status: {statusReserva}
                    </p>

                    <p className="text-sm text-gray-500">
                        Morador: {nomeMorador}
                    </p>

                    <p className="text-sm text-gray-500">
                        apartamento: {apartamento}
                    </p>
                </div>
            </div>

            <div className="flex justify-end items-center">
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}
                >
                    Editar
                </button>
            </div>
        </article>
    );
}
