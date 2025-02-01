import Image from "next/image";

export default function Baner_oficina() {
    return (
      <div className="flex justify-between items-center w-[1100px] h-[600px] text-black mx-auto !py-8 ">
        <div className="flex flex-col justify-start space-y-3">
            <h1 className="font-semibold text-[38px]">Sobre</h1>
            <h2>A Dev Motores é uma empresa dedicada a proporcionar aos <br />
                seus Clientes uma experiência automotiva excepcional, baseada <br />
                em décadas de experiência, sólida credibilidade e um <br />
                compromisso inabalável com a qualidade. Especializada em <br />
                produtos e serviços automotivos, a Dev Motores oferece uma <br />
                ampla gama de soluções projetadas para atender ás <br />
                necessidades de veículos de todos os tipos.
            </h2>
        </div>
        <div className="overflow-hidden rounded w-[400px] h-[470px]">
               <Image
                src="/imagens/mecanico.jpg"
                alt="imagem ilustrativa"
                width="400"
                height="500"
                />
        </div>
      </div>
    );
}