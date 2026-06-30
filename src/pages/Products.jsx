import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import SectionHeader from '../components/ui/SectionHeader'
import PageMeta from '../components/seo/PageMeta'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  const activeCategory = searchParams.get('category') || 'all'

  // Only show categories that have at least one product
  const activeCats = useMemo(
    () => CATEGORIES.filter(cat => PRODUCTS.some(p => p.category === cat.id)),
    []
  )

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q) ||
      p.usage.toLowerCase().includes(q) ||
      (p.brandName && p.brandName.toLowerCase().includes(q)) ||
      (p.therapeuticSegment && p.therapeuticSegment.toLowerCase().includes(q)) ||
      (p.form && p.form.toLowerCase().includes(q)) ||
      (p.route && p.route.toLowerCase().includes(q))
    return matchCat && matchSearch
  })

  function setCategory(id) {
    if (id === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', id)
    }
    setSearchParams(searchParams)
  }

  const activeCatLabel = activeCats.find(c => c.id === activeCategory)?.label

  return (
    <>
      <PageMeta
        title="Pharmaceutical Products Catalogue"
        path="/products"
        description="Browse Humedaxive Pharma's WHO-GMP certified product catalogue — tablets, capsules, injections, syrups, creams and soaps. Bulk enquiries welcome for doctors, hospitals and distributors."
      />
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Product Catalogue</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            WHO-GMP certified pharmaceutical products across {activeCats.length} categories — manufactured to the highest quality standards.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-[104px] z-30 shadow-sm">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === 'all'
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'border-gray-200 text-gray-600 hover:border-brand-blue/40 hover:text-brand-blue'
                }`}
              >
                All Categories
              </button>
              {activeCats.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-brand-blue text-white border-brand-blue'
                      : 'border-gray-200 text-gray-600 hover:border-brand-blue/40 hover:text-brand-blue'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder="Search by name, composition, segment…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue w-full"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && activeCatLabel && (
                <span> in <span className="text-brand-blue font-semibold">{activeCatLabel}</span></span>
              )}
              {search && (
                <span> for <span className="text-brand-blue font-semibold">"{search}"</span></span>
              )}
            </p>
            <Link to="/enquiry" className="text-sm text-brand-blue font-semibold hover:underline flex items-center gap-1">
              Bulk Enquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                {search
                  ? `No products match "${search}"${activeCategory !== 'all' && activeCatLabel ? ` in ${activeCatLabel}` : ''}. Try a different search term or browse all categories.`
                  : 'No products available in this category yet.'}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {search && (
                  <button onClick={() => setSearch('')} className="btn-secondary">
                    Clear Search
                  </button>
                )}
                {activeCategory !== 'all' && (
                  <button onClick={() => setCategory('all')} className="btn-secondary">
                    Browse All Categories
                  </button>
                )}
                {(search || activeCategory !== 'all') && (
                  <button onClick={() => { setSearch(''); setCategory('all') }} className="btn-primary">
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {/* Bulk CTA */}
          <div className="mt-16 bg-brand-blue rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Looking for Bulk Orders?</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              We supply in bulk to distributors, hospitals and pharmacy chains. Competitive pricing for repeat orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquiry" className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-7 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Submit Bulk Enquiry
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
