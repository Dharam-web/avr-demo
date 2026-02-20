import { FillFacebook, FillInstagram, FillLinkedin } from "@/icons/icons";
import { contact } from "../../../constent";

export const contactPageData = {
  bannerData: {
    title: "Contact Details",
    src: "/contactBnr.jpg",
    listOfLinks: [
      {
        label:
          "Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road, Himachal Pradesh 175104",
        href: contact.addressUrl,
      },
      {
        label: "Email: " + contact.email,
        href: "mailto:" + contact.email,
      },
      {
        label: "Call: " + contact.phone,
        href: "tel:" + contact.phone,
      },
      {
        label: Object.keys(contact.socialContact)[0],
        href: contact.socialContact.facebook,
        icon: <FillFacebook />,
      },
      {
        label: Object.keys(contact.socialContact)[1],
        href: contact.socialContact.instagram,
        icon: <FillInstagram />,
      },
      {
        label: Object.keys(contact.socialContact)[2],
        href: contact.socialContact.linkedin,
        icon: <FillLinkedin />,
      },
    ],
  },
  formData: {
    title: "Anand Vardhan Resort",
    subTitle: "Have A Question For Us?",
    mapUrl: contact.mapUrl,
  },
  faq: {
    title: `Frequently Asked <b>Questions</b>`,
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
};


