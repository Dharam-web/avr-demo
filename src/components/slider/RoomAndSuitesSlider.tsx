"use client";
import { RoomsAndSuitesPropsTypes } from "@/@types/types";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { RoomAndSuitesCard } from "../cards";
import { Autoplay, Pagination } from "swiper/modules";


interface RoomAndSuitesSliderProps {
    cards: RoomsAndSuitesPropsTypes["cards"];
    boxShadow?: boolean;
}
const RoomAndSuitesSlider: FC<RoomAndSuitesSliderProps> = ({cards, boxShadow}) => {
    return (
        <div id="rooms">
            <SwiperCarousel data={cards} slidesPerView={1} spaceBetween={24}
            className={`w-full ${boxShadow ? "box-shadow" : ""} !p-1`}
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
                    slidesPerView: 3,
                    autoplay: false,
                },
            }}
            renderSlide={(card, index) => <RoomAndSuitesCard {...card} index={index ?? 0} />}
            
            />
        </div>
    );
}

export default RoomAndSuitesSlider;