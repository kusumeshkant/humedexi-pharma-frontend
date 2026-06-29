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
  { year: 'Expansion', title: 'Product Range Growth', desc: 'Expanded from core generics to a comprehensive portfolio covering multiple product categories and formulations across therapeutic segments.' },
  { year: 'Today', title: 'Trusted Pharma Partner', desc: 'Serving doctors, hospitals, clinics and distributors across the region with consistent supply and competitive pricing.' },
]

const MFG_STANDARDS = [
  { icon: '🏭', title: 'WHO-GMP Facility', desc: 'Our manufacturing unit operates under WHO Good Manufacturing Practice guidelines — the global gold standard for pharmaceutical production.' },
  { icon: '🧪', title: 'Analytical QC Lab', desc: 'Fully equipped quality control laboratory for testing raw materials, in-process samples, and finished products at every stage.' },
  { icon: '📋', title: 'Validated Processes', desc: 'All manufacturing processes are validated and documented. SOPs are followed strictly with no deviation from approved protocols.' },
  { icon: '🌡️', title: 'Controlled Environment', desc: 'Temperature-controlled, humidity-monitored clean areas for sensitive formulations including injectables, capsules, and creams.' },
  { icon: '📦', title: 'Regulated Packaging', desc: 'Child-resistant and tamper-evident packaging with complete batch information, shelf life, and regulatory labels on every pack.' },
  { icon: '🔍', title: 'Stability Testing', desc: 'ICH-guideline-compliant stability studies conducted to validate shelf life claims under real-world and accelerated conditions.' },
]

const WHY_CHOOSE = [
  { icon: '✅', title: 'Triple Certified Quality', desc: 'WHO-GMP, ISO 9001:2015, and FSSAI certified — our quality credentials are verified by independent regulatory bodies, not just self-declared.' },
  { icon: '📦', title: 'Broad Product Portfolio', desc: 'Capsules, tablets, injections, syrups, creams, and soaps across 10+ therapeutic segments — a single supplier for most of your pharmaceutical needs.' },
  { icon: '🚚', title: 'Reliable Supply', desc: 'Adequate production capacity and inventory management ensure consistent supply. No stockouts, no delays — your patients don\'t wait.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Direct manufacturer pricing with attractive margins for distributors and bulk buyers. Volume discounts available on request.' },
  { icon: '🏥', title: 'Hospital & Institution Ready', desc: 'Our certifications qualify us for hospital formularies, government tenders, and institutional procurement — documentation available on request.' },
  { icon: '🤝', title: 'Dedicated Relationship', desc: 'A dedicated sales point of contact for every distributor. We answer your queries, resolve issues, and support your business growth.' },
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
                  <strong className="text-gray-900">Humedaxive Pharma Private Limited</strong> is a pharmaceutical company headquartered in Bihar, India. We manufacture and supply a wide range of pharmaceutical products — including capsules, tablets, injections, syrups, ointments, creams, and medicated soaps — to healthcare providers and distributors across the country.
                </p>
                <p>
                  Our operations are built on international quality standards. We hold <strong className="text-gray-900">WHO-GMP certification</strong>, ensuring our manufacturing processes meet global benchmarks for safety, efficacy, and consistency. Our <strong className="text-gray-900">ISO 9001:2015 certification</strong> reflects our commitment to systematic quality management at every level. Our <strong className="text-gray-900">FSSAI license</strong> validates compliance for nutraceutical and food-category products.
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
                { val: '6+', label: 'Product Categories' },
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

      {/* Manufacturing Standards */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <SectionHeader
            tag="Manufacturing"
            title="Production Standards That Set Us Apart"
            subtitle="Our manufacturing capabilities are built to international benchmarks — not local minimums."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MFG_STANDARDS.map(item => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
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

      {/* Distribution Network */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader tag="Distribution" title="Our Distribution Network" center={false} />
              <p className="text-gray-600 leading-relaxed mb-6">
                Headquartered in Bihar, Humedaxive Pharma operates a growing distribution network that reaches healthcare providers and stockists across Eastern India. We work directly with:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: '🏥', label: 'Hospitals & Nursing Homes', desc: 'Direct supply to institutional buyers with bulk pricing, credit terms, and documentation for formulary inclusion.' },
                  { icon: '👨‍⚕️', label: 'Doctors & Clinics', desc: 'Direct-to-doctor programs with product samples, detailing support, and responsive order fulfillment.' },
                  { icon: '📦', label: 'Stockists & Distributors', desc: 'Exclusive and non-exclusive distributor partnerships with attractive trade margins and sales support.' },
                  { icon: '🏪', label: 'Retail Pharmacies', desc: 'Supply through authorized distributors to retail pharmacy channels with consistent product availability.' },
                ].map(item => (
                  <li key={item.label} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/enquiry" className="btn-primary">Enquire About Distribution</Link>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-6">Become a Distributor</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We are actively expanding our distribution network across Bihar and Eastern India. If you are a pharma stockist, C&F agent, or institutional buyer looking for a reliable WHO-GMP certified supplier, we'd like to hear from you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Attractive trade margins on all products',
                  'Consistent supply — no stockout issues',
                  'Marketing and detailing support',
                  'Flexible credit terms for established partners',
                  'Dedicated relationship manager',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                    <svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link to="/enquiry" className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Humedaxive */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <SectionHeader
            tag="Why Choose Us"
            title="The Humedaxive Advantage"
            subtitle="Six reasons why healthcare professionals and distributors prefer us over generic suppliers."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
