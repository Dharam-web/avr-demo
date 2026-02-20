"use client";
import { FaqData } from "@/@types/types";
import { Accordion } from "@/components/cards";
import { Section } from "@/components/sectionComponants";
import { WebsiteContext } from "@/context/WebsiteContext";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";

interface FaqProps {
  title: string;
  src: string;
  faqData: {
    id: number;
    ques: string;
    ans: string;
  }[];
}



const Faq: FC<FaqProps> = ({ title, src }) => {
  const { websiteData } = useContext(WebsiteContext);
  const [data, setData] = useState<FaqData>([]);

  useEffect(() => {
    if (websiteData && websiteData.Faq && websiteData.Faq.length > 0) {
      setData(websiteData?.Faq);
    }
  }, [websiteData]);


  return (
    <Section className="faq">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="w-full relative md:aspect-[4/4.8] aspect-square">
          <Image src={src} alt={title} fill objectFit="cover" />
          <div className="absolute inset-0 m-4 border"></div>
        </div>
        <div className="bg-clr2 px-6 py-10 w-full h-full flex flex-col gap-6 md:gap-14">
          <h2 className="text-3xl font-plus font-semibold text-center text-clr">
            {title}
          </h2>
          <div className="divide-y divide-light border-y border-light">
            {data.map((card, index ) => (
              <Accordion key={index} ques={card.Question} ans={card.Answer} id={card._id} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
