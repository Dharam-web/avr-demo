import { ProgramsToRestorePropsTypes } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";

const ProgramsToRestoreCard: FC<ProgramsToRestorePropsTypes["cards"][0]> = ({
  title,
  icon,
  description,
  src,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="w-full relative md:aspect-[4/2.5] aspect-square">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="100vw"
        />
      </div>
      <div className="p-6 space-y-6 min-h-[20rem]">
        <div className="flex items-center gap-4 justify-between">
          <h3 className="md:text-[2rem] text-2xl text-clr font-plus">{title}</h3>
          <div className="w-[58px] aspect-square flex items-center justify-center bg-clr rounded-full flex-shrink-0">
            <div className="w-[40px] relative aspect-square flex-shrink-0">
              <Image
                src={icon}
                alt={title}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <p className="md:text-lg text-Light">{description}</p>
      </div>
    </div>
  );
};

export default ProgramsToRestoreCard;
