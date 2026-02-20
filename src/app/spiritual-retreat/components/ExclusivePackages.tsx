import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";

interface ExclusivePackagesPropsTypes {
  title: string;
  subTitle: string;
  cards: {
    src: string;
    title: string;
    description: string;
    link: {
      href: string;
      label: string;
    };
  }[];
}
const ExclusivePackages: React.FC<ExclusivePackagesPropsTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {cards.map((card, index) => (
            <div
              className={`transition-all max-w-md card-view-scale delay-${index + 1} flex flex-col box-shadow rounded-[24px] overflow-hidden`}
              key={index}
            >
              <div className="w-full relative md:aspect-[4/2.5] aspect-[4/3]">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover rounded-[24px] box-shadow"
                />
              </div>
              <div className="px-4 py-6 flex flex-col gap-4 bg-clr2">
                <h3 className="text-2x font-plus md:text-[2rem] text-clr">{card.title}</h3>
                <p className="md:text-lg text-clr">{card.description}</p>
                <Link
                  href={card.link.href}
                  className="text-clr text-lg flex items-center justify-center border-clr1 border px-4 py-3 rounded-full gap-2"
                >
                  {card.link.label}{" "}
                  <span>
                    <ArrowUpIcon />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ExclusivePackages;
