import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import PureVeg from "./components/PureVeg";
import { diningPageData } from "./diningPageData";

export const metadata = {
  title:
    "Fine Dining and Luxurious Culinary Experience -Anand Vardhan Resorts ",
  description:
    "Enjoy a luxury Culinary Experience  dining at Anand Vardhan Resorts with delicious menus, serene surroundings, and exceptional service that make every bite unforgettable.",
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
