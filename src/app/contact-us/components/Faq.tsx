"use client";
import { FaqData } from "@/@types/types";
import { Accordion } from "@/components/cards";
import { WebsiteContext } from "@/context/WebsiteContext";
import { useContext, useEffect, useState } from "react";

const Faq = () => {

    const { websiteData } = useContext(WebsiteContext);
      const [data, setData] = useState<FaqData>([]);
    
      useEffect(() => {
        if (websiteData && websiteData.Faq && websiteData.Faq.length > 0) {
          setData(websiteData?.Faq);
        }
      }, [websiteData]);
    return (
        <div className="divide-y divide-light border-y border-light mt-8 md:mt-12">
            {data.map((card, index) => (
              <Accordion key={index} ques={card.Question} ans={card.Answer} id={card._id} index={index} iconColor="clr" />
            ))}
          </div>
    );
}

export default Faq;