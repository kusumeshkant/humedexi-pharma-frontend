import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import SectionHeader from '../components/ui/SectionHeader'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  const activeCategory = searchParams.get('category') || 'all'

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.composition.toLowerCase().includes(search.toLowerCase()) ||
      p.usage.toLowerCase().includes(search.toLowerCase())
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

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white section-pad">
        <div className="container-max text-center">
          <span className="inline-block bg-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Product Catalogue</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            WHO-GMP certified pharmaceutical products across 7 categories — manufactured to the highest quality standards.
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
              {CATEGORIES.map(cat => (
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
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue w-full"
              />
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
              {activeCategory !== 'all' && (
                <span> in <span className="text-brand-blue font-semibold capitalize">{activeCategory}</span></span>
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
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try a different search term or category.</p>
              <button onClick={() => { setSearch(''); setCategory('all') }} className="btn-primary">
                Clear Filters
              </button>
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
            <Link to="/enquiry" className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-7 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Submit Bulk Enquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
