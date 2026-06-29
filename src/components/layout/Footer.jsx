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
  { label: 'Capsules', id: 'capsules' },
  { label: 'Tablets', id: 'tablets' },
  { label: 'Injections', id: 'injections' },
  { label: 'Syrups', id: 'syrups' },
  { label: 'Creams', id: 'creams' },
  { label: 'Soaps', id: 'soaps' },
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
            <div className="flex gap-2 flex-wrap mb-5">
              {['WHO-GMP', 'ISO', 'FSSAI'].map(cert => (
                <span key={cert} className="text-xs bg-brand-blue/20 text-blue-300 border border-brand-blue/30 px-2.5 py-1 rounded font-medium">
                  {cert}
                </span>
              ))}
            </div>
            <a
              href={WHATSAPP_ENQUIRY_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.128 1.535 5.864L.057 23.571a.5.5 0 00.613.635l5.878-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.817-.544-5.394-1.489l-.386-.232-3.979 1.015 1.06-3.878-.253-.402A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
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
              {PRODUCT_LINKS.map(link => (
                <li key={link.id}>
                  <Link to={`/products?category=${link.id}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M1 0L7 4L1 8V0Z" />
                    </svg>
                    {link.label}
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
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/disclaimer" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Medical Disclaimer</Link>
            <span className="text-gray-700">·</span>
            <Link to="/privacy-policy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">·</span>
            <Link to="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Use</Link>
            <span className="text-gray-700">·</span>
            <span className="text-xs text-gray-600">WHO-GMP &middot; ISO &middot; FSSAI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
