import { BannerWithOnlyText } from "@/components/Banner";
import { nearByPlaces } from "./nearByPlacesData";
import { NearByPlacesSlider } from "@/components/slider";
import { Addcard } from "@/components/cards";

export default function NearByPlaces() {
  return (
    <main>
      <BannerWithOnlyText {...nearByPlaces.bannerData} />
      <NearByPlacesSlider cards={nearByPlaces.cards} />
      <Addcard {...nearByPlaces.addCardData} />
    </main>
  )
}