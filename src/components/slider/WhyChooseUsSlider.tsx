import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";

import { WhyChooseUsCard } from "../cards";
import { WhyChooseUsPropsTypes } from "@/@types/types";
import { FC } from "react";

interface WhyChooseUsSliderProps {
  cards: WhyChooseUsPropsTypes["cards"];
}

const WhyChooseUsSlider: FC<WhyChooseUsSliderProps> = ({ cards }) => {
  return (
    <div className="w-full max-w-[20rem] mx-auto">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        renderSlide={(item) => <WhyChooseUsCard {...item} />}
      />
    </div>
  );
};

export default WhyChooseUsSlider;
