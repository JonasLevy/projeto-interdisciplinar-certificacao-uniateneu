import React from 'react';

const CardAmbientes = ({ clickEditar, ambientes }) => {

    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        nome,
        info,
    } = ambientes

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Ambiente: {nome} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Descrição: {info}</p>
            <div className="flex justify-between items-center">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")} >Editar</button>
            </div>
        </article>
    );
};

export default CardAmbientes;