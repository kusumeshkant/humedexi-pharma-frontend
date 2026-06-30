# Humedaxive Pharma — Project Context

## Business Overview

**Humedaxive Pharma Private Limited** is a pharmaceutical manufacturer headquartered in Bihar, India. This website serves as a **B2B digital presence** — not a consumer e-commerce site. The target audience is:

- Licensed pharmaceutical distributors and stockists
- Doctors, clinics, and hospitals (institutional procurement)
- Wholesale buyers and C&F agents

All product enquiries flow through EmailJS forms (no backend). Conversion actions: `/enquiry` form and WhatsApp direct link.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18.3.1 (SPA) |
| Build tool | Vite 5.4.21 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS 3.4.11 |
| Email | EmailJS (`@emailjs/browser`) |
| Language | JavaScript (ES Modules, JSX) |

## Brand Tokens

```
brand-blue:       #1a4f8a  (primary — headers, CTAs, nav)
brand-blue-dark:  #153f6e  (gradients)
brand-blue-light: #eff6ff  (tinted backgrounds)
brand-teal:       #0d9488  (secondary — enquiry CTAs, accents)
brand-teal-dark:  #0f766e
brand-teal-light: #f0fdfa
```

## Key Constants (`src/config/constants.js`)

```js
PHONE_PRIMARY_DISPLAY   = '+91 98521 03407'
PHONE_SECONDARY_DISPLAY = '+91 88770 60059'
WHATSAPP_NUMBER         = '919852103407'
EMAIL                   = 'kusumeshkantsharma@gmail.com'
COMPANY_NAME            = 'Humedaxive Pharma Private Limited'
COMPANY_SHORT           = 'Humedaxive Pharma'
```

> `.env` is gitignored. It holds `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

## Routing (10 routes in `src/App.jsx`)

| Path | Component | Notes |
|------|-----------|-------|
| `/` | Home | Carousel, category grid, partner programs |
| `/about` | About | Company overview, mfg standards, distribution |
| `/products` | Products | Category filter + search, dynamic |
| `/products/:id` | ProductDetail | Full product page with specs table |
| `/enquiry` | Enquiry | Bulk order form — pre-fills product via `?product=` param |
| `/contact` | Contact | General contact form |
| `/certifications` | Certifications | WHO-GMP, ISO, FSSAI |
| `/privacy-policy` | PrivacyPolicy | Legal |
| `/terms` | Terms | Legal |
| `/disclaimer` | Disclaimer | Medical disclaimer with amber warning |
| `*` | → `/` | Catch-all redirect |

## Product Data (`src/data/products.js`)

**11 products, 7 categories.** Full product schema:

```js
{
  id: string,              // kebab-case, URL slug
  category: string,        // matches CATEGORIES[].id
  badge: 'rx' | 'otc' | 'nutraceutical',
  name: string,
  brandName: string,
  composition: string,
  therapeuticSegment: string,
  strength: string,        // optional
  route: string,           // optional
  storage: string,         // optional
  shelfLife: string,       // optional
  indications: string[],   // optional, shown as chip cloud
  usage: string,
  benefits: string,
  packaging: string,
  form: string,
  image: string,           // /products/<name>.jpeg
}
```

### Products by Category

| Category | Products | Badge |
|----------|----------|-------|
| Tablets | AZIXIVE 250/500, HUMEN-SP | Rx |
| Capsules | HUPAN-DSR, HUPAN-D-SR, IRAXIVE-100 | Rx |
| Injections | HUMEDICLO-AQUA, HUTAZ | Rx |
| Syrups | HUMEZYME Syrup (OTC), HUMEGA Syrup (Nutra) | Mixed |
| Creams | LULIXIVE Cream | Rx |
| Soaps | KETOXIVE Soap | Rx |

> Note: `ointments` is defined in CATEGORIES but has no products — dynamically hidden via `activeCats` filter.

## Implementation Status

- **Phase 1** (2026-06-29): Core SPA — all pages, routing, EmailJS integration, carousel
- **Phase 2** (2026-06-30): B2B upgrade — 11 products with full schema, badges, legal pages, partner programs, accessibility fixes, QA
- **Go-live**: Planned for 2026-06-30

## GitHub

Repository: `https://github.com/kusumeshkant/humedexi-pharma-frontend`  
Branch: `master`
