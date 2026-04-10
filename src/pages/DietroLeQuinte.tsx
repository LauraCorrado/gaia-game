import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Hero from "../components/ui/Hero";
import Badge from "../components/ui/Badge";
import heroBackstage from "../assets/img/hero/dietrolequinte_hero.webp";
import { galleryItems } from "../data/gallery";

export default function DietroLeQuinte() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentIndex = galleryItems.findIndex(
    (item) => item.id === selectedImage,
  );

  const activeItem = currentIndex !== -1 ? galleryItems[currentIndex] : null;

  const nextImage = () => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex].id);
  };

  const prevImage = () => {
    if (currentIndex === -1) return;
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex].id);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

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
        subtitle="Eventi, attività e fasi di sviluppo fino alla realizzazione: attraverso immagini e materiali visivi, esplora il percorso che accompagna l'intero ciclo di vita di GAIA!"
        image={heroBackstage}
        accentColor="pink"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section aria-labelledby="dietro-title" className="mb-12">
          <h1
            id="dietro-title"
            className="text-lm-text-primary dark:text-dm-text-primary mb-4"
          >
            Uno sguardo dietro le quinte
          </h1>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg max-w-2xl">
            Scopri il processo dietro GAIA: incontri, test e momenti di sviluppo raccontati per immagini.
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
                onContextMenu={(e) => e.preventDefault()}
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

      {activeItem &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 bg-black/80 flex items-end justify-center px-4 pb-4 pt-30"
            style={{ zIndex: 55 }}
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
                aria-label="Chiudi immagine ingrandita"
                className="
                absolute top-4 right-4
                w-10 h-10 flex items-center justify-center
                rounded-full
                bg-lm-bg-pink dark:bg-dm-bg-pink
                text-lm-pink dark:text-dm-pink
                shadow-lg backdrop-blur-sm
                transition-all duration-200
                hover:scale-110 hover:bg-lm-bg-pink/80 dark:hover:bg-dm-bg-pink/80 hover:text-lm-pink/80 dark:hover:text-dm-pink/80
                focus:outline-none focus-visible:ring-4 focus-visible:ring-lm-pink/40 dark:focus-visible:ring-dm-pink/40
                cursor-pointer
            "
              >
                ✕
              </button>

              <button
                onClick={prevImage}
                className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-11 h-11 flex items-center justify-center
                rounded-full
                bg-lm-pink/90 dark:bg-dm-pink/90
                text-white
                shadow-lg backdrop-blur-sm
                transition-all duration-200
                hover:scale-110 hover:bg-lm-pink dark:hover:bg-dm-pink
                focus:outline-none focus-visible:ring-4 focus-visible:ring-lm-pink/40 dark:focus-visible:ring-dm-pink/40
                cursor-pointer
                "
                aria-label="Immagine precedente"
              >
                ←
              </button>

              <button
                onClick={nextImage}
                className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-11 h-11 flex items-center justify-center
                rounded-full
                bg-lm-pink/90 dark:bg-dm-pink/90
                text-white
                shadow-lg backdrop-blur-sm
                transition-all duration-200
                hover:scale-110 hover:bg-lm-pink dark:hover:bg-dm-pink
                focus:outline-none focus-visible:ring-4 focus-visible:ring-lm-pink/40 dark:focus-visible:ring-dm-pink/40
                cursor-pointer
  "
                aria-label="Immagine successiva"
              >
                →
              </button>

              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="w-full max-h-[75vh] object-contain rounded-xl"
                onContextMenu={(e) => e.preventDefault()}
              />

              <div className="mt-6 text-center flex flex-col items-center text-white">
                {activeItem.category === "kickoff" && (
                  <Badge label="Kick-off Meeting" color="pink" size="sm" />
                )}

                <p
                  id="gallery-modal-title"
                  className="text-lg font-semibold tracking-wide mt-5"
                >
                  {activeItem.title}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
