import React from 'react';
import { useNavigate } from "react-router-dom";

const CardAmbientes = ({ clickEditar, ambientes }) => {

    const navigate = useNavigate();

    const OnClickDetalhe = () => {
        clickEditar();
    }

     const handleReservas = () => {
        navigate('/sindico/reservas', { state: { ambiente: ambientes } });
    }

    const {
        nome,
        info,
    } = ambientes

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{nome} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: {info}</p>
            <div className="flex items-center gap-3">
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}> Editar
                </button>
                <button
                    className="px-3 py-1 bg-white text-gray-800 text-sm rounded border border-gray-300 hover:bg-gray-100" onClick={(handleReservas)} > Reservas
                </button>
            </div>
        </article>
    );
};

export default CardAmbientes;