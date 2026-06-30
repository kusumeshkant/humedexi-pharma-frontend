# Changelog

All notable changes to this project are documented here.

---

## [3.1.0] — 2026-06-30 — RC1: Release Candidate Audit

### Added
- `public/og-image.svg` — 1200×630 branded SVG reference for OG/social preview image (convert to JPEG before launch)
- `DEPLOYMENT.md` — pre-launch checklist and step-by-step guide for Vercel and Netlify

### Fixed / Hardened
- `npm audit fix` applied — reduced vulnerabilities from 6 to 2 (remaining 2 are dev-server only, not production-impacting)

### Audited (no changes required)
- 26 source files reviewed: zero `console.log`, zero unused hook imports, zero TODO/FIXME in functional code
- All img tags have `alt` attributes; each page has exactly 1 `<h1>`; 13 ARIA attributes verified
- Build: 0 errors, 0 warnings, 20 code-split chunks, vendor 164KB / initial gzip ~73KB

---

## [3.0.0] — 2026-06-30 — Phase 3: Production Launch & Enterprise Readiness

### Added
- `react-helmet-async`: per-page SEO metadata management
- `src/components/seo/PageMeta.jsx`: centralized title, description, canonical, OG, and Twitter Card tags for all 10 pages
- `src/components/seo/JsonLd.jsx`: Schema.org structured data — Organization, WebSite, Drug/Product, BreadcrumbList
- `src/components/ErrorBoundary.jsx`: React Error Boundary class component with user-friendly error UI
- `src/lib/analytics.js`: Google Analytics 4 integration stub (inactive until VITE_GA_MEASUREMENT_ID is set)
- `public/robots.txt`: crawler directives + sitemap reference
- `public/sitemap.xml`: all 17 indexable URLs with priority and changefreq values
- `public/site.webmanifest`: PWA manifest with brand theme color and icon
- `public/_headers`: Netlify security header directives
- `public/_redirects`: Netlify SPA routing fix
- `vercel.json`: Vercel SPA routing rewrites, security headers, and asset cache headers
- `.env.example`: documented VITE_SITE_URL and VITE_GA_MEASUREMENT_ID alongside existing EmailJS keys
- Skip-to-main-content link in Layout for keyboard/screen reader users

### Changed
- `main.jsx`: wrapped app in `<HelmetProvider>`, added `initAnalytics()` call
- `App.jsx`: all 10 page imports converted to `React.lazy()`, wrapped in `<Suspense>`, `<ErrorBoundary>` added at root, `trackPageView` called on route change, `NotFound` improved with two action buttons
- `Layout.jsx`: Organization + WebSite JSON-LD schemas added, skip-to-content link added, main content tagged with `id="main-content"`
- `index.html`: added theme-color, apple-touch-icon, manifest link, improved OG meta, Twitter Card tags, removed redundant canonical from static HTML
- `vite.config.js`: build target ES2020, manual chunk splitting (vendor/emailjs/helmet), chunk size warning at 500KB
- `ProductDetail.jsx`: Drug JSON-LD schema + BreadcrumbList JSON-LD schema added
- All 10 pages: `PageMeta` component added with unique, page-specific title and description

### Performance
- **Bundle size**: 313KB single chunk → 20 code-split chunks
- **Initial gzip load**: 88KB → ~73KB (vendor + app shell + home page)
- **Route-based lazy loading**: subsequent pages load their JS chunk on navigation only
- **Chunk caching**: vendor chunk (React/Router/DOM) cached separately from app code

### Security
- Security headers configured for both Vercel and Netlify deployments: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (camera, mic, geolocation off)
- Asset cache headers: `/assets/*` → 1 year immutable, `/products/*` → 1 week

### SEO
- Unique `<title>` per page (vs. static title for all pages previously)
- Unique `<meta name="description">` per page
- `<link rel="canonical">` per page, driven by `VITE_SITE_URL` env var
- Open Graph tags on all pages (WhatsApp link previews will now show correct page title/description)
- Twitter Card tags on all pages
- Legal pages (Privacy, Terms, Disclaimer) marked `noindex, nofollow`
- Schema.org Organization + WebSite schema on all pages (via Layout)
- Schema.org Drug schema on each product page
- Schema.org BreadcrumbList on product pages

---

## [2.0.0] — 2026-06-30 — Phase 2: B2B Upgrade & QA

### Added
- 3 new products: HUMEDICLO-AQUA (injection), HUTAZ (injection), HUMEGA Syrup (nutraceutical)
- Full product schema fields: `badge`, `therapeuticSegment`, `strength`, `route`, `storage`, `shelfLife`, `indications[]`
- `ProductBadge` component — displays Rx (red), OTC (green), or Nutraceutical (indigo) chip
- ProductDetail: clinical indications chip cloud
- ProductDetail: specifications table with `overflow-x-auto` for mobile safety
- Home page: Partner Programs section (Request Quote, Become Distributor, Contact Sales)
- About page: Manufacturing Standards section (6 items), Distribution Network section, Why Choose section (6 items)
- Legal pages: Privacy Policy (`/privacy-policy`), Terms of Use (`/terms`), Medical Disclaimer (`/disclaimer`)
- Footer: WhatsApp quick contact button, legal links in bottom bar

### Changed
- ProductCard: added badge overlay, `therapeuticSegment` display, lazy image loading
- Products page: `useMemo` for `activeCats`, extended search (brandName, therapeuticSegment, form, route), improved empty state with contextual reset buttons
- Home page: `useMemo` for `activeCats`, stats use dynamic category count
- About page: stat corrected from `6+` to `7+` product categories
- Footer: removed `ointments` from product links (no products in that category)
- App.jsx: 3 new routes added (`/privacy-policy`, `/terms`, `/disclaimer`)

### Fixed
- **Critical React hooks violation**: `useState` in ProductDetail was called after an early return — moved before the `Navigate` guard
- ProductCarousel: `tripled` array now memoized with `useMemo` (was recomputed on every render)
- Navbar mobile menu button: added `aria-expanded`, `aria-controls="mobile-menu"` attributes
- Contact form: all labels have `htmlFor`, all inputs have `id` (screen reader accessibility)
- Enquiry form: all labels have `htmlFor`, all inputs/selects have `id` (screen reader accessibility)
- KETOXIVE Soap: composition field corrected from `'Ketoconazole Medicated Soap 75gm'` to `'Ketoconazole 2% Medicated Soap'` (packaging weight removed from composition)

---

## [1.0.0] — 2026-06-29 — Phase 1: Core SPA

### Added
- React 18 + Vite 5 SPA scaffolding
- React Router DOM v6 with 7 routes (Home, About, Products, ProductDetail, Enquiry, Contact, Certifications)
- Tailwind CSS with custom brand color tokens (`brand-blue`, `brand-teal`)
- Navbar: fixed top, scroll shadow, mobile hamburger menu, phone numbers in top bar
- Footer: product category links, contact details
- Home: hero section, stats bar, category grid, infinite product carousel, CTA
- About: company overview, mission/vision, values, journey timeline
- Products: category filter, keyword search, product grid
- ProductDetail: product image, composition, usage, benefits, packaging, related products
- Enquiry: bulk order form with EmailJS delivery, pre-fills product name from URL param
- Contact: general message form with EmailJS delivery, WhatsApp link
- Certifications: WHO-GMP, ISO, FSSAI display page
- Infinite carousel: tripled-array technique with snap-back, keyboard nav, touch swipe, auto-play
- EmailJS integration: `src/lib/emailjs.js` with `sendContactEmail` and `sendEnquiryEmail`
- Centralized constants: `src/config/constants.js`
- 8 initial products across 6 categories
