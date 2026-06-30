import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://humedaxivepharma.com'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Humedaxive Pharma Private Limited',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-98521-03407',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-88770-60059',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Bihar',
      addressCountry: 'IN',
    },
    sameAs: [],
    knowsAbout: [
      'Pharmaceutical Manufacturing',
      'WHO-GMP Certified Production',
      'Pharmaceutical Distribution',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Humedaxive Pharma',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/products?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function ProductSchema({ product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Drug',
    name: product.name,
    description: product.usage,
    activeIngredient: product.composition,
    dosageForm: product.form,
    availableStrength: product.strength,
    administrationRoute: product.route,
    manufacturer: {
      '@type': 'Organization',
      name: 'Humedaxive Pharma Private Limited',
      url: SITE_URL,
    },
    url: `${SITE_URL}/products/${product.id}`,
    image: product.image ? `${SITE_URL}${product.image}` : undefined,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
