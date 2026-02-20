import { WhyChooseUsPropsTypes } from "@/@types/types";
import { WhyChooseUsCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { WhyChooseUsSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const WhyChooseUs: FC<WhyChooseUsPropsTypes> = ({
  title,
  description,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 items-center">
        <div className="md:col-span-1 md:space-y-4 space-y-6">
          <SectionHeading title={title} subTitle={subTitle} smTextCenter />
          <div className="md:hidden">
            <WhyChooseUsSlider cards={cards} />
          </div>
          <p className="text-[#262626] md:text-lg">{description}</p>
        </div>
        <div className="md:col-span-3 hidden md:grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              className={`bounce animate transition-all delay-${index + 1}`}
              key={index}
            >
              <WhyChooseUsCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyChooseUs;
