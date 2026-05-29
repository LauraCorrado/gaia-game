import Hero from "../components/ui/Hero";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import heroHome from "../assets/img/hero/home_hero.webp";
import whyGaiaIMG from "../assets/img/homepage/home1.webp";
import aivesIMG from "../assets/img/homepage/home2.webp";
import teamIMG from "../assets/img/homepage/home3.webp";
import { MdFamilyRestroom, MdTexture } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { FaBriefcase, FaNewspaper } from "react-icons/fa";
import { FaPeopleGroup, FaPuzzlePiece } from "react-icons/fa6";
import {
  Brain,
  PersonStanding,
  Ear,
  Joystick,
  Gamepad2,
  HandHeart,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        badge="GAIA · Homepage"
        title="Benvenuti in GAIA"
        subtitle="Vivi un'esperienza multisensoriale inclusiva, pensata per stimolare l'apprendimento, favorire l'interazione e valorizzare ogni unicità"
        image={heroHome}
        accentColor="blue"
        actions={[
          { label: "Il progetto", href: "/scopri-gaia" },
          { label: "Contattaci", href: "/contatti", variant: "secondary" },
        ]}
      />

      {/* BENVENUTI IN GAIA */}
      <section
        aria-labelledby="welcome-gaia-title"
        className="bg-lm-bg-primary dark:bg-dm-bg-primary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h2
              id="welcome-gaia-title"
              className="text-lm-text-primary dark:text-dm-text-primary"
            >
              Giochi{" "}
              <span className="text-lm-blue dark:text-dm-blue">
                Accessibili
              </span>{" "}
              e{" "}
              <span className="text-lm-blue dark:text-dm-blue">Inclusivi</span>{" "}
              per bambini con ASD
            </h2>
            <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary">
              Il progetto GAIA nasce con l'obiettivo di{" "}
              <strong>creare giochi inclusivi e multisensoriali</strong> pensati
              per bambini con Disturbo dello Spettro Autistico, offrendo
              esperienze accessibili, stimolanti e condivise.
            </p>
            <div className="mt-8">
              <Button as="link" to="/scopri-gaia" color="blue">
                Scopri di più
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PERCHÉ GAIA */}
      <section
        aria-labelledby="why-gaia-title"
        className="bg-lm-bg-secondary dark:bg-dm-bg-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={whyGaiaIMG}
                alt="Illustrazione di un bambino che sale su dei cubi alfabetici"
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
            <div className="order-1 md:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-yellow/10 dark:bg-dm-yellow/10 px-4 py-2 text-sm font-medium text-lm-yellow dark:text-dm-yellow">
                <Lightbulb aria-hidden="true" className="w-4 h-4" />
                Perché GAIA
              </span>
              <h2
                id="why-gaia-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Il{" "}
                <span className="text-lm-yellow dark:text-dm-yellow">
                  gioco
                </span>{" "}
                come strumento di crescita
              </h2>
              <div className="mt-6 space-y-5 text-lm-text-secondary dark:text-dm-text-secondary">
                <p>
                  L’attività ludica è fondamentale nello{" "}
                  <strong>sviluppo cognitivo, motorio e sociale</strong> dei
                  bambini. Per i bambini autistici, tuttavia, il gioco può
                  risultare complesso e poco accessibile.
                </p>
                <p>
                  GAIA nasce per trasformare il gioco in uno spazio inclusivo,
                  stimolante e condiviso, capace di favorire l'autonomia e
                  l'interazione sociale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section
        aria-labelledby="doing-title"
        className="max-w-6xl mx-auto px-4 py-24 overflow-visible"
      >
        <div className="flex items-end justify-start gap-6 mb-16">
          <div className="pb-2 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
              <Gamepad2 aria-hidden="true" className="w-4 h-4" />
              Cosa facciamo
            </span>

            <h2
              id="doing-title"
              className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
            >
              Creiamo{" "}
              <span className="text-lm-pink dark:text-dm-pink">
                spazi di relazione
              </span>{" "}
              attraverso il gioco
            </h2>

            <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary">
              Con GAIA, il gioco diventa un’opportunità per stimolare la{" "}
              <strong>creatività</strong>, favorire le{" "}
              <strong>interazioni sociali</strong> e promuovere l’
              <strong>autonomia</strong> dei bambini con esigenze speciali.
            </p>

            <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary">
              Attraverso strategie di <em>gamification</em> ed{" "}
              <em>edutainment</em>, le esperienze coinvolgono attivamente il
              bambino, rendendo l'apprendimento più accessibile e inclusivo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
          <div>
            <Card
              color="pink"
              title="Sensorialità diversificata"
              icon={Sparkles}
              as="article"
              className="tracking-wide"
            >
              Il gioco propone stimoli multisensoriali calibrati e non
              sovraccaricanti, attraverso interfacce tangibili e materiali
              diversi, con attenzione al benessere del bambino.
            </Card>
          </div>

          <div className="md:mt-10">
            <Card
              color="green"
              title="Attività adattive"
              icon={Brain}
              as="article"
            >
              Le esperienze si adattano in modo progressivo alle esigenze del
              singolo bambino, anche grazie al contributo dell'Intelligenza
              Artificiale.
            </Card>
          </div>

          <div className="md:mt-20">
            <Card
              color="yellow"
              title="Relazione"
              icon={HandHeart}
              as="article"
            >
              Le attività sono pensate per il gioco condiviso tra bambino e
              caregiver, combinando divertimento, apprendimento e sviluppo
              socio-emotivo.
            </Card>
          </div>
        </div>
      </section>

      <div className="relative mt-16">
        <div
          className="absolute inset-x-0 top-0 h-16 bg-lm-bg-secondary dark:bg-dm-bg-secondary"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />

        <section
          aria-labelledby="aives-link-title"
          className="bg-lm-bg-secondary dark:bg-dm-bg-secondary py-24"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-lm-green/10 dark:bg-dm-green/10 px-4 py-2 text-sm font-medium text-lm-green dark:text-dm-green">
                  <FaPuzzlePiece aria-hidden="true" className="w-4 h-4" />
                  Il metodo AIVES®
                </span>

                <h2
                  id="aives-link-title"
                  className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
                >
                  Dall'
                  <span className="text-lm-green dark:text-dm-green">
                    arte
                  </span>{" "}
                  al gioco
                </h2>

                <img
                  src={aivesIMG}
                  alt="Illustrazione di una donna che tocca con la mano un quadro multisensoriale AIVES, rappresentante 'I Girasoli' di Van Gogh"
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

              <div className="rounded-2xl bg-lm-bg-primary dark:bg-dm-bg-primary/50 p-8 shadow-sm">
                <p className="text-lm-text-secondary dark:text-dm-text-secondary">
                  GAIA si basa sull'evoluzione di{" "}
                  <a
                    href="https://www.aives.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita il sito AIVES. Si apre in una nuova scheda"
                  >
                    AIVES®
                  </a>
                  , il sistema multisensoriale di fruizione delle opere d'arte
                  per persone con disabilità visive, già premiato con brevetti
                  europei, internazionali e nazionali. Da AIVES®, GAIA riprende i
                  concetti di accessibilità, multisensorialità e
                  multimatericità, portandoli dal mondo dell'arte a quello del
                  gioco.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-lm-green/10 dark:bg-dm-green/10 px-4 py-2 text-sm font-medium text-lm-green dark:text-dm-green">
                    <PersonStanding aria-hidden="true" className="w-4 h-4" />{" "}
                    Accessibilità
                  </span>

                  <span className="inline-flex items-center gap-1  rounded-full bg-lm-yellow/10 dark:bg-dm-yellow/10 px-4 py-2 text-sm font-medium text-lm-yellow dark:text-dm-yellow">
                    <Ear aria-hidden="true" className="w-4 h-4" />{" "}
                    Multisensorialità
                  </span>

                  <span className="inline-flex items-center gap-1  rounded-full bg-lm-blue/10 dark:bg-dm-blue/10 px-4 py-2 text-sm font-medium text-lm-blue dark:text-dm-blue">
                    <MdTexture aria-hidden="true" className="w-4 h-4" />{" "}
                    Multimatericità
                  </span>

                  <span className="inline-flex items-center gap-1  rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
                    <Joystick aria-hidden="true" className="w-4 h-4" />
                    Gioco inclusivo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-lm-bg-primary dark:bg-dm-bg-primary"
          style={{ clipPath: "polygon(0 20%, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* A CHI SI RIVOLGE */}
      <section
        aria-labelledby="users-title"
        className="max-w-6xl mx-auto px-4 py-24"
      >
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-lm-blue/10 dark:bg-dm-blue/10 px-4 py-2 text-sm font-medium text-lm-blue dark:text-dm-blue">
            <Users aria-hidden="true" className="w-4 h-4" />A chi si rivolge
          </span>

          <h2
            id="users-title"
            className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
          >
            Un progetto pensato per{" "}
            <span className="text-lm-blue dark:text-dm-blue">
              bambini, famiglie e professionisti
            </span>
          </h2>

          <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary">
            Attraverso il gioco, GAIA crea occasioni di incontro e
            apprendimento, valorizzando il ruolo di chi accompagna il bambino
            nel suo percorso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-lm-bg-secondary dark:bg-dm-bg-secondary p-6">
            <MdFamilyRestroom
              aria-hidden="true"
              className="w-7 h-7 text-lm-pink dark:text-dm-pink mb-4"
            />
            <h3 className="text-lm-text-primary dark:text-dm-text-primary">
              Bambini e famiglie
            </h3>
            <p className="mt-2 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
              Genitori e caregiver che accompagnano il bambino in esperienze di
              gioco condivise.
            </p>
          </div>

          <div className="rounded-2xl bg-lm-bg-secondary dark:bg-dm-bg-secondary p-6">
            <BsFillMortarboardFill
              aria-hidden="true"
              className="w-7 h-7 text-lm-blue dark:text-dm-blue mb-4"
            />
            <h3 className="text-lm-text-primary dark:text-dm-text-primary">
              Educatori
            </h3>
            <p className="mt-2 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
              Figure educative coinvolte nei percorsi di apprendimento,
              relazione e crescita.
            </p>
          </div>

          <div className="rounded-2xl bg-lm-bg-secondary dark:bg-dm-bg-secondary p-6">
            <FaBriefcase
              aria-hidden="true"
              className="w-7 h-7 text-lm-yellow dark:text-dm-yellow mb-4"
            />
            <h3 className="text-lm-text-primary dark:text-dm-text-primary">
              Professionisti
            </h3>
            <p className="mt-2 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
              Specialisti e ricercatori impegnati nella progettazione di
              esperienze inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* CONOSCI LA SQUADRA */}
      <div className="relative mt-16">
        <div
          className="absolute inset-x-0 top-0 h-16 bg-lm-bg-secondary dark:bg-dm-bg-secondary"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />

        <section
          aria-labelledby="team-title"
          className="bg-lm-bg-secondary dark:bg-dm-bg-secondary py-24"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end gap-6 mb-5">
              <div className="pb-2 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-lm-yellow/10 dark:bg-dm-yellow/10 px-4 py-2 text-sm font-medium text-lm-yellow dark:text-dm-yellow">
                  <FaPeopleGroup aria-hidden="true" className="w-4 h-4" />
                  La nostra squadra
                </span>

                <h2
                  id="team-title"
                  className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
                >
                  Competenze diverse, un{" "}
                  <span className="text-lm-yellow dark:text-dm-yellow">
                    obiettivo comune
                  </span>
                </h2>

                <p className="mt-4 text-lm-text-secondary dark:text-dm-text-secondary">
                  GAIA è reso possibile da un partenariato solido, che unisce
                  ricerca, sviluppo multisensoriale, progettazione tecnologica,
                  comunicazione e validazione scientifica.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:my-5">
                <ul className="space-y-4 text-lm-text-secondary dark:text-dm-text-secondary">
                  <li>
                    <strong className="text-lm-text-primary dark:text-dm-text-primary">
                      TEA S.r.l.
                    </strong>{" "}
                    – Capofila, ricerca e sviluppo multisensoriale.
                  </li>

                  <li>
                    <strong className="text-lm-text-primary dark:text-dm-text-primary">
                      Studio Rubino S.r.l.
                    </strong>{" "}
                    – Comunicazione, proprietà intellettuale e disseminazione.
                  </li>

                  <li>
                    <strong className="text-lm-text-primary dark:text-dm-text-primary">
                      Ober S.r.l.
                    </strong>{" "}
                    – Progettazione e sviluppo tecnologico.
                  </li>

                  <li>
                    <strong className="text-lm-text-primary dark:text-dm-text-primary">
                      Università della Calabria
                    </strong>{" "}
                    – Ricerca scientifica e validazione, con DiMEG e DiCES.
                  </li>
                </ul>

                <p className="mt-6 text-lm-text-secondary dark:text-dm-text-secondary">
                  Grazie a questo lavoro di squadra e al mix di competenze, GAIA
                  crea un <strong>ecosistema di gioco inclusivo</strong> in cui
                  i bambini con diagnosi di ASD possono apprendere, socializzare
                  e divertirsi, abbattendo le barriere e valorizzando le loro
                  capacità.
                </p>

                <div className="mt-8">
                  <Button as="link" to="/team" color="yellow">
                    I partner
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src={teamIMG}
                  alt="Illustrazione del team di GAIA"
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
            </div>
          </div>
        </section>

        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-lm-bg-primary dark:bg-dm-bg-primary"
          style={{ clipPath: "polygon(0 70%, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* RIMANI AGGIORNATO */}
      <section
        aria-labelledby="updates-title"
        className="max-w-6xl mx-auto px-4 py-24"
      >
        <div className="relative rounded-2xl overflow-hidden bg-lm-bg-secondary dark:bg-dm-bg-secondary">
          <div
            className="absolute left-0 inset-y-0 w-2 bg-lm-pink dark:bg-dm-pink"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row items-center gap-8 px-10 py-12">
            <div className="md:-mt-4 flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-lm-pink/10 dark:bg-dm-pink/10 px-4 py-2 text-sm font-medium text-lm-pink dark:text-dm-pink">
                <FaNewspaper aria-hidden="true" className="w-4 h-4" />
                Rimani aggiornato
              </span>

              <h2
                id="updates-title"
                className="mt-6 text-lm-text-primary dark:text-dm-text-primary"
              >
                Segui il{" "}
                <span className="text-lm-pink dark:text-dm-pink">
                  percorso di GAIA
                </span>
              </h2>

              <p className="mt-2 text-lm-text-secondary dark:text-dm-text-secondary max-w-lg">
                Segui aggiornamenti, attività, eventi e risultati del progetto.
              </p>
            </div>

            <div className="md:self-end shrink-0">
              <Button as="link" to="/eventi-news" color="pink">
                Scopri le ultime news
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-home-title"
        className="py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex items-center justify-center gap-4 mb-10"
            aria-hidden="true"
          >
            <div className="h-px w-xl bg-lm-green dark:bg-dm-green" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-end pt-10">
            <h2
              id="contact-home-title"
              className="text-lm-text-primary dark:text-dm-text-primary text-5xl leading-tight"
            >
              Vuoi saperne
              <br />
              di più?
            </h2>

            <div className="md:pb-2">
              <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-6">
                Il team è disponibile per informazioni, collaborazioni e
                approfondimenti sul progetto GAIA.
              </p>

              <Button as="link" to="/contatti" color="green">
                Contattaci
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}