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
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Aggiornamenti su attività, eventi seminariali e
            newsletter periodiche (prodotte da Studio Rubino).
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
