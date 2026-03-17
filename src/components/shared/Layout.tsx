import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import InstitutionalBanner from "./InstitutionalBanner";

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:rounded focus:bg-lm-blue focus:text-white dark:focus:bg-dm-blue dark:focus:text-lm-text-primary"
      >
        Vai al contenuto principale
      </a>

      <InstitutionalBanner />
      <Header />

      <main id="main-content" className="grow pt-header">
        <Outlet />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
