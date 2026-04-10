import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initDarkMode } from './utils/darkMode'
import { loadGoogleFonts } from './utils/loadFonts.ts'

const consent = localStorage.getItem('gaia-cookie-consent')

let parsed = null

try {
  parsed = consent ? JSON.parse(consent) : null
} catch {
  parsed = null
}

if(parsed?.fonts) {
  loadGoogleFonts()
}

initDarkMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
