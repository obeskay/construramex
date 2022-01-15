import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src={`/heros/default.jpeg`}
        layout="responsive"
        width={1600}
        height={538}
        alt={`Banner Grupo Construramex`}
      />
    </div>
  );
};

export default Hero;
