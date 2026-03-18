import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary">
      <div className="h-0.5 w-full bg-linear-to-r from-lm-pink via-lm-blue to-lm-green" />

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p>
          © {year} <span className="font-semibold">GAIA</span> – Progetto
          finanziato dalla Regione Calabria
        </p>

        <nav className="flex gap-6">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/cookie-policy">Cookie Policy</NavLink>
        </nav>

        <p className="text-xs opacity-70">TEA srl | {year}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 border-t border-lm-bg-secondary dark:border-dm-bg-secondary py-8">
        <h4 className="text-center font-semibold mb-4">Menu</h4>

        <ul className="flex flex-wrap justify-center gap-3">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `
    relative px-3 py-1.5 rounded-md text-sm transition-all duration-200

    no-underline border border-transparent
    hover:text-lm-pink dark:hover:text-dm-pink

    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40

    ${isActive ? "text-lm-pink font-bold dark:text-dm-pink" : ""}
    `
                }
              >
                <span className="relative z-10">{label}</span>

                {/* accent underline */}
                <span className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-40" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-40" />
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
