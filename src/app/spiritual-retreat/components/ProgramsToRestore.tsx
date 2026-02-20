import { ProgramsToRestorePropsTypes } from "@/@types/types";
import { Container, Section } from "@/components/sectionComponants";
import { ProgramsToRestoreSlider } from "@/components/slider";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Link from "next/link";
import { FC } from "react";

const ProgramsToRestore: FC<ProgramsToRestorePropsTypes> = ({
    title,
    subTitle,
    cards,
    link,
}) => {
    return (
        <Section>
            <div className="bg-clr2 mx-2 rounded-[48px] px-4 py-10 md:py-14">
                <Container>
                    <div className="flex flex-col gap-10 md:gap-14">
                        <SectionHeading
                            title={title}
                            subTitle={subTitle}
                            textCenter
                            wrapperClassName="gap-4 max-w-2xl mx-auto"
                        />
                        <ProgramsToRestoreSlider programs={cards} />
                        <Link href={link.href} className="mx-auto md:w-fit px-8 py-4 rounded-full flex items-center justify-center w-full gap-2 bg-clr1 text-white font-medium hover:bg-clr/90 transition-colors duration-300">
                            {link.label}
                            <span><ArrowUpIcon /></span>
                        </Link>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default ProgramsToRestore;
