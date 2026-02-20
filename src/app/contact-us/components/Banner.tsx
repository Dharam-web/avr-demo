import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";

interface BannerDataProps {
  title: string;
  src: string;
  listOfLinks: {
    label: string;
    href: string;
    icon?: JSX.Element;
  }[];
}
const Banner: FC<BannerDataProps> = ({ title, src, listOfLinks }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:m-4 after:absolute after:inset-0 after:z-[-1] after:box-shadow">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-6 items-center max-md:px-4">
        <div className="md:col-span-3 relative w-full md:aspect-[4/2.5] aspect-square">
          <Image
            src={src}
            alt={title}
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="md:text-5xl text-2xl text-clr font-plus capitalize font-bold">
            {title}
          </h1>
          <ul className="flex flex-col gap-4 mt-4">
            {listOfLinks.slice(0, 3).map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl text-clr font-plus font-semibold mt-4">Follow us</h2>
          <ul className="flex gap-4 mt-4">
            {listOfLinks.slice(3).map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center rounded justify-center aspect-square w-[2.5rem] bg-clr text-white"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
