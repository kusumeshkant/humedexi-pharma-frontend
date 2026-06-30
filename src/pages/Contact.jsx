import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendContactEmail } from '../lib/emailjs'
import PageMeta from '../components/seo/PageMeta'
import {
  PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_HREF,
  PHONE_SECONDARY_DISPLAY, PHONE_SECONDARY_HREF,
  WHATSAPP_CONTACT_HREF,
  EMAIL, EMAIL_HREF,
  COMPANY_NAME,
} from '../config/constants'

const INIT = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    if (sendError) setSendError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }

    setLoading(true)
    setSendError('')
    try {
      await sendContactEmail({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setSubmitted(true)
      setForm(INIT)
    } catch {
      setSendError('Failed to send your message. Please try calling us directly or send an email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Contact Us"
        path="/contact"
        description="Contact Humedaxive Pharma Private Limited. Reach our sales team for product enquiries, distribution partnerships, or general questions. Phone, WhatsApp, and email support available."
      />
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            We're here to assist doctors, distributors, clinics and hospitals. Reach out for product enquiries, pricing, or partnership discussions.
          </p>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Direct Contact</h2>
                <div className="space-y-5">
                  <ContactItem
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                    label="Phone / WhatsApp"
                    lines={[
                      <a key="1" href={PHONE_PRIMARY_HREF} className="text-brand-blue font-semibold hover:underline">{PHONE_PRIMARY_DISPLAY}</a>,
                      <a key="2" href={PHONE_SECONDARY_HREF} className="text-brand-blue font-semibold hover:underline">{PHONE_SECONDARY_DISPLAY}</a>,
                    ]}
                  />
                  <ContactItem
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    label="Email"
                    lines={[<a key="email" href={EMAIL_HREF} className="text-brand-blue font-semibold hover:underline break-all">{EMAIL}</a>]}
                  />
                  <ContactItem
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    label="Location"
                    lines={['Bihar, India']}
                  />
                  <ContactItem
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    label="Business Hours"
                    lines={['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed']}
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.128 1.535 5.864L.057 23.571a.5.5 0 00.613.635l5.878-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.817-.544-5.394-1.489l-.386-.232-3.979 1.015 1.06-3.878-.253-.402A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Certifications reminder */}
              <div className="bg-brand-blue text-white rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Our Certifications</h3>
                <div className="space-y-2">
                  {['WHO-GMP Certified', 'ISO 9001:2015 Certified', 'FSSAI Licensed'].map(c => (
                    <div key={c} className="flex items-center gap-2 text-sm text-blue-100">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </div>
                  ))}
                </div>
                <Link to="/certifications" className="mt-4 inline-block text-xs text-blue-300 hover:text-white underline">
                  View certification details →
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-500 text-sm mb-8">Our team will respond within 24 business hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-500 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {sendError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-red-700 font-medium">{sendError}</p>
                          <a href={EMAIL_HREF} className="text-xs text-red-600 hover:underline mt-1 block">Email us directly: {EMAIL}</a>
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Dr. / Mr. / Ms." className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-300' : ''}`} />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-300' : ''}`} />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-300' : ''}`} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message <span className="text-red-500">*</span></label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?" className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-300' : ''}`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Prefer to call? Reach us at <a href={PHONE_PRIMARY_HREF} className="text-brand-blue hover:underline">{PHONE_PRIMARY_DISPLAY}</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Find Us section — replaces map placeholder */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-blue-light border-b border-brand-blue/10 px-6 py-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-brand-blue">{COMPANY_NAME} — Bihar, India</span>
            </div>
            <div className="p-8 grid sm:grid-cols-3 gap-8 items-center">
              <div className="sm:col-span-2 space-y-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Headquarters</p>
                    <p className="text-sm text-gray-500 mt-0.5">Bihar, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-500 mt-0.5">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <a href={EMAIL_HREF} className="text-sm text-brand-blue hover:underline mt-0.5 block">{EMAIL}</a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://maps.google.com/?q=Bihar,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue-light transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 group-hover:bg-brand-blue rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-brand-blue">Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactItem({ icon, label, lines }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-brand-blue-light text-brand-blue rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
        {lines.map((line, i) => (
          <div key={i} className="text-sm text-gray-700 font-medium">{line}</div>
        ))}
      </div>
    </div>
  )
}
