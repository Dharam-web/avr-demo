import { Section, SectionWithContainer } from "@/components/sectionComponants";
import ContacForm from "./ContactForm";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import { contactPageData } from "./contactPageData";


export const metadata = {
  title: "Contact US - Anandvardhan Resorts",
  description: "Contact Anandvardhan Resorts at +91 93172 07373  and can contact us at sales@anandvardhanresorts.com or visit us at Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road, Himachal Pradesh 175104",
  keywords: "best resorts in manali resorts in naggar manali luxury resorts in manali",
};

const page = () => {
  return (
    <div>
      <Banner {...contactPageData.bannerData} />
      <ContacForm {...contactPageData.formData} />
      <Section>
        <SectionWithContainer sectionClassName="box-shadow">
          <h2
            className="lg:text-[2.5rem]/[3rem] text-[2rem] font-plus text-clr"
            dangerouslySetInnerHTML={{ __html: contactPageData.faq.title }}
          />
          {/* <div className="divide-y divide-light border-y border-light mt-8 md:mt-12">
            {contactPageData.faq.faqData.map((card, index) => (
              <Accordion key={index} {...card} index={index} iconColor="clr" />
            ))}
          </div> */}
          <Faq />
        </SectionWithContainer>
      </Section>
    </div>
  );
};

export default page;
