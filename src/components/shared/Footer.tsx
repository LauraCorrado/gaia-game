import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-lm-bg-blue dark:bg-dm-bg-secondary border-t border-lm-bg-secondary dark:border-dm-bg-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-lm-text-secondary dark:text-dm-text-secondary">

        <p className="text-sm md:text-base">
          © {year} <span className="font-semibold text-lm-text-primary dark:text-dm-text-primary"> GAIA</span> – Progetto finanziato dalla Regione Calabria
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

        <p className="text-xs">
          TEA srl | {year}
        </p>
      </div>
    </footer>
  )
}