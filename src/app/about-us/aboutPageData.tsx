import { imageUrl } from "@/data/links";
import {
  BookingRatingIcon,
  ExpediaRatingIcon,
  HotelRatingIcon,
  TripAdvisorRatingIcon,
} from "@/icons/icons";
import { contact } from "../../../constent";

export const aboutPageData = {
  bannerData: {
    images: [
      imageUrl + "DSC_9716.webp",
    ],
    title: "About Us",
  },
  aboutUsData: {
    title: "About Anand Vardhan Resort",
    description: [
      "Situated in the heart of Naggar with an elevation more than 4000 feet above sea level, the property has an unbeatable location. The resort is located 15 km drive away from the bustle of Manali town and yet close to its heart.",
      "We take you to a wonderland of breeze, leaves, and stars. Wake up feeling fresh and breezy every morning -experience waking up right in the heart of India’s wealthiest woodlands and reconnecting with your soul. With the sound of chirping birds, and the snow-clad mountains of the Dhauladhar and Pir Panjal range, this resort will enchant you with the holy vibes away from the hustle and bustle of the busy town of Manali. Located around apple orchards and surrounded by Pine trees we provide top-notch hospitality. Experience the wonders of nature with delicious vegetarian cuisine at Anand Vardhan.",
    ],
    link: {
      label: "Call for reservation: +91 93172 07373",
      href: "tel:+919317207373",
    },
    images: ["/DSC02744.png", imageUrl + "IMG_8258.webp", "/DSC03262.png"],
  },
  onlinePlatforms: {
    title: "Highest Ratings On Online Platforms",
    cards: [
      {
        icon: <TripAdvisorRatingIcon />,
        partnerName: "TripAdvisor",
        ratings: "4.5/5",
      },
      {
        icon: <BookingRatingIcon />,
        partnerName: "Booking.com",
        ratings: "9.5/10",
      },
      {
        icon: <HotelRatingIcon />,
        partnerName: "Hotels.com",
        ratings: "9.7/10",
      },
      {
        icon: <ExpediaRatingIcon />,
        partnerName: "Expedia",
        ratings: "9.6/10",
      },
    ],
  },
  ourService: {
    title: "OUR SERVICES",
    subTitle: "Resort Facilities",
    cards: [
      {
        src: imageUrl + "facilities/parking.webp",
        alt: "Parking space icon",
        name: "PARKING SPACE",
      },
      {
        src: imageUrl + "facilities/roomservice.webp",
        alt: "Room service icon",
        name: "ROOM SERVICE",
      },
      {
        src: imageUrl + "facilities/wifi.webp",
        alt: "Free WiFi icon",
        name: "FREE WIFI",
      },
      {
        src: imageUrl + "facilities/conferenceroom.webp",
        alt: "Conference room icon",
        name: "CONFERENCE ROOM",
      },
      {
        src: imageUrl + "facilities/cafe.webp",
        alt: "Cafe icon",
        name: "CAFE",
      },
      {
        src: imageUrl + "facilities/vegrestaurant.webp",
        alt: "Veg Restaurant icon",
        name: "VEG RESTAURANT",
      },
      {
        src: imageUrl + "facilities/mountainview.webp",
        alt: "Mountain View icon",
        name: "MOUNTAIN VIEW",
      },
      {
        src: imageUrl + "facilities/electricity.webp",
        alt: "24*7 Electricity icon",
        name: "24*7 ELECTRICITY",
      },
    ],
  },
  experiences: {
    title: "Experience",
    subTitle: "Anand Vardhan Resort",
    cards: [
      {
        src: "/destination-wedding.png",
        title: "Destination Wedding",
      },
      {
        src: "/spiritual-retreat.png",
        title: "Spiritual Retreat",
      },
      {
        src: imageUrl + "IMG_8155.webp",
        title: "Pure Vegetarian Dining",
      },
    ],
  },
  addCardData: {
    title:
      "Book your stay with us!",
    description:
      "Create unforgettable memories in Anand Vardhan Resort. Your dream vacation starts here.",
    link: {
      href: contact.cta,
      label: "Book Now",
    },
  },
};
