import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";
import ContentBlock from "../components/ContentBlock";
import Hero from "../components/Hero";
import HighlightsSection from "../components/HighlightsSection";
import Navbar from "../components/Navbar";
import { highlights } from "../helpers/data";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative space-y-12">
        <section className="bg-primary">
          <div className="container py-12 mx-auto space-y-12 text-white">
            <HighlightsSection content={highlights} />
          </div>
        </section>
        <section className="bg-white">
          <div className="container py-12 mx-auto space-y-12">
            <ContentBlock
              img={`/projects/project4.jpg`}
              subtitle={`Lo que haacemos`}
              title={`Nuestros servicios`}
            >
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    title: `CONSTRUCCIÓN`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project4.jpg`,
                  },
                  {
                    title: `DEMOLICIÓN`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project2.jpg`,
                  },
                  {
                    title: `SUPERVISIÓN Y CONTROL DE OBRA`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project.jpg`,
                  },
                  {
                    title: `ACABADOS`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project3.jpg`,
                  },
                  {
                    title: `ESTRUCTURAS`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project4.jpg`,
                  },
                  {
                    title: `REMODELACIÓN`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project5.jpg`,
                  },
                  {
                    title: `PLANIFICACIÓN DE OBRA`,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                    img: `/projects/project6.jpg`,
                  },
                ].map((_, i) => (
                  <motion.div key={_.title} className="flex">
                    <Button variant={`outline-gray-dark`}>{_.title}</Button>
                  </motion.div>
                ))}
              </div>
            </ContentBlock>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
function setCursorHover() {}
