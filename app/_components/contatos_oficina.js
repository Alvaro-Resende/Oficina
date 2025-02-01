import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdAlarm } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contatos_oficina() {
    return (
      
      <div className="flex flex-col justify-start items-center w-[1200px] h-[500px] text-white mx-auto ">
        <div className="flex flex-col justify-start items-center bg-black text-white rounded-lg w-[800px] h-[350px]">
            <h1 className="font-semibold text-[34px] mt-5">Contatos</h1>
            <div className="flex justify-start items-center w-[600px] h-[300px] mt-10">
                <div className="flex flex-col w-[300px] h-[300px] items-center space-y-5">
                    
                    <div className="flex space-x-5 justify-start items-center w-full">
                        <MdEmail className="text-[45px]" />
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Email</h1>
                            <h1>empresa@teste.com</h1>
                        </div>
                    </div>

                    <div className="flex space-x-5 justify-start items-center w-full">
                        <MdPhone className="text-[45px]" />
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Telefonel</h1>
                            <h1>(xx) 4002-8922</h1>
                        </div>
                    </div>

                    <div className="flex space-x-5 justify-start items-center w-full">
                        <MdAlarm className="text-[45px]" />
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Horario de Atendimento</h1>
                            <h1>Segunda a sexta de 07:30 as 18:00</h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[300px] h-[300px] items-center space-y-5">
                <div className="flex space-x-5 justify-start items-center w-full">
                        <MdLocationOn className="text-[45px]" />
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Endereço</h1>
                            <h1>Rua 10, n° 245 Centro</h1>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>

        <button className="mt-5 bg-green-500 text-white rounded w-[280px] h-[40px] hover:bg-white hover:text-green-500 flex justify-center items-center">
        <FaWhatsapp className="mr-2"/>
        Fale com nosso atendente
        </button>

        <h1 className="text-[20px] text-black mt-14">Todos os direitos reservados Dev Peças @2024</h1>

      </div>
    );
}