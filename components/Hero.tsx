import Image from "next/image";
import Wave from "./Wave";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className={`grid grid-cols-2 overflow-hidden [mask-image:url(/masks/heroMask.svg)] [mask-size:100vw] [mask-position:bottom]`}
      >
        <div className="flex items-center h-full p-24 ">
          <h1 className="text-3xl font-bold">
            <span className="text-arena">CONSTRUYAMOS</span>
            <br />
            <span className="text-dark">JUNTOS EL FUTURO</span>
          </h1>
        </div>
        <div>
          <Image
            src={`/heros/default.jpg`}
            layout="responsive"
            width={1920}
            height={1440}
            alt={`Banner Grupo Construramex`}
          />
        </div>
      </div>
      <Wave className="absolute bottom-0 -translate-x-1/2 w-[100vw] left-[50vw] fill-arena" />
      <Wave className="absolute opacity-25 -bottom-4 -translate-x-1/2 w-[100vw] left-[50vw] fill-arena blur-lg" />
    </div>
  );
};

export default Hero;
