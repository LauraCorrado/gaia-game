import Hero from "../components/ui/Hero";
import heroContatti from "../assets/img/hero/contatti_hero.webp";

export default function Contatti() {
  return (
    <>
        <Hero
  badge="GAIA · Contatti"
  title="Restiamo in contatto"
  subtitle="Hai domande o vuoi collaborare con noi? Contattaci!"
  image={heroContatti}
  accentColor="blue"
/>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="contatti-title" className="mb-12">
          <h1
            id="contatti-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            Contattaci
          </h1>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Il form è gestito tramite <strong>EmailJS</strong>.
          </p>
        </section>

        <section aria-labelledby="form-title" className="max-w-xl">
          <h2
            id="form-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-6"
          >
            Invia un messaggio
          </h2>
          <div className="flex flex-col gap-4">
            <div
              className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded h-10"
              aria-hidden="true"
            />
            <div
              className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded h-10"
              aria-hidden="true"
            />
            <div
              className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded h-32"
              aria-hidden="true"
            />
            <div
              className="bg-lm-blue dark:bg-dm-blue rounded h-10 w-32"
              aria-hidden="true"
            />
          </div>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-sm mt-4">
            Form con EmailJS da implementare...
          </p>
        </section>
      </div>
    </>
  );
}
