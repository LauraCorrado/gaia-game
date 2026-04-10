import Hero from "../components/ui/Hero";
import heroBackstage from "../assets/img/hero/dietrolequinte_hero.webp";

import { galleryItems } from "../data/gallery";

export default function DietroLeQuinte() {
  return (
    <>
      <Hero
        badge="GAIA · Backstage"
        title="Dietro le quinte di GAIA"
        subtitle="Entra nel processo creativo: idee, test e sviluppo dietro GAIA"
        image={heroBackstage}
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
            {galleryItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-lm-bg-secondary dark:bg-dm-bg-secondary focus:outline-none focus-visible:ring-4 focus-visible:ring-lm-pink dark:focus-visible:ring-dm-pink cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
