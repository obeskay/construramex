import Image from "next/image";
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
            <ContentBlock />
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
