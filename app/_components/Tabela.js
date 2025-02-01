export default function Tabela() {
    return (
        <table className="table-auto w-[800px] overflow-hidden rounded-lg">
            <thead class="bg-gray-300 text-black font-semibold ">
                <tr>
                    <th className="w-[160px] h-[30px]  text-start p-2 ">Nome</th>
                    <th className="w-[240px] h-[30px]  text-start p-2">Telefone</th>
                    <th className="w-[200px] h-[30px]  text-start p-2 ">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="bg-gray-300 text-black border-b-2 border-gray-400 p-2">John Doe</td>
                    <td className="bg-gray-300 text-black border-b-2 border-gray-400  p-2">(555) 123-4567</td>
                    <td className="bg-gray-300 text-black border-b-2 border-gray-400  p-2 ">john.doe@example.com</td>
                </tr>

                <tr>
                    <td className=" bg-white text-black border-b-2 border-gray-400 p-2">Jane Smith</td>
                    <td className="bg-white text-black border-b-2 border-gray-400  p-2">(555) 987-6543</td>
                    <td className="bg-white text-black border-b-2 border-gray-400  p-2">jane.smith@example.com</td>
                </tr>
                
                <tr>
                    <td className=" bg-gray-300 text-black border-b-2 border-gray-400 p-2">Bob Johnson</td>
                    <td className="bg-gray-300 text-black border-b-2 border-gray-400  p-2">(555) 246-8135</td>
                    <td className="bg-gray-300 text-black border-b-2 border-gray-400  p-2">bob.johnson@example.com</td>
                </tr>

                <tr>
                    <td className=" bg-white text-black border-b-2 border-gray-400 p-2">Alice Brown</td>
                    <td className="bg-white text-black border-b-2 border-gray-400  p-2">(555) 369-2580</td>
                    <td className="bg-white text-black border-b-2 border-gray-400  p-2">alice.brow@example.com</td>
                </tr>

                <tr>
                    <td className=" bg-gray-300 text-black   p-2 rounded-bl-lg">Charlie Davis</td>
                    <td className="bg-gray-300 text-black   p-2">(555) 369-2580</td>
                    <td className="bg-gray-300 text-black    p-2 rounded-br-lg">charlie.davis@example.com</td>
                </tr>

               
            </tbody>
        </table>
    );
}