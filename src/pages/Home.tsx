import Hero from "../components/ui/Hero";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { FlaskConical, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        badge="Progetto di ricerca · Regione Calabria"
        title="Giochi Accessibili ed Inclusivi per bambini con Autismo"
        subtitle="GAIA sviluppa giochi multisensoriali interattivi per bambini nello spettro autistico, basati sul metodo AIVES e co-progettati con famiglie ed educatori."
        accentColor="blue"
        actions={[
          {
            label: "Scopri il progetto",
            href: "/scopri-gaia",
            variant: "primary",
          },
          { label: "Contattaci", href: "/contatti", variant: "secondary" },
        ]}
      />

      <section
        aria-labelledby="obiettivi-title"
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2
          id="obiettivi-title"
          className="text-lm-text-primary dark:text-dm-text-primary mb-8"
        >
          Il progetto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card color="blue" title="Ricerca" icon={FlaskConical} as="article">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            commodi totam corporis maiores quam assumenda ad sit consequuntur
            fugit.
          </Card>
          <Card color="pink" title="Inclusione" icon={Heart} as="article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            omnis maxime explicabo, distinctio nostrum inventore asperiores
            sequi ut numquam fugit veritatis excepturi reiciendis odit velit est
            dolorum tempora? Eos, laboriosam.
          </Card>
          <Card color="green" title="Innovazione" icon={Lightbulb} as="article">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem sapiente dolore pariatur impedit eius. Esse quibusdam
            vel magnam voluptatibus alias.
          </Card>
        </div>
      </section>

      <section className="bg-lm-bg-secondary dark:bg-dm-bg-secondary py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2>Vuoi collaborare o saperne di più su GAIA?</h2>
          <p className="mt-4">
            Il progetto coinvolge ricercatori, educatori e famiglie.
          </p>

          <a className="mt-6 inline-block btn-primary">Contattaci</a>
        </div>
      </section>

      <section
        aria-labelledby="partner-title"
        className="max-w-6xl mx-auto px-4 py-16 border-t border-lm-bg-secondary dark:border-dm-bg-secondary"
      >
        <h2
          id="partner-title"
          className="text-lm-text-primary dark:text-dm-text-primary mb-6"
        >
          I partner
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "TEA SRL", color: "pink" },
            { label: "Studio Rubino SRL", color: "blue" },
            { label: "Ober SRL", color: "yellow" },
            { label: "UNICAL", color: "green" },
          ].map(({ label, color }) => (
            <Badge
              key={label}
              label={label}
              color={color as "pink" | "blue" | "yellow" | "green"}
              size="md"
            />
          ))}
        </div>
      </section>
    </>
  );
}
