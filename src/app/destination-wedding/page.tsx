import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { OfferSlider } from "@/components/slider";
import { AboutWedding, Faq, WeddingServices } from "./components";
import { weddingPageData } from "./weddingPageData";

export const metadata = {
  title: "Destination Wedding in Manali  - Anand Vardhan Resorts",
  description:
    "Celebrate love with a magical destination wedding at Anand Vardhan Resorts. A perfect blend of tradition, nature, and unforgettable moments.",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        {...weddingPageData.bannerData}
      />
      <AboutWedding {...weddingPageData.aboutWeddingData} />
      <WeddingServices {...weddingPageData.weddingServices} />
      <OfferSlider {...weddingPageData.offer} />
      <Faq {...weddingPageData.faq} />
      <Addcard {...weddingPageData.addCardData} />
    </div>
  );
};

export default page;
