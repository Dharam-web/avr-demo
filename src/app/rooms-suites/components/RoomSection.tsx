import { RoomsAndSuitesPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { RoomAndSuitesSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const RoomSection: FC<RoomsAndSuitesPropsTypes> = ({
  title,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-clr2 box-shadow">
      <div className="flex flex-col md:gap-14 gap-8" >
        <SectionHeading subTitle={title} textCenter />
        {description && (
          <p className="text-Light md:text-lg text-center">{description}</p>
        )}
        <RoomAndSuitesSlider cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default RoomSection;
