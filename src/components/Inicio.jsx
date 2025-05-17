"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, History } from "lucide-react";

const steps = [
  {
    title: "Conexión al ISP",
    description:
      "Tu dispositivo se conecta a Internet a través de un proveedor de servicios (ISP), estableciendo una puerta de entrada hacia la red global.",
    color: "bg-blue-500",
    image: `https://kinsta.com/wp-content/uploads/2022/02/Broadband-Cable-Providers.png`,
  },
  {
    title: "Solicitud de Datos",
    description:
      "El navegador envía una solicitud al servidor donde se encuentra la información de la página web que deseas ver.",
    color: "bg-green-500",
    image: `https://www.azion.com/assets/blog/images/uploads/http-caching-diagram-es.png`,
  },
  {
    title: "Transmisión de Paquetes",
    description:
      'La información viaja en pequeños fragmentos llamados "paquetes", los cuales se envían por distintas rutas en la red.',
    color: "bg-yellow-500",
    image: `https://www.portaleso.com/web_redes/imagenes/transmision_de_datos.jpg`,
  },
  {
    title: "Reensamblado de Paquetes",
    description:
      "Los paquetes se reensamblan al llegar a tu dispositivo para mostrar el contenido solicitado correctamente.",
    color: "bg-orange-500",
    image: `https://www.juniper.net/documentation/us/en/software/junos/subscriber-mgmt-access/images/g301143.png`,
  },
  {
    title: "Visualización en el Navegador",
    description:
      "Finalmente, el navegador muestra el contenido de la página web en tu pantalla.",
    color: "bg-red-500",
    image: `https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/9/c/csm_ES-browser-work_d3fa68f05e.webp`,
  },
];

export default function Inicio() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="max-w-[1440px] mx-auto px-4 space-y-6 pt-25" id="inicio">
      {/* INTRODUCCIÓN */}
      <div
        className="flex flex-col space-y-12 text-lg text-gray-800 "
        
      >
        {/* ¿Qué es Internet? */}
        <motion.section
          id="que-es"
          className="bg-white/85 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-blue-600 text-5xl">
            <Globe />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-3 text-gray-800">
              ¿Qué es Internet?
            </h2>
            <p className="text-gray-600 leading-7">
              Internet es una red global de computadoras y dispositivos
              conectados entre sí que permite compartir información y
              comunicarse desde cualquier lugar del mundo. Funciona como una
              gran autopista de datos, donde millones de dispositivos pueden
              intercambiar mensajes, archivos, imágenes, videos y mucho más.
            </p>
          </div>
        </motion.section>

        {/* Historia de Internet */}
        <motion.section
          id="historia"
          className="bg-white/85 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-green-600 text-5xl">
            <History />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Historia de Internet
            </h2>
            <p className="text-gray-600 leading-7">
              Internet comenzó como un proyecto militar en Estados Unidos
              llamado ARPANET en la década de 1960. Su objetivo inicial era
              mantener la comunicación entre universidades y centros de
              investigación incluso si una parte de la red era destruida. Con el
              tiempo, esta red fue evolucionando hasta convertirse en una
              herramienta de comunicación global.
            </p>
          </div>
        </motion.section>
      </div>

      {/* ¿Cómo funciona Internet? */}
      <section
        id="como-funciona"
        className="bg-white/85 p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ¿Cómo funciona Internet?
        </h2>

        {/* Pasos del proceso */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 p-8 max-w-6xl mx-auto px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-2 md:p-3 rounded-xl text-white text-center text-sm md:text-base font-semibold cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ${step.color}`}
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xl md:text-2xl mb-1">🔎</div>
              <h3 className="text-sm md:text-base">{step.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Detalle del paso seleccionado */}
        {activeStep !== null && (
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-lg "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-md"
              loading="lazy"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-3 text-gray-800">
                {steps[activeStep].title}
              </h4>
              <p className="text-gray-600 leading-7 text-lg">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
