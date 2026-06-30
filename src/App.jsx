import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import { trackPageView } from './lib/analytics'

const Home           = lazy(() => import('./pages/Home'))
const About          = lazy(() => import('./pages/About'))
const Products       = lazy(() => import('./pages/Products'))
const ProductDetail  = lazy(() => import('./pages/ProductDetail'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Contact        = lazy(() => import('./pages/Contact'))
const Enquiry        = lazy(() => import('./pages/Enquiry'))
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'))
const Terms          = lazy(() => import('./pages/Terms'))
const Disclaimer     = lazy(() => import('./pages/Disclaimer'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname])
  return null
}

function PageLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-label="Loading page">
      <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" role="status" />
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="text-8xl font-black text-brand-blue-light mb-4" aria-hidden="true">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">The page you are looking for does not exist or has been moved.</p>
      <div className="flex gap-3 flex-wrap justify-center">
        <a href="/" className="btn-primary">Back to Home</a>
        <a href="/products" className="btn-secondary">View Products</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/about"          element={<About />} />
            <Route path="/products"       element={<Products />} />
            <Route path="/products/:id"   element={<ProductDetail />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="/enquiry"        element={<Enquiry />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms"          element={<Terms />} />
            <Route path="/disclaimer"     element={<Disclaimer />} />
            <Route path="*"               element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}
