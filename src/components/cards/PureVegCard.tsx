"use client";
import { pureVegSectionDataPropsTypes } from "@/@types/types";
import { FC } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../slider/SwiperCarousel";

type card = pureVegSectionDataPropsTypes["cards"][0] & { index?: number };
const PureVegCard: FC<card> = ({ images, title, description, index }) => {
  return (
    <div>
      <div className="relative card-view-scale w-full">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={{
            nextEl: ".pure-veg-next"+index,
            prevEl: ".pure-veg-prev"+index,
          }}
          speed={1000}
          swiperSlideClassName="w-full relative aspect-[3/2] slider-navigation"
          renderSlide={(image) => (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          )}
        />
        <button type="button" aria-label="prev" className={`disabled:hidden absolute top-1/2 left-4 -translate-y-1/2 z-10 pure-veg-prev${index} rotate-180`}>
          <NavigationBtnIcon />
        </button>
        <button type="button" aria-label="next" className={`disabled:hidden absolute top-1/2 right-4 -translate-y-1/2 z-10 pure-veg-next${index}`}>
          <NavigationBtnIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h2 className="text-[2rem] text-clr font-plus text-center">{title}</h2>
        <p className=" text-Light text-center">{description}</p>
      </div>
    </div>
  );
};

export default PureVegCard;

export const NavigationBtnIcon = () => (
  <svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 26.2885L26.2885 19L19 11.7115L16.9115 13.8L20.6115 17.5H11.5V20.5H20.6115L16.9115 24.2L19 26.2885ZM19.0035 38C16.3755 38 13.9053 37.5013 11.593 36.504C9.28067 35.5067 7.26933 34.1532 5.559 32.4435C3.84867 30.7338 2.4945 28.7233 1.4965 26.412C0.498833 24.1007 0 21.6312 0 19.0035C0 16.3755 0.498667 13.9053 1.496 11.593C2.49333 9.28067 3.84683 7.26933 5.5565 5.559C7.26617 3.84867 9.27667 2.4945 11.588 1.4965C13.8993 0.498833 16.3688 0 18.9965 0C21.6245 0 24.0947 0.498666 26.407 1.496C28.7193 2.49333 30.7307 3.84683 32.441 5.5565C34.1513 7.26617 35.5055 9.27667 36.5035 11.588C37.5012 13.8993 38 16.3688 38 18.9965C38 21.6245 37.5013 24.0947 36.504 26.407C35.5067 28.7193 34.1532 30.7307 32.4435 32.441C30.7338 34.1513 28.7233 35.5055 26.412 36.5035C24.1007 37.5012 21.6312 38 19.0035 38Z"
      fill="white"
    />
  </svg>
);
