import { contact } from "../../../constent";
import { imageUrl } from "../../data/links";

export const spiritualPageData = {
  bannerData: {
    title: "Anand Vardhan Resort",
    description: "YOUR HEALING JOURNEY TO WELLNESS",
    images: ["/spiritual-retreat-bnr.jpg"],
  },
  aboutSpiritual: {
    title: "Channelise",
    subTitle: "Your Inner Energy",
    description:
      "Our holistic Innergise stays are transformative wellness retreats designed for those seeking renewal. Relax, deepen your awareness, restore balance, and reconnect with what matters most – your mind, body, and inner energy.",
    src: "/Enhance-Your-Inner-Energy.png",
    link: {
      href: contact.cta,
      label: "Contact Us",
    },
  },
  exclusivePackages: {
    title: "ANAND VARDHAN RESORTS, NAGGAR",
    subTitle: "Spiritual Retreat Packages",
    cards: [
      {
        src: "/Explore-Manali.jpg",
        title: "Spiritual Retreat (4 Days)",
        description:
          "Ideal for peace seekers, wellness enthusiasts & those seeking rejuvenation.",
        link: {
          href: "/contact-us",
          label: "Book Package",
        },
      },
      // {
      //   src: "/Spiritual-Retreat.jpg",
      //   title: "Lorem ipsum",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      //   link: {
      //     href: "/contact-us",
      //     label: "Book Package",
      //   },
      // },
    ],
  },
  packages: {
    title: "SELECT ANY PACKAGE FROM ABOVE",
    subTitle: "Costing for 2 Persons (Couple)",
    table: [
      {
        tableHeader: [
          { title: "Room Category" },
          { title: "Hotel", subtitle: "3 Nights, MAPA" },
          { title: "Cab", subtitle: "Incl. Patlikuhal Transfe Vrosl" },
          { title: "Volvo", subtitle: "Delhi–Manali–Delhi" },
          { title: "Total Package Cost" },
        ],
      },
      {
        tableBody: [
          {
            roomCategory: "Deluxe Room",
            hotel: "₹12,600",
            cab: "₹7,000",
            volvo: "₹4,000",
            totalPackageCost: "₹23,600",
          },
          {
            roomCategory: "Super Deluxe Room",
            hotel: "₹15,000",
            cab: "₹7,000",
            volvo: "₹4,000",
            totalPackageCost: "₹26,000",
          },
          {
            roomCategory: "Luxury Suite",
            hotel: "₹16,500",
            cab: "₹7,000",
            volvo: "₹4,000",
            totalPackageCost: "₹28,500",
          },
        ],
      },
    ],
    faq: [
      {
        ques: "*Package Inclusions:",
        ans: [
          "Volvo transfers (Kashmiri Gate ISBT – Manali – Kashmiri Gate ISBT)",
          "Cab transfers (Patlikuhal Bus Stop – Resort – Patlikuhal Bus Stop)",
          "Accommodation with MAPAI (Breakfast & Dinner)",
          "Private cab for sightseeing & excursions",
          "Guided tours & activities as per itinerary",
        ],
      },
      {
        ques: "*Package Exclusions:",
        ans: [
          "GST & applicable taxes",
          "Personal expenses (shopping, extra meals, etc.)",
          "Any activities not mentioned in the itinerary",
        ],
      },
    ],
  },
  programsToRestore: {
    title: "ANAND VARDHAN RESORT X RISHIBHUMI BRINGS",
    subTitle: "Holistic Programs To Restore Balance And Vitality",
    link: {
      href: "/contact-us",
      label: "Contact Us",
    },
    cards: [
      {
        src: imageUrl + "273A8482.webp",
        title: "Yoga & Meditation",
        icon: "/icons/journey.png",
        description:
          "Take a break from the chaos and find your center with Yoga and Meditation at Anand Vardhan Resorts. Breathe, relax, and let go – this is where your journey to peace begins.",
      },
      {
        src: imageUrl + "spiritual/relax5.webp",
        title: "Panchkarma",
        icon: "/icons/detox.png",
        description:
          "Ready to hit the reset button? Experience Panchkarma, a rejuvenating detox that clears your mind and body. At Anand Vardhan Resorts, we’ll help you feel refreshed, inside and out.",
      },
      {
        src: imageUrl + "relax3.webp",
        title: "Naturopathy",
        icon: "/icons/inner.png",
        description:
          "Feel the natural healing energy at Anand Vardhan Resorts with our Naturopathy treatments. Reconnect with the earth’s simple, yet powerful remedies to restore your balance and energy.",
      },
      {
        src: imageUrl + "spiritual/relax1.webp",
        title: "Physiotherapy",
        icon: "/icons/physiotherapy.png",
        description:
          "At AVR Physiotherapy, healing isn't just a process – it's a journey. With personalized care and expert hands, we help you reclaim strength, restore confidence, and embrace life’s every move again.",
      },
      {
        src: imageUrl + "spiritual/relax2.webp",
        title: "Acupressure",
        icon: "/icons/acupressure.png",
        description:
          "Acupuncture is like a reset button for your body and mind. Our team of experts works towards releasing tension, ease pain, and bring you back to a place of pure relaxation and vitality.",
      },
      {
        src: imageUrl + "spiritual/relax3.webp",
        title: "Guided Meditation",
        icon: "/icons/guided-meditation.png",
        description:
          "Guided meditation takes you on a peaceful journey within, where stillness and clarity await. Let our soothing guidance help you quiet the noise, release your worries, and reconnect with your inner calm.",
      },
      {
        src: imageUrl + "spiritual/relax7.webp",
        title: "Shirodhara",
        icon: "/icons/shirodhara.png",
        description:
          "At AVR, Shirodhara is more than a treatment – it’s a soulful escape. Let the gentle stream of warm oil soothe your mind, melt away stress, and bring you a sense of deep peace and balance.",
      },
    ],
  },
  ourPackages: {
    title: "Explore Our Transformative Wellness Packages",
    description:
      "Explore our carefully curated wellness packages, each designed to cater to your unique needs and help you rediscover balance and vitality.",
    cards: [
      {
        packageType: "Natural Detox & Cleanse ",
        days: "Prakritik Shuddhikaran (3 Days)",
        description:
          "A focused 3-day cleanse to eliminate toxins & refresh your body with personalized therapies, yoga & diet.",
        src: "/icons/detox.png",
        link: { href: "/contact-us", label: "Book Package" },
      },
      {
        packageType: "Journey to Wellness",
        days: "Aarogya Yatra (7 Days)",
        description:
          " A 7-day retreat combining yoga, meditation, and holistic treatments for stress relief and revitalization.",
        src: "/icons/journey.png",
        link: { href: "/contact-us", label: "Book Package" },
      },
      {
        packageType: "Inner Transformation",
        days: "Antarik Parivartan (10 Days)",
        description:
          "A 10-day immersive program with intensive therapies, consultations, and lifestyle guidance for deep healing.",
        src: "/icons/inner.png",
        link: { href: "/contact-us", label: "Book Package" },
      },
    ],
  },
  whyChooseUs: {
    title: "WHY CHOOSE US",
    subTitle: "Your journey to inner harmony begins here",
    description:
      "Escape the noise and rediscover your best self. At Anand Vardhan Resort, we blend ancient wisdom with luxurious comfort in a stunning mountain sanctuary, crafting a wellness experience that is uniquely and profoundly yours.",
    src: imageUrl + "well4.webp",
    cards: [
      {
        title: "Wellness Consultation & Personal Plan",
        description:
          "Wellness, Crafted for You Our certified wellness gurus don't just guide; they inspire your transformation with deep expertise and authentic passion",
        src: "/icons/chooseus.png",
      },
      {
        title: "Your Mountain Sanctuary ",
        description:
          "Breathe in the pure mountain air. Let the serene, powerful landscape be the backdrop to your profound relaxation and healing",
        src: "/icons/chooseus1.png",
      },
    ],
  },
  contactData: {
    title: "Time to unwind? Book Now ",
    description:
      "Step away from the rush and enter a world of serenity, where our expert therapists gently guide you on a path of deep relaxation and healing.",
    src: "/contact.jpg",
  },
};
