import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleDarkMode, isDarkMode } from "../../utils/darkMode";
import logoGAIA from "../../assets/img/gaia_logo_cut.png";
import { Sun, Moon } from "lucide-react";
import { navLinks } from "../../data/navigation";

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
    <header className="fixed top-0 left-0 right-0 z-50">

      <div className="bg-lm-bg-secondary dark:bg-lm-bg-secondary border-b border-lm-bg-secondary dark:border-gray-200 flex justify-center px-4 py-2">
        <img
          src="/logos/Logo-Coesione-Italia-21-27-Calabria.png"
          alt="..."
          className="h-auto w-150 object-contain"
        />
      </div>

      <div className="bg-lm-bg-primary dark:bg-dm-bg-primary border-b border-lm-bg-secondary dark:border-dm-bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          <NavLink to="/" aria-label="GAIA – Homepage" className="flex items-center gap-2">
            <img src={logoGAIA} alt="Logo GAIA" className="h-10 w-auto" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className="text-sm font-medium">
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggle}
              aria-label={dark ? "Attiva modalità chiara" : "Attiva modalità scura"}
              title={dark ? "Passa a modalità chiara" : "Passa a modalità scura"}
              className="p-2 rounded-full hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary"
            >
              {dark ? (
                <Sun className="w-7 h-7 text-dm-yellow" />
              ) : (
                <Moon className="w-7 h-7 text-lm-blue" />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <span className="block w-5 h-0.5 mb-1 bg-current" />
              <span className="block w-5 h-0.5 mb-1 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 flex flex-col gap-3">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
