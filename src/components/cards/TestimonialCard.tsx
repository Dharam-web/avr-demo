"use client";
import { TestimonialsPropsTypes } from "@/@types/types";
import { StarIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const TestimonialCard: FC<TestimonialsPropsTypes["cards"][0]> = ({
  link,
  logo,
  name,
  review,
}) => {
  const [ReadMore, setReadMore] = useState(false);
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[20px] bg-white/20 backdrop-blur-[20px] z-0" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-4 relative z-10 px-6 py-10"
      >
        <div className="w-full flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-plus font-semibold text-white">{name}</h3>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>
                  <StarIcon className="text-[#E4A853]" />
                </span>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[2.5rem] aspect-square relative">
            <Image
              src={logo}
              alt={name}
              className="w-full h-auto"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="bg-white h-[.5px] w-full" />
        <p className="md:text-lg text-white font-light roboto">
          {ReadMore || review.length <= 180
            ? review
            : `${review.slice(0, 175)}... `}
          {review.length > 150 && !ReadMore && (
            <span
              className="text-secondary cursor-pointer capitalize font-semibold ml-1"
              onClick={() => setReadMore(true)}
            >
              Read more
            </span>
          )}
        </p>
      </Link>
    </div>
  );
};

export default TestimonialCard;
