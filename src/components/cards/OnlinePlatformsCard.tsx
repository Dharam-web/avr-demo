import { OnlinePlatformsPropsTypes } from "@/@types/types";
import { FC } from "react";

const OnlinePlatformsCard: FC<OnlinePlatformsPropsTypes["cards"][0]> = ({
  icon,
  ratings,
  partnerName,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-6 p-6  rounded-lg 
              transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
    >
      <div>{icon}</div>
      <div className="text-lg flex flex-col font-medium  text-clr uppercase tracking-wide">
        <span className="">{ratings}</span>
        <span className="font-plus text-xl">{partnerName}</span>
      </div>
    </div>
  );
};

export default OnlinePlatformsCard;
