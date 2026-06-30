import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import ProductCard from './ProductCard'

function useItemsPerView() {
  const [count, setCount] = useState(() => {
    if (window.innerWidth >= 1024) return 4
    if (window.innerWidth >= 640) return 2
    return 1
  })

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setCount(4)
      else if (window.innerWidth >= 640) setCount(2)
      else setCount(1)
    }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export default function ProductCarousel({ products }) {
  const n = products.length
  const tripled = useMemo(() => [...products, ...products, ...products], [products])
  const total = tripled.length

  const itemsPerView = useItemsPerView()

  // Start in the middle copy
  const [idx, setIdx] = useState(n)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const timerRef = useRef(null)

  const next = useCallback(() => {
    setAnimated(true)
    setIdx(i => i + 1)
  }, [])

  const prev = useCallback(() => {
    setAnimated(true)
    setIdx(i => i - 1)
  }, [])

  // Infinite loop: after transition snap back to middle copy silently
  useEffect(() => {
    if (idx >= n * 2) {
      const t = setTimeout(() => {
        setAnimated(false)
        setIdx(i => i - n)
      }, 520)
      return () => clearTimeout(t)
    }
    if (idx < n) {
      const t = setTimeout(() => {
        setAnimated(false)
        setIdx(i => i + n)
      }, 520)
      return () => clearTimeout(t)
    }
  }, [idx, n])

  // Re-enable animation a tick after the silent snap
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 60)
      return () => clearTimeout(t)
    }
  }, [animated])

  // Reset position when itemsPerView changes (avoid partial-view glitch)
  useEffect(() => {
    setAnimated(false)
    setIdx(n)
  }, [itemsPerView, n])

  // Auto-play
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 3200)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  // Keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // translateX as % of the track itself
  const translatePct = -(idx / total) * 100

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Product showcase carousel"
    >
      {/* Overflow clip wrapper */}
      <div className="overflow-hidden mx-8">
        {/* Track */}
        <div
          className="flex"
          style={{
            width: `${(total / itemsPerView) * 100}%`,
            transform: `translateX(${translatePct}%)`,
            transition: animated ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
          }}
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            if (touchStartX.current === null) return
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
            touchStartX.current = null
          }}
        >
          {tripled.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              style={{ width: `${100 / total}%` }}
              className="px-3 flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 shadow-md rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        aria-label="Previous products"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 shadow-md rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        aria-label="Next products"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators — show position within original set */}
      <div className="flex justify-center gap-1.5 mt-5" role="tablist" aria-label="Carousel position">
        {Array.from({ length: Math.ceil(n / itemsPerView) }).map((_, dotIdx) => {
          const activeSlide = ((idx - n) % n + n) % n
          const isActive = Math.floor(activeSlide / itemsPerView) === dotIdx
          return (
            <button
              key={dotIdx}
              role="tab"
              aria-selected={isActive}
              onClick={() => { setAnimated(true); setIdx(n + dotIdx * itemsPerView) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? 'w-6 bg-brand-blue' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
