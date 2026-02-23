import { Addcard, ThingsToDoCard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { SectionWithContainer } from "@/components/sectionComponants";
import { thingsToDoData } from "./thingsToDoPageData";

export const metadata = {
  title: "Things to Do in Manali | Adventure Activities & Experiences",
  description: "Discover the best things to do in Manali city—from thrilling adventure activities to serene nature walks. Explore top experiences. Plan your trip with us today!",
  keywords: "things to do in manali things to do in manali city adventure activities in manali",
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
