import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import PureVeg from "./components/PureVeg";
import { diningPageData } from "./diningPageData";

export const metadata = {
  title: "Best Pure Veg Restaurant in Manali | Open Air Cafe in Naggar",
  description: "Delicious pure veg cuisine in Manali at Anand Vardhan—one of the best restaurants & cafes in Naggar. Fresh, flavorful meals await. Reserve your table now!",
  keywords: "best restaurants in manali pure veg restaurants in manali cafes in naggar pure veg hotel in manali",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        {...diningPageData.bannerData}
      />
      <PureVeg {...diningPageData.pureVegSectionData} />
      <Addcard {...diningPageData.addCardData} />
    </div>
  );
};

export default page;
