import React from 'react';

export default function CardReserva({ clickEditar }) {

    const OnClickDetalhe = (id) => {
        clickEditar(id);
    }

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Reserva de Espaço Comum</h2>
                    <p className="text-sm text-gray-500">Reserva para 15/07/2024</p>
                    <p className="text-sm text-gray-500">Horario: 18:30 as 22:00</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">"Festa de aniversário - Trazer decoração e alimentos."</p>
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