const placeholderItems = [
  { id: 1, tipo: "Evento", titolo: "Titolo evento", data: "05-05-1980" },
  { id: 2, tipo: "Newsletter", titolo: "Newsletter #1", data: "15-06-1996" },
  { id: 3, tipo: "Evento", titolo: "Titolo evento", data: "28-10-2026" },
];

import Hero from "../components/ui/Hero";
import heroNewsletter from "../assets/img/hero/eventienews_hero.webp";

export default function EventiNews() {
  return (
    <>
      <Hero
        badge="GAIA · Eventi & Newsletter"
        title="Rimani aggiornato su eventi e news"
        subtitle="Scopri le attività, gli eventi e i risultati del progetto"
        image={heroNewsletter}
        accentColor="yellow"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="news-title" className="mb-12">
          <h1
            id="news-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            Eventi e News
          </h1>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Aggiornamenti sulle attività del progetto, eventi seminariali e
            newsletter periodiche (prodotte da Studio Rubino).
          </p>
        </section>

        <section aria-label="Lista eventi e news">
          <ul className="flex flex-col gap-4" role="list">
            {placeholderItems.map((item) => (
              <li key={item.id}>
                <article className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-lm-blue dark:text-dm-blue">
                      {item.tipo}
                    </span>
                    <h2 className="text-lm-text-primary dark:text-dm-text-primary mt-1">
                      {item.titolo}
                    </h2>
                  </div>
                  <time
                    dateTime={item.data}
                    className="text-sm text-lm-text-secondary dark:text-dm-text-secondary shrink-0"
                  >
                    {new Date(item.data).toLocaleDateString("it-IT", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
