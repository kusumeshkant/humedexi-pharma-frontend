# Changelog

All notable changes to this project are documented here.

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
