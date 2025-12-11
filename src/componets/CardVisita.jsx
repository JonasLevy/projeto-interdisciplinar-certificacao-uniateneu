import React from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';


const CardVisita = ({ clickEditar, visita }) => {

    const OnClickDetalhe = () => {
        clickEditar();
    }

    console.log(visita)

    const {
        nome,
        cpf,
        telefone,
        dataVisita,
        horaVisita
    } = visita

    return (
        <article className="border p-4 rounded shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Visita</h2>
            <p className="text-gray-600 text-xs">Detalhes da visita serão exibidos aqui.</p>
            <p className="text-gray-600 text-xs">Nome: {nome}</p>
            <p className="text-gray-600 text-xs">Data: {formatData(dayjs(dataVisita))}</p>
            <p className="text-gray-600 text-xs">Hora de Entrada: {formatHora(dayjs(horaVisita))}</p>
            <p className="text-gray-600 text-xs">Apartamento: 101</p>

            <div className="flex justify-end ">
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}
                >
                    Editar
                </button>
            </div>
        </article>
    );
};

export default CardVisita;