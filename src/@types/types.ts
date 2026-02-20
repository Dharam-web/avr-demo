import { JSX } from "react";

export interface navLinkProps {
  id: number;
  label: string;
  href: string;
}

export interface socialLinkProps {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface footerLinkProps {
  id: number;
  title: string;

  links: {
    id: number;
    icon?: JSX.Element;
    title?: string;
    label: string;
    href: string;
  }[];
}

export interface AboutUsDataProps {
  title: string;
  subtitle: string;
  desc: string;
  src: string;
  label: string;
  href: string;
  index?: number;
}

export interface GalleryDataProps {
  title: string;
  images: string[];
}

// home page props types

export interface BannerPropsTypes {
  images?: string[];
  title: string;
  subTitle?: string;
  description?: string;
}

export interface AboutUsPropsTypes {
  title: string;
  subtitle: string;
  desc: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface RoomsAndSuitesPropsTypes {
  title: string;
  subTitle?: string;
  description?: string;
  cards: {
    title: string;
    description?: string;
    images: string[];
    facilityList?: (string | undefined)[];
    viewAllAmenities?: {
      amenityType: string;
      amenities: string[];
    }[];
    link: {
      href: string;
      label: string;
    };
  }[];
}

export interface ExperiencesDataPropsTypes {
  title: string;
  subTitle: string;
  cards: {
    src: string;
    title: string;
  }[];
}

export interface WhyChooseUsPropsTypes {
  title: string;
  subTitle: string;
  description: string;
  cards: {
    icon: JSX.Element;
    title: string;
  }[];
}

export interface OurCulinaryOfferingsPropsTypes {
  title: string;
  subTitle: string;
  link: {
    href: string;
    label: string;
  };
  cards: {
    src: string;
    description: string;
  }[];
}

export interface OnlinePlatformsPropsTypes {
  title: string;
  defaultPadding?: boolean;
  cards: {
    icon: JSX.Element;
    partnerName: string;
    ratings: string;
  }[];
}

export interface TestimonialsPropsTypes {
  title: string;
  subTitle: string;
  reviewPartners: {
    name: string;
    logo: string;
    rating: string;
    href: string;
  }[];
  cards: {
    id: number;
    link: string;
    logo: string;
    rating: number;
    name: string;
    review: string;
  }[];
}

export interface AddCardDataPropsTypes {
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}

export interface NearByPlacesSliderPropsTypes {
  cards: {
    src: string;
    title: string;
    description: string;
  }[];
}

export interface pureVegSectionDataPropsTypes {
  title: string;
  subTitle: string;
  cards: {
    images: string[];
    title: string;
    description: string;
  }[];
}

export interface WeddingServicesPropsTypes {
  title: string;
  cards: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export interface OfferSliderPropsTypes {
  title: string;
  cards: {
    src: string;
    alt: string;
  }[];
}

export interface AboutWeddingPropsTypes {
  src: string;
  title: string;
  subTitle: string;
  description: string;
  links: {
    href: string;
    label: string;
  }[];
}

export interface WhyChooseSpiritualPropsTypes {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  cards: {
    title: string;
    description: string;
    src: string;
  }[];
}

export interface OurPackagesPropsTypes {
  title: string;
  description: string;
  cards: {
    packageType: string;
    days: string;
    description: string;
    src: string;
    link: {
      href: string;
      label: string;
    };
  }[];
}

export interface ProgramsToRestorePropsTypes {
  title: string;
  subTitle: string;
  link: {
    href: string;
    label: string;
  };
  cards: {
    src: string;
    title: string;
    icon: string;
    description: string;
  }[];
}

export interface OurServicesPropsTypes {
  title: string;
  subTitle: string;
  cards: {
    src: string;
    alt: string;
    name: string;
  }[];
}

export type FaqData = {
  Answer: string;
  Question: string;
  _id: number;
}[]