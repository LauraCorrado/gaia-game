import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from "./components/ui/Button";
import { Home as Casa, AlertCircle } from "lucide-react";
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import ScopriGaia from './pages/ScopriGaia'
import Team from './pages/Team'
import EventiNews from './pages/EventiNews'
import DietroLeQuinte from './pages/DietroLeQuinte'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import NewsDetail from './components/shared/NewsDetail'

export default function App() {
  return (
    <BrowserRouter basename="/laura">
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
          <Route path="/eventi-news/:slug" element={<NewsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <main className="min-h-screen bg-lm-bg-primary dark:bg-dm-bg-primary flex items-center">
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
            <AlertCircle className="w-4 h-4" />
            Pagina non trovata
          </span>

          <h1 className="mt-6 text-lm-text-primary dark:text-dm-text-primary">
            Ops, questa pagina non esiste
          </h1>

          <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary max-w-xl">
            Il contenuto che stai cercando potrebbe essere stato spostato,
            modificato o non essere più disponibile.
          </p>

          <div className="mt-8">
            <a href="/">
              <Button color="pink">
                <span className="inline-flex items-center gap-2">
                  <Casa className="w-4 h-4" />
                  Torna alla homepage
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}