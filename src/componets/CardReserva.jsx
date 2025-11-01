import React from 'react';

export default function CardReserva({ clickEditar, reserva }) {

    const OnClickDetalhe = (id) => {
        clickEditar(id);
    }

    const { espaco, dataReserva, reservaHoraEntrada, reservaHoraSaida, descricaoReserva, apt, torre } = reserva
    console.log()


    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Reserva do {espaco}</h2>
                    <p className="text-sm text-gray-500">Reserva para {dataReserva}</p>
                    <p className="text-sm text-gray-500">Horario: {reservaHoraEntrada} as {reservaHoraSaida}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">"{descricaoReserva}."</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: 202 - Torre B</span>
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={() => OnClickDetalhe("123")}
                >
                    Editar
                </button>
            </div>
        </article>
    );
}