import React from 'react'
import Image from "next/image";

export default function senac_oficina() {
  return (
    <div className='flex flex-col justify-start items-center bg-white h-screen w-screen'>
        <div className='flex w-[1250px] h-[140px]  items-center '>
            <div className='flex overflow-hidden justify-center items-center w-[130px] h-[100px] mb-2'>
                <Image
                src="/imagens/senac_logo.png"
                alt="imagem ilustrativa"
                width="140"
                height="140"
                />
            </div>

            <div className='flex flex-col  w-[1050px] h-[150px]  justify-start items-start'>
                <div className='flex space-x-2 w-[1000px] h-[50px] mt-1'>
                    <button className='w-[120px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>WebMail</button>
                    <button className='w-[230px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>Ambiente Virtual - AVA</button>
                    <button className='w-[180px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>Área do Professor</button>
                    <button className='w-[140px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>Área do Aluno</button>
                    <button className='w-[160px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>Boleto Vencido</button>
                    <button className='w-[140px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 '>Área Aprendiz</button>
                </div>
                
                <div className='flex justify-end items-center space-x-14 w-[1000px]'>
                    <h1 className='text-blue-800 text-[30px] text-center'>Minas Gerais</h1>
                    <div className='flex w-[400px] h-[50px] justify-end items-center'>
                        <input className='w-[260px] h-[40px] bg-white text-black rounded-l-lg border-2 border-gray-400 focus:outline-none' placeholder='O que você está procurando ?'></input>
                        <button className='w-[100px] h-[40px] bg-blue-800 text-white text-center rounded-r-lg'>Buscar</button>
                    </div>
                </div>

            </div>
        </div>
        <div className='w-screen h-[3px] bg-orange-500'></div>
        <div className='w-screen h-[70px] bg-[#EFEFEF] flex justify-center items-start'>
            <div className='flex justify-start items-center w-[1220px] h-[50px] mt-2 space-x-8'>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>O Senac</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Cursos</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Para Empresas</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Faculdade Senac</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Transparência</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Notícias e Eventos</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Contato</button>
                <button className='text-blue-800 hover:text-orange-500 text-[17px]'>Trabalhe Conosco</button>
            </div>
        </div>
        <div className='w-screen h-[35px] bg-white flex justify-center items-start'>
            <div className="flex space-x-1 justify-start items-center w-[1220px] h-[30px]">
                <button className='text-gray-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500'>Senac MG - Portal Institucional</button>
                <h1 className='text-gray-500'>»</h1>
                <h1 className='text-blue-500'>Noticias</h1>

            </div>
        </div>

    </div>
  )
}
