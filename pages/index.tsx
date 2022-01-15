import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-primary">
        <div className="container py-12 mx-auto space-y-12 text-white">
          <h2 className="text-3xl font-bold">Experiencia</h2>
          <div className="space-y-4">
            <p className="text-3xl font-bold">11 años</p>
            <p>Creando soluciones en los sectores público y privado</p>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">+12 proyectos</p>
            <p>Trabajados en armonía con nuestros clientes</p>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">+230,000 horas</p>
            <p>Dedicadas a realizar obras de calidad</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container py-12 mx-auto space-y-12">
          <h2 className="text-3xl font-bold">Servicios</h2>
          <div className="space-x-6 snap-x">
            <div className="inline-block snap-center">
              <div className="flex px-12 py-4 uppercase bg-gray-light">
                Obra Nueva
              </div>
            </div>
            <div className="inline-block snap-center">
              <div className="flex px-12 py-4 uppercase bg-gray-light">
                Remodelación y ampliación
              </div>
            </div>
            <div className="inline-block snap-center">
              <div className="flex px-12 py-4 uppercase bg-gray-light">
                Conducción de agua potable
              </div>
            </div>
            <div className="inline-block snap-center">
              <div className="flex px-12 py-4 uppercase bg-gray-light">
                Diseño de instalación
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/heros/proyectoDefault.jpeg"
          height="587"
          width="1600"
          alt="Proyecto"
        />
      </section>
    </>
  );
};

export default index;
