import { Addcard } from "@/components/cards";
import { blogPageData } from "./blogPageData";
import { BannerWithOnlyText } from "@/components/Banner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <BannerWithOnlyText {...blogPageData.bannerData} />
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
          {blogPageData.cards.map((card, index) => (
            <Link
              href={card.link.href}
              key={index}
              className="w-full flex flex-col card-view-scale rounded-lg overflow-hidden box-shadow"
            >
              <div className="w-full relative md:aspect-[4/2.5] aspect-[3/2.2]">
                <Image
                  src={card.src}
                  alt={card.title}
                  className="w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-clr2 space-y-3 h-full">
                <h3 className="text-2xl font-plus text-[#2F4B26] font-normal flex-grow">
                  {card.title}
                </h3>
                <p className="text-sm text-Light font-normal">{card.date}</p>
                <p className="md:text-lg text-Light font-normal mt-2">
                  {card.description.slice(0, 180)}{" "}
                  <span className="text-[#1F1F1F] font-semibold">
                    ...{card.link.label}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </SectionWithContainer>
      <Addcard {...blogPageData.addCardData} />
    </main>
  );
}
