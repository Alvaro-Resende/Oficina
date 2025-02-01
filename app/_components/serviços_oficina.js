import Image from "next/image";

export default function Serviços_oficina() {
    return (
      <div className="flex flex-col justify-start items-center w-[1300px] h-[400px] text-black mx-auto">
        <h1 className="font-semibold text-[38px]">CONHEÇA NOSSOS SERVIÇOS</h1>
        <div className="flex space-x-5 w-full justify-center items-center">
           
            <div className="flex flex-col justify-center items-center h-[300px] w-[300px] space-y-2">
                <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
                    <Image
                        src="/imagens/troca-de-oleo.png"
                        alt="imagem ilustrativa"
                        width="300"
                        height="300"
                        className="group-hover:scale-110 transition-transform duration-300"
                        />     
                </div>
                <h1 className="text-[17px]">Troca de Oléo</h1>
            </div>

            <div className="flex flex-col justify-center items-center h-[300px] w-[300px] space-y-2">
                <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
                    <Image
                        src="/imagens/manutencao_preventiva.jpg"
                        alt="imagem ilustrativa"
                        width="300"
                        height="300"
                        />     
                </div>
                <h1 className="text-[17px]">Manutenção Preventiva</h1>
            </div>

            <div className="flex flex-col justify-center items-center h-[300px] w-[300px] space-y-2">
                <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
                    <Image
                        src="/imagens/troca_de_pneu.png"
                        alt="imagem ilustrativa"
                        width="300"
                        height="200"
                        />     
                </div>
                <h1 className="text-[17px]">Troca de Pneu</h1>
            </div>

            <div className="flex flex-col justify-center items-center h-[300px] w-[300px] space-y-2">
                <div className="overflow-hidden rounded-lg transform transition duration-300 hover:scale-110">
                    <Image
                        src="/imagens/alinhamento_oficina.png"
                        alt="imagem ilustrativa"
                        width="300"
                        height="200"
                        />     
                </div>
                <h1 className="text-[17px]">Alinhamento</h1>
            </div>

        </div>
      </div>
    );
}