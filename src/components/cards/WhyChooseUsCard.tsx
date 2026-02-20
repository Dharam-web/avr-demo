import { WhyChooseUsPropsTypes } from "@/@types/types";
import { FC } from "react";

const WhyChooseUsCard: FC<WhyChooseUsPropsTypes["cards"][0]> = ({ icon, title }) => {
  return (
    <div className="flex card-view-scale flex-col gap-4 h-full box-shadow items-center justify-center md:py-10 md:px-6 py-8 px-2 bg-clr2 border border-clr">
      <div className="">{icon}</div>
      <h3 className="mt-2 text-clr text-2xl font-plus text-center capitalize">{title}</h3>
    </div>
  );
};

export default WhyChooseUsCard;
