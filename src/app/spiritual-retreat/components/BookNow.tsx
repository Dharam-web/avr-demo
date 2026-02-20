import Form from "@/components/form/Form";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { FC } from "react";

interface contactPropsTypes {
  title: string;
  description: string;
  src: string;
}
const BookNow: FC<contactPropsTypes> = ({ title, description, src }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full relative aspect-[4/4.4] md:aspect-[4/5]">
          <Image src={src} alt={title} fill className="object-cover rounded-2xl " />
        </div>
        <div className="w-full bg-clr flex flex-col gap-6 md:gap-8 px-6 py-14 rounded-2xl">
          <h2 className="md:text-[2.5rem] font-plus text-3xl font-semibold text-white">{title}</h2>
          <p className="text-white md:text-lg">{description}</p>
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default BookNow;
