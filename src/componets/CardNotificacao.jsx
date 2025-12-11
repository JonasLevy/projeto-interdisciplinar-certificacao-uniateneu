import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CardNotificacao = ( {clickEditar, notificacao }) => {
    
    const OnClickDetalhe = () => {
        clickEditar()
    }

    const { usuarios } = useContext(AppContext)
    const {
        mensagem,
        destinatario
    } = notificacao
    const usuario = usuarios.find(user => user.id == destinatario)

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Destinatario: {destinatario === 'Todos' ? "Para todos os moradores" : `${usuario.nome}`} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Mensagem: {mensagem}</p>
            <p className="mb-4 text-gray-700">Apartamento: {usuario.apt} - Torre: {usuario.torre}</p>
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

export default CardNotificacao