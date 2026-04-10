import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toggleDarkMode, isDarkMode } from "../../utils/darkMode";
import { Sun, Moon } from "lucide-react";
import { InstagramIcon } from "./SocialIcons"
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
          <NavLink
            to="/"
            aria-label="GAIA – Homepage"
            className="flex items-center gap-2"
          >
            <img
              src="/logos/gaia_logo_cut.png"
              alt="Logo GAIA"
              className="h-10 w-auto"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
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

          <div className="flex items-center gap-3">
            
            <button
              onClick={handleToggle}
              aria-label={
                dark ? "Attiva modalità chiara" : "Attiva modalità scura"
              }
              title={
                dark ? "Passa a modalità chiara" : "Passa a modalità scura"
              }
              className="p-2 rounded-full hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary cursor-pointer"
            >
              {dark ? (
                <Sun className="w-7 h-7 text-dm-yellow" />
              ) : (
                <Moon className="w-7 h-7 text-lm-blue" />
              )}
            </button>

            <a
  href="https://www.instagram.com/progettogaia2025/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Vai alla pagina Instagram di GAIA"
  className="
    hidden md:flex
    p-2 rounded-full
    text-lm-blue dark:text-dm-blue
    hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary
    hover:text-lm-pink dark:hover:text-dm-pink
    transition-all duration-200
  "
>
  <InstagramIcon className="w-5 h-5" />
</a>

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
          <nav className="md:hidden px-4 py-4 flex flex-col gap-3 text-center bg-lm-bg-secondary dark:bg-dm-bg-blue">
            {navLinks.map(({ to, label }) => (
              <NavLink className="mx-5 border-x border-x-lm-blue dark:border-x-dm-blue no-underline" key={to} to={to} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
            <a
  href="https://www.instagram.com/progettogaia2025/"
  target="_blank"
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
