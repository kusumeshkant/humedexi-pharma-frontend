# Known Issues

---

## Active / Open

### LOW — Contact.jsx links to `/certifications` (non-existent route guard)
**File:** `src/pages/Contact.jsx:136`  
**Detail:** The "View certification details →" link inside the Certifications card points to `/certifications`. This route exists in App.jsx, so it is not broken — but the page is minimally styled. Not a bug, but the Certifications page may need content expansion in Phase 3.

### LOW — ProductDetail: no `<title>` or `<meta>` per product
**Files:** `src/pages/ProductDetail.jsx`, `index.html`  
**Detail:** All pages share the same `<title>` from `index.html`. Product pages don't update `document.title` or `<meta description>`. This hurts SEO if organic search traffic is ever a goal. Fix: use `react-helmet-async` or a manual `useEffect(() => { document.title = product.name }, [product])`.

### LOW — No 404 page
**Files:** `src/App.jsx`  
**Detail:** The catch-all route redirects to `/` silently. Users who land on an invalid URL get no feedback. Fix: add a styled 404 component.

### LOW — Carousel dot indicators may misfire on resize
**File:** `src/components/ui/ProductCarousel.jsx`  
**Detail:** When `itemsPerView` changes (breakpoint crossing), `idx` is reset to `n` but the dot calculation uses `Math.floor(activeSlide / itemsPerView)`. On the exact resize frame, the dot may briefly show an incorrect active state before stabilizing. Cosmetic only — corrects itself on next interaction.

---

## Resolved (in Phase 2 QA)

- ~~React hooks violation: `useState` after early return in ProductDetail~~ — Fixed 2026-06-30
- ~~Form accessibility: labels without `htmlFor`, inputs without `id`~~ — Fixed 2026-06-30 (Contact + Enquiry)
- ~~Navbar: mobile menu button missing `aria-expanded`~~ — Fixed 2026-06-30
- ~~ProductCarousel: `tripled` recomputed on every render~~ — Fixed 2026-06-30 (memoized with `useMemo`)
- ~~ProductDetail specs table: no `overflow-x-auto`~~ — Fixed 2026-06-30
- ~~KETOXIVE Soap composition included packaging weight~~ — Fixed 2026-06-30
- ~~About page stat hardcoded `6+` categories~~ — Fixed 2026-06-30 (changed to `7+`)
- ~~Home.jsx string literal broken by unescaped apostrophe~~ — Fixed during Phase 2 implementation
