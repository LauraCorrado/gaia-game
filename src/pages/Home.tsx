import Hero from '../components/ui/Hero'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { FlaskConical, Heart, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero
        badge="Progetto di ricerca · Regione Calabria"
        title="Giochi Accessibili ed Inclusivi per bambini con Autismo"
        subtitle="GAIA sviluppa giochi multisensoriali interattivi per bambini nello spettro autistico, basati sul metodo AIVES e co-progettati con famiglie ed educatori."
        accentColor="blue"
        actions={[
          { label: 'Scopri il progetto', href: '/scopri-gaia', variant: 'primary' },
          { label: 'Contattaci', href: '/contatti', variant: 'secondary' },
        ]}
      />

      <section aria-labelledby="obiettivi-title" className="max-w-6xl mx-auto px-4 py-16">
        <h2
          id="obiettivi-title"
          className="text-lm-text-primary dark:text-dm-text-primary mb-8"
        >
          Il progetto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card color="blue" title="Ricerca" icon={FlaskConical} as="article">
            Approccio scientifico rigoroso per lo sviluppo di metodologie
            inclusive basate sull'evidenza.
          </Card>
          <Card color="pink" title="Inclusione" icon={Heart} as="article">
            Giochi progettati con e per bambini con autismo, famiglie
            ed educatori attraverso il metodo co-design.
          </Card>
          <Card color="green" title="Innovazione" icon={Lightbulb} as="article">
            Tecnologie adattive e intelligenza artificiale al servizio
            dell'accessibilità e dell'apprendimento.
          </Card>
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
            { label: 'TEA SRL', color: 'pink' },
            { label: 'Studio Rubino SRL', color: 'blue' },
            { label: 'Ober SRL', color: 'yellow' },
            { label: 'UNICAL', color: 'green' },
          ].map(({ label, color }) => (
            <Badge
              key={label}
              label={label}
              color={color as 'pink' | 'blue' | 'yellow' | 'green'}
              size="md"
            />
          ))}
        </div>
      </section>
    </>
  )
}