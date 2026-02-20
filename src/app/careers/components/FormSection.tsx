import { Container, Section } from "@/components/sectionComponants";
import JobForm from "./JobForm";

interface FormSectionProps {
  title: string;
  description: string;
  subTitle: string;
}
const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  subTitle,
}) => {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl md:px-4 space-y-2">
          <h2 className="md:text-3xl text-2xl text-clr font-plus text-center font-semibold">
            {title}
          </h2>
          <p className="md:text-xl text-center text-Light">{description}</p>
        </div>
      </Container>
      <Container className="bg-[#F9F9F1] rounded-3xl box-shadow">
        <div className="md:p-12 max-md:py-8 flex flex-col gap-4 md:gap-10 md:mt-14 mt-8">
          <h3 className="text-clr md:text-[3]/[48px] text-center text-2xl font-plus">
            {subTitle}
          </h3>
          <div className="w-full">
            <JobForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FormSection;
