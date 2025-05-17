"use client";
import { useRef, useState, useEffect } from "react";

export default function Api() {
  const meseroRef = useRef(null);
  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);
  const [paso, setPaso] = useState(1);
  const [botonTexto, setBotonTexto] = useState("Llamar Mesero -> Preparar API");
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);
  const [imgMesero, setImgMesero] = useState("Api/Mesero-SinPedido.png");

  const manejarClick = () => {
    setBotonDeshabilitado(true);
    const mesero = meseroRef.current;

  if (paso === 1) {
    mesero.className = "h-24 absolute left-[43%]";
    setImgMesero("Api/Mesero-CaminandoConPedido.png");
    mesero.classList.add("mover-mesero");
    setBotonTexto("Mesero va a la mesa -> (Cliente)");
  } else if (paso === 2) {
    mesero.className = "h-24 absolute left-[43%]";
    setImgMesero("Api/Mesero-ConPedido.png");
    mesero.classList.add("ir-a-cocina");
    tituloRef.current.textContent = "El mesero lleva el pedido a la cocina";
    parrafoRef.current.textContent = "Ahora el mesero (API) está transmitiendo la solicitud al servidor (cocina).";
    setBotonTexto("Mesero va a la cocina.... -> (Servidor)");
  }
};

  useEffect(() => {
    const mesero = meseroRef.current;

    const handleAnimationEnd = (event) => {
      if (event.animationName === "moverMesero" && paso === 1) {
        tituloRef.current.textContent = "Hacer Pedido -> Metodo HTTP";
        parrafoRef.current.textContent = `El mesero (la API) ya recibió el pedido del cliente. El tipo de pedido puede representar el método HTTP:
        GET: “Quiero ver el menú”
        POST: “Hacer un nuevo pedido”
        PUT: “Reemplazar pedido”
        PATCH: “Modificar parte del pedido”
        DELETE: “Cancelar pedido”`;

        setBotonTexto("Hacer Pedido -> Metodo HTTP");
        setBotonDeshabilitado(false);
        setImgMesero("Api/Mesero-SinPedido.png");
        setPaso(2);
      } else if (event.animationName === "irACocina" && paso === 2) {
        setImgMesero("Api/Mesero-SinPedido.png");
        tituloRef.current.textContent = "Esperando respuesta del servidor";
        parrafoRef.current.textContent = "El mesero llegó a la cocina con el pedido. Ahora el servidor está preparando la respuesta.";
        setBotonTexto("Esperando plato de la cocina... -> (Datos)");

        setTimeout(() => {
          setImgMesero("Api/Mesero-CaminandoConPedido.png");
          mesero.classList.remove("ir-a-cocina");
          mesero.classList.add("volver-cliente");

          tituloRef.current.textContent = "El mesero entrega el pedido";
          parrafoRef.current.textContent = "La cocina ha preparado el plato (datos) y el mesero (API) va de regreso.";
          setBotonTexto("Mesero lleva plato al cliente -> Entrega de datos a cliente");

          mesero.addEventListener("animationend", function volverAlCentro() {
            mesero.removeEventListener("animationend", volverAlCentro);

            setTimeout(() => {
              setImgMesero("Api/Mesero-ConPedido.png");
              mesero.classList.remove("volver-cliente");
              mesero.classList.add("volver-al-centro");

              mesero.addEventListener("animationend", function reiniciarTodo() {
                mesero.removeEventListener("animationend", reiniciarTodo);
                setImgMesero("Api/Mesero-SinPedido.png");
                tituloRef.current.textContent = "Analogia de una API -> Mesero";
                parrafoRef.current.textContent = "Una API es como un mesero en un restaurante; tú haces un pedido, el mesero lo lleva a la cocina y regresa con la comida.";
                setBotonTexto("Llamar Mesero -> Preparar API");
                setBotonDeshabilitado(false);
                setPaso(1);
              });
            }, 3000);
          });
        }, 5000);
      } else if (event.animationName === "volverCliente") {
        setImgMesero("Api/Mesero-SinPedido.png");
        tituloRef.current.textContent = "El mesero entrega la respuesta";
        parrafoRef.current.textContent = "El mesero (la API) regresa con la comida (respuesta del servidor) y la entrega al cliente.";
        setBotonTexto("Solicitud Completada");
        setBotonDeshabilitado(true);
        setPaso(1);
      }
    };
    mesero.addEventListener("animationend", handleAnimationEnd);
    return () => mesero.removeEventListener("animationend", handleAnimationEnd);
  }, [paso]);

  return (
    <section className="max-w-[1440px] mx-auto px-4 space-y-6" id="Api">
      {/* Encabezado */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">¿Qué es Una API?</h1>
        <p className="text-gray-600 text-lg">
          Una API es un conjunto de definiciones y protocolos que permiten a dos aplicaciones comunicarse entre sí.
        </p>
      </div>

      {/* Descripción dinámica */}
      <div className="bg-blue-600 p-6 rounded-xl shadow-md text-white text-center space-y-2">
        <h2 ref={tituloRef} className="text-2xl font-semibold">Analogia de una API → Mesero</h2>
        <p ref={parrafoRef} className="text-lg leading-relaxed">
          Una API es como un mesero en un restaurante; tú haces un pedido, el mesero lo lleva a la cocina y luego te trae la comida.
        </p>
      </div>

      {/* Botón de acción */}
      <div className="flex justify-center">
        <button
          onClick={manejarClick}
          disabled={botonDeshabilitado}
          className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white py-3 px-6 rounded-lg font-semibold shadow-md disabled:opacity-50"
        >
          {botonTexto}
        </button>
      </div>

      {/* Animación visual */}
      <div className="bg-green-500 p-6 rounded-xl shadow-md flex justify-between items-center relative overflow-hidden">
        <img src="Api/comensal.webp" alt="Cliente" className="h-40 object-contain" />
        <div className="w-1/3 flex justify-center items-center relative">
          <img
            ref={meseroRef}
            src={imgMesero}
            alt="Mesero"
            className="h-24 absolute left-[43%]"
          />
        </div>
        <img src="Api/cocina.jpg" alt="Cocina" className="h-40 object-contain" />
      </div>
    </section>
  );
}