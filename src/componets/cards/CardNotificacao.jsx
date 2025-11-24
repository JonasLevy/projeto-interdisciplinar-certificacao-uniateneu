import React from 'react'

const CardNotificacao = ( {clickEditar, notificacao }) => {
    
    const OnClickDetalhe = () => {
        clickEditar()
    }

    console.log(notificacao);

    const {
        nomeMorador,
        mensagem,
        destinatario
    } = notificacao

    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <div className="flex items-center mb-4">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Destinatario: {destinatario === 'Todos' ? "Para todos os moradores" : `${nomeMorador}`} </h2>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Mensagem: {mensagem}</p>
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