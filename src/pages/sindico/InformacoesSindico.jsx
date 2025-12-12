import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const InformacoesSindico = () => {
    const { usuarioLogado, usuarios, condominio } = useContext(AppContext)

    return (
        <div className="min-h-full w-full">
            <div className='flex h-16 bg-slate-300 p-3 items-center justify-between'>
                <h1>Informações</h1>
            </div>

            <section className='p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do usuário</h2>
                    <p><strong>Nome:</strong> {usuarioLogado?.nome}</p>
                    <p><strong>Email:</strong> {usuarioLogado?.email}</p>
                    <p><strong>Tipo:</strong> {usuarioLogado?.tipo}</p>
                    <p><strong>Telefone:</strong> {usuarioLogado?.telefone}</p>
                    <p><strong>Apartamento:</strong> {usuarioLogado?.apt || '-'}</p>
                    <p><strong>Torre:</strong> {usuarioLogado?.torre || '-'}</p>
                </article>

                <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
                    <h2 className='text-lg font-semibold mb-2'>Informações do Condomínio</h2>
                    <p><strong>Nome:</strong> {condominio?.nome}</p>
                    <p><strong>Endereço:</strong> {condominio?.rua}</p>
                    <p><strong>Telefone:</strong> {condominio?.telefone}</p>
                </article>
            </section>
        </div>
    )
}

export default InformacoesSindico
