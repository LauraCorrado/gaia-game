import locandina_1 from "../assets/img/newsletter/locandina_1.webp";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "link"; text: string; url: string }
  | { type: "plus"; text: string }
  | {
      type: "highlight";
      label: string;
      to?: string;
      url?: string;
      variant?: "primary" | "secondary";
    };
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
  contenuti: ContentBlock[];
  pdfLinks?: {
    label: string;
    url: string;
  }[];

  slug: string;
}

export const news: NewsItem[] = [
    // prima newsletter
  {
    id: 1,
    indice: "#1",
    titolo: "GAIA – Giochi senza barriere",
    sottotitolo: "Appuntamenti 18, 19 e 20 marzo su autismo e neurodivergenze",
    categoria: "Newsletter",
    data: "16-03-2026",
    immagine: locandina_1,
    alt: "Locandine eventi del 18, 19 e 20 marzo su autismo e neurodivergenze",

    estratto:
      "Due giornate di approfondimento dedicate alle neurodivergenze e all’autismo presso l’Università della Calabria: 18 marzo – convegno su benessere psicologico e ricerca scientifica; 19–20 marzo – corso su diagnosi, intervento e Early Start Denver Model (ESDM).Un’occasione per aggiornarsi su pratiche cliniche, educative e approcci evidence-based.",

    contenuti: [
      {
        type: "heading",
        text: "Giocare è un diritto universale, un’esperienza spontanea che deve essere resa possibile, fruibile e piacevole per ogni bambino",
      },
      {
        type: "paragraph",
        text: "Il progetto “GAIA – Giochi accessibili e inclusivi per bambini con autismo” nasce dalla convinzione che il gioco sia un diritto universale e uno strumento fondamentale di relazione, apprendimento ed espressione per tutti i bambini. Promosso da TEA S.r.l. (capofila) insieme a Studio Rubino S.r.l., Ober S.r.l. e all’Università della Calabria, e finanziato dalla Regione Calabria, GAIA si propone di progettare e sviluppare giochi multisensoriali e interattivi pensati per favorire l’inclusione e la partecipazione dei bambini autistici.",
      },
      {
        type: "paragraph",
        text: "Attraverso ricerca, tecnologia e una forte attenzione agli aspetti sociali ed educativi, il progetto mira a creare nuove modalità di gioco condiviso tra bambino e caregiver, trasformando l’esperienza ludica in uno spazio di incontro, scoperta e relazione.",
      },
      {
        type: "paragraph",
        text: "Questa newsletter accompagnerà il percorso di GAIA raccontandone le fasi di sviluppo, le attività di ricerca e i risultati raggiunti. Sarà inviata con cadenza quadrimestrale, per condividere aggiornamenti, approfondimenti e momenti chiave del progetto.",
      },
      {
        type: "paragraph",
        text: "GAIA sostiene i propri partner nelle attività legate alla visione del progetto, promuovendo momenti di formazione, confronto e disseminazione delle migliori pratiche.",
      },
      {
        type: "paragraph",
        text: "IIn questo contesto, siamo felici di segnalarti due appuntamenti di grande rilievo.",
      },
      {
        type: "heading",
        text: "18 MARZO 2026 – NEURODIVERGENZE E BENESSERE PSICOLOGICO",
      },
      {
        type: "paragraph",
        text: "Il 18 marzo 2026, alle ore 14:30, presso l’Aula Caldora dell’Università della Calabria, si terrà il convegno “Neurodivergenze e benessere psicologico: focus su una prospettiva evolutiva e sui trattamenti evidence-based”.",
      },
      {
        type: "link",
        text: "Evento “Neurodivergenze e benessere psicologico” - Iniziativa del DiCES (UNICAL)",
        url: "https://www.unical.it/contents/calendars/view/eventi-unical/4316/",
      },
      {
        type: "link",
        text: "Presentazione “Neurodivergenze e benessere psicologico”",
        url: "https://www.unical.it/innovazione-societa/cultura-e-territorio/public-engagement/unical-pe/pe/event/1029/",
      },
      {
        type: "paragraph",
        text: "L’iniziativa nasce con l’obiettivo di offrire una panoramica aggiornata sulle ricerche scientifiche e sulle pratiche cliniche relative alle neurodivergenze, con particolare attenzione al benessere psicologico.",
      },
      {
        type: "paragraph",
        text: "Dopo i saluti istituzionali dei rappresentanti del Dipartimento Culture, Educazione e Società, l’evento proseguirà con la lectio magistralis del Prof. Giacomo Vivanti del Drexel Autism Institute di Philadelphia, esperto internazionale nel campo dell’autismo e dell’intervento precoce.",
      },
      {
        type: "paragraph",
        text: "La giornata permetterà a professionisti, ricercatori ed educatori di confrontarsi sulle più recenti evidenze scientifiche e sulle applicazioni pratiche per la diagnosi, il trattamento e il supporto educativo.",
      },
      {
        type: "heading",
        text: "19–20 MARZO 2026 – DIAGNOSI E INTERVENTO PER L’AUTISMO NELL’ARCO DI VITA + CORSO INTRODUTTIVO ESDM",
      },
      {
        type: "paragraph",
        text: "Il 19 e 20 marzo 2026, sempre presso l’Aula Caldora, si svolgerà il corso “Diagnosi e intervento per l’autismo nell’arco di vita + Corso introduttivo Early Start Denver Model (ESDM)”.",
      },
      {
        type: "link",
        text: "Evento “Diagnosi e intervento per l’autismo nell’arco di vita e corso introduttivo Early Start Denver Model”",
        url: "https://www.unical.it/contents/calendars/view/eventi-unical/3601/",
      },
      {
        type: "link",
        text: "Presentazione “DIAGNOSI E INTERVENTO PER L’AUTISMO NELL’ARCO DI VITA + CORSO INTRODUTTIVO EARLY START DENVER MODEL”",
        url: "https://www.unical.it/innovazione-societa/cultura-e-territorio/public-engagement/unical-pe/pe/event/508/",
      },
      {
        type: "paragraph",
        text: "Il 19 marzo, dalle 08:30 alle 17:00, la giornata sarà dedicata a interventi su diagnosi, trattamenti clinici ed educativi lungo tutto l’arco di vita, con approfondimenti su differenze di genere, disturbi sensoriali e supporto in età adulta.",
      },
      {
        type: "paragraph",
        text: "Il 20 marzo, dalle 09:00 alle 18:00, si terrà il workshop introduttivo all’Early Start Denver Model (ESDM), un approccio educativo evidence-based rivolto ai bambini con autismo in età prescolare.",
      },
      {
        type: "paragraph",
        text: "Il corso prevede l’analisi dei principi scientifici alla base dell’ESDM, la valutazione attraverso checklist specifiche, la costruzione di piani di intervento personalizzati e la dimostrazione di strategie pratiche in attività di gioco condivise.",
      },
      {
        type: "paragraph",
        text: "Entrambi gli eventi sono progettati per favorire la formazione e il confronto tra professionisti del settore, educatori e caregiver. La partecipazione può avvenire in presenza o in modalità sincrona online, con riconoscimento di crediti ECM.",
      },
      {
        type: "paragraph",
        text: "Si tratta di un’occasione unica per aggiornarsi su evidenze scientifiche, pratiche cliniche e interventi educativi personalizzati per l’autismo.",
      },
      {
        type: "plus",
        text: "Nella ricerca la collaborazione è fondamentale! Se sei interessato a iscriverti alla nostra newsletter o a ricevere aggiornamenti su eventi e corsi, condividere idee e contribuire allo sviluppo del progetto, non esitare a contattarci.",
      },
      {
        type: "highlight",
        label: "Contattaci!",
        to: "/contatti",
        variant: "secondary",
      },
    ],

    pdfLinks: [
      {
        label: "Scarica locandina evento 18 marzo",
        url: "/pdf/18_marzo_locandina.pdf",
      },
      {
        label: "Scarica locandina evento 19-20 marzo",
        url: "/pdf/19-20_marzo_brochure.pdf",
      },
    ],

    slug: "newsletter-1",
  },
];
