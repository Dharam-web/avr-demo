"use client";

import { WebsiteContext } from "@/context/WebsiteContext";
import { useContext, useEffect, useState } from "react";

const ShowPage = () => {
  const { websiteData } = useContext(WebsiteContext);
  const [data, setData] = useState("");

  useEffect(() => {
    if (websiteData && websiteData.TermsConditions && websiteData.TermsConditions.length > 0) {
      setData(websiteData?.TermsConditions[1]?.Cancellation);
    }
  },[websiteData]);


  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default ShowPage;
