"use client";
import { OurCulinaryOfferingsPropsTypes } from "@/@types/types";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import SwiperCarousel from "./SwiperCarousel";

interface OurCulinaryOfferingsSliderProps {
  cards: OurCulinaryOfferingsPropsTypes["cards"];
}
const OurCulinaryOfferingsSlider: React.FC<OurCulinaryOfferingsSliderProps> = ({
  cards,
}) => {
  return (
    <div>
      <SwiperCarousel
        data={cards}
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
            autoplay: false,
          },
          1024: {
            slidesPerView: 2,
            autoplay: false,
          },
        }}
        renderSlide={(card) => (
          <div className="relative w-full md:aspect-[4/2.5] aspect-[4/3]">
            <Image
              src={card.src}
              alt={"service Image"}
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 w-full z-10 bg-gradient-to-t from-black/60 to-transparent" /> */}
            <div className="absolute py-3 bottom-0 bg-black/60 left-0 z-20 w-full">
              <h3 className="text-lg font-plus font-medium text-white text-center">{card.description}</h3>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default OurCulinaryOfferingsSlider;
