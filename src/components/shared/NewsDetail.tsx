import { useParams } from "react-router-dom";
import { news } from "../../data/news";
import Button from "../ui/Button";

export default function NewsDetail() {
  const { slug } = useParams();

  const articolo = news.find((n) => n.slug === slug);

  if (!articolo) return <p>Articolo non trovato</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        {articolo.titolo}
      </h1>

      <time className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
        {new Date(articolo.data).toLocaleDateString("it-IT")}
      </time>

      {articolo.immagine && (
        <img
          src={articolo.immagine}
          alt=""
          className="my-6 rounded-lg"
        />
      )}

      <div className="flex flex-col gap-4">
        {articolo.contenuti.map((p, i) => (
          <p key={i} className="text-lm-text-secondary dark:text-dm-text-secondary">
            {p}
          </p>
        ))}
      </div>

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