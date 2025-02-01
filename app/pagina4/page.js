import Menu from "../_components/Menu";
import Pesquisar from "../_components/Pesquisar";
import Tabela from "../_components/Tabela";
import Footer from "../_components/Footer";

export default function page3() {
  return (
    <div className=" min-h-screen p-2 font-[family-name:var(--font-geist-sans)] w-full h-full bg-gray-700 ">
       <div className="mt-16 flex flex-col items-center justify-items-center space-y-8">
            <Menu />
            <Pesquisar />
            <Tabela />
            <Footer />
        </div> 
    </div>
  );
}
