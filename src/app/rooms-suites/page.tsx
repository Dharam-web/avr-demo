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
  title: "Resort Rooms & Suites in Manali | Anand Vardhan Rooms",
  description: "Explore elegantly designed rooms & suites at Anand Vardhan Resort, Naggar Manali. Cozy interiors & top-class comfort. Check availability & book now!",
  keywords: "resort rooms & suites in manali room in naggar anand vardhan rooms",
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
