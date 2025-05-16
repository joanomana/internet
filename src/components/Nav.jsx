"use client"; 
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import {useRouter} from "next/navigation";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const handleQuizClick = () => {
    router.push("/Quiz");
  }


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 
                bg-black/80 backdrop-blur-md shadow-lg rounded-xl border border-white/20"
    >
      {/* Menú escritorio */}
      <div className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li>
            <a
              href="#inicio"
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              Api
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              Web
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              Protocolos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-cyan-300 transition"
            >
              Créditos
            </a>
          </li>
        </ul>
      </div>

      {/* Menú móvil: botón hamburguesa */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          <TiThMenu />
        </button>
      </div>

      {/* Botón Quiz destacado */}
      <button
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition duration-300 hover:cursor-pointer"
        onClick ={handleQuizClick}
      >
        Quiz
      </button>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 mt-2 bg-black/90 p-4 backdrop-blur-md md:hidden rounded-lg border border-white/10 z-50">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#inicio"
                className="text-white text-lg font-medium hover:text-cyan-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-medium hover:text-cyan-300"
              >
                Api
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-medium hover:text-cyan-300"
              >
                Web
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-medium hover:text-cyan-300"
              >
                Protocolos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-medium hover:text-cyan-300"
              >
                Créditos
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
