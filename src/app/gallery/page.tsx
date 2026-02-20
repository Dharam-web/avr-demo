import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import GalleryImageComponent from "./GalleryImageComponent";
import { galleryPageData } from "./galleryPageData";

export const metadata = {
  title: "Gallery - Anandvardhan Resorts",
  description:
    "Explore the serene beauty of Anand Vardhan Resorts through our gallery. Find our wellness resort in Manali, tranquil spa spaces, and meditation retreats in Himachal Pradesh. ",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel {...galleryPageData.bannerData} />
      <SectionWithContainer>
        <SectionHeading
          title={galleryPageData.galleryLayoutData.title}
          subTitle={galleryPageData.galleryLayoutData.subTitle}
          textCenter
          wrapperClassName="md:pt-10"
        />
      </SectionWithContainer>
      <GalleryImageComponent imageData={galleryPageData.images} />
      <Addcard {...galleryPageData.addCardData} />
    </div>
  );
};

export default page;
