import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna all'inizio della pagina"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-lm-blue text-white
        dark:bg-dm-pink dark:text-lm-text-primary
        shadow-md
        transition-all duration-300
        hover:opacity-80
        focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-lm-pink/40 dark:focus-visible:ring-dm-blue/50
        cursor-pointer
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp aria-hidden="true" className="w-5 h-5" />
    </button>
  );
}