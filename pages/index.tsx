import Image from "next/image";
import Hero from "../components/Hero";
import HighlightsSection from "../components/HighlightsSection";
import Navbar from "../components/Navbar";
import { highlights } from "../helpers/data";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-primary">
        <div className="container py-12 mx-auto space-y-12 text-white">
          <HighlightsSection content={highlights} />
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
