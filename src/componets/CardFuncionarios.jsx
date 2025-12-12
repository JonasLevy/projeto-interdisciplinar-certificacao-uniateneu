import React from 'react';

const CardFuncionarios = ({ clickEditar, funcionario }) => {

    const onClickDetalhe = () => {
        clickEditar()
    }

    const {
        nome,
        email,
        telefone,
        cpf,
        cargo,
        tipo
    } = funcionario

    return (
        <article>
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
                <div className="flex items-center mb-3">
                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-900">{nome}</h2>
                        <p className="text-sm text-gray-500">Cargo: {tipo}</p>
                    </div>
                </div>
                <p className="mb-1 text-gray-800">Email:<span className="text-gray-700"> {email}</span></p>
                <p className="mb-1 text-gray-800">Telefone:<span className="text-gray-700"> {telefone}</span></p>
                <p className="mb-4 text-gray-800">Cpf: <span className="text-gray-700">{cpf}</span></p>
                <div className="flex justify-between items-center">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => onClickDetalhe("123")} >Editar</button>
                </div>
            </div>
        </article>
    );
};

export default CardFuncionarios;