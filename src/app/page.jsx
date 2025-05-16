import Nav from "@/components/Nav";
import Inicio from "@/components/Inicio";
import Web from "@/components/Web";



export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full"
      style={{
        backgroundImage: "url('/internet-hero.jpg')", 
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen">
        {/* Contenido encima del fondo */}
        <Nav />
        <Inicio />
        <Web />
      </div>
    </div>
  );
}