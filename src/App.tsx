import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import ScopriGaia from './pages/ScopriGaia'
import Team from './pages/Team'
import EventiNews from './pages/EventiNews'
import DietroLeQuinte from './pages/DietroLeQuinte'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/scopri-gaia" element={<ScopriGaia />} />
          <Route path="/team" element={<Team />} />
          <Route path="/eventi-news" element={<EventiNews />} />
          <Route path="/dietro-lequinte" element={<DietroLeQuinte />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        Pagina non trovata
      </h1>
      <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8">
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      
        <a href="/"
        className="inline-block px-6 py-3 rounded bg-lm-blue dark:bg-dm-blue text-white dark:text-dm-bg-primary font-medium hover:opacity-90 transition-opacity"
      >
        Torna alla Homepage
      </a>
    </div>
  )
}