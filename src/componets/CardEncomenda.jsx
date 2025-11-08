import React from 'react'

const CardEncomenda = ({ clickEditar }) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }
    
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Empresa </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Data Recebimento: 08/11/2025</p>
            <p className="mb-4 text-gray-700">Codigo: 5845874585BR</p>
            <p className="mb-4 text-gray-700">Descrição: Breve descrição da entrega ou delivery</p>
            <div className="flex justify-between items-center">
                <button 
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={OnClickDetalhe}>
                    Editar
                </button>
            </div>
        </article>
    )
}

export default CardEncomenda