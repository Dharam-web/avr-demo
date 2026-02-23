import { BannerWithOnlyText } from "@/components/Banner";
import { nearByPlaces } from "./nearByPlacesData";
import { NearByPlacesSlider } from "@/components/slider";
import { Addcard } from "@/components/cards";

export const metadata = {
  title: "Places to Visit in Naggar Manali | Nearby Places Anand Vardhan",
  description: "Explore best places to visit in Naggar Manali — Naggar Castle, Roerich Museum, Jana Waterfall & more. Stay at Anand Vardhan & explore it all. Plan your trip!",
  keywords: "places to visit in naggar places to visit in naggar manali nearby places in manali",
};

export default function NearByPlaces() {
  return (
    <main>
      <BannerWithOnlyText {...nearByPlaces.bannerData} />
      <NearByPlacesSlider cards={nearByPlaces.cards} />
      <Addcard {...nearByPlaces.addCardData} />
    </main>
  );
}