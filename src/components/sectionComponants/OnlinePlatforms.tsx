"use client";
import { OnlinePlatformsPropsTypes } from "@/@types/types";
import { OnlinePlatformsCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";
import SwiperCarousel from "../slider/SwiperCarousel";
import { Autoplay } from "swiper/modules";



const OnlinePlatforms: FC<OnlinePlatformsPropsTypes> = ({ title, cards, defaultPadding }) => {
  return (
    <SectionWithContainer defaultPadding={defaultPadding}>
      <div className="">
        <SectionHeading title={title} titleColor="clr" titleClassName="underline-none" textCenter />
        <div className="w-full mt-4 h-px bg-[linear-gradient(to_right,_#FFFFFF,_#B2B2B2,_#FFFFFF)]" />
        <div className="md:grid hidden grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {cards.map((card, index) => (
            <OnlinePlatformsCard key={index} {...card} />
          ))}
        </div>
        {/* slider */}
        <div className="md:hidden block mt-8">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={16}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          renderSlide={(card, index) => <OnlinePlatformsCard key={index} {...card} />} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OnlinePlatforms;
