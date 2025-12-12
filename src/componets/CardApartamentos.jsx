

const CardApartamentos = ({clickEditar, apt}) => {
    
    const OnClickDetalhe = () => {
        clickEditar();
    }

    const {
        andar,
        apartamento,
        torre 
    } = apt
    
    return(
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 mb-4">
            <div className="flex items-center mb-4 ">
                <div className="">
                    <h2 className="text-lg font-semibold text-gray-900">Ap-{apt.apt} - Torre {torre}</h2>
                    <p className="text-sm text-gray-500">Responsavel: {apt.nome}</p>
                </div>
            </div>
            <p className="mb-4 text-gray-700">Telefone: {apt.telefone}</p>
            <div className="flex justify-between items-center">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700" onClick={() => OnClickDetalhe("123")}>Editar</button>
            </div>
        </article>
    )
}

export default CardApartamentos;