"use client";
import { TestimonialsPropsTypes } from "@/@types/types";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";

import { Autoplay, Pagination } from "swiper/modules";
import { TestimonialCard } from "../cards";

interface TestimonialsSliderPropsTypes {
  cards: TestimonialsPropsTypes["cards"];
}

const TestimonialSlider: FC<TestimonialsSliderPropsTypes> = ({ cards }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards || []}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".pagination",
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
      <div className="flex justify-center items-center pagination mt-4"></div>
    </div>
  );
};

export default TestimonialSlider;
