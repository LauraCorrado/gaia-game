const partners = [
  {
    name: "TEA SRL",
    role: "Capofila del progetto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "bg-lm-bg-pink dark:bg-dm-bg-pink",
    accent: "text-lm-pink dark:text-dm-pink",
  },
  {
    name: "Studio Rubino SRL",
    role: "Comunicazione, newsletter e brevetti",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "bg-lm-bg-blue dark:bg-dm-bg-blue",
    accent: "text-lm-blue dark:text-dm-blue",
  },
  {
    name: "Ober SRL",
    role: "Partner tecnico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "bg-lm-bg-yellow dark:bg-dm-bg-yellow",
    accent: "text-lm-yellow dark:text-dm-yellow",
  },
  {
    name: "UNICAL (DIMEG e DICES)",
    role: "Partner accademico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "bg-lm-bg-green dark:bg-dm-bg-green",
    accent: "text-lm-green dark:text-dm-green",
  },
];

import Hero from "../components/ui/Hero";

export default function Team() {
  return (
    <>
      <Hero
        title="La nostra squadra"
        subtitle="Chi c'è dietro GAIA"
        badge="Contatti"
        accentColor="green"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="team-title" className="mb-12">
          <h1
            id="team-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            Il Team
          </h1>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Il progetto GAIA coinvolge un partenariato interdisciplinare
            composto da aziende e istituzioni accademiche calabresi.
          </p>
        </section>

        <section aria-label="Partner del progetto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <article key={p.name} className={`rounded-lg p-6 ${p.color}`}>
                <h2 className={`text-xl mb-1 ${p.accent}`}>{p.name}</h2>
                <p className="text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary mb-3">
                  {p.role}
                </p>
                <p className="text-lm-text-primary dark:text-dm-text-primary text-sm">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
