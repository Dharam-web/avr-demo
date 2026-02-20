"use client";
import { WebsiteContext } from "@/context/WebsiteContext";
import { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";

const AmenitiesPopUp = () => {
  const {
    isOpenAmenityPopup,
    setIsOpenAmenityPopup,
    roomName,
    viewAllAmenities,
  } = useContext(WebsiteContext);

  useEffect(() => {
    if (isOpenAmenityPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenAmenityPopup]);

  return (
    <section className={`pop-up ${isOpenAmenityPopup ? "open" : "close"}`}>
      <div className="pop-up-content relative w-full  max-w-5xl mx-auto">
        <button
          className="absolute top-4 right-4 text-2xl text-clr hover:text-red-500"
          onClick={() => setIsOpenAmenityPopup(false)}
          aria-label="Close"
        >
          <MdClose />
        </button>
        {/* all amenities */}
        <h2 className="text-2xl font-plus font-semibold text-clr">
          {roomName}
        </h2>
        {viewAllAmenities.map((amenity, index) => (
          <div key={index} className="flex flex-col gap-1 mt-2 overflow-y-scroll">
            <h3 className="text-lg font-semibold text-clr1 font-plus">
              {amenity.amenityType}
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-5">
              {amenity.amenities.map((amenity, index) => (
                <li key={index} className="text-sm font-semibold text-Light">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesPopUp;
