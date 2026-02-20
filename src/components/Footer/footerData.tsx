import { contact } from "../../../constent";
import { FillLinkedin, CallIcon, FillInstagram, FillFacebook } from '@/icons/icons';

export const footerData = {
  logo: "/logo.png",
  title: "Anand Vardhan Resorts",
  ContactLink: [
    {
      label: contact.address,
      href: contact.addressUrl,
    },
    {
      label: contact.phone,
      href: "tel:" + contact.phone,
      icon: <CallIcon />,
    },
    {
      label: Object.keys(contact.socialContact)[0],
      href: Object.values(contact.socialContact)[0],
      icon: <FillFacebook />,
    },
    {
      label: Object.keys(contact.socialContact)[1],
      href: Object.values(contact.socialContact)[1],
      icon: <FillInstagram />,
    },
    {
      label: Object.keys(contact.socialContact)[2],
      href: Object.values(contact.socialContact)[2],
      icon: <FillLinkedin />,
    },
  ],
  listOfLinks: [
    {
      title: "Quick Links",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About Us",
          href: "/about-us/",
        },
        {
          label: "Rooms & Suites",
          href: "/rooms-suites/",
        },
        {
          label: "Gallery",
          href: "/gallery/",
        },
        {
          label: "Contact Us",
          href: "/contact-us/",
        },
        {
          label: "Careers",
          href: "/careers/",
        }
      ],
    },
    {
      title: "Explore",
      links: [
        {
          label: "Dining",
          href: "/dining/",
        },
        {
          label: "Things To Do",
          href: "/things-to-do/",
        },
        {
          label: "Destination Wedding",
          href: "/destination-wedding/",
        },
        {
          label: "Spiritual Retreat",
          href: "/spiritual-retreat/",
        },
        {
          label: "Nearby Places",
          href: "/nearby-places/",
        },
        {
          label: "Blog",
          href: "/blog/",
        },
      ],
    },
    {
      title: "Policies",
      links: [
        {
          label: "Check In Policy",
          href: "/check-in-policy/",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy/",
        },
        {
          label: "Terms & Conditions",
          href: "/terms-and-conditions/",
        },
      ],
    },
  ],
};
