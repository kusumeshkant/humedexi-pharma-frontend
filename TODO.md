# TODO — Prioritized Roadmap

Priority: **P0** = blocking go-live · **P1** = do soon · **P2** = next phase · **P3** = nice to have

---

## P0 — Go-Live Blockers

- [ ] Verify `.env` is set on deployment host: `VITE_EMAILJS_*`, `VITE_SITE_URL` (see `.env.example`)
- [ ] Replace `humedaxivepharma.com` placeholder in `public/sitemap.xml` and `public/robots.txt` with actual domain
- [ ] Test both forms (Contact + Enquiry) in production and confirm emails arrive
- [ ] Confirm all 11 product images exist in `/public/products/` and load correctly
- [ ] Deploy to hosting provider (Vercel / Netlify / shared hosting)
- [ ] Configure custom domain and HTTPS

---

## P1 — Do Soon (Post Go-Live)

- [ ] Add `document.title` updates per page (at minimum: Home, Products, ProductDetail)
- [ ] Add `<meta name="description">` per page using `react-helmet-async`
- [ ] Create a styled 404 page (currently redirects silently to `/`)
- [ ] Add more product images if any are missing from `/public/products/`
- [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`) for WhatsApp link previews
- [ ] Submit sitemap to Google Search Console
- [ ] Configure `_redirects` (Netlify) or `vercel.json` rewrite for SPA routing (avoids 404 on direct URL access)

---

## P2 — Next Phase

- [ ] Add 4–6 new products (expand injections and syrups catalogue per business roadmap)
- [ ] Product image gallery (multiple images per product — front, back, carton)
- [ ] PDF product catalogue download button on Products page
- [ ] WhatsApp Business API integration (replace manual `wa.me` links with API session)
- [ ] Distributor onboarding flow (multi-step form with document upload)
- [ ] Blog / news section for content SEO
- [ ] Improve Certifications page with actual certificate images / scan embeds

---

## P3 — Nice to Have

- [ ] Convert product images to WebP for smaller file sizes
- [ ] Dark mode (low priority — B2B users typically use light mode)
- [ ] Distributor login portal (account-based pricing)
- [ ] Live chat widget (Tawk.to / WhatsApp Business)
- [ ] Product comparison feature (compare 2–3 products side-by-side)
- [ ] Print-friendly product detail page (CSS @media print)
- [ ] Multilingual support (Hindi)
