import { news } from "../data/news";
import NewsCard from "../components/shared/NewsCard";
import Button from "../components/ui/Button";

import Hero from "../components/ui/Hero";
import heroNewsletter from "../assets/img/hero/eventienews_hero.webp";

export default function EventiNews() {
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime(),
  );
  return (
    <>
      <Hero
        badge="GAIA · Giochi Senza Barriere"
        title="Rimani aggiornato su eventi e news"
        subtitle="Scopri la newsletter che racconta il nostro viaggio verso un mondo di gioco più inclusivo"
        image={heroNewsletter}
        accentColor="yellow"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="news-title" className="mb-12">
          <h1
            id="news-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            News e aggiornamenti su GAIA
          </h1>

          <p className="text-lg text-lm-text-secondary dark:text-dm-text-secondary mb-6">
            Scopri eventi e novità attraverso{" "}
            <strong className="text-lm-blue dark:text-dm-blue">
              GAIA – Giochi senza barriere
            </strong>
            , la newsletter del progetto!
          </p>

          <blockquote
            className="
      relative max-w-3xl md:max-w-4xl mb-6 pl-6 border-l-4 
      border-lm-blue dark:border-dm-blue
    "
          >
            <p className="text-lg italic text-lm-text-secondary dark:text-dm-text-secondary">
              Giocare è un diritto universale, un’esperienza spontanea che deve
              essere resa possibile, fruibile e piacevole per ogni bambino.
            </p>
          </blockquote>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-3xl md:max-w-5xl mb-2">
            La condivisione di conoscenze, esperienze ed eventi rappresenta uno
            strumento essenziale per costruire, passo dopo passo, un percorso
            realmente inclusivo.
          </p>
          <div className="mt-6">
            <Button
              as="link"
              to="/contatti"
              color="blue"
              variant="primary"
              aria-label="Contattaci per ricevere aggiornamenti sul progetto GAIA"
            >
              Vuoi iscriverti? Contattaci!
            </Button>
          </div>
        </section>

        <section aria-label="Lista eventi e news">
          <ul className="flex flex-col gap-4" role="list">
            {sortedNews.map((item) => (
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