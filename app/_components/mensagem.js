import React from 'react'

export default function Mensagem({nome,idade,email,texto,cor}) {
  return (
    <div className='w-[280px] h-[350px] flex flex-col justify-start items-center bg-white text-black rounded'>
        <h1 className='font-semibold text-[24px]'>Cadastro do <br/> Profissional</h1>
        <div className='flex flex-col justify-center items-center w-[240px] h-[200px] mt-5'>
            <h1 className='font-semibold'>Nome:</h1>
            <h1 className='border-b-2 border-black w-[210px] text-center text-[15px]'>{nome}</h1>
            <h1 className='font-semibold mt-5'>Idade:</h1>
            <h1 className='border-b-2 border-black w-[210px] text-center text-[15px]'>{idade} Anos</h1>
            <h1 className='font-semibold mt-5'>E-mail:</h1>
            <h1 className='border-b-2 border-black w-[210px] text-center text-[15px]'>{email}</h1>
        </div>
        <button className='w-[80px] h-[35px] rounded text-center mt-3 transform transition hover:scale-110' style={{backgroundColor: cor}}>
            {texto}
        </button>
        
    </div>
  )
}
