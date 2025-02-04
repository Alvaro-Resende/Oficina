import React from "react";
import Image from "next/image";

export default function Copasa() {
  return (
    <div className="w-full h-full bg-[#D1D7FF] flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-center items-center w-full h-[300px]">
        <Image
          src="/imagens/copasa.png"
          alt="imagem ilustrativa"
          fill
          className=""
        />
      </div>

      <div className="w-full h-full flex justify-center">
        <div className=" w-[980px] mb-3 flex flex-col justify-start items-start mt-10 space-y-4">
          <h1 className="text-[22px] text-blue-800">Agência Virtual</h1>

          <div className="flex w-full h-[150px] space-x-4">
            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/ligacao agua.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Ligação Água/Esgoto
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/parcelamentos.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Parcelamentos
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/religacao.png"
                alt="imagem ilstrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Religação de Água
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/email.png"
                alt="imagem ilustrativa"
                width="100"
                height="100"
                className="mb-2"
              />
              Contato no E-mail
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/vazamento.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Vazamento
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/tarifa.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Tarifas e Preços
            </button>
          </div>

          <div className="flex w-full h-[150px]  space-x-4">
            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/debito.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Débito Automático
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/leitura.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Informar Leitura
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/consumo.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Histórico de Consumo
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/segunda_via.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Segunda Via
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/sem_agua.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Estou sem Água
            </button>

            <button className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded bg-[#5387EC] text-white text-[13px] transform transition hover:scale-110">
              <Image
                src="/imagens/autodenuncia.png"
                alt="imagem ilustrativa"
                width="80"
                height="80"
                className="mb-2"
              />
              Autodenúncia
            </button>
          </div>

          <div className="w-full h-[30px] flex justify-end items-center">
            <button className="text-blue-800 text-[14px] transform transition hover:scale-105">Mais Serviços </button>
          </div>

        </div>
      </div>
    </div>
  );
}
