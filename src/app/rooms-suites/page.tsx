import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  OnlinePlatforms,
  sectionContentData,
  TestimonialSection,
} from "@/components/sectionComponants";
import RoomSection from "./components/RoomSection";
import { roomsPageData } from "./roomsPageData";

export const metadata = {
  title: "Rooms & Suites | AnandVardhan Resorts",
  description: "Rooms & Suites | AnandVardhan Resorts",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        {...roomsPageData.bannerData}
      />
      <OnlinePlatforms {...sectionContentData.onlinePlatforms} />
      <RoomSection {...roomsPageData.roomsData} />
      <TestimonialSection {...sectionContentData.testimonials} />
      <Addcard {...roomsPageData.addCardData} />
    </div>
  );
};

export default page;
