import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CardPortal = ({ clickEditar, clickRemover, gasto }) => {
    const { usuarioLogado } = useContext(AppContext)
    const { titulo, descricao, valor, data, categoria } = gasto

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">{titulo}</h2>
                <span className="text-sm text-gray-600">{categoria}</span>
            </div>
            <p className="mb-2 text-gray-700">{descricao}</p>
            <div className="flex items-center justify-between">
                <div className="text-gray-700">Valor: <strong>R$ {valor}</strong></div>
                <div className="text-gray-500">{data}</div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
                {usuarioLogado?.tipo === 'sindico' && (
                    <>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={clickEditar}>Editar</button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700" onClick={clickRemover}>Remover</button>
                    </>
                )}
            </div>
        </article>
    )
}

export default CardPortal
