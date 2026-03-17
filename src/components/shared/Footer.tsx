import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-lm-bg-blue dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
        <p className="text-sm md:text-base">
          © {year}{" "}
          <span className="font-semibold text-lm-text-primary dark:text-dm-text-primary">
            {" "}
            GAIA
          </span>{" "}
          – Progetto finanziato dalla Regione Calabria
        </p>

        <nav aria-label="Link legali" className="flex gap-4">
          <NavLink
            to="/privacy-policy"
            className="hover:text-lm-text-primary dark:hover:text-dm-text-primary transition-colors"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/cookie-policy"
            className="hover:text-lm-text-primary dark:hover:text-dm-text-primary transition-colors"
          >
            Cookie Policy
          </NavLink>
        </nav>

        <p className="text-xs">TEA srl | {year}</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-lm-text-secondary dark:text-dm-text-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary">
        <nav aria-label="Navigazione footer">
          <h4 className="text-center text-lm-text-primary dark:text-dm-text-primary">Menu</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:display-block text-sm py-6">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="hover:underline underline-offset-4">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
