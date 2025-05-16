"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const topics = [
  {
    title: "¿Qué es la Web?",
    description:
      "La Web (World Wide Web) es un sistema que permite acceder a documentos y recursos interconectados mediante navegadores y protocolos como HTTP.",
    image:
      "https://disenowebakus.net/imagenes/articulos/web.jpg",
    color: "bg-blue-500",
  },
  {
    title: "Cliente y Servidor",
    description:
      "El navegador (cliente) solicita información al servidor, el cual responde con los datos necesarios para mostrar una página web.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Cliente-Servidor.png",
    color: "bg-green-500",
  },
  {
    title: "HTML, CSS y JS",
    description:
      "HTML estructura el contenido, CSS le da estilo y JavaScript lo hace interactivo. Estos lenguajes permiten crear páginas web funcionales y atractivas.",
    image:
      "https://geoinnova.org/wp-content/uploads/2021/08/logos.png",
    color: "bg-yellow-500",
  },

];

export default function Web() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="max-w-[1440px] mx-auto px-4 space-y-6 pt-20" id="web">
      {/* Encabezado */}
      <motion.section
        className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-purple-600 text-5xl">
          <Globe />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-3 text-gray-800">La Web</h2>
          <p className="text-gray-600 leading-7 text-lg">
            La Web es una parte fundamental de Internet que usamos a diario para acceder a información mediante navegadores, utilizando tecnologías como HTML, CSS, JavaScript y protocolos como HTTP.
          </p>
        </div>
      </motion.section>

      {/* Tarjetas Temáticas */}
      <section className="bg-gradient-to-b from-gray-100 to-white p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ¿Cómo funciona la Web?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-4">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className={`p-3 rounded-xl text-white text-center text-sm md:text-base font-semibold cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ${topic.color}`}
              onClick={() => setSelectedTopic(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xl md:text-2xl mb-1">🌐</div>
              <h4>{topic.title}</h4>
            </motion.div>
          ))}
        </div>

        {selectedTopic !== null && (
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={topics[selectedTopic].image}
              alt={topics[selectedTopic].title}
              className="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-md"
              loading="lazy"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-3 text-gray-800">
                {topics[selectedTopic].title}
              </h4>
              <p className="text-gray-600 leading-7 text-lg">
                {topics[selectedTopic].description}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
