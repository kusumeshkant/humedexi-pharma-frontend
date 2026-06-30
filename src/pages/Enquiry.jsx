import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { sendEnquiryEmail } from '../lib/emailjs'
import {
  PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_HREF,
  PHONE_SECONDARY_DISPLAY, PHONE_SECONDARY_HREF,
  WHATSAPP_ENQUIRY_HREF,
  EMAIL, EMAIL_HREF,
} from '../config/constants'

const ORG_TYPES = [
  'Doctor (Private Practice)',
  'Clinic',
  'Hospital / Nursing Home',
  'Pharmacy / Medical Store',
  'Distributor / Wholesaler',
  'Government Institution',
  'Other',
]

const INIT = {
  name: '',
  organization: '',
  orgType: '',
  phone: '',
  email: '',
  productInterest: '',
  quantity: '',
  message: '',
}

export default function Enquiry() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState('')

  useEffect(() => {
    const preProduct = searchParams.get('product')
    if (preProduct) setForm(prev => ({ ...prev, productInterest: preProduct }))
  }, [searchParams])

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.orgType) e.orgType = 'Please select your organization type'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.productInterest.trim()) e.productInterest = 'Please specify which product(s) you are interested in'
    if (!form.message.trim()) e.message = 'Please add a brief message or requirement'
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
      await sendEnquiryEmail({
        name: form.name.trim(),
        orgType: form.orgType,
        organization: form.organization.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        productInterest: form.productInterest.trim(),
        quantity: form.quantity.trim(),
        message: form.message.trim(),
      })
      setSubmitted(true)
      setForm(INIT)
    } catch {
      setSendError('Failed to submit enquiry. Please call us directly or send an email — we\'ll respond promptly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Enquire / Bulk Order</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Send an Enquiry</h1>
          <p className="text-teal-100 text-lg max-w-xl mx-auto">
            Whether you need samples, bulk quantities, or want to discuss a distribution partnership — fill the form and our team will respond promptly.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              { icon: '🔒', text: 'Confidential enquiry' },
              { icon: '⚡', text: 'Response within 24 hours' },
              { icon: '🤝', text: 'No spam, direct response only' },
              { icon: '📞', text: `Call us: ${PHONE_PRIMARY_DISPLAY}` },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Who Should Enquire?</h3>
                <div className="space-y-3">
                  {[
                    { icon: '🩺', title: 'Doctors', desc: 'Prescription-based buying in bulk for your practice.' },
                    { icon: '🏥', title: 'Hospitals & Clinics', desc: 'Institutional supply at competitive prices.' },
                    { icon: '📦', title: 'Distributors', desc: 'Wholesale partnerships with attractive margins.' },
                    { icon: '💊', title: 'Medical Stores', desc: 'Regular stock supply with fast reorder.' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="bg-brand-blue text-white rounded-2xl p-6">
                <h3 className="font-bold mb-4">Prefer to Call?</h3>
                <p className="text-blue-100 text-sm mb-4">Our sales team is available Monday–Saturday, 9AM–6PM.</p>
                <div className="space-y-3">
                  <a href={PHONE_PRIMARY_HREF} className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a href={PHONE_SECONDARY_HREF} className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                  <a href={EMAIL_HREF} className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors text-sm break-all">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_ENQUIRY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-sm w-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.128 1.535 5.864L.057 23.571a.5.5 0 00.613.635l5.878-1.499A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.817-.544-5.394-1.489l-.386-.232-3.979 1.015 1.06-3.878-.253-.402A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Enquiry
              </a>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Bulk / Product Enquiry Form</h2>
                <p className="text-gray-500 text-sm mb-8">All fields marked <span className="text-red-500 font-bold">*</span> are required.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Submitted!</h3>
                    <p className="text-gray-500 mb-2">Thank you for your interest in Humedaxive Pharma products.</p>
                    <p className="text-gray-500 mb-8">Our sales team will contact you within <strong>24 business hours</strong>.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button onClick={() => setSubmitted(false)} className="btn-teal">Submit Another Enquiry</button>
                      <Link to="/products" className="btn-secondary">Browse Products</Link>
                    </div>
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
                          <a href={PHONE_PRIMARY_HREF} className="text-xs text-red-600 hover:underline mt-1 block">Call us: {PHONE_PRIMARY_DISPLAY}</a>
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={`form-input ${errors.name ? 'border-red-400' : ''}`} />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="orgType" className="block text-sm font-medium text-gray-700 mb-1.5">Organization Type <span className="text-red-500">*</span></label>
                        <select id="orgType" name="orgType" value={form.orgType} onChange={handleChange} className={`form-input bg-white ${errors.orgType ? 'border-red-400' : ''}`}>
                          <option value="">Select type...</option>
                          {ORG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.orgType && <p className="text-xs text-red-500 mt-1">{errors.orgType}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">Organization / Clinic / Hospital Name <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input id="organization" name="organization" value={form.organization} onChange={handleChange} placeholder="e.g. City General Hospital, ABC Distributors" className="form-input" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp <span className="text-red-500">*</span></label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" className={`form-input ${errors.phone ? 'border-red-400' : ''}`} />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={`form-input ${errors.email ? 'border-red-400' : ''}`} />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1.5">Product(s) of Interest <span className="text-red-500">*</span></label>
                      <input id="productInterest" name="productInterest" value={form.productInterest} onChange={handleChange} placeholder="e.g. Azithromycin Capsules, Paracetamol Tablets, or All Injections" className={`form-input ${errors.productInterest ? 'border-red-400' : ''}`} />
                      {errors.productInterest && <p className="text-xs text-red-500 mt-1">{errors.productInterest}</p>}
                      <p className="text-xs text-gray-400 mt-1">
                        <Link to="/products" className="text-brand-blue hover:underline">Browse our product catalogue</Link> to find the right products.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity / Order Size <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input id="quantity" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 strips/month, 10,000 units, or Monthly supply for 50 patients" className="form-input" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Additional Requirements <span className="text-red-500">*</span></label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your requirement — delivery location, pricing expectation, preferred formulation, or any other details..." className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-teal w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      By submitting this form, you agree to be contacted by Humedaxive Pharma's sales team regarding your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
