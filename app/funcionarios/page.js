import React from 'react'
import Mensagem from '../_components/mensagem'

export default function page() {
  return (
    <div className='flex justify-center items-center p-8 space-x-5'>
        <Mensagem nome="Alvaro" idade="24" email="alvaroresende26@hotmail.com" texto="Editar" cor="green"/>
        <Mensagem nome="João" idade="26" email="joão@hotmail.com" texto="Salvar" cor="blue"/>
        <Mensagem nome="Felipe" idade="32" email="felipe@gmail.com" texto="Excluir" cor="red"/>

    </div>
  )
}
