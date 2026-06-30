import React from 'react'
import { Link } from 'react-router-dom'
import { COMPANY_NAME, EMAIL_HREF, EMAIL } from '../config/constants'
import PageMeta from '../components/seo/PageMeta'

export default function Disclaimer() {
  return (
    <>
      <PageMeta
        title="Medical Disclaimer"
        path="/disclaimer"
        description="Medical Disclaimer for Humedaxive Pharma's website. This site is for licensed healthcare professionals and registered pharmaceutical distributors only — not for patients or general consumers."
        noIndex
      />
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Legal</span>
          <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Important information about the professional nature of this website.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-sm font-medium">
                This website is intended for licensed healthcare professionals and registered pharmaceutical distributors only. It is not intended for patients or general consumers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">For Professional Use Only</h2>
              <p>
                The product information, pricing, and enquiry forms on this website are provided exclusively for:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Licensed medical practitioners (MBBS, MD, BDS, BHMS, BAMS and equivalent)</li>
                <li>Registered pharmacists and pharmacy professionals</li>
                <li>Licensed pharmaceutical distributors and stockists</li>
                <li>Hospital procurement and pharmacy departments</li>
                <li>Authorised healthcare institutions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Not for Self-Medication</h2>
              <p>
                The information provided on this website is not intended to be used for self-diagnosis or self-medication. Patients and members of the general public should always consult a qualified and registered healthcare professional before taking any medicine.
              </p>
              <p className="mt-3">
                <strong className="text-gray-900">Rx Products:</strong> Products marked as "Rx" are prescription-only medicines under the Drugs and Cosmetics Act, 1940 (India). These products are intended to be dispensed only upon a valid prescription from a registered medical practitioner.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Product Information Accuracy</h2>
              <p>
                {COMPANY_NAME} makes every effort to ensure that product information on this website is accurate and up to date. However:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Product details are provided for informational and promotional purposes for B2B trade partners only</li>
                <li>Formulations, packaging, and specifications may change without prior notice on the website</li>
                <li>Always refer to the product's approved prescribing information, package insert, or SPC for clinical decisions</li>
                <li>In case of discrepancy, the printed label and package insert take precedence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">No Medical Advice</h2>
              <p>
                Nothing on this website constitutes medical advice, diagnosis, or treatment recommendations. {COMPANY_NAME} is a pharmaceutical manufacturer and B2B supplier — we do not provide clinical guidance or patient care services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
              <p>
                All products manufactured and marketed by {COMPANY_NAME} comply with applicable Indian pharmaceutical regulations, including the Drugs and Cosmetics Act, 1940, and the rules made thereunder. Our manufacturing facility is WHO-GMP certified and ISO 9001:2015 certified.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Jurisdiction</h2>
              <p>
                This website is operated from Bihar, India. Any disputes arising from the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Bihar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">
                Last updated: June 2026. For queries about this disclaimer or our products, contact us at{' '}
                <a href={EMAIL_HREF} className="text-brand-blue hover:underline">{EMAIL}</a>.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="btn-secondary">Privacy Policy</Link>
            <Link to="/terms" className="btn-secondary">Terms of Use</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
