import React from 'react'
import { Link } from 'react-router-dom'
import { COMPANY_NAME, EMAIL_HREF, EMAIL } from '../config/constants'
import PageMeta from '../components/seo/PageMeta'

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        path="/privacy-policy"
        description="Privacy Policy for Humedaxive Pharma Private Limited. Learn how we collect, use and protect your information when you contact us or submit an enquiry."
        noIndex
      />
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Legal</span>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Introduction</h2>
              <p>
                {COMPANY_NAME} ("we", "us", or "our") is committed to protecting the privacy of individuals who interact with our website. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit an enquiry.
              </p>
              <p className="mt-3">
                This website is designed for B2B users — licensed healthcare professionals, distributors, and institutional buyers. We do not market to or collect information from general consumers or patients.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p>We collect information only when you voluntarily provide it through our contact or enquiry forms:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong className="text-gray-900">Name</strong> — to address your enquiry personally</li>
                <li><strong className="text-gray-900">Phone number</strong> — for our sales team to follow up</li>
                <li><strong className="text-gray-900">Email address</strong> — optional, for written communication</li>
                <li><strong className="text-gray-900">Organisation name and type</strong> — to understand your procurement needs</li>
                <li><strong className="text-gray-900">Product interest and quantity</strong> — to prepare relevant quotes</li>
                <li><strong className="text-gray-900">Message content</strong> — the information you choose to share</li>
              </ul>
              <p className="mt-3">We do not collect payment information, government ID numbers, or sensitive personal data through this website.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>Information submitted through our forms is used exclusively to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Respond to your product enquiry or contact message</li>
                <li>Prepare pricing quotations for your requirements</li>
                <li>Connect you with our sales team for follow-up</li>
                <li>Send product information you have requested</li>
              </ul>
              <p className="mt-3">We do not use your information for unsolicited marketing, and we do not sell or rent your information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
              <p>
                Our contact and enquiry forms are powered by <strong className="text-gray-900">EmailJS</strong>, a third-party email service. When you submit a form, your data is transmitted securely to our inbox via the EmailJS platform. EmailJS processes data in accordance with their own privacy policy.
              </p>
              <p className="mt-3">
                We do not use Google Analytics, Facebook Pixel, or other behavioural tracking tools on this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
              <p>
                Enquiry data received via email is retained in our business email account for as long as necessary to fulfill the business purpose for which it was submitted. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Know what personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data from our records</li>
                <li>Withdraw consent for future communications</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, email us at <a href={EMAIL_HREF} className="text-brand-blue hover:underline">{EMAIL}</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
              <p>
                This website does not use tracking cookies or advertising cookies. Basic browser caching may occur as part of normal website operation, but no personal data is stored in cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised date. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">
                Last updated: June 2026. Questions? Contact us at{' '}
                <a href={EMAIL_HREF} className="text-brand-blue hover:underline">{EMAIL}</a>.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/disclaimer" className="btn-secondary">Medical Disclaimer</Link>
            <Link to="/terms" className="btn-secondary">Terms of Use</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
