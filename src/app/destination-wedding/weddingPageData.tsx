import { imageUrl } from "@/data/links";
import { contact } from "../../../constent";

export const weddingPageData = {
  bannerData: {
    title: "Destination Wedding",
    images: ["/wedding-bnr.png"],
  },
  aboutWeddingData: {
    src: "/weddingimg.png",
    title: "WE CREATE . YOU CELEBRATE",
    subTitle: "Your Forever Starts Here",
    description: `Imagine saying "I do" against the breathtaking backdrop of snow-capped Himalayan peaks and verdant valleys – welcome to Anand Vardhan Resort, Manali's premier luxury wedding destination. Nestled between Kullu and Manali in the heart of Himachal Pradesh, our exclusive mountain wedding resort transforms your dream celebration into an unforgettable reality. From intimate hill station weddings surrounded by lush green lawns to grand destination wedding celebrations that can host thousands of guests, every moment becomes a picture-perfect memory etched against nature's most stunning canvas. Our dedicated wedding specialists craft bespoke experiences that blend traditional Indian wedding ceremonies with modern luxury amenities, ensuring your special day is nothing short of magical. Whether you're planning a romantic mountain wedding, a lavish destination wedding in Himachal Pradesh, or an enchanting outdoor ceremony under starlit Himalayan skies, Anand Vardhan Resort offers the perfect venue where dreams become forever memories.`,
    links: [
      {
        href: "tel:" + contact.phone,
        label: "Call:" + contact.phone,
      },
      {
        href: "/contact-us/",
        label: "Contact Us",
      },
    ],
  },
  weddingServices: {
    title: "Featured Wedding Services",
    cards: [
      {
        src: "/icons/decoration.png",
        alt: "Decorations",
        name: "Decorations",
      },
      {
        src: "/icons/hospitality.png",
        alt: "Hospitality",
        name: "Hospitality",
      },
      {
        src: "/icons/entertainment.png",
        alt: "Entertainment",
        name: "Entertainment",
      },
      {
        src: "/icons/photography.png",
        alt: "Photography",
        name: "Photography",
      },
      // {
      //   src: "/icons/hygiene.png",
      //   alt: "Hygiene",
      //   name: "Hygiene",
      // },
      {
        src: "/icons/vegmenu.png",
        alt: "Pure Veg Menu",
        name: "Pure Veg Menu",
      },
      {
        src: "/icons/branding.png",
        alt: "Branding",
        name: "Branding",
      },
      {
        src: "/icons/safety.png",
        alt: "Safety",
        name: "Safety",
      },
    ],
  },
  offer: {
    title: "What We Offer",
    cards: [
      {
        src: imageUrl + "destination/offer1.webp",
        alt: "Pre-Wedding Events",
      },
      {
        src: imageUrl + "destination/offer2.webp",
        alt: "Haldi Ceremony ",
      },
      {
        src: imageUrl + "destination/offer3.webp",
        alt: "Mehendi Ceremony ",
      },
      {
        src: imageUrl + "destination/offer4.webp",
        alt: "Engagement",
      },
      {
        src: imageUrl + "destination/offer5.webp",
        alt: "Reception",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    src: "/weddingimg2.png",
    faqData: [
      {
        id: 1,
        ques: "Are there any advantages/perks of having a destination wedding?",
        ans: "Today, many couples choose a more intimate gathering at a place they love over traditional (and expensive) weddings. Having a destination wedding allows couples to extend their celebration from four hours to four days, while creating memories that will last a lifetime with their friends and family. Destination weddings can also be more affordable for couples since they tend to be more intimate than traditional weddings.",
      },
      {
        id: 2,
        ques: "Isn't planning a destination wedding less stressful than a traditional, at-home wedding?",
        ans: "Planning a destination wedding can be less stressful than a traditional at-home wedding because it typically involves a smaller guest list and resorts often offer all-inclusive packages with on-site coordinators. These planners handle many of the logistics, from catering to décor, reducing decision fatigue. The setting itself serves as natural décor, cutting down on extras. While travel coordination is required, the overall simplicity and built-in vacation vibe often make the process more enjoyable and relaxed.",
      },
      {
        id: 3,
        ques: "Can I plan my destination wedding within 3 months?",
        ans: "Yes, you can plan your destination wedding within 3 months with Anand Vardhan Resort's expert support. Their experienced in-house planners streamline every detail, from décor and catering to guest accommodations. The resort offers customizable wedding packages, saving you time and stress. With a scenic venue, on-site services, and a dedicated team handling logistics, you can focus on enjoying the moment. Anand Vardhan Resort makes last-minute destination weddings smooth, stylish, and memorable.",
      },
    ],
  },
  addCardData: {
    title: "Discover the best of Himachal Pradesh tourism from Anand Vardhan Resort",
    description:
      "Your perfect gateway to Naggar's top attractions, heritage sites, and natural wonders in the heart of Kullu Valley.",
    link: {
      href: contact.cta,
      label: "Book Now",
    },
  },
};
