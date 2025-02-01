export default function Pesquisa() {
    return (
        <div className="w-[800px] flex justify-center items-center space-x-2">
           <input placeholder="Pesquisar..." className="focus:outline-none w-[718px] h-[40px] bg-white text-black rounded"></input>
           <button className="w-[90px] h-[40px] bg-black rounded text-white hover:bg-white hover:text-black">Pesquisar</button>
        </div>
    );
}