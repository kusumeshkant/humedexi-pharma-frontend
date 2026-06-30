import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers (drops IE11 polyfills)
    target: 'es2020',

    // Generate source maps only in development — not in production builds
    sourcemap: false,

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching:
        // - vendor: React, ReactDOM, React Router (rarely change)
        // - emailjs: EmailJS library (only loaded when forms are used)
        // - pages: all page-level code split by React.lazy in App.jsx
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          emailjs: ['@emailjs/browser'],
          helmet: ['react-helmet-async'],
        },
      },
    },

    // Warn if any single chunk exceeds 500KB
    chunkSizeWarningLimit: 500,
  },
})
