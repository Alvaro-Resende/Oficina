import Image from "next/image";
import Link from "next/link";

export default function page1() {
  return (
    <div className="flex flex-col  items-center justify-items-center min-h-screen p-2 mt-4 space-x-2 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-[40px] font-semibold mb-5 font-style: italic text-blue-700">いらっしゃいませ</h1>

     <div className="flex justify-center items-center space-x-3 mb-5">
        <Image
          src="/imagens/Super Tengan.gif"
          alt="Gif"
          width="1"
          height="1"
          className="border border-white object-cover w-[400px] h-[450px]"
        />

        <Image
          src="/imagens/Dio.gif"
          alt="Gif"
          width="1"
          height="1"
          className="border border-white object-cover w-[400px] h-[450px]"
        />

        <Image
          src="/imagens/solo.gif"
          alt="Gif"
          width="1"
          height="1"
          className="border border-white object-cover w-[400px] h-[450px]"
        />


    </div>   
      <Link href={"/"} className="border-4 border-black  w-[190px] h-[60px] bg-blue-700 text-white hover:bg-[#FF0000] hover:text-white flex justify-center items-center">Voltar</Link>

    </div>
  );
}
