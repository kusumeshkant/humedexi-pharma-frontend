import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// 404 page
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-brand-blue-light mb-4">404</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
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
      </Layout>
    </>
  )
}
