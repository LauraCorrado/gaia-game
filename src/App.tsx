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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}