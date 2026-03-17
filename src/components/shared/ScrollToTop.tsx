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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Torna all'inizio della pagina"
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-lm-green text-white
        dark:bg-dm-pink dark:text-lm-text-primary
        shadow-md
        transition-all duration-300
        hover:opacity-80
        focus-visible:outline-2 focus-visible:outline-offset-2
        cursor-pointer
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}