import { OurCulinaryOfferingsPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { OurCulinaryOfferingsSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Link from "next/link";
import { FC } from "react";

const OurCulinaryOfferings: FC<OurCulinaryOfferingsPropsTypes> = ({
  title,
  subTitle,
  cards,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-clr2">
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <OurCulinaryOfferingsSlider cards={cards} />
        <Link
          href={link.href}
          className="text-clr1 bg-transparent border border-clr1 px-6 py-3 rounded-full hover:bg-clr1 hover:text-white transition-all duration-300 ease-in-out w-fit self-center flex items-center justify-center md:text-lg"
        >
          {link.label}
          <span className="ml-2">
            <ArrowUpIcon />
          </span>
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default OurCulinaryOfferings;
