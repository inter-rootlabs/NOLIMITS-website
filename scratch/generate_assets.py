import os

def create_svg(filename, title, subtitle, bg_color1="#0f0e0c", bg_color2="#1a1814", gold_accent="#d9a441", category="CELEBRATION"):
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg_color1}"/>
      <stop offset="50%" stop-color="{bg_color2}"/>
      <stop offset="100%" stop-color="#070707"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A9741F"/>
      <stop offset="35%" stop-color="#F3D58A"/>
      <stop offset="65%" stop-color="#D9A441"/>
      <stop offset="100%" stop-color="#8F5E14"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="{gold_accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="{gold_accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="jaali" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="#d9a441" stroke-width="0.75" stroke-opacity="0.12"/>
      <circle cx="30" cy="30" r="8" fill="none" stroke="#d9a441" stroke-width="0.75" stroke-opacity="0.12"/>
      <circle cx="30" cy="30" r="3" fill="#d9a441" fill-opacity="0.12"/>
    </pattern>
    <clipPath id="archClip">
      <path d="M 100 800 L 100 350 C 100 150 250 50 600 50 C 950 50 1100 150 1100 350 L 1100 800 Z" />
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)" />
  <rect width="1200" height="800" fill="url(#jaali)" />
  <circle cx="600" cy="400" r="450" fill="url(#glow)" />

  <!-- Outer Mehrab Arch Frame -->
  <path d="M 150 780 L 150 350 C 150 180 300 80 600 80 C 900 80 1050 180 1050 350 L 1050 780" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.4" />
  <path d="M 170 780 L 170 355 C 170 195 315 100 600 100 C 885 100 1030 195 1030 355 L 1030 780" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-opacity="0.25" />

  <!-- Corner Ornamental Leaf Motif -->
  <g stroke="url(#goldGrad)" fill="none" stroke-width="1.5" opacity="0.5">
    <path d="M 600 110 C 580 130 550 130 550 160 C 550 180 600 200 600 200 C 600 200 650 180 650 160 C 650 130 620 130 600 110 Z" fill="url(#goldGrad)" fill-opacity="0.1"/>
    <circle cx="600" cy="200" r="4" fill="url(#goldGrad)" />
  </g>

  <!-- Hanging Diya Motif -->
  <g opacity="0.7">
    <line x1="250" y1="0" x2="250" y2="180" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M 240 180 C 240 195 260 195 260 180 Z" fill="url(#goldGrad)"/>
    <path d="M 250 178 Q 248 165 250 155 Q 252 165 250 178 Z" fill="#FF1F8E"/>
    
    <line x1="950" y1="0" x2="950" y2="180" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M 940 180 C 940 195 960 195 960 180 Z" fill="url(#goldGrad)"/>
    <path d="M 950 178 Q 948 165 950 155 Q 952 165 950 178 Z" fill="#FF1F8E"/>
  </g>

  <!-- Center Content Badge -->
  <g transform="translate(600, 420)" text-anchor="middle">
    <!-- Category Badge -->
    <rect x="-140" y="-140" width="280" height="32" rx="16" fill="#1A1814" stroke="url(#goldGrad)" stroke-width="1" opacity="0.9"/>
    <text x="0" y="-119" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="600" letter-spacing="4" fill="#F3D58A">{category.upper()}</text>

    <!-- Decorative Lotus -->
    <path d="M 0 -70 C -15 -50 -35 -50 -25 -30 C -15 -10 0 0 0 0 C 0 0 15 -10 25 -30 C 35 -50 15 -50 0 -70 Z" fill="url(#goldGrad)" opacity="0.8"/>

    <!-- Main Title -->
    <text x="0" y="50" font-family="'Cormorant Garamond', Georgia, serif" font-size="52" font-weight="700" letter-spacing="2" fill="#F6EFE3">{title.upper()}</text>
    
    <!-- Subtitle -->
    <text x="0" y="95" font-family="'Manrope', Arial, sans-serif" font-size="16" font-weight="400" letter-spacing="3" fill="#D9A441">{subtitle.upper()}</text>
    
    <!-- Lotus Line Ornament -->
    <path d="M -120 130 L -30 130 M 30 130 L 120 130" stroke="url(#goldGrad)" stroke-width="1" opacity="0.6"/>
    <circle cx="0" cy="130" r="4" fill="url(#goldGrad)"/>
    <circle cx="-15" cy="130" r="2" fill="url(#goldGrad)"/>
    <circle cx="15" cy="130" r="2" fill="url(#goldGrad)"/>
  </g>
</svg>'''
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Created {filename}")

def create_favicon(filename):
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A9741F"/>
      <stop offset="50%" stop-color="#F3D58A"/>
      <stop offset="100%" stop-color="#D9A441"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="#070707"/>
  <!-- Mehrab Arch -->
  <path d="M 20 85 L 20 45 C 20 20 35 10 50 10 C 65 10 80 20 80 45 L 80 85 Z" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <path d="M 24 85 L 24 47 C 24 25 37 15 50 15 C 63 15 76 25 76 47 L 76 85 Z" fill="none" stroke="url(#gold)" stroke-width="1" opacity="0.6"/>
  <!-- Monogram NL -->
  <text x="50" y="62" font-family="'Cinzel', Georgia, serif" font-size="28" font-weight="700" fill="url(#gold)" text-anchor="middle" letter-spacing="1">NL</text>
  <!-- Small Diya Flame -->
  <path d="M 50 22 Q 48 16 50 12 Q 52 16 50 22 Z" fill="#FF1F8E"/>
</svg>'''
    with open(filename, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Created {filename}")

# Create Hero & Service Images
create_favicon("assets/images/favicon.svg")

hero_items = [
    ("assets/images/hero-catering.svg", "SIGNATURE CUISINE", "Royal Feasts & Live Chaat Counters", "#14100b", "FOOD CATERING"),
    ("assets/images/hero-decor.svg", "GRAND MANDAP DÉCOR", "Handcrafted Floral & Radiant Stage Setups", "#120f14", "EVENT DÉCOR"),
    ("assets/images/hero-photography.svg", "CANDID PHOTOGRAPHY", "Timeless Cinematic Moments & Storytelling", "#0b1214", "PHOTOGRAPHY"),
    ("assets/images/hero-makeup.svg", "BRIDAL & PARTY MAKEUP", "Artistry That Enhances Your Royal Grace", "#140b10", "MAKEUP ARTISTRY"),
]

for fn, title, sub, bg, cat in hero_items:
    create_svg(fn, title, sub, bg_color1=bg, bg_color2="#1f1a14", category=cat)

# Thumbnails
for fn, title, sub, bg, cat in hero_items:
    thumb_fn = fn.replace("hero-", "thumb-")
    create_svg(thumb_fn, title, sub, bg_color1=bg, bg_color2="#181410", category=cat)

# Service covers
create_svg("assets/images/service-catering.svg", "FOOD CATERING", "Regional & International Gastronomy", "#14100b", "CATERING")
create_svg("assets/images/service-decor.svg", "EVENT DÉCOR", "Floral Sculptures & Temple Lighting", "#120f14", "DÉCOR")
create_svg("assets/images/service-photography.svg", "PHOTOGRAPHY", "Pre-wedding & Celebration Coverage", "#0b1214", "CINEMA & PHOTO")
create_svg("assets/images/service-makeup.svg", "MAKEUP ARTISTRY", "HD & Airbrush Bridal Artistry", "#140b10", "MAKEUP")

# Packages
create_svg("assets/images/pkg-wedding.svg", "ROYAL WEDDING PACKAGE", "Complete Décor, Catering & Cinema Combo", "#16120b", "WEDDING COMBO")
create_svg("assets/images/pkg-birthday.svg", "CELEBRATION BIRTHDAY", "Themed Styling, Chaat & Photography", "#0f1614", "BIRTHDAY COMBO")
create_svg("assets/images/pkg-corporate.svg", "CORPORATE GALAS", "Stage Setup, Executive Buffet & Branding", "#120f16", "CORPORATE COMBO")

# About & Story
create_svg("assets/images/story-heritage.svg", "OUR PHILOSOPHY", "Tradition Reimagined With Modern Precision", "#12100d", "BENGALURU STYLED")
create_svg("assets/images/about-team-hero.svg", "THE NO LIMITS CREATIVE TEAM", "Designers, Chefs, Stylists & Lensmen", "#16130e", "ABOUT US")
create_svg("assets/images/enquiry-banner.svg", "LET'S PLAN YOUR CELEBRATION", "Crafting Moments Across Bengaluru", "#14110d", "GET IN TOUCH")

# Team
for i in range(1, 5):
    names = [("VIKRAM SHARMA", "Managing Director"), ("ANANYA RAO", "Lead Décor Designer"), ("CHEF RAJESH KUMAR", "Executive Culinary Director"), ("PRIYA NAIR", "Senior Makeup Artist")]
    create_svg(f"assets/images/team-0{i}.svg", names[i-1][0], names[i-1][1], "#13100c", "TEAM")

# Gallery photos (20 items)
occasions = ["weddings", "birthdays", "corporate", "other"]
services_list = ["decor", "catering", "photography", "makeup"]

gallery_titles = [
    ("Royal Palace Mandap", "weddings", "decor"),
    ("Live Tandoor & Chaat Station", "weddings", "catering"),
    ("Candid Ring Ceremony Moment", "weddings", "photography"),
    ("Bridal Glow Makeup Artistry", "weddings", "makeup"),
    ("Golden Jubilee Birthday Gala", "birthdays", "decor"),
    ("Artisanal Dessert Display", "birthdays", "catering"),
    ("1st Birthday Floral Stage", "birthdays", "decor"),
    ("Tech Leader Corporate Summit", "corporate", "decor"),
    ("Executive Plated Dinner", "corporate", "catering"),
    ("Award Gala Red Carpet Photo", "corporate", "photography"),
    ("Traditional Housewarming Puja", "other", "decor"),
    ("Engagement Floral Backdrop", "weddings", "decor"),
    ("Sangeet Night Lighting Setup", "weddings", "decor"),
    ("Royal Rajasthani Thali Buffet", "weddings", "catering"),
    ("Monochrome Couple Portrait", "weddings", "photography"),
    ("Glamour Reception Makeup", "weddings", "makeup"),
    ("Baby Shower Cradle Decor", "other", "decor"),
    ("Anniversary Lantern Party", "birthdays", "decor"),
    ("Cocktail Party Mocktail Bar", "corporate", "catering"),
    ("Festival Theme Decor", "other", "decor"),
]

for idx, (t, occ, srv) in enumerate(gallery_titles, start=1):
    fn = f"assets/images/gallery/item-{idx:02d}.svg"
    create_svg(fn, t, f"{occ.upper()} · {srv.upper()}", "#12100d", occ)

# Gallery videos (4 items)
video_titles = [
    ("Grand Wedding Highlights 2026", "weddings", "photography"),
    ("1st Birthday Balloon & Floral Magical World", "birthdays", "decor"),
    ("Corporate Excellence Award Gala Night", "corporate", "decor"),
    ("Bridal Transformation Film", "weddings", "makeup"),
]

for idx, (t, occ, srv) in enumerate(video_titles, start=1):
    fn = f"assets/images/gallery/video-poster-{idx:02d}.svg"
    create_svg(fn, t, f"VIDEO · {occ.upper()}", "#180f12", "VIDEO HIGHLIGHT")

print("All asset placeholder SVGs created successfully!")
