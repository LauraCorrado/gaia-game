import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleDarkMode, isDarkMode } from "../../utils/darkMode";
import logoGAIA from "../../assets/img/gaia_logo_cut.png";

const navLinks = [
  { to: "/scopri-gaia", label: "Scopri GAIA" },
  { to: "/team", label: "Il Team" },
  { to: "/eventi-news", label: "Eventi e News" },
  { to: "/dietro-lequinte", label: "Dietro le quinte" },
  { to: "/contatti", label: "Contattaci" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(isDarkMode);

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
    <header
      className="
    sticky top-0 z-40
    bg-lm-bg-primary dark:bg-dm-bg-primary
    border-b border-lm-bg-secondary dark:border-dm-bg-secondary
  "
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          aria-label="GAIA – Homepage"
          className="flex items-center gap-2"
        >
          <img src={logoGAIA} alt="Logo GAIA" className="h-10 w-auto" />
        </NavLink>

        {/* nav desktop */}
        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium text-sm transition-opacity hover:opacity-70 ${
                  isActive
                    ? "text-lm-blue dark:text-dm-blue underline underline-offset-4"
                    : "text-lm-text-primary dark:text-dm-text-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* controlli destra */}
        <div className="flex items-center gap-3">
          {/* Toggle dark mode */}
          <button
            onClick={handleToggle}
            aria-label={
              dark ? "Attiva modalità chiara" : "Attiva modalità scura"
            }
            className="p-2 rounded-full hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Apri menu di navigazione"
            className="md:hidden p-2 rounded hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary"
          >
            <span className="block w-5 h-0.5 bg-lm-text-primary dark:bg-dm-text-primary mb-1" />
            <span className="block w-5 h-0.5 bg-lm-text-primary dark:bg-dm-text-primary mb-1" />
            <span className="block w-5 h-0.5 bg-lm-text-primary dark:bg-dm-text-primary" />
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigazione mobile"
          className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-lm-bg-primary dark:bg-dm-bg-primary"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 ${
                  isActive
                    ? "text-lm-blue dark:text-dm-blue underline underline-offset-4"
                    : "text-lm-text-primary dark:text-dm-text-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
