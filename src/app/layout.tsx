import { Call, Navbar } from "@/components";
import type { Metadata } from "next";
import Script from "next/script";
import "./animation.scss";
import "./globals.scss";

import Footer from "@/components/Footer/Footer";
import AmenitiesPopUp from "@/components/pop-up/AmenitiesPopUp";
import { WebsiteProvider } from "@/context/WebsiteContext";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import FullscreenImagePopup1 from '@/components/pop-up/FullscreenImagePopup1';
import ConditionalLayout from "@/components/ConditionalLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Best Resorts in Manali | Luxury Resort in Naggar",
  description:
    "Experience the finest luxury resorts in Manali at Anand Vardhan, Naggar. Breathtaking views, world-class amenities & warm hospitality. Book your stay today!",
  keywords:
    "best resorts in manali resorts in naggar manali luxury resorts in manali",
  alternates: {
    canonical: "https://anandvardhanresorts.com",
    languages: {
      "en-US": "https://anandvardhanresorts.com",
    },
  },
  openGraph: {
    title: "Best Resorts in Manali | Luxury Resort in Naggar",
    description:
      "Experience the finest luxury resorts in Manali at Anand Vardhan, Naggar. Breathtaking views, world-class amenities & warm hospitality. Book your stay today!",
    images: [
      {
        url: "https://anandvardhanresorts.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Manali Retreat Resort",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="AI8uiz0tsMf569ZnqOVsiTjO-HxasZqwK77F_sYcLrA"
        />
        <Script
          type="text/javascript"
          id="ycloud-script"
          strategy="afterInteractive"
        >
          {`;(function (m, ei, q, i, a, j, s) {
        m[i] =
          m[i] ||
          function () {
            ;(m[i].a = m[i].a || []).push(arguments)
          }
        ;(j = ei.createElement(q)), (s = ei.getElementsByTagName(q)[0]);
        j.async = true;
        j.crossorigin = true;
        j.charset = 'UTF-8';
        j.src = 'https://sdk.ycloud.com/growth-tool/install.js';
        s.parentNode.insertBefore(j, s);
        j.onload = function () {
          window._YCLOUD.init('E89F5F2EAD2ADBCFFBBBFD32EBD5DC0A')
        };
        })(window, document, 'script', '_YCLOUD')
        `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://anandvardhanresorts.com/#organization",
                  name: "Anand Vardhan Resort",
                  url: "https://anandvardhanresorts.com/",
                  logo: "https://anandvardhanresorts.com/assets/images/logo.png",
                  sameAs: [
                    "https://www.facebook.com/anandvardhanresorts",
                    "https://www.instagram.com/anandvardhanresorts",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+91-XXXXXXXXXX",
                      contactType: "reservations",
                      areaServed: "IN",
                      availableLanguage: ["English", "Hindi"],
                    },
                  ],
                },

                {
                  "@type": "WebSite",
                  "@id": "https://anandvardhanresorts.com/#website",
                  url: "https://anandvardhanresorts.com/",
                  name: "Anand Vardhan Resort",
                  publisher: {
                    "@id": "https://anandvardhanresorts.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://anandvardhanresorts.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },

                {
                  "@type": "LodgingBusiness",
                  "@id": "https://anandvardhanresorts.com/#lodging",
                  name: "Anand Vardhan Resort",
                  description:
                    "Anand Vardhan Resort — comfortable rooms, scenic location, event & wedding facilities, dining and spa services.",
                  url: "https://anandvardhanresorts.com/",
                  telephone: "+91-XXXXXXXXXX",
                  email: "info@anandvardhanresorts.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Replace with street address",
                    addressLocality: "Replace City",
                    addressRegion: "Replace State",
                    postalCode: "XXXXX",
                    addressCountry: "IN",
                  },
                  image: [
                    "https://anandvardhanresorts.com/assets/images/hero-1.jpg",
                    "https://anandvardhanresorts.com/assets/images/room-1.jpg",
                  ],
                  priceRange: "$$",
                  currenciesAccepted: "INR",
                  sameAs: "https://anandvardhanresorts.com/",
                },

                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anandvardhanresorts.com/#breadcrumbs",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://anandvardhanresorts.com/",
                    },
                  ],
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/#home",
                  url: "https://anandvardhanresorts.com/",
                  name: "Home - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  breadcrumb: {
                    "@id": "https://anandvardhanresorts.com/#breadcrumbs",
                  },
                  description:
                    "Welcome to Anand Vardhan Resort — comfortable rooms, scenic setting, dining, spa and event facilities.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/about/#about",
                  url: "https://anandvardhanresorts.com/about/",
                  name: "About Us - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Learn about Anand Vardhan Resort, our history, mission and hospitality philosophy.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/rooms/#rooms",
                  url: "https://anandvardhanresorts.com/rooms/",
                  name: "Rooms & Suites - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description: "Explore our room types, amenities and rates.",
                },

                {
                  "@type": "WebPage",
                  "@id":
                    "https://anandvardhanresorts.com/facilities/#facilities",
                  url: "https://anandvardhanresorts.com/facilities/",
                  name: "Facilities & Amenities - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Discover facilities including pool, gym, spa, dining and event spaces.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/gallery/#gallery",
                  url: "https://anandvardhanresorts.com/gallery/",
                  name: "Photo Gallery - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Browse photos of our property, rooms, events and surroundings.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/packages/#packages",
                  url: "https://anandvardhanresorts.com/packages/",
                  name: "Packages & Offers - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Special stay packages, seasonal offers and event deals.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/events/#events",
                  url: "https://anandvardhanresorts.com/events/",
                  name: "Events & Weddings - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Information on hosting weddings, corporate events and private parties.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/dining/#dining",
                  url: "https://anandvardhanresorts.com/dining/",
                  name: "Dining & Restaurant - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "On-site restaurant, menus, and banquet catering options.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/spa/#spa",
                  url: "https://anandvardhanresorts.com/spa/",
                  name: "Spa & Wellness - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description: "Spa services, therapies and wellness packages.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/booking/#booking",
                  url: "https://anandvardhanresorts.com/booking/",
                  name: "Book Now - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Secure online booking and reservation information.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/contact/#contact",
                  url: "https://anandvardhanresorts.com/contact/",
                  name: "Contact Us - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description: "Contact details, map and enquiry form.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/policies/#policies",
                  url: "https://anandvardhanresorts.com/policies/",
                  name: "Policies - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Booking terms, cancellation policy and house rules.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/location/#location",
                  url: "https://anandvardhanresorts.com/location/",
                  name: "Location & How to Reach - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description: "Maps, directions and nearby attractions.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/blog/#blog",
                  url: "https://anandvardhanresorts.com/blog/",
                  name: "Blog - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description:
                    "Travel tips, property news and local attraction guides.",
                },

                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/careers/#careers",
                  url: "https://anandvardhanresorts.com/careers/",
                  name: "Careers - Anand Vardhan Resort",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  description: "Current openings and application information.",
                },
              ],
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZX33V7B"
          // strategy="afterInteractive"
          strategy="lazyOnload"
        />

        <Script
          id="google-analytics"
          // strategy="afterInteractive"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y5YZX33V7B');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T8NF9RC');
          `}
        </Script>

        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
          defer
        ></script>

        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${montserrat.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8NF9RC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <WebsiteProvider>
          {/* <Navbar /> */}
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          {/* <Footer /> */}
          <Call callNumber="919317207373" />
          <FullscreenImagePopup1 />
          <AmenitiesPopUp />
        </WebsiteProvider>
      </body>
    </html>
  );
}

