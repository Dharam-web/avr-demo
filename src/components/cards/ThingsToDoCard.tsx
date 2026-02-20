import Image from "next/image";
import { FC } from "react";

interface ThingsToDoCardPropsTypes {
  title: string;
  description: string;
  src: string;
}

const ThingsToDoCard: FC<ThingsToDoCardPropsTypes> = ({
  title,
  description,
  src,
}) => {
  return (
    <div className="w-full card-view-scale box-shadow">
      <div className="w-full relative md:aspect-[4/3] aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 py-6">
        <h2 className="text-[2rem] text-clr font-plus">{title}</h2>
        <p className="md:text-lg text-Light">{description}</p>
      </div>
    </div>
  );
};

export default ThingsToDoCard;
