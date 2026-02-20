"use client";
import { NearByPlacesSliderPropsTypes } from "@/@types/types";
import { FC } from "react";
import { NearByPlacesCard } from "../cards";
import { SectionWithContainer } from "../sectionComponants";

const NearByPlacesSlider: FC<NearByPlacesSliderPropsTypes> = ({ cards }) => {
  return (
    <SectionWithContainer>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map((card, i) => (
          <NearByPlacesCard key={i} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default NearByPlacesSlider;
