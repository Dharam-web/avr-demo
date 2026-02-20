import { contact } from "../../../constent";
import { blogsData } from "./[slug]/blogsData";

export const blogPageData = {
  bannerData: {
    title: "Our Blogs",
  },
  cards: blogsData.map((blog) => ({
    src: blog.image,
    title: blog.title,
    description: blog.description,
    date: blog.date,
    link: { href: `/blog/${blog.slug}`, label: "Read More" },
  })),
  addCardData: {
    title:
      "Discover the best of Himachal Pradesh tourism from Anand Vardhan Resort",
    description:
      "Your perfect gateway to Naggar's top attractions, heritage sites, and natural wonders in the heart of Kullu Valley.",
    link: {
      href: contact.cta,
      label: "Book Now",
    },
  },
};
