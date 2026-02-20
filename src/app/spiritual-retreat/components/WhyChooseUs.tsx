import { WhyChooseSpiritualPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const WhyChooseUs: FC<WhyChooseSpiritualPropsTypes> = ({
  title,
  subTitle,
  description,
  src,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            wrapperClassName="gap-2"
          />
          <p className="text-Light md:text-lg">{description}</p>
          <div className="w-full relative md:aspect-[4/2.5] md:hidden aspect-[4/3]">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {cards.map((card, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 aspect-square flex items-center justify-center bg-clr1/20 rounded-full flex-shrink-0">
                <div className="w-12 relative aspect-square flex-shrink-0">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-plus font-semibold text-clr">
                  {card.title}
                </h3>
                <p className="text-Light md:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full md:mt-12">
          <div className="w-full relative md:aspect-[4/2.5] max-md:hidden aspect-[4/3]">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyChooseUs;
