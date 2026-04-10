import { useEffect, useState } from "react";
import Hero from "../components/ui/Hero";
import heroBackstage from "../assets/img/hero/dietrolequinte_hero.webp";
import { galleryItems } from "../data/gallery";

export default function DietroLeQuinte() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const activeItem = galleryItems.find((item) => item.id === selectedImage);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

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
                onClick={() => setSelectedImage(item.id)}
                className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-lm-bg-secondary dark:bg-dm-bg-secondary focus:outline-none focus-visible:ring-4 focus-visible:ring-lm-pink dark:focus-visible:ring-dm-pink cursor-pointer"
                aria-label={`Apri immagine: ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-sm cursor-pointer"
              aria-label="Chiudi immagine ingrandita"
            >
              Chiudi
            </button>

            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <p
              id="gallery-modal-title"
              className="text-white mt-4 text-sm"
            >
              {activeItem.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}