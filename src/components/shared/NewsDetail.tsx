import { useParams, Link } from "react-router-dom";
import { news } from "../../data/news";
import Button from "../ui/Button";
import { Calendar } from "lucide-react";

export default function NewsDetail() {
  const { slug } = useParams();

  const articolo = news.find((n) => n.slug === slug);

  if (!articolo) return <p>Articolo non trovato</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        {articolo.titolo}
      </h1>

      <div className="flex items-center gap-1 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
                <Calendar size={16} className="text-lm-yellow font-bold" />
                <time>{articolo.data}</time>
            </div>

      {articolo.immagine && (
        <img
          src={articolo.immagine}
          alt=""
          className="my-6 rounded-lg"
        />
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
        className="my-6 text-lm-text-primary dark:text-dm-text-primary font-semibold"
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
        variant={block.variant || "primary"}
        aria-label={block.label}
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

      {articolo.pdfLinks && (
        <div className="mt-8 flex flex-col gap-2">
          {articolo.pdfLinks.map((pdf, i) => (
            <a key={i} href={pdf.url} target="_blank">
              <Button variant="secondary" color="yellow">
                {pdf.label}
              </Button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}