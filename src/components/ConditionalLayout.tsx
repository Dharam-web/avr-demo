"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components";
import Footer from "@/components/Footer/Footer";
import Header from "@/app/book-your-stay/components/Header";
import Footer1 from "@/app/book-your-stay/components/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // check using pathname directly
    const isBookYourStay = pathname.includes("/book-your-stay");

    return (
        <>
            {!isBookYourStay && <Navbar />}
            {isBookYourStay && <Header />}
            {children}
            {!isBookYourStay && <Footer />}
            {isBookYourStay && <Footer1 />}
        </>
    );
}