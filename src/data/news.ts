export interface NewsItem {
  id: number;
  indice: string;
  titolo: string;
  sottotitolo?: string;
  categoria: "Eventi & News" | "Newsletter" | "Social";
  data: string;
  immagine?: string;
  alt?: string;
  estratto: string;
  contenuti: string[];

  pdfLinks?: {
    label: string;
    url: string;
  }[];

  slug: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    indice: "#1",
    titolo: "GAIA – Giochi senza barriere",
    sottotitolo: "Appuntamenti 18, 19 e 20 marzo su autismo e neurodivergenze",
    categoria: "Newsletter",
    data: "16-03-2026",
    immagine: "/img/newsletter1.webp",
    alt: "",

    estratto:
      "Due giornate di approfondimento dedicate alle neurodivergenze e all’autismo presso l’Università della Calabria: 18 marzo – convegno su benessere psicologico e ricerca scientifica; 19–20 marzo – corso su diagnosi, intervento e Early Start Denver Model (ESDM).Un’occasione per aggiornarsi su pratiche cliniche, educative e approcci evidence-based.",

    contenuti: [
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

    slug: "newsletter-1",
  },
];
