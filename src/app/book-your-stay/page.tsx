"use client";
import {
    Experiences,
    TestimonialSection,
    OnlinePlatforms
} from "./components/sectionComponants";

import Addcard from "../../components/cards/Addcard";

import EnquiryForm from "./components/EnquireForm";
import AboutUsHome from "./components/AboutUsHome";
import RoomAndSuites from "./components/RoomAndSuites";
import WhyChooseUs from "./components/WhyChooseUs";
import OurCulinaryOfferings from "./components/OurCulinaryOfferings";

import { bookYourStayData } from "./bookYourStayData";

export default function BookYourStay() {
    return (
        <>
            <main>
                <section className="max-screen lg:py-12 py-5 w-full relative md:aspect-[16/9.5] aspect-[4/5] !py-0">

                    {/* Video */}
                    <div className="w-full h-full">
                        <video
                            src="/video.mp4"
                            poster="/sightseeing.webp"
                            loop
                            muted
                            preload="auto"
                            autoPlay
                            playsInline
                            controlsList="nodownload"
                            className="w-full h-full object-cover overflow-hidden"
                        >
                            Sorry, your browser doesn&apos;t support embedded videos.
                        </video>
                    </div>

                    {/* Logo */}
                    <div className="absolute top-8 left-1/2 transform z-30 -translate-x-1/2 w-full">
                        <div className="max_width">
                            <div className="flex justify-between items-center">
                                <div className="md:w-[6rem] w-[4rem] aspect-square relative">
                                    <img
                                        src="/logo.png"
                                        alt="logo"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute z-10 inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-4 text-center">
                        <span className="md:text-[2rem] font-plus mb-1">Welcome to</span>

                        <h1 className="md:text-5xl text-3xl font-plus font-bold mb-2">
                            Anand Vardhan Resort
                        </h1>

                        <div className="flex justify-center items-center gap-4">
                            <span className="max-md:hidden">
                                <svg width="84" height="11" viewBox="0 0 84 11" fill="none">
                                    <rect y="1" width="60" height="2" fill="currentColor" />
                                    <rect x="24" y="9" width="60" height="2" fill="currentColor" />
                                </svg>
                            </span>

                            <p className="text-lg md:text-[1.375rem] uppercase">
                                A PURE VEGETARIAN RESORT
                            </p>

                            <span className="max-md:hidden">
                                <svg width="84" height="11" viewBox="0 0 84 11" fill="none">
                                    <rect x="24" y="1" width="60" height="2" fill="currentColor" />
                                    <rect y="9" width="60" height="2" fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </section>

                <div className="bg-clr2 p-4 md:p-8 lg:p-12">
                    <EnquiryForm />
                </div>

                <AboutUsHome {...bookYourStayData.aboutUsData} />
                <RoomAndSuites {...bookYourStayData.roomsAndSuites} />
                <Experiences {...bookYourStayData.experiences} />
                <WhyChooseUs {...bookYourStayData.whyChooseUs} />
                <OurCulinaryOfferings {...bookYourStayData.ourCulinaryOfferings} />
                <OnlinePlatforms {...bookYourStayData.onlinePlatforms} />
                <TestimonialSection {...bookYourStayData.testimonials} />
                <Addcard {...bookYourStayData.addCardData} />
            </main>

        </>
    );
}
