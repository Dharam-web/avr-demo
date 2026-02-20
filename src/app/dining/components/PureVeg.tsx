import { pureVegSectionDataPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { PureVegSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const PureVeg: FC<pureVegSectionDataPropsTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-14 w-full">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          textCenter
          wrapperClassName="mx-auto max-w-2xl gap-4"
        />
        <PureVegSlider cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default PureVeg;
