import { AboutWeddingPropsTypes } from "@/@types/types";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutWedding: FC<AboutWeddingPropsTypes> = ({
  src,
  title,
  subTitle,
  description,
  links,
}) => {
  return (
    <Section className="about-wedding">
      <div className="max-w-[1450px] max-lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="relative w-full aspect-[4/4.1] md:col-span-3">
            <Image
              src={src}
              alt={title}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <SectionHeading
              title={title}
              subTitle={subTitle}
              titleClassName="underline-none"
              textCenter
            />
            <p className="md:text-lg text-center text-Light">{description}</p>
            <Link
              href={links[0].href}
              className="px-6 py-3 text-Light text-lg w-fit mx-auto"
            >
              {links[0].label}
            </Link>
            <Link
              href={links[1].href}
              className="px-6 py-3 text-white bg-clr1 flex items-center gap-2 justify-center rounded-full text-lg w-fit mx-auto hover:bg-clr1/90 transition-all duration-300 ease-in-out"
            >
              {links[1].label}{" "}
              <span>
                <ArrowUpIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutWedding;
