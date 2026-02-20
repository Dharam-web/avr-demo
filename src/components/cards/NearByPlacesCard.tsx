import { NearByPlacesSliderPropsTypes } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";

const NearByPlacesCard: FC<NearByPlacesSliderPropsTypes["cards"][0]> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 box-shadow bg-clr2">
      <div className="relative w-full aspect-[4/4]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 pb-6  h-full">
        <h2 className="text-[2rem] text-clr font-plus text-center">
          {title}
        </h2>
        <p className="md:text-lg text-Light text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NearByPlacesCard;
