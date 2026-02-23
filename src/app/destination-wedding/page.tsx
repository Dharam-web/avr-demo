import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { OfferSlider } from "@/components/slider";
import { AboutWedding, Faq, WeddingServices } from "./components";
import { weddingPageData } from "./weddingPageData";

export const metadata = {
  title: "Destination Wedding in Manali | Best Wedding Venue in Manali",
  description: "Plan your dream destination wedding in Manali at Anand Vardhan Resort. Best venues, customized decor & packages. Enquire & make your day memorable!",
  keywords: "destination wedding in manali resorts in manali for wedding wedding venue in manali",
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
