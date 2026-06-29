import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCarousel from '../components/ui/ProductCarousel'
import {
  PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_HREF,
  PHONE_SECONDARY_DISPLAY, PHONE_SECONDARY_HREF,
  WHATSAPP_CONTACT_HREF,
  COMPANY_NAME,
} from '../config/constants'

const TRUST_POINTS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'WHO-GMP & ISO Certified',
    desc: 'Every product manufactured under strict international quality standards — ensuring safety, purity, and efficacy you can count on.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Consistent Supply Chain',
    desc: 'Reliable, on-time delivery ensures your clinic or hospital never faces a medicine shortage. Dedicated supply partners for distributors.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Bulk Pricing',
    desc: 'Competitive pricing designed for doctors, distributors and bulk buyers — maximizing your margins without compromising on quality.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Wide Product Range',
    desc: 'From capsules and tablets to injections, syrups, creams, ointments and soaps — a complete pharmaceutical portfolio under one roof.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Long-Term Partnerships',
    desc: 'We build lasting relationships with doctors and distributors — offering dedicated support, fast reorder, and flexible terms.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pan-India Distribution',
    desc: 'Serving healthcare providers across Bihar and beyond, with scalable supply capacity to meet growing demand.',
  },
]

const STATS = [
  { value: `${PRODUCTS.length}`, label: 'Live Products' },
  { value: '7+', label: 'Product Categories' },
  { value: '3', label: 'Major Certifications' },
  { value: '100%', label: 'Quality Assurance' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-[#1e5fa8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 section-pad relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                WHO-GMP &nbsp;|&nbsp; ISO &nbsp;|&nbsp; FSSAI Certified
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                Medicines You Can <span className="text-blue-300">Trust.</span><br />
                Prices That Make <span className="text-blue-300">Sense.</span>
              </h1>

              <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
                {COMPANY_NAME} — providing high-quality, certified pharmaceutical products to doctors, clinics, hospitals and distributors across India. Bulk enquiries welcome.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/enquiry" className="bg-white text-brand-blue font-bold px-7 py-3.5 rounded-md hover:bg-blue-50 transition-colors text-base shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Enquire Now
                </Link>
                <Link to="/products" className="border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors text-base flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Products
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                <a href={PHONE_PRIMARY_HREF} className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_PRIMARY_DISPLAY}
                </a>
                <a href={PHONE_SECONDARY_HREF} className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_SECONDARY_DISPLAY}
                </a>
                <a href={WHATSAPP_CONTACT_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.128 1.535 5.864L.057 23.571a.5.5 0 00.613.635l5.878-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.817-.544-5.394-1.489l-.386-.232-3.979 1.015 1.06-3.878-.253-.402A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Stats card */}
            <div className="lg:flex justify-end hidden">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full max-w-sm">
                <h3 className="text-white font-semibold text-lg mb-6">Our Strength in Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map(s => (
                    <div key={s.label} className="text-center bg-white/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-blue-200 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-blue-200 text-sm text-center">Trusted by doctors &amp; distributors across Bihar, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS STRIP ─────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Our Quality Certifications</p>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { name: 'WHO-GMP', full: 'World Health Organization GMP', color: 'text-brand-blue', bg: 'bg-brand-blue-light border-brand-blue/20' },
              { name: 'ISO', full: 'International Organization for Standardization', color: 'text-brand-teal', bg: 'bg-brand-teal-light border-brand-teal/20' },
              { name: 'FSSAI', full: 'Food Safety & Standards Authority of India', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
            ].map(cert => (
              <div key={cert.name} className={`cert-badge border ${cert.bg}`}>
                <div className={`text-2xl font-bold ${cert.color}`}>{cert.name}</div>
                <div className="text-xs text-gray-500 text-center leading-tight">{cert.full}</div>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-600 font-medium">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ───────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeader
            tag="What We Offer"
            title="Comprehensive Pharmaceutical Range"
            subtitle="From essential antibiotics to speciality formulations — a complete range trusted by healthcare professionals."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-brand-blue/30 hover:bg-brand-blue-light hover:shadow-sm transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue text-center">{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-secondary">
              Browse All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS CAROUSEL ───────────────────────────────────── */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <SectionHeader
            tag="Our Products"
            title="Quality Medicines Across All Categories"
            subtitle="Browse our full pharmaceutical range — each product manufactured under WHO-GMP certified processes."
          />
          <ProductCarousel products={PRODUCTS} />
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              View Complete Product Catalogue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeader
            tag="Why Humedaxive Pharma"
            title="Built on Trust. Driven by Quality."
            subtitle="Healthcare professionals and distributors choose us because we never compromise — on quality, supply, or relationships."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_POINTS.map((pt, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-blue-light text-brand-blue rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {pt.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{pt.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-brand-teal text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Partner with Humedaxive Pharma?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a doctor, clinic, hospital or distributor — we have the right products and pricing for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enquiry" className="bg-white text-brand-teal font-bold px-8 py-3.5 rounded-md hover:bg-teal-50 transition-colors shadow-lg">
              Send Bulk Enquiry
            </Link>
            <a href={PHONE_PRIMARY_HREF} className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
