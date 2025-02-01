import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function page2() {
  return (
    <div className="flex flex-col  items-center justify-items-center min-h-screen p-2 space-x-2 font-[family-name:var(--font-geist-sans)]">
        <Header  />
        <main className="p-4">
            <h2>Bem-vindo à nossa aplicação</h2>
            <p>Isso é um exemplo de componentização com Next.Js</p>
        </main>
        <Footer />
    </div>
  );
}
