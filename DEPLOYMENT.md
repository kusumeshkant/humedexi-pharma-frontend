# Deployment Guide

Pre-launch checklist and step-by-step deployment for Humedaxive Pharma frontend.

---

## Pre-Launch Checklist

### Environment (required before build)
- [ ] Copy `.env.example` → `.env` on hosting platform
- [ ] Set `VITE_EMAILJS_SERVICE_ID` (from EmailJS dashboard)
- [ ] Set `VITE_EMAILJS_TEMPLATE_ID` (from EmailJS dashboard)
- [ ] Set `VITE_EMAILJS_PUBLIC_KEY` (from EmailJS dashboard)
- [ ] Set `VITE_SITE_URL` to actual production domain (e.g. `https://humedaxivepharma.com`)
- [ ] (Optional) Set `VITE_GA_MEASUREMENT_ID` to enable Google Analytics 4

### Domain (required before launch)
- [ ] Update `public/sitemap.xml` — replace all `humedaxivepharma.com` with actual domain
- [ ] Update `public/robots.txt` — update sitemap URL with actual domain
- [ ] Point DNS A/CNAME records to hosting provider
- [ ] Confirm SSL certificate is provisioned and active

### Assets
- [ ] Create `public/og-image.jpg` — 1200×630px branded JPEG for social link previews
  - SVG reference design: `public/og-image.svg`
  - Convert using: Figma, Canva, GIMP, or any image editor
  - Must be JPEG (not SVG) — Twitter/WhatsApp do not support SVG OG images

### EmailJS
- [ ] Log into [emailjs.com](https://www.emailjs.com) and verify service is active
- [ ] Test Contact form sends to the right inbox
- [ ] Test Enquiry form sends to the right inbox

---

## Option A: Deploy to Vercel (Recommended)

Vercel natively reads `vercel.json` in the project root — no extra configuration needed.

### Step 1: Install Vercel CLI (one-time)
```
npm i -g vercel
```

### Step 2: Login
```
vercel login
```

### Step 3: Link project (one-time)
```
vercel link
```

### Step 4: Set environment variables
Set each variable from `.env.example` in the Vercel dashboard:
- Dashboard → Project → Settings → Environment Variables
- Alternatively via CLI:
```
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_SITE_URL
```

### Step 5: Deploy
```
vercel --prod
```

### What Vercel handles automatically
- Build command: `npm run build`
- Output directory: `dist/`
- SPA routing: rewritten via `vercel.json` rewrites
- Security headers: applied from `vercel.json` headers section
- Asset cache: 1 year immutable for `/assets/`, 1 week for `/products/`
- HTTPS: automatic SSL via Let's Encrypt
- CDN: global edge network

### Custom domain (post-deploy)
1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain
3. Update DNS at your registrar to point to Vercel's nameservers or A record
4. SSL provisions automatically (usually < 5 minutes)

---

## Option B: Deploy to Netlify

Netlify reads `public/_headers` and `public/_redirects` automatically.

### Step 1: Build locally (or let Netlify CI build)
```
npm run build
```

### Step 2: Deploy via Netlify CLI
```
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=dist
```

### Step 3: Set environment variables
- Netlify Dashboard → Site → Site Configuration → Environment Variables
- Add all variables from `.env.example`

### What Netlify handles automatically
- SPA routing: `public/_redirects` has `/* /index.html 200`
- Security headers: `public/_headers` applies X-Frame-Options, CSP, etc.
- HTTPS: automatic SSL

---

## Option C: Static Host (GitHub Pages, S3, etc.)

1. Run `npm run build` — output in `dist/`
2. Upload contents of `dist/` to your host
3. Configure the host to serve `index.html` for all routes (required for SPA routing)
4. Set environment variables as build arguments before building
5. Security headers must be configured at the CDN/proxy layer (not from config files)

---

## Post-Deploy Verification

### Functional checks
- [ ] Home page loads without errors
- [ ] Product list page loads and category filter works
- [ ] At least 2 individual product pages load correctly
- [ ] Contact form submits → email received in inbox
- [ ] Enquiry form submits → email received in inbox
- [ ] All 10 routes load without 404 or blank page
- [ ] Error boundary: no console errors on any page

### SEO checks
- [ ] `<title>` is unique per page (check in browser tab)
- [ ] Open Graph preview: paste URL into [opengraph.xyz](https://www.opengraph.xyz) or WhatsApp — image + title + description shown
- [ ] `robots.txt` accessible: `https://yourdomain.com/robots.txt`
- [ ] `sitemap.xml` accessible: `https://yourdomain.com/sitemap.xml`

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools → Lighthouse)
  - Target: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 95
- [ ] Verify product images load (all 11 from `public/products/`)

### Security headers
Verify headers at [securityheaders.com](https://securityheaders.com):
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Google Search Console
- [ ] Add property for your domain
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for the home page

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `VITE_SITE_URL` | Yes | Full production URL (no trailing slash) — used for canonical URLs and OG meta |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) — leave blank to disable analytics |
| `VITE_GSC_VERIFICATION` | No | Google Search Console HTML meta verification value |

---

## Build Commands Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server at http://localhost:5173 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |

---

## Known npm Vulnerabilities (Production-Safe)

Two low-severity vulnerabilities remain after `npm audit fix`:
- **esbuild** — affects dev server only, not production builds
- **Vite dev server** — affects dev server only, not production builds

These are intentionally not fixed because the fix (`npm audit fix --force`) would upgrade Vite from v5 to v8, a breaking change. Production builds are unaffected. See `KNOWN_ISSUES.md` for full detail.
