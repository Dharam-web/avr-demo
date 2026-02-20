"use client";
import { pureVegSectionDataPropsTypes } from "@/@types/types";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";

import { Autoplay } from "swiper/modules";
import { PureVegCard } from "../cards";

interface PureVegSliderProps {
  cards: pureVegSectionDataPropsTypes["cards"];
}

const PureVegSlider: FC<PureVegSliderProps> = ({ cards }) => {
  return (
    <>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        className="w-full !p-1 box-shadow"
        swiperSlideClassName="box-shadow rounded-md overflow-hidden"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            autoplay: false,
          },
        }}
        renderSlide={(card, index) => (
          <PureVegCard {...card} index={index} />
        )}
      />
    </>
  );
};

export default PureVegSlider;
