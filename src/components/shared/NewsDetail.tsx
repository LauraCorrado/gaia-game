import { useParams, Link } from "react-router-dom";
import { news } from "../../data/news";
import Button from "../ui/Button";
import { Calendar, Paperclip } from "lucide-react";

export default function NewsDetail() {
  const { slug } = useParams();

  const articolo = news.find((n) => n.slug === slug);

  if (!articolo) return <p>Articolo non trovato</p>;

  return (
    <div className="max-w-3xl mx-auto p-10 my-16 bg-lm-bg-secondary/40 dark:bg-dm-bg-secondary rounded-xl">
      <div className="mb-6">
        <Link to="/eventi-news">
          <Button
            variant="secondary"
            color="blue"
            aria-label="Torna a Eventi e News"
            className="text-sm"
          >
            ← Torna a Eventi e News
          </Button>
        </Link>
      </div>

      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4 whitespace-pre-line">
        {articolo.titolo}
      </h1>

      <div className="flex items-center gap-1 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
        <Calendar size={16} className="text-lm-blue font-bold" />
        <time>
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
              className="
          inline-flex items-center gap-2
          text-sm
          text-lm-blue dark:text-dm-blue
          hover:text-lm-green dark:hover:text-dm-green
          underline
        "
            >
              <Paperclip size={16} />
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

          <figcaption className="mt-2 italic text-sm text-center text-lm-text-secondary dark:text-dm-text-secondary">
            {articolo.alt}
          </figcaption>
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
        <Link to="/eventi-news">
          <Button
            variant="secondary"
            color="blue"
            aria-label="Torna a Eventi e News"
            className="text-sm"
          >
            ← Torna a Eventi e News
          </Button>
        </Link>
      </div>
    </div>
  );
}
