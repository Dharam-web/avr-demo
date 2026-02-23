import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  Experiences,
  OnlinePlatforms,
  sectionContentData,
} from "@/components/sectionComponants";
import { aboutPageData } from "./aboutPageData";
import OurServices from "./components/OurServices";
import AboutComponent from "./components/AboutComponent";

export const metadata = {
  title: "About Anand Vardhan Resort | Wellness Resort in Naggar Manali",
  description: "Anand Vardhan is Manali's premier wellness resort. Pure veg dining, spa, yoga & Himalayan serenity await. Discover our story today!",
  keywords: "Luxury Resort in Naggar Manali Wellness Resort in Manali About Anand Vardhan Resorts",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel {...aboutPageData.bannerData} />
      <AboutComponent {...aboutPageData.aboutUsData} />
      <OurServices {...aboutPageData.ourService} />
      <OnlinePlatforms {...sectionContentData.onlinePlatforms} />
      <Experiences {...aboutPageData.experiences} />
    </div>
  );
};

export default page;
