import React from 'react';
import { formatData } from '../hooks/formatData';
import { formatHora } from '../hooks/formatHora';
import dayjs from 'dayjs';

const CardServico = ({ clickEditar, servico }) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nomeEmpresa,
        dataInicio,
        dataFim,
        horaEntrada,
        horaSaida,
        apt,
        torre,
        descricao
    } = servico

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Nome da Empresa: {nomeEmpresa}</h2>
                    <p className="text-sm text-gray-500">Data inicio: {formatData(dayjs(dataInicio))}</p>
                    <p className="text-sm text-gray-500">Data Fim: {formatData(dayjs(dataFim))}</p>
                    <p className="text-sm text-gray-500">Entrada: {formatHora(dayjs(horaEntrada))}</p>
                    <p className="text-sm text-gray-500">Saida: {formatHora(dayjs(horaSaida))}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: {descricao}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: {apt} - Torre {torre}</span>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}>Editar</button>
            </div>
        </article>
    );
};

export default CardServico;