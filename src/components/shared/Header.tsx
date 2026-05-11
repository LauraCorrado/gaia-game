import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleDarkMode, isDarkMode } from "../../utils/darkMode";
import { Sun, Moon } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { navLinks } from "../../data/navigation";
import { logos } from "../../data/logos";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(isDarkMode);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const handler = () => setDark(isDarkMode());
    window.addEventListener("gaia-theme-change", handler);
    return () => window.removeEventListener("gaia-theme-change", handler);
  }, []);

  function handleToggle() {
    toggleDarkMode();
    setDark(isDarkMode());
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-lm-bg-secondary dark:bg-lm-bg-yellow border-b border-lm-bg-secondary dark:border-gray-200 flex justify-center px-4 py-2">
        <img
          src={logos.coesione}
          alt="Loghi istituzionali del programma Coesione Italia 2021-2027 Calabria"
          className="h-auto w-150 object-contain"
        />
      </div>

      <div className="bg-lm-bg-primary dark:bg-dm-bg-primary border-b border-lm-bg-secondary dark:border-dm-bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="GAIA – Homepage"
            className="flex items-center gap-2"
          >
            <img src={logos.gaiaCut} alt="Logo GAIA" className="h-10 w-auto" />
          </NavLink>

          <nav
            aria-label="Menu principale"
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `
     px-3 py-1.5 relative rounded-md text-sm transition-all duration-200 text-lm-blue dark:text-dm-blue

    no-underline border border-transparent
    hover:text-lm-yellow dark:hover:text-dm-pink

    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 ${isActive ? "text-lm-blue font-bold dark:text-dm-pink" : ""}
    `
                }
              >
                <span className="relative z-10">{label}</span>

                <span className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current rounded-xs opacity-40" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current rounded-xs opacity-40" />
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={handleToggle}
              aria-label={
                dark ? "Attiva modalità chiara" : "Attiva modalità scura"
              }
              title={
                dark ? "Passa a modalità chiara" : "Passa a modalità scura"
              }
              className="p-2 rounded-full hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40"
            >
              {dark ? (
                <Sun aria-hidden="true" className="w-7 h-7 text-dm-yellow" />
              ) : (
                <Moon aria-hidden="true" className="w-7 h-7 text-lm-blue" />
              )}
            </button>

            <div className="hidden md:block w-px h-6 bg-lm-text-secondary/20 dark:bg-dm-text-secondary/20" />

            <div className="hidden md:flex flex-col items-center leading-none">
              <a
                href="https://www.instagram.com/progettogaia2025/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vai alla pagina Instagram di GAIA. Si apre in una nuova scheda"
                className="
      mt-1
      p-2 rounded-full
      text-lm-pink dark:text-dm-pink
      hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary
      hover:text-lm-blue dark:hover:text-dm-blue
      transition-all duration-200
    "
              >
                <InstagramIcon aria-hidden="true" className="w-4 h-4" />
              </a>
              <span className="text-[10px] uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary">
                Seguici
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Chiudi menu di navigazione"
                  : "Apri menu di navigazione"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-md text-lm-blue dark:text-dm-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40"
            >
              <span className="block w-5 h-0.5 mb-1 bg-current" />
              <span className="block w-5 h-0.5 mb-1 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Menu principale mobile"
            className="md:hidden px-4 py-4 flex flex-col gap-3 text-center bg-lm-bg-secondary dark:bg-dm-bg-blue"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                className="mx-5 border-x border-x-lm-blue dark:border-x-dm-blue no-underline"
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://www.instagram.com/progettogaia2025/"
              target="_blank"
              aria-label="Vai alla pagina Instagram di GAIA. Si apre in una nuova scheda"
              rel="noopener noreferrer"
              className="
    mt-3 mx-5 py-3
    border-t border-lm-blue/20 dark:border-dm-blue/20
    text-lm-blue dark:text-dm-blue
    flex items-center justify-center gap-2
    no-underline
    hover:text-lm-pink dark:hover:text-dm-pink
    transition
  "
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}