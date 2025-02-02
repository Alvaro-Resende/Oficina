import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function senac_oficina() {
  return (
    <div className="flex flex-col justify-start items-center bg-white h-full w-screen">
      <div className="flex w-[1250px] h-[140px]  items-center ">
        <div className="flex overflow-hidden justify-center items-center w-[130px] h-[100px] mb-2">
          <Image
            src="/imagens/senac_logo.png"
            alt="imagem ilustrativa"
            width="140"
            height="140"
          />
        </div>

        <div className="flex flex-col  w-[1050px] h-[150px]  justify-start items-start">
          <div className="flex space-x-2 w-[1000px] h-[50px] mt-1">
            <button className="flex justify-center items-center w-[130px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <MdEmail className="mr-1" /> WebMail
            </button>
            <button className="flex justify-center items-center w-[230px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <FaUserCog className="mr-1"/> Ambiente Virtual - AVA
            </button>
            <button className="flex justify-center items-center w-[180px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <FaChalkboardTeacher className="mr-1"/> Área do Professor
            </button>
            <button className="flex justify-center items-center w-[160px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <FaUserGraduate className="mr-1"/>  Área do Aluno
            </button>
            <button className="flex justify-center items-center w-[160px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <FaBarcode className="mr-1"/>  Boleto Vencido
            </button>
            <button className="flex justify-center items-center w-[160px] h-[30px] bg-blue-800 text-white rounded-b-lg text-[18px] text-center hover:bg-orange-500 ">
            <FaUserGraduate className="mr-1"/>  Área Aprendiz
            </button>
          </div>

          <div className="flex justify-end items-center space-x-14 w-[1000px]">
            <h1 className="text-blue-800 text-[24px] text-center">
              Minas Gerais
            </h1>
            <div className="flex w-[400px] h-[50px] justify-end items-center">
              <input
                className="w-[260px] h-[40px] bg-white text-black rounded-l-lg border-2 border-gray-400 focus:outline-none"
                placeholder="O que você está procurando ?"
              ></input>
              <button className="w-[100px] h-[40px] bg-blue-800 text-white text-center rounded-r-lg">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[3px] bg-orange-500"></div>

      <div className="w-screen h-[60px] bg-[#EFEFEF] flex justify-center items-start">
        <div className="flex justify-start items-center w-[1220px] h-[50px] mt-2 space-x-8">
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            O Senac
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Cursos
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Para Empresas
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Faculdade Senac
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Transparência
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Notícias e Eventos
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Contato
          </button>
          <button className="text-blue-800 hover:text-orange-500 text-[17px]">
            Trabalhe Conosco
          </button>
        </div>
      </div>

      <div className="w-screen h-[35px] bg-white flex justify-center items-start drop-shadow-md">
        <div className="flex space-x-1 justify-start items-center w-[1220px] h-[30px]">
          <button className="text-gray-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500">
            Senac MG - Portal Institucional
          </button>
          <h1 className="text-gray-500">»</h1>
          <h1 className="text-blue-500">Noticias</h1>
        </div>
      </div>
      <div className="w-screen h-[90px] bg-[#FFFFFF] flex justify-center items-start">
        <div className="flex justify-start items-end w-[1220px] h-[80px]">
          <h1 className="text-blue-800 text-[34px] mb-0">Notícias</h1>
        </div>
      </div>

      <div className="w-screen h-[3px] bg-orange-500"></div>

      <div className="flex flex-col justify-start items-start w-[1220px]  mt-2">
        <div className="flex space-x-2">
          <h1 className="text-blue-800 text-[20px]">Unidade:</h1>
          <select
            id="unidades"
            className="text-black rounded p-1 bg-white drop-shadow-md"
          >
            <option>Todas</option>
            <option>Conselheiro Lafaiete - Museu</option>
            <option>Alfenas</option>
            <option>Araxá</option>
            <option>Barbacena - Caiçaras</option>
            <option>Barbacena - Centro</option>
            <option>Belo Horizonte - Centro</option>
            <option>Belo Horizonte - Faculdade Senac</option>
            <option>Belo Horizonte - Núcleo de Criação e Design</option>
            <option>Belo Horizonte - Núcleo de Pós-Graduação</option>
            <option>Belo Horizonte - Venda Nova</option>
            <option>Betim</option>
          </select>
        </div>

        <div className="flex space-x-2 w-full h-[220px] items-center mt-5">
          <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
            <Image
              src="/imagens/cozinheiro.png"
              alt="imagem ilustrativa"
              width="300"
              height="200"
            />
          </div>

          <div className="flex flex-col space-y-2 w-[450px] ">
            <a
              href="#"
              className="text-blue-800 ml-2 hover:underline hover:underline-offset-1  text-[22px] w-[500px]"
            >
              Docente de Gastronomia conquista <br></br> certificação
              internacional
            </a>
            <h1 className="text-gray-400 ml-2 text-[16px]">
              Chef Gustavo Melo conquista certificação ProChef I
            </h1>
          </div>

          <div className="flex flex-col justify-start w-[350px] h-[180px] bg-white border-2 border-gray-300 mb-16 ml-auto">
            <div className="w-full h-[50px] p-3">
              <h1 className="text-blue-800 font-semibold">
                Central de Atendimento
              </h1>
            </div>
            <div className="w-full h-[3px] bg-orange-500"></div>
            <div className="w-full h-full bg-[#EFEFEF] p-3 flex flex-col ">
              <h1 className="text-gray-600 text-[22px] mb-3 flex justify-start items-center"> <MdHeadsetMic className="mr-2 text-[36px]"/> 0800-724-4440  <FaWhatsapp className="ml-2"/></h1>
              <h1 className="text-gray-600">
                Atendimento telefônico de segunda à sexta-feira das 8h às 20h{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[700px] h-[1px] bg-orange-500 mb-3"></div>

        <div className="flex space-x-2 w-full h-[220px] items-center">
          <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
            <Image
              src="/imagens/faculdade_senac.png"
              alt="imagem ilustrativa"
              width="300"
              height="200"
            />
          </div>

          <div className="flex flex-col space-y-2 w-[400px]">
            <a
              href="#"
              className="text-blue-800 ml-2 hover:underline hover:underline-offset-1  text-[22px] w-[400px]"
            >
              Faculdade Senac conquista 8ª Selo da ABMES
            </a>
            <h1 className="text-gray-400 ml-2 text-[16px]">
              Em reconhecimento de ações de inclusão social realizadas em 2024
            </h1>
          </div>
        </div>

        <div className="w-[700px] h-[1px] bg-orange-500 mb-3"></div>

        <div className="flex space-x-2 w-full h-[220px] items-center">
          <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
            <Image
              src="/imagens/ferias.png"
              alt="imagem ilustrativa"
              width="300"
              height="200"
            />
          </div>

          <div className="flex flex-col space-y-2 w-[400px]">
            <a
              href="#"
              className="text-blue-800 ml-2 hover:underline hover:underline-offset-1  text-[22px] w-[400px]"
            >
              Planejamento para férias inesquecíveis
            </a>
            <h1 className="text-gray-400 ml-2 text-[16px]">
              Dicas para garantir conforto, segurança e diversão
            </h1>
          </div>
        </div>

        <div className="w-[700px] h-[1px] bg-orange-500 mb-3"></div>

        <div className="flex space-x-2 w-full h-[220px] items-center">
          <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
            <Image
              src="/imagens/oculos.png"
              alt="imagem ilustrativa"
              width="300"
              height="200"
            />
          </div>

          <div className="flex flex-col space-y-2 w-[400px]">
            <a
              href="#"
              className="text-blue-800 ml-2 hover:underline hover:underline-offset-1  text-[22px] w-[400px]"
            >
              Óculos OrCam MyEye 2.0, disponível em todas as unidades do Senac
            </a>
            <h1 className="text-gray-400 ml-2 text-[16px]">
              inclusão de estudantes e colaboradores com deficiência visual
            </h1>
          </div>
        </div>
        <div className="w-[700px] h-[1px] bg-orange-500 mb-3"></div>

      </div>

    <div className="w-full h-[80px] bg-[#EFEFEF] mt-14 flex justify-center items-center space-x-3">
        <h1 className="text-gray-500 text-[22px]">Central de Relacionamento: 0800 724 44 40 (Minas Gerais)</h1>
        <h1 className="text-gray-500 text-[22px]">31 3057-8600 (Demais Estados) </h1>
    </div>

    <div className="w-screen h-[3px] bg-orange-500"></div>

    </div>
  );
}
