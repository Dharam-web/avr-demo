import { AboutUsPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutUsHome: FC<AboutUsPropsTypes> = ({
  title,
  subtitle,
  desc,
  images,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="md:grid hidden grid-cols-2 gap-6 w-full">
          {images.slice(0, 2).map((image, index) => (
            <div
              className={`w-full card-view-scale aspect-[4/6] relative ${index === 0 ? "" : "lg:mt-12"}`}
              key={index}
            >
              <Image
                src={image}
                alt={title + index}
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            title={title}
            subTitle={subtitle}
            wrapperClassName="lg:max-w-xl"
          />
          <div className="space-y-6 max-w-xl">
            <div className="md:hidden w-full aspect-[4/3] relative">
              <Image
                src={images[2]}
                alt={title}
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
            <p className="lg:text-lg">{desc[0]}</p>
            <div className="md:hidden w-full aspect-[4/3] relative">
              <Image
                src={images[3]}
                alt={title}
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
            <p className="lg:text-lg">{desc[1]}</p>
          </div>
          {link && (
            <Link
              href={link.href}
              className="bg-clr1 text-white px-4 py-3 w-fit rounded-full shadow-inner flex items-center cursor-pointer gap-2 text-lg hover:bg-white hover:text-clr1 transition-all duration-300 ease-in-out border border-clr1"
            >
              {link.label}{" "}
              <span className="">
                <ArrowUpIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUsHome;
