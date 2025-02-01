export default function Botoes_oficina() {
    return (
        <div className="flex justify-start items-start w-full p-2 space-x-4">
            <button className="w-[120px] h-[40px] bg-black text-white rounded hover:bg-green-500 hover:text-white transform transition hover:scale-110">Troca de Óleo</button>
            <button className="w-[190px] h-[40px] bg-black text-white rounded hover:bg-green-500 hover:text-white transform transition hover:scale-110">Manutenção Preventiva</button>
            <button className="w-[250px] h-[40px] bg-black text-white rounded hover:bg-green-500 hover:text-white transform transition hover:scale-110">Alinhamento & Balanceamento</button>
        </div>
    );
}