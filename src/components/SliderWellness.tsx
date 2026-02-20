"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

type ImageItem = {
  src: string;
  alt: string;
  description?: string;
};

type WeOfferProps = {
  items: ImageItem[];
};

const WeOffer: React.FC<WeOfferProps> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-[#F9F9F1]">
      <div className="mt-10 flex flex-wrap w-full">
        <div className="w-full">
          <div
            className="wow fadeInUp mx-auto overflow-hidden rounded-md"
            data-wow-delay=".15s"
          >
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              effect="coverflow"
              pagination={{
                clickable: true,
                el: ".we-pagination",
              }}
              navigation={{
                nextEl: ".we-next",
                prevEl: ".we-prev",
              }}
              centeredSlides={true}
              slidesPerView={"auto"}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 600,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
              className="mySwiper we-offer-slider"
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className="h-full swiper-slide">
                  <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#F9F9F1]">
                    <div className="relative aspect-[4/2.5] rounded-lg w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="w-full h-full object-resize"
                      />
                    </div>
                    <h4 className="w-full mt-6 text-[24px] font-normal text-[#063333] bg-transparent text-center duration-300 transition ease-in-out playfair">
                      {item.alt}
                    </h4>
                    <p className="w-full mt-[24px] text-[20px] font-light text-[#686767] bg-transparent text-center duration-300 transition ease-in-out roboto">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 w-full mt-7">
          <button className="px-3 we-prev">
            <PrevBtnArrow />
          </button>
          <button className="px-3 we-next">
            <NextBtnArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;

// Arrows (keep these in same file or split if reused elsewhere)
export const PrevBtnArrow = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.6673 35.1663L28.084 33.7497L14.334 19.9997L28.084 6.24967L26.6673 4.83301L11.5007 19.9997L26.6673 35.1663Z"
      fill="#363636"
    />
  </svg>
);

export const NextBtnArrow = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3327 35.1663L11.916 33.7497L25.666 19.9997L11.916 6.24967L13.3327 4.83301L28.4993 19.9997L13.3327 35.1663Z"
      fill="#363636"
    />
  </svg>
);
