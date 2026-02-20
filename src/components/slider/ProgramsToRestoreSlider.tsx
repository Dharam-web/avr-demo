"use client";
import { ProgramsToRestorePropsTypes } from "@/@types/types";
import { FC } from "react";
import ProgramsToRestoreCard from "../cards/ProgramsToRestoreCard";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";

type ProgramsToRestoreSliderProps = {
  programs: ProgramsToRestorePropsTypes["cards"];
};
const ProgramsToRestoreSlider: FC<ProgramsToRestoreSliderProps> = ({
  programs,
}) => {
  return (
    <div>
      <SwiperCarousel
        data={programs}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".programs-pagination" }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!p-1"
        renderSlide={(item) => <ProgramsToRestoreCard {...item} />}
      />
      <div className="programs-pagination flex items-center justify-center mt-4"></div>
    </div>
  );
};

export default ProgramsToRestoreSlider;
