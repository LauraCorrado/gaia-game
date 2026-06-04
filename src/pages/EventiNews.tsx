import { useMemo, useState } from "react";

import { news } from "../data/news";
import NewsCard from "../components/shared/NewsCard";
import Button from "../components/ui/Button";

import Hero from "../components/ui/Hero";
import heroNewsletter from "../assets/img/hero/eventienews_hero.webp";

type NewsCategory = "Tutte" | "Articoli" | "Newsletter" | "Social";

const CATEGORIES: NewsCategory[] = [
  "Tutte",
  "Articoli",
  "Newsletter",
  "Social",
];

const ITEMS_PER_PAGE = 2;

const getCategoryTextClass = (category: NewsCategory) => {
  switch (category) {
    case "Articoli":
      return "text-lm-green dark:text-dm-green";
    case "Newsletter":
      return "text-lm-yellow dark:text-dm-yellow";
    case "Social":
      return "text-lm-pink dark:text-dm-pink";
    default:
      return "text-lm-blue dark:text-dm-blue";
  }
};

export default function EventiNews() {
  const [selectedCategory, setSelectedCategory] =
    useState<NewsCategory>("Tutte");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    return [...news]
      .filter((item) =>
        selectedCategory === "Tutte"
          ? true
          : item.categoria === selectedCategory,
      )
      .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filteredNews.slice(startIndex, endIndex);
  }, [filteredNews, currentPage]);

  const handleCategoryChange = (category: NewsCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const PaginationControls = ({ position }: { position: "top" | "bottom" }) => {
    if (totalPages <= 1) return null;

    return (
      <nav
        className={`
          flex flex-col sm:flex-row items-center justify-between gap-3
          ${position === "top" ? "mb-6" : "mt-8"}
        `}
        aria-label={
          position === "top"
            ? "Paginazione news superiore"
            : "Paginazione news inferiore"
        }
      >
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          aria-label={
            currentPage === 1
              ? "Sei già alla prima pagina delle news"
              : `Vai alla pagina precedente delle news, pagina ${currentPage - 1}`
          }
          className="
    cursor-pointer disabled:cursor-not-allowed
    rounded-full px-3 py-1.5 text-xs font-semibold transition
    bg-lm-bg-secondary text-lm-text-secondary
    dark:bg-dm-bg-secondary dark:text-dm-text-secondary
    disabled:opacity-50
    hover:bg-lm-bg-pink dark:hover:bg-dm-bg-pink
    focus:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue dark:focus-visible:ring-dm-blue
  "
        >
          Prec.
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = currentPage === pageNumber;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setCurrentPage(pageNumber)}
                aria-label={`Vai alla pagina ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
                className={`
                  cursor-pointer
                  h-8 w-8 rounded-full text-xs font-semibold transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue dark:focus-visible:ring-dm-blue
                  ${
                    isActive
                      ? "bg-lm-blue text-white dark:bg-dm-blue dark:text-dm-bg-primary"
                      : "bg-lm-bg-secondary text-lm-text-secondary hover:bg-lm-bg-pink dark:bg-dm-bg-secondary dark:text-dm-text-secondary dark:hover:bg-dm-bg-pink"
                  }
                `}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label={
            currentPage === totalPages
              ? "Sei già all'ultima pagina delle news"
              : `Vai alla pagina successiva delle news, pagina ${currentPage + 1}`
          }
          className="
    cursor-pointer disabled:cursor-not-allowed
    rounded-full px-3 py-1.5 text-xs font-semibold transition
    bg-lm-bg-secondary text-lm-text-secondary
    dark:bg-dm-bg-secondary dark:text-dm-text-secondary
    disabled:opacity-50
    hover:bg-lm-bg-pink dark:hover:bg-dm-bg-pink
    focus:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue dark:focus-visible:ring-dm-blue
  "
        >
          Succ.
        </button>
      </nav>
    );
  };

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

        <section aria-labelledby="news-filter-title" className="mb-8">
          <h2 id="news-filter-title" className="sr-only">
            Filtra le novità per categoria
          </h2>

          <div
            className="flex flex-wrap gap-3"
            role="group"
            aria-label="Filtra le news per categoria"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const categoryTextClass = getCategoryTextClass(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isActive}
                  aria-label={
                    isActive
                      ? `Categoria attiva: ${category}`
                      : `Filtra le news per categoria: ${category}`
                  }
                  className={`
    cursor-pointer
    rounded-full px-4 py-2 text-sm font-semibold transition
    focus:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue dark:focus-visible:ring-dm-blue
    ${
      isActive
        ? "bg-lm-bg-secondary dark:bg-dm-bg-secondary shadow-sm"
        : "bg-transparent hover:bg-lm-bg-secondary dark:hover:bg-dm-bg-secondary"
    }
    ${categoryTextClass}
  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <PaginationControls position="top" />

        <section aria-label="Lista eventi e news">
          {paginatedNews.length > 0 ? (
            <ul className="flex flex-col gap-4" role="list">
              {paginatedNews.map((item) => (
                <li key={item.id}>
                  <NewsCard item={item} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lm-text-secondary dark:text-dm-text-secondary">
              Non sono presenti news per questa categoria.
            </p>
          )}
        </section>

        <PaginationControls position="bottom" />
      </div>
    </>
  );
}
