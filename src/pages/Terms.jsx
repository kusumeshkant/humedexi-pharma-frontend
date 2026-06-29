import React from 'react'
import { Link } from 'react-router-dom'
import { COMPANY_NAME, EMAIL_HREF, EMAIL } from '../config/constants'

export default function Terms() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Legal</span>
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Conditions governing the use of this website and its content.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, including healthcare professionals, distributors, and institutional buyers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Permitted Use</h2>
              <p>This website is intended for:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Licensed healthcare professionals seeking product information for professional purposes</li>
                <li>Licensed pharmaceutical distributors and stockists evaluating our product range</li>
                <li>Hospital and institutional procurement teams</li>
                <li>Authorised business contacts of {COMPANY_NAME}</li>
              </ul>
              <p className="mt-3">
                Use of this website by patients, general consumers, or individuals seeking to self-medicate is not permitted and is contrary to the purpose of this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including product names, brand names, logos, images, text, and design — is the intellectual property of {COMPANY_NAME} or its licensors. You may not copy, reproduce, distribute, or use any content from this website for commercial purposes without our prior written consent.
              </p>
              <p className="mt-3">
                Product brand names are trademarks of {COMPANY_NAME}. Unauthorised use of our trademarks is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Accuracy of Information</h2>
              <p>
                We make reasonable efforts to ensure that information on this website is accurate and current. However, product specifications, pricing, and availability are subject to change without notice. Information on this website is for general reference only and does not constitute an offer, quotation, or contract. Confirmed pricing is provided only through formal quotations issued by our sales team.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                {COMPANY_NAME} shall not be liable for any loss, damage, or injury arising from:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Reliance on information presented on this website without professional verification</li>
                <li>Interruption or unavailability of this website</li>
                <li>Errors or omissions in website content</li>
                <li>Unauthorised access to or use of our systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">External Links</h2>
              <p>
                This website may contain links to third-party websites (such as Google Maps). We are not responsible for the content, privacy practices, or accuracy of any third-party website. Links are provided for convenience only and do not constitute endorsement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
              <p>
                Nothing on this website shall be construed as circumventing any applicable pharmaceutical regulation, including the Drugs and Cosmetics Act, 1940, or regulations of the Drug Controller General of India (DCGI). All product transactions are subject to applicable Indian law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bihar, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Updated terms will be posted on this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">
                Last updated: June 2026. For questions about these terms, contact us at{' '}
                <a href={EMAIL_HREF} className="text-brand-blue hover:underline">{EMAIL}</a>.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/disclaimer" className="btn-secondary">Medical Disclaimer</Link>
            <Link to="/privacy-policy" className="btn-secondary">Privacy Policy</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
