import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { logos } from "../../data/logos";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Piè di pagina"
      className="mt-auto bg-lm-bg-secondary dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary"
    >
      <div
        aria-hidden="true"
        className="h-0.5 w-full bg-linear-to-r from-lm-pink via-lm-blue to-lm-green"
      />
      <div className="max-w-6xl mx-auto px-4 border-t border-lm-bg-secondary dark:border-dm-bg-secondary py-8">
        <h4 className="text-center font-semibold mb-4">Menu</h4>

        <nav aria-label="Menu secondario">
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
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <nav
          aria-label="Link legali e social"
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="flex gap-4">
            <NavLink
              to="/privacy-policy"
              className="hover:underline text-lm-blue dark:text-dm-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/cookie-policy"
              className="hover:underline text-lm-blue dark:text-dm-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
            >
              Cookie Policy
            </NavLink>
          </div>

          <span className="text-lm-blue dark:text-dm-blue text-lg font-medium">
            Seguici sui social!
          </span>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/progettogaia2025/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vai alla pagina Instagram di GAIA. Si apre in una nuova scheda"
              className="
                  flex items-center gap-2
                  text-lm-blue dark:text-dm-blue
                  hover:text-lm-pink dark:hover:text-dm-pink
                  transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-md
                "
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590897885288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vai alla pagina Facebook di GAIA. Si apre in una nuova scheda"
              className="
                  flex items-center gap-2
                  text-lm-blue dark:text-dm-blue
                  hover:text-lm-pink dark:hover:text-dm-pink
                  transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-md
                "
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center gap-6 text-center md:text-left">
          <img
            src={logos.gaia}
            alt="Logo GAIA – Giochi Accessibili ed Inclusivi per bambini con Autismo"
            className="h-20 w-auto dark:hidden"
          />

          <img
            src={logos.gaiaDm}
            alt="Logo GAIA – Giochi Accessibili ed Inclusivi per bambini con Autismo"
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
          aria-label="Vai al sito di TEA srl. Si apre in una nuova scheda"
          className="text-sm opacity-70 gap-2 flex items-center justify-center flex-col hover:opacity-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-md"
        >
          <img
            src={logos.tea}
            alt="Logo TEA srl"
            className="h-10 w-auto block dark:hidden"
          />

          <img
            src={logos.teaNeg}
            alt="Logo TEA srl"
            className="h-10 w-auto hidden dark:block"
          />

          <span>Sito realizzato da TEA srl | {year}</span>
        </a>
      </div>
    </footer>
  );
}