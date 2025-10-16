import React from 'react';

const CardMorador = () => {
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Nome do Morador</h2>
                    <p className="text-sm text-gray-500">Apartamento: 101 - Torre A</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Email:</p>
            <p className="mb-4 text-gray-700">Telefone:</p>
            <div className="flex justify-between items-center">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Ver Detalhes</button>
            </div>
        </article>
    );
};

export default CardMorador;