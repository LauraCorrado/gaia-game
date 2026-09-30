import newsletter_1 from "../assets/img/newsletter/newsletter_1.webp";
import newsletter_2 from "../assets/img/newsletter/newsletter_2.webp";
import articolo_1 from "../assets/img/newsletter/gaia_articolo_1.webp";
import articolo_2 from "../assets/img/newsletter/gaia_articolo_2.webp";
import articolo_3 from "../assets/img/newsletter/gaia_articolo_3.webp";
import articolo_4 from "../assets/img/newsletter/gaia_articolo_4.webp";
import articolo_5 from "../assets/img/newsletter/gaia_articolo_5.webp";
import articolo_6 from "../assets/img/newsletter/gaia_articolo_6.webp";
import articolo_7 from "../assets/img/newsletter/gaia_articolo_7.webp";
import articolo_8 from "../assets/img/newsletter/gaia_articolo_8.webp";
import articolo_9 from "../assets/img/newsletter/gaia_articolo_9.webp";
import articolo_10 from "../assets/img/newsletter/gaia_articolo_10.webp";
import articolo_11 from "../assets/img/newsletter/gaia_articolo_11.webp";
import articolo_12 from "../assets/img/newsletter/gaia_articolo_12.webp";
import articolo_13 from "../assets/img/newsletter/gaia_articolo_13.webp";
import social_1 from "../assets/img/newsletter/gaia_social_1.webp";

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
  indice?: string;
  titolo: string;
  sottotitolo?: string;
  categoria: "Articoli" | "Newsletter" | "Social";
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
  //articolo1
  {
    id: 1,
    titolo:
      "Nasce GAIA - Giochi Inclusivi e Accessibili per bambini con Autismo",
    sottotitolo:
      "TEA srl annuncia l’avvio ufficiale del progetto GAIA, in collaborazione con partner di altissimo valore e finanziato dalla Regione Calabria",
    categoria: "Articoli",
    data: "2025-11-13",
    immagine: articolo_1,
    alt: "Articoli di Calabria 7 e La Gazzetta del Sud sull'avvio del progetto GAIA",

    estratto:
      "Nasce GAIA – Giochi Accessibili e Inclusivi per Bambini con Autismo, un’iniziativa di ricerca e sviluppo che si propone di progettare e sviluppare giochi multisensoriali e interattivi che trasformino l’esperienza ludica in uno spazio di incontro, scoperta e relazione tra bambino e caregiver.",

    contenuti: [
      {
        type: "heading",
        text: "GAIA – Quando il gioco diventa occasione di inclusione",
      },
      {
        type: "paragraph",
        text: "Giocare è un diritto universale, un linguaggio che appartiene a ogni bambino, anche a quelli che incontrano più difficoltà nel comunicare, nel comprendere le emozioni degli altri o nell’instaurare relazioni spontanee.",
      },
      {
        type: "paragraph",
        text: "Da questa ferrea convinzione nasce GAIA – Giochi accessibili e inclusivi per bambini con autismo, un progetto di ricerca finanziato dalla Regione Calabria e realizzato da TEA S.r.l. (capofila), Studio Rubino S.r.l., Ober S.r.l. e l’Università della Calabria.",
      },
      {
        type: "paragraph",
        text: "Il kick-off meeting si terrà venerdì 14 novembre 2025 alle ore 10.30, presso la sede operativa di TEA, a Catanzaro, e segnerà l’avvio di un percorso che unisce ricerca, tecnologia e sensibilità sociale.",
      },
      {
        type: "paragraph",
        text: "GAIA sostiene i propri partner nelle attività legate alla visione del progetto, promuovendo momenti di formazione, confronto e disseminazione delle migliori pratiche.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo di GAIA è progettare e realizzare giochi multisensoriali e interattivi capaci di stimolare curiosità e creatività, offrendo ai bambini autistici nuove modalità per conoscere il mondo, esprimere le proprie emozioni e condividere le proprie esperienze.",
      },
      {
        type: "heading",
        text: "Un'evoluzione di AIVES®",
      },
      {
        type: "paragraph",
        text: "GAIA nasce come evoluzione naturale di AIVES®, un precedente progetto di TEA srl, in cui la tecnologia è stata messa al servizio dell’arte, attraverso riproduzioni tattili e sensoristica avanzata per la fruizione universale di opere d’arte.",
      },
      {
        type: "paragraph",
        text: "Oggi, quell’esperienza prende una forma nuova, rivolgendosi a un pubblico più particolare: bambini autistici in età scolare. GAIA intende rendere il gioco tangibile e multimaterico, realizzando un nuovo terreno d’incontro comunicativo tra due giocatori – bambino e caregiver – dove la collaborazione e la socialità diventano il cuore pulsate dell’intera esperienza.",
      },
      {
        type: "heading",
        text: "Un percorso di inclusione e innovazione tecnologica",
      },
      {
        type: "paragraph",
        text: "GAIA vuole dimostrare che l’innovazione tecnologica può condurre verso progetti che sensibilizzano la questione dell’accessibilità e che l’inclusione può nascere dal gesto genuino e tutto umano del giocare. Anzi: del giocare insieme.",
      },
      {
        type: "paragraph",
        text: "Per tale ragione, la ricerca esplorerà anche il potenziale dell’intelligenza artificiale, come strumento per rendere il gioco più adattivo, coinvolgente e inclusivo, capace di rispondere a diversi livelli di attenzione, motilità e partecipazione di ogni bambino.",
      },
      {
        type: "paragraph",
        text: "“L’obiettivo non è solo insegnare o riabilitare, ma far divertire e creare legami”, sottolineano i ricercatori. “Perché il gioco è, e deve restare, un terreno comune per tutti i bambini”.",
      },
      {
        type: "paragraph",
        text: "Un ringraziamento speciale alle testate giornalistiche che stanno raccontando la nostra storia:",
      },
      {
        type: "link",
        text: "La Gazzetta del Sud",
        url: "https://catanzaro.gazzettadelsud.it/articoli/societa/2025/11/10/a-catanzaro-nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo-215cdeaa-8f92-40b6-869e-f731b3960eb2/",
      },
      {
        type: "link",
        text: "Calabria 7",
        url: "https://calabria7.news/attualita/dal-tatto-alla-tecnologia-il-gioco-diventa-inclusivo-per-i-bambini-con-autismo-in-calabria/",
      },
      {
        type: "link",
        text: "CDN (Calabria Diretta News)",
        url: "https://www.calabriadirettanews.com/2025/11/09/inclusione-in-calabria-nasce-gaia-giochi-accessibili-per-bambini-con-autismo/",
      },
      {
        type: "link",
        text: "Reggio TV",
        url: "https://www.reggiotv.it/notizie/attualita/118700/nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo",
      },
      {
        type: "link",
        text: "Qui Cosenza",
        url: "https://www.quicosenza.it/news/per-i-bambini-con-autismo-nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo/?amp=1",
      },
      {
        type: "link",
        text: "LameziaTerme.it",
        url: "https://www.lameziaterme.it/nasce-gaia-progetto-calabrese-che-rende-gioco-accessibile-inclusivo-bambini-autismo/",
      },
      {
        type: "link",
        text: "Catanzaro City Magazine",
        url: "https://catanzarocitymagazine.it/blog-detail/post/579888/nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo?fbclid=IwY2xjawOCxANleHRuA2FlbQIxMABicmlkETFaYzhJVWRVWTMwbmV4SDdCc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsuyrQME8bn1AI3sjoJdIVzYWMMBrDzl783MdES3bBsnQ7oFf77aMOzMMo-u_aem_Cp6a3dZMy9FUM5Wq_lLdkQ",
      },
      {
        type: "link",
        text: "Telemia",
        url: "https://www.telemia.it/a-catanzaro-nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo/",
      },
      {
        type: "link",
        text: "La Novità Online",
        url: "https://lanovitaonline.it/nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo-2/?fbclid=IwY2xjawOCwndleHRuA2FlbQIxMQBicmlkETFaYzhJVWRVWTMwbmV4SDdCc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgRuG7fhRiNOc6cV4i4U_oU3MMdcnX1YWlTFz0tZAET2YJHFzrwlQXUvZeOD_aem_G8wUOWa1Dm55bJH0SmmvgQ",
      },
      {
        type: "link",
        text: "Il Dispaccio",
        url: "https://ildispaccio.it/calabria/catanzaro/2025/11/09/nasce-gaia-il-progetto-calabrese-che-rende-il-gioco-accessibile-e-inclusivo-per-i-bambini-con-autismo/",
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

    slug: "articolo-1",
  },
  //newsletter_1
  {
    id: 2,
    indice: "#1",
    titolo: "GAIA\nGiochi senza barriere",
    sottotitolo:
      "Giocare è un diritto universale, un’esperienza spontanea che deve essere resa possibile, fruibile e piacevole per ogni bambino",
    categoria: "Newsletter",
    data: "2026-03-16",
    immagine: newsletter_1,
    alt: "Locandine eventi del 18, 19 e 20 marzo su autismo e neurodivergenze",

    estratto:
      "Appuntamenti 18, 19 e 20 marzo presso Aula Caldora - Università della Calabria. Due giornate di approfondimento dedicate alle neurodivergenze e all’autismo presso l’Università della Calabria: 18 marzo – convegno su benessere psicologico e ricerca scientifica; 19–20 marzo – corso su diagnosi, intervento e Early Start Denver Model (ESDM).Un’occasione per aggiornarsi su pratiche cliniche, educative e approcci evidence-based.",

    contenuti: [
      {
        type: "heading",
        text: "GAIA – Giochi senza barriere. Giocare è un diritto universale, un’esperienza spontanea che deve essere resa possibile, fruibile e piacevole per ogni bambino",
      },
      {
        type: "paragraph",
        text: "Il progetto “GAIA – Giochi Accessibili e Inclusivi per bambini con Autismo” nasce dalla convinzione che il gioco sia un diritto universale e uno strumento fondamentale di relazione, apprendimento ed espressione per tutti i bambini. Promosso da TEA S.r.l. (capofila) insieme a Studio Rubino S.r.l., Ober S.r.l. e all’Università della Calabria, e finanziato dalla Regione Calabria, GAIA si propone di progettare e sviluppare giochi multisensoriali e interattivi pensati per favorire l’inclusione e la partecipazione dei bambini autistici.",
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
        text: "In questo contesto, siamo felici di segnalarti due appuntamenti di grande rilievo.",
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
  //social_1
  {
    id: 3,
    titolo: "Apertura della pagina Instagram di GAIA",
    sottotitolo:
      "Un nuovo spazio per condividere storie, idee e aggiornamenti sul progetto!",
    categoria: "Social",
    data: "2026-04-07",
    immagine: social_1,
    alt: "Primo post Instagram di GAIA",

    estratto:
      "GAIA ha ora il suo spazio nei social! Seguiteci su Instagram per scoprire storie, aggiornamenti e dietro le quinte del nostro progetto dedicato a giochi accessibili e inclusivi per bambini autistici. Unisciti a noi in questo viaggio verso un mondo di gioco senza barriere!",

    contenuti: [
      {
        type: "heading",
        text: "GAIA – Un nuovo spazio nei social per condividere storie, idee e aggiornamenti sul progetto!",
      },
      {
        type: "paragraph",
        text: "Siamo entusiasti di annunciare l’apertura della pagina Instagram di GAIA! Questo nuovo spazio sarà dedicato a condividere storie, idee, aggiornamenti e momenti speciali legati al nostro progetto di giochi accessibili e inclusivi per bambini autistici.",
      },
      {
        type: "paragraph",
        text: "Visita il profilo Instagram di GAIA per scoprire i nostri post e non dimenticare di seguirci per rimanere aggiornato sulle ultime novità!",
      },
      {
        type: "link",
        text: "Pagina Instagram di GAIA",
        url: "https://www.instagram.com/progettogaia2025/",
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

    slug: "social-1",
  },
  //articolo2
  {
    id: 4,
    titolo: "Autismo: il cervello non comunica sempre allo stesso modo",
    sottotitolo: "Nuove scoperte aprono la strada a terapie più personalizzate",
    categoria: "Articoli",
    data: "2026-06-03",
    immagine: articolo_2,
    alt: "Immagine ad acquarello di un cervello umano con connessioni neurali evidenziate",

    estratto:
      "La ricerca mostra che dietro determinati comportamenti possono esistere profili biologici molto diversi, legati al modo in cui le aree del cervello comunicano tra loro. Comprendere queste differenze potrebbe rendere gli interventi più mirati, efficaci e vicini alle esigenze individuali.",

    contenuti: [
      {
        type: "heading",
        text: "Autismo: nuove scoperte sulla connessione cerebrale aprono la strada a terapie più personalizzate",
      },
      {
        type: "paragraph",
        text: "Per anni si è parlato di autismo come di una condizione unica, caratterizzata da difficoltà nella comunicazione, nell’interazione sociale e nella gestione degli stimoli. Oggi, però, la ricerca scientifica sta mostrando un quadro molto più complesso: dietro comportamenti simili potrebbero nascondersi meccanismi cerebrali profondamente diversi tra loro.",
      },
      {
        type: "paragraph",
        text: "Uno studio coordinato da Alessandro Gozzi presso il centro di Neuroscienze dell’Istituto Italiano di Tecnologia ha individuato almeno due differenti profili biologici nello spettro autistico, legati al modo in cui le varie aree del cervello comunicano tra loro.",
      },
      {
        type: "heading",
        text: "Due modalità opposte di funzionamento cerebrale",
      },
      {
        type: "paragraph",
        text: "Secondo i ricercatori, alcune persone autistiche presentano una condizione di “ipoconnessione”: le aree cerebrali comunicano in modo debole e poco sincronizzato, come un’orchestra in cui i musicisti non riescono a mantenere il ritmo.",
      },
      {
        type: "paragraph",
        text: "In altri casi avviene invece il contrario. Si parla di “iperconnessione”, una situazione in cui le connessioni tra le aree del cervello risultano eccessive. In questo caso il cervello tende a elaborare le informazioni in modo troppo uniforme, con una riduzione della flessibilità necessaria per integrare correttamente gli stimoli.",
      },
      {
        type: "paragraph",
        text: "La scoperta è importante perché dimostra che persone con comportamenti simili possono avere basi biologiche molto differenti.",
      },
      {
        type: "heading",
        text: "La genetica non basta a spiegare lo spettro autistico",
      },
      {
        type: "paragraph",
        text: "L’autismo presenta una forte componente ereditaria, ma la genetica da sola non riesce ancora a spiegare tutta la variabilità dello spettro. Negli anni sono stati identificati numerosi geni coinvolti nello sviluppo della condizione, ma nessuno di essi è sufficiente, da solo, a definire un preciso “tipo” di autismo.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo gli studiosi stanno concentrando l’attenzione sulla connettività cerebrale, cioè sul modo in cui le diverse regioni del cervello collaborano e si sincronizzano.",
      },
      {
        type: "heading",
        text: "Perché questa scoperta potrebbe cambiare le terapie",
      },
      {
        type: "paragraph",
        text: "Uno degli aspetti più interessanti dello studio riguarda le possibili implicazioni terapeutiche.",
      },
      {
        type: "paragraph",
        text: "Se esistono forme biologicamente diverse di autismo, allora anche i trattamenti potrebbero dover essere personalizzati. Una terapia utile per un cervello ipoconnesso potrebbe infatti risultare inefficace o addirittura controproducente per chi presenta iperconnessione.",
      },
      {
        type: "paragraph",
        text: "Secondo i ricercatori, questa potrebbe essere una delle ragioni per cui molti trial clinici condotti negli ultimi anni hanno prodotto risultati poco chiari o contraddittori: pazienti con caratteristiche biologiche opposte venivano spesso inclusi nello stesso gruppo di studio.",
      },
      {
        type: "heading",
        text: "Verso una medicina di precisione",
      },
      {
        type: "paragraph",
        text: "L’obiettivo futuro è arrivare a una classificazione più precisa dello spettro autistico, basata non solo sui comportamenti osservabili ma anche sulle caratteristiche biologiche e neurologiche individuali.",
      },
      {
        type: "paragraph",
        text: "Un approccio simile permetterebbe di sviluppare percorsi terapeutici più mirati, migliorando la qualità degli interventi e offrendo un supporto sempre più personalizzato alle persone autistiche e alle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "La ricerca sull’autismo continua quindi a evolversi, mostrando quanto sia importante superare l’idea di uno spettro uniforme per comprendere davvero la complessità del funzionamento del cervello umano.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "Repubblica - 02/04/2026",
        url: "https://www.repubblica.it/salute/2026/04/02/news/autismo_genetica_terapie-425257254/",
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
    slug: "articolo-2",
  },
  //articolo3
  {
    id: 5,
    titolo: "Robot sociali e autismo: nuove strade per comunicare",
    sottotitolo:
      "Uno studio osserva il ruolo dei robot sociali nel favorire attenzione e interazione nei bambini autistici",
    categoria: "Articoli",
    data: "2026-06-16",
    immagine: articolo_3,
    alt: "Illustrazione ad acquerello di un bambino seduto di fronte a un piccolo robot sociale",

    estratto:
      "I robot sociali possono offrire interazioni più semplici, strutturate e prevedibili rispetto alla comunicazione umana quotidiana. Per alcuni bambini autistici, questo può facilitare l’attenzione, il coinvolgimento e la costruzione di un primo aggancio relazionale nei percorsi terapeutici.",

    contenuti: [
      {
        type: "heading",
        text: "Quando i robot sociali aiutano i bambini autistici a comunicare",
      },
      {
        type: "paragraph",
        text: "Per molti bambini con ASD, interagire con le persone può essere complesso: gli stimoli sociali sono numerosi, imprevedibili e a volte difficili da interpretare. Proprio per questo, strumenti tecnologici progettati in modo mirato potrebbero diventare un valido supporto nei percorsi terapeutici e riabilitativi.",
      },
      {
        type: "paragraph",
        text: "Una recente ricerca coordinata dalla Fondazione Don Gnocchi in collaborazione con il Politecnico di Milano ha osservato come alcuni bambini con autismo mostrino una maggiore attenzione nei confronti di un robot sociale rispetto a un interlocutore umano durante specifiche attività comunicative.",
      },
      {
        type: "heading",
        text: "Lo studio: attenzione condivisa e interazione sociale",
      },
      {
        type: "paragraph",
        text: "L’indagine ha coinvolto bambini in età prescolare, sia con diagnosi di disturbo dello spettro autistico (ASD) sia a sviluppo tipico. L’obiettivo era analizzare l’attenzione condivisa, cioè quella capacità che permette di orientarsi insieme a un’altra persona verso un oggetto, un gesto o un evento.",
      },
      {
        type: "paragraph",
        text: "Questa abilità rappresenta uno degli aspetti fondamentali dello sviluppo relazionale e della comunicazione nei primi anni di vita.",
      },
      {
        type: "paragraph",
        text: "Durante l’esperimento, i bambini hanno svolto alcune attività sia con un terapista sia con un robot sociale programmato per utilizzare segnali semplici e prevedibili, come movimenti della testa, gesti e direzione dello sguardo.",
      },
      {
        type: "paragraph",
        text: "I ricercatori hanno poi osservato le reazioni dei partecipanti, registrando il tempo di attenzione, la rapidità delle risposte e la capacità di seguire gli stimoli proposti.",
      },

      {
        type: "heading",
        text: "Perché il robot cattura maggiormente l’attenzione",
      },
      {
        type: "paragraph",
        text: "Dai risultati è emerso che i bambini con ASD tendevano a seguire meno i segnali comunicativi dell’adulto, mentre mostravano una partecipazione visiva più alta durante l’interazione con il robot.",
      },
      {
        type: "paragraph",
        text: "Secondo gli esperti, questo non significa che i bambini “preferiscano” le macchine alle persone. Il punto centrale è che i robot sociali offrono interazioni più strutturate e prevedibili, riducendo la complessità tipica della comunicazione umana.",
      },
      {
        type: "paragraph",
        text: "Per molti bambini con diagnosi di autismo, un ambiente meno caotico e più lineare può facilitare l’attenzione e il coinvolgimento.",
      },
      {
        type: "heading",
        text: "Un supporto alla terapia, non un sostituto",
      },
      {
        type: "paragraph",
        text: "Gli studiosi sottolineano che il ruolo dei robot sociali non è sostituire terapisti, educatori o genitori. Al contrario, questi strumenti potrebbero diventare un supporto utile per creare un primo aggancio relazionale e favorire lo sviluppo delle competenze sociali e comunicative.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo finale resta sempre quello di trasferire quanto appreso nella vita quotidiana: a scuola, in famiglia e nelle relazioni con gli altri.",
      },
      {
        type: "heading",
        text: "Nuove prospettive per interventi più precoci",
      },
      {
        type: "paragraph",
        text: "Le tecnologie robotiche applicate alla neuropsichiatria infantile stanno aprendo scenari interessanti anche sul fronte della valutazione precoce e della personalizzazione dei percorsi terapeutici.",
      },
      {
        type: "paragraph",
        text: "Comprendere meglio come i bambini autistici reagiscono agli stimoli sociali potrebbe infatti aiutare specialisti e famiglie a costruire interventi sempre più efficaci, accessibili e calibrati sui bisogni individuali.",
      },
      {
        type: "paragraph",
        text: "In questo contesto, i robot sociali non rappresentano il futuro delle relazioni umane, ma uno strumento in più per facilitare la comunicazione e sostenere lo sviluppo dei bambini con ASD.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "Quotidiano Nazionale - 11/04/2026",
        url: "https://www.quotidiano.net/luce/attualita/robot-autismo-bambini-b82a92ba",
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
    slug: "articolo-3",
  },
  //articolo4
  {
    id: 6,
    titolo:
      "Autismo in Italia: diagnosi in aumento e nuove sfide per i servizi",
    sottotitolo:
      "Crescono le diagnosi e l'attenzione verso l'autismo: ricerca, servizi e inclusione al centro del cambiamento",
    categoria: "Articoli",
    data: "2026-07-09",
    immagine: articolo_4,
    alt: "Illustrazione ad acquarello dedicata all'inclusione e al supporto delle persone autistiche",

    estratto:
      "In Italia aumentano le diagnosi di autismo e si rafforzano gli investimenti nella diagnosi precoce e nei servizi territoriali. Restano però importanti differenze regionali e nuove sfide per garantire percorsi di cura e inclusione lungo tutto l'arco della vita.",

    contenuti: [
      {
        type: "paragraph",
        text: "Negli ultimi anni il disturbo dello spettro autistico è diventato sempre più centrale nel dibattito sanitario e sociale. In Italia si stima che riguardi circa 1 bambino ogni 77, per un totale complessivo di circa 500.000 persone. Un dato in crescita che riflette anche un miglioramento delle capacità di individuazione precoce e una maggiore attenzione da parte dei servizi sanitari.",
      },
      {
        type: "paragraph",
        text: "Secondo le principali società scientifiche italiane e i dati dell’Istituto Superiore di Sanità, l’età media della diagnosi si è progressivamente abbassata fino a circa 3 anni, un elemento fondamentale per poter avviare interventi tempestivi e più efficaci.",
      },
      {
        type: "heading",
        text: "Investimenti e potenziamento dei servizi",
      },
      {
        type: "paragraph",
        text: "Per rafforzare la rete di assistenza è stato annunciato un investimento di circa 10 milioni di euro, destinato a migliorare i percorsi di diagnosi precoce e a potenziare i servizi territoriali dedicati all’autismo. L’obiettivo è quello di sviluppare un modello di intervento più integrato, capace di mettere in relazione ambito sanitario, sociale ed educativo.",
      },
      {
        type: "paragraph",
        text: "L’intento è anche quello di garantire una maggiore continuità assistenziale lungo tutto l’arco della vita della persona, superando la frammentazione dei servizi attualmente presente in alcune aree del Paese.",
      },
      {
        type: "heading",
        text: "Disuguaglianze territoriali ancora presenti",
      },
      {
        type: "paragraph",
        text: "Nonostante i progressi, permangono ancora differenze significative tra le diverse regioni italiane. Le famiglie, in alcune zone, possono incontrare difficoltà nell’accesso a valutazioni tempestive, nella presa in carico multidisciplinare e nella continuità dei percorsi terapeutici.",
      },
      {
        type: "paragraph",
        text: "Le associazioni del settore sottolineano inoltre la necessità di rafforzare i servizi dedicati all’età adulta, spesso meno strutturati rispetto a quelli dell’infanzia.",
      },
      {
        type: "heading",
        text: "Ricerca e nuove prospettive terapeutiche",
      },
      {
        type: "paragraph",
        text: "La ricerca scientifica sta esplorando nuove strade per migliorare il supporto alle persone con disturbo dello spettro autistico. Tra queste, uno studio italiano ha evidenziato come alcuni bambini possano mostrare maggiore attenzione verso i robot sociali rispetto agli esseri umani in specifiche attività strutturate.",
      },
      {
        type: "paragraph",
        text: "Questi risultati potrebbero aprire la strada a nuovi strumenti di supporto terapeutico, pensati per favorire l’attenzione, la comunicazione e le competenze sociali in contesti controllati.",
      },
      {
        type: "heading",
        text: "Un tema sempre più centrale",
      },
      {
        type: "paragraph",
        text: "L’aumento delle diagnosi non deve essere interpretato solo come una crescita del fenomeno, ma anche come il risultato di una maggiore capacità di riconoscimento e di una sensibilità crescente verso il tema.",
      },
      {
        type: "paragraph",
        text: "L’autismo resta una condizione complessa che richiede interventi personalizzati, continuità assistenziale e un forte investimento in inclusione sociale.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "Rai News - 02/04/2026",
        url: "https://www.rainews.it/articoli/2026/04/autismo-in-italia-colpito-un-bambino-su-77-diagnosi-in-crescita-d3f86d1d-6125-46e5-ab3d-61ddd0a1c8de.html",
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
    slug: "articolo-4",
  },
  //articolo5
  {
    id: 7,
    titolo:
      "ADHD e autismo",
    sottotitolo:
      "Differenze e somiglianze tra due condizioni neuroevolutive",
    categoria: "Articoli",
    data: "2026-07-22",
    immagine: articolo_5,
    alt: "Due bambini di spalle illustrati ad acquarello",

    estratto:
      "Sebbene possano essere talvolta confuse, ADHD e autismo si manifestano con caratteristiche e bisogni differenti e, in alcuni casi, possono anche coesistere nella stessa persona. Conoscere le loro peculiarità è il primo passo per favorire inclusione, consapevolezza e supporto personalizzato.",

    contenuti: [
      {
        type: "heading",
        text: "ADHD e autismo: differenze e somiglianze",
      },
      {
        type: "paragraph",
        text: "ADHD e disturbo dello spettro autistico sono due condizioni del neurosviluppo che possono presentare alcune somiglianze, motivo per cui vengono talvolta confuse. Tuttavia, si tratta di disturbi distinti, con caratteristiche specifiche e modalità diverse di manifestarsi. In alcuni casi, possono anche coesistere nella stessa persona.",
      },
      {
        type: "heading",
        text: "Cos'è l'ADHD?",
      },
      {
        type: "paragraph",
        text: "L’ADHD (Attention Deficit Hyperactivity Disorder) è una condizione che influisce principalmente su attenzione, controllo degli impulsi e livello di attività.",
      },
      {
        type: "paragraph",
        text: "Le persone con ADHD possono avere difficoltà a mantenere la concentrazione su compiti prolungati, tendere a distrarsi facilmente e agire in modo impulsivo. In alcuni casi è presente anche iperattività o irrequietezza, che rende difficile restare fermi o seguire lunghe attività senza variazioni.",
      },
      {
        type: "paragraph",
        text: "L’ADHD può presentarsi in forme diverse, con sintomi più legati alla disattenzione, all’iperattività-impulsività oppure a una combinazione di entrambe.",
      },
      {
        type: "heading",
        text: "Cos’è l’autismo?",
      },
      {
        type: "paragraph",
        text: "Il disturbo dello spettro autistico riguarda soprattutto la comunicazione sociale, l’interazione con gli altri e alcuni comportamenti ripetitivi o interessi ristretti.",
      },
      {
        type: "paragraph",
        text: "Le persone autistiche possono avere modalità diverse di comunicare ed esprimere emozioni, oltre a difficoltà nel comprendere alcune dinamiche sociali. Spesso mostrano interessi molto intensi e specifici e possono preferire routine stabili e prevedibili, mentre i cambiamenti improvvisi possono risultare faticosi.",
      },
      {
        type: "paragraph",
        text: "L’autismo è uno spettro molto ampio: ogni persona può presentare caratteristiche molto diverse.",
      },
      {
        type: "heading",
        text: "ADHD e autismo: le principali differenze",
      },
      {
        type: "paragraph",
        text: "Anche se alcune caratteristiche possono sembrare simili, ci sono differenze importanti.",
      },
      {
        type: "plus",
        text: "Attenzione",
      },
      {
        type: "paragraph",
        text: "Nell'ADHD, la difficoltà principale riguarda il mantenimento dell'attenzione: è frequente distrarsi facilmente e passare rapidamente da uno stimolo all'altro.",
      },
      {
        type: "paragraph",
        text: "Nell'autismo, invece, può emergere una capacità di concentrazione molto intensa su interessi specifici, mantenuta anche per lunghi periodi.",
      },
      {
        type: "plus",
        text: "Comunicazione",
      },
      {
        type: "paragraph",
        text: "Le persone con ADHD possono tendere a parlare impulsivamente, interrompere gli altri o intervenire senza riflettere.",
      },
      {
        type: "paragraph",
        text: "Nelle persone autistiche, invece, le difficoltà riguardano più spesso la comprensione delle dinamiche sociali e della comunicazione non verbale, come gesti, espressioni del viso e tono della voce.",
      },
      {
        type: "plus",
        text: "Routine e cambiamento",
      },
      {
        type: "paragraph",
        text: "Chi ha l'ADHD ricerca spesso nuovi stimoli e può annoiarsi facilmente in contesti ripetitivi.",
      },
      {
        type: "paragraph",
        text: "Le persone autistiche, al contrario, trovano generalmente sicurezza nella prevedibilità e nelle routine, mentre i cambiamenti improvvisi possono risultare fonte di disagio.",
      },
      {
        type: "heading",
        text: "Possono coesistere?",
      },
      {
        type: "paragraph",
        text: "Sì, ADHD e autismo possono presentarsi insieme nella stessa persona. In questi casi, alcune caratteristiche possono sovrapporsi o influenzarsi tra loro, rendendo il quadro più complesso.",
      },
      {
        type: "heading",
        text: "Conclusione",
      },
      {
        type: "paragraph",
        text: "Comprendere le differenze tra ADHD e autismo è importante per evitare semplificazioni eccessive e per favorire una maggiore consapevolezza. Ogni persona è unica e può esprimere queste condizioni in modo diverso.",
      },
      {
        type: "paragraph",
        text: "Una valutazione professionale è fondamentale per una corretta diagnosi e per costruire percorsi di supporto adeguati ai bisogni individuali.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "Portale autismo - 18/06/2020",
        url: "https://www.portale-autismo.it/differenze-tra-autismo-e-adhd/",
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
    slug: "articolo-5",
  },
  //articolo6
  {
    id: 8,
    titolo:
      "La ricerca europea sta trasformando la cura dei disturbi del neurosviluppo",
    sottotitolo:
      "Nuovi studi, tecnologie e approcci personalizzati per comprendere meglio l’autismo e migliorare il supporto alle persone e alle famiglie",
    categoria: "Articoli",
    data: "2026-07-28",
    immagine: articolo_6,
    alt: "Illustrazione ad acquarello di ricercatori in laboratorio",

    estratto:
      "La ricerca europea sull’autismo apre nuove prospettive per diagnosi precoci, interventi personalizzati e un supporto più efficace alle persone autistiche e alle loro famiglie. In occasione della Giornata Mondiale della Consapevolezza sull’Autismo 2026, HaDEA presenta alcuni dei principali progetti finanziati dall’Unione Europea.",

    contenuti: [
      {
        type: "paragraph",
        text: "Negli ultimi anni la ricerca scientifica ha compiuto importanti progressi nella comprensione dei disturbi del neurosviluppo, aprendo nuove prospettive per una diagnosi sempre più precoce, interventi personalizzati e un migliore supporto alle persone autistiche e alle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "In occasione della Giornata Mondiale della Consapevolezza sull'Autismo 2026, la European Health and Digital Executive Agency (HaDEA) della Commissione Europea ha presentato alcuni dei principali progetti di ricerca finanziati dall'Unione Europea, evidenziando come l'innovazione scientifica stia contribuendo a cambiare concretamente il modo in cui vengono studiati e affrontati i disturbi del neurosviluppo.",
      },
      {
        type: "heading",
        text: "Comprendere la complessità dell'autismo",
      },
      {
        type: "paragraph",
        text: "Oggi è sempre più chiaro che l'autismo non può essere spiegato da un'unica causa. La ricerca scientifica mostra come fattori genetici, biologici, ambientali e dello sviluppo interagiscano tra loro, contribuendo alla grande variabilità con cui questa condizione si manifesta nelle diverse persone.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo i ricercatori stanno adottando un approccio multidisciplinare, che considera l'individuo nella sua globalità e non si limita all'osservazione dei soli comportamenti clinici. Comprendere questa complessità rappresenta il primo passo per sviluppare strumenti diagnostici più accurati e percorsi terapeutici realmente personalizzati.",
      },
      {
        type: "heading",
        text: "R2D2-MH: il più grande database europeo sullo sviluppo cerebrale precoce",
      },
      {
        type: "paragraph",
        text: "Tra i progetti sostenuti dall'Unione Europea figura R2D2-MH, un'iniziativa che ha l'obiettivo di raccogliere e integrare una quantità senza precedenti di dati sullo sviluppo cerebrale nelle prime fasi della vita.",
      },
      {
        type: "paragraph",
        text: "Attraverso la creazione del più ampio database europeo dedicato allo sviluppo neurologico infantile, i ricercatori possono analizzare come diversi fattori influenzino il cervello fin dai primi mesi di vita. Queste informazioni potrebbero consentire di individuare precocemente eventuali segnali di rischio, favorendo diagnosi tempestive e interventi mirati, quando il cervello presenta ancora una maggiore plasticità.",
      },
      {
        type: "heading",
        text: "Il microbiota intestinale come nuova frontiera della ricerca",
      },
      {
        type: "paragraph",
        text: "Un altro filone particolarmente promettente è quello sviluppato dal progetto CANDY, che approfondisce il rapporto tra microbiota intestinale, sistema immunitario e disturbi del neurosviluppo.",
      },
      {
        type: "paragraph",
        text: "Negli ultimi anni numerosi studi hanno evidenziato come l'intestino comunichi costantemente con il cervello attraverso quello che viene definito \"asse intestino-cervello\". Comprendere meglio questo dialogo biologico potrebbe permettere di identificare nuovi biomarcatori utili sia per la diagnosi sia per il monitoraggio dell'evoluzione della condizione.",
      },
      {
        type: "paragraph",
        text: "L'obiettivo non è individuare una causa unica dell'autismo, ma comprendere meglio i molteplici meccanismi biologici che possono contribuire allo sviluppo dei disturbi del neurosviluppo, favorendo così approcci terapeutici sempre più personalizzati.",
      },
      {
        type: "heading",
        text: "Una ricerca costruita insieme alle persone",
      },
      {
        type: "paragraph",
        text: "L'innovazione non riguarda esclusivamente laboratori e tecnologie. Un aspetto sempre più centrale dei progetti europei è il coinvolgimento diretto delle persone neurodivergenti e delle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "Sempre più studi adottano infatti metodologie partecipative, nelle quali le persone autistiche contribuiscono attivamente alla progettazione della ricerca, alla definizione delle priorità scientifiche e persino alla scelta di un linguaggio più rispettoso e inclusivo.",
      },
      {
        type: "paragraph",
        text: "Questo cambiamento rappresenta un'evoluzione importante: chi vive quotidianamente l'autismo non è più soltanto destinatario della ricerca, ma diventa parte integrante del processo scientifico.",
      },
      {
        type: "heading",
        text: "La tecnologia a supporto delle famiglie",
      },
      {
        type: "paragraph",
        text: "Accanto alla ricerca biologica si sviluppano anche strumenti digitali pensati per migliorare la qualità della vita delle famiglie.",
      },
      {
        type: "paragraph",
        text: "Tra questi, il progetto ADAPPT mette a disposizione piattaforme e risorse digitali per accompagnare genitori e caregiver nella gestione delle sfide quotidiane, offrendo supporto durante le diverse fasi della crescita dei bambini con disturbi del neurosviluppo.",
      },
      {
        type: "paragraph",
        text: "Le tecnologie digitali stanno diventando un valido complemento ai percorsi clinici tradizionali, contribuendo a rendere il sostegno più accessibile, continuo e personalizzato.",
      },
      {
        type: "heading",
        text: "Investire nella ricerca significa investire nel futuro",
      },
      {
        type: "paragraph",
        text: "I progetti finanziati dall'Unione Europea dimostrano come la ricerca stia andando oltre la semplice comprensione dei meccanismi biologici dell'autismo. L'obiettivo è costruire un sistema di cura sempre più centrato sulla persona, capace di integrare competenze scientifiche, innovazione tecnologica e partecipazione attiva delle comunità coinvolte.",
      },
      {
        type: "paragraph",
        text: "Diagnosi più precoci, biomarcatori innovativi, strumenti digitali di supporto e una maggiore inclusione delle persone neurodivergenti rappresentano tasselli di un percorso che punta a migliorare concretamente la qualità della vita delle persone e delle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "Ogni investimento nella ricerca scientifica è, infatti, un investimento nel futuro: un futuro in cui conoscenza, innovazione e inclusione possano procedere insieme per costruire una società sempre più attenta ai bisogni di tutti.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "European Health and Digital Executive Agency (HaDEA) – Commissione Europea - 02/04/2026",
        url: "https://hadea.ec.europa.eu/news/world-autism-awareness-day-2026-how-european-research-transforming-neurodevelopmental-care-2026-04-02_en",
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
    slug: "articolo-6",
  },
  //newsletter_2
  {
    id: 9,
    indice: "#2",
    titolo: "GAIA\nGiochi senza barriere",
    sottotitolo:
      "Comportamenti ripetitivi e stimming nell’autismo: comprenderne la funzione per promuovere interventi efficaci",
    categoria: "Newsletter",
    data: "2026-08-04",
    immagine: newsletter_2,
    alt: "Raffigurazione di un bambino che tamburella ritmicamente le dita (esempio di stimming)",

    estratto:
      "Lo stimming comprende movimenti, vocalizzazioni e azioni ripetitive che aiutano molte persone autistiche a regolare gli stimoli sensoriali, le emozioni e l’attenzione. Comprenderne la funzione permette di superare l’idea di un comportamento da eliminare e di promuovere interventi più rispettosi, personalizzati e centrati sul benessere della persona.",

    contenuti: [
      {
        type: "heading",
        text: "Stimming: perché parlarne?",
      },
      {
        type: "paragraph",
        text: "I comportamenti ripetitivi costituiscono uno dei principali criteri diagnostici del Disturbo dello Spettro Autistico (ASD) secondo il Diagnostic and Statistical Manual of Mental Disorders – Fifth Edition – Text Revision (DSM-5-TR) (American Psychiatric Association, 2022). Per lungo tempo sono stati interpretati prevalentemente come comportamenti problematici da ridurre; oggi, grazie alle evidenze scientifiche, sappiamo che rappresentano spesso importanti strategie di autoregolazione neurofisiologica.",
      },
      {
        type: "paragraph",
        text: "Tra queste manifestazioni assume particolare rilievo lo stimming (self-stimulatory behavior), termine che identifica movimenti, vocalizzazioni o azioni ripetitive attraverso cui la persona autistica regola l’elaborazione sensoriale, gestisce gli stati emotivi e mantiene un equilibrio interno.",
      },
      {
        type: "heading",
        text: "Che cos’è lo stimming?",
      },
      {
        type: "paragraph",
        text: "Lo stimming comprende una vasta gamma di comportamenti ripetitivi, tra cui:",
      },
      {
        type: "paragraph",
        text: "• battito delle mani (hand flapping);",
      },
      {
        type: "paragraph",
        text: "• dondolamento del tronco;",
      },
      {
        type: "paragraph",
        text: "• manipolazione ripetitiva di oggetti;",
      },
      {
        type: "paragraph",
        text: "• rotazione di oggetti;",
      },
      {
        type: "paragraph",
        text: "• ecolalia (ripetizione di parole o frasi);",
      },
      {
        type: "paragraph",
        text: "• vocalizzazioni ripetitive;",
      },
      {
        type: "paragraph",
        text: "• movimenti ritmici delle dita o del corpo.",
      },
      {
        type: "paragraph",
        text: "Sebbene comportamenti analoghi possano essere osservati anche nella popolazione neurotipica (ad esempio tamburellare con le dita o muovere continuamente una gamba), nelle persone autistiche essi risultano generalmente più frequenti, intensi e strettamente collegati ai processi di regolazione sensoriale ed emotiva.",
      },
      {
        type: "heading",
        text: "Qual è la funzione dello stimming?",
      },
      {
        type: "paragraph",
        text: "La letteratura scientifica attribuisce allo stimming diverse funzioni adattive.",
      },
      {
        type: "plus",
        text: "Regolazione sensoriale",
      },
      {
        type: "paragraph",
        text: "Molte persone autistiche presentano alterazioni nell’elaborazione degli stimoli sensoriali. Lo stimming contribuisce a modulare gli input provenienti dall’ambiente, favorendo una condizione di maggiore equilibrio in presenza di ipersensibilità o iposensibilità sensoriale.",
      },
      {
        type: "plus",
        text: "Autoregolazione emotiva",
      },
      {
        type: "paragraph",
        text: "Situazioni di stress, ansia, frustrazione o sovraccarico cognitivo possono determinare un incremento dei comportamenti ripetitivi. Lo stimming rappresenta, in questi casi, una risposta funzionale che consente di ridurre l’attivazione fisiologica e recuperare uno stato di calma.",
      },
      {
        type: "plus",
        text: "Supporto alle funzioni attentive",
      },
      {
        type: "paragraph",
        text: "Alcune ricerche suggeriscono che determinati comportamenti ripetitivi possano facilitare il mantenimento dell’attenzione durante attività cognitive particolarmente impegnative.",
      },
      {
        type: "plus",
        text: "Espressione delle emozioni positive",
      },
      {
        type: "paragraph",
        text: "Lo stimming non è esclusivamente associato al disagio. Può comparire anche durante esperienze di entusiasmo, soddisfazione o eccitazione, rappresentando una modalità spontanea di espressione emotiva.",
      },
      {
        type: "heading",
        text: "Eliminare lo stimming? Le evidenze suggeriscono un cambio di prospettiva",
      },
      {
        type: "paragraph",
        text: "Le attuali linee di ricerca invitano a superare una visione esclusivamente orientata alla soppressione del comportamento.",
      },
      {
        type: "paragraph",
        text: "Interrompere sistematicamente lo stimming può infatti aumentare il livello di stress, compromettere i processi di autoregolazione e incrementare il rischio di \"masking\", ovvero la tendenza a mascherare le proprie caratteristiche comportamentali per adattarsi alle aspettative sociali, con possibili ripercussioni sul benessere psicologico.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo dell’intervento educativo e clinico dovrebbe essere comprendere la funzione del comportamento, piuttosto che eliminarlo indiscriminatamente.",
      },
      {
        type: "heading",
        text: "Quando è opportuno intervenire?",
      },
      {
        type: "paragraph",
        text: "Un intervento specialistico è indicato quando il comportamento: ✔ comporta rischio di autolesionismo; ✔ limita significativamente l’apprendimento; ✔ compromette la partecipazione sociale; ✔ interferisce con la qualità della vita della persona.",
      },
      {
        type: "paragraph",
        text: "In tali circostanze è raccomandata una valutazione funzionale del comportamento, finalizzata a identificarne la funzione e a individuare strategie alternative di autoregolazione che rispettino i bisogni della persona.",
      },
      {
        type: "heading",
        text: "Il punto di vista del Progetto GAIA",
      },
      {
        type: "paragraph",
        text: "Promuovere una cultura dell’inclusione significa anche comprendere che molti comportamenti osservabili nell’autismo rappresentano modalità di adattamento del sistema nervoso e non semplici manifestazioni da correggere.",
      },
      {
        type: "paragraph",
        text: "Riconoscere la funzione dello stimming consente di progettare interventi personalizzati, rispettosi della persona e basati sulle migliori evidenze scientifiche disponibili.",
      },
      {
        type: "plus",
        text: "Comprendere prima di intervenire",
      },
      {
        type: "paragraph",
        text: "Comprendere prima di intervenire rappresenta oggi uno dei principi fondamentali della presa in carico centrata sulla persona.",
      },
      {
        type: "plus",
        text: "«Il comportamento non è mai privo di significato: comprenderne la funzione è il primo passo per costruire interventi realmente efficaci e rispettosi della persona»",
      },
      {
        type: "heading",
        text: "Bibliografia",
      },
      {
        type: "paragraph",
        text: "• American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., Text Revision – DSM-5-TR). American Psychiatric Publishing",
      },
      {
        type: "link",
        text: "• Charlton, R. A., et al. (2021). \"It feels like holding back something you need to say\": Autistic and non-autistic adults’ accounts of sensory experiences and stimming. Research in Autism Spectrum Disorders, 90, 101879.",
        url: "https://www.sciencedirect.com/science/article/pii/S1750946721001392?via%3Dihub"
      },
      {
        type: "link",
        text: "• Charlton, R. A., et al. (2024). Repetitive behaviours in autistic and non-autistic adults: Associations with sensory sensitivity and impact on self-efficacy. Journal of Autism and Developmental Disorders.",
        url: "https://link.springer.com/article/10.1007/s10803-023-06133-0"
      },
      {
        type: "link",
        text: "• Kirby, A. V., et al. (2017). Sensory and repetitive behaviors among children with autism spectrum disorder at home. Journal of Autism and Developmental Disorders.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5340079/"
      },
      {
        type: "link",
        text: "• Portale Autismo. \"Comportamenti ripetitivi e stimming nell’autismo\". Articolo divulgativo consultato come supporto introduttivo e di divulgazione del tema.",
        url: "https://www.portale-autismo.it/comportamenti-ripetitivi-e-stimming-nellautismo/"
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
    slug: "newsletter-2",
  },
  //articolo7
  {
    id: 10,
    titolo:
      "Genetica e ambiente: un nuovo modello aiuta a comprendere il rischio di autismo",
    sottotitolo:
      "Un nuovo studio integra genetica e ambiente per comprendere meglio la complessità dell’autismo",
    categoria: "Articoli",
    data: "2026-08-05",
    immagine: articolo_7,
    alt: "Illustrazione ad acquarello di ricercatori che analizzano dati genetici",

    estratto:
      "Un nuovo modello sviluppato dalla Johns Hopkins analizza insieme predisposizione genetica e fattori ambientali nel rischio di autismo. Lo studio apre nuove prospettive per una ricerca più inclusiva, accurata e orientata alla medicina personalizzata.",

    contenuti: [
      {
        type: "paragraph",
        text: "Per molti anni la ricerca sull'autismo si è concentrata principalmente sull'individuazione dei geni coinvolti nello sviluppo dei disturbi dello spettro autistico oppure sull'analisi di possibili fattori ambientali associati al rischio. Oggi, però, la comunità scientifica è sempre più concorde nel ritenere che nessuno di questi elementi, preso singolarmente, sia sufficiente a spiegare la complessità dell'autismo.",
      },
      {
        type: "paragraph",
        text: "Un importante passo avanti in questa direzione arriva da un recente studio della Johns Hopkins Bloomberg School of Public Health, pubblicato sulla rivista \"Nature Genetics\", che propone un nuovo modello di analisi capace di valutare contemporaneamente il ruolo della predisposizione genetica e dei fattori ambientali nello sviluppo dei disturbi dello spettro autistico.",
      },
      {
        type: "paragraph",
        text: "L'obiettivo della ricerca è offrire una visione più completa dei meccanismi che influenzano il rischio di autismo, superando l'approccio tradizionale che tendeva a considerare separatamente le diverse componenti coinvolte.",
      },
      {
        type: "heading",
        text: "L'autismo è il risultato di molteplici fattori",
      },
      {
        type: "paragraph",
        text: "Le evidenze scientifiche raccolte negli ultimi anni mostrano che l'autismo è una condizione del neurosviluppo caratterizzata da un'elevata complessità biologica.",
      },
      {
        type: "paragraph",
        text: "La componente genetica svolge certamente un ruolo importante: sono state identificate centinaia di varianti genetiche associate a un aumento del rischio. Tuttavia, queste varianti non determinano automaticamente la comparsa dell'autismo e, nella maggior parte dei casi, agiscono insieme ad altri elementi che intervengono durante lo sviluppo prenatale e nei primi anni di vita.",
      },
      {
        type: "paragraph",
        text: "Anche alcuni fattori ambientali, infatti, possono contribuire al rischio, interagendo con il patrimonio genetico individuale. Comprendere come queste componenti si influenzino reciprocamente rappresenta oggi una delle principali sfide della ricerca internazionale.",
      },
      {
        type: "heading",
        text: "Un nuovo modello per studiare l'interazione tra geni e ambiente",
      },
      {
        type: "paragraph",
        text: "Per affrontare questa complessità, i ricercatori della Johns Hopkins hanno sviluppato un innovativo modello statistico in grado di analizzare simultaneamente le informazioni genetiche del bambino, quelle dei genitori e i possibili fattori ambientali che possono influenzare il neurosviluppo.",
      },
      {
        type: "paragraph",
        text: "Questo approccio permette di osservare le relazioni tra le diverse variabili in maniera più accurata rispetto ai modelli utilizzati in passato, offrendo una rappresentazione più realistica dei meccanismi biologici alla base dell'autismo.",
      },
      {
        type: "paragraph",
        text: "L'idea centrale dello studio è che il rischio non derivi da un singolo gene né da un singolo fattore ambientale, ma dall'interazione dinamica di molteplici elementi che agiscono contemporaneamente.",
      },
      {
        type: "heading",
        text: "Oltre 18.000 famiglie coinvolte nello studio",
      },
      {
        type: "paragraph",
        text: "Per validare il nuovo modello, gli studiosi hanno analizzato i dati genetici e familiari di oltre 18.000 bambini con diagnosi di autismo e dei loro genitori.",
      },
      {
        type: "paragraph",
        text: "Uno degli aspetti più significativi della ricerca riguarda la presenza di partecipanti appartenenti a popolazioni con differenti origini ancestrali. Questo ha consentito di verificare come le relazioni tra genetica e ambiente possano manifestarsi in contesti differenti, migliorando l'affidabilità delle analisi.",
      },
      {
        type: "paragraph",
        text: "La disponibilità di un campione così ampio rappresenta uno degli elementi di maggiore solidità dello studio e consente di ottenere risultati più robusti rispetto a ricerche basate su gruppi di dimensioni ridotte.",
      },
      {
        type: "heading",
        text: "Una ricerca più inclusiva per risultati più affidabili",
      },
      {
        type: "paragraph",
        text: "Lo studio mette inoltre in evidenza un tema particolarmente importante per la medicina di precisione: gran parte degli strumenti genetici oggi disponibili è stata sviluppata utilizzando prevalentemente dati provenienti da popolazioni di origine europea.",
      },
      {
        type: "paragraph",
        text: "Questa limitazione può ridurre l'accuratezza delle analisi quando gli stessi strumenti vengono applicati a persone appartenenti ad altre popolazioni.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo i ricercatori sottolineano la necessità di ampliare la rappresentatività degli studi genetici, coinvolgendo comunità provenienti da differenti aree geografiche e con diverse caratteristiche ancestrali.",
      },
      {
        type: "paragraph",
        text: "Una ricerca realmente inclusiva non è soltanto una questione di equità scientifica, ma rappresenta anche una condizione indispensabile per sviluppare strumenti diagnostici affidabili e applicabili a tutta la popolazione mondiale.",
      },
      {
        type: "heading",
        text: "Quali prospettive apre questa ricerca?",
      },
      {
        type: "paragraph",
        text: "Sebbene questi risultati non abbiano un'applicazione clinica immediata, rappresentano un importante passo avanti nella comprensione delle basi biologiche dell'autismo.",
      },
      {
        type: "paragraph",
        text: "Un modello capace di integrare genetica e ambiente potrebbe infatti contribuire, nel prossimo futuro, a individuare con maggiore precisione i fattori di rischio, favorendo diagnosi sempre più precoci e percorsi di presa in carico maggiormente personalizzati.",
      },
      {
        type: "paragraph",
        text: "L'obiettivo finale della ricerca non è prevedere con certezza lo sviluppo dell'autismo, ma comprendere meglio i processi che lo caratterizzano, così da offrire strumenti sempre più efficaci a medici, ricercatori e famiglie.",
      },
      {
        type: "heading",
        text: "La ricerca continua a costruire una medicina sempre più personalizzata",
      },
      {
        type: "paragraph",
        text: "Questo studio conferma una direzione ormai condivisa dalla comunità scientifica internazionale: comprendere l'autismo significa analizzare la complessità delle interazioni tra patrimonio genetico, ambiente e sviluppo neurologico.",
      },
      {
        type: "paragraph",
        text: "Ogni nuova scoperta contribuisce ad arricchire le conoscenze disponibili e avvicina la medicina a un approccio sempre più personalizzato, capace di rispondere alle caratteristiche e ai bisogni specifici di ogni persona.",
      },
      {
        type: "paragraph",
        text: "Investire nella ricerca significa continuare a costruire conoscenze che, nel tempo, potranno tradursi in diagnosi più tempestive, interventi più mirati e una migliore qualità della vita per le persone autistiche e le loro famiglie.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "Johns Hopkins Bloomberg School of Public Health – \"New framework analyzes autism risk factors\", pubblicato su Nature Genetics - 02/06/2026",
        url: "https://publichealth.jhu.edu/2026/new-framework-analyzes-autism-risk-factors",
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
    slug: "articolo-7",
  },
  //articolo8
  {
    id: 11,
    titolo:
      "L’intelligenza artificiale può supportare una valutazione dell’autismo più accurata e trasparente",
    sottotitolo:
      "Un modello di IA spiegabile apre nuove prospettive per supportare la valutazione dell’autismo",
    categoria: "Articoli",
    data: "2026-08-11",
    immagine: articolo_8,
    alt: "Illustrazione ad acquarello di una dottoressa e una bambina che osservano insieme un tablet",
    estratto:
      "Un nuovo studio della University of Plymouth esplora l’uso dell’intelligenza artificiale spiegabile nella valutazione dell’autismo. L’obiettivo è affiancare i professionisti sanitari con strumenti più trasparenti, accurati e orientati al supporto personalizzato.",

    contenuti: [
      {
        type: "paragraph",
        text: "L’intelligenza artificiale sta rapidamente trasformando numerosi ambiti della medicina e della ricerca scientifica, aprendo nuove possibilità anche nel campo dei disturbi del neurosviluppo.",
      },
      {
        type: "paragraph",
        text: "Tra le applicazioni più promettenti vi è il suo utilizzo come strumento di supporto nella valutazione dell’autismo, con l’obiettivo di affiancare i professionisti sanitari nell’analisi delle informazioni cliniche e nello sviluppo di percorsi sempre più personalizzati.",
      },
      {
        type: "paragraph",
        text: "Un recente studio condotto dai ricercatori della University of Plymouth ha sviluppato un nuovo modello di intelligenza artificiale in grado non solo di fornire previsioni e risultati, ma anche di spiegare il processo che porta a tali conclusioni.",
      },
      {
        type: "paragraph",
        text: "Questa caratteristica rappresenta un elemento fondamentale, soprattutto in ambito sanitario: una tecnologia efficace non deve limitarsi a produrre una risposta, ma deve permettere agli specialisti di comprendere e interpretare le informazioni generate.",
      },
      {
        type: "heading",
        text: "La valutazione dell’autismo: un processo complesso",
      },
      {
        type: "paragraph",
        text: "Attualmente la valutazione dell’autismo si basa principalmente sull’osservazione del comportamento, sulla raccolta della storia dello sviluppo della persona e sull’analisi clinica effettuata da professionisti specializzati.",
      },
      {
        type: "paragraph",
        text: "Si tratta di un processo articolato, che richiede tempo e competenze multidisciplinari, poiché ogni persona presenta caratteristiche uniche e modalità differenti di manifestazione della condizione.",
      },
      {
        type: "paragraph",
        text: "La ricerca scientifica sta quindi esplorando nuovi strumenti capaci di integrare le informazioni disponibili e offrire un ulteriore supporto agli specialisti, senza sostituire il ruolo fondamentale della valutazione umana.",
      },
      {
        type: "paragraph",
        text: "In questo contesto l’intelligenza artificiale può rappresentare un valido alleato, grazie alla capacità di analizzare grandi quantità di dati e individuare schemi e correlazioni difficilmente rilevabili attraverso un’analisi tradizionale.",
      },
      {
        type: "heading",
        text: "L’intelligenza artificiale come supporto, non come sostituzione",
      },
      {
        type: "paragraph",
        text: "Uno degli aspetti più importanti nello sviluppo di sistemi di IA applicati alla medicina riguarda il loro ruolo.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo non è sostituire il professionista sanitario, ma fornire strumenti aggiuntivi che possano migliorare il processo decisionale.",
      },
      {
        type: "paragraph",
        text: "Un modello di intelligenza artificiale può infatti contribuire a organizzare informazioni complesse, evidenziare elementi rilevanti e supportare gli specialisti nell’interpretazione dei dati.",
      },
      {
        type: "paragraph",
        text: "La tecnologia diventa quindi un elemento complementare all’esperienza clinica, permettendo di unire capacità computazionali avanzate e conoscenza professionale.",
      },
      {
        type: "heading",
        text: "Un modello di IA più accurato e soprattutto spiegabile",
      },
      {
        type: "paragraph",
        text: "La ricerca sviluppata dall’University of Plymouth si concentra in particolare sul concetto di \"Explainable Artificial Intelligence (XAI)\", ovvero intelligenza artificiale spiegabile.",
      },
      {
        type: "paragraph",
        text: "I tradizionali sistemi di IA, soprattutto quelli basati su algoritmi complessi, possono spesso funzionare come una “scatola nera”: restituiscono un risultato, ma non sempre è chiaro quali elementi abbiano determinato quella previsione.",
      },
      {
        type: "paragraph",
        text: "In ambito sanitario questo rappresenta un limite importante, perché medici e famiglie devono poter comprendere il motivo per cui viene proposta una determinata interpretazione.",
      },
      {
        type: "paragraph",
        text: "Un sistema di IA spiegabile, invece, permette di visualizzare quali caratteristiche abbiano avuto maggiore peso nell’elaborazione del risultato, rendendo il processo più trasparente e verificabile.",
      },
      {
        type: "heading",
        text: "Perché la trasparenza è fondamentale nella medicina del futuro",
      },
      {
        type: "paragraph",
        text: "L’utilizzo dell’intelligenza artificiale nella salute richiede necessariamente affidabilità, responsabilità e trasparenza.",
      },
      {
        type: "paragraph",
        text: "Quando una tecnologia viene utilizzata per supportare decisioni che riguardano la salute delle persone, non è sufficiente che sia precisa: deve anche essere comprensibile e valutabile da chi la utilizza.",
      },
      {
        type: "paragraph",
        text: "La possibilità di conoscere il percorso seguito dall’algoritmo consente agli specialisti di interpretare meglio i risultati ottenuti,individuare eventuali limiti o errori del sistema, integrare le informazioni tecnologiche con la valutazione clinica e utilizzare lo strumento in modo consapevole e responsabile.",
      },
      {
        type: "paragraph",
        text: "Questo approccio contribuisce a costruire un rapporto di maggiore fiducia tra tecnologia, professionisti e famiglie.",
      },
      {
        type: "heading",
        text: "Nuove prospettive per diagnosi e supporto personalizzato",
      },
      {
        type: "paragraph",
        text: "Le potenzialità dell’intelligenza artificiale nella ricerca sull’autismo sono molteplici.",
      },
      {
        type: "paragraph",
        text: "In futuro, strumenti sempre più avanzati potrebbero contribuire a:",
      },
      {
        type: "paragraph",
        text: "•	migliorare l’analisi dei dati clinici;",
      },
      {
        type: "paragraph",
        text: "•	individuare pattern utili alla valutazione;",
      },
      {
        type: "paragraph",
        text: "•	supportare diagnosi più tempestive;",
      },
      {
        type: "paragraph",
        text: "•	favorire percorsi di intervento maggiormente personalizzati.",
      },
      {
        type: "paragraph",
        text: "Tuttavia, la tecnologia rappresenta soltanto uno degli elementi di un percorso più ampio, nel quale devono rimanere centrali la persona, la sua storia individuale e il contributo dei professionisti che la accompagnano.",
      },
      {
        type: "heading",
        text: "Innovazione tecnologica e attenzione alla persona: la sfida del futuro",
      },
      {
        type: "paragraph",
        text: "La ricerca sull’intelligenza artificiale applicata ai disturbi del neurosviluppo mostra come innovazione e attenzione alla persona possano procedere insieme.",
      },
      {
        type: "paragraph",
        text: "Un futuro in cui tecnologia e competenza umana collaborano può offrire nuove opportunità per migliorare la qualità delle valutazioni, rendere i percorsi più personalizzati e fornire un supporto sempre più efficace alle persone autistiche e alle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "L’intelligenza artificiale non rappresenta una sostituzione dell’esperienza umana, ma uno strumento che, se sviluppato e utilizzato in modo responsabile, può diventare un importante alleato della ricerca scientifica e della medicina del futuro.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "University of Plymouth – “AI model offers accurate and explainable insights to support autism assessment” - 19/09/2025",
        url: "https://www.plymouth.ac.uk/news/ai-model-offers-accurate-and-explainable-insights-to-support-autism-assessment ",
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
    slug: "articolo-8",
  },
  //articolo9
  {
    id: 12,
    titolo:
      "L’intelligenza artificiale per ridurre i tempi di accesso alla diagnosi dell’autismo",
    sottotitolo:
      "Un dispositivo basato sull’IA apre nuove prospettive per rendere più rapido l’accesso alla valutazione dell’autismo",
    categoria: "Articoli",
    data: "2026-08-19",
    immagine: articolo_9,
    alt: "Illustrazione ad acquarello di tre medici al computer",

    estratto:
      "La University of Missouri School of Medicine sta studiando un dispositivo assistito dall’intelligenza artificiale per supportare la valutazione dell’autismo. L’obiettivo è ridurre i tempi di attesa e facilitare l’accesso delle famiglie a percorsi diagnostici più tempestivi e personalizzati.",

    contenuti: [
      {
        type: "paragraph",
        text: "Per molte famiglie il percorso verso una valutazione dell’autismo può essere lungo e complesso. I tempi di attesa per accedere ai servizi diagnostici possono estendersi per mesi o, in alcuni casi, anche per anni, ritardando la possibilità di ricevere supporti fondamentali per lo sviluppo, l’apprendimento e il benessere della persona.",
      },
      {
        type: "paragraph",
        text: "In questo scenario, la ricerca scientifica sta esplorando nuove soluzioni tecnologiche in grado di rendere i percorsi di valutazione più efficienti e accessibili.",
      },
      {
        type: "paragraph",
        text: "Un’importante prospettiva arriva dalla University of Missouri School of Medicine, dove un gruppo di ricercatori sta studiando il potenziale dell’intelligenza artificiale come strumento di supporto alla valutazione dell’autismo, con l’obiettivo di contribuire alla riduzione dei tempi di accesso alla diagnosi e migliorare l’organizzazione dei servizi.",
      },
      {
        type: "heading",
        text: "Il problema dei tempi di attesa nella valutazione dell’autismo",
      },
      {
        type: "paragraph",
        text: "La diagnosi dell’autismo rappresenta un passaggio fondamentale per permettere alle persone e alle famiglie di accedere a interventi e strumenti di supporto adeguati.",
      },
      {
        type: "paragraph",
        text: "Tuttavia, in molti sistemi sanitari, la crescente domanda di valutazioni specialistiche si confronta con una disponibilità limitata di professionisti e strutture dedicate. Questo può determinare tempi di attesa significativi, creando difficoltà per le famiglie che cercano risposte e indicazioni.",
      },
      {
        type: "paragraph",
        text: "Un accesso più rapido alla valutazione può essere particolarmente importante durante l’infanzia, una fase nella quale interventi personalizzati e tempestivi possono contribuire positivamente allo sviluppo delle capacità comunicative, relazionali e cognitive.",
      },
      {
        type: "paragraph",
        text: "La sfida della ricerca è quindi individuare strumenti capaci di supportare i professionisti senza modificare la centralità della valutazione clinica.",
      },
      {
        type: "heading",
        text: "Un dispositivo digitale basato sull’intelligenza artificiale",
      },
      {
        type: "paragraph",
        text: "I ricercatori della University of Missouri School of Medicine hanno sviluppato un dispositivo digitale assistito dall’intelligenza artificiale progettato per raccogliere e analizzare informazioni utili nel processo di valutazione.",
      },
      {
        type: "paragraph",
        text: "La tecnologia è in grado di elaborare specifici indicatori comportamentali e fornire informazioni aggiuntive che possono aiutare gli specialisti nella fase di analisi.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo è creare uno strumento che possa facilitare il lavoro dei professionisti, rendendo più rapido il processo di identificazione dei casi che necessitano di un approfondimento clinico.",
      },
      {
        type: "paragraph",
        text: "L’intelligenza artificiale, grazie alla capacità di analizzare grandi quantità di dati e riconoscere determinati schemi, può quindi rappresentare un supporto importante nell’organizzazione dei percorsi diagnostici.",
      },
      {
        type: "heading",
        text: "La tecnologia come supporto alla competenza clinica",
      },
      {
        type: "paragraph",
        text: "Un aspetto fondamentale nello sviluppo di questi strumenti riguarda il loro ruolo all’interno del percorso diagnostico.",
      },
      {
        type: "paragraph",
        text: "L’intelligenza artificiale non sostituisce il lavoro degli specialisti e non può sostituire l’osservazione clinica, il confronto con la famiglia e la valutazione complessiva della storia della persona.",
      },
      {
        type: "paragraph",
        text: "La diagnosi dell’autismo richiede infatti un approccio multidisciplinare, nel quale esperienza professionale, conoscenza dello sviluppo individuale e contesto familiare rimangono elementi indispensabili.",
      },
      {
        type: "paragraph",
        text: "La tecnologia può però diventare un alleato prezioso, contribuendo a:",
      },
      {
        type: "paragraph",
        text: "•	individuare più rapidamente le situazioni che richiedono ulteriori approfondimenti;",
      },
      {
        type: "paragraph",
        text: "•	migliorare la gestione delle informazioni raccolte durante la valutazione;",
      },
      {
        type: "paragraph",
        text: "•	rendere più efficiente l’organizzazione dei servizi;",
      },
      {
        type: "paragraph",
        text: "•	facilitare l’accesso delle famiglie ai percorsi specialistici.",
      },
      {
        type: "heading",
        text: "Ridurre i tempi significa creare nuove opportunità",
      },
      {
        type: "paragraph",
        text: "Una diagnosi tempestiva non rappresenta soltanto un risultato clinico, ma può avere un impatto significativo sulla qualità della vita delle persone autistiche e delle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "Ridurre i tempi di attesa significa permettere un accesso più rapido a interventi educativi e terapeutici personalizzati, strumenti di supporto adeguati ai bisogni individuali, percorsi di accompagnamento per le famiglie e maggiori opportunità di sviluppo e partecipazione sociale.",
      },
      {
        type: "paragraph",
        text: "Il fattore tempo assume quindi un valore importante: ogni mese guadagnato nell’accesso ai servizi può rappresentare un’opportunità in più per costruire un percorso di crescita più consapevole e supportato.",
      },
      {
        type: "heading",
        text: "L’intelligenza artificiale al servizio di una sanità più accessibile",
      },
      {
        type: "paragraph",
        text: "La ricerca sviluppata dalla University of Missouri School of Medicine si inserisce in un più ampio percorso internazionale che vede l’intelligenza artificiale protagonista dell’innovazione sanitaria.",
      },
      {
        type: "paragraph",
        text: "Dall’analisi dei dati clinici alla ricerca di nuovi strumenti diagnostici, l’IA sta offrendo nuove possibilità per migliorare l’efficienza dei sistemi sanitari e rendere i servizi più accessibili.",
      },
      {
        type: "paragraph",
        text: "Tuttavia, il vero valore di queste tecnologie risiede nella capacità di integrarsi con il lavoro umano, mettendo a disposizione degli specialisti strumenti più avanzati senza perdere di vista la centralità della persona.",
      },
      {
        type: "heading",
        text: "Tecnologia e inclusione: costruire il futuro della diagnosi",
      },
      {
        type: "paragraph",
        text: "L’obiettivo della ricerca non è semplicemente velocizzare un processo, ma contribuire alla costruzione di un modello sanitario più vicino ai bisogni delle persone.",
      },
      {
        type: "paragraph",
        text: "L’intelligenza artificiale può diventare un importante strumento per superare alcune barriere di accesso, migliorare l’organizzazione delle valutazioni e favorire percorsi più tempestivi e personalizzati.",
      },
      {
        type: "paragraph",
        text: "Nel campo dell’autismo, dove ogni persona presenta caratteristiche e necessità differenti, la tecnologia può rappresentare un supporto concreto per accompagnare professionisti e famiglie verso una maggiore conoscenza, comprensione e inclusione.",
      },
      {
        type: "paragraph",
        text: "Perché ridurre i tempi della diagnosi significa aumentare le possibilità di intervento e offrire nuove opportunità per il futuro.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "University of Missouri School of Medicine – “AI-assisted device can improve autism care access”. - 18/12/2025",
        url: "https://medicine.missouri.edu/news/ai-assisted-device-can-improve-autism-care-access",
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
    slug: "articolo-9",
  },
  //articolo10
  {
    id: 13,
    titolo:
      "La medicina genetica apre una nuova fase nella ricerca sull’autismo",
    sottotitolo:
      "La genetica apre nuove prospettive per comprendere la complessità dell’autismo e sviluppare percorsi più personalizzati",
    categoria: "Articoli",
    data: "2026-08-24",
    immagine: articolo_10,
    alt: "Illustrazione ad acquarello di una mano che tiene una piantina",

    estratto:
      "I progressi della medicina genetica stanno cambiando il modo di studiare l’autismo, offrendo strumenti sempre più avanzati per comprenderne i meccanismi biologici. L’obiettivo è favorire diagnosi più accurate, supporti personalizzati e una ricerca sempre centrata sulla persona.",

    contenuti: [
      {
        type: "paragraph",
        text: "Negli ultimi anni la ricerca sull’autismo ha compiuto importanti passi avanti grazie allo sviluppo di nuove tecnologie genetiche e genomiche, che stanno permettendo agli studiosi di comprendere in modo sempre più approfondito i meccanismi biologici alla base dei disturbi dello spettro autistico.",
      },
      {
        type: "paragraph",
        text: "La medicina genetica sta aprendo una nuova fase nello studio dell’autismo: non più soltanto orientata all’identificazione dei geni coinvolti, ma sempre più focalizzata sulla comprensione di come le informazioni genetiche possano contribuire a sviluppare approcci maggiormente personalizzati e centrati sulla persona.",
      },
      {
        type: "paragraph",
        text: "Durante l’International Society for Autism Research (INSAR), uno dei principali appuntamenti mondiali dedicati alla ricerca sull’autismo, numerosi esperti hanno evidenziato come i progressi della genetica stiano modificando il modo di studiare questa complessa condizione del neurosviluppo.",
      },
      {
        type: "heading",
        text: "Dalla scoperta dei geni alla medicina di precisione",
      },
      {
        type: "paragraph",
        text: "Per molti anni uno degli obiettivi principali della ricerca genetica è stato individuare le varianti associate a un maggiore rischio di sviluppare un disturbo dello spettro autistico.",
      },
      {
        type: "paragraph",
        text: "Grazie ai progressi delle tecnologie di sequenziamento del DNA, oggi i ricercatori hanno identificato numerose alterazioni genetiche che possono essere coinvolte nei processi dello sviluppo neurologico.",
      },
      {
        type: "paragraph",
        text: "Tuttavia, la ricerca ha mostrato anche un aspetto fondamentale: l’autismo non è determinato da un singolo gene o da una singola causa biologica.",
      },
      {
        type: "paragraph",
        text: "Lo spettro autistico comprende infatti una grande varietà di caratteristiche, manifestazioni e percorsi individuali. Questa complessità rende necessario un approccio che vada oltre la semplice identificazione delle varianti genetiche, cercando di comprendere come queste informazioni possano essere utilizzate per migliorare la conoscenza, la diagnosi e il supporto alle persone.",
      },
      {
        type: "paragraph",
        text: "È proprio questa la direzione della medicina di precisione: utilizzare le informazioni biologiche disponibili per costruire una visione più completa e personalizzata della persona.",
      },
      {
        type: "heading",
        text: "Nuove tecnologie genomiche per comprendere meglio l’autismo",
      },
      {
        type: "paragraph",
        text: "Le innovazioni nel campo della genetica stanno offrendo strumenti sempre più avanzati per analizzare il rapporto tra patrimonio genetico e sviluppo neurologico.",
      },
      {
        type: "paragraph",
        text: "Durante l’INSAR, gli studiosi hanno sottolineato il ruolo di alcune aree di ricerca particolarmente promettenti:",
      },
      {
        type: "paragraph",
        text: "•	analisi genomiche sempre più sofisticate, capaci di individuare variazioni genetiche con maggiore precisione;",
      },
      {
        type: "paragraph",
        text: "•	studio delle varianti genetiche rare, che possono fornire importanti informazioni sui meccanismi biologici coinvolti;",
      },
      {
        type: "paragraph",
        text: "•	integrazione tra dati genetici e informazioni sullo sviluppo neurologico, per comprendere meglio come determinati cambiamenti possano influenzare il funzionamento cerebrale.",
      },
      {
        type: "paragraph",
        text: "Questi strumenti stanno trasformando il modo in cui viene studiato l’autismo, permettendo di passare da una visione generale a un’analisi sempre più dettagliata dei diversi profili biologici presenti all’interno dello spettro.",
      },
      {
        type: "heading",
        text: "La complessità dell’autismo richiede una ricerca sempre più personalizzata",
      },
      {
        type: "paragraph",
        text: "Uno dei principali contributi della medicina genetica è la possibilità di riconoscere che non tutte le persone autistiche presentano gli stessi meccanismi biologici alla base della condizione.",
      },
      {
        type: "paragraph",
        text: "La ricerca sta infatti cercando di identificare differenti sottogruppi o profili biologici, caratterizzati da specifiche combinazioni di fattori genetici e di sviluppo.",
      },
      {
        type: "paragraph",
        text: "Questo approccio potrebbe, in futuro, contribuire a progettare interventi maggiormente personalizzati, tenendo conto delle caratteristiche individuali e delle specifiche necessità di ogni persona.",
      },
      {
        type: "paragraph",
        text: "La medicina di precisione non significa creare percorsi standardizzati sulla base della genetica, ma utilizzare le conoscenze scientifiche per comprendere meglio la diversità dello spettro autistico e offrire strumenti di supporto più adeguati.",
      },
      {
        type: "heading",
        text: "La genetica come strumento di conoscenza, non come definizione della persona",
      },
      {
        type: "paragraph",
        text: "Un aspetto fondamentale sottolineato dalla comunità scientifica riguarda il ruolo che la genetica deve avere nella ricerca sull’autismo.",
      },
      {
        type: "paragraph",
        text: "Le informazioni genetiche rappresentano uno strumento per comprendere meglio i processi biologici, ma non definiscono l’identità, le capacità o il valore di una persona.",
      },
      {
        type: "paragraph",
        text: "Ogni individuo è il risultato di una complessa interazione tra caratteristiche biologiche, ambiente, esperienze personali e relazioni sociali.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo, la ricerca genetica deve essere accompagnata da un approccio globale, nel quale la tecnologia e la conoscenza scientifica siano sempre orientate al miglioramento della qualità della vita.",
      },
      {
        type: "heading",
        text: "Verso nuove possibilità per la diagnosi e il supporto",
      },
      {
        type: "paragraph",
        text: "I progressi della medicina genetica potrebbero avere importanti implicazioni future in diversi ambiti della ricerca sull’autismo.",
      },
      {
        type: "paragraph",
        text: "Una maggiore comprensione dei meccanismi biologici potrebbe contribuire a migliorare l'identificazione dei diversi profili presenti nello spettro autistico, sviluppare strumenti diagnostici sempre più acccurati, individuare nuovi possibili bersagli per la ricerca terapeutica e costruire percorsi di supporto maggiormente personalizzati.",
      },
      {
        type: "paragraph",
        text: "Tuttavia, la ricerca genetica si trova ancora in una fase di continua evoluzione e molte domande devono essere approfondite prima che queste conoscenze possano tradursi pienamente nella pratica clinica.",
      },
      {
        type: "heading",
        text: "Il futuro della ricerca: innovazione e centralità della persona",
      },
      {
        type: "paragraph",
        text: "La medicina genetica rappresenta una delle frontiere più promettenti nella ricerca sull’autismo, perché permette di guardare alla complessità dello spettro con strumenti sempre più avanzati.",
      },
      {
        type: "paragraph",
        text: "Il futuro della ricerca non sarà soltanto nella scoperta di nuovi geni o nuove tecnologie, ma nella capacità di utilizzare queste conoscenze per costruire percorsi più efficaci, inclusivi e rispettosi delle caratteristiche individuali.",
      },
      {
        type: "paragraph",
        text: "Conoscere meglio i meccanismi biologici dell’autismo significa creare nuove opportunità di comprensione e supporto, mantenendo sempre al centro la persona nella sua unicità.",
      },
      {
        type: "paragraph",
        text: "La sfida della ricerca sarà continuare a unire innovazione scientifica, medicina personalizzata e attenzione alla qualità della vita, per trasformare le nuove scoperte in strumenti concreti al servizio delle persone autistiche e delle loro famiglie.",
      },
      {
        type: "paragraph",
        text: "Fonte primaria:",
      },
      {
        type: "link",
        text: "The Transmitter – Spectrum, “Advances in genetic medicine took center stage at INSAR” - 05/05/2026",
        url: "https://www.thetransmitter.org/spectrum/advances-in-genetic-medicine-took-center-stage-at-insar/",
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
    slug: "articolo-10",
  },
  //articolo11
  {
    id: 14,
    titolo:
      "Abilismo e autismo: parlare di “funzionamento” può essere abilista?",
    sottotitolo:
      "Il linguaggio con cui parliamo di autismo conta",
    categoria: "Articoli",
    data: "2026-09-15",
    immagine: articolo_11,
    alt: "Bambino seduto tra delicate sfumature ad acquarello",

    estratto:
      "Parlare di autismo significa anche scegliere parole capaci di rispettare la complessità delle persone. Superare le etichette di “alto” e “basso funzionamento” aiuta a descrivere meglio bisogni, capacità e supporti necessari.",

    contenuti: [
      {
        type: "paragraph",
        text: "Parlare di autismo significa confrontarsi con una realtà estremamente eterogenea. Le caratteristiche, le abilità, le difficoltà e i bisogni di supporto possono variare significativamente da una persona all’altra e, per la stessa persona, anche in relazione al contesto e al momento della vita.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo, il linguaggio che utilizziamo per descrivere l’autismo non è un elemento secondario. Le parole possono contribuire a rappresentare la complessità delle esperienze autistiche oppure, al contrario, possono ridurle a categorie semplicistiche.",
      },
      {
        type: "paragraph",
        text: "Uno dei temi più discussi riguarda l’utilizzo delle espressioni “alto funzionamento” e “basso funzionamento”. Queste definizioni sono state utilizzate a lungo nel linguaggio comune e clinico, ma oggi sono sempre più messe in discussione perché rischiano di non rappresentare adeguatamente i bisogni e le capacità della persona.",
      },
      {
        type: "paragraph",
        text: "L’articolo di GAM Medical sull’abilismo nell’autismo sottolinea proprio come queste etichette possano ridurre la persona a una valutazione generale delle sue capacità, senza considerare la complessità del suo profilo individuale.",
      },
      {
        type: "heading",
        text: "Che cos’è l’abilismo?",
      },
      {
        type: "paragraph",
        text: "Il termine abilismo deriva dall’inglese ableism e indica l’insieme di atteggiamenti, pregiudizi, pratiche e strutture sociali che tendono a considerare alcune abilità come superiori o più desiderabili rispetto ad altre.",
      },
      {
        type: "paragraph",
        text: "Nel caso dell’autismo, l’abilismo può manifestarsi quando le modalità di comunicare, apprendere, relazionarsi o comportarsi tipiche delle persone neurotipiche vengono considerate come il modello di riferimento a cui tutti dovrebbero conformarsi.",
      },
      {
        type: "paragraph",
        text: "Non si tratta quindi soltanto di discriminazioni esplicite.",
      },
      {
        type: "paragraph",
        text: "L’abilismo può essere presente anche nelle aspettative sociali, nei sistemi educativi e lavorativi, nella progettazione degli ambienti e nel modo in cui vengono valutate le capacità delle persone autistiche.",
      },
      {
        type: "paragraph",
        text: "Ad esempio, un ambiente scolastico che propone una sola modalità di apprendimento, senza prevedere adattamenti sensoriali o comunicativi, può creare una barriera che non dipende esclusivamente dalle caratteristiche della persona, ma anche dal modo in cui l’ambiente è organizzato.",
      },
      {
        type: "paragraph",
        text: "Allo stesso modo, considerare una persona autistica come “poco capace” perché comunica in modo diverso può portare a sottovalutarne competenze, preferenze e possibilità di partecipazione.",
      },
      {
        type: "paragraph",
        text: "Questi aspetti sono evidenziati anche nella letteratura dedicata al linguaggio non abilista nell’autismo, che invita a descrivere in modo specifico capacità, difficoltà e necessità di supporto anziché ricorrere a categorie generiche.",
      },
      {
        type: "heading",
        text: "Perché parlare di “alto” e “basso funzionamento” può essere problematico?",
      },
      {
        type: "paragraph",
        text: "Le espressioni “autismo ad alto funzionamento” e “autismo a basso funzionamento” sembrano fornire una descrizione immediata, ma in realtà possono nascondere una grande complessità.",
      },
      {
        type: "paragraph",
        text: "Una persona definita “ad alto funzionamento” può, ad esempio, avere buone capacità linguistiche o cognitive e contemporaneamente necessitare di un supporto significativo nella gestione delle interazioni sociali, delle situazioni imprevedibili o degli stimoli sensoriali.",
      },
      {
        type: "paragraph",
        text: "Al contrario, una persona definita “a basso funzionamento” può presentare importanti necessità di supporto in alcune aree, ma possedere capacità, preferenze, interessi e modalità di comunicazione che un’etichetta generale non riesce a rappresentare.",
      },
      {
        type: "paragraph",
        text: "La ricerca che ha raccolto direttamente le prospettive di oltre 500 persone autistiche evidenzia proprio le criticità associate alle etichette di funzionamento. I partecipanti hanno sottolineato come il funzionamento possa cambiare nel tempo e a seconda delle situazioni e come queste categorie possano portare, da una parte, a sottovalutare i bisogni di chi viene definito “alto funzionamento” e, dall’altra, a sottostimare le capacità delle persone definite “basso funzionamento”.",
      },
      {
        type: "heading",
        text: "Il rischio di “alto funzionamento”: quando i bisogni diventano invisibili",
      },
      {
        type: "paragraph",
        text: "L’etichetta “alto funzionamento” può sembrare positiva, ma può produrre conseguenze problematiche.",
      },
      {
        type: "paragraph",
        text: "Se una persona viene percepita come sufficientemente autonoma o competente, il suo bisogno di supporto può essere sottovalutato.",
      },
      {
        type: "paragraph",
        text: "Questo può tradursi in frasi come:",
      },
      {
        type: "plus",
        text: "“Ma se riesci a fare questo, allora puoi fare anche quello.”",
      },
      {
        type: "paragraph",
        text: "Oppure:",
      },
      {
        type: "plus",
        text: "“Non sembri autistico.”",
      },
      {
        type: "paragraph",
        text: "Queste affermazioni partono dall’idea che alcune capacità debbano necessariamente essere accompagnate da un determinato livello di autonomia in tutte le altre aree.",
      },
      {
        type: "paragraph",
        text: "In realtà, le capacità non sono distribuite in modo uniforme.",
      },
      {
        type: "paragraph",
        text: "Una persona può avere ottime competenze in un ambito e incontrare contemporaneamente importanti difficoltà in un altro.",
      },
      {
        type: "paragraph",
        text: "La ricerca sul linguaggio utilizzato per descrivere l’autismo evidenzia proprio che le etichette di funzionamento possono mascherare la variabilità delle capacità e dei bisogni e, in alcuni casi, contribuire a ridurre l’accesso agli accomodamenti necessari.",
      },
      {
        type: "heading",
        text: "E il “basso funzionamento”?",
      },
      {
        type: "paragraph",
        text: "Anche l’espressione “basso funzionamento” presenta importanti criticità.",
      },
      {
        type: "paragraph",
        text: "Definire una persona attraverso ciò che non riesce a fare può portare a concentrarsi esclusivamente sulle difficoltà, trascurando capacità, interessi, preferenze e possibilità di partecipazione.",
      },
      {
        type: "paragraph",
        text: "Una definizione globale rischia inoltre di diventare un'aspettativa: se una persona viene considerata incapace di apprendere, comunicare o prendere decisioni, potrebbe ricevere meno opportunità per sviluppare queste competenze o per esprimere le proprie preferenze.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo è importante distinguere tra necessità di supporto e valore o potenzialità della persona.",
      },
      {
        type: "paragraph",
        text: "Avere bisogno di un supporto significativo non significa avere meno valore, meno diritti o meno possibilità di partecipare alla vita sociale.",
      },
      {
        type: "heading",
        text: "Cosa utilizza il DSM-5-TR?",
      },
      {
        type: "paragraph",
        text: "Il DSM-5-TR descrive l’autismo anche attraverso \"livelli di supporto necessari\", distinguendo tra:",
      },
      {
        type: "paragraph",
        text: "•	Livello 1: richiede supporto",
      },
      {
        type: "paragraph",
        text: "•	Livello 2: richiede supporto sostanziale",
      },
      {
        type: "paragraph",
        text: "•	Livello 3: richiede supporto molto sostanziale",
      },
      {
        type: "paragraph",
        text: "Questi livelli riguardano principalmente il grado di supporto necessario nelle aree della comunicazione sociale e dei comportamenti e interessi ristretti e ripetitivi.",
      },
      {
        type: "paragraph",
        text: "È importante, tuttavia, non interpretarli come una graduatoria del “valore”, dell’intelligenza o delle capacità complessive di una persona.",
      },
      {
        type: "paragraph",
        text: "La stessa persona può presentare bisogni differenti in contesti diversi e le necessità di supporto possono cambiare nel corso della vita.",
      },
      {
        type: "paragraph",
        text: "Anche fonti professionali dedicate alla comunicazione sull’autismo raccomandano di evitare le definizioni “high-functioning” e “low-functioning” e di descrivere invece in modo specifico le necessità e le caratteristiche individuali.",
      },
      {
        type: "heading",
        text: "Parlare di bisogni, non di gerarchie"
      },
      {
        type: "paragraph",
        text: "Superare le etichette di funzionamento non significa smettere di parlare delle difficoltà."
      },
      {
        type: "paragraph",
        text: "Al contrario, significa descriverle in modo più preciso."
      },
      {
        type: "paragraph",
        text: "Invece di dire \"È una persona autistica ad alto funzionamento\", può essere più utile specificare: \"Presenta buone competenze linguistiche, ma necessita di supporto nella gestione delle situazioni sociali imprevedibili e degli stimoli sensoriali.\""
      },
      {
        type: "paragraph",
        text: "Oppure, invece di definire una persona “a basso funzionamento”, è possibile descrivere concretamente: “Necessita di un supporto significativo nella comunicazione e nelle attività quotidiane e utilizza modalità comunicative alternative.”"
      },
      {
        type: "paragraph",
        text: "Questo tipo di descrizione restituisce una fotografia più completa della persona e permette di individuare con maggiore precisione i supporti necessari."
      },
      {
        type: "heading",
        text: "Dall’individuo all’ambiente: l’importanza dell’inclusione"
      },
      {
        type: "paragraph",
        text: "Una prospettiva realmente inclusiva non si limita a chiedersi “che cosa non riesce a fare questa persona?”, ma considera anche il contesto nel quale quella persona vive."
      },
      {
        type: "paragraph",
        text: "Quali barriere incontra?"
      },
      {
        type: "paragraph",
        text: "Quali adattamenti possono facilitare la partecipazione?"
      },
      {
        type: "paragraph",
        text: "Quali modalità comunicative possono essere utilizzate?"
      },
      {
        type: "paragraph",
        text: "Come può essere reso l’ambiente più accessibile?"
      },
      {
        type: "paragraph",
        text: "La ricerca sull’abilismo nell’autismo evidenzia infatti come molte difficoltà possano essere aggravate da aspettative sociali rigide, ambienti poco flessibili e dalla mancanza di supporti adeguati."
      },
      {
        type: "paragraph",
        text: "Questo approccio è particolarmente importante in ambito educativo, dove la progettazione di ambienti accessibili e flessibili può favorire la partecipazione e l’apprendimento."
      },
      {
        type: "heading",
        text: "Il punto di vista del Progetto GAIA"
      },
      {
        type: "paragraph",
        text: "Per il Progetto GAIA – Giochi Accessibili e Inclusivi per Bambini con Autismo, parlare di inclusione significa anche interrogarsi sul modo in cui vengono progettati gli strumenti, gli ambienti e le attività rivolte ai bambini autistici."
      },
      {
        type: "paragraph",
        text: "L’obiettivo non è chiedere alla persona di adattarsi continuamente a un unico modello di funzionamento."
      },
      {
        type: "paragraph",
        text: "È, quando possibile, adattare il contesto ai diversi modi di comunicare, apprendere, giocare e partecipare."
      },
      {
        type: "paragraph",
        text: "Questo significa riconoscere che non esiste un’unica esperienza dell’autismo e che una stessa persona può avere punti di forza e necessità di supporto molto differenti."
      },
      {
        type: "heading",
        text: "Comprendere la persona nella sua complessità"
      },
      {
        type: "paragraph",
        text: "Parlare di autismo in modo rispettoso non significa scegliere semplicemente le “parole giuste”."
      },
      {
        type: "paragraph",
        text: "Significa cambiare prospettiva."
      },
      {
        type: "paragraph",
        text: "Significa passare dal giudizio alla comprensione, dalla classificazione alla descrizione, dalla ricerca della “normalità” alla costruzione di contesti accessibili."
      },
      {
        type: "paragraph",
        text: "E soprattutto significa ricordare che una persona non coincide con il suo livello di autonomia, con le sue difficoltà o con la quantità di supporto di cui necessita."
      },
      {
        type: "plus",
        text: "Non chiediamoci quanto una persona “funziona”. Chiediamoci di quali supporti ha bisogno per comunicare, partecipare, apprendere e stare bene."
      },
      {
        type: "paragraph",
        text: "Fonti primarie:",
      },
      {
        type: "paragraph",
        text: "American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). American Psychiatric Publishing.",
      },
      {
        type: "link",
        text: "GAM Medical. (2024). Abilismo e Autismo: parlare di funzionamento è Abilista? Articolo divulgativo, revisionato dal team clinico di GAM Medical.",
        url: "https://gam-medical.com/abilismo-e-autismo/?srsltid=AfmBOorn7gdOq0lpSgGdpMr7k47tnMC5OHc2bleG4XQdMfDQt2EoNHAR"
      },
      {
        type: "paragraph",
        text: "Keating, C. T., et al. (2023). Autism-related language preferences of English-speaking individuals across the globe: A mixed methods investigation. Autism Research. Lo studio evidenzia, tra gli altri aspetti, le criticità percepite dalle persone autistiche rispetto alle etichette di funzionamento.",
      },
      {
        type: "paragraph",
        text: "Brosnan, M., et al. (2024). Autistic People's Perspectives on Functioning Labels and Associated Reasons, and Community Connectedness. Journal of Autism and Developmental Disorders. Lo studio raccoglie le opinioni di 516 persone autistiche sull'utilizzo delle etichette di funzionamento e sul linguaggio relativo all'autismo.",
      },
      {
        type: "paragraph",
        text: "Bottema-Beutel, K., Kapp, S. K., Lester, J. N., Sasson, N. J., & Hand, B. N. (2021). Avoiding Ableist Language: Suggestions for Autism Researchers. Autism in Adulthood, 3(1), 18–29.",
      },
      {
        type: "paragraph",
        text: "American Speech-Language-Hearing Association (ASHA). Communication About Autism: Terminology Considerations. Indicazioni professionali sull'utilizzo di un linguaggio rispettoso e sulla preferenza per descrizioni specifiche dei bisogni di supporto rispetto alle etichette “high/low functioning”.",
      },
      {
        type: "paragraph",
        text: "National Institutes of Health (NIH). NIH Style Guide – Autism. Indicazioni terminologiche che raccomandano di evitare le espressioni “high-functioning” e “low-functioning” e di descrivere in modo specifico le necessità della persona.",
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
    slug: "articolo-11",
  },
  //articolo12
  {
    id: 15,
    titolo:
      "Autismo: una diagnosi tipicamente maschile?",
    sottotitolo:
      "Riconoscere il camouflaging e le differenze di genere aiuta a comprendere meglio le molte forme dell’autismo",
    categoria: "Articoli",
    data: "2026-09-30",
    immagine: articolo_12,
    alt: "Immagine ad acquarello di una bambina",

    estratto:
      "L’autismo è stato a lungo descritto come una condizione prevalentemente maschile, ma la ricerca mostra che nelle ragazze e nelle donne può essere più difficile da riconoscere. Il camouflaging e i bias diagnostici possono contribuire a diagnosi tardive o mancate, rendendo necessario uno sguardo più attento alle differenze individuali.",

    contenuti: [
      {
        type: "paragraph",
        text: "Per molti anni l’autismo è stato considerato, anche nella ricerca scientifica e nella pratica clinica, una condizione prevalentemente maschile. Il rapporto tra maschi e femmine diagnosticati con disturbo dello spettro autistico è stato infatti a lungo stimato intorno a 4:1.",
      },
      {
        type: "paragraph",
        text: "Ma questo dato racconta davvero la diffusione dell’autismo nella popolazione?"
      },
      {
        type: "paragraph",
        text: "La ricerca degli ultimi anni ha iniziato a mettere in discussione questa interpretazione, evidenziando come nelle ragazze e nelle donne l’autismo possa essere più difficile da riconoscere e, di conseguenza, essere diagnosticato più tardi o non essere diagnosticato affatto."
      },
      {
        type: "heading",
        text: "Un possibile bias nella diagnosi dell’autismo",
      },
      {
        type: "paragraph",
        text: "Una delle questioni più discusse riguarda il modo in cui l’autismo è stato studiato e descritto nel corso del tempo.",
      },
      {
        type: "paragraph",
        text: "Molti degli strumenti diagnostici e delle conoscenze sviluppate sull’autismo sono stati costruiti a partire dall'osservazione di popolazioni prevalentemente maschili. Questo può aver contribuito a rendere più facilmente riconoscibili alcune manifestazioni dell’autismo, mentre altre possono risultare meno evidenti.",
      },
      {
        type: "paragraph",
        text: "Nelle ragazze e nelle donne, infatti, alcune caratteristiche possono essere presenti ma manifestarsi in maniera differente rispetto a quelle tradizionalmente associate all’autismo.",
      },
      {
        type: "paragraph",
        text: "Il risultato può essere un bias diagnostico, cioè una maggiore difficoltà nel riconoscere correttamente la condizione in alcune persone.",
      },
      {
        type: "heading",
        text: "Il ruolo del camouflaging",
      },
      {
        type: "paragraph",
        text: "Un fenomeno particolarmente importante per comprendere queste differenze è il camouflaging, o mascheramento sociale.",
      },
      {
        type: "paragraph",
        text: "Con questo termine si fa riferimento all'insieme delle strategie che alcune persone autistiche possono utilizzare, consapevolmente o inconsapevolmente, per adattarsi alle aspettative sociali e apparire maggiormente conformi ai comportamenti considerati “tipici”.",
      },
      {
        type: "paragraph",
        text: "Può includere, ad esempio:",
      },
      {
        type: "paragraph",
        text: "•	osservare e imitare il comportamento degli altri;",
      },
      {
        type: "paragraph",
        text: "•	imparare regole sociali attraverso l’osservazione;",
      },
      {
        type: "paragraph",
        text: "•	preparare in anticipo cosa dire o come comportarsi in determinate situazioni;",
      },
      {
        type: "paragraph",
        text: "•	cercare di nascondere comportamenti o caratteristiche percepite come insolite;",
      },
      {
        type: "paragraph",
        text: "•	controllare intenzionalmente espressioni, gesti e modalità di comunicazione.",
      },
      {
        type: "paragraph",
        text: "Queste strategie possono rendere meno evidenti all'esterno alcune caratteristiche dell’autismo.",
      },
      {
        type: "paragraph",
        text: "Una persona può quindi apparire perfettamente inserita in un contesto sociale, pur sperimentando internamente un notevole livello di fatica e di sforzo per riuscire a gestire quella situazione.",
      },
      {
        type: "heading",
        text: "Quando ciò che si vede non racconta tutta la realtà",
      },
      {
        type: "paragraph",
        text: "Uno degli aspetti più importanti del camouflaging è proprio la distanza che può crearsi tra ciò che viene osservato dall'esterno e ciò che la persona sperimenta internamente.",
      },
      {
        type: "paragraph",
        text: "Una ragazza che riesce a mantenere una conversazione, instaurare relazioni o adattarsi alle regole sociali potrebbe, a una prima osservazione, non presentare caratteristiche immediatamente riconducibili all'autismo.",
      },
      {
        type: "paragraph",
        text: "Questo non significa necessariamente che non siano presenti difficoltà.",
      },
      {
        type: "paragraph",
        text: "Lo sforzo necessario per comprendere le situazioni sociali, adattarsi ad esse e gestire continuamente il proprio comportamento può essere significativo.",
      },
      {
        type: "paragraph",
        text: "La letteratura scientifica ha evidenziato che il camouflaging può essere particolarmente frequente nelle donne autistiche e che livelli maggiori di mascheramento possono essere associati a una diagnosi più tardiva.",
      },
      {
        type: "heading",
        text: "Una diagnosi più tardiva può avere conseguenze",
      },
      {
        type: "paragraph",
        text: "Quando il riconoscimento dell’autismo arriva tardi, la persona può aver trascorso molti anni cercando di comprendere e gestire difficoltà che non riusciva a spiegarsi.",
      },
      {
        type: "paragraph",
        text: "Questo può contribuire a un percorso caratterizzato da incomprensioni, senso di diversità rispetto agli altri e necessità di sviluppare autonomamente strategie di adattamento.",
      },
      {
        type: "paragraph",
        text: "Per questo motivo, migliorare la capacità di riconoscere le diverse manifestazioni dell’autismo rappresenta un passaggio importante per rendere il percorso diagnostico più inclusivo.",
      },
       {
        type: "heading",
        text: "L’autismo non ha un unico volto",
      },
      {
        type: "paragraph",
        text: "Parlare di autismo significa parlare di una condizione estremamente eterogenea.",
      },
      {
        type: "paragraph",
        text: "Non esiste un unico modo di essere autistici e non tutte le persone presentano le stesse caratteristiche, con la stessa intensità o nelle stesse situazioni.",
      },
      {
        type: "paragraph",
        text: "Per questo è importante evitare di associare l’autismo a un'immagine stereotipata e prestare attenzione alle caratteristiche individuali della persona, alla sua storia e al modo in cui vive le relazioni, la comunicazione e gli stimoli ambientali.",
      },
      {
        type: "paragraph",
        text: "L’obiettivo non dovrebbe essere quello di stabilire se una persona “sembra abbastanza autistica”, ma di comprendere come funziona quella persona e quali sono le sue specifiche caratteristiche e necessità.",
      },
      {
        type: "paragraph",
        text: "Riconoscere questa variabilità può contribuire a ridurre il rischio di diagnosi mancate o tardive e a favorire percorsi di valutazione maggiormente attenti alle differenze individuali.",
      },
      {
        type: "paragraph",
        text: "Fonti primarie:",
      },
      {
        type: "link",
        text: "•	Neuropsichiatria Infantile – Università degli Studi di Roma Tor Vergata, Disturbo dello spettro autistico: una diagnosi tipicamente maschile?",
        url: "https://www.autismotorvergata.it/disturbo-dello-spettro-autistico-una-diagnosi-tipicamente-maschile/?utm_source=chatgpt.com"
      },
      {
        type: "paragraph",
        text: "•	Tubío-Fungueiriño et al., Social Camouflaging in Females with Autism Spectrum Disorder: A Systematic Review, Journal of Autism and Developmental Disorders, 2021.",
      },
      {
        type: "paragraph",
        text: "•	Hull, Petrides & Mandy, The Female Autism Phenotype and Camouflaging: a Narrative Review, Review Journal of Autism and Developmental Disorders, 2020.",
      },
      {
        type: "paragraph",
        text: "•	McQuaid et al., studi sul camouflaging e sulle differenze di genere nell’autismo.",
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
    slug: "articolo-12",
  },
  // //articolo13
  // {
  //   id: 16,
  //   titolo:
  //     "Token economy: cos’è, come funziona e come può essere utilizzata nell’autismo",
  //   sottotitolo:
  //     "Un sistema di rinforzo per sostenere apprendimento, motivazione e autonomia nei percorsi educativi",
  //   categoria: "Articoli",
  //   data: "2026-10-07",
  //   immagine: articolo_13,
  //   alt: "Illustrazione ad acquarello di un bambino che utilizza una tabella di rinforzo con gettoni a forma di stella",

  //   estratto:
  //     "La token economy è uno strumento educativo basato sul rinforzo, utile per rendere più chiari e prevedibili alcuni obiettivi di apprendimento.",

  //   contenuti: [
  //      {
  //       type: "heading",
  //       text: "Un sistema di rinforzo per sostenere l’apprendimento",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Nel percorso educativo di bambini e ragazzi con Disturbo dello Spettro Autistico possono essere utilizzati diversi strumenti per favorire l’acquisizione di nuove abilità, aumentare la motivazione e rendere più prevedibili alcune attività.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Tra questi strumenti rientra la token economy, un sistema basato sui principi del rinforzo comportamentale che permette di associare a un comportamento o a un’abilità acquisita un simbolo, un gettone o un altro elemento che può successivamente essere scambiato con un rinforzatore.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La token economy è una procedura utilizzata da molti anni nell’ambito dell’analisi comportamentale applicata e dell’educazione. Una revisione specificamente dedicata ai bambini con disabilità intellettiva e/o autismo ha evidenziato il potenziale di questi sistemi nel creare ambienti strutturati e nel sostenere l’apprendimento di diversi comportamenti.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Che cos’è una token economy?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il principio alla base è relativamente semplice. La persona riceve un token dopo aver messo in atto un comportamento precedentemente individuato e concordato. Una volta raggiunto un determinato numero di token, questi possono essere scambiati con un rinforzatore, cioè qualcosa che per quella persona ha un valore motivazionale.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il token può assumere forme differenti: un gettone, un adesivo, una stellina, un'immagine, un simbolo, un punto o un qualunque elemento inserito all'interno di una tabella.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il token, inizialmente, acquisisce valore perché viene associato a qualcosa di motivante. In termini comportamentali, diventa quindi un rinforzatore condizionato.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La letteratura descrive la token economy come un sistema composto da diversi elementi: il comportamento target, il token, i rinforzatori utilizzabili per lo scambio e specifiche modalità di somministrazione dei token e di accesso al rinforzatore.",
  //     },
  //      {
  //       type: "heading",
  //       text: "Come funziona?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Per costruire una token economy è necessario innanzitutto stabilire quale comportamento si vuole sostenere.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "L'obiettivo deve essere il più possibile concreto e osservabile.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Ad esempio, invece di formulare un obiettivo generico come:",
  //     },
  //     {
  //       type: "plus",
  //       text: "“Comportarsi bene a scuola”",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "è preferibile individuare un comportamento specifico:",
  //     },
  //     {
  //       type: "plus",
  //       text: "“Rimanere seduto durante l’attività per il tempo concordato.”",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Ogni volta che il comportamento viene messo in atto secondo i criteri stabiliti, viene consegnato un token. Una volta raggiunto il numero di token previsto, la persona può accedere al rinforzatore concordato.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il meccanismo può quindi essere rappresentato in questo modo:",
  //     },
  //     {
  //       type: "plus",
  //       text: "COMPORTAMENTO → TOKEN → RACCOLTA DEI TOKEN → RINFORZATORE",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La chiarezza delle regole è fondamentale. La persona deve poter comprendere, in relazione alle proprie capacità comunicative e cognitive, che cosa permette di ottenere il token e cosa succede quando viene raggiunto il numero stabilito.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Un esempio pratico",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Immaginiamo un bambino che stia imparando a completare una breve routine quotidiana in autonomia.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "L'obiettivo potrebbe essere:",
  //     },
  //     {
  //       type: "plus",
  //       text: "completare la routine del mattino seguendo i passaggi concordati",
  //     },
  //      {
  //       type: "paragraph",
  //       text: "Ogni volta che completa correttamente la routine:",
  //     },
  //     {
  //       type: "plus",
  //       text: "+ 1 token",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Dopo aver raccolto 5 token, si accede al rinforzatore scelto.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il rinforzatore deve essere individuato considerando le preferenze individuali del bambino.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Non esiste infatti una ricompensa universalmente efficace: ciò che è motivante per una persona potrebbe non esserlo per un'altra.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La scelta del rinforzatore e delle modalità di utilizzo del sistema deve quindi essere personalizzata.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Quali comportamenti possono essere sostenuti?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La token economy può essere utilizzata per sostenere diversi tipi di obiettivi, a seconda delle necessità della persona.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La letteratura ha documentato applicazioni rivolte, tra le altre cose, alla partecipazione alle attività, all'attenzione, ai comportamenti sociali, alle attività scolastiche e alle abilità di autonomia.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "In un contesto educativo, ad esempio, può essere utilizzata per favorire:",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	la partecipazione a un'attività;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	il completamento di un compito;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	l'acquisizione di una routine;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	alcune abilità di autonomia;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	comportamenti sociali specifici;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	la permanenza in un'attività per un determinato periodo;",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	l'utilizzo di una modalità comunicativa precedentemente acquisita.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "È importante, però, che l'obiettivo sia realistico, significativo e adeguato alle caratteristiche della persona.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Il ruolo della motivazione",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Uno degli aspetti centrali della token economy è la motivazione. Il sistema funziona infatti soltanto se il token ha per la persona un valore e se il rinforzatore finale è realmente significativo.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Per questo motivo, nella progettazione è importante conoscere gli interessi e le preferenze individuali.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Un rinforzatore può essere costituito, ad esempio, da un'attività piacevole, da un gioco, da un momento dedicato a un interesse specifico o da un'altra esperienza significativa per la persona.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La scelta non dovrebbe essere standardizzata.",
  //     },
  //     {
  //       type: "plus",
  //       text: "La persona viene prima del sistema.",
  //     },
  //     {
  //       type: "heading",
  //       text: "La token economy deve essere sempre utilizzata?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "No. La token economy non dovrebbe essere considerata una soluzione universale né applicata automaticamente a ogni comportamento.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "È uno strumento educativo, che deve essere inserito all'interno di una progettazione più ampia e coerente con gli obiettivi individuali.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La ricerca mostra che l'efficacia dei sistemi a token dipende anche dalla qualità con cui vengono progettati e applicati. Una revisione del 2024 sottolinea proprio la necessità di trasformare le conoscenze disponibili dalla ricerca in procedure pratiche ben strutturate e personalizzate.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Inoltre, una revisione sistematica condotta in ambito scolastico ha rilevato risultati favorevoli in diversi studi, ma ha evidenziato anche differenze legate alle modalità di utilizzo dei componenti della token economy e al contesto educativo.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Un aspetto fondamentale: cosa succede quando i token non servono più?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Uno degli obiettivi più importanti non dovrebbe essere quello di rendere la persona permanentemente dipendente dal sistema di token.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Al contrario, quando il comportamento è sufficientemente consolidato, il sistema può essere gradualmente modificato e ridotto, favorendo il passaggio verso rinforzi più naturali.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Questo aspetto è particolarmente importante perché l'obiettivo dell'intervento educativo non è semplicemente ottenere un comportamento mentre è presente una ricompensa, ma favorire la generalizzazione e il mantenimento dell'abilità nel tempo e nei diversi contesti.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Già nella letteratura classica sulla token economy la generalizzazione dei comportamenti acquisiti e il mantenimento dopo la riduzione del rinforzo venivano indicati come aspetti fondamentali da considerare.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Token economy e autismo: attenzione alla personalizzazione",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Nel caso dell'autismo, la personalizzazione assume un'importanza particolare.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Le persone autistiche presentano caratteristiche, preferenze, modalità comunicative e bisogni molto differenti.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Per questo motivo non è sufficiente predisporre una semplice tabella di gettoni e applicarla nello stesso modo a tutti.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "È necessario chiedersi:",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Qual è l'obiettivo?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	È realmente significativo per la persona?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Il comportamento richiesto è comprensibile e raggiungibile?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Il token è facilmente riconoscibile?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Il rinforzatore è realmente motivante?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Il sistema è adatto alle modalità comunicative della persona?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Come verrà progressivamente ridotto?",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Queste domande permettono di trasformare la token economy da una semplice raccolta di gettoni a uno strumento inserito in un progetto educativo individualizzato.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Non solo “premi”: costruire opportunità di apprendimento",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "È importante evitare di interpretare la token economy semplicemente come un sistema di “premi e punizioni”.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il suo obiettivo, se correttamente progettata, è creare una relazione chiara e prevedibile tra un comportamento e una conseguenza positiva, sostenendo la motivazione durante l'apprendimento.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La token economy può quindi essere utilizzata per accompagnare la persona nell'acquisizione di nuove competenze, soprattutto quando un'attività richiede uno sforzo iniziale significativo o quando il rinforzo naturale dell'attività non è ancora sufficiente a sostenere la partecipazione.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Il punto di vista del Progetto GAIA",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Nel Progetto GAIA – Giochi Accessibili e Inclusivi per Bambini con Autismo, strumenti come la token economy possono essere considerati all'interno di una prospettiva più ampia: quella della progettazione di esperienze accessibili, prevedibili e personalizzate.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Un sistema di token può essere utile quando risponde realmente alle esigenze del bambino e quando viene inserito in un percorso educativo strutturato.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "L'obiettivo non è semplicemente ottenere un determinato comportamento. L'obiettivo è favorire l'apprendimento, la partecipazione e l'autonomia, rispettando caratteristiche e preferenze individuali.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Per questo, anche quando si utilizza una strategia comportamentale, è fondamentale mantenere al centro la persona.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Comprendere, personalizzare, accompagnare",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "La token economy può essere uno strumento efficace, ma la sua efficacia non dipende dal semplice utilizzo di gettoni o premi.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Dipende dalla capacità di progettare il sistema intorno alla persona, scegliere obiettivi significativi, utilizzare rinforzatori adeguati e accompagnare progressivamente l'acquisizione dell'abilità verso una maggiore autonomia.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Il token è uno strumento, non l'obiettivo. L'obiettivo è aiutare la persona ad apprendere e partecipare in modo sempre più autonomo.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Fonti primarie:",
  //     },
  //     {
  //       type: "link",
  //       text: "•	Centro Medico Riabilitativo (CMR). Token economy: cos’è e come metterla in pratica. Fonte divulgativa di riferimento per la descrizione della procedura e delle sue modalità applicative.",
  //       url: "https://www.centromedicoriabilitativo.it/blog/token-economy/"
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	degli Espinosa, F., & Hackenberg, T. D. (2024). Token economies: Evidence-based recommendations for practitioners. Behavioral Interventions, 39(4), e2051. DOI: 10.1002/bin.2051. La revisione propone raccomandazioni evidence-based per la progettazione e l'applicazione dei sistemi a token.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Matson, J. L., & Boisjoli, J. A. (2009). The token economy for children with intellectual disability and/or autism: A review. Research in Developmental Disabilities, 30(2), 240–248. DOI: 10.1016/j.ridd.2008.04.001. La revisione analizza l'utilizzo della token economy nei bambini con disabilità intellettiva e/o autismo.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Kazdin, A. E., & Bootzin, R. R. (1972). The token economy: An evaluative review. Journal of Applied Behavior Analysis, 5(3), 343–372. DOI: 10.1901/jaba.1972.5-343. Lo studio rappresenta una delle revisioni classiche della letteratura sulla token economy e discute anche il problema della generalizzazione e del mantenimento dei comportamenti acquisiti.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Maggin, D. M., Chafouleas, S. M., Goddard, K. M., & Johnson, A. H. (2011). A systematic evaluation of token economies as a classroom management tool for students with challenging behavior. Journal of School Psychology, 49(5), 529–554. DOI: 10.1016/j.jsp.2011.05.001. La revisione evidenzia risultati promettenti per programmi ben realizzati, sottolineando al contempo alcune limitazioni metodologiche della letteratura.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "•	Filcheck, H. A., et al. (2017). Token Economy: A Systematic Review of Procedural Descriptions. La revisione analizza gli elementi procedurali necessari per descrivere e implementare correttamente una token economy.",
  //     },
  //     {
  //       type: "plus",
  //       text: "Nella ricerca la collaborazione è fondamentale! Se sei interessato a iscriverti alla nostra newsletter o a ricevere aggiornamenti su eventi e corsi, condividere idee e contribuire allo sviluppo del progetto, non esitare a contattarci.",
  //     },
  //     {
  //       type: "highlight",
  //       label: "Contattaci!",
  //       to: "/contatti",
  //       variant: "secondary",
  //     },
  //   ],
  //   slug: "articolo-13",
  // },
];