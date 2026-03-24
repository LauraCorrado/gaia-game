import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import type { NewsItem } from "../../data/news";
import { Calendar } from "lucide-react";
import { generateSlug } from "../../utils/slug";

export default function NewsCard({ item }: { item: NewsItem }) {
  const categoryStyleMap = {
    Articoli: {
      color: "green",
    },
    Newsletter: {
      color: "yellow",
    },
    Social: {
      color: "pink",
    },
  } as const;

  const style = categoryStyleMap[item.categoria];

  return (
    <article className="relative bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded-xl overflow-hidden mb-5">
      {item.indice && (
        <span
          aria-hidden="true"
          className="
    absolute top-2 right-4
    text-7xl md:text-8xl font-bold
    text-lm-text-primary/5 dark:text-dm-text-primary/5
    pointer-events-none select-none
  "
        >
          {item.indice}
        </span>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        {item.immagine && (
          <div className="md:w-1/3">
            <img
              src={item.immagine}
              alt={item.alt || ""}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-col justify-between p-4 md:w-2/3">
          <div className="flex flex-col gap-2">
            <Badge label={item.categoria} color={style.color} />
            <h2
              className={`
    whitespace-pre-line
    ${style.color === "yellow" ? "text-lm-yellow dark:text-dm-yellow" : ""}
    ${style.color === "green" ? "text-lm-green dark:text-dm-green" : ""}
    ${style.color === "pink" ? "text-lm-pink dark:text-dm-pink" : ""}
  `}
            >
              {item.titolo}
            </h2>
            {item.sottotitolo && (
              <h3 className="text-lg text-lm-text-secondary dark:text-dm-text-secondary">
                {item.sottotitolo}
              </h3>
            )}
            <p className="text-lm-text-secondary dark:text-dm-text-secondary text-sm">
              {item.estratto}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
              <Calendar
                size={16}
                className={`font-bold ${style.color === "yellow" ? "text-lm-yellow dark:text-dm-yellow" : ""}
    ${style.color === "green" ? "text-lm-green dark:text-dm-green" : ""}
    ${style.color === "pink" ? "text-lm-pink dark:text-dm-pink" : ""}`}
              />
              <time>
                {new Date(item.data).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <Link to={`/eventi-news/${generateSlug(item)}` || "#"} aria-label={`Leggi di più su ${item.titolo}`}>
              <Button
                size="sm"
                color="blue"
                variant="secondary"
                aria-label={`Leggi ${item.titolo}`}
              >
                Leggi di più
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
