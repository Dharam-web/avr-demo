"use client";

import { WebsiteContext } from "@/context/WebsiteContext";
import { useContext, useEffect, useState } from "react";

const ShowPage = () => {
  const { websiteData } = useContext(WebsiteContext);
  const [data, setData] = useState("");
  useEffect(() => {
    if (
      websiteData &&
      websiteData.TermsConditions &&
      websiteData.TermsConditions.length > 1
    ) {
      setData(websiteData.TermsConditions[2].TermsServices);
    }
  }, [websiteData]);
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default ShowPage;
