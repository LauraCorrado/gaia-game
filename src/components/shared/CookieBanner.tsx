import { useState, useEffect } from 'react'
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('gaia-banner-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  function closeBanner() {
    localStorage.setItem('gaia-banner-dismissed', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Informativa cookie"
      className="fixed bottom-0 left-0 right-0 z-50 bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-primary px-4 py-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-lm-text-primary dark:text-dm-text-primary">
          Questo sito non utilizza cookie di profilazione né strumenti di tracciamento.{' '}
          <a href="/cookie-policy" className="underline underline-offset-2">
            Leggi la Cookie Policy
          </a>.
        </p>

        <button
          onClick={closeBanner}
          aria-label="Chiudi informativa"
          className=" w-8 h-8 font-bold
    flex items-center justify-center
    rounded-full
    border border-lm-text-primary dark:border-dm-text-primary
    text-lm-text-primary dark:text-dm-text-primary
    hover:bg-lm-text-primary/10 dark:hover:bg-dm-text-primary/10
    focus:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue
    transition cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}