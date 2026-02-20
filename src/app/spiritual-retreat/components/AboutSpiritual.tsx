import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface AboutSpiritualPropsTypes {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  link: {
    href: string;
    label: string;
  };
}
const AboutSpiritual: FC<AboutSpiritualPropsTypes> = ({
  title,
  subTitle,
  description,
  src,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="spiritual-about">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        <div className="w-full relative md:aspect-[4/3] aspect-[4/4] md:col-span-3">
          <Image
            src={src}
            alt={title}
            fill
            sizes="100%"
            className="md:object-contain"
          />
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8 md:col-span-4">
          <SectionHeading title={title} subTitle={subTitle} smTextCenter />
          <p className="text-Light md:text-lg max-md:text-center mb-4">{description}</p>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:py-3 py-4 bg-clr1 text-white rounded-full transition flex items-center justify-center md:w-fit gap-2"
          >
            {link.label}
            {/* <span aria-label="arrow-up">
              <DownloadBrochure />
            </span> */}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSpiritual;


export const DownloadBrochure = () => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.875L7 11.875L8.4 10.425L11 13.025V4.875H13V13.025L15.6 10.425L17 11.875L12 16.875ZM6 20.875C5.45 20.875 4.97933 20.6793 4.588 20.288C4.19667 19.8967 4.00067 19.4257 4 18.875V15.875H6V18.875H18V15.875H20V18.875C20 19.425 19.8043 19.896 19.413 20.288C19.0217 20.68 18.5507 20.8757 18 20.875H6Z"
      fill="currentColor"
    />
  </svg>

)