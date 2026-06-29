import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'

const VALUES = [
  { icon: '🔬', title: 'Scientific Integrity', desc: 'Every formulation is developed with evidence-based practices and rigorous quality control from raw material to final product.' },
  { icon: '🤝', title: 'Partnership First', desc: 'We treat every doctor, distributor and hospital as a long-term partner — not a one-time transaction.' },
  { icon: '⚖️', title: 'Ethical Business', desc: 'Transparent pricing, honest commitments, and zero compromise on regulatory compliance.' },
  { icon: '🌱', title: 'Continuous Improvement', desc: 'We invest in upgrading our facilities, expanding our range, and improving delivery standards year after year.' },
]

const TIMELINE = [
  { year: 'Foundation', title: 'Established in Bihar', desc: 'Founded in 2018, Humedaxive Pharma was established with a singular mission: to make quality medicines accessible and affordable in Bihar and beyond.' },
  { year: 'Certification', title: 'WHO-GMP & ISO Certified', desc: 'Achieved WHO-GMP and ISO certifications, validating our manufacturing standards against international benchmarks.' },
  { year: 'Expansion', title: 'Product Range Growth', desc: 'Expanded from core generics to a comprehensive portfolio covering 7 product categories and 500+ formulations.' },
  { year: 'Today', title: 'Trusted Pharma Partner', desc: 'Serving doctors, hospitals, clinics and distributors across the region with consistent supply and competitive pricing.' },
]

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A committed pharmaceutical company from Bihar, built on the principles of quality, trust, and long-term healthcare partnerships.
          </p>
        </div>
      </section>

      {/* Company overview */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader tag="Company Overview" title="Rooted in Bihar. Committed to India's Health." center={false} />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Humedaxive Pharma</strong> is a pharmaceutical company headquartered in Bihar, India. We manufacture and supply a wide range of pharmaceutical products — including capsules, tablets, injections, syrups, ointments, creams, and medicated soaps — to healthcare providers and distributors across the country.
                </p>
                <p>
                  Our operations are built on international quality standards. We hold <strong className="text-gray-900">WHO-GMP certification</strong>, ensuring our manufacturing processes meet global benchmarks for safety, efficacy, and consistency. Our <strong className="text-gray-900">ISO certification</strong> reflects our commitment to systematic quality management at every level.
                </p>
                <p>
                  We understand that when a doctor prescribes our product — their patient's health depends on it. That is why we take quality not as a regulatory requirement, but as a moral responsibility.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/products" className="btn-primary">View Our Products</Link>
                <Link to="/enquiry" className="btn-secondary">Partner With Us</Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue-light to-brand-teal-light rounded-2xl p-8 grid grid-cols-2 gap-5">
              {[
                { val: '500+', label: 'Product Formulations' },
                { val: '7', label: 'Product Categories' },
                { val: '3', label: 'Quality Certifications' },
                { val: '100%', label: 'Quality Tested' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div className="text-3xl font-bold text-brand-blue">{s.val}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <SectionHeader tag="Purpose" title="Mission & Vision" subtitle="The principles that drive every decision we make." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-5 text-xl">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide trusted, high-quality, and affordable medicines that improve patient outcomes — while building lasting partnerships with every doctor, clinic, hospital and distributor we serve.
              </p>
              <ul className="mt-5 space-y-3">
                {['Maintain the highest manufacturing quality standards', 'Ensure consistent and reliable supply to all partners', 'Offer competitive pricing for bulk and repeat buyers'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-xl flex items-center justify-center mb-5 text-xl">🔭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted pharmaceutical partner across Bihar and Eastern India — recognized for quality, reliability and ethical business practices in every market we serve.
              </p>
              <ul className="mt-5 space-y-3">
                {['Expand product range to meet evolving healthcare needs', 'Build India-wide distribution network for faster reach', 'Continuously invest in quality infrastructure and R&D'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeader tag="Our Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="section-pad bg-brand-blue-light">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader tag="Quality Commitment" title="Our Promise on Every Product" />
            <p className="text-gray-600 leading-relaxed mb-8">
              At Humedaxive Pharma, quality is embedded at every stage of our production — from vendor-verified raw material sourcing to validated manufacturing processes, in-process quality checks, and final product testing before dispatch.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { icon: '🧪', title: 'Raw Material Testing', desc: 'Each incoming raw material batch is tested for identity, purity, and potency before entering production.' },
                { icon: '🏭', title: 'In-Process QC', desc: 'Quality checks at every stage of manufacturing, not just at the end — catching deviations early.' },
                { icon: '📋', title: 'Batch Release Protocol', desc: 'No product leaves our facility without full documentation, stability data, and final QC sign-off.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeader tag="Our Journey" title="Growing With Purpose" />
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
            {TIMELINE.map((step, i) => (
              <div key={i} className="relative pl-16 pb-10 last:pb-0">
                <div className="absolute left-0 w-12 h-12 bg-brand-blue text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  {i + 1}
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">{step.year}</span>
                  <h3 className="font-semibold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white section-pad">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With a Pharma Company You Can Trust</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Doctors, distributors, and healthcare institutions — we welcome long-term partnerships built on quality and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enquiry" className="bg-white text-brand-blue font-bold px-8 py-3.5 rounded-md hover:bg-blue-50 transition-colors">
              Make an Enquiry
            </Link>
            <Link to="/contact" className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
