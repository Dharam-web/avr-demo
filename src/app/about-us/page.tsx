import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  Experiences,
  OnlinePlatforms,
  sectionContentData,
} from "@/components/sectionComponants";
import { aboutPageData } from "./aboutPageData";
import OurServices from "./components/OurServices";
import AboutComponent from "./components/AboutComponent";

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
