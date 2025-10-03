import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // ✅ Tailwind styles
import Lenis from 'lenis'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize Lenis smooth scrolling once at app startup
const lenis = new Lenis()

function onRaf(time) {
  lenis.raf(time)
  requestAnimationFrame(onRaf)
}

requestAnimationFrame(onRaf)

