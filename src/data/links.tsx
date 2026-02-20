import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import {
  FillFacebook,
  FillInstagram,
  OutLineLocation,
  OutlineMail,
  OutLinePhone,
} from "@/icons/icons";

// export const imageUrl =
//   "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/avr/";

export const imageUrl =
  "/avr/";

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "home",
    href: "/",
  },
  // {
  //   id: 2,
  //   label: "About Us",
  //   href: "/about-us/",
  // },
  {
    id: 3,
    label: "Rooms & Suites",
    href: "/rooms-suites/",
  },
  {
    id: 6,
    label: "Dining",
    href: "/dining/",
  },

  {
    id: 10,
    label: "Nearby Places",
    href: "/nearby-places/",
  },
  {
    id: 9,
    label: "Spiritual Retreat",
    href: "/spiritual-retreat/",
  },
  {
    id: 4,
    label: "Gallery",
    href: "/gallery/",
  },
  {
    id: 7,
    label: "Destination Wedding",
    href: "/destination-wedding/",
  },
  {
    id: 8,
    label: "Things To Do",
    href: "/things-to-do/",
  },
  {
    id: 5,
    label: "Contact Us",
    href: "/contact-us/",
  },
  {
    id: 6,
    label: "Blog",
    href: "/blog/",
  },
  // {
  //   id: 11,
  //   label: "Check In Policy",
  //   href: "/check-in-policy/",
  // },
  // {
  //   id: 12,
  //   label: "Privacy Policy",
  //   href: "/privacy-policy/",
  // },
  // {
  //   id: 13,
  //   label: "Terms & Conditions",
  //   href: "/terms-conditions/",
  // },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/people/Burger-Gully-Kolkata/61559753117983/#",
  },
  {
    id: 2,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/burgergullykolkata/?hl=en",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "About",
        href: "#about",
      },
      {
        id: 2,
        label: "Features",
        href: "#features",
      },
      {
        id: 3,
        label: "Our Featured Dishes",
        href: "#our_featured_dishes",
      },
      {
        id: 4,
        label: "Reviews",
        href: "#reviews",
      },
      {
        id: 5,
        label: "Gallery",
        href: "#gallery",
      },
      {
        id: 6,
        label: "Contact Us",
        href: "#contact_us",
      },
    ],
  },
  {
    id: 2,
    title: "get in touch",
    links: [
      {
        id: 1,
        icon: <OutLineLocation />,
        title: "address",
        label: "Unit S-41, 2nd Floor, Baani Square, Sector 50, Gurgaon",
        href: "https://maps.app.goo.gl/9di9cekSU5ygmrhc6",
      },
      {
        id: 3,
        icon: <OutLinePhone />,
        title: "call",
        label: "+91 93559 31110",
        href: "tel:+91 93559 31110",
      },
      {
        id: 2,
        icon: <OutlineMail />,
        title: "email",
        label: "yakumi.india@gmail.com",
        href: "mailto:yakumi.india@gmail.com",
      },
    ],
  },
  {
    id: 3,
    title: "opening hours",
    links: [
      {
        id: 1,
        title: "Dine-in",
        label: "Mon to Sun",
        href: "12PM – 11PM",
      },
      {
        id: 2,
        title: "Online",
        label: "Mon to Sun",
        href: "12PM – 12AM",
      },
    ],
  },
];
