# NoLimits Events — Production Website Documentation

> **Brand Name:** NO LIMITS  
> **Tagline:** WE DESIGN YOU CELEBRATE  
> **Domain:** Event Management, Food Catering, Floral & Stage Décor, Candid Photography & Bridal Makeup Artistry  
> **Location:** Bengaluru, Karnataka, India

---

## 1. Project Overview & Architecture
NoLimits Events is a front-end only, static website built using **vanilla HTML5, CSS3, and modern ES6+ JavaScript**. It requires zero build tools, node compilers, or backend servers. It can be deployed as-is directly to GitHub Pages, Netlify, Cloudflare Pages, or Vercel.

### Key Highlights:
- **Design Aesthetic:** Royal Indian Celebration aesthetics (deep obsidian blacks, gold-foil gradients, and subtle jaali/mandala geometry) fused with modern luxury UI (floating pill nav, glassmorphism cards, and bento mosaic layouts).
- **Motion System:** Smooth scrolling powered by Lenis + GSAP ScrollTrigger via pinned CDN scripts with full fallback support for offline/graceful degradation.
- **Data-Driven Architecture:** All media, gallery items, contact numbers, services, and company descriptions are centralized in `/data/site.js` and `/data/gallery.js`.

---

## 2. Directory & File Structure

```
NO LIMITS/
├── index.html                  # Home Page (Hero slider, services carousel, moments bento, process timeline, stats)
├── about.html                  # About Page (Heritage story, core leadership team, 4 craft studios)
├── services.html               # Services Page (Detailed services, celebration packages, FAQ accordion)
├── event-gallery.html          # Event Gallery Page (Combinable filters, masonry grid, fullscreen lightbox, videos)
├── contact.html                # Contact Page (Validation, prefilled WhatsApp generator, mailto builder, map)
├── css/
│   └── styles.css              # Design tokens, CSS variables, typography, animations, responsive breakpoints
├── js/
│   ├── main.js                 # Global controller: preloader, curtain page transitions, pill nav, particles, cursor
│   ├── home.js                 # Home controller: hero slider, drag carousel, counters, timeline diya lighting
│   └── gallery.js              # Gallery controller: multi-filters, grid rendering, by-event view, lightbox
├── data/
│   ├── site.js                 # Central config: phone, WhatsApp, email, address, hero slides, team, stats, FAQs
│   └── gallery.js              # Central gallery data: photos, self-hosted mp4s, YouTube video links
├── assets/
│   ├── images/
│   │   ├── logo.png            # Official brand logo (monogram, arch, wordmark, diyas)
│   │   ├── favicon.svg         # SVG favicon for high-res browser tabs
│   │   ├── hero-*.svg          # Hero background slide visual assets
│   │   ├── thumb-*.svg         # Hero thumbnail images
│   │   ├── service-*.svg       # Service card visual covers
│   │   ├── pkg-*.svg           # Combo celebration package covers
│   │   ├── team-*.svg          # Leadership team avatar placeholders
│   │   └── gallery/            # All gallery photo items & video posters
│   └── videos/
│       └── gallery/            # Self-hosted MP4 celebration clips
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Search engine crawlers guide
└── README.md                   # Complete owner manual and operational documentation
```

---

## 3. How to Manage the Event Gallery (`data/gallery.js`)

All media items on the **Event Gallery** page are read directly from `data/gallery.js`. You do **not** need to touch HTML or CSS files when adding new photos or videos.

### A. Adding a New Photo
1. Save your high-resolution image in `/assets/images/gallery/` (e.g. `wedding-reception-01.webp`).
2. Open `data/gallery.js` in any text editor.
3. Add a new item object into the `GALLERY_ITEMS` array:
```javascript
{
  id: "wedding-reception-01",
  type: "photo",
  occasion: "weddings",              // Options: "weddings" | "birthdays" | "corporate" | "other"
  services: ["decor", "catering"],   // Options: "catering" | "decor" | "photography" | "makeup"
  eventName: "Royal Palace Reception",
  date: "2026-04-15",                // YYYY-MM-DD (auto-sorted newest first)
  location: "Palace Grounds, Bengaluru",
  src: "assets/images/gallery/wedding-reception-01.webp",
  alt: "Grand floral mandap decor with hanging gold diyas",
  featured: true                     // Set true to feature on Home page mosaic
}
```

### B. Adding a YouTube / Vimeo Video
1. Place a cover poster image in `/assets/images/gallery/` (e.g. `video-poster-01.jpg`).
2. Add a new object in `data/gallery.js`:
```javascript
{
  id: "corporate-gala-video",
  type: "video",
  occasion: "corporate",
  services: ["decor", "photography"],
  eventName: "Annual Leadership Summit",
  date: "2026-03-20",
  location: "Indiranagar, Bengaluru",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  poster: "assets/images/gallery/video-poster-01.jpg",
  alt: "Corporate gala highlights video",
  featured: false
}
```

### C. Adding a Self-Hosted MP4 Video
1. Save your MP4 file in `/assets/videos/gallery/` (e.g. `birthday-highlight.mp4`).
2. Save your poster image in `/assets/images/gallery/` (e.g. `birthday-poster.jpg`).
3. Add object in `data/gallery.js`:
```javascript
{
  id: "birthday-highlight-01",
  type: "video",
  occasion: "birthdays",
  services: ["decor"],
  eventName: "1st Birthday Celebration",
  date: "2026-03-10",
  location: "Koramangala, Bengaluru",
  videoSrc: "assets/videos/gallery/birthday-highlight.mp4",
  poster: "assets/images/gallery/birthday-poster.jpg",
  alt: "1st birthday fairy garden theme video",
  featured: false
}
```

---

## 4. How to Update Contact Info, Text & Team (`data/site.js`)

Open `data/site.js` to modify site-wide information:
- **Phone Number:** `SITE_CONFIG.contact.phone` and `phoneClean`
- **WhatsApp Number:** `SITE_CONFIG.contact.whatsappNumber` (Enter digits with country code, e.g. `919876543210`)
- **Email:** `SITE_CONFIG.contact.email`
- **Address & Working Hours:** `SITE_CONFIG.contact.address` and `SITE_CONFIG.contact.hours`
- **Google Maps Embed:** `SITE_CONFIG.contact.mapEmbedUrl`
- **Formspree / Backend Form Endpoint:** `SITE_CONFIG.contact.formEndpoint` (Optional)
- **Hero Slider Content:** `SITE_CONFIG.heroSlides`
- **Stats Counters:** `SITE_CONFIG.stats`
- **Client Testimonials:** `SITE_CONFIG.testimonials`
- **Leadership Team:** `SITE_CONFIG.team`
- **Frequently Asked Questions:** `SITE_CONFIG.faqs`

---

## 5. Styling, Colors & Fonts Guide (`css/styles.css`)

All color variables and typography rules are defined at the top of `css/styles.css`:

```css
:root {
  --black: #070707;             /* Main dark background */
  --ink: #0F0E0C;               /* Dark card surfaces */
  --charcoal: #1A1814;          /* Secondary cards */
  --gold: #D9A441;              /* Primary brand gold */
  --gold-light: #F3D58A;        /* Shimmer highlights & headings */
  --gold-deep: #A9741F;         /* Rich dark gold */
  --ivory: #F6EFE3;             /* Text light color */
  --sand: #E9DFCC;              /* Light section background */
  --cyan: #1BA3CF;              /* Accents (from logo 'N') */
  --pink: #FF1F8E;              /* Accents (from logo 'S') */
}
```

### Motion and Performance Customization
- **Disable Heavy Motion:** If you wish to disable ambient particles or smooth scrolling, set `prefers-reduced-motion` in your OS settings or remove particle canvas initializations in `js/main.js`.
- **Graceful CDN Fallback:** If CDN libraries are blocked by a client's firewall or network, the website will automatically fall back to native browser smooth scrolling and CSS animations without breaking layout.

---

## 6. Image & Media Optimization Guidelines
For fastest page loading across Indian mobile networks (4G/5G):
- **Gallery Photos:** Resize to max `1600px` width, save as `.webp` or compressed `.jpg` (quality 80-85%). File size target: `< 250KB`.
- **Thumbnails:** Resize to `600px` width. File size target: `< 80KB`.
- **Self-Hosted Videos:** Encode in `H.264 / AAC MP4` format, 1080p or 720p, under `20MB`. For longer event movies, use YouTube / Vimeo embed links.

---

## 7. Deployment Instructions

### A. Netlify (Drag & Drop or Git)
1. Log in to [Netlify](https://www.netlify.com).
2. Drag and drop the `NOLIMITS website` folder into the Netlify Sites dashboard.
3. Your site is live instantly on a secure HTTPS URL with automatic CDN caching!

### B. Cloudflare Pages
1. Push repository to GitHub or GitLab.
2. In Cloudflare dashboard, go to **Workers & Pages** → **Create application** → **Pages**.
3. Select your repository, leave Build Command empty, set Build Output Directory to `/`, and deploy.

### C. GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings** → **Pages** → Source: `Deploy from a branch` (`main` branch / `root`).
3. Click Save.

---

## 8. Final Client Checklist (Placeholders to Confirm/Replace)

Before launching for public traffic, review and customize the following items:
- [ ] **Official Logo:** Verify `assets/images/logo.png` matches final approved vector graphics.
- [ ] **Contact Details:** Update real phone, WhatsApp number, and email in `data/site.js`.
- [ ] **Physical Address:** Replace office address and Google Maps embed link in `data/site.js` and `contact.html`.
- [ ] **Social Media Links:** Add real Instagram, Facebook, and YouTube links in `data/site.js`.
- [ ] **Real Event Media:** Drop real wedding, birthday, and corporate photographs into `assets/images/gallery/` and update `data/gallery.js`.
- [ ] **Real Statistics:** Confirm the 500+ celebrations / 100+ clients counter stats in `data/site.js`.
- [ ] **Real Testimonials:** Replace sample quotes with real client feedback in `data/site.js`.
- [ ] **Team Bios & Photos:** Update executive team names and portraits in `data/site.js` and `assets/images/`.
- [ ] **Production Domain:** Replace `https://www.example.com` with the actual custom domain in `sitemap.xml`, `robots.txt`, and HTML `<meta canonical>` tags.
