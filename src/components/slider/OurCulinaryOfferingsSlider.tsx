"use client";
import { OurCulinaryOfferingsPropsTypes } from "@/@types/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import SwiperCarousel from "./SwiperCarousel";
import { SliderNavigationIcon } from "../cards/RoomAndSuitesCard";

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
        renderSlide={(card, index) => (
          <div className="relative w-full md:aspect-[4/2.5] aspect-[4/3] group overflow-hidden">
            {card.images ? (
              <>
                <SwiperCarousel
                  data={card.images}
                  className="w-full h-full"
                  slidesPerView={1}
                  spaceBetween={0}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".culinary-next" + index,
                    prevEl: ".culinary-prev" + index,
                  }}
                  loop={true}
                  renderSlide={(image) => (
                    <Image
                      src={image}
                      alt={card.description}
                      fill
                      className="object-cover"
                    />
                  )}
                />
                <button
                  aria-label="previous"
                  className={`culinary-prev${index} absolute top-1/2 -translate-y-1/2 left-2 disabled:hidden z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <SliderNavigationIcon />
                </button>
                <button
                  aria-label="next"
                  className={`culinary-next${index} absolute top-1/2 -translate-y-1/2 right-2 disabled:hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <SliderNavigationIcon />
                </button>
              </>
            ) : (
              <Image
                src={card.src || ""}
                alt={"service Image"}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute py-3 bottom-0 bg-black/60 left-0 z-20 w-full">
              <h3 className="text-lg font-plus font-medium text-white text-center">
                {card.description}
              </h3>
            </div>
          </div>
        )}
      />
    </div>
  );
};


export default OurCulinaryOfferingsSlider;
