import Image from "next/image";
import Button from "./Button";
import Wave from "./Wave";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-[85vh] [mask-image:url(/masks/heroMask.svg)] [mask-size:300vw] md:[mask-size:105vw] [mask-position:bottom]">
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
      <Wave className="absolute bottom-[5.5%] -translate-x-1/2 w-[300vw] md:w-[105vw] left-[50vw] fill-arena" />
      <Wave className="absolute opacity-25 bottom-[4%] -translate-x-1/2 w-[300vw] md:w-[105vw] left-[50vw] fill-arena blur-lg" />
    </div>
    // <div className="relative">
    //   <div
    //     className={` grid md:grid-cols-2 overflow-hidden [mask-image:url(/masks/heroMask.svg)] [mask-size:300vw] md:[mask-size:105vw] [mask-position:bottom] max-h-[80vh]`}
    //   >
    //     <div className="absolute container w-full z-10 flex items-center h-full text-center -translate-x-1/2 bg-danger/50 md:pb-32 lg:pb-64 left-[50vw] md:text-left">
    //       <h1>
    //         <span className="text-light md:text-arena">CONSTRUYAMOS</span>
    //         <br />
    //         <span className="text-light md:text-dark">JUNTOS EL FUTURO</span>
    //       </h1>
    //     </div>

    //     <div className="relative">
    //       <Image
    //         src={`/projects/project3.jpg`}
    //         alt={`Banner Grupo Construramex`}
    //         layout={`responsive`}
    //         width={`100%`}
    //         height={`100%`}
    //       />
    //     </div>
    //   </div>
    //   <Wave className="absolute bottom-[5.5%] -translate-x-1/2 w-[300vw] md:w-[105vw] left-[50vw] fill-arena" />
    //   <Wave className="absolute opacity-25 bottom-[4%] -translate-x-1/2 w-[300vw] md:w-[105vw] left-[50vw] fill-arena blur-lg" />
    // </div>
  );
};

export default Hero;
