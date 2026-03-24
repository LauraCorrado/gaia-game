import type { NewsItem } from "../data/news";

export function generateSlug(item: Pick<NewsItem, "categoria" | "data" | "id">) {
  return `${item.categoria.toLowerCase()}-${item.data}-${item.id}`;
}