import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { PHONE_PRIMARY_HREF, PHONE_PRIMARY_DISPLAY } from '../config/constants'

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)

  if (!product) return <Navigate to="/products" replace />

  const cat = CATEGORIES.find(c => c.id === product.category)
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/products" className="hover:text-brand-blue transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product main section */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — image */}
            <div className="sticky top-[140px]">
              <div className="bg-white rounded-2xl h-80 overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
                {product.image && !imgError ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-blue-light to-brand-teal-light flex flex-col items-center justify-center">
                    <span className="text-7xl mb-4">{cat?.icon || '💊'}</span>
                    <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
                      {cat?.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Certifications */}
              <div className="flex gap-3 mt-5 justify-center flex-wrap">
                {['WHO-GMP', 'ISO', 'FSSAI'].map(c => (
                  <span key={c} className="text-xs font-semibold text-brand-blue bg-brand-blue-light border border-brand-blue/20 px-3 py-1.5 rounded-md flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {c} Certified
                  </span>
                ))}
              </div>
            </div>

            {/* Right — details */}
            <div>
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider bg-brand-teal-light px-3 py-1 rounded-full">{cat?.label}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-2 leading-tight">{product.name}</h1>
              <p className="text-brand-blue font-medium mb-6">{product.form}</p>

              <div className="space-y-5">
                <InfoRow label="Composition" value={product.composition} />
                <InfoRow label="Therapeutic Usage" value={product.usage} />
                <InfoRow label="Benefits" value={product.benefits} />
                <InfoRow label="Packaging" value={product.packaging} />
              </div>

              {/* Quality note */}
              <div className="mt-8 bg-brand-blue-light border border-brand-blue/20 rounded-xl p-4 flex gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-brand-blue">Quality Assurance</p>
                  <p className="text-sm text-gray-600 mt-0.5">Manufactured under WHO-GMP &amp; ISO certified processes. Every batch undergoes rigorous QC testing before release.</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/enquiry?product=${encodeURIComponent(product.name)}`}
                  className="btn-teal flex-1 justify-center text-base py-3.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Enquire for This Product
                </Link>
                <a href={PHONE_PRIMARY_HREF} className="btn-secondary flex-1 justify-center text-base py-3.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Order
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                * For professional use only. For sale to licensed healthcare professionals and registered distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-pad bg-gray-50">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More {cat?.label}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => {
                const [relImgError, setRelImgError] = useState(false)
                return (
                  <Link key={p.id} to={`/products/${p.id}`} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="h-36 bg-white flex items-center justify-center border-b border-gray-50">
                      {p.image && !relImgError ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          onError={() => setRelImgError(true)}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <span className="text-4xl">{cat?.icon}</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors mb-1">{p.name}</h3>
                      <p className="text-xs text-gray-400 mb-1">{p.form}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">{p.composition}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-gray-100 pb-5">
      <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{label}</dt>
      <dd className="text-gray-700 leading-relaxed">{value}</dd>
    </div>
  )
}
