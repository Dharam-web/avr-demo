"use client";
import { ExperiencesDataPropsTypes } from "@/@types/types";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "../slider/SwiperCarousel";

const Experiences: FC<ExperiencesDataPropsTypes> = ({ title, subTitle, cards }) => {
  return (
    <Section>
      <div className="flex flex-col md:gap-14 gap-8 max-lg:px-4">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="w-full">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={2}
            className="w-full bg-white"
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                autoplay: false,
              },
              1024: {
                slidesPerView: 3,
                autoplay: false,
              },
            }}
            swiperSlideClassName=""
            renderSlide={(card, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3.5] overflow-hidden"
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center z-10">
                  <h3 className="text-2xl">{card.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}
          />

        </div>
      </div>
    </Section>
  );
};

export default Experiences;
