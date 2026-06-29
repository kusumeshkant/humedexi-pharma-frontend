import React from 'react'

const BADGE_CONFIG = {
  rx: {
    label: 'Rx',
    className: 'bg-red-50 text-red-700 border-red-200',
    title: 'Prescription Required',
  },
  otc: {
    label: 'OTC',
    className: 'bg-green-50 text-green-700 border-green-200',
    title: 'Over the Counter',
  },
  nutraceutical: {
    label: 'Nutra',
    className: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    title: 'Nutraceutical / Dietary Supplement',
  },
}

export default function ProductBadge({ type }) {
  const config = BADGE_CONFIG[type]
  if (!config) return null
  return (
    <span
      title={config.title}
      className={`inline-flex items-center border rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${config.className}`}
    >
      {config.label}
    </span>
  )
}
