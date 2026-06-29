import React from 'react'
import { Link } from 'react-router-dom'
import {
  PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_HREF,
  PHONE_SECONDARY_DISPLAY, PHONE_SECONDARY_HREF,
  WHATSAPP_ENQUIRY_HREF,
  EMAIL, EMAIL_HREF,
  COMPANY_NAME, COMPANY_SHORT,
} from '../../config/constants'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/enquiry', label: 'Bulk Enquiry' },
  { to: '/contact', label: 'Contact Us' },
]

const PRODUCT_LINKS = [
  'Capsules', 'Tablets', 'Injections', 'Syrups', 'Ointments', 'Creams', 'Soaps',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">{COMPANY_SHORT}</div>
                <div className="text-gray-400 text-xs">Private Limited</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Providing trusted, high-quality and affordable medicines for a healthier life. Serving doctors, clinics, hospitals and distributors across India.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['WHO-GMP', 'ISO', 'FSSAI'].map(cert => (
                <span key={cert} className="text-xs bg-brand-blue/20 text-blue-300 border border-brand-blue/30 px-2.5 py-1 rounded font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M1 0L7 4L1 8V0Z" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map(label => (
                <li key={label}>
                  <Link to={`/products?category=${label.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M1 0L7 4L1 8V0Z" />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400 leading-relaxed">Bihar, India</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-sm text-gray-400 space-y-1">
                  <a href={PHONE_PRIMARY_HREF} className="block hover:text-white transition-colors">{PHONE_PRIMARY_DISPLAY}</a>
                  <a href={PHONE_SECONDARY_HREF} className="block hover:text-white transition-colors">{PHONE_SECONDARY_DISPLAY}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={EMAIL_HREF} className="text-sm text-gray-400 hover:text-white transition-colors break-all">{EMAIL}</a>
              </li>
              <li>
                <Link to="/enquiry" className="inline-flex items-center gap-2 text-sm bg-brand-teal text-white px-4 py-2 rounded-md hover:bg-brand-teal-dark transition-colors font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Send Enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            WHO-GMP Certified &middot; ISO Certified &middot; FSSAI Licensed
          </p>
        </div>
      </div>
    </footer>
  )
}
