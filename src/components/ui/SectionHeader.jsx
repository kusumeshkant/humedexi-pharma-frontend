import React from 'react'

export default function SectionHeader({ tag, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block text-brand-teal text-xs font-semibold uppercase tracking-widest mb-3 bg-brand-teal-light px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
