// Analytics integration stub
// To enable Google Analytics 4:
//   1. Add VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX to your .env file
//   2. The script tag is injected via index.html (see GA_MEASUREMENT_ID placeholder)
//      OR use gtag.js snippet below

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function initAnalytics() {
  if (!GA_ID || import.meta.env.DEV) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID, { anonymize_ip: true })
}

export function trackPageView(path) {
  if (!window.gtag || !GA_ID) return
  window.gtag('event', 'page_view', { page_path: path })
}

export function trackEnquiry(productName) {
  if (!window.gtag || !GA_ID) return
  window.gtag('event', 'generate_lead', {
    event_category: 'Enquiry',
    event_label: productName || 'General',
  })
}
