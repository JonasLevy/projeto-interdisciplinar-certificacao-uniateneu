import React, { useContext } from 'react'
import dayjs from 'dayjs';
import { formatData } from '../hooks/formatData';
import { AppContext } from '../context/AppContext';

const CardEncomenda = ({ clickEditar, encomenda }) => {
    const { usuarios } = useContext(AppContext)
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        tipoEncomenda,
        empresa, 
        dataRecebimento,
        descricao,
        codigoEntrega,
        idUsuario
    } = encomenda


    const morador = usuarios.find(user => user.id == idUsuario)

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mt-2 mb-4">123
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">{(tipoEncomenda)} - {empresa} </h2> 
                </div>
            </div>
            <p className="mb-1 text-gray-700">Data Recebimento: {formatData(dayjs(dataRecebimento))}</p>
            {codigoEntrega.trim() === "" ? (<p></p>) : (<p className="mb-1 text-gray-700">Codigo: {codigoEntrega}</p>)}
            <p className="mb-1 text-gray-700">Descrição: {descricao}</p>
            {morador && <p className="mb-4 text-gray-700">apto: {morador?.apt} - torre: ${morador?.torre}</p>}
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