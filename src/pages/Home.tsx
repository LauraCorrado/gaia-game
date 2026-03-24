import Hero from "../components/ui/Hero";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import heroHome from "../assets/img/hero/home_hero.webp";
import { FlaskConical, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        badge="GAIA · Homepage"
        title="Benvenuti in GAIA!"
        subtitle="Giochi Accessibili e Inclusivi per bambini con Autismo: un'esperienza multisensoriale inclusiva pensata per stimolare l'apprendimento, favorire l'interazione e valorizzare ogni unicità"
        image={heroHome}
        accentColor="blue"
        actions={[
          { label: "Il progetto", href: "/scopri-gaia" },
          { label: "Contattaci", href: "/contatti", variant: "secondary" },
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 py-24 overflow-visible">
        <div className="flex items-end justify-start gap-6 mb-16">
          <div className="pb-2">
            <h2 className="text-lm-text-primary dark:text-dm-text-primary">
              In breve
            </h2>
            <p className="mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores ad exercitationem pariatur sapiente eum sit praesentium error sunt dolorem dolor voluptatum ut illo laborum.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
          <div>
            <Card color="pink" title="Lorem ipsum" icon={Heart} as="article">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card>
          </div>

          <div className="md:mt-10">
            <Card
              color="green"
              title="Lorem ipsum"
              icon={FlaskConical}
              as="article"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card>
          </div>

          <div className="md:mt-20">
            <Card
              color="yellow"
              title="Lorem ipsum"
              icon={Lightbulb}
              as="article"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

        <section className="bg-lm-bg-secondary dark:bg-dm-bg-secondary pt-20 pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end gap-6 mb-12">
              <div className="pb-2">
                <h2 className="text-lm-text-primary dark:text-dm-text-primary">
                  Conosci la squadra
                </h2>
                <p className="mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, fugiat? Consequatur dolore sapiente, incidunt odio quibusdam..
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-64 rounded-2xl bg-lm-bg-primary dark:bg-dm-bg-primary order-last md:order-first" />

              <div className="md:mt-16">
                <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic quam nemo harum amet perspiciatis fuga rerum itaque provident ab molestias suscipit illum temporibus quia accusamus fugiat, dicta at veritatis.
                </p>
                <a href="/team">
                  <Button color="blue">Conosci il team</Button>
                </a>
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

      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="relative rounded-2xl overflow-hidden bg-lm-bg-secondary dark:bg-dm-bg-secondary">
          <div
            className="absolute left-0 inset-y-0 w-2 bg-lm-green dark:bg-dm-green"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row items-center gap-8 px-10 py-12">
            <div className="md:-mt-4 flex-1">
              <h2 className="text-lm-text-primary dark:text-dm-text-primary">
                Rimani aggiornato
              </h2>
              <p className="mt-2 text-lm-text-secondary dark:text-dm-text-secondary max-w-lg">
                Segui aggiornamenti, attività e risultati del progetto.
              </p>
            </div>

            <div className="md:self-end shrink-0">
              <a href="/eventi-news">
                <Button color="green">Scopri le ultime news</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex items-center justify-center gap-4 mb-10"
            aria-hidden="true"
          >
            <div className="h-px w-xl bg-lm-pink dark:bg-dm-pink" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-end pt-10">
            <h2 className="text-lm-text-primary dark:text-dm-text-primary text-5xl leading-tight">
              Vuoi saperne
              <br />
              di più?
            </h2>

            <div className="md:pb-2">
              <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-6">
                Siamo disponibili per informazioni, collaborazioni e
                approfondimenti sul progetto.
              </p>
              <a href="/contatti">
                <Button color="pink">Contattaci</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
