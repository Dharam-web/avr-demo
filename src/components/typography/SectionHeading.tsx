import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  textCenter?: boolean;
  mdTextCenter?: boolean;
  smTextCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  textCenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName="",
  titleClassName="",
  subTitleClassName="",
}) => {
  return (
    <div className={`flex flex-col w-full ${wrapperClassName}`}>
      {title && (
        <Headings
          level={2}
          className={`${titleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textCenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${titleColor ? `text-${titleColor}` : "text-clr1"}  uppercase font-medium text-[1.375rem] font-plus underline underline-offset-4`}
          heading={title}
        />
      )}
      {subTitle && (
        <Headings
          level={3}
          className={`${subTitleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textCenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${subTitleColor ? `text-${subTitleColor}` : "text-clr"} lg:text-[2.5rem]/[3rem] text-[2rem] font-plus font-bold`}
          heading={subTitle}
        />
      )}
    </div>
  );
};

export default SectionHeading;
