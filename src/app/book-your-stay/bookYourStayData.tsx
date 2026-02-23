"use client";
import { imageUrl } from "@/data/links";
import {
    BookingRatingIcon,
    ExpediaRatingIcon,
    HotelRatingIcon,
    TripAdvisorRatingIcon,
} from "@/icons/icons";
import { NestledInNature, PeacefulLocation, PureVeg } from "../../icons/icons";
import { contact } from "../../../constent";

export const bookYourStayData = {
    // bannerData: {
    //     images: ["/IMG_8380.webp", "/Home.webp"],
    //     title: "Anand Vardhan Resort",
    //     subTitle: "Welcome to",
    //     description: "A PURE VEGETARIAN RESORT IN MANALI",
    // },
    aboutUsData: {
        title: "ABOUT US",
        subtitle: "Take A Break In The Lap Of Nature",
        desc: [
            "Discover a piece of paradise and culinary delight at Anand Vardhan, the only top resort in Kullu-Manali & Naggar, offering an extensive selection of pure vegetarian delicacies.",
            "Wake up to fresh mountain air, chirping birds, and breathtaking views of the Dhauladhar and Pir Panjal ranges. Nestled amid apple orchards and pine forests near Manali, our family resort offers soulful escapes and warm hospitality away from the city’s hustle.",
        ],
        images: [
            "/home-about2.png",
            "/home-about1.png",
            "/home-about3.jpg",
            "/home-about4.jpg",
        ],
        link: {
            label: "Contact Us",
            href: "/contact-us/",
        },
    },
    roomsAndSuites: {
        title: "ROOMS & SUITES",
        subTitle: "Where Comfort Meets Serenity",
        cards: [
            {
                images: [
                    imageUrl + "luxurySuite/002.webp",
                    imageUrl + "luxurySuite/005.webp",
                    imageUrl + "luxurySuite/003.webp",
                ],
                title: "Luxury Suite Room",
                description:
                    "Luxury Suite (500 sq. ft.) — A spacious, homely suite with a private balcony offering stunning Pir Panjal and mountain views. Features a king bed, sofa, tea–coffee setup. Includes hot & cold AC, shower cubicle, and outdoor seating with a swing.",
                link: {
                    href: "https://wa.me/+919317207374?text=%20Hello!%20I%20Would%20Like%20To%20Book%20a%20Stay.%20Any%20Offers%20Available%3F",
                    label: "BOOK NOW",
                },
            },
            {
                images: [
                    imageUrl + "superDeluxe/003.webp",
                    imageUrl + "superDeluxe/005.webp",
                    imageUrl + "superDeluxe/001.webp",
                ],
                title: "Super Deluxe Room",
                description:
                    "Super Deluxe Room (350 sq. ft.) — Elegant rooms surrounded by Himalayan calm and apple orchards, featuring refined interiors, a cosy double bed, sofa, tea–coffee setup, balcony seating, and mountain views. Includes washroom, & luggage racks.",
                link: {
                    href: "https://wa.me/+919317207374?text=%20Hello!%20I%20Would%20Like%20To%20Book%20a%20Stay.%20Any%20Offers%20Available%3F",
                    label: "BOOK NOW",
                },
            },
            {
                images: [
                    imageUrl + "Deluxe/003.webp",
                    imageUrl + "Deluxe/004.webp",
                    imageUrl + "Deluxe/001.webp",
                ],
                title: "Deluxe Room",
                description:
                    "Deluxe Room (270 sq. ft.) — Stylish, cosy, and well-furnished with a double bed, sofa, study desk, tea–coffee setup, and a window overlooking Manali’s apple orchards. Includes Wi-Fi, 32” TV, hot water, wardrobe, and hygienic washroom with toiletries.",
                link: {
                    href: "https://wa.me/+919317207374?text=%20Hello!%20I%20Would%20Like%20To%20Book%20a%20Stay.%20Any%20Offers%20Available%3F",
                    label: "BOOK NOW",
                },
            },
        ],
    },
    experiences: {
        title: "EXPERIENCES",
        subTitle: "Designed for Joy, Built for Memories",
        cards: [
            {
                src: imageUrl + "IMG_8241.webp",
                title: "Cycling",
            },
            {
                src: imageUrl + "IMG_8294.webp",
                title: "Outdoor Kids Area",
            },
            {
                src: imageUrl + "3.webp",
                title: "Trekking",
            },
            {
                src: imageUrl + "IMG_8279.webp",
                title: "Archery",
            },
            {
                src: imageUrl + "commando-net.webp",
                title: "Commando Net",
            },
            {
                src: imageUrl + "bamboo-bridge.webp",
                title: "Bamboo Bridge",
            },
            {
                src: imageUrl + "burma-bridge.webp",
                title: "Burma Bridge",
            },
            {
                src: imageUrl + "zip-line.webp",
                title: "Zip Line",
            },
            {
                src: imageUrl + "img-bonfire.webp",
                title: "Bonfire",
            },
            {
                src: imageUrl + "indoor-game.webp",
                title: "Indoor Game Studio",
            },
        ],
    },
    whyChooseUs: {
        title: "UNIQUE EDGE",
        subTitle: "Why Us?",
        description:
            "A perfect blend of luxury and nature, offering serene escapes amidst the Himalayas. Exquisite vegetarian cuisine and heartfelt hospitality that make every stay memorable.",
        cards: [
            {
                icon: <PureVeg />,
                title: "Pure Veg",
            },
            {
                icon: <PeacefulLocation />,
                title: "Peaceful Location Nestled in Nature",
            },
            {
                icon: <NestledInNature />,
                title: "family centric",
            },
        ],
    },
    ourCulinaryOfferings: {
        title: "OUR CULINARY OFFERINGS",
        subTitle: "A Celebration of Pure Vegetarian Flavors",
        link: {
            href: "https://wa.me/+919317207374?text=%20Hello!%20I%20Would%20Like%20To%20Book%20a%20Stay.%20Any%20Offers%20Available%3F",
            label: "Book Now",
        },
        cards: [
            {
                images: [
                    imageUrl + "IMG_8155.webp",
                    imageUrl + "273A8371.webp",
                    imageUrl + "IMG_8203.webp",
                ],
                description: "Govind Prasadam Pure Vegetarian Restaurant",
            },
            {
                images: [
                    imageUrl + "IMG_8354.webp",
                    imageUrl + "IMG_8370.webp",
                    imageUrl + "IMG_8254.webp",
                ],
                description: "Open Air Cafe",
            },
        ],
    },
    onlinePlatforms: {
        title: "HIGHEST RATINGS ON ONLINE PLATFORMS",
        cards: [
            {
                icon: <TripAdvisorRatingIcon />,
                partnerName: "TripAdvisor",
                ratings: "4.9/5",
            },
            {
                icon: <BookingRatingIcon />,
                partnerName: "Booking.com",
                ratings: "7.5/10",
            },
            {
                icon: <HotelRatingIcon />,
                partnerName: "Hotels.com",
                ratings: "8.4/10",
            },
            {
                icon: <ExpediaRatingIcon />,
                partnerName: "Expedia",
                ratings: "8.4/10",
            },
        ],
    },
    testimonials: {
        title: "TESTIMONIALS",
        subTitle: "Appreciation From Our Guests",
        reviewPartners: [
            {
                name: "Google Rating",
                logo: "/Google.png",
                rating: "4.8",
                href: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
            },
            {
                name: "Trip Advisor",
                logo: "/trip.png",
                rating: "4.9",
                href: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
            },
        ],
        cards: [
            {
                id: 1,
                link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
                logo: "/trip.png",
                rating: 4,
                name: "Himanshu G",
                review:
                    "I recently stayed at Anand Vardhan Resort and had a fantastic time! The resort is beautiful, with stunning views and peaceful surroundings. My room was cozy and comfortable, perfect for relaxing after exploring. I loved the delicious food at the restaurant. I highly recommend Anand Vardhan Resort for a perfect getaway.",
            },
            {
                id: 2,
                logo: "/trip.png",
                rating: 4,
                name: "Aditya R",
                link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
                review:
                    "Great Location It's about 20kms from Manali Mall Road we love this place as it is peace mind great wether in Manali really very very beautiful place realy come again to Manali Himalayan,s Thanks for AVR Team who give a best Hospitality. Food was Also Fresh and tasty.",
            },
            {
                id: 3,
                rating: 5,
                name: "Aditya Jain",
                link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
                logo: "/google.png",
                review:
                    "I had an amazing stay at the property, we were greeted with welcome drinks, they had gym facilities, playground for the kids, cycling and also they have an extra property for adventure activities, cricket, badminton and the food was so tasty, very good for pure vegetarian people. Felt like home and such a sweet staff. 100% recommended for your trip in this area",
            },
            {
                id: 4,
                logo: "/trip.png",
                rating: 5,
                name: "Viahal V",
                link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
                review:
                    "Beautiful Place for a calm and peaceful stay in mountains.Resort is perfectly placed out of town hustle but easily approachable from manali. One of best highlights is the Food, kudos to Chef. The complete staff is very active and ready to make your stay comfortable.",
            },
            {
                id: 5,
                logo: "/google.png",
                rating: 5,
                name: "Satyansh Prajapati",
                link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
                review:
                    "Anand Vardhan Resort in Manali is a perfect blend of luxury and nature. Nestled amidst breathtaking mountain views, it offers clean and comfortable rooms, delicious vegetarian food, and top-notch hospitality. The staff is warm and attentive, ensuring a relaxing stay. Whether you're looking for adventure or peace, this resort is an excellent choice for a memorable getaway.",
            },
            {
                id: 6,
                logo: "/google.png",
                rating: 5,
                name: "Nimit Jain",
                link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
                review:
                    "The property is just excellent with tremendous service and staff. It was my daughter birthday and Anand Vardhan Resort gave us a wonderful surprise with decorated room and a dedicated party area to celebrate birthday for our little one. I would highly recommend this for family and friends outing.",
            },
        ],
    },
    addCardData: {
        title:
            "Winter offer – Get up to 20% off on your stay. Hurry, Offer Ending Soon!",
        description:
            "",
        link: {
            href: "https://wa.me/+919317207374?text=%20Hello!%20I%20Would%20Like%20To%20Book%20a%20Stay.%20Any%20Offers%20Available%3F",
            label: "Book Now",
        },
    },
};
