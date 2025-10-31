import React from 'react';

const CardVisita = ({clickEditar}) => {
    
    const OnClickDetalhe = (id) => {
        clickEditar(id);
    }
    
    return (
        <article className="border p-4 rounded shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Visita</h2>
            <p className="text-gray-600 text-xs">Detalhes da visita serão exibidos aqui.</p>
            <p className="text-gray-600 text-xs">Nome: Fulano de Tal</p>
            <p className="text-gray-600 text-xs">Data: 01/01/2024</p>
            <p className="text-gray-600 text-xs">Hora de Entrada: 14:00</p>
            <p className="text-gray-600 text-xs">Apartamento: 101</p>

            <div className="flex justify-end ">
                <button
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    onClick={() => OnClickDetalhe("123")}
                >
                    Editar
                </button>
            </div>
        </article>
    );
};

export default CardVisita;