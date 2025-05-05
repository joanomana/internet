export default function Nav() {
    return (
        <div className="flex  justify-between items-center bg-blue-400 p-4">
            <h1 className="text-white font-bold text-4xl">Como funciona internet?</h1>
            <div className="mt-4 text-3xl">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#inicio" className="text-white hover:text-gray-400">Inicio</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">Api</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">Web</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">Protocolos</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">Creditos</a>
                    </li>
                </ul>
                
            </div>
            <button className="bg-orange-400 rounded-lg shadow px-3 py-2 hover:cursor-pointer text-white text-3xl font-bold">
                Quiz
            </button>

        </div>
    )
}