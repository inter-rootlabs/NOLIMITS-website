/**
 * NoLimits Events - Site Configuration & Content Data
 * 
 * Instructions for Client/Owner:
 * Edit the fields below to update contact information, hero slides, statistics,
 * testimonials, team details, and service descriptions across the website.
 */

const SITE_CONFIG = {
  brand: {
    name: "NO LIMITS",
    tagline: "WE DESIGN YOU CELEBRATE",
    greetingKannada: "ಸ್ವಾಗತ",
    greetingEnglish: "Welcome",
    description: "Bengaluru's premier event management company specializing in food catering, event décor, candid photography, and bridal & party makeup artistry for weddings, birthdays, corporate galas, and grand celebrations."
  },
  
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    whatsappNumber: "919876543210",
    whatsappDefaultMessage: "Hi NoLimits Events, I'd like to plan an event in Bengaluru.",
    email: "info@nolimitsevents.in",
    address: "#42, Royal Heritage Plaza, Indiranagar, Bengaluru, Karnataka 560038, India",
    hours: "Mon - Sun: 9:00 AM - 8:00 PM IST",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.953685987158!2d77.6385!3d12.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681439223e7%3A0xd689e7c5b610c14b!2sIndiranagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    // Formspree or custom form backend endpoint (Optional. If empty, falls back to prefilled WhatsApp & Mailto)
    formEndpoint: "" 
  },

  socials: [
    { name: "Instagram", url: "https://instagram.com/nolimitsevents_blr", icon: "instagram" },
    { name: "Facebook", url: "https://facebook.com/nolimitsevents.bengaluru", icon: "facebook" },
    { name: "YouTube", url: "https://youtube.com/@nolimitsevents", icon: "youtube" },
    { name: "WhatsApp", url: "https://wa.me/919876543210", icon: "whatsapp" }
  ],

  heroSlides: [
    {
      id: "catering",
      title: "FOOD CATERING",
      subtitle: "ARTISANAL FEASTS & LIVE COUNTERS",
      description: "Customized regional, authentic South Indian & international culinary experiences crafted by master chefs for your guests.",
      image: "assets/images/hero-catering.svg",
      thumb: "assets/images/thumb-catering.svg",
      callouts: [
        { text: "Live Chaat & Tandoor Counters", position: "top-right" },
        { text: "Customized Tasting Sessions", position: "bottom-left" }
      ],
      link: "services.html#catering"
    },
    {
      id: "decor",
      title: "EVENT DÉCOR",
      titleAccent: "ROYAL MANDAPS & STAGE SETUPS",
      subtitle: "BENGALURU'S FINEST FLORAL ARCHITECTURE",
      description: "Bespoke floral design, traditional temple arch aesthetics, fairytale lighting, and thematic entrance setups for grand occasions.",
      image: "assets/images/hero-decor.svg",
      thumb: "assets/images/thumb-decor.svg",
      callouts: [
        { text: "Handcrafted Floral Mandap", position: "top-right" },
        { text: "Ambient Temple Lighting", position: "bottom-left" }
      ],
      link: "services.html#decor"
    },
    {
      id: "photography",
      title: "PHOTOGRAPHY",
      subtitle: "CINEMATIC CANDID STORYTELLING",
      description: "Preserving emotional moments, royal portraits, pre-wedding films, and heirloom albums that last for generations.",
      image: "assets/images/hero-photography.svg",
      thumb: "assets/images/thumb-photography.svg",
      callouts: [
        { text: "4K Cinematic Teasers", position: "top-right" },
        { text: "Same-Day Highlight Edits", position: "bottom-left" }
      ],
      link: "services.html#photography"
    },
    {
      id: "makeup",
      title: "MAKEUP ARTISTRY",
      subtitle: "BRIDAL & CELEBRATION BEAUTY",
      description: "HD & Airbrush bridal artistry, exquisite hair styling, saree draping, and flawless party looks tailored to your personality.",
      image: "assets/images/hero-makeup.svg",
      thumb: "assets/images/thumb-makeup.svg",
      callouts: [
        { text: "On-Location Touchup Team", position: "top-right" },
        { text: "Premium International Brands", position: "bottom-left" }
      ],
      link: "services.html#makeup"
    }
  ],

  // Animated Counter Stats (Placeholders to confirm with client)
  stats: [
    { number: 500, suffix: "+", label: "CELEBRATIONS DESIGNED" },
    { number: 100, suffix: "+", label: "HAPPY FAMILIES & CLIENTS" },
    { number: 4, suffix: "", label: "CORE CRAFTS IN-HOUSE" },
    { number: 1, suffix: "", label: "DEDICATED EVENT DIRECTOR" }
  ],

  // Occasions list
  occasions: [
    { id: "weddings", name: "Weddings & Receptions", icon: "ring", desc: "Mandaps, royal sangeet, live catering & candid cinema." },
    { id: "birthdays", name: "Milestone Birthdays", icon: "cake", desc: "Thematic styling, dessert bars & entertainment." },
    { id: "corporate", name: "Corporate Galas & Launches", icon: "building", desc: "Stage setups, audio-visuals, executive buffets." },
    { id: "engagements", name: "Engagements & Ring Ceremonies", icon: "heart", desc: "Intimate floral backdrops & gourmet finger food." },
    { id: "babyshowers", name: "Baby Showers & Seemantham", icon: "baby", desc: "Traditional cradles, yellow-gold floral aesthetics." },
    { id: "anniversaries", name: "Anniversary Celebrations", icon: "sparkles", desc: "Romantic candle-lit dinners & luxury decor." },
    { id: "housewarmings", name: "Gruhapravesham & Pujas", icon: "home", desc: "Traditional toran entrance, arch decor & prasadam catering." },
    { id: "festivals", name: "Festivals & Private Parties", icon: "sun", desc: "Cultural galas, festive lighting & cocktail setups." }
  ],

  // Testimonials (Editable placeholders)
  testimonials: [
    {
      id: 1,
      quote: "NoLimits Events turned our Bengaluru wedding reception into a fairytale. The floral mandap and live chaat counters received endless compliments from all 800 guests!",
      author: "Aditi & Rahul Hegde",
      occasion: "Grand Wedding Reception, Palace Grounds",
      rating: 5
    },
    {
      id: 2,
      quote: "Flawless execution for our corporate annual gala at Indiranagar. The stage decor was stunning and the executive buffet catering was top notch.",
      author: "Rajeshwar Rao",
      occasion: "Corporate Summit, Bengaluru",
      rating: 5
    },
    {
      id: 3,
      quote: "Priya's bridal makeup artistry was magical and the photography team captured every emotion seamlessly. We couldn't have asked for a better event partner!",
      author: "Kavya & Srinivas",
      occasion: "Sangeet & Wedding Ceremony",
      rating: 5
    }
  ],

  // Creative Team Members
  team: [
    {
      name: "Vikram Sharma",
      role: "Founder & Creative Director",
      bio: "Visionary planner with over a decade of luxury event management expertise in Bengaluru.",
      image: "assets/images/team-01.svg"
    },
    {
      name: "Ananya Rao",
      role: "Lead Floral & Stage Designer",
      bio: "Master of traditional temple motifs, modern floral installations, and lighting aesthetics.",
      image: "assets/images/team-02.svg"
    },
    {
      name: "Chef Rajesh Kumar",
      role: "Executive Culinary Director",
      bio: "Specializing in authentic South Indian banana leaf feasts, North Indian royal dawat, and international stations.",
      image: "assets/images/team-03.svg"
    },
    {
      name: "Priya Nair",
      role: "Senior Makeup & Hair Stylist",
      bio: "Renowned bridal makeup artist bringing out natural elegance with long-lasting HD & Airbrush techniques.",
      image: "assets/images/team-04.svg"
    }
  ],

  // Detailed Services Data
  services: [
    {
      id: "catering",
      slug: "catering",
      title: "FOOD CATERING",
      subtitle: "Regional Feasts, Live Stations & Gourmet Desserts",
      image: "assets/images/service-catering.svg",
      summary: "Culinary excellence that delights every palate. From traditional South Indian banana leaf meals to elaborate multi-cuisine wedding buffets.",
      description: "Our catering wing brings together veteran chefs and attentive service staff to craft unforgettable dining experiences. We handle menu design, tasting sessions, live cooking stations, hygienic food prep, and flawless presentation.",
      included: [
        "Traditional South Indian Banana Leaf Feasts & Prasadam",
        "North Indian Royal Dawat & Mughlai Specialties",
        "Live Interactive Stations (Chaat, Dosa, Tandoor, Pasta, Waffles)",
        "Artisanal Indian Sweets, Fusion Desserts & Ice Cream Counters",
        "Welcome Drinks, Mocktail Bars & Refreshments",
        "Pre-event Menu Tasting Sessions for Up to 6 Family Members",
        "Professional Uniformed Servers, Cutlery & Table Linen Setup"
      ]
    },
    {
      id: "decor",
      slug: "decor",
      title: "EVENT DÉCOR",
      subtitle: "Mandap Architecture, Floral Magic & Atmosphere Lighting",
      image: "assets/images/service-decor.svg",
      summary: "Transforming venues into ethereal spaces with bespoke floral arrangements, temple arches, custom backdrops, and mood lighting.",
      description: "Whether you envision a grand royal palace mandap, an intimate bohemian lawn setup, or a sleek corporate stage, our decor artisans bring your mood board to life with precision and flair.",
      included: [
        "Bespoke Mandap & Wedding Stage Floral Architecture",
        "Grand Entrance Arches, Floral Pathways & Welcome Signage",
        "Traditional Temple Arch (Mehrab) & Jaali Screen Backdrops",
        "Themed Birthday Setups, Balloon Sculptures & Photo Booths",
        "Architectural Mood Lighting, Fairy Lights & Chandeliers",
        "Seating Arrangements, VIP Lounges & Table Centerpieces",
        "Corporate Stage Setups, LED Wall Branding & Podium Styling"
      ]
    },
    {
      id: "photography",
      slug: "photography",
      title: "PHOTOGRAPHY & CINEMA",
      subtitle: "Candid Moments, Pre-Wedding Films & Heirloom Albums",
      image: "assets/images/service-photography.svg",
      summary: "Capture the emotion, laughter, and romance of your celebration with cinematic 4K video and candid photography.",
      description: "Our visual storytellers document every tender glance and joyful dance step without interrupting the flow of your event. We deliver high-resolution edited photos, 4K teasers, and heirloom albums.",
      included: [
        "Candid & Traditional Wedding Photography Coverage",
        "4K Cinematic Teaser Films & Full Event Highlight Movies",
        "Pre-Wedding & Post-Wedding Concept Shoots",
        "Drone Aerial Videography (Subject to venue permissions)",
        "Handcrafted Flush-Mount Premium Leather Albums",
        "Live Streaming Services for Outstation Guests & Relatives",
        "Same-Day Edited Teaser Clips for Social Media Sharing"
      ]
    },
    {
      id: "makeup",
      slug: "makeup",
      title: "MAKEUP ARTISTRY",
      subtitle: "HD & Airbrush Bridal Makeup, Hair Styling & Draping",
      image: "assets/images/service-makeup.svg",
      summary: "Exquisite bridal makeup and party styling that enhances your natural beauty for camera and crowd alike.",
      description: "Our senior makeup artists create timeless, radiant looks using luxury international products. We offer on-location services across Bengaluru so you can relax on your special day.",
      included: [
        "HD & Ultra-Airbrush Bridal Makeup Packages",
        "Sangeet, Reception & Engagement Party Styling",
        "Custom Hair Styling, Extension Placement & Floral Gajra",
        "Traditional Saree & Dupatta Draping (Kanjeevaram, Silk, Lehenga)",
        "Groom Makeup, Hair Styling & Touchups",
        "Family & Bridesmaid Group Makeup Packages",
        "On-Site Touchup Team Available Throughout the Event"
      ]
    }
  ],

  // Combo Celebration Packages (No prices as requested)
  packages: [
    {
      id: "wedding-combo",
      title: "ROYAL WEDDING COMBO",
      tag: "MOST POPULAR",
      image: "assets/images/pkg-wedding.svg",
      servicesIncluded: ["Event Décor", "Food Catering", "Photography", "Makeup Artistry"],
      description: "The complete end-to-end luxury package for couples wanting a stress-free wedding journey across all 4 core crafts."
    },
    {
      id: "birthday-combo",
      title: "MILESTONE BIRTHDAY COMBO",
      tag: "FESTIVE FAVORITE",
      image: "assets/images/pkg-birthday.svg",
      servicesIncluded: ["Themed Décor", "Live Chaat & Buffets", "Candid Photography"],
      description: "Curated for 1st birthdays, sweet sixteens, and milestone celebrations with custom themes, interactive counters, and photography."
    },
    {
      id: "corporate-combo",
      title: "CORPORATE GALA COMBO",
      tag: "EXECUTIVE CLASS",
      image: "assets/images/pkg-corporate.svg",
      servicesIncluded: ["Stage Décor & Audio Visuals", "Executive Buffet", "Event Photography"],
      description: "Professional setup tailored for product launches, annual company awards, and executive networking summits in Bengaluru."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "How far in advance should we book NoLimits Events for our wedding or celebration?",
      answer: "We recommend booking 3 to 6 months in advance for peak wedding seasons (October through May in Bengaluru) to ensure date availability. For birthdays and corporate events, 3 to 4 weeks advance notice is ideal."
    },
    {
      question: "Can we customize individual services, e.g. booking only Décor and Catering?",
      answer: "Yes! While we offer complete end-to-end event management, you are free to select any combination of our 4 crafts (Food Catering, Décor, Photography, Makeup Artistry) according to your needs."
    },
    {
      question: "Do you take up event projects outside Bengaluru?",
      answer: "Our core team is based in Bengaluru, but we frequently execute destination weddings and celebrations across Karnataka, Goa, Mysore, Coorg, and neighboring southern states upon request."
    },
    {
      question: "Is menu tasting available before finalizing the catering order?",
      answer: "Absolutely. Once the initial catering concept is aligned, we host an exclusive food tasting session for up to 6 family members at our Indiranagar kitchen facility."
    },
    {
      question: "What are the payment terms and booking process?",
      answer: "We reserve your date upon receipt of a 30% advance deposit. 50% is due 1 week prior to the event, and the remaining 20% balance is settled on the event day after setup completion."
    },
    {
      question: "What is your policy in case of date changes or cancellations?",
      answer: "We understand that plans can evolve. Date postponements are accommodated free of charge subject to calendar availability. Detailed cancellation refund slabs are explicitly outlined in our written agreement."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
