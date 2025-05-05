export default function Inicio() {
    return (
        <div className="flex flex-col p-8 space-y-12 text-lg text-gray-800">
            
            <section id="que-es">
            <h2 className="text-3xl font-bold mb-2 text-blue-700">¿Qué es Internet?</h2>
            <p>
                Internet es una red global de computadoras y dispositivos conectados entre sí que permite compartir información
                y comunicarse desde cualquier lugar del mundo. Funciona como una gran autopista de datos, donde millones de dispositivos
                pueden intercambiar mensajes, archivos, imágenes, videos y mucho más.
            </p>
            </section>
    
            <section id="historia">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Historia de Internet</h2>
            <p>
                Internet comenzó como un proyecto militar en Estados Unidos llamado ARPANET en la década de 1960. Su objetivo inicial
                era mantener la comunicación entre universidades y centros de investigación incluso si una parte de la red era destruida.
                Con el tiempo, esta red fue evolucionando hasta convertirse en una herramienta de comunicación global.
            </p>
            </section>
    
            <section id="primeros-usos">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Primeros usos del Internet</h2>
            <p>
                En sus inicios, Internet se utilizaba principalmente para fines académicos y científicos. Las universidades y gobiernos
                lo usaban para enviar correos electrónicos, compartir documentos y acceder a bases de datos remotas. No fue hasta los años 90
                cuando comenzó a popularizarse con la llegada de la World Wide Web y los navegadores web.
            </p>
            </section>
    
            <section id="como-funciona">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">¿Cómo funciona Internet?</h2>
            <p>
                Internet funciona gracias a una serie de protocolos que permiten la transmisión de datos. Cuando accedes a un sitio web,
                tu dispositivo se conecta a un servidor utilizando protocolos como TCP/IP y HTTP. Los datos se dividen en paquetes que viajan
                a través de diferentes rutas y se reensamblan al llegar a su destino, mostrando el contenido que solicitaste.
            </p>
            </section>
    
        </div>
    );
}
