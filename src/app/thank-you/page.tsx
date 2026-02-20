"use client";
import Image from "next/image";
import { SocialMediaButton } from "./SocialMediaButton";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();
  return (
    <main className="flex justify-center items-center w-full bg-stone-100 min-h-screen">
      <section className="flex justify-between items-center px-28 py-48 max-md:px-14 max-md:py-24 max-sm:flex-col max-sm:gap-12 gap-14 max-sm:px-6 max-sm:py-12">
        <Image
          src="logo.png"
          alt="LOGO footer Image"
          width={370}
          height={370}
          className="max-lg:w-[300px] max-lg:h-[300px] max-sm:w-[250px] max-sm:h-[250px]"
        />
        <article className="flex flex-col gap-10 justify-center items-center w-[600px] max-md:w-[450px] max-sm:w-full">
          <div className="flex flex-col gap-6 justify-center items-center w-full">
            <header className="flex flex-col gap-2 items-center w-full">
              <h1 className="text-2xl leading-8 text-center text-lime-900 uppercase max-md:text-xl max-sm:text-lg">
                Thank you for submitting
              </h1>
              <h2 className="text-5xl text-center leading-[56px] text-neutral-700 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
                We will get back to you shortly!
              </h2>
            </header>
            <p className="text-xl font-light leading-7 text-center text-stone-500 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
              Whether you&#39;re looking to book a retreat, inquire about our
              programs, or simply want to know more about Anand Vardhan Resorts,
              our team is here to assist you.
            </p>
          </div>
          <button
            className="gap-4 p-4 text-lg font-medium leading-6 text-white bg-lime-900 rounded-lg cursor-pointer hover:bg-lime-800 transition-colors"
            aria-label="Go to home page"
            onClick={() => router.push("/")}
          >
            GO TO HOME PAGE
          </button>
          <nav
            className="flex gap-6 items-center"
            aria-label="Social media links"
          >
            <SocialMediaButton
              icon={<FacebookIcon />}
              href="http://facebook.com/AnandVardhanResortsManali/"
              label="Visit our Facebook page"
            />
            <SocialMediaButton
              icon={<InstagramIcon />}
              href="https://www.instagram.com/anandvardhanresorts/"
              label="Visit our Instagram page"
            />
            <SocialMediaButton
              icon={<LinkedInIcon />}
              href="https://www.linkedin.com/company/anand-vardhan-resort/"
              label="Visit our LinkedIn page"
            />
          </nav>
        </article>
      </section>
    </main>
  );
}
