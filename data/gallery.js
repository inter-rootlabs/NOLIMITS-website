/**
 * NoLimits Events - Event Gallery Data Store
 * 
 * ============================================================================
 * HOW TO ADD NEW PHOTOS / VIDEOS TO THE GALLERY (Instructions for Owner):
 * ============================================================================
 * 
 * 1. TO ADD A NEW PHOTO:
 *    a. Save your high-res photo in folder: /assets/images/gallery/
 *       (e.g. "my-wedding-01.jpg")
 *    b. Add a new object to the GALLERY_ITEMS array below:
 *       {
 *         id: "wedding-2026-01",
 *         type: "photo",
 *         occasion: "weddings",         // Options: "weddings" | "birthdays" | "corporate" | "other"
 *         services: ["decor", "photography"], // Options: "decor" | "catering" | "photography" | "makeup"
 *         eventName: "Royal Palace Wedding Reception",
 *         date: "2026-04-10",           // YYYY-MM-DD format (Auto-sorted newest first)
 *         location: "Palace Grounds, Bengaluru",
 *         src: "assets/images/gallery/my-wedding-01.jpg",
 *         alt: "Grand floral mandap decor with golden arches",
 *         featured: true               // Set to true to show on Home page mosaic
 *       }
 * 
 * 2. TO ADD A SELF-HOSTED VIDEO (.mp4):
 *    a. Save video file in: /assets/videos/gallery/ (e.g. "birthday-video.mp4")
 *    b. Save poster thumbnail in: /assets/images/gallery/ (e.g. "birthday-poster.jpg")
 *    c. Add object:
 *       {
 *         id: "birthday-video-01",
 *         type: "video",
 *         occasion: "birthdays",
 *         services: ["decor"],
 *         eventName: "1st Birthday Wonderland",
 *         date: "2026-03-15",
 *         location: "Indiranagar, Bengaluru",
 *         videoSrc: "assets/videos/gallery/birthday-video.mp4",
 *         poster: "assets/images/gallery/birthday-poster.jpg",
 *         alt: "1st Birthday balloon celebration video",
 *         featured: false
 *       }
 * 
 * 3. TO ADD A YOUTUBE / VIMEO VIDEO:
 *    a. Save a thumbnail image in /assets/images/gallery/ (e.g. "yt-poster.jpg")
 *    b. Add object:
 *       {
 *         id: "yt-video-01",
 *         type: "video",
 *         occasion: "corporate",
 *         services: ["decor", "photography"],
 *         eventName: "Annual Leadership Award Night",
 *         date: "2026-02-20",
 *         location: "JW Marriott, Bengaluru",
 *         videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube embed URL
 *         poster: "assets/images/gallery/video-poster-03.svg",
 *         alt: "Corporate gala highlights video",
 *         featured: true
 *       }
 * ============================================================================
 */

const GALLERY_ITEMS = [
  {
    id: "item-01",
    type: "photo",
    occasion: "weddings",
    services: ["decor", "photography"],
    eventName: "Royal Heritage Palace Reception",
    date: "2026-03-28",
    location: "Palace Grounds, Bengaluru",
    src: "assets/images/gallery/nlimgwed.jpg",
    alt: "Royal palace mandap with golden arches and fresh jasmine garlands",
    featured: true
  },
  {
    id: "item-02",
    type: "photo",
    occasion: "weddings",
    services: ["catering"],
    eventName: "Live Tandoor & Chaat Pavilion",
    date: "2026-03-25",
    location: "Indiranagar, Bengaluru",
    src: "assets/images/gallery/nlstandimg.jpg",
    alt: "Artisanal live chaat counter with traditional earthen pots",
    featured: true
  },
  {
    id: "item-03",
    type: "photo",
    occasion: "weddings",
    services: ["photography"],
    eventName: "Candid Ring Exchange Ceremony",
    date: "2026-03-20",
    location: "Sadashivanagar, Bengaluru",
    src: "assets/images/gallery/item-03.svg",
    alt: "Emotion filled ring ceremony portrait under fairy lights",
    featured: true
  },
  {
    id: "video-01",
    type: "video",
    occasion: "weddings",
    services: ["photography", "decor"],
    eventName: "Grand Wedding Highlights 2026",
    date: "2026-03-18",
    location: "Leela Palace, Bengaluru",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "assets/images/gallery/video-poster-01.svg",
    alt: "Cinematic teaser video of royal South Indian wedding",
    featured: true
  },
  {
    id: "item-04",
    type: "photo",
    occasion: "weddings",
    services: ["makeup"],
    eventName: "Bridal Royal Grace Makeup",
    date: "2026-03-15",
    location: "Jayanagar, Bengaluru",
    src: "assets/images/gallery/item-04.svg",
    alt: "HD bridal makeup with traditional kemp jewelry and gajra",
    featured: true
  },
  {
    id: "item-05",
    type: "photo",
    occasion: "birthdays",
    services: ["decor"],
    eventName: "Golden Jubilee Birthday Gala",
    date: "2026-03-10",
    location: "Koramangala, Bengaluru",
    src: "assets/images/gallery/item-05.svg",
    alt: "50th birthday golden balloon arch with custom neon typography",
    featured: true
  },
  {
    id: "item-06",
    type: "photo",
    occasion: "birthdays",
    services: ["catering"],
    eventName: "Artisanal Dessert & Pastry Lounge",
    date: "2026-03-05",
    location: "Whitefield, Bengaluru",
    src: "assets/images/gallery/item-06.svg",
    alt: "Gourmet dessert bar with gold leaf macarons and fusion sweets",
    featured: false
  },
  {
    id: "video-02",
    type: "video",
    occasion: "birthdays",
    services: ["decor"],
    eventName: "1st Birthday Floral & Fairy World",
    date: "2026-03-02",
    location: "Sarjapur Road, Bengaluru",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "assets/images/gallery/video-poster-02.svg",
    alt: "Video of 1st birthday enchanted garden theme setup",
    featured: false
  },
  {
    id: "item-07",
    type: "photo",
    occasion: "birthdays",
    services: ["decor", "photography"],
    eventName: "1st Birthday Floral Stage Setup",
    date: "2026-02-28",
    location: "HSR Layout, Bengaluru",
    src: "assets/images/gallery/item-07.svg",
    alt: "Pastel theme 1st birthday stage with handcrafted props",
    featured: true
  },
  {
    id: "item-08",
    type: "photo",
    occasion: "corporate",
    services: ["decor"],
    eventName: "Tech Leader Corporate Leadership Summit",
    date: "2026-02-22",
    location: "JW Marriott, Bengaluru",
    src: "assets/images/gallery/item-08.svg",
    alt: "Executive corporate stage with LED backdrop and gold accents",
    featured: false
  },
  {
    id: "video-03",
    type: "video",
    occasion: "corporate",
    services: ["decor", "photography"],
    eventName: "Corporate Excellence Award Gala Night",
    date: "2026-02-20",
    location: "The Oberoi, Bengaluru",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "assets/images/gallery/video-poster-03.svg",
    alt: "Highlights film of annual corporate awards and dining gala",
    featured: true
  },
  {
    id: "item-09",
    type: "photo",
    occasion: "corporate",
    services: ["catering"],
    eventName: "Executive Plated Dinner Gala",
    date: "2026-02-18",
    location: "Taj West End, Bengaluru",
    src: "assets/images/gallery/item-09.svg",
    alt: "Fine dining 5-course plated meal service for C-suite executives",
    featured: false
  },
  {
    id: "item-10",
    type: "photo",
    occasion: "corporate",
    services: ["photography"],
    eventName: "Award Gala Red Carpet Moments",
    date: "2026-02-14",
    location: "UB City, Bengaluru",
    src: "assets/images/gallery/item-10.svg",
    alt: "Red carpet photo booth with custom branded backdrop",
    featured: false
  },
  {
    id: "item-11",
    type: "photo",
    occasion: "other",
    services: ["decor"],
    eventName: "Traditional Gruhapravesham Puja",
    date: "2026-02-10",
    location: "Dollar's Colony, Bengaluru",
    src: "assets/images/gallery/item-11.svg",
    alt: "Traditional marigold and mango leaf toran entrance decoration",
    featured: true
  },
  {
    id: "item-12",
    type: "photo",
    occasion: "weddings",
    services: ["decor"],
    eventName: "Engagement Floral Archway",
    date: "2026-02-05",
    location: "Kanakapura Road, Bengaluru",
    src: "assets/images/gallery/item-12.svg",
    alt: "Double ring floral backdrop with soft warm lighting",
    featured: false
  },
  {
    id: "item-13",
    type: "photo",
    occasion: "weddings",
    services: ["decor"],
    eventName: "Sangeet Night Lighting Installation",
    date: "2026-01-30",
    location: "Benson Town, Bengaluru",
    src: "assets/images/gallery/item-13.svg",
    alt: "Festive fairy light tunnel and dance floor setup",
    featured: false
  },
  {
    id: "item-14",
    type: "photo",
    occasion: "weddings",
    services: ["catering"],
    eventName: "Royal Rajasthani Thali Buffet",
    date: "2026-01-25",
    location: "Hebbal, Bengaluru",
    src: "assets/images/gallery/item-14.svg",
    alt: "Authentic royal thali presentation with brass cookware",
    featured: false
  },
  {
    id: "video-04",
    type: "video",
    occasion: "weddings",
    services: ["makeup"],
    eventName: "Bridal Royal Transformation Film",
    date: "2026-01-20",
    location: "MG Road, Bengaluru",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    poster: "assets/images/gallery/video-poster-04.svg",
    alt: "Before and after video of bridal HD makeup and hair styling",
    featured: false
  },
  {
    id: "item-15",
    type: "photo",
    occasion: "weddings",
    services: ["photography"],
    eventName: "Monochrome Couple Portrait",
    date: "2026-01-18",
    location: "Cubbon Park, Bengaluru",
    src: "assets/images/gallery/item-15.svg",
    alt: "Candid black and white romance portrait of bride and groom",
    featured: false
  },
  {
    id: "item-16",
    type: "photo",
    occasion: "weddings",
    services: ["makeup"],
    eventName: "Glamour Reception Makeup",
    date: "2026-01-12",
    location: "Frazer Town, Bengaluru",
    src: "assets/images/gallery/item-16.svg",
    alt: "Smokey eye reception makeup with diamond tiara",
    featured: false
  },
  {
    id: "item-17",
    type: "photo",
    occasion: "other",
    services: ["decor"],
    eventName: "Baby Shower Golden Cradle Decor",
    date: "2026-01-08",
    location: "Rajajinagar, Bengaluru",
    src: "assets/images/gallery/item-17.svg",
    alt: "Traditional flower decorated cradle for baby shower ceremony",
    featured: false
  },
  {
    id: "item-18",
    type: "photo",
    occasion: "birthdays",
    services: ["decor"],
    eventName: "25th Anniversary Lantern Party",
    date: "2026-01-04",
    location: "Bannerghatta Road, Bengaluru",
    src: "assets/images/gallery/item-18.svg",
    alt: "Floating lantern and candle lit outdoor lawn decor",
    featured: false
  },
  {
    id: "item-19",
    type: "photo",
    occasion: "corporate",
    services: ["catering"],
    eventName: "Cocktail Party Mocktail Bar",
    date: "2025-12-28",
    location: "Residency Road, Bengaluru",
    src: "assets/images/gallery/item-19.svg",
    alt: "Artisanal mixology station with signature tropical mocktails",
    featured: false
  },
  {
    id: "item-20",
    type: "photo",
    occasion: "other",
    services: ["decor"],
    eventName: "Diwali Festive Cultural Decor",
    date: "2025-11-12",
    location: "Malleshwaram, Bengaluru",
    src: "assets/images/gallery/item-20.svg",
    alt: "Grand rangoli design with hundreds of glowing clay diyas",
    featured: false
  }
];

// Helper function: get items sorted by date (newest first)
function getSortedGalleryItems() {
  return [...GALLERY_ITEMS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GALLERY_ITEMS, getSortedGalleryItems };
}
