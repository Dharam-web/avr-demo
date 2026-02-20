"use client";
import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface AmenityGroup {
  amenityType: string;
  amenities: string[];
}

interface IWebsiteContext {
  websiteData: any;
  setWebsiteData: (data: any) => void;
  openImgPopup: boolean;
  setOpenImgPopup: React.Dispatch<React.SetStateAction<boolean>>;
  image: string | string[];
  setImage: React.Dispatch<React.SetStateAction<string | string[]>>;
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  isOpenAmenityPopup: boolean;
  setIsOpenAmenityPopup: React.Dispatch<React.SetStateAction<boolean>>;
  viewAllAmenities: AmenityGroup[];
  setViewAllAmenities: React.Dispatch<React.SetStateAction<AmenityGroup[]>>;
}


export const WebsiteContext = createContext<IWebsiteContext>({
  websiteData: {},
  setWebsiteData: () => {},
  openImgPopup: false,
  setOpenImgPopup: () => {},
  image: "",
  setImage: () => {},
  currentIndex: null,
  setCurrentIndex: () => {},
  roomName: "",
  setRoomName: () => {},
  isOpenAmenityPopup: false,
  setIsOpenAmenityPopup: () => {},
  viewAllAmenities: [],
  setViewAllAmenities: () => {},
});

export const WebsiteProvider = ({ children }: Props) => {
  const [websiteData, setWebsiteData] = useState({});
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [image, setImage] = useState<string | string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [roomName, setRoomName] = useState<string>("");

  const [isOpenAmenityPopup, setIsOpenAmenityPopup] = useState(false);
  const [viewAllAmenities, setViewAllAmenities] = useState<AmenityGroup[]>([]);
  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        const response = await fetch(
          // "https://nexon.eazotel.com/cms/get/website/anandvardhanresort"
          "https://nexon.eazotel.com/cms/get/website/anandvardhanresort"
        );
        const data = await response.json();
        setWebsiteData(data?.WebsiteData["70592479"]);
      } catch (error) {
        console.error("Failed to fetch website data:", error);
      }
    };

    fetchWebsiteData();
  }, []);

  // console.log(websiteData);

  return (
    <WebsiteContext.Provider
      value={{
        websiteData,
        setWebsiteData,
        openImgPopup,
        setOpenImgPopup,
        image,
        setImage,
        currentIndex,
        setCurrentIndex,
        roomName,
        setRoomName,
        isOpenAmenityPopup,
        setIsOpenAmenityPopup,
        viewAllAmenities,
        setViewAllAmenities,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};
