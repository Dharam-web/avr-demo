"use client";
import { TestimonialsPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { TestimonialSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { StarIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection(props: TestimonialsPropsTypes) {
  return (
    <SectionWithContainer sectionClassName="bg-clr">
      <div className="flex flex-col md:gap-14 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-5 gap-4">
          <div className="col-span-1 lg:col-span-3">
            <SectionHeading
              title={props.title}
              subTitle={props.subTitle}
              titleColor="white"
              subTitleColor="white"
              wrapperClassName="max-w-lg"
            />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="relative max-w-[28rem] ml-auto ">
              {/* Blur background */}
              <div className="absolute inset-0 rounded-[20px]  bg-white/20 backdrop-blur-[20px] z-0" />
              {/* Content */}
              <div className="relative md:grid  grid-cols-2 py-6 box-shadow rounded-[20px] max-md:px-4 md:divide-x-[0.5px] max-md:divide-y-[0.5px] divide-white z-10">
                {props.reviewPartners.map((partner, index) => (
                  <Link href={partner.href} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center gap-4 md:px-4 max-md:py-4">
                    <div className="w-full max-w-[2.5rem] aspect-square relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-auto"
                        fill
                        sizes="100vw"
                        priority
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold text-white">
                        {partner.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-white">{partner.rating}</p>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                              <StarIcon className="text-white" />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* testimonials slider */}
        <TestimonialSlider cards={props.cards} />
      </div>
    </SectionWithContainer>
  );
}
