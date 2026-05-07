import Hero from "../components/ui/Hero";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import heroProgetto from "../assets/img/hero/scoprigaia_hero.webp";
import scoprigaia1 from "../assets/img/detailsPage/scoprigaia1.png";
import scoprigaia2 from "../assets/img/detailsPage/scoprigaia2.png";
import scoprigaia3 from "../assets/img/detailsPage/scoprigaia3.png";
import scoprigaia4 from "../assets/img/detailsPage/scoprigaia4.png";
import scoprigaia5 from "../assets/img/detailsPage/scoprigaia5.png";
import scoprigaia6 from "../assets/img/detailsPage/scoprigaia6.png";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { LuRainbow } from "react-icons/lu";
import { GiThreeFriends } from "react-icons/gi";
import { FaKeyboard, FaHandshake } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { Brain, Users, Workflow } from "lucide-react";

export default function ScopriGaia() {
  return (
    <>
      <Hero
        badge="GAIA · Scopri GAIA"
        title="Il progetto GAIA"
        subtitle="GAIA nasce dalla volontà di progettare giochi multisensoriali accessibili per bambini nello spettro autistico, unendo ricerca scientifica, tecnologie tangibili, progettazione educativa e attenzione alla sfera relazionale."
        image={heroProgetto}
        accentColor="pink"
      />

      {/* IL PUNTO DI PARTENZA */}
      <section
        aria-labelledby="punto-partenza-title"
        className="bg-lm-bg-primary dark:bg-dm-bg-primary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
                <HiMiniRocketLaunch className="w-4 h-4" />
                Il punto di partenza
              </span>

              <h2
                id="punto-partenza-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Una domanda sul{" "}
                <span className="text-lm-pink dark:text-dm-pink">
                  valore del gioco
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
                <p>
                  Il progetto parte da una domanda semplice ma centrale:{" "}
                  <strong>
                    è possibile fornire supporto allo sviluppo dell'interazione
                    sociale nei bambini nello spettro autistico attraverso il
                    gioco?
                  </strong>
                </p>

                <p>
                  GAIA si fonda su una precisa idea di gioco: uno{" "}
                  <strong>
                    spazio di esplorazione, relazione e partecipazione
                  </strong>
                  , da non ridurre semplicemente a mera attività educativa o
                  terapeutica.
                </p>
              </div>
            </div>

            <img
              src={scoprigaia1}
              alt="..."
              className="
    w-full rounded-2xl object-cover
    dark:invert
    dark:hue-rotate-180
    dark:brightness-90
    dark:contrast-90
    dark:saturate-75
  "
            />
          </div>

          <div className="mt-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div
              className="
      order-1 md:order-2
      rounded-2xl bg-lm-pink/10 dark:bg-dm-pink/10 p-8
    "
            >
              <p className="text-lm-text-secondary dark:text-dm-text-secondary">
                Il gioco è lo spazio in cui il bambino può conoscere il mondo,
                sperimentare, esprimere preferenze, comunicare intenzioni e
                costruire legami con le persone che lo accompagnano.
              </p>

              <p className="mt-5 text-lm-text-secondary dark:text-dm-text-secondary">
                Per questo GAIA non nasce per “correggere” i bambini, né per
                imporre loro un unico modo di giocare. Al contrario, il progetto
                vuole costruire un{" "}
                <strong>
                  ambiente capace di riconoscere e valorizzare modalità diverse
                  di partecipazione
                </strong>
                : verbali e non verbali, immediate o più distese, esplicite o
                minime, ma comunque significative quando sono inserite nel
                contesto del gioco.
              </p>
            </div>

            <img
              src={scoprigaia2}
              alt="Due bambini giocano insieme all'aperto con dinosauri e razzi giocattolo"
              className="
      order-2 md:order-1
      w-full rounded-2xl object-cover
      dark:invert
      dark:hue-rotate-180
      dark:brightness-90
      dark:contrast-90
      dark:saturate-75
    "
            />
          </div>
        </div>
      </section>

      {/* L'OBIETTIVO */}
      <section
        aria-labelledby="obiettivo-title"
        className="bg-lm-bg-secondary dark:bg-dm-bg-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-lm-blue/10 dark:bg-dm-blue/10 px-4 py-2 text-sm font-medium text-lm-blue dark:text-dm-blue">
              <GiThreeFriends className="w-4 h-4" />
              L’obiettivo
            </span>

            <h2
              id="obiettivo-title"
              className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
            >
              Il gioco come{" "}
              <span className="text-lm-blue dark:text-dm-blue">
                terreno di interazione sociale
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_0.9fr] gap-12 items-start">
            <div className="space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
              <p>
                Nell'età evolutiva, il gioco sostiene lo sviluppo sociale,
                comunicativo, cognitivo e relazionale. Attraverso il gioco, il
                bambino esplora, prova, ripete, immagina, collabora, osserva
                l'altro e sperimenta forme diverse di partecipazione.
              </p>

              <p>
                Nel caso dei bambini nello spettro autistico, questa dimensione
                mantiene lo stesso valore. Il gioco può offrire occasioni per
                <strong>
                  sostenere la motivazione, favorire l’interazione sociale e
                  stimolare competenze legate alla partecipazione condivisa
                </strong>
                , come l’attenzione congiunta, la capacità di turnazione e
                l’iniziativa comunicativa.
              </p>

              <p>
                Pertanto, l’obiettivo di GAIA è favorire miglioramenti
                significativi in costrutti legati alle abilità sociali e alla
                partecipazione. Il gioco resta prima di tutto un’esperienza:{" "}
                <strong>un modo per incontrare l’altro</strong>, condividere
                un’azione e partecipare a un momento educativo.
              </p>
            </div>

            <img
              src={scoprigaia3}
              alt="..."
              className="
    w-full rounded-2xl object-cover
    dark:invert
    dark:hue-rotate-180
    dark:brightness-90
    dark:contrast-90
    dark:saturate-75
  "
            />
          </div>

          <div className="mt-12 rounded-2xl bg-lm-blue/10 dark:bg-dm-blue/10 p-8">
            <p className="text-lm-text-secondary dark:text-dm-text-secondary">
              Anche una risposta non verbale può essere una forma di
              partecipazione: uno sguardo, una pausa, un gesto, un movimento
              verso un oggetto, una scelta o una piccola iniziativa possono
              diventare elementi importanti dell’interazione.
            </p>
          </div>
        </div>
      </section>

      {/* ADATTIVITÀ */}
      <section
        aria-labelledby="adattivita-title"
        className="bg-lm-bg-primary dark:bg-dm-bg-primary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-yellow/10 dark:bg-dm-yellow/10 px-4 py-2 text-sm font-medium text-lm-yellow dark:text-dm-yellow">
                <LuRainbow className="w-4 h-4" />
                Adattività
              </span>

              <h2
                id="adattivita-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Un arcobaleno di{" "}
                <span className="text-lm-yellow dark:text-dm-yellow">
                  possibilità
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
                <p>
                  Lo spettro autistico comprende profili molto diversi tra loro.
                  Ogni bambino può avere caratteristiche, preferenze,
                  sensibilità, tempi di risposta e livelli di supporto
                  differenti. Per questo non esiste un unico gioco capace di
                  rispondere in modo uguale a tutte le necessità.
                </p>

                <p>
                  GAIA affronta questa complessità attraverso una{" "}
                  <strong>progettazione adattiva</strong>. Il gioco viene
                  pensato come un sistema flessibile, capace di modulare
                  stimoli, tempi e difficoltà e di evitare feedback
                  sovraccaricanti: il tutto in base alle risposte del bambino e
                  al contesto di utilizzo.
                </p>
              </div>
            </div>

            <img
              src={scoprigaia4}
              alt="..."
              className="
    w-full rounded-2xl object-cover
    dark:invert
    dark:hue-rotate-180
    dark:brightness-90
    dark:contrast-90
    dark:saturate-75
  "
            />
          </div>

          <div className="mt-14">
            <p className="text-lm-text-primary dark:text-dm-text-primary font-medium">
              Questa direzione sarà sostenuta da due elementi fondamentali:
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <Card
                color="blue"
                title="Personalizzazione dell’esperienza"
                icon={Brain}
                as="article"
              >
                Lo studio del possibile contributo dell’intelligenza artificiale
                nella modulazione dell’esperienza di gioco.
              </Card>

              <Card
                color="yellow"
                title="Ascolto e raccolta dati"
                icon={Users}
                as="article"
              >
                La raccolta di dati attraverso indagini statistiche rivolte a
                esperti e famiglie.
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* IL GIOCO COLLABORATIVO */}
      <section
        aria-labelledby="gioco-collaborativo-title"
        className="bg-lm-bg-secondary dark:bg-dm-bg-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-lm-green/10 dark:bg-dm-green/10 px-4 py-2 text-sm font-medium text-lm-green dark:text-dm-green">
              <FaHandshake className="w-4 h-4" />
              Il gioco collaborativo
            </span>

            <h2
              id="gioco-collaborativo-title"
              className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
            >
              Che{" "}
              <span className="text-lm-green dark:text-dm-green">
                tipo di gioco
              </span>{" "}
              sarà GAIA
            </h2>
          </div>

          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <div className="space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
              <p>
                GAIA si configura come un{" "}
                <strong>
                  <em>serious game</em> multisensoriale
                </strong>
                : un gioco progettato per essere coinvolgente e motivante, pur
                essendo capace di sostenere apprendimenti e forme di
                partecipazione condivisa.
              </p>

              <p>
                Il principio è quello del <em>learning by doing</em>: imparare
                facendo, esplorando, provando e interagendo con il sistema di
                gioco. L'esperienza combina elementi fisici, materiali,
                sensoriali e tecnologici, così da proporre un'interazione che
                non passi soltanto dallo schermo, ma anche dal corpo, dal tatto,
                dal movimento, dall'ascolto e dalla relazione con l'altro.
              </p>

              <p>
                Il gioco prevede il coinvolgimento di famiglie, educatori,
                caregiver o professionisti come figure di supporto. Il loro
                ruolo non sarà dirigenziale, bensì di accompagnamento e di
                sostegno all'iniziativa del bambino.
              </p>

              <p>
                Il gioco potrà inoltre aprire a{" "}
                <strong>forme di partecipazione tra pari</strong>, favorendo
                occasioni di interazione tra bambini in un contesto accessibile
                e mediato.
              </p>
            </div>

            <img
              src={scoprigaia5}
              alt="..."
              className="
    w-full rounded-2xl object-cover
    dark:invert
    dark:hue-rotate-180
    dark:brightness-90
    dark:contrast-90
    dark:saturate-75
  "
            />
          </div>

          <figure className="mt-12 rounded-2xl bg-lm-green/10 dark:bg-dm-green/10 p-8">
            <blockquote className="text-lm-text-primary dark:text-dm-text-primary text-lg leading-relaxed">
              “Il gioco collaborativo, in cui i bambini si impegnano insieme
              verso obiettivi condivisi, offre prospettive promettenti per
              migliorare le abilità comunicative nei bambini autistici.”
            </blockquote>

            <figcaption className="mt-4 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
              S. Khatab et al.,{" "}
              <em>
                Collaborative play for autistic children: A systematic
                literature review
              </em>
              , Entertainment Computing, Vol. 50, 2024, p. 1.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TECNOLOGIA E MULTISENSORIALITÀ */}
      <section
        aria-labelledby="tecnologia-title"
        className="bg-lm-bg-primary dark:bg-dm-bg-primary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
                <FaKeyboard className="w-4 h-4" />
                Tecnologia e multisensorialità
              </span>

              <h2
                id="tecnologia-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Tecnologia al servizio della{" "}
                <span className="text-lm-pink dark:text-dm-pink">
                  relazione
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
              <p>
                La tecnologia in GAIA non sostituisce il partner di gioco: non
                prende il posto del caregiver, dell’educatore, del
                professionista o del pari. Piuttosto, diventa uno strumento per
                rendere l’<strong>esperienza coerente e prevedibile</strong>.
              </p>

              <p>
                Questo aspetto può aiutare i bambini a comprendere meglio il
                contesto di gioco e a partecipare con maggiore sicurezza,
                stimolando anche l’autonomia nell’azione.
              </p>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
            <img
              src={scoprigaia6}
              alt="..."
              className="
    w-full rounded-2xl object-cover
    dark:invert
    dark:hue-rotate-180
    dark:brightness-90
    dark:contrast-90
    dark:saturate-75
  "
            />

            <div className="rounded-2xl bg-lm-bg-pink dark:bg-dm-bg-pink p-8">
              <p className="text-lm-text-secondary dark:text-dm-text-secondary">
                Inoltre, GAIA valorizza le{" "}
                <strong>interfacce tangibili e multisensoriali</strong>.
                Materiali, texture, suoni, feedback e dispositivi digitali,
                purché non sovrastimolanti, possono lavorare insieme per creare
                un ambiente in cui il bambino interagisce anche con un sistema
                concreto, manipolabile, condivisibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE SUL LINGUAGGIO */}
      <section
        aria-labelledby="linguaggio-title"
        className="bg-lm-bg-secondary dark:bg-dm-bg-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <aside className="rounded-3xl bg-lm-bg-primary dark:bg-dm-bg-primary/50 p-8 lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-blue/10 dark:bg-dm-blue/10 px-4 py-2 text-sm font-medium text-lm-blue dark:text-dm-blue">
                <IoAccessibility className="w-4 h-4" />
                Linguaggio e inclusione
              </span>

              <h2
                id="linguaggio-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Note sul{" "}
                <span className="text-lm-blue dark:text-dm-blue">
                  linguaggio
                </span>
              </h2>

              <p className="mt-5 text-lm-text-secondary dark:text-dm-text-secondary">
                GAIA dedica particolare attenzione al linguaggio utilizzato per
                parlare di autismo.
              </p>
            </aside>

            <div className="space-y-12">
              <div className="rounded-3xl bg-lm-bg-primary dark:bg-dm-bg-primary/50 p-8 border border-lm-blue dark:border-dm-blue">
                <div className="space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
                  <p>
                    Nella comunità autistica esistono posizioni diverse sull’uso
                    di espressioni come “<strong>persona autistica</strong>” -{" "}
                    <em>identity-first language</em> - e “
                    <strong>persona con autismo</strong>” -{" "}
                    <em>person-first language</em>.
                  </p>

                  <p>
                    Per questo, GAIA sceglie di adottare una terminologia il più
                    possibile rispettosa, chiara e neutra, alternando quando
                    necessario formule diverse e privilegiando espressioni come
                    “<strong>bambini nello spettro autistico</strong>”.
                  </p>

                  <p>
                    Questa scelta non vuole cancellare le preferenze
                    individuali, né imporre una formula unica. Al contrario,
                    nasce dalla consapevolezza che il linguaggio è forma di
                    pensiero e non può essere dato per scontato nell’ambito
                    dell’accessibilità.
                  </p>

                  <p>
                    Le parole possono includere, ma possono anche generare
                    distanza. Per questo{" "}
                    <strong>GAIA rimane aperta all’ascolto</strong>: eventuali
                    osservazioni sulla terminologia saranno accolte con
                    attenzione e potranno portare alla revisione dei testi.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lm-blue dark:text-dm-blue">
                  Alcuni spunti per praticare un linguaggio inclusivo
                </h3>

                <div className="mt-6 space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
                  <p>
                    Nel parlare di autismo, GAIA evita espressioni che
                    suggeriscono una gerarchia di valore tra persone. Termini
                    come “alto funzionamento” e “basso funzionamento” rischiano
                    di semplificare eccessivamente profili complessi e di
                    produrre una distinzione implicita tra forme di autismo
                    considerate più o meno accettabili. È preferibile parlare di{" "}
                    <strong>livelli di supporto</strong>{" "}
                    <span className="text-sm">
                      (cfr. American Psychiatric Association,{" "}
                      <em>
                        Desk Reference to the Diagnostic Criteria From DSM-5-TR®
                      </em>
                      , American Psychiatric Association Publishing, Washington
                      DC, 2013, p. 30)
                    </span>
                    .
                  </p>

                  <p>
                    GAIA evita di usare il termine “normale” per indicare le
                    persone non autistiche. Questa parola, anche quando
                    utilizzata in modo involontario, suggerisce implicitamente
                    una “norma”: un modello di comportamento atteso, considerato
                    corretto o desiderabile, che trasforma la differenza in
                    deviazione, mancanza o anomalia.
                  </p>

                  <p>
                    Per questo GAIA evita di contrapporre persone autistiche e
                    persone “normali”, preferendo formule più precise e
                    rispettose come <strong>persone non autistiche</strong> o{" "}
                    <strong>persone neurotipiche</strong>.
                  </p>

                  <p>
                    GAIA preferisce inoltre parlare di{" "}
                    <strong>
                      tratti, caratteristiche o modi di funzionamento
                    </strong>
                    , piuttosto che di “sintomi” dell’autismo, quando non si fa
                    riferimento a specifiche condizioni mediche o psicologiche
                    in comorbidità. L’autismo non è una malattia da curare, ma
                    una condizione del neurosviluppo che può comportare sfide,
                    bisogni di supporto e, allo stesso tempo, modalità
                    specifiche di percepire, interagire e costruire significato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lm-bg-primary dark:bg-dm-bg-primary py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-lm-bg-secondary dark:bg-dm-bg-secondary p-10 md:p-12 shadow-sm">
            <div
              className="absolute left-0 inset-y-0 w-2 bg-lm-yellow dark:bg-dm-yellow"
              aria-hidden="true"
            />

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-lm-yellow/10 dark:bg-dm-yellow/10 px-4 py-2 text-sm font-medium text-lm-yellow dark:text-dm-yellow">
                  <Workflow className="w-4 h-4" />
                  Vuoi seguire il progetto?
                </span>

                <h2 className="mt-6 text-lm-text-primary dark:text-dm-text-primary">
                  Scopri aggiornamenti, eventi e risultati
                </h2>

                <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary max-w-2xl">
                  Il progetto evolve attraverso attività di ricerca,
                  sperimentazione, eventi e momenti di disseminazione.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="/eventi-news">
                  <Button color="yellow">Eventi e news</Button>
                </a>

                <a href="/contatti">
                  <Button color="yellow" variant="secondary">
                    Contattaci
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}