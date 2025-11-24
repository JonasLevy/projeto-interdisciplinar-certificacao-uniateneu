import React from 'react';

export default function CardDelivery() {
    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Delivery</h2>
            <p className="text-gray-600 text-xs">Detalhes do pedido de delivery serão exibidos aqui.</p>
            <p className="text-gray-600 text-xs">Codigo do Pedido: 0000</p>
            <p className="text-gray-600 text-xs">Status: Entregue</p>
        </div> 

    );
}