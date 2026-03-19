import { news } from "../data/news";
import NewsCard from "../components/shared/NewsCard";

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
            Scopri eventi e novità del progetto
          </h1>
          <p className="italic text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            <strong className="text-lm-blue dark:text-dm-blue">GAIA – Giochi senza barriere</strong>. Giocare è un diritto universale, un’esperienza spontanea che deve essere resa possibile, fruibile e piacevole per ogni bambino.
          </p>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            In questo contesto, la condivisione di conoscenze, esperienze ed eventi rappresenta uno strumento essenziale per costruire, passo dopo passo, un percorso realmente inclusivo.
          </p>
           <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            In questa sezione è possibile trovare aggiornamenti sulle attività del progetto, eventi seminariali e newsletter periodiche. Uno spazio pensato per restare informati sui progressi di GAIA, scoprire nuove risorse e approfondire i temi legati ai giochi accessibili e inclusivi per bambini nello spettro autistico.
          </p>
        </section>

        <section aria-label="Lista eventi e news">
          <ul className="flex flex-col gap-4" role="list">
            {news.map((item) => (
              <li key={item.id}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
