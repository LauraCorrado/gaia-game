import Hero from "../components/ui/Hero"
import { partners } from "../data/partners"
import type { Partner } from "../data/partners"

function PartnerCard({ p }: { p: Partner }) {
  return (
    <article
      className={`
        rounded-xl overflow-hidden flex flex-col
        border border-current/10 backdrop-blur-sm
        transition-shadow duration-200 hover:shadow-md
        ${p.color}
      `}
    >
      <div className={`h-1.5 w-full shrink-0 ${p.accentBar}`} aria-hidden="true" />

      <div className="p-6 flex flex-col gap-4">

        <div className="flex items-center gap-4">
          <img
            src={p.logo}
            alt={`Logo ${p.name}`}
            className="h-10 w-auto object-contain shrink-0"
          />
          <div>
            <h2 className={`text-xl font-semibold leading-tight ${p.accent}`}>
              {p.name}
            </h2>
            <p className="text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary">
              {p.role}
            </p>
          </div>
        </div>

        <p className="text-lm-text-primary dark:text-dm-text-primary text-sm leading-relaxed">
          {p.description}
        </p>

        <div>
          <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${p.accent}`}>
            Il contributo al progetto GAIA
          </h3>
          <div className="flex flex-col gap-2">
            {p.contribution.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </article>
  )
}

export default function Team() {
  return (
    <>
      <Hero
        title="La nostra squadra"
        subtitle="Il progetto GAIA coinvolge un partenariato interdisciplinare composto da aziende e istituzioni accademiche calabresi."
        badge="Il Team"
        accentColor="green"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((p) => (
            <PartnerCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </>
  )
}