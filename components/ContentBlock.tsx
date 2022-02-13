import Image from "next/image";

const ContentBlock = ({ children, img, subtitle, title }) => {
  return (
    <div className={`grid md:grid-cols-2`}>
      <div className="flex flex-col justify-center h-full space-y-12">
        <div>
          <h6>{subtitle}</h6>
          <h2 className="text-dark">{title}</h2>
        </div>
        {children}
      </div>
      <div className="relative flex items-center py-12 mx-auto">
        <div className="absolute w-[20rem] bg-gray-light h-full left-1/2 md:left-0 top-1/2 skew-y-6 -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[28rem] h-[20rem] relative ">
          <Image
            src={img}
            alt={`Proyecto de Grupo Construramex`}
            layout={`fill`}
            objectFit="cover"
            className="transition-transform group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
