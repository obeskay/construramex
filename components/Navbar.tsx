import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <Image
          src={`/logos/grupo-construramex-horizontal.svg`}
          width={231}
          height={61}
          alt={`Grupo Construramex Logo`}
        />
      </div>
    </div>
  );
};

export default Navbar;
