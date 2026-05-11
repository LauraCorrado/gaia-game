import { useParams, Link } from "react-router-dom";
import { news } from "../../data/news";
import Button from "../ui/Button";
import { Calendar, Paperclip } from "lucide-react";
import { generateSlug } from "../../utils/slug";

export default function NewsDetail() {
  const { slug } = useParams();

  const articolo = news.find((n) => generateSlug(n) === slug);

  if (!articolo) {
    return (
      <section className="max-w-3xl mx-auto p-10 my-16">
        <h1>Articolo non trovato</h1>
        <p>
          Il contenuto richiesto non è disponibile o potrebbe essere stato
          spostato.
        </p>
        <Link to="/eventi-news">Torna a Eventi e News</Link>
      </section>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10 my-16 bg-lm-bg-secondary/40 dark:bg-dm-bg-secondary rounded-xl">
      <div className="mb-6">
        <Button
          as="link"
          to="/eventi-news"
          variant="secondary"
          color="blue"
          aria-label="Torna a Eventi e News"
          className="text-sm"
        >
          ← Torna a Eventi e News
        </Button>
      </div>

      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4 whitespace-pre-line">
        {articolo.titolo}
      </h1>

      <div className="flex items-center gap-1 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
        <Calendar
          aria-hidden="true"
          size={16}
          className="text-lm-blue font-bold"
        />
        <time dateTime={articolo.data}>
          {new Date(articolo.data).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>

      {articolo.pdfLinks && (
        <div className="mt-3 flex flex-col gap-1">
          {articolo.pdfLinks.map((pdf, i) => (
            <a
              key={i}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Scarica ${pdf.label}. Si apre in una nuova scheda`}
              className="
          inline-flex items-center gap-2
          text-sm
          text-lm-blue dark:text-dm-blue
          hover:text-lm-green dark:hover:text-dm-green
          underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm
        "
            >
              <Paperclip aria-hidden="true" size={16} />
              <span className="font-medium">Download</span>
              <span className="opacity-80">– {pdf.label}</span>
            </a>
          ))}
        </div>
      )}

      {articolo.immagine && (
        <figure className="my-8 flex flex-col items-center">
          <img
            src={articolo.immagine}
            alt={articolo.alt || ""}
            className="rounded-lg max-w-full h-auto"
          />

          {articolo.alt && (
            <figcaption className="mt-2 italic text-sm text-center text-lm-text-secondary dark:text-dm-text-secondary">
              {articolo.alt}
            </figcaption>
          )}
        </figure>
      )}

      {articolo.contenuti.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-lm-text-secondary dark:text-dm-text-secondary leading-relaxed"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="my-6 text-lg text-lm-text-primary dark:text-dm-text-primary font-semibold"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "link") {
          return (
            <a
              key={i}
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${block.text}. Si apre in una nuova scheda`}
              className="block my-1 text-lm-blue dark:text-dm-blue hover:text-lm-green hover:dark:text-dm-green underline wrap-break-word"
            >
              {block.text}
            </a>
          );
        }

        if (block.type === "plus") {
          return (
            <p
              key={i}
              className="italic font-bold pt-5 text-lm-text-secondary dark:text-dm-text-secondary"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "highlight") {
          const button = (
            <Button
              color="yellow"
              variant={"primary"}
              aria-label={block.label}
              className="mb-3"
            >
              {block.label}
            </Button>
          );

          if (block.to) {
            return (
              <div key={i} className="mt-6 flex justify-center">
                <Link to={block.to}>{button}</Link>
              </div>
            );
          }

          if (block.url) {
            return (
              <div key={i} className="block mt-6 justify-center">
                <a href={block.url} target="_blank" rel="noopener noreferrer">
                  {button}
                </a>
              </div>
            );
          }
        }

        return null;
      })}

      <div className="mb-6">
        <Button
          as="link"
          to="/eventi-news"
          variant="secondary"
          color="blue"
          aria-label="Torna a Eventi e News"
          className="text-sm"
        >
          ← Torna a Eventi e News
        </Button>
      </div>
    </div>
  );
}
