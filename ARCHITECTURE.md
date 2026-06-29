# Humedaxive Pharma — Complete Project Architecture Document

> **Document Type:** Technical Architecture & Developer Reference  
> **Project:** Humedaxive Pharma Website  
> **Version:** 1.0.0  
> **Prepared by:** Senior Full-Stack Architect  
> **Last Updated:** April 2026  
> **Status:** Pre-Production (Pre-Live Corrections Pending)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Context](#2-business-context)
3. [Tech Stack](#3-tech-stack)
4. [Architecture Overview](#4-architecture-overview)
5. [Complete File Structure](#5-complete-file-structure)
6. [File-by-File Responsibility Map](#6-file-by-file-responsibility-map)
7. [Pages Architecture](#7-pages-architecture)
8. [Component Architecture](#8-component-architecture)
9. [Data Layer](#9-data-layer)
10. [Routing Architecture](#10-routing-architecture)
11. [State Management](#11-state-management)
12. [Form Handling Architecture](#12-form-handling-architecture)
13. [Styling System](#13-styling-system)
14. [SEO Architecture](#14-seo-architecture)
15. [Asset Management](#15-asset-management)
16. [Build & Deployment Architecture](#16-build--deployment-architecture)
17. [Pre-Live Corrections Required](#17-pre-live-corrections-required)
18. [Future Backend Integration Plan](#18-future-backend-integration-plan)
19. [Future Admin Panel Plan](#19-future-admin-panel-plan)
20. [Lead Capture & CRM Strategy](#20-lead-capture--crm-strategy)
21. [SEO Strategy for Pharma](#21-seo-strategy-for-pharma)
22. [Performance Optimization Plan](#22-performance-optimization-plan)
23. [Security Considerations](#23-security-considerations)
24. [Developer Onboarding Guide](#24-developer-onboarding-guide)
25. [Glossary](#25-glossary)

---

## 1. Executive Summary

Humedaxive Pharma is a pharmaceutical company based in Bihar, India. This document describes the complete technical architecture of their marketing and lead-generation website, built as a modern React Single Page Application (SPA).

The website serves as the company's primary digital touchpoint for:
- Doctors looking for reliable medicine suppliers
- Distributors evaluating wholesale partnerships
- Clinics and hospitals sourcing bulk pharmaceutical supplies

**Current State:** The frontend is 100% complete and production-build verified. The site is functional as a static presentation layer. The critical missing piece before going live is backend integration for form submissions (lead capture).

**Architecture Philosophy:** Keep it simple, fast, and maintainable. No over-engineering. A static React SPA served from a CDN is the right architecture for this use case — it is fast, cheap to host, and easy to update.

---

## 2. Business Context

| Field              | Detail                                      |
|--------------------|---------------------------------------------|
| Company            | Humedaxive Pharma                             |
| Location           | Bihar, India                                |
| Phone 1            | +91 98521 03407                             |
| Phone 2            | +91 88770 60059                             |
| Target Audience    | Doctors, Clinics, Hospitals, Distributors   |
| Primary Goal       | Generate enquiries and build brand trust    |
| Certifications     | WHO-GMP, ISO 9001:2015, FSSAI              |
| Product Categories | Capsules, Tablets, Injections, Syrups, Ointments, Creams, Soaps |
| Current Products   | 8 real products (more to be added)          |

---

## 3. Tech Stack

### 3.1 Core Framework

| Technology       | Version   | Purpose                                      | Why This Choice |
|------------------|-----------|----------------------------------------------|-----------------|
| React            | 18.3.1    | UI component framework                       | Industry standard, large talent pool, component reusability |
| Vite             | 5.4.6     | Build tool & dev server                      | 10–100x faster than Webpack/CRA, native ESM, instant HMR |
| React Router DOM | 6.26.2    | Client-side routing & navigation             | Standard routing solution for React SPAs |

### 3.2 Styling

| Technology    | Version   | Purpose                          | Why This Choice |
|---------------|-----------|----------------------------------|-----------------|
| Tailwind CSS  | 3.4.11    | Utility-first CSS framework      | No context switching, no CSS files to maintain, consistent design system |
| PostCSS       | 8.4.45    | CSS transformation pipeline      | Required by Tailwind for processing |
| Autoprefixer  | 10.4.20   | Browser vendor prefix automation | Ensures cross-browser CSS compatibility |

### 3.3 Fonts & Icons

| Resource      | Source              | Purpose                     |
|---------------|---------------------|-----------------------------|
| Inter Font    | Google Fonts CDN    | Primary UI typeface          |
| SVG Icons     | Hand-coded inline   | Healthcare-specific iconography (no icon library dependency) |

### 3.4 Development Tools

| Tool              | Version  | Purpose                         |
|-------------------|----------|---------------------------------|
| Node.js           | 18+      | JavaScript runtime              |
| npm               | 9+       | Package manager                 |
| @vitejs/plugin-react | 4.3.1 | Babel-based React Fast Refresh  |
| @types/react      | 18.3.5   | TypeScript type hints (JSDoc)   |

### 3.5 NOT Used (Intentional Decisions)

| Excluded               | Reason                                                         |
|------------------------|----------------------------------------------------------------|
| TypeScript             | Overkill for a marketing site; adds build complexity           |
| Redux / Zustand        | No shared global state needed; React local state is sufficient |
| Axios                  | No API calls yet; fetch() will suffice when backend is added   |
| Next.js                | SSR not needed for current scope; Vite SPA is simpler and faster to develop |
| UI Library (MUI, Ant)  | Would force a generic look; custom Tailwind gives brand identity |
| GraphQL                | REST is sufficient for this data scale                         |
| Icon Library           | Inline SVGs avoid extra bundle weight                          |

---

## 4. Architecture Overview

### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        USER BROWSER                     │
│                                                         │
│  ┌──────────┐    ┌───────────┐    ┌─────────────────┐  │
│  │  Navbar  │    │   Pages   │    │     Footer      │  │
│  │ (fixed)  │    │ (routed)  │    │   (persistent)  │  │
│  └──────────┘    └───────────┘    └─────────────────┘  │
│         │               │                              │
│         └───────────────┴──────────────────────────────│
│                         │                              │
│                   React Router v6                      │
│                   (Client-side routing)                │
│                         │                              │
│         ┌───────────────┼───────────────────────┐     │
│         │               │                       │     │
│    Static Data      UI Components          Form State  │
│    (products.js)   (ProductCard, etc.)    (useState)  │
└─────────────────────────────────────────────────────────┘
                          │
              [Form Submit — CURRENTLY MISSING]
                          │
                  ┌───────────────┐
                  │  Future:      │
                  │  - EmailJS    │
                  │  - Firebase   │
                  │  - Node.js API│
                  └───────────────┘
```

### 4.2 Data Flow

```
products.js (static data source)
    │
    ├──► Home.jsx         (featured 4 products)
    ├──► Products.jsx     (all products, filtered)
    ├──► ProductDetail.jsx (single product by ID)
    └──► Footer.jsx       (category links)

URL Params Flow:
    ProductCard → /enquiry?product=AZIXIVE   → Enquiry.jsx (pre-fills form)
    Home Categories → /products?category=tablets → Products.jsx (pre-filters)
```

### 4.3 Component Hierarchy

```
App.jsx
└── Layout.jsx
    ├── Navbar.jsx
    │   └── NavLink (React Router)
    ├── [Page Component — routed]
    │   ├── SectionHeader.jsx (reusable)
    │   └── ProductCard.jsx (reusable)
    └── Footer.jsx
```

### 4.4 Architecture Pattern

This project uses **Feature-Collocated Pages** with **Shared UI Components**:
- Each page is self-contained and owns its layout logic
- Reusable pieces are extracted to `components/ui/`
- Layout shell (Navbar + Footer) is injected via `Layout.jsx`
- No prop drilling beyond 2 levels — keeps the codebase readable

---

## 5. Complete File Structure

```
humeda_project/
│
├── public/                          # Static assets (served as-is, no bundling)
│   └── products/                   # Real product images (8 files)
│       ├── azixive.jpeg
│       ├── hupan-dsr.jpeg
│       ├── humen-sp.jpeg
│       ├── humezyme-syrup.jpeg
│       ├── lulixive-cream.jpeg
│       ├── iraxive.jpeg
│       ├── hupan-d-sr.jpeg
│       └── ketoxive-soap.jpeg
│
├── src/                             # All application source code
│   │
│   ├── components/                  # Reusable React components
│   │   ├── layout/                  # Structural shell components
│   │   │   ├── Navbar.jsx           # Top navigation bar (fixed, responsive)
│   │   │   ├── Footer.jsx           # Site footer with links & contact
│   │   │   └── Layout.jsx           # Page wrapper (Navbar + children + Footer)
│   │   │
│   │   └── ui/                      # Generic UI building blocks
│   │       ├── ProductCard.jsx      # Product display card with image
│   │       └── SectionHeader.jsx    # Reusable section heading with tag + subtitle
│   │
│   ├── data/                        # Static data layer
│   │   └── products.js             # All product data + category definitions
│   │
│   ├── pages/                       # One file per route/page
│   │   ├── Home.jsx                 # Landing page (conversion-focused)
│   │   ├── About.jsx                # Company overview, mission, values
│   │   ├── Products.jsx             # Product catalogue with filter + search
│   │   ├── ProductDetail.jsx        # Individual product detail page
│   │   ├── Certifications.jsx       # WHO-GMP, ISO, FSSAI detail page
│   │   ├── Contact.jsx              # Contact form + map + phone
│   │   └── Enquiry.jsx              # Lead generation / bulk order form
│   │
│   ├── App.jsx                      # Root component — defines all routes
│   ├── main.jsx                     # React DOM entry point (mounts App)
│   └── index.css                    # Global styles + Tailwind directives + custom classes
│
├── index.html                       # HTML shell — meta tags, fonts, SEO
├── vite.config.js                   # Vite build configuration
├── tailwind.config.js               # Tailwind theme — custom colors, fonts
├── postcss.config.js                # PostCSS pipeline config
├── package.json                     # Dependencies & npm scripts
└── ARCHITECTURE.md                  # This document
```

---

## 6. File-by-File Responsibility Map

### Root Config Files

| File               | Responsibility                                                              |
|--------------------|-----------------------------------------------------------------------------|
| `index.html`       | HTML shell. Holds global SEO meta tags, Google Fonts link, og tags. Entry point for the browser. |
| `vite.config.js`   | Configures the build tool. Registers the React plugin for JSX + HMR.       |
| `tailwind.config.js` | Defines the design system — custom colors (`brand-blue`, `brand-teal`), font family, content paths for purging. |
| `postcss.config.js`  | Wires Tailwind and Autoprefixer into the CSS pipeline.                    |
| `package.json`     | Lists all dependencies with pinned versions. Defines `dev`, `build`, `preview` scripts. |

### Source Files

| File                            | Responsibility                                                                      |
|---------------------------------|-------------------------------------------------------------------------------------|
| `src/main.jsx`                  | Bootstraps React. Wraps app in `<BrowserRouter>`. Mounts to `#root` div.           |
| `src/App.jsx`                   | Defines all client-side routes using React Router v6. Handles scroll-to-top on route change. Contains 404 fallback page. |
| `src/index.css`                 | Imports Tailwind layers. Defines reusable utility classes (`.btn-primary`, `.form-input`, `.section-pad`, `.container-max`, `.cert-badge`). |
| `src/data/products.js`          | Single source of truth for all product data and category definitions. Exports `PRODUCTS` array and `CATEGORIES` array. **Edit this file to add/update/remove products.** |
| `src/components/layout/Layout.jsx` | Wrapper component. Renders `<Navbar>` + `<main>` + `<Footer>`. Adds `pt-[104px]` to push content below the fixed navbar. |
| `src/components/layout/Navbar.jsx` | Fixed top navigation. Has two parts: (1) blue top bar with phone numbers and certification label, (2) main nav with logo, links, CTA. Handles scroll shadow effect and mobile hamburger menu. |
| `src/components/layout/Footer.jsx` | Site footer. Four columns: brand info + cert badges, quick links, product categories, contact details. Copyright bar at bottom. |
| `src/components/ui/ProductCard.jsx` | Reusable card for displaying a product. Shows real image with emoji fallback, category badge, name, form, composition. Two CTAs: View Details + Enquire. |
| `src/components/ui/SectionHeader.jsx` | Reusable section heading block. Accepts `tag` (pill label), `title`, `subtitle`, and `center` boolean. Used across all pages. |
| `src/pages/Home.jsx`            | Landing page. Contains: Hero, Certifications strip, Product Categories grid, Featured Products (4 cards), Why Choose Us (6 trust points), CTA banner. |
| `src/pages/About.jsx`           | Company story page. Contains: Overview + stats, Mission & Vision split cards, Core Values grid, Quality Commitment, Journey timeline, CTA. |
| `src/pages/Products.jsx`        | Product catalogue. Reads `?category=` from URL params. Sticky filter bar with category pills + search input. Shows product count. Empty state with clear-filter button. |
| `src/pages/ProductDetail.jsx`   | Dynamic route `/products/:id`. Looks up product by ID from `PRODUCTS`. Shows breadcrumb, real image, all product fields, certification badges, enquire + call CTAs, related products. Redirects to `/products` if ID not found. |
| `src/pages/Certifications.jsx`  | Deep-dive page for WHO-GMP, ISO, FSSAI. Each cert gets a full explanation card with "what it means" bullet points and "why it matters to you" section. 6-step QA process section. |
| `src/pages/Contact.jsx`         | Contact page. Split layout: sidebar (phone, address, hours, WhatsApp CTA, cert reminder) + contact form. Google Maps placeholder. Form has validation for name, phone (Indian regex), email, message. |
| `src/pages/Enquiry.jsx`         | Lead generation page. Pre-fills product from URL `?product=` param. Form fields: name, org type (dropdown), org name, phone, email, product interest, quantity, message. Full validation. WhatsApp + call alternatives in sidebar. |

---

## 7. Pages Architecture

### Page Inventory

| Route               | Page Component      | Purpose                                   | Primary CTA         |
|---------------------|---------------------|-------------------------------------------|---------------------|
| `/`                 | `Home.jsx`          | First impression, trust building          | Enquire Now         |
| `/about`            | `About.jsx`         | Credibility, mission, values              | Make an Enquiry     |
| `/products`         | `Products.jsx`      | Product discovery with filter             | Bulk Enquiry        |
| `/products/:id`     | `ProductDetail.jsx` | Individual product conversion page        | Enquire for Product |
| `/certifications`   | `Certifications.jsx`| Trust building for institutional buyers   | Make an Enquiry     |
| `/contact`          | `Contact.jsx`       | General contact & location                | Send Message        |
| `/enquiry`          | `Enquiry.jsx`       | Primary lead capture page                 | Submit Enquiry      |
| `*`                 | NotFound (inline)   | 404 fallback                              | Back to Home        |

### Page Scroll Behavior
- `ScrollToTop` component in `App.jsx` — fires `window.scrollTo(0, 0)` on every route change, preventing users from landing mid-page when navigating.

---

## 8. Component Architecture

### 8.1 Layout Components (Structural — always rendered)

```
Navbar
├── Top bar (fixed blue strip) — phone numbers + certification label
├── Logo (SVG icon + brand name)
├── Desktop nav links (hidden on mobile)
├── "Enquire Now" CTA button (hidden on mobile)
└── Mobile hamburger — collapses to vertical menu

Footer
├── Brand column — tagline + cert badges
├── Quick links column
├── Product categories column
└── Contact column — phone + WhatsApp + address
```

### 8.2 UI Components (Reusable — used across pages)

**`SectionHeader`**
- Props: `tag` (string), `title` (string), `subtitle` (string), `center` (boolean, default true)
- Used on: Home, About, Products, Certifications, Contact, Enquiry
- Renders a teal pill tag, bold heading, and grey subtitle

**`ProductCard`**
- Props: `product` (object from `PRODUCTS` array)
- Internal state: `imgError` (boolean) — falls back to emoji if image fails to load
- Renders: category badge, product image, brand name, form type, composition, two CTAs
- Used on: Home (featured), Products (full grid)

### 8.3 Component Communication Pattern

```
Parent passes data down → Child renders it (props only)
No context API used   → Simple enough not to need it
No event callbacks up → Each component handles its own navigation via React Router Link
```

---

## 9. Data Layer

### 9.1 Current Architecture: Static JavaScript Module

```
src/data/products.js
    exports CATEGORIES  →  array of { id, label, icon }
    exports PRODUCTS    →  array of product objects
```

**Product Object Shape:**
```js
{
  id:          string,   // unique slug, used in URL: /products/:id
  category:    string,   // matches CATEGORIES[n].id
  name:        string,   // full display name
  brandName:   string,   // short brand name shown on card
  composition: string,   // active ingredients + strengths
  usage:       string,   // indications and uses
  benefits:    string,   // clinical advantages
  packaging:   string,   // pack size information
  form:        string,   // tablet / capsule / syrup etc.
  image:       string,   // path relative to public/ e.g. /products/azixive.jpeg
}
```

**Category Object Shape:**
```js
{
  id:    string,   // lowercase slug: 'tablets', 'capsules' etc.
  label: string,   // display name: 'Tablets'
  icon:  string,   // emoji icon shown in category grids
}
```

### 9.2 Current Product Count by Category

| Category   | Products |
|------------|----------|
| Tablets    | 2        |
| Capsules   | 3        |
| Syrups     | 1        |
| Creams     | 1        |
| Soaps      | 1        |
| Injections | 0 ⚠️     |
| Ointments  | 0 ⚠️     |
| **Total**  | **8**    |

> ⚠️ **Action Required:** Injections and Ointments have zero products. The filter shows "No products found" for these categories. Add real products or remove these categories from the CATEGORIES array.

### 9.3 Future Data Architecture (Post-Backend)

```
Current:  Static JS file → imported directly into components
Future:   REST API → fetch() calls → component state → render

Transition plan:
1. Keep products.js as fallback/seed data
2. Add api.js utility with fetch wrappers
3. Replace static imports with useEffect + useState API calls
4. Add loading skeletons during fetch
```

---

## 10. Routing Architecture

### 10.1 Router Setup

- **Router Type:** `BrowserRouter` — uses HTML5 History API for clean URLs (`/products`, not `/#/products`)
- **Location:** `src/main.jsx` — wraps the entire app
- **Route Definitions:** `src/App.jsx` — all routes defined in one place

### 10.2 Route Table

```jsx
<Routes>
  <Route path="/"               element={<Home />} />
  <Route path="/about"          element={<About />} />
  <Route path="/products"       element={<Products />} />
  <Route path="/products/:id"   element={<ProductDetail />} />
  <Route path="/certifications" element={<Certifications />} />
  <Route path="/contact"        element={<Contact />} />
  <Route path="/enquiry"        element={<Enquiry />} />
  <Route path="*"               element={<NotFound />} />
</Routes>
```

### 10.3 URL Parameter Usage

| Page            | Param               | Source                  | Effect                              |
|-----------------|---------------------|-------------------------|-------------------------------------|
| ProductDetail   | `:id` (path param)  | ProductCard Link        | Looks up product from PRODUCTS array |
| Products        | `?category=`        | Category links, Footer  | Pre-filters product grid            |
| Enquiry         | `?product=`         | ProductCard "Enquire"   | Pre-fills Product Interest field    |

### 10.4 Critical Deployment Note — SPA Routing

> ⚠️ **BrowserRouter requires server-side configuration on production hosting.**
>
> When a user directly visits `https://humeda.com/products` or refreshes any page other than `/`, the server must return `index.html` for all routes — otherwise the server returns a 404.
>
> **Fix per hosting platform:**
> - **Netlify:** Add `public/_redirects` file: `/* /index.html 200`
> - **Vercel:** Add `vercel.json` with rewrites config
> - **Apache:** Add `.htaccess` with mod_rewrite rules
> - **Nginx:** Add `try_files $uri /index.html` in server block

---

## 11. State Management

### 11.1 Philosophy: Local State Only

This project uses **React's built-in `useState` and `useEffect` only**. No external state management library. This is correct for this scale.

### 11.2 State Inventory

| Component      | State Variable    | Type      | Purpose                                    |
|----------------|-------------------|-----------|--------------------------------------------|
| Navbar         | `menuOpen`        | boolean   | Controls mobile menu open/close            |
| Navbar         | `scrolled`        | boolean   | Applies shadow when page is scrolled       |
| ProductCard    | `imgError`        | boolean   | Falls back to emoji if image fails         |
| ProductDetail  | `imgError`        | boolean   | Same image fallback                        |
| Products       | `search`          | string    | Live search filter text                    |
| Contact        | `form`            | object    | Controlled form field values               |
| Contact        | `errors`          | object    | Per-field validation error messages        |
| Contact        | `submitted`       | boolean   | Shows success state after submit           |
| Enquiry        | `form`            | object    | Controlled form field values               |
| Enquiry        | `errors`          | object    | Per-field validation error messages        |
| Enquiry        | `submitted`       | boolean   | Shows success state after submit           |

### 11.3 URL as State

`Products.jsx` uses `useSearchParams()` from React Router to read and write `?category=` — treating the URL as state. This means:
- The filtered state survives page refresh
- Users can share filtered URLs (e.g. share the Capsules filtered view)
- Browser back/forward buttons work correctly

---

## 12. Form Handling Architecture

### 12.1 Pattern Used: Controlled Components

Both forms use React controlled inputs (`value` + `onChange`) with local state. This is the correct pattern for this scale.

### 12.2 Validation Logic

```
onSubmit triggered
    → validate() called
    → if errors object has keys → setErrors(), stop
    → if no errors → proceed (currently: console.log only)
```

**Validation Rules:**

| Field      | Rule                                          |
|------------|-----------------------------------------------|
| name       | Required, non-empty after trim                |
| phone      | Required, matches `/^[6-9]\d{9}$/` (Indian mobile) |
| email      | Optional, validates format if provided        |
| orgType    | Required (select dropdown, must not be empty) |
| message    | Required, non-empty after trim                |
| productInterest | Required, non-empty after trim           |

### 12.3 Current Form Submit Destination

```
Contact form  → console.log(form)   ← MUST BE REPLACED
Enquiry form  → console.log(form)   ← MUST BE REPLACED
```

### 12.4 Target Form Submit Flow (Post-Integration)

```
User submits form
    → Validate locally
    → Set loading = true
    → POST to API or EmailJS send()
    → On success: setSubmitted(true), clear form
    → On error:   show toast/error message
    → Set loading = false
```

---

## 13. Styling System

### 13.1 Design Tokens (Custom Colors)

Defined in `tailwind.config.js`:

```js
brand: {
  blue:        '#1a4f8a'   // Primary — deep medical blue (buttons, navbar, headings)
  'blue-dark': '#133b6e'   // Hover state for blue elements
  'blue-light':'#e8f1fb'   // Background tint, badges, hover backgrounds
  teal:        '#0d9488'   // Secondary — trust green-teal (CTAs, accents)
  'teal-dark': '#0a7a6e'   // Hover state for teal elements
  'teal-light':'#e0f7f5'   // Background tint for teal elements
}
```

**Colour Psychology:**
- **Blue** = Medical authority, trust, professionalism (used for primary actions and brand identity)
- **Teal** = Healthcare, wellness, reliability (used for secondary CTAs and success states)
- **White** = Cleanliness, medical-grade sterility (primary background)
- **Gray scale** = Supporting text, borders, subtle backgrounds

### 13.2 Custom Utility Classes (in `index.css`)

| Class           | CSS Equivalent                                  | Used For                        |
|-----------------|-------------------------------------------------|---------------------------------|
| `.btn-primary`  | Blue filled button with hover, focus ring       | Primary CTAs (Enquire Now etc.) |
| `.btn-secondary`| White button with blue border                   | Secondary CTAs                  |
| `.btn-teal`     | Teal filled button                              | Enquiry form submit             |
| `.form-input`   | Full-width input with border + focus ring       | All form fields                 |
| `.section-pad`  | `py-16 px-4 sm:px-6 lg:px-8`                  | Consistent section spacing      |
| `.container-max`| `max-w-7xl mx-auto`                            | Page content width constraint   |
| `.cert-badge`   | Centered flex column with shadow, border        | Certification display cards     |

### 13.3 Responsive Breakpoints

Using Tailwind defaults:
- `sm:` — 640px (small tablets)
- `md:` — 768px (tablets, hamburger menu hides)
- `lg:` — 1024px (desktop layouts, 2-column grids)
- `xl:` — 1280px (wider desktop)

### 13.4 Typography Scale

| Use Case         | Classes                            |
|------------------|------------------------------------|
| Page H1          | `text-4xl sm:text-5xl font-bold`   |
| Section H2       | `text-3xl sm:text-4xl font-bold`   |
| Card heading     | `text-base font-semibold`          |
| Body text        | `text-gray-600 leading-relaxed`    |
| Labels/metadata  | `text-xs font-semibold uppercase tracking-wider` |

---

## 14. SEO Architecture

### 14.1 Current Implementation

| Element                  | Status      | Location             |
|--------------------------|-------------|----------------------|
| HTML lang attribute      | ✅ Done     | `index.html`         |
| Meta description         | ✅ Done     | `index.html`         |
| Meta keywords            | ✅ Done     | `index.html`         |
| og:title                 | ✅ Done     | `index.html`         |
| og:description           | ✅ Done     | `index.html`         |
| og:type                  | ✅ Done     | `index.html`         |
| og:image                 | ❌ Missing  | —                    |
| og:url                   | ❌ Missing  | —                    |
| Canonical tag            | ❌ Missing  | —                    |
| Per-page title tags      | ❌ Missing  | Needs react-helmet-async |
| Per-page meta description| ❌ Missing  | Needs react-helmet-async |
| robots.txt               | ❌ Missing  | `public/`            |
| sitemap.xml              | ❌ Missing  | `public/`            |
| Structured data (JSON-LD)| ❌ Missing  | —                    |
| Semantic HTML (H1/H2/H3) | ✅ Done     | All pages            |
| Image alt text           | ✅ Done     | ProductCard, ProductDetail |

### 14.2 SEO Fixes Required Before Live

```
1. Install: npm install react-helmet-async
2. Wrap App in <HelmetProvider>
3. Add <Helmet> to each page with unique title + description
4. Add og:image (1200x630px branded image)
5. Add robots.txt to public/
6. Add sitemap.xml to public/ after domain is confirmed
7. Add JSON-LD Organization schema to index.html
```

---

## 15. Asset Management

### 15.1 Static Assets (in `public/`)

Files in `public/` are served as-is by Vite — no bundling, no hashing. Accessed via absolute paths from the root.

```
public/
└── products/         ← Product images served at /products/*.jpeg
    ├── azixive.jpeg
    ├── hupan-dsr.jpeg
    ├── humen-sp.jpeg
    ├── humezyme-syrup.jpeg
    ├── lulixive-cream.jpeg
    ├── iraxive.jpeg
    ├── hupan-d-sr.jpeg
    └── ketoxive-soap.jpeg
```

**Missing from public/:**
- `favicon.ico` ← ⚠️ Required before live
- `favicon.svg` ← Recommended
- `og-image.jpg` ← Required for social sharing (1200×630px)
- `robots.txt` ← Required for SEO
- `sitemap.xml` ← Required for SEO

### 15.2 Image Optimization Problem

Current product images are raw WhatsApp JPEGs — likely 300KB–1.5MB each. On a 4G connection in Bihar (avg 15 Mbps), loading 8 product images at 1MB each = 8 seconds of image load time.

**Required action before live:**
```
Tool: Squoosh (squoosh.app) — free, browser-based
Target: Each image under 80KB at 800px wide
Format: WebP preferred, JPEG fallback
```

---

## 16. Build & Deployment Architecture

### 16.1 Available Scripts

```bash
npm run dev      # Start Vite dev server at http://localhost:5173 with HMR
npm run build    # Production build → outputs to dist/
npm run preview  # Preview production build locally at http://localhost:4173
```

### 16.2 Build Output

```
dist/
├── index.html                  # 1.42 KB
├── assets/
│   ├── index-[hash].js         # ~256 KB (73 KB gzipped) — all JS
│   └── index-[hash].css        # ~30 KB (5.4 KB gzipped) — all CSS
└── products/                   # Copied from public/ (images)
```

**Total JS bundle:** 256 KB raw / **74 KB gzipped** — acceptable for a pharma marketing site.

### 16.3 Recommended Hosting Platforms

| Platform   | Cost        | SPA Support | Custom Domain | SSL  | Recommended For |
|------------|-------------|-------------|---------------|------|-----------------|
| **Vercel** | Free tier   | ✅ Auto     | ✅            | ✅   | Best DX, zero-config deploys |
| **Netlify**| Free tier   | ✅ Auto     | ✅            | ✅   | Simple, great for SPAs       |
| Cloudflare Pages | Free  | ✅          | ✅            | ✅   | Fastest CDN globally         |
| GitHub Pages | Free      | ⚠️ Manual   | ✅            | ✅   | Requires hash router         |

**Recommendation: Vercel or Netlify.** Both auto-detect Vite projects and configure SPA routing automatically. Deployment is as simple as connecting a GitHub repository.

### 16.4 Deployment Steps (Vercel — Recommended)

```
1. Push project to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Framework: Vite (auto-detected)
4. Build command: npm run build
5. Output directory: dist
6. Deploy → live in ~60 seconds
7. Add custom domain in Vercel dashboard
```

### 16.5 SPA Redirect Config Files (Must Add Before Deploy)

**For Netlify** — create `public/_redirects`:
```
/*  /index.html  200
```

**For Vercel** — create `vercel.json` in project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 17. Pre-Live Corrections Required

### 🔴 CRITICAL (Blocking — must fix before any live deployment)

| # | Issue | File(s) | Fix |
|---|-------|---------|-----|
| 1 | Forms not connected — leads lost silently | `Contact.jsx:32`, `Enquiry.jsx:62` | Integrate EmailJS or Firebase; replace `console.log` |
| 2 | Wrong stats ("500+ products") | `Home.jsx:65-69`, `About.jsx` | Update to real numbers (8 products, 5 categories with products) |
| 3 | Zero products in Injections & Ointments | `products.js` | Add real products OR remove categories from `CATEGORIES` array |
| 4 | No favicon | `public/` | Add `favicon.ico` and `favicon.svg` |
| 5 | Google Maps is fake placeholder | `Contact.jsx:192-212` | Add real address + Google Maps embed iframe |
| 6 | Full company address missing | All pages, Footer | Add street address, district, pin code everywhere |
| 7 | No company email address | All pages | Add email to Navbar topbar, Footer, Contact sidebar |
| 8 | `console.log` in form handlers | `Contact.jsx:32`, `Enquiry.jsx:62` | Remove before live. Never log PII in production |
| 9 | No per-page title/meta tags | All pages | Install `react-helmet-async`, add `<Helmet>` per page |
| 10 | No `og:image` | `index.html` | Create 1200×630 branded image, add to `index.html` |

### 🟠 HIGH PRIORITY (Fix within 1 week of going live)

| # | Issue | File(s) | Fix |
|---|-------|---------|-----|
| 11 | Product images unoptimized | `public/products/*.jpeg` | Compress to <80KB using Squoosh |
| 12 | No `robots.txt` | `public/` | Add `public/robots.txt` |
| 13 | No `sitemap.xml` | `public/` | Generate after domain confirmed |
| 14 | About page timeline has no years | `About.jsx:12-16` | Add real founding year, certification year |
| 15 | `pt-[104px]` hardcoded in Layout | `Layout.jsx:9` | Measure actual navbar height dynamically or add mobile override |
| 16 | No form loading/submitting state | `Contact.jsx`, `Enquiry.jsx` | Add `loading` state, disable button while submitting |
| 17 | SPA redirect config missing | `public/` | Add `_redirects` (Netlify) or `vercel.json` |

### 🟡 MEDIUM PRIORITY (Fix within 1 month)

| # | Issue | File(s) | Fix |
|---|-------|---------|-----|
| 18 | No canonical / og:url | `index.html` | Add once domain is confirmed |
| 19 | Google Fonts CDN dependency | `index.html` | Self-host Inter font or ensure adequate CSS fallback |
| 20 | `vite.config.js` no base path | `vite.config.js` | Add `base: '/'` explicitly |
| 21 | Footer shows empty categories | `Footer.jsx` | Only show categories that have products |
| 22 | No JSON-LD structured data | `index.html` | Add Organization schema for Google rich results |

### 🔵 CONTENT REQUIRED FROM CLIENT

| # | Item Needed                          | Where Used                              |
|---|--------------------------------------|-----------------------------------------|
| 23 | Exact company street address + pin  | Contact page, Footer, Maps embed        |
| 24 | Company email address               | Navbar, Footer, Contact page            |
| 25 | Company founding year               | About page timeline                     |
| 26 | WHO-GMP certificate number          | Certifications page — builds credibility|
| 27 | FSSAI license number                | Certifications page + Footer            |
| 28 | Company logo (PNG/SVG file)         | Navbar, Footer, og:image, Favicon       |

---

## 18. Future Backend Integration Plan

### 18.1 Option A — EmailJS (Fastest, No Server)

**Timeline:** 2–3 hours  
**Cost:** Free (200 emails/month), paid plans from $9/month  
**Complexity:** Low — no backend server needed

```bash
npm install emailjs-com
```

```js
// In form handleSubmit:
import emailjs from 'emailjs-com'

emailjs.send(
  'SERVICE_ID',
  'TEMPLATE_ID',
  { name: form.name, phone: form.phone, message: form.message },
  'PUBLIC_KEY'
).then(() => setSubmitted(true))
```

Setup: Create account on emailjs.com → connect Gmail → create template → paste IDs.

### 18.2 Option B — Firebase (Recommended for Growth)

**Timeline:** 1 day  
**Cost:** Free (Spark plan) for current scale  
**Complexity:** Medium — learn Firestore basics

```bash
npm install firebase
```

Architecture:
```
Form Submit → Firestore addDoc('enquiries', formData)
           → Cloud Function triggers → sends email notification
           → Admin can view all enquiries in Firebase Console
```

Benefits: Real-time database of all leads, can build admin dashboard on top of it.

### 18.3 Option C — Node.js + Express (Full Control)

**Timeline:** 3–5 days  
**Cost:** VPS hosting ~₹500–1000/month  
**Complexity:** High — requires backend server, deployment, maintenance

```
POST /api/contact  → validate → save to MongoDB → send email via Nodemailer
POST /api/enquiry  → validate → save to MongoDB → send WhatsApp via Twilio
```

Recommended only if admin panel with full lead management is planned.

---

## 19. Future Admin Panel Plan

### 19.1 Simple Admin (Firebase-Based)

```
Firebase Auth → login screen
Firestore    → enquiries collection displayed in table
Admin React  → view, filter, mark as contacted, export to CSV
```

**Recommended package:** `react-admin` — plugs directly into Firestore.

### 19.2 What the Admin Panel Should Show

- All enquiries (name, org, phone, product interest, date)
- Enquiry status (New / Contacted / Converted)
- Filter by date range, org type, product
- Export enquiries to Excel/CSV
- Product management (add/edit/delete products from UI instead of editing code)

---

## 20. Lead Capture & CRM Strategy

### 20.1 Immediate (Free — Set Up in 1 Day)

```
Form Submit → EmailJS → Email notification to +91 9853103407's Gmail
           → Also send WhatsApp via wa.me link redirect
```

### 20.2 Medium Term (3 Months)

```
Form Submit → Firebase Firestore (stores all leads)
           → Email notification
           → Google Sheets via Zapier (auto-log every lead)
```

### 20.3 Long Term (6+ Months)

```
Form Submit → Backend API → MongoDB
           → CRM (Zoho CRM Free / HubSpot Free)
           → Automated follow-up email sequence
           → WhatsApp Business API notification
```

### 20.4 WhatsApp Integration (High Priority for Indian Market)

Every form submission should send a WhatsApp message to the sales team. This is the fastest way to capture leads in the Indian pharma market.

```
Tool: Twilio WhatsApp API OR WATI.io (India-focused WhatsApp Business API)
Cost: ~₹2-5 per message
Flow: Form submit → API → WhatsApp message to +91 9853103407
```

---

## 21. SEO Strategy for Pharma

### 21.1 Target Keywords

| Keyword                                    | Intent         | Priority |
|--------------------------------------------|----------------|----------|
| pharmaceutical company Bihar               | Informational  | High     |
| WHO-GMP certified medicine supplier India  | Commercial     | High     |
| bulk medicine supplier Bihar               | Commercial     | High     |
| Azithromycin tablets Bihar                 | Transactional  | Medium   |
| medicine distributor Bihar                 | Commercial     | High     |
| pharma company Patna                       | Local          | High     |
| Itraconazole capsules supplier             | Transactional  | Medium   |

### 21.2 On-Page SEO Checklist

- [ ] Unique H1 on every page
- [ ] Each product detail page has its own title tag + meta description
- [ ] Image alt text on all product images ✅ (done)
- [ ] Internal linking between pages ✅ (done via CTAs)
- [ ] Page load speed < 3 seconds on mobile 4G
- [ ] JSON-LD Organization schema
- [ ] JSON-LD Product schema on product detail pages

### 21.3 Off-Page SEO (Do After Launch)

1. **Google My Business** — Most critical for local Bihar searches
2. **IndiaMart listing** — High-traffic B2B directory, pharma buyers use it
3. **TradeIndia listing** — Secondary B2B directory
4. **Pharmahopper.com** — Pharma-specific Indian directory
5. **Submit to Google Search Console** — Track indexing and keywords
6. **Backlinks from medical associations** if possible

---

## 22. Performance Optimization Plan

### 22.1 Current Bundle Analysis

```
JS:  256 KB raw → 74 KB gzipped   ✅ Good
CSS: 30 KB raw  → 5.4 KB gzipped  ✅ Excellent
```

The JS bundle is entirely React + React Router + React DOM. No bloat. No large libraries.

### 22.2 Biggest Performance Risk: Product Images

8 unoptimized WhatsApp JPEGs = potentially 8MB of images.

**Fix:**
```
1. Compress all images to WebP format at 800px width → target ~60KB each
2. Add width/height attributes to <img> tags → prevents layout shift (CLS)
3. Add loading="lazy" to below-fold images
4. Use srcSet for responsive images (optional, advanced)
```

### 22.3 Font Loading Optimization

```html
<!-- Current (in index.html) -->
<link href="https://fonts.googleapis.com/css2?family=Inter..." rel="stylesheet" />

<!-- Better: add font-display=swap to avoid FOIT -->
<link href="...&display=swap" rel="stylesheet" />
<!-- Already done ✅ -->
```

### 22.4 Lighthouse Target Scores (Post-optimization)

| Metric          | Current (est.) | Target  |
|-----------------|----------------|---------|
| Performance     | 65-75          | 90+     |
| Accessibility   | 80             | 95+     |
| Best Practices  | 85             | 100     |
| SEO             | 70             | 95+     |

Main performance gains will come from image optimization.

---

## 23. Security Considerations

### 23.1 Current Security Posture

| Risk                    | Status   | Notes                                          |
|-------------------------|----------|------------------------------------------------|
| XSS via form input      | Low risk | React escapes all JSX output by default         |
| SQL Injection           | N/A      | No database on frontend                         |
| CSRF                    | N/A      | No authenticated state on frontend              |
| PII in console.log      | ⚠️ Risk  | Remove console.log before live                 |
| Exposed API keys        | Low risk | No API keys in frontend code currently         |
| HTTPS                   | Pending  | Must use HTTPS on production (Vercel/Netlify provide this free) |

### 23.2 When Backend Is Added

- Never store API keys in `.js` files — use environment variables (`.env`)
- Never commit `.env` to Git — add to `.gitignore`
- Validate all form inputs on the server side (even though frontend validates)
- Rate-limit form submissions (prevent spam enquiries)
- Add reCAPTCHA v3 to forms if spam becomes an issue

---

## 24. Developer Onboarding Guide

### 24.1 Prerequisites

```
Node.js v18 or higher
npm v9 or higher
Git
VS Code (recommended) with Tailwind CSS IntelliSense extension
```

### 24.2 Getting Started

```bash
# Clone / navigate to project
cd /mnt/d/D_Q_3rd_demo_app/humeda_project

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# → Open http://localhost:5173

# Production build
npm run build
# → Output in dist/

# Preview production build locally
npm run preview
# → Open http://localhost:4173
```

### 24.3 How to Add a New Product

1. Open `src/data/products.js`
2. Copy an existing product object from the `PRODUCTS` array
3. Update all fields with real data
4. Add the product image to `public/products/` (compress first!)
5. Set `image: '/products/your-image-name.jpeg'`
6. Save — browser auto-refreshes

### 24.4 How to Add a New Page

1. Create `src/pages/NewPage.jsx`
2. Import and add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage'
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `Navbar.jsx` NAV_LINKS array
4. Add link in `Footer.jsx` QUICK_LINKS array

### 24.5 How to Change Brand Colors

Edit `tailwind.config.js` → `theme.extend.colors.brand`:
```js
blue: '#YOUR_HEX_CODE'
```
All components using `brand-blue` update instantly.

---

## 25. Glossary

| Term          | Meaning in this project context                                        |
|---------------|------------------------------------------------------------------------|
| SPA           | Single Page Application — one HTML file, React handles all routing     |
| HMR           | Hot Module Replacement — Vite instantly pushes code changes to browser without full reload |
| CSR           | Client-Side Rendering — the browser runs React to build the page (opposite of SSR) |
| SSR           | Server-Side Rendering — would require Next.js; not used here           |
| Purging       | Tailwind removes unused CSS classes at build time — keeps CSS bundle small |
| WHO-GMP       | World Health Organization Good Manufacturing Practice                  |
| FSSAI         | Food Safety and Standards Authority of India                           |
| CTA           | Call to Action — buttons like "Enquire Now", "Contact Us"              |
| OG Tags       | Open Graph tags — control how links appear when shared on social media |
| JSON-LD       | JSON Linked Data — structured data format Google reads for rich results |
| PII           | Personally Identifiable Information — names, phone numbers in forms    |
| CDN           | Content Delivery Network — serves files from servers close to the user |

---

*Document End — Humedaxive Pharma Project Architecture v1.0*

*For questions or changes to this document, update ARCHITECTURE.md in the project root and keep it in sync with code changes.*
