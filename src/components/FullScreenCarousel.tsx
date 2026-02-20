"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { LeftLinesIcon, RightLinesIcon } from "../icons/icons";
import { Section } from "./sectionComponants";
import SwiperCarousel from "./slider/SwiperCarousel";

interface FullScreenCarouselProps {
  images: string[];
  title?: string;
  subTitle?: string;
  description?: string;
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  images,
  title,
  subTitle,
  description,
}) => {

  return (
    <Section  className="w-full relative !py-0">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="w-full banner-swiper"
        renderSlide={(image, index) => (
          <div
            key={index}
            className="relative w-full md:aspect-[16/9] aspect-square"
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              sizes="100vw"
              loading="eager"
              priority={index === 0}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      />
      {title && description && subTitle && (
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-4 text-center">
          {subTitle && (
            <span className="md:text-[2rem] font-plus mb-1">{subTitle}</span>
          )}
          {title && (
            <h1 className="md:text-5xl text-3xl font-plus font-bold mb-2">
              {title}
            </h1>
          )}
          {description && (
            <div className="flex justify-center items-center gap-4">
              <span className="max-md:hidden">
                <LeftLinesIcon />
              </span>
              <p className="text-lg md:text-[1.375rem]">{description}</p>
              <span className="max-md:hidden">
                <RightLinesIcon />
              </span>
            </div>
          )}
        </div>
      )}
      {title && description && !subTitle && (
        <div className="absolute z-10 inset-0 flex flex-col items-center  bg-black/30 text-white p-4 text-center">
          {title && (
            <h1 className="md:text-5xl font-plus text-3xl font-bold mb-2 mt-8">
              {title}
            </h1>
          )}
          {description && (
            <div className="flex justify-center items-center gap-4">
              <span className="max-md:hidden">
                <LeftLinesIcon />
              </span>
              <p className="text-lg md:text-[1.375rem]">{description}</p>
              <span className="max-md:hidden">
                <RightLinesIcon />
              </span>
            </div>
          )}
        </div>
      )}
      {title && !description && !subTitle && (
        <div className="absolute z-20 inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-4 text-center">
          <div className="flex justify-center items-center gap-4">
            <span className="max-md:hidden">
              <LeftLinesIcon />
            </span>
            <h1 className="md:text-5xl font-plus text-3xl font-bold">
              {title}
            </h1>
            <span className="max-md:hidden">
              <RightLinesIcon />
            </span>
          </div>
        </div>
      )}
      {/* {pathName === "/" && (
        <div className="absolute max-lg:hidden z-10 bottom-12 left-1/2 transform -translate-x-1/2 w-full px-4">
          <CheckInOutForm />
        </div>
      )} */}
    </Section>
  );
};

export default FullScreenCarousel;
