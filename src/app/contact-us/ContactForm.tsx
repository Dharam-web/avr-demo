import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";
import EnquiryForm from "./components/EnquireForm";

interface formDataPropsTypes {
  title: string;
  subTitle: string;
  mapUrl: string;
}
const ContactForm: FC<formDataPropsTypes> = ({ title, subTitle, mapUrl }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box-shadow px-6 py-10 space-y-6">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleClassName="underline-none"
            titleColor="clr"
          />
          {/* <Form /> */}
          <div className="py-4">
            <EnquiryForm />
            {/* <iframe
              src="https://login.hotelgrowthsuite.com/widget/form/693bf7a7d055a"
              // style="width:100%;height:600px;border:none;border-radius:3px"
              style={{
                width: "100%",
                height: "440px",
                border: "none",
                // borderRadius: "3px",
              }}
              id="inline-693bf7a7d055a"
              data-form-name="Contact Us"
              data-layout-iframe-id="inline-693bf7a7d055a"
              data-form-id="693bf7a7d055a"
              data-height="600"
              title="Contact Us"
              className=""
            ></iframe> */}
          </div>
        </div>
        <div className="w-full max-md:aspect-square">
          <LazyLoadedMap src={mapUrl} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactForm;
