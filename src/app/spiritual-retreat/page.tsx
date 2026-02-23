import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  OnlinePlatforms,
  sectionContentData,
  TestimonialSection,
} from "@/components/sectionComponants";
import { AboutSpiritual, ExclusivePackages, OurPackages, ProgramsToRestore, WhyChooseUs } from "./components";
import BookNow from "./components/BookNow";
import { spiritualPageData } from "./spiritualPageData";

export const metadata = {
  title: "Spiritual Retreats in Manali & Naggar | Anand Vardhan Resort",
  description: "Reconnect with your inner self at Anand Vardhan spiritual retreat in Naggar, Manali. Yoga, meditation & healing experiences in manali. Book your retreat today!",
  keywords: "Spiritual Retreats in Manali Spiritual resort in manali Spiritual Retreats in Naggar",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        {...spiritualPageData.bannerData}
      />
      <AboutSpiritual {...spiritualPageData.aboutSpiritual} />
      <ExclusivePackages {...spiritualPageData.exclusivePackages} />
      {/* <Packages {...spiritualPageData.packages} /> */}
      <ProgramsToRestore {...spiritualPageData.programsToRestore} />
      <OurPackages {...spiritualPageData.ourPackages} />
      <WhyChooseUs {...spiritualPageData.whyChooseUs} />
      <OnlinePlatforms
        {...sectionContentData.onlinePlatforms}
        defaultPadding={false}
      />
      <TestimonialSection {...sectionContentData.testimonials} />
      <BookNow {...spiritualPageData.contactData} />
    </div>
  );
};

export default page;
