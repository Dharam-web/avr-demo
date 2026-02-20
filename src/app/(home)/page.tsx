"use client";
// import WellnessSliderSection from "@/components/WellnessSlider";
// import dynamic from "next/dynamic";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  Experiences,
  sectionContentData,
  TestimonialSection
} from "@/components/sectionComponants";
import Addcard from "../../components/cards/Addcard";
import {
  AboutUsHome,
  OnlinePlatforms,
  OurCulinaryOfferings,
  RoomAndSuites,
  WhyChooseUs,
} from "./components";
import { homePageData } from "./homePageData";
import EnquiryForm from "./components/EnquireForm";

export default function Home() {
  return (
    <main>
      <FullScreenCarousel {...homePageData.bannerData} />

      <div className="bg-clr2 p-4 md:p-8 lg:p-12">
        <EnquiryForm />
        {/* <iframe
          src="https://login.hotelgrowthsuite.com/widget/form/693bf7a7d055a"
          // style="width:100%;height:600px;border:none;border-radius:3px"
          style={{
            width: "100%",
            height: "440px",
            border: "none",
            borderRadius: "3px",
          }}
          id="inline-693bf7a7d055a"
          data-form-name="Contact Us"
          data-layout-iframe-id="inline-693bf7a7d055a"
          data-form-id="693bf7a7d055a"
          data-height="600"
          title="Contact Us"
          className="bg-clr2"
        ></iframe> */}
      </div>
      <AboutUsHome {...homePageData.aboutUsData} />
      <RoomAndSuites {...homePageData.roomsAndSuites} />
      <Experiences {...homePageData.experiences} />
      <WhyChooseUs {...homePageData.whyChooseUs} />
      <OurCulinaryOfferings {...homePageData.ourCulinaryOfferings} />
      <OnlinePlatforms {...homePageData.onlinePlatforms} />
      <TestimonialSection {...sectionContentData.testimonials} />
      <Addcard {...homePageData.addCardData} />
    </main>
  );
}
