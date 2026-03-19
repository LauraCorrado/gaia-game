export interface NewsItem {
  id: number;
  titolo: string;
  categoria: "Eventi" | "Newsletter" | "Social";
  data: string;
  immagine?: string;

  excerpt: string;
  contenuto: string[];

  pdfLinks?: {
    label: string;
    url: string;
  }[];

  slug: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    titolo: "Newsletter #1",
    categoria: "Newsletter",
    data: "2026-10-28",
    immagine: "/img/newsletter1.webp",

    slug: "newsletter-1",

    excerpt:
      "Sintesi breve della newsletter per anteprima in lista...",

    contenuto: [
      "Paragrafo 1 della newsletter...",
      "Paragrafo 2 della newsletter...",
      "Paragrafo 3 della newsletter...",
    ],

    pdfLinks: [
      {
        label: "Scarica PDF completo",
        url: "/pdf/newsletter1.pdf",
      },
    ],
  },
];