import { BannerWithOnlyText } from "@/components/Banner";
import { careerData } from "./careerData";
import FormSection from "./components/FormSection";

export default function CareersPage() {
  return (
    <main>
      <BannerWithOnlyText {...careerData.banner} />
      <FormSection {...careerData.formData} />
    </main>
  );
}
