import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../data/products'

export default function ProductCard({ product }) {
  const cat = CATEGORIES.find(c => c.id === product.category)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
      {/* Product image */}
      <div className="relative overflow-hidden bg-gray-50 h-52">
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-blue-light to-brand-teal-light flex flex-col items-center justify-center">
            <span className="text-5xl mb-2">{cat?.icon || '💊'}</span>
          </div>
        )}
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
            {cat?.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-brand-blue transition-colors leading-snug">
          {product.brandName || product.name}
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-2">{product.form}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.composition}
        </p>

        <div className="flex gap-2 mt-auto pt-3 border-t border-gray-50">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center text-sm font-medium text-brand-blue border border-brand-blue px-3 py-2 rounded-md hover:bg-brand-blue-light transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/enquiry?product=${encodeURIComponent(product.name)}`}
            className="flex-1 text-center text-sm font-medium text-white bg-brand-teal px-3 py-2 rounded-md hover:bg-brand-teal-dark transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  )
}
