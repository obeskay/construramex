import Image from "next/image";
import Button from "./Button";
import Wave from "./Wave";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-[80vh] md:h-[65vh] [mask-image:url(/masks/heroMask.svg)] [mask-size:200vw] md:[mask-size:105vw] [mask-position:bottom]">
        <div className="absolute right-0 w-full md:max-w-[50vw] h-full -z-10">
          <Image
            src={`/projects/project5.jpg`}
            alt={`Banner Grupo Construramex`}
            layout={`fill`}
            objectFit="cover"
          />
        </div>
        <div className="container flex flex-col items-center md:items-start justify-center h-[80%] mx-auto space-y-12">
          <h1 className="text-[7.5vw] md:text-[3.5vw] leading-[1.1] text-light text-center md:text-left uppercase">
            <span className=" md:text-arena">Construyamos</span>
            <br />
            <span className=" md:text-dark">juntos el futuro</span>
          </h1>
          <Button>Ver más</Button>
        </div>
      </div>
      <Wave className="absolute bottom-[4%] -translate-x-1/2 w-[200vw] md:w-[105vw] left-[50vw] fill-arena" />
      <Wave className="absolute opacity-25 bottom-[4%] -translate-x-1/2 w-[200vw] md:w-[105vw] left-[50vw] fill-arena blur-lg" />
    </div>
  );
};

export default Hero;
