import { useState, useEffect } from 'react'
import { loadGoogleFonts } from '../../utils/loadFonts'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gaia-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function acceptAll() {
    const preferences = {
      necessary: true,
      fonts: true,
    }

    localStorage.setItem('gaia-cookie-consent', JSON.stringify(preferences))
    loadGoogleFonts()
    setVisible(false)
  }

  function rejectOptional() {
    const preferences = {
      necessary: true,
      fonts: false,
    }

    localStorage.setItem('gaia-cookie-consent', JSON.stringify(preferences))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t px-4 py-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <p className="text-sm text-lm-text-primary dark:text-dm-text-primary">
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, anche per le finalità indicate nella nostra
          <a href="/cookie-policy" className="underline ml-1 text-lm-blue dark:text-dm-blue">
            Cookie Policy
          </a>.
        </p>

        <div className="flex gap-2">
          <button
            onClick={rejectOptional}
            className="px-4 py-2 border rounded hover:bg-black/5"
          >
            Rifiuta
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-lm-blue text-white rounded hover:opacity-90"
          >
            Accetta
          </button>
        </div>

      </div>
    </div>
  )
}