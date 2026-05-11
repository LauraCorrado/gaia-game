import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTop";
import CookieBanner from "./CookieBanner";
// import InstitutionalBanner from "./InstitutionalBanner";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-60 focus-visible:px-4 focus-visible:py-2 focus-visible:rounded focus-visible:bg-lm-blue focus-visible:text-white dark:focus-visible:bg-dm-blue dark:focus-visible:text-lm-text-primary"
      >
        Vai al contenuto principale
      </a>

      {/* <InstitutionalBanner /> */}
      <Header />

      <main
        id="main-content"
        className="
    relative grow pt-header
    bg-lm-bg-primary dark:bg-dm-bg-primary
  "
      >
        <div
          aria-hidden="true"
          className="
      pointer-events-none absolute inset-0 z-0
      opacity-[0.06] dark:opacity-[0.08]
      mix-blend-overlay
    "
          style={{
            backgroundImage: `
        radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)
      `,
            backgroundSize: "5px 5px",
          }}
        />

        <div className="relative z-10">
          <Outlet />
        </div>
      </main>

      <Footer />
      <CookieBanner />
      <ScrollToTopBtn />
    </div>
  );
}