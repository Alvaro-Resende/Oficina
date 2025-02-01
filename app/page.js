import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-items-center min-h-screen p-2 mt-2 space-x-2 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-[40px] font-semibold mb-5 font-style: italic">Aprendizagem em subir arquivos para GitHub</h1>
      <Image
        src="/imagens/17119660-logotipo-do-github-icone-do-git-hub-com-texto-em-fundo-branco-e-preto-gratis-vetor.jpg"
        alt="Git Imagem"
        width="600"
        height="500"
        className="border border-white rounded"
      />
      <h1 className="text-[24px] font-style: italic mt-5">Lavras - 22/01/2025</h1>
      <h2 className="text-[14px] font-style: italic mb-5">Alvaro</h2>

      <div className="border border-white rounded flex flex-col justify-center items-center p-5 w-[600px]">
        <h1 className="text-[20px] font-semibold mb-1 font-style: italic">Teste Simples para Navegar entre diferentes Páginas</h1>
        <Link href="/pagina2" className="border-4 border-black rounded w-[190px] h-[60px] bg-white text-black hover:bg-gray-700 hover:text-white flex justify-center items-center text-center">Acessar a Página Principal</Link>
      </div>

    </div>
  );
}
