import locandina_1 from "../assets/img/newsletter/locandina_1.webp";
import articolo_1 from "../assets/img/newsletter/gaia_articolo_1.webp";
import articolo_2 from "../assets/img/newsletter/articolo_connessione_cerebrale.webp";
import articolo_3 from "../assets/img/newsletter/articolo_robot_sociali.webp";
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
    immagine: locandina_1,
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
    titolo:
      "Apertura della pagina Instagram di GAIA",
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
    titolo:
      "Autismo: il cervello non comunica sempre allo stesso modo",
    sottotitolo:
      "Nuove scoperte aprono la strada a terapie più personalizzate",
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
        text: "Verso una medicina di precisione"
      },
      {
        type: "paragraph",
        text: "L’obiettivo futuro è arrivare a una classificazione più precisa dello spettro autistico, basata non solo sui comportamenti osservabili ma anche sulle caratteristiche biologiche e neurologiche individuali."
      },
      {
        type: "paragraph",
        text: "Un approccio simile permetterebbe di sviluppare percorsi terapeutici più mirati, migliorando la qualità degli interventi e offrendo un supporto sempre più personalizzato alle persone autistiche e alle loro famiglie."
      },
      {
        type: "paragraph",
        text: "La ricerca sull’autismo continua quindi a evolversi, mostrando quanto sia importante superare l’idea di uno spettro uniforme per comprendere davvero la complessità del funzionamento del cervello umano."
      },
      {
        type: "paragraph",
        text: "Fonte primaria:"
      },
      {
        type: "link",
        text: "Repubblica - 02/04/2026",
        url: "https://www.repubblica.it/salute/2026/04/02/news/autismo_genetica_terapie-425257254/"
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
    titolo:
      "Robot sociali e autismo: nuove strade per comunicare",
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
        text: "Nuove prospettive per interventi più precoci"
      },
      {
        type: "paragraph",
        text: "Le tecnologie robotiche applicate alla neuropsichiatria infantile stanno aprendo scenari interessanti anche sul fronte della valutazione precoce e della personalizzazione dei percorsi terapeutici."
      },
      {
        type: "paragraph",
        text: "Comprendere meglio come i bambini autistici reagiscono agli stimoli sociali potrebbe infatti aiutare specialisti e famiglie a costruire interventi sempre più efficaci, accessibili e calibrati sui bisogni individuali."
      },
      {
        type: "paragraph",
        text: "In questo contesto, i robot sociali non rappresentano il futuro delle relazioni umane, ma uno strumento in più per facilitare la comunicazione e sostenere lo sviluppo dei bambini con ASD."
      },
      {
        type: "paragraph",
        text: "Fonte primaria:"
      },
      {
        type: "link",
        text: "Quotidiano Nazionale - 11/04/2026",
        url: "https://www.quotidiano.net/luce/attualita/robot-autismo-bambini-b82a92ba"
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
  }
];
