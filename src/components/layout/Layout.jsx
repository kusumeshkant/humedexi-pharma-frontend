import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { OrganizationSchema, WebSiteSchema } from '../seo/JsonLd'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganizationSchema />
      <WebSiteSchema />

      {/* Skip to main content — keyboard / screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-brand-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" className="flex-1 pt-[104px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
