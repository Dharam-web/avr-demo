import * as React from "react";

interface NavigationDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

export function NavigationDots({
  total,
  active,
  onDotClick,
}: NavigationDotsProps) {
  return (
    <div
      className="flex gap-[7px] items-center"
      role="navigation"
      aria-label="Testimonial navigation"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to testimonial ${index + 1}`}
          aria-current={active === index ? "true" : "false"}
          className={`h-2 rounded-full transition-all duration-300 ${
            active === index ? "w-8 bg-neutral-800" : "w-2 bg-neutral-400"
          }`}
        />
      ))}
    </div>
  );
}
