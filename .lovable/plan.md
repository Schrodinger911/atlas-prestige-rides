## Atlas Prestige Cars — Luxury Car Rental (Morocco)

A premium, dark-aesthetic luxury car rental site with strict separation between **content**, **sections**, and **pages** so it can be ported to a CMS later (Sanity, Storyblok, Builder.io, etc.).

---

### 1. Stack & conventions

- TanStack Start (React 19 + Vite 7 + TS strict) — already in place
- Tailwind v4 (tokens in `src/styles.css` via `@theme`) + shadcn/ui
- File-based routing under `src/routes/`
- Lovable Cloud (Supabase) for storing contact inquiries + email notifications via Lovable Emails

### 2. Folder structure

```text
src/
├── routes/            # TanStack route files (pages assemble sections only)
│   ├── __root.tsx     # shell + Navbar + Footer + <Outlet/>
│   ├── index.tsx      # Home
│   ├── fleet.tsx      # Fleet listing + filter
│   ├── about.tsx      # About
│   └── contact.tsx    # Contact
├── sections/          # One file per page section
│   ├── home/{Hero,FeaturedFleet,WhyChooseUs,LuxuryExperience,Testimonials,FAQ,ContactCTA}.tsx
│   ├── fleet/{FleetGrid,FleetFilter}.tsx
│   ├── about/{Story,Stats,Advantages}.tsx
│   └── contact/{ContactFormSection,WhatsAppCTA,MapSection}.tsx
├── components/        # Reusable UI primitives
│   ├── layout/{Navbar,Footer,Container,SectionHeader,ThemeToggle}.tsx
│   ├── cards/{VehicleCard,TestimonialCard,FeatureCard,StatCard}.tsx
│   ├── forms/ContactForm.tsx
│   └── ui/...         # shadcn (already present)
├── content/           # ALL copy lives here — no strings in components
│   ├── site.ts        # brand, nav, contact (phone/whatsapp/email/address)
│   ├── hero.ts
│   ├── fleet.ts       # vehicles + categories
│   ├── testimonials.ts
│   ├── faq.ts
│   ├── about.ts       # story, stats, advantages
│   ├── whyChooseUs.ts
│   └── types.ts       # shared content types (Vehicle, Testimonial, Faq, ...)
├── assets/            # generated hero + vehicle imagery
├── hooks/             # useTheme, useScrollReveal
└── utils/             # cn, formatPrice, buildWhatsAppLink
```

### 3. Content layer (CMS-ready)

- Every section reads from a typed object in `src/content/*`
- Each content file exports `as const` data + a TS type, so swapping the import for a `loader()` fetch from Sanity/Storyblok later is a one-line change per section
- No hardcoded strings, prices, testimonials, FAQ, fleet, or contact info inside JSX

### 4. Pages

- **Home** (`/`) — Hero → FeaturedFleet → WhyChooseUs → LuxuryExperience → Testimonials → FAQ → ContactCTA
- **Fleet** (`/fleet`) — FleetFilter (Economy / Premium / Luxury / SUV / Sports) + FleetGrid of VehicleCards
- **About** (`/about`) — Story + Stats + Advantages
- **Contact** (`/contact`) — ContactForm + WhatsAppCTA + MapSection (Google Maps embed iframe — no API key needed)

Each route defines its own `head()` with unique title/description/og tags.

### 5. Design direction (committed)

- Dark-first theme with warm gold/champagne accents, optional light mode
- Glassmorphism cards (`bg-white/5 backdrop-blur-xl border-white/10`) over deep charcoal
- Editorial display serif (e.g. Cormorant/Playfair) paired with refined sans (Manrope/Inter)
- Subtle reveal/parallax via tailwind `animate-fade-in` + a lightweight scroll hook
- Tokens defined in `src/styles.css` under `@theme` — no hardcoded color classes
- Fonts loaded via `<link>` in `__root.tsx` (never `@import` in CSS)
- Mobile-first responsive grids using the documented `grid-cols-[minmax(0,1fr)_auto]` pattern for headers

### 6. Backend (Lovable Cloud)

- Enable Lovable Cloud
- Table `contact_inquiries(id, name, email, phone, vehicle_id nullable, pickup_date, return_date, message, created_at)` with RLS: `INSERT` allowed for `anon`+`authenticated`, `SELECT` admin-only
- Server function `submitInquiry` (`createServerFn`) validates with Zod, inserts row, then sends two emails via Lovable Emails:
  - **Admin notification** to the business inbox
  - **Customer confirmation** with booking details
- Email domain setup will be triggered (user prompted to configure sender domain)
- WhatsApp button uses `wa.me` deep link built from `content/site.ts`

### 7. Imagery

Generate with `imagegen`:
- 1 cinematic hero (luxury car on a Moroccan coastal/desert road, dusk)
- 6 vehicle photos (Mercedes C-Class, G63 AMG, BMW X5, Range Rover Sport, Porsche Cayenne, Audi Q8)
- 1 "experience" lifestyle image for the LuxuryExperience section

### 8. Deployment & SEO

- Per-route `head()` metadata, single H1 per page, semantic HTML, alt text on all images
- JSON-LD `Organization` on root, `Product` on each vehicle card list (optional v2)
- `robots.txt` + `sitemap.xml` with relative URLs (no domain yet)
- Build output is static + SSR-ready; deploys to Vercel/Netlify out of the box

### 9. Build order

1. Enable Lovable Cloud + email domain prompt
2. Tokens, fonts, theme toggle, Navbar/Footer in `__root.tsx`
3. `content/*` files + types
4. Reusable components (VehicleCard, TestimonialCard, SectionHeader, ContactForm, FAQ accordion using shadcn)
5. Generate imagery
6. Home sections → Fleet → About → Contact
7. `submitInquiry` server fn + email templates (`contact-admin-notification`, `contact-confirmation`)
8. SEO metadata pass + sitemap/robots
