import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'

const CERTS = [
  {
    name: 'WHO-GMP',
    full: 'World Health Organization Good Manufacturing Practice',
    color: 'brand-blue',
    bgClass: 'bg-brand-blue-light border-brand-blue/20',
    textClass: 'text-brand-blue',
    iconBg: 'bg-brand-blue',
    description: 'The WHO-GMP certification is the gold standard for pharmaceutical manufacturing worldwide. It establishes comprehensive guidelines that govern every aspect of medicine production — from facility design, personnel hygiene, and raw material sourcing to manufacturing processes, quality control, and packaging.',
    whatItMeans: [
      'Manufacturing environment meets international cleanliness and safety standards',
      'All personnel are trained and qualified for their roles',
      'Raw materials are sourced from approved, verified vendors',
      'Every batch is produced using validated processes and equipment',
      'Complete documentation and traceability for every product batch',
      'Regular audits by regulatory authorities to maintain certification',
    ],
    whyItMatters: "For doctors: You can prescribe our products with confidence knowing that every tablet, capsule, or injection has been manufactured in a facility that meets WHO's own quality standards — the same standards required for medicines exported globally. For distributors: WHO-GMP certification is a prerequisite for supplying to government hospitals, large pharmacy chains, and institutional buyers.",
  },
  {
    name: 'ISO',
    full: 'ISO 9001:2015 — Quality Management System',
    color: 'brand-teal',
    bgClass: 'bg-brand-teal-light border-brand-teal/20',
    textClass: 'text-brand-teal',
    iconBg: 'bg-brand-teal',
    description: 'ISO 9001:2015 is an internationally recognized standard for Quality Management Systems (QMS). It ensures that our organization consistently provides products and services that meet customer and regulatory requirements, while continually improving our operational processes.',
    whatItMeans: [
      'Systematic approach to managing product quality from order to delivery',
      'Defined and documented processes for every operational function',
      'Regular internal audits to identify and correct process gaps',
      'Customer feedback loops to continuously improve product and service quality',
      'Management review and accountability at the highest level',
      'Corrective and preventive action (CAPA) systems in place',
    ],
    whyItMatters: 'ISO certification means our quality systems go beyond just manufacturing — it covers how we handle orders, communicate with partners, manage complaints, and plan improvements. For buyers, this means fewer errors, consistent product quality, and a partner who is always working to get better.',
  },
  {
    name: 'FSSAI',
    full: 'Food Safety and Standards Authority of India',
    color: 'amber-700',
    bgClass: 'bg-amber-50 border-amber-200',
    textClass: 'text-amber-700',
    iconBg: 'bg-amber-600',
    description: 'FSSAI is the apex regulatory body under the Ministry of Health & Family Welfare, Government of India, responsible for establishing science-based standards for food articles and regulating their manufacture, storage, distribution, sale and import. FSSAI licensing is mandatory for pharmaceutical and nutraceutical products that intersect with food safety regulations.',
    whatItMeans: [
      'Products comply with Indian food and health safety standards',
      'Manufacturing facilities cleared by Government of India inspectors',
      'Labeling and packaging meets statutory requirements',
      'Product ingredients comply with approved safety lists',
      'Regular renewal and compliance monitoring by FSSAI authorities',
      'Traceability of food-grade inputs used in pharmaceutical formulations',
    ],
    whyItMatters: 'FSSAI compliance is especially relevant for our syrups, nutritional supplements, and medicinal soaps — ensuring they meet the stringent standards set by the Indian government. For healthcare providers, this is an additional assurance that products intended for patient consumption are safe and legally compliant.',
  },
]

const QUALITY_STEPS = [
  { step: '01', title: 'Raw Material Sourcing', desc: 'Only vendor-approved, certificate-of-analysis verified raw materials enter our facility.' },
  { step: '02', title: 'In-Process Testing', desc: 'Quality checks at each stage of manufacturing — not just at the end.' },
  { step: '03', title: 'Final QC Analysis', desc: 'Every batch undergoes identity, assay, purity, and dissolution testing.' },
  { step: '04', title: 'Stability Studies', desc: 'Products tested under ICH-compliant conditions to validate shelf-life claims.' },
  { step: '05', title: 'Batch Documentation', desc: 'Complete batch manufacturing records retained for traceability and audit.' },
  { step: '06', title: 'Regulatory Release', desc: 'Batch release only after QC sign-off — zero shortcuts, no exceptions.' },
]

export default function Certifications() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Quality Assurance</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Certifications</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Three major certifications that prove — not just claim — our commitment to pharmaceutical quality and safety.
          </p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {['WHO-GMP', 'ISO 9001:2015', 'FSSAI'].map(c => (
              <span key={c} className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why certifications matter */}
      <section className="bg-gray-50 section-pad">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              tag="Why It Matters"
              title="Certification Is Our Promise to Patients"
              subtitle="Every certification we hold means a doctor can prescribe our medicine knowing it will do exactly what it's supposed to — safely, consistently, and reliably."
            />
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: '🏥', for: 'For Doctors', msg: 'Prescribe with confidence. Every product is made to international standards.' },
                { icon: '🏨', for: 'For Hospitals', msg: 'Institutional procurement demands certified suppliers — we qualify.' },
                { icon: '📦', for: 'For Distributors', msg: 'Our certifications open doors to institutional and government buyers.' },
              ].map(item => (
                <div key={item.for} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-left">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.for}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification details */}
      <section className="section-pad bg-white">
        <div className="container-max space-y-14">
          {CERTS.map((cert, i) => (
            <div key={cert.name} className={`rounded-2xl border overflow-hidden ${cert.bgClass}`}>
              <div className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Badge */}
                  <div className={`flex-shrink-0 w-20 h-20 ${cert.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                    <span className="text-white text-2xl font-black tracking-tight">{cert.name}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${cert.textClass}`}>Certification {i + 1} of 3</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-1">{cert.name} Certified</h2>
                    <p className={`text-sm font-medium ${cert.textClass} mb-4`}>{cert.full}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{cert.description}</p>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          What This Certification Covers
                        </h4>
                        <ul className="space-y-2">
                          {cert.whatItMeans.map((point, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/60 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Why It Matters to You</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{cert.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality process */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <SectionHeader
            tag="Quality Process"
            title="Our 6-Step Quality Assurance Protocol"
            subtitle="From raw material to your hands — every step is controlled, documented, and verified."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_STEPS.map(step => (
              <div key={step.step} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white font-bold text-sm rounded-lg flex items-center justify-center">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal text-white section-pad">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Certified Quality. Real Trust.</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Experience the difference that certified manufacturing makes. Enquire about our products today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enquiry" className="bg-white text-brand-teal font-bold px-8 py-3.5 rounded-md hover:bg-teal-50 transition-colors">
              Make an Enquiry
            </Link>
            <Link to="/products" className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
