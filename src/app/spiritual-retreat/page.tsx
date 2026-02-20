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
  title: "Spiritual Retreat - Anand Vardhan Resorts",
  description:
    "Anand Vardhan Resorts offers a divine escape. Discover spiritual wellness with guided meditation, sacred spaces, and natural serenity.",
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
