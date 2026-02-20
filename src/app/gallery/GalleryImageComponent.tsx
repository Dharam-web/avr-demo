"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import { WebsiteContext } from "@/context/WebsiteContext";
import Image from "next/image";
import { FC, useCallback, useState, useContext } from "react";

// Sample image data with tags matching headings
interface ImageDataProps {
  imageData: { src: string; alt: string; tags: string; id: number }[];
}

const GalleryImageComponent: FC<ImageDataProps> = ({ imageData }) => {
  const gridPattern = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
  ];

  const order = [
    "luxury suite room",
    "super deluxe room",
    "deluxe room",
    "rooms & suites",
  ];

  const sortedImages = [...imageData].sort((a, b) => {
    const aIndex = order.indexOf(a.alt.toLowerCase());
    const bIndex = order.indexOf(b.alt.toLowerCase());
    return aIndex - bIndex;
  });

  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(sortedImages.map((item) => item.tags.toLowerCase())),
  ];

  const filterData = useCallback(
    (category: string) => {
      if (category === "All") {
        return sortedImages;
      } else {
        return sortedImages.filter((item) =>
          item.tags.toLowerCase().includes(category)
        );
      }
    },
    [sortedImages]
  );

  const filteredData = filterData(currentCategory);

  // Use context instead of local state
  const { setOpenImgPopup, setImage, setCurrentIndex, setRoomName } =
    useContext(WebsiteContext);

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

  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-0 after:bg-clr2 after:z-[-1] after:mx-4 after:shadow-md">
      {/* Headings - Stack in pairs on mobile */}
      <div className="grid lg:flex  md:grid-cols-4 grid-cols-2 gap-4 items-center w-full md:justify-between">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCurrentCategory(category)}
            className={`${
              category === currentCategory
                ? "bg-[#2F4B26] text-white"
                : "bg-white text-[#2F4B26]"
            } px-4 py-3 md:py-1 uppercase max-md:text-wrap rounded-full border text-nowrap md:text-base text-sm border-[#2F4B26] hover:bg-[#2F4B26] hover:text-white transition-all duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:auto-rows-[15rem] auto-rows-[280px] grid-flow-row gap-[.55rem]">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden hover:border-4 border-white hover:shadow-3xl shadow-2xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                onClick={() =>
                  handleOpen({
                    images: [...new Set(filteredData?.map((card) => card.src))],
                    index,
                    roomName: item.alt,
                  })
                }
                src={item.src}
                alt={item.alt}
                priority={true}
                fill
                className={`w-full h-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear`}
              />
              {item.tags?.trim().toLowerCase() === "rooms & suites" && (
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-medium text-gray-900">
                  {item.alt}
                </div>
              )}
            </div>
          ))}

          {/* FullscreenImagePopup1 will now read from context */}
        </div>
        {filteredData.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No images found for this category
          </div>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default GalleryImageComponent;
