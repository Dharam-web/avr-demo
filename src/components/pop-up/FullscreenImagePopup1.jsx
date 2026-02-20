"use client";
import React, { useEffect, useState, useMemo, useCallback, useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { OutLineBtnNext, OutLineBtnPrev } from "@/icons/icons";
import { WebsiteContext } from "@/context/WebsiteContext";

const FullscreenImagePopup1 = () => {
  const { 
    openImgPopup, 
    setOpenImgPopup, 
    image, 
    currentIndex, 
    roomName 
  } = useContext(WebsiteContext);

  const [imgIndex, setImgIndex] = useState(currentIndex || 0);

  const handleNext = useCallback(() => {
    if (imgIndex < image.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  }, [imgIndex, image.length]);

  const handlePrev = useCallback(() => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  }, [imgIndex]);

  useEffect(() => {
    if (typeof currentIndex === "number") {
      setImgIndex(currentIndex);
    }
    if (openImgPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openImgPopup, currentIndex]);

  const imageSrc = useMemo(
    () =>
      image && image[imgIndex] ? image[imgIndex] : "/images/placeholder.png",
    [image, imgIndex]
  );

  const handleKeydown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setOpenImgPopup(false);
      }
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    },
    [setOpenImgPopup, handleNext, handlePrev]
  );

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartTime, setTouchStartTime] = useState(0);

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setTouchStartX(e.touches[0].clientX);
    setTouchStartTime(Date.now());
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndTime = Date.now();

    const deltaX = touchEndX - touchStartX;
    const deltaTime = touchEndTime - touchStartTime;

    if (deltaTime < 500 && Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStartX(0);
    setTouchStartTime(0);
  };

  useEffect(() => {
    if (openImgPopup) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [openImgPopup, handleKeydown]);

  return (
    <div
      className={`fixed md:bg-black/80 md:backdrop-blur-sm bg-black flex flex-col items-center justify-center z-50 transition-all duration-300 inset-0 ${openImgPopup ? " opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"} transform-origin-center`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenImgPopup(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenImgPopup(false);
      }}
    >
      <div className="w-full flex items-center justify-between z-10 md:px-4 absolute md:top-0 top-[18rem] px-4">
        <span className=" bg-clr4/30 p-2  text-sm text-white poppins">
          {imgIndex + 1}/{image.length}
        </span>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setOpenImgPopup(false)}>
            <IoCloseSharp className=" w-8 h-8 text-base flex justify-center items-center  font-bold text-white" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative max-width">
          <div
            className={`w-full max-w-6xl mx-auto md:-mt-14  aspect-[4/3.2] md:aspect-[4/2] relative image-container cursor-pointer  transition-all duration-300 ease-in-out`}
            onClick={(e) => e.stopPropagation()}
          >
            {openImgPopup && (
              <div
                className="w-full h-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={imageSrc}
                  alt={roomName}
                  fill
                  className="md:object-cover object-contain transition-all duration-300 ease-in-out"
                />
              </div>
            )}
          </div>
          <button
            onClick={handlePrev}
            className={`absolute lg:-left-5 lg:top-[45%] max-sm:left-[9rem] max-sm:-bottom-5 filter backdrop:blur-md w-12 aspect-1 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-65 z-10 ${imgIndex <= 0 ? "pointer-events-none bg-black" : ""}`}
          >
            <span className="sr-only">prev button</span>
            <OutLineBtnPrev />
          </button>
          <button
            onClick={handleNext}
            className={`absolute lg:-right-5 lg:top-[45%] max-sm:-bottom-5 max-sm:right-[9rem] filter backdrop:blur-md w-12 aspect-1 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-65 z-10`}
          >
            <span className="sr-only">next button</span>
            <OutLineBtnNext />
          </button>
          {roomName && (
            <span className=" bg-clr4/30 p-2 sr-only text-[18px] text-white lato font-normal image-title-center">
              {roomName}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullscreenImagePopup1;