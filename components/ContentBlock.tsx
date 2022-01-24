import Image from "next/image";

const ContentBlock = () => {
  return (
    <div className={`grid grid-cols-2 group cursor-pointer`}>
      <div className="flex items-center h-full">
        <h1>Hola</h1>
      </div>
      <div className="relative p-12">
        <div className="absolute w-[20rem] bg-gray-light h-full left-0 top-0 skew-y-6" />
        <div className="w-[28rem] h-[20rem] relative">
          <Image
            src={`/projects/project6.jpg`}
            alt={`Proyecto de Grupo Construramex`}
            layout={`fill`}
            className="transition-transform group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
