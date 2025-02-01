import Header_oficina from "../_components/header_oficina";
import Botoes_oficina from "../_components/botoes_oficina";
import Baner_oficina from "../_components/baner_oficina";
import Sobre_oficina from "../_components/sobre_oficina";
import Serviços_oficina from "../_components/serviços_oficina";
import Contatos_oficina from "../_components/contatos_oficina";


export default function oficina() {
  return (
    <div className="flex flex-col items-center justify-items-center w-full h-full bg-slate-300 space-y-2 font-[family-name:var(--font-geist-sans)]">
        
    <Header_oficina/>
    <Botoes_oficina/>
    <Baner_oficina/>
    <Sobre_oficina/>
    <Serviços_oficina/>
    <Contatos_oficina/>

    </div>
  );
}
