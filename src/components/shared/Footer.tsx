import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary">
      <div className="h-0.5 w-full bg-linear-to-r from-lm-pink via-lm-blue to-lm-green" />
      <div className="max-w-6xl mx-auto px-4 border-t border-lm-bg-secondary dark:border-dm-bg-secondary py-8">
        <h4 className="text-center font-semibold mb-4">Menu</h4>

        <ul className="flex flex-wrap justify-center gap-3">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `
    relative px-3 py-1.5 rounded-md text-sm transition-all duration-200 text-lm-blue dark:text-dm-blue

    no-underline border border-transparent
    hover:text-lm-yellow dark:hover:text-dm-pink

    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40

    ${isActive ? "text-lm-blue font-bold dark:text-dm-pink" : ""}
    `
                }
              >
                <span className="relative z-10">{label}</span>

                <span className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current rounded-xs opacity-40" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current rounded-xs opacity-40" />
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <nav className="flex gap-6">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/cookie-policy">Cookie Policy</NavLink>
        </nav>

        <div className="flex flex-col items-center justify-center gap-6 text-center md:text-left">
          <img
            src="/logos/gaia_logo.png"
            alt="GAIA – Giochi Accessibili ed Inclusivi per bambini con Autismo"
            className="h-20 w-auto dark:hidden"
          />

          <img
            src="/logos/gaia_logo_dm.png"
            alt="GAIA – Giochi Accessibili ed Inclusivi per bambini con Autismo"
            className="h-20 w-auto hidden dark:block"
          />

          <p className="text-sm">
            © {year} –{" "}
            <strong>
              Giochi Accessibili ed Inclusivi per bambini con Autismo
            </strong>
          </p>
        </div>

        <a
          href="https://www.teacz.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm opacity-70 gap-2 flex items-center justify-center flex-col hover:opacity-100 transition"
        >
          <img
            src="/logos/tea_logo.png"
            alt="Logo TEA srl"
            className="h-10 w-auto block dark:hidden"
          />

          <img
            src="/logos/tea_logo_neg.png"
            alt="Logo TEA srl"
            className="h-10 w-auto hidden dark:block"
          />

          <span>Sito realizzato da TEA srl | {year}</span>
        </a>
      </div>
    </footer>
  );
}
