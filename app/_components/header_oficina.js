export default function Header_oficina() {
    return (
        <header className="text-black flex justify-between items-center w-full p-2">
            
            <h1 className="font-semibold text-[32px]">Dev Motors</h1>
                
            <div className="flex justify-center space-x-7 mr-4">
                <button className="h-[40px] bg-slate-300 text-black hover:bg-slate-300 hover:text-green-500 text-center transform transition hover:scale-[1.3]">HOME</button>
                <button className="h-[40px] bg-slate-300 text-black hover:bg-slate-300 hover:text-green-500 text-center transition hover:scale-[1.3]">SERVIÇOS</button>
                <button className="h-[40px] bg-slate-300 text-black hover:bg-slate-300 hover:text-green-500 transition hover:scale-[1.3]">CONTATOS</button>
            </div>
        </header>
    );
}