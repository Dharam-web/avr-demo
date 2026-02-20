"use client";
import { OurServicesPropsTypes } from "@/@types/types";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";
import { Autoplay } from "swiper/modules";

const OurServices: FC<OurServicesPropsTypes> = ({ title, subTitle, cards }) => {
  return (
    <Section className="our-services">
      <div className="flex flex-col md:gap-14 gap-4 max-w-[1400px] mx-auto">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="md:flex hidden flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 space-y-6 rounded-lg max-w-[256px] w-full bg-white box-shadow"
            >
              <div className="w-full max-w-20 mx-auto relative aspect-square">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="100%"
                  className="w-full object-contain"
                />
              </div>
              <h3 className="text-xl text-center text-clr font-semibold">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        {/* slider */}
        {/* slider */}
        <div className="md:hidden">
          <SwiperCarousel
            slidesPerView={1}
            spaceBetween={20}
            data={cards}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="!p-2"
            renderSlide={(card, index) => (
              <div
                key={index}
                className="p-6 space-y-6 rounded-lg max-w-[256px] w-full bg-white box-shadow mx-auto"
              >
                <div className="w-full max-w-20 mx-auto relative aspect-square">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="100%"
                    className="w-full object-contain"
                  />
                </div>
                <h3 className="text-xl text-center text-clr font-semibold">
                  {card.name}
                </h3>
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
