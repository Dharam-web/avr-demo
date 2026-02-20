"use client";
import { RoomsAndSuitesPropsTypes } from "@/@types/types";
import { WebsiteContext } from "@/context/WebsiteContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../slider/SwiperCarousel";

type Props = RoomsAndSuitesPropsTypes["cards"][0] & {
  index: number;
};

const RoomAndSuitesCard: React.FC<Props> = ({
  images,
  link,
  title,
  index,
  description,
  facilityList,
  viewAllAmenities,
}) => {
  // Use context instead of local state
  const {
    setOpenImgPopup,
    setImage,
    setCurrentIndex,
    setRoomName,
    setIsOpenAmenityPopup,
    setViewAllAmenities,
  } = useContext(WebsiteContext);

  const handleOpen = ({
    images,
    index,
    roomName = "",
  }: {
    images: string[];
    index: number;
    roomName?: string;
  }) => {
    setOpenImgPopup(true);
    setImage(images);
    setCurrentIndex(index);
    setRoomName(roomName);
  };

  interface AmenityGroup {
    amenityType: string;
    amenities: string[];
  }
  const handleOpenAmenityPopup = (
    viewAllAmenities: AmenityGroup[],
    title: string
  ) => {
    setIsOpenAmenityPopup(true);
    setRoomName(title);
    setViewAllAmenities(viewAllAmenities);
  };

  return (
    <div
      className={`flex card-view-scale w-full flex-col ${description ? "box-shadow" : "gap-4"}`}
    >
      <div className="relative ">
        <SwiperCarousel
          data={images}
          className="w-full"
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={{
            nextEl: ".rooms-next" + index,
            prevEl: ".rooms-prev" + index,
          }}
          speed={1000}
          swiperSlideClassName="w-full relative aspect-square"
          renderSlide={(image) => (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              onClick={() => handleOpen({ images, index, roomName: title })}
            />
          )}
        />
        {/* prev and next */}
        <button
          aria-label="previous"
          className={`rooms-prev${index} absolute top-1/2 -translate-y-1/2 left-2 disabled:hidden z-10 rotate-180`}
        >
          <SliderNavigationIcon />
        </button>
        <button
          aria-label="next"
          className={`rooms-next${index} absolute top-1/2 -translate-y-1/2 right-2 disabled:hidden z-10`}
        >
          <SliderNavigationIcon />
        </button>
      </div>
      <div
        className={`flex h-full  ${description ? "flex-col gap-4 px-6 bg-white py-5" : "items-center justify-between"}`}
      >
        <h3 className={`text-2xl text-clr font-plus`}>{title}</h3>
        {facilityList && (
          <ul className="w-full flex flex-col gap-2 list-disc pl-6">
            {facilityList.map((text, index) => (
              <li key={index} className="text-Light">
                {text}
              </li>
            ))}
            {viewAllAmenities && (
              <li className="text-clr1 list-none">
                <button
                  onClick={() =>
                    handleOpenAmenityPopup(viewAllAmenities, title)
                  }
                  className="hover:underline underline-offset-4 capitalize"
                >
                  View all amenities
                </button>
              </li>
            )}
          </ul>
        )}
        {description && <p className="text-Light md:text-lg">{description}</p>}

        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`border border-clr1 px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm  transition-all duration-300 ease-in-out ${description ? "text-white bg-clr1 hover:bg-white hover:text-clr1" : "text-clr1 bg-transparent hover:bg-clr1 hover:text-white"}`}
        >
          {link.label}
          <span aria-label="arrow w-4 aspect-square">
            <ArrowUpIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RoomAndSuitesCard;

export const ArrowUpIcon = ({ ...props }) => (
  <svg
    width={11}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.77.634a.81.81 0 010 1.132l-8.905 9.066a.776.776 0 01-1.111 0 .81.81 0 010-1.131L9.658.634a.776.776 0 011.112 0z"
      fill="currentColor"
    />
    <path
      d="M0 1.2C0 .758.352.4.786.4h9.428c.434 0 .786.358.786.8v9.6c0 .442-.352.8-.786.8a.793.793 0 01-.785-.8V2H.786A.793.793 0 010 1.2z"
      fill="currentColor"
    />
  </svg>
);

export const SliderNavigationIcon = ({ ...props }) => (
  <svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.996.25c2.595 0 5.032.492 7.312 1.476 2.284.985 4.27 2.321 5.957 4.007 1.687 1.687 3.023 3.671 4.01 5.955.983 2.278 1.475 4.713 1.475 7.308 0 2.595-.492 5.032-1.476 7.312-.985 2.284-2.321 4.27-4.007 5.957-1.687 1.687-3.671 3.023-5.955 4.01-2.278.983-4.713 1.475-7.308 1.475-2.595 0-5.032-.492-7.312-1.476-2.284-.985-4.27-2.321-5.957-4.007-1.687-1.687-3.023-3.671-4.01-5.955C.743 24.035.25 21.6.25 19.005c0-2.595.492-5.032 1.476-7.312.985-2.284 2.321-4.27 4.007-5.957 1.687-1.687 3.671-3.023 5.955-4.01C13.966.743 16.4.25 18.995.25zm-.173 11.285l-2.089 2.088-.176.177 3.45 3.45H11.25v3.5h8.758l-3.45 3.45.176.177 2.09 2.088.176.177L26.642 19 19 11.358l-.177.177z"
      fill="#fff"
      fillOpacity={0.6}
      stroke="#363636"
      strokeWidth={0.5}
    />
  </svg>
);
