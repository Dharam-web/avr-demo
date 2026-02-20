import { Addcard, ThingsToDoCard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { SectionWithContainer } from "@/components/sectionComponants";
import { thingsToDoData } from "./thingsToDoPageData";

export const metadata = {
  title: "Epic Adventure Activities in Manali  - Anand Vardhan Resorts ",
  description:
    "Looking for things to do? Anand Vardhan Resorts blends leisure, nature, and culture with curated experiences in cycling, Trekking, and Adventure parks for a fulfilling vacation.",
};

const page = () => {

  return (
    <main>
      <FullScreenCarousel
        {...thingsToDoData.bannner}
      />
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thingsToDoData.cards && (
            thingsToDoData.cards.map((card, index) => (
              <ThingsToDoCard key={index} {...card} />
            ))
          )}
        </div>
      </SectionWithContainer>
      <Addcard {...thingsToDoData.addCardData} />
    </main>
  );
};

export default page;
