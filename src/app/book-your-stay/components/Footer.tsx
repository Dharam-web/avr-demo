import Image from "next/image";
import { Container } from "@/components/sectionComponants";
import { footerData } from "@/components/Footer/footerData";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="max_screen_width">
            <div className="bg-clr rounded-[24px] mx-4 box-shadow py-12 footer">
                <Container>
                    <div className="grid lg:grid-cols-9 md:grid-cols-5 items-center grid-cols-1 gap-4 md:gap-16">
                        <div className="md:col-span-3 space-y-4">
                            <div className="w-full max-w-[7rem] mx-auto relative aspect-square">
                                <Image
                                    src={footerData.logo}
                                    alt="logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* social links */}
                            <ul className="flex items-center justify-center gap-4 mt-4">
                                {footerData.ContactLink.slice(2).map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-clr bg-white rounded-full w-10 aspect-square flex items-center justify-center md:text-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                        >
                                            <span className="sr-only">{link.label}</span>
                                            {link.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-3 space-y-4 flex flex-col gap-2 text-white">
                            <h3 className="text-2xl font-semibold">Contact Us</h3>

                            <a
                                href="https://maps.app.goo.gl/jUxuRoek1LMLQaEG9"
                                target="_blank"
                                className="hover:underline"
                            >
                                <b>Anand Vardhan Resorts Village</b>, Ghurdaur PO Larakelo,
                                Kullu Naggar, Manali Road, Himachal Pradesh 175104
                            </a>

                            <a href="tel:+919317207373" className="hover:underline">
                                Call: <b>+91-93172-07373</b>
                            </a>

                            <a
                                href="mailto:sales@anandvardhanresorts.com"
                                className="hover:underline"
                            >
                                Email: sales@anandvardhanresorts.com
                            </a>
                        </div>
                        <div className="md:col-span-3 space-y-4 flex flex-col gap-2 items-center">
                            <div className="w-full relative">
                                <img
                                    src="/company-badge.png"
                                    alt="badge"
                                    className="object-cover max-w-[177px] h-[177px] mx-auto"
                                />
                            </div>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/+919317207374?text=Hello! I Would Like To Book a Stay."
                                className="bg-clr1 rounded-full text-white py-3 px-6 shadow-inner transition hover:scale-105"
                            >
                                BOOK NOW →
                            </a>
                        </div>

                        {/* <div className="lg:col-span-6 md:col-span-2  grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-12 gap-6">
                            {footerData.listOfLinks.map((list, index) => (
                                <div key={index} className="flex flex-col gap-4 col-span-2">
                                    <h3 className="text-2xl font-plus font-semibold text-white">
                                        {list.title}
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        {list.links.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className="text-white md:text-lg"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </Container>
            </div>
            <div className="py-4">
                <Container>
                    <div className="flex max-md:flex-col items-center justify-center text-dark md:text-lg">
                        <span className="">© 2026 Anand Vardhan Resorts</span>
                        <span className="mx-2 max-md:hidden">•</span>
                        <span className="">All rights reserved</span>
                        <span className="mx-2 max-md:hidden">•</span>
                        <span className="">
                            Powered by{" "}
                            <Link
                                href="https://www.internetmoguls.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark"
                            >
                                Internet Moguls
                            </Link>
                        </span>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
