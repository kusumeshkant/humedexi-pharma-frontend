# Technical Decisions

Key architectural choices and the reasoning behind them.

---

## 1. Single EmailJS Template for Both Forms

**Decision:** One EmailJS template handles both Contact and Enquiry form submissions.

**Why:** Minimizes EmailJS plan usage (free tier has template limits). The enquiry-specific fields (orgType, organization, productInterest, quantity) are optional in the template — they render as empty when not provided. The single template receives all possible fields from both `sendContactEmail` and `sendEnquiryEmail`.

**Trade-off:** The received email always shows all fields, which means some will be blank for contact messages. Acceptable for a small-team inbox.

---

## 2. Tripled-Array Infinite Carousel

**Decision:** Product carousel clones the array 3× (`[...products, ...products, ...products]`) and uses CSS `translateX` for animation, with a silent snap-back after reaching the edge clone.

**Why:** Pure CSS transitions look smoother than JavaScript-driven position resets. The tripled array ensures there's always content visible on both sides of the current view during a transition. Snap-back after 520ms (the transition duration) resets position silently.

**Trade-off:** The DOM has 3× the product cards, but with 11 products this is ~33 card nodes — negligible. On large catalogues (100+ products), this approach should be replaced with a virtualized or windowed carousel.

---

## 3. Dynamic Category Filtering (No Ointments)

**Decision:** `activeCats` is computed as `CATEGORIES.filter(cat => PRODUCTS.some(p => p.category === cat.id))`. Ointments is defined in CATEGORIES but never rendered because no product has `category: 'ointments'`.

**Why:** The `ointments` placeholder was in Phase 1 as a future category. Rather than removing it from the CATEGORIES constant (which would require tracking what was removed), it's preserved but silently excluded. When the first ointment product is added, it appears automatically in the filter.

---

## 4. `object-contain` + White Background for Product Images

**Decision:** All product images use `object-contain` inside a white-background container rather than `object-cover`.

**Why:** Pharmaceutical packaging photographs have transparent or white backgrounds. `object-cover` would crop/zoom into the box artwork. `object-contain` preserves the full label, which is essential for product identification and regulatory legality.

---

## 5. No Backend / No Database

**Decision:** All product data lives in `src/data/products.js`. All form submissions go via EmailJS to the business owner's inbox.

**Why:** The client has no backend infrastructure and the product catalogue is small and infrequently updated. A CMS or API would add operational complexity (hosting, auth, deployment) with no meaningful benefit at current scale.

**Trade-off:** Adding or updating products requires a code change and redeploy. Acceptable until the catalogue grows beyond ~50 products or the client needs self-service editing.

---

## 6. React Router v6 Client-Side Routing (Not SSR)

**Decision:** Pure SPA with `BrowserRouter`. No SSR (Next.js) or SSG (Astro).

**Why:** SEO is not the primary goal — this is a B2B supplier site where organic search traffic is secondary to direct distributor relationships and WhatsApp. The client's audience finds them via referral, not Google. Vite SPA is simpler to deploy and maintain than Next.js.

**Trade-off:** Product pages (`/products/azixive-250-500`) are not indexed by Google unless a crawling-friendly deployment is configured (e.g., Netlify's `_redirects` file). This is acceptable for Phase 2; SSR can be added in a future phase if organic SEO becomes a priority.

---

## 7. Tailwind Custom Tokens Over Inline Colors

**Decision:** Brand colors are defined as custom theme tokens in `tailwind.config.js` rather than arbitrary Tailwind values (e.g., `bg-[#1a4f8a]`).

**Why:** Consistency. Any developer can use `bg-brand-blue` without knowing the hex value. If the brand color changes, only `tailwind.config.js` needs updating.

---

## 8. `specs.filter(Boolean)` Pattern in ProductDetail

**Decision:** The specs table is built with a conditional object array pattern:
```js
const specs = [
  product.strength && { label: 'Strength / Dose', value: product.strength },
  ...
].filter(Boolean)
```

**Why:** Products have varying optional fields. The `filter(Boolean)` collapses `false` values from the `&&` short-circuit, so rows for missing fields never render. This avoids empty table rows or conditional JSX clutter in the component.

---

## 9. `useMemo` for `activeCats` in Home and Products

**Decision:** The filtered category list is memoized.

**Why:** `CATEGORIES.filter(...)` with `PRODUCTS.some(...)` inside is O(categories × products). With 7 categories and 11 products, this is trivial, but memoizing it explicitly signals intent: this value is stable and expensive to recompute on every render triggered by search input changes.

---

## 10. `RelatedProductCard` Extracted as Component

**Decision:** Related products in ProductDetail are rendered via a named `RelatedProductCard` component, not an inline `.map()` callback.

**Why:** React rules of hooks prohibit calling `useState` inside a `.map()` callback (it changes the hook call order between renders). The image error state (`imgError`) requires `useState`, so the card must be its own component with a stable hook call sequence.
