import React from 'react';

const CardFuncionarios = ({ clickEditar, funcionario }) => {

    const onClickDetalhe = () => {
        clickEditar()
    }

    console.log(funcionario);

    const {
        nome,
        email,
        telefone,
        cpf,
        cargo
    } = funcionario

    return (
        <article>
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
                <div className="flex items-center mb-4">
                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-900">{nome}</h2>
                        <p className="text-sm text-gray-500">Cargo: {cargo}</p>
                    </div>
                </div>
                <p className="mb-4 text-gray-700">Email: {email}</p>
                <p className="mb-4 text-gray-700">Telefone: {telefone}</p>
                <div className="flex justify-between items-center">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => onClickDetalhe("123")} >Editar</button>
                </div>
            </div>
        </article>
    );
};

export default CardFuncionarios;