import * as React from "react";
import { Testimonial } from "./TestimonialTypes";
import Image from "next/image";

interface TestimonialContentProps {
  testimonial: Testimonial;
}

export function TestimonialContent({ testimonial }: TestimonialContentProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center justify-center gap-1 my-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={index < rating ? "#FFD700" : "#D3D3D3"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 1L12.39 6.5H18.5L13.5 10.5L15.5 16.5L10 13L4.5 16.5L6.5 10.5L1.5 6.5H7.61L10 1Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <article
      onClick={() => window.open(testimonial.link, "_blank")}
      className="flex flex-col items-center justify-between max-w-[800px] min-h-[300px] md:min-h-[350px] px-4 md:px-6 cursor-pointer transition-all"
    >
      {/* Logo */}
      <Image
        src={testimonial.logo}
        height={testimonial.logo === "/google.png" ? 60 : 60}
        width={testimonial.logo === "/google.png" ? 60 : 140}
        alt="Company logo"
        className="object-contain"
      />

      {/* Stars */}
      {renderStars(testimonial.rating)}

      {/* Review Text */}
      <p className="text-xl font-light leading-7 text-center text-stone-500 max-md:text-lg max-sm:text-base max-h-[150px] overflow-hidden text-ellipsis">
        {testimonial.review}
      </p>

      {/* Author Name */}
      <p className="text-xl font-bold leading-7 text-center text-neutral-700">
        {testimonial.name}
      </p>
    </article>
  );
}
