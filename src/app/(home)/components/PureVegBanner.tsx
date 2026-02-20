"use client";

import Image from "next/image";
import * as React from "react";

function PureVegBanner() {
  return (
    <div className="hidden lg:flex flex-col z-[999999999] fixed left-0 top-1/3 z-50 items-center space-y-16 pointer-events-none">
      <Image
        src="/img.png"
        alt="award"
        height={108}
        width={108}
        className="pointer-events-auto -translate-x-[35%]"
      />
      <p
        role="complementary"
        aria-label="Pure Veg Resort Banner"
        className="px-4 py-2 text-lg leading-6 text-white uppercase bg-lime-900 transform -rotate-90 origin-center whitespace-nowrap pointer-events-auto -translate-x-[40%]"
      >
        PURE VEG RESORT
      </p>
    </div>
  );
}

export default PureVegBanner;
