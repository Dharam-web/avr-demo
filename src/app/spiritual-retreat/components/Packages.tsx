import { Accordion } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface PackagesPropsTypes {
  title: string;
  subTitle: string;
  table: {
    tableHeader?: { title: string; subtitle?: string }[];
    tableBody?: {
      roomCategory: string;
      hotel: string;
      cab: string;
      volvo: string;
      totalPackageCost: string;
    }[];
  }[];
  faq: {
    ques: string;
    ans: string[];
  }[];
}
const Packages: React.FC<PackagesPropsTypes> = ({
  table,
  faq,
  title,
  subTitle,
}) => {
  return (
    <SectionWithContainer sectionClassName="our-packages">
      <span className="span"></span>
      <div className="flex flex-col gap-8 md:gap-14">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          textCenter
          wrapperClassName="gap-2"
          subTitleColor="white"
        />
        <table className="border capitalize shadow-lg w-full">
          {table.map((item, index) => {
            return (
              <tbody key={index}>
                <tr className="border border-solid border-clr">
                  {item.tableHeader?.map((item, index) => {
                    return (
                      <th
                        key={index}
                        className="lg:p-3 p-1 text-center lg:text-lg text-[.75rem] font-semibold text-clr border border-solid bg-clr2 border-clr"
                      >
                        {item.title}
                        {item.subtitle && (
                          <span className="block text-sm font-medium">
                            {item.subtitle}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
                {item.tableBody?.map((item, index) => {
                  return (
                    <tr key={index} className="text-Light bg-white">
                      <td className="lg:p-3 p-2 text-center border border-solid border-clr">
                        {item.roomCategory}
                      </td>
                      <td className="lg:p-3 p-2 text-center border border-solid border-clr">
                        {item.hotel}
                      </td>
                      <td className="lg:p-3 p-2 text-center border border-solid border-clr">
                        {item.cab}
                      </td>
                      <td className="lg:p-3 p-2 text-center border border-solid border-clr">
                        {item.volvo}
                      </td>
                      <td className="lg:p-3 p-2 text-center border border-solid border-clr">
                        {item.totalPackageCost}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
        <div className="divide-y divide-light border-y border-light">
          {faq.map((item, index) => {
            return (
              <Accordion key={index} {...item} index={index} id={index + 1} questionClassName="text-white" iconColor="text-white" />
            );
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Packages;
