import { useState, useEffect } from "react";
import { loadGoogleFonts } from "../../utils/loadFonts";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gaia-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function acceptAll() {
    const preferences = {
      necessary: true,
      fonts: true,
    };

    localStorage.setItem("gaia-cookie-consent", JSON.stringify(preferences));
    loadGoogleFonts();
    setVisible(false);
  }

  function rejectOptional() {
    const preferences = {
      necessary: true,
      fonts: false,
    };

    localStorage.setItem("gaia-cookie-consent", JSON.stringify(preferences));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed bottom-0 left-0 right-0 z-50 bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t px-4 py-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 id="cookie-banner-title" className="sr-only">
          Preferenze cookie
        </h2>
        <p
          id="cookie-banner-description"
          className="text-sm text-lm-text-primary dark:text-dm-text-primary"
        >
          Utilizziamo cookie tecnici necessari al funzionamento del sito e,
          previo consenso, anche per le finalità indicate nella nostra
          <Link
            to="/cookie-policy"
            className="underline ml-1 text-lm-blue dark:text-dm-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
          >
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex gap-2">
          <button
            onClick={rejectOptional}
            className="cursor-pointer px-4 py-2 border rounded hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40"
          >
            Rifiuta opzionali
          </button>

          <button
            onClick={acceptAll}
            className="cursor-pointer px-4 py-2 border border-lm-green dark:border-dm-green rounded bg-lm-bg-green dark:bg-dm-bg-green text-lm-green dark:text-dm-green hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
