import { AddCardDataPropsTypes } from "@/@types/types";
import { ArrowUpIcon } from "@/icons/icons";
import Link from "next/link";
import { FC } from "react";
import { SectionWithContainer } from "../sectionComponants";

const Addcard: FC<AddCardDataPropsTypes> = ({ title, description, link }) => {
  return (
    <SectionWithContainer>
      <div className="max-w-6xl card-view-scale mx-auto bg-clr2 rounded-[24px] box-shadow">
        <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-6 max-w-5xl mx-auto md:py-16 py-8 max-md:px-4">
          <div className="md:col-span-3">
            <h2 className="md:text-3xl text-2xl font-bold font-plus text-clr max-md:text-center">
              {title}
            </h2>
            <p className="text-[#686767] md:text-lg max-md:text-center mt-4">
              {description}
            </p>
          </div>
          <div className="">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clr1 ml-auto rounded-full md:w-fit flex justify-center items-center text-white py-4 px-6 shadow-inner md:text-lg hover:bg-clr transition"
            >
              {link.label}{" "}
              <span className="ml-2">
                <ArrowUpIcon />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Addcard;
