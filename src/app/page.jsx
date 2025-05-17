import Nav from "@/components/Nav";
import Inicio from "@/components/Inicio";
import Web from "@/components/Web";
import Api from "@/components/Api";
import Protocolos from "@/components/Protocolos";



export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full"
      style={{
        backgroundImage: "url('/internet-hero.jpg')", 
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-opacity-50 gap-10 pb-10">
        <Nav />
        <Inicio />
        <Api />
        <Web />
        <Protocolos/>
        

      </div>
    </div>
  );
}