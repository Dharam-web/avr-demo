import { imageUrl } from "@/data/links";
import { contact } from "../../../constent";

export const diningPageData = {
  bannerData: {
    title: "Vegetarian Culinary Experience",
    images: [imageUrl + "IMG_8160.webp"],
  },
  pureVegSectionData: {
    title: "PURE FLAVORS, PURE JOY",
    subTitle: "A Soulful Journey Through Authentic Vegetarian Cuisine",
    cards: [
      {
        images: [
          imageUrl + "IMG_8203.webp",
          imageUrl + "IMG_8160.webp",
          imageUrl + "IMG_8158.webp",
        ],
        title: "Govind Prasadam Pure Veg Restaurant",
        description:
          "Govind Prasadam is where comfort meets flavour. Step inside to find stone-clad walls, soft golden light, and the tempting aroma of fresh herbs and spices. Our menu brings together the best of traditional and modern vegetarian cuisine—from hearty North Indian thalis rich with flavour to inventive fusion plates that surprise the palate. It’s a space to gather, share stories, and enjoy slow, soulful meals that leave you feeling nourished and happy.",
      },
      {
        images: [
          imageUrl + "IMG_8354.webp",
          imageUrl + "IMG_8377.webp",
          imageUrl + "IMG_8370.webp",
          imageUrl + "IMG_8380.webp",
        ],
        title: "Open Air Cafe",
        description:
          "For those who love food with a view, the Open Air Café offers a dining experience like no other. Surrounded by apple orchards and mountain greenery, this breezy spot is perfect for sunlit breakfasts, lazy afternoon lunches, or romantic dinners under a starlit sky. Here, every meal feels fresh and alive. Sip on hot chai, bite into oven-fresh treats, or indulge in a generous festive spread—all while breathing in the crisp Himalayan air.  Nature sets the scene; our chefs add the flavour.",
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
