"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
interface AboutComponentPropsTypes {
  title: string;
  description: string[];
  link: {
    label: string;
    href: string;
  };
  images: string[];
}
const AboutComponent: FC<AboutComponentPropsTypes> = ({
  title,
  description,
  link,
  images,
}) => {
  return (
    <SectionWithContainer>
      <div id="about-us" className="flex flex-col md:gap-12 gap-4 w-full">
        <div>
          <h2 className="md:text-[2.5rem] font-bold text-clr font-plus text-2xl text-center">
            {title}
          </h2>
        </div>
        {/* slider */}
        <div className="md:hidden">
          <SwiperCarousel
            slidesPerView={1}
            spaceBetween={20}
            data={images}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="!p-2"
            renderSlide={(img) => (
              <div className="w-full relative aspect-[4/3]">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="100%"
                  className="w-full object-cover"
                />
              </div>
            )}
          />
        </div>
        <p className="md:text-lg text-base text-center md:mt-2">
          {description[0]}
        </p>
        <div className="lg:grid hidden grid-cols-8 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full overflow-hidden ${index % 2 !== 0 ? "aspect-[4/3] col-span-4" : "aspect-[4/5] my-auto col-span-2"}`}
            >
              <Image
                src={image}
                alt={title}
                className="object-cover hover:scale-110 duration-300 transform transition-transform ease-in-out"
                fill
              />
            </div>
          ))}
        </div>
        {/* slider */}

        <div className="flex flex-col gap-4">
          {description.slice(1).map((item, index) => (
            <p key={index} className="md:text-lg text-base text-center md:mt-2">
              {item}
            </p>
          ))}
          <Link
            href={link.href}
            className="text-center text-lg text-clr font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutComponent;
