import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export default function Baner_oficina() {
    return (
      <div className="relative flex flex-col justify-center items-center w-full h-[420px]">
        <Image
            src="/imagens/baner_oficina.jpg"
            alt="baner"
            fill
            className="object-cover"
        />

      <div className="absolute flex flex-col items-center justify-center text-center text-[18px]">
        <h1 className="text-white text-[42px] font-bold">
          Manutenção Automotiva de <br /> qualidade para seu carro
        </h1>
        <button className="mt-4 bg-green-500 text-white rounded w-[280px] h-[40px] hover:bg-white hover:text-green-500 flex justify-center items-center">
        <FaWhatsapp className="mr-2"/>
        Fale com nosso atendente
        </button>
      </div>
      </div>
    );
}