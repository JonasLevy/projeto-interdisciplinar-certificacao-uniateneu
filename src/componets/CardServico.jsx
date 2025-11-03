import React from 'react';

const CardServico = ({clickEditar}) => {

    const OnClickDetalhe = (id) => {
        clickEditar(id);
    }

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Nome da Empresa: LT - Construções</h2>
                    <p className="text-sm text-gray-500">Data inicio: 01/01/2024</p>
                    <p className="text-sm text-gray-500">Data Fim: 10/02/2024</p>
                    <p className="text-sm text-gray-500">Entrada: 07:00</p>
                    <p className="text-sm text-gray-500">Saida: 17:00</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: Reforma das paredes dos apartamentos</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Apartamento: 101 - Torre A</span>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}>Editar</button>
            </div>
        </article>
    );
};

export default CardServico;