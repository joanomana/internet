'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const topics = [
    {
        title: "TCP/IP",
        description:
        "TCP/IP es el conjunto de protocolos fundamentales que permite la comunicación entre dispositivos en redes, incluyendo Internet. TCP garantiza que los datos lleguen completos y en orden, mientras que IP se encarga de direccionarlos al destino correcto.",
        image:
        "https://www.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/What%20is%20TCPIP%20(Signal)/TCP-IP.png?width=1320&name=TCP-IP.png",
        color: "bg-blue-500",
    },
    {
        title: "HTTP",
        description:
        "HTTP es un protocolo que permite la transferencia de información en la web. Es utilizado por los navegadores para solicitar y recibir contenido desde los servidores web, aunque no cifra los datos transmitidos.",
        image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240529150129/HTTP-.gif",
        color: "bg-green-500",
    },
    {
        title: "HTTPS",
        description:
        "HTTPS es la versión segura de HTTP. Utiliza cifrado (SSL/TLS) para proteger la comunicación entre el navegador del usuario y el servidor web, garantizando confidencialidad e integridad de los datos.",
        image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240111152750/HTTPS-gif.gif",
        color: "bg-yellow-500",
    },
];


export default function Protocolos() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    return(
        <div className="max-w-[1440px] mx-auto px-4 space-y-6 " id="Protocolos">
            <motion.section
                className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-purple-600 text-5xl">
                <Globe />
                </div>
                <div>
                <h2 className="text-4xl font-bold mb-3 text-gray-800">Protocolos</h2>
                <p className="text-gray-600 leading-7 text-lg">
                    Los protocolos de red son conjuntos de reglas y estándares que permiten la comunicación entre dispositivos en una red. Actúan como el idioma común que los computadores y servidores utilizan para intercambiar datos de manera precisa, ordenada y segura.
                </p>
                </div>
            </motion.section>

            {/* Tarjetas Temáticas */}
            <section className="bg-gradient-to-b from-gray-100 to-white p-8 rounded-xl shadow-md">
                <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Protocolos de la Web
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 px-4 justify-center items-center">
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
    )
}