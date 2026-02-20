import { OurPackagesPropsTypes } from "@/@types/types";
import { OurPackagesCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { FC } from "react";

const OurPackages: FC<OurPackagesPropsTypes> = ({
  title,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="our-packages">
      <span className="span"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <h2 className="text-3xl font-plus font-semibold text-white">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
      <div className="w-full flex flex-col gap-4">
        {cards.map((card, index) => (
          <OurPackagesCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default OurPackages;
