import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Humedaxive Pharma Private Limited'
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://humedaxivepharma.com'
const DEFAULT_DESCRIPTION = 'WHO-GMP & ISO certified pharmaceutical company in Bihar, India. Trusted supplier of capsules, tablets, injections, syrups, creams and soaps for doctors, clinics, hospitals and distributors.'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export default function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  canonical,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | WHO-GMP Certified Pharmaceutical Company`
  const pageUrl = canonical || `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph — important for WhatsApp / LinkedIn link previews */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
