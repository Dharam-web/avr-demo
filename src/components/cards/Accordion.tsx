"use client";
import { JSX, useEffect, useState } from "react";

interface AccordionProps {
  id: number;
  ques: string;
  ans: string | string[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
  icon?: JSX.Element;
  index?: number;
  iconColor?: string;
}
const Accordion: React.FC<AccordionProps> = ({
  ques,
  ans,
  className,
  questionClassName,
  answerClassName,
  index,
  iconColor,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    setIsAccordionOpen(index === 0);
  }, [index]);

  return (
    <>
      <div
        className={`flex flex-col w-full ${className} group cursor-pointer px-4`}
        onMouseEnter={() => setIsAccordionOpen(true)}
        onMouseLeave={() => setIsAccordionOpen(false)}
      >
        <div
          className={`flex items-center justify-between gap-4 w-full md:py-6 py-4`}
        >
          <h3
            className={`font-semibold font-plus text-[1.375rem] text-clr ${questionClassName}`}
          >
            {ques}
          </h3>
          <span
            aria-label="accordion icon"
            role="svg"
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className={`cursor-pointer ${iconColor ? iconColor : "text-[#FF8A47]"} text-lg ${
              isAccordionOpen ? "rotate-360" : "rotate-180"
            }  p-1 duration-300 transition-all ease-in-out`}
          >
            <OutlineDropdown />
          </span>
        </div>

        <div
          className={`flex pr-6 flex-col gap-4 w-full ${answerClassName} transition-all max-h-0 overflow-hidden group-hover:max-h-[20rem] ${
            isAccordionOpen ? "max-h-[20rem] mb-2 py-3" : ""
          }`}
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          {ans instanceof Array ? (
            <ul className="flex flex-col gap-4 list-disc pl-6">
              {ans.map((ans, index) => (
                <li key={index} className={`text-white md:text-lg font-normal`}>
                  {ans}
                </li>
              ))}
            </ul>
          ) : (
            <p
              key={index}
              className={`text-Light text-xl font-normal`}
              dangerouslySetInnerHTML={{ __html: ans }}
            ></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;

export const OutlineDropdown = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.73 21.0535L6.67668 22L15.865 12.8129L25.0533 22L26 21.0535L15.865 10.9198L5.73 21.0535Z"
      fill="currentColor"
    />
  </svg>
);
