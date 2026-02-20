import * as React from "react";

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

export function NavigationArrow({ direction, onClick }: NavigationArrowProps) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      aria-label={`Navigate ${direction}`}
      className="w-[40px] h-[40px] cursor-pointer relative"
    >
      <div className="absolute inset-0 rounded-full bg-white shadow-[0px_7px_29px_rgba(100,100,111,0.2)]" />
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <path
          d={isLeft ? "M23 14L17 20L23 26" : "M17 14L23 20L17 26"}
          stroke="#363636"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
