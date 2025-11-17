import React from 'react'

const CardEncomenda = ({ clickEditar, encomenda }) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    console.log(encomenda);

    const {
        tipoEncomenda,
        empresa, 
        dataRecebimento,
        descricao,
        codigoEntrega
    } = encomenda
    
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{tipoEncomenda} - {empresa} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Data Recebimento: {dataRecebimento}</p>
            {codigoEntrega.trim() === "" ? (<p></p>):(<p className="mb-4 text-gray-700">Codigo: {codigoEntrega}</p>)}
            <p className="mb-4 text-gray-700">Descrição: {descricao}</p>
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