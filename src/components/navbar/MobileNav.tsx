"use client";
import { NavLink } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathName = usePathname();
  if (isOpen)
    return (
      <header
        className={`fixed top-19 w-full h-dvh bg-[#F9F9F1]/100 z-[9999999999999] transform transition-all duration-300 ease-in-out  ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}
      >
        <nav>
          <ul className="flex flex-col gap-4 p-8">
            {NavLink.map((link) => (
              <li key={link.id} className="w-full">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full block text-[#2F4B26] hover:text-tertiary capitalize text-[24px] max-md:text-[20px] transition-all duration-300 ease-in-out playfair ${link.href === pathName ? "text-tertiary" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
};

export default MobileNav;
