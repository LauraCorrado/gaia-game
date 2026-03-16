export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin'
  url: string
}

export interface Partner {
  name: string
  role: string
  logo: string
  description: string
  contribution: {
    paragraphs: string[]
  }
  website: string
  socials?: SocialLink[]
  btnLabel?: string
  color: string
  accent: string
  accentBar: string
  btnColor: 'blue' | 'pink' | 'green' | 'yellow'
}

export const partners: Partner[] = [
  {
    name: "TEA SRL",
    role: "Capofila del progetto",
    logo: "/logos/tea_logo.png",
    description:
      "TEA S.r.l., fondata nel 1996, opera da oltre 20 anni nello sviluppo di tecnologie per la conoscenza, la valorizzazione e la fruizione accessibile del patrimonio culturale e territoriale. L'azienda trasforma dati complessi in strumenti per la ricerca, la conservazione e l'accessibilità dei beni culturali. Tra le soluzioni sviluppate figurano sistemi di restauro virtuale basati su imaging multispettrale, come @mmira, e piattaforme multisensoriali e multimateriche come AIVES, progettate per rendere l'arte accessibile anche alle persone con disabilità visive.",
    contribution: {
      paragraphs: [
        "TEA partecipa al progetto GAIA con il ruolo di capofila, garantendo il coordinamento generale delle attività e contribuendo alla definizione dell'impostazione metodologica del sistema di gioco multisensoriale.",
        "L'azienda individua le soluzioni tecnologiche più adeguate ad assicurare qualità, coerenza e funzionalità al progetto e cura la progettazione delle interfacce tangibili, dalla scelta dei materiali alla configurazione della base di gioco e all'integrazione degli effetti sensoriali.",
        "Inoltre, favorisce il dialogo tra i partner e il coordinamento tra competenze scientifiche, tecnologiche e progettuali, accompagnando tutte le fasi di sviluppo fino alla realizzazione di un prototipo innovativo e pienamente rispondente alle finalità del progetto.",
      ],
    },
    website: "https://www.teacz.com/",
    socials: [
        { platform: "facebook", url: "https://www.facebook.com/StoriedaScoprire/" },
        { platform: "instagram", url: "https://www.instagram.com/storiedascoprire/" },
        { platform: "linkedin", url: "https://www.linkedin.com/company/t-e-a-catanzaro/" },
    ],
    btnLabel: "Visita il sito",
    color: "bg-lm-bg-pink dark:bg-dm-bg-pink",
    accent: "text-lm-pink dark:text-dm-pink",
    accentBar: "bg-logo-pink",
    btnColor: "pink",
  },
  {
    name: "Studio Rubino SRL",
    role: "Comunicazione, newsletter e brevetti",
    logo: "/logos/rubinoip_logo.png",
    description:
      "Con oltre 30 anni di esperienza, Rubino IP – Intellectual Property è una realtà specializzata nella tutela e valorizzazione della proprietà industriale e intellettuale a livello nazionale e internazionale. Con sedi a Roma, Catanzaro, Bari, Catania e Modena, supporta aziende e organizzazioni nella protezione e gestione di marchi, brevetti, disegni e modelli. Il team multidisciplinare di ingegneri, tecnici e consulenti legali offre servizi integrati che accompagnano l'innovazione dalla fase di ricerca fino alla valorizzazione e alla protezione sul mercato.",
    contribution: {
      paragraphs: [
        "Rubino IP partecipa al progetto GAIA contribuendo alla tutela, alla valorizzazione e alla gestione strategica delle innovazioni sviluppate nell'ambito dell'iniziativa.",
        "L'azienda supporta i partner e i gruppi di utenti coinvolti nella sperimentazione, definendo strategie di protezione della proprietà intellettuale e di sfruttamento commerciale dei risultati, con l'obiettivo di garantirne sicurezza, sostenibilità e possibilità di applicazione.",
        "Parallelamente, promuove la diffusione delle conoscenze scientifiche attraverso eventi, seminari, pubblicazioni e attività di comunicazione, favorendo la visibilità del progetto e l'impatto dei risultati nel contesto scientifico e sociale.",
      ],
    },
    website: "https://www.studiorubino.com/",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/RubinoIntellectualProperty" },
        { platform: "instagram", url: "https://www.instagram.com/rubinoip/" },
        { platform: "linkedin", url: "https://www.linkedin.com/company/rubinoip/" },
    ],
    btnLabel: "Visita il sito",
    color: "bg-lm-bg-blue dark:bg-dm-bg-blue",
    accent: "text-lm-blue dark:text-dm-blue",
    accentBar: "bg-logo-blue",
    btnColor: "blue",
  },
  {
    name: "Ober SRL",
    role: "Partner tecnico",
    logo: "/logos/ober_logo.png",
    description:
      "OBER è una società che opera nel campo dell'ingegneria e della consulenza tecnologica, affiancando imprese e organizzazioni nello sviluppo di soluzioni innovative e sostenibili. Grazie a un approccio multidisciplinare, supporta l'intero ciclo di vita del prodotto, dalla progettazione alla prototipazione fino alla produzione industriale. L'integrazione tra competenze ingegneristiche, tecnologie avanzate e capacità di industrializzazione consente di trasformare esigenze progettuali complesse in soluzioni affidabili ed efficienti.",
    contribution: {
      paragraphs: [
        "OBER si occupa della realizzazione del prototipo funzionante del gioco multisensoriale, trasformando le soluzioni progettuali in un sistema concreto, integrato e pienamente operativo.",
        "L'azienda segue l'implementazione tecnica e l'integrazione delle diverse componenti, accompagnando il processo di sviluppo fino alla verifica e alla messa a punto del prototipo.",
        "Analizza, in collaborazione con l'Università della Calabria, le possibili applicazioni dell'Intelligenza Artificiale e del Machine Learning, esplorando le potenzialità di questi strumenti di rendere più efficace e adattivo il gioco, sviluppando soluzioni capaci di personalizzare l'esperienza ludica in base alle esigenze dei bambini nello spettro autistico.",
      ],
    },
    website: "https://www.obersrl.it/it",
    btnLabel: "Visita il sito",
    color: "bg-lm-bg-yellow dark:bg-dm-bg-yellow",
    accent: "text-lm-yellow dark:text-dm-yellow",
    accentBar: "bg-logo-yellow",
    btnColor: "yellow",
  },
  {
    name: "UNICAL – DiMEG",
    role: "Partner accademico · Ingegneria",
    logo: "/logos/unical.svg",
    description:
      "Il Dipartimento di Ingegneria Meccanica, Energetica e Gestionale (DiMEG) dell'Università della Calabria svolge attività di ricerca avanzata da oltre 20 anni nei settori della realtà virtuale, aumentata e mista, del rilievo 3D e della diagnostica non invasiva. Grazie a laboratori e infrastrutture di prototipazione avanzata, il DIMEG sviluppa soluzioni tecnologiche innovative che spaziano dalla conservazione dei beni culturali alla progettazione di sistemi e prodotti industriali complessi.",
    contribution: {
      paragraphs: [
        "Il DiMEG, in sinergia con l'area psico-pedagogica, contribuisce come partner tecnologico e ingegneristico, occupandosi della progettazione dell'architettura hardware e software del sistema di gioco multisensoriale, e supporta la realizzazione del prodotto finale attraverso proprie tecnologie di Additive Manufacturing e prototipazione elettronica.",
        "Il Dipartimento sviluppa soluzioni per l'integrazione tra la tavola di gioco tangibile e la piattaforma digitale, con l'obiettivo di creare un'esperienza capace di unire in modo fluido dimensione fisica e interazione virtuale.",
        "Lavora allo sviluppo di algoritmi di Intelligenza Artificiale e Machine Learning per animare personaggi virtuali (NPC) e per adattare dinamicamente la difficoltà del gioco alle esigenze e alle capacità dei bambini.",
      ],
    },
    website: "https://dimeg.unical.it/",
    socials: [ { platform: "facebook", url: "https://www.facebook.com/DimegUnical" },
        { platform: "instagram", url: "https://www.instagram.com/dimeg_unical/" },],
    btnLabel: "Visita il dipartimento",
    color: "bg-lm-bg-green dark:bg-dm-bg-green",
    accent: "text-lm-green dark:text-dm-green",
    accentBar: "bg-logo-green",
    btnColor: "green",
  },
  {
    name: "UNICAL – DiCES",
    role: "Partner accademico · Scienze psico-pedagogiche",
    logo: "/logos/unical.svg",
    description:
      "Il Dipartimento di Culture, Educazione e Società (DiCES) dell'Università della Calabria promuove attività di ricerca e formazione nei campi delle scienze psicologiche, educative e sociali con un approccio interdisciplinare. Tra le principali linee di studio rientrano gli interventi psico-pedagogici nei disturbi del neurosviluppo e nelle disabilità intellettive, con particolare attenzione ai processi di inclusione, partecipazione sociale e miglioramento della qualità della vita.",
    contribution: {
      paragraphs: [
        "All'interno del progetto GAIA, il DiCES contribuisce come partner scientifico nell'ambito psico-pedagogico, supportando la definizione dei requisiti educativi e dei criteri di qualità dell'esperienza di gioco e lavorando in sinergia con l'area tecnologico-ingegneristica.",
        "Il Dipartimento collabora alla progettazione delle attività di sperimentazione con gli utenti finali, curando l'impostazione metodologica delle prove, la raccolta e l'interpretazione dei dati osservativi e la valutazione dell'efficacia e dell'usabilità del sistema.",
        "Fornisce ai partner consulenza sugli aspetti psico-pedagogici e supporto nella definizione di indicatori di valutazione e nel coinvolgimento degli stakeholder, assicurando che il gioco risponda in modo inclusivo ai bisogni dei bambini e delle loro famiglie.",
      ],
    },
    website: "https://www.dices.unical.it",
    socials: [
         { platform: "facebook", url: "https://www.facebook.com/profile.php?id=61587552583257" },
        { platform: "instagram", url: "https://www.instagram.com/dices_unical/" },
    ],
    btnLabel: "Visita il dipartimento",
    color: "bg-lm-bg-green dark:bg-dm-bg-green",
    accent: "text-lm-green dark:text-dm-green",
    accentBar: "bg-logo-green",
    btnColor: "green",
  },
]