import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gaia-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('gaia-cookie-consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('gaia-cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Consenso cookie"
      className="fixed bottom-0 left-0 right-0 z-50 bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-primary px-4 py-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-lm-text-primary dark:text-dm-text-primary">
          Questo sito utilizza cookie tecnici per il corretto funzionamento.{' '}
          <a href="/cookie-policy" className="underline underline-offset-2">
            Leggi la Cookie Policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm rounded border border-lm-text-secondary dark:border-dm-text-secondary text-lm-text-secondary dark:text-dm-text-secondary hover:border-lm-text-primary dark:hover:border-dm-text-primary transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded bg-lm-blue dark:bg-dm-blue text-white dark:text-dm-bg-primary font-medium hover:opacity-90 transition-opacity"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}