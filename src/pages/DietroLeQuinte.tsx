import Hero from "../components/ui/Hero";
export default function DietroLeQuinte() {
  return (
    <>
      <Hero
        title="Dietro le quinte"
        subtitle="Per informazioni sul progetto, proposte di collaborazione o contatti con i partner."
        badge="Contatti"
        accentColor="pink"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="dietro-title" className="mb-12">
          <h1
            id="dietro-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            Esplora la galleria
          </h1>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Documentazione visiva e multimediale delle attività progettuali:
            foto, video, materiali tecnici, sessioni di test, ecc.
          </p>
        </section>

        <section aria-label="Galleria multimediale">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-lm-bg-secondary dark:bg-dm-bg-secondary rounded-lg aspect-video flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-lm-text-secondary dark:text-dm-text-secondary text-sm">
                  Immagine placeholder...
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
