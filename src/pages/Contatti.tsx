import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Hero from "../components/ui/Hero";
import Button from "../components/ui/Button";
import heroContatti from "../assets/img/hero/contatti_hero.webp";
import { partners } from "../data/partners";

// ── Social icons (inline SVG) ─────────────────────────────────────────────────

function WebsiteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
};

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const iconColorMap: Record<string, string> = {
  pink:   "hover:text-lm-pink   hover:bg-lm-bg-pink   dark:hover:text-dm-pink   dark:hover:bg-dm-bg-pink",
  blue:   "hover:text-lm-blue   hover:bg-lm-bg-blue   dark:hover:text-dm-blue   dark:hover:bg-dm-bg-blue",
  yellow: "hover:text-lm-yellow hover:bg-lm-bg-yellow dark:hover:text-dm-yellow dark:hover:bg-dm-bg-yellow",
  green:  "hover:text-lm-green  hover:bg-lm-bg-green  dark:hover:text-dm-green  dark:hover:bg-dm-bg-green",
};

export default function Contatti() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to:  formData.email,
          subject:   formData.subject,
          message:   formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-sm bg-lm-bg-primary dark:bg-dm-bg-secondary " +
    "border border-lm-text-secondary/20 dark:border-dm-text-secondary/20 " +
    "text-lm-text-primary dark:text-dm-text-primary " +
    "placeholder:text-lm-text-secondary/50 dark:placeholder:text-dm-text-secondary/50 " +
    "focus:outline-none focus:ring-2 focus:ring-lm-blue/40 dark:focus:ring-dm-blue/40 " +
    "focus:border-lm-blue dark:focus:border-dm-blue " +
    "transition-all duration-200";

  return (
    <>
      <Hero
        badge="GAIA · Contatti"
        title="Restiamo in contatto"
        subtitle="Hai domande o vuoi collaborare con noi? Scrivici!"
        image={heroContatti}
        accentColor="blue"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <aside className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
                I nostri partner
              </h2>
              <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary leading-relaxed">
                Il progetto GAIA è un'iniziativa di ricerca collaborativa.
                Scopri chi siamo e seguici sui social.
              </p>
            </div>

            <ul
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"
              aria-label="Partner del progetto"
            >
              {partners.map((p) => {
                const iconHover = iconColorMap[p.btnColor];
                const iconBase = `w-6 h-6 rounded-md flex items-center justify-center shrink-0
                                  text-lm-text-secondary dark:text-dm-text-secondary
                                  transition-all duration-150 ${iconHover}`;
                return (
                  <li key={p.name} className="flex">
                    <div
                      className="w-full flex flex-col items-center justify-between gap-2.5
                                 rounded-2xl bg-lm-bg-blue dark:bg-dm-bg-blue px-4 py-4"
                      aria-label={p.name}
                    >
                      <div className="h-20 flex items-center justify-center dark:bg-white rounded-lg p-2">
                        {/* logo */}
                        <img
                          src={p.logo}
                          alt={p.name}
                          className={`max-h-full max-w-full  object-contain ${p.boostLogo ? 'max-h-full scale-110' : "max-h-[80%]"}`}
                        />
                      </div>

                      {/* divider */}
                      <div className="w-full h-px bg-lm-text-secondary/10 dark:bg-dm-text-secondary/10" />

                      {/* icon row: website · address · socials */}
                      <div className="flex items-center justify-center flex-wrap gap-1.5">
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Sito web di ${p.name}`}
                          className={iconBase}
                        >
                          <WebsiteIcon className="w-5 h-5 text-lm-blue dark:text-dm-blue" />
                        </a>

                        {p.address && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Indirizzo di ${p.name}: ${p.address}`}
                            className={iconBase}
                          >
                            <MapPinIcon className="w-5 h-5 text-lm-green dark:text-dm-green" />
                          </a>
                        )}

                        {p.socials?.map((s) => {
                          const Icon = socialIcons[s.platform];
                          return (
                            <a
                              key={s.platform}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${p.name} su ${socialLabels[s.platform]}`}
                              className={iconBase}
                            >
                              <Icon className="w-5 h-5 text-lm-blue dark:text-dm-blue" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center">
              <div className="rounded-2xl border border-lm-blue/20 dark:border-dm-blue/20
                              bg-lm-bg-secondary dark:bg-dm-bg-secondary px-5 py-4 max-w-fit text-center">
                <p className="text-lg font-semibold uppercase tracking-wide text-lm-blue dark:text-dm-blue mb-1">
                  Email istituzionale
                </p>
                <a
                  href="mailto:info@gaia-game.eu"
                  className="text-md font-medium text-lm-text-primary dark:text-dm-text-primary hover:underline"
                >
                  info@gaia-game.eu
                </a>
              </div>
            </div>
          </aside>

          <section aria-labelledby="form-title" className="lg:col-span-3">
            <h2
              id="form-title"
              className="text-lm-text-primary dark:text-dm-text-primary mb-2"
            >
              Invia un messaggio
            </h2>
            <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary mb-8 leading-relaxed">
              Compila il modulo per richiedere informazioni, proporre collaborazioni
              o entrare in contatto con il team GAIA.
            </p>

            {status === "success" ? (
              <div
                role="alert"
                className="rounded-2xl border border-lm-green/30 dark:border-dm-green/30
                           bg-lm-bg-green dark:bg-dm-bg-green px-6 py-8 text-center"
              >
                <div className="text-3xl mb-3" aria-hidden="true">✓</div>
                <p className="font-semibold text-lm-green dark:text-dm-green mb-1">
                  Messaggio inviato!
                </p>
                <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                  Ti risponderemo al più presto all'indirizzo fornito.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-lm-blue dark:text-dm-blue hover:underline"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary">
                      Nome e cognome{" "}
                      <span aria-hidden="true" className="text-lm-pink dark:text-dm-pink">*</span>
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Mario Rossi" className={inputBase} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary">
                      Email{" "}
                      <span aria-hidden="true" className="text-lm-pink dark:text-dm-pink">*</span>
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="mario@esempio.it" className={inputBase} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary">
                    Oggetto{" "}
                    <span aria-hidden="true" className="text-lm-pink dark:text-dm-pink">*</span>
                  </label>
                  <input id="subject" name="subject" type="text" required
                    value={formData.subject} onChange={handleChange}
                    placeholder="Richiesta di informazioni" className={inputBase} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary">
                    Messaggio{" "}
                    <span aria-hidden="true" className="text-lm-pink dark:text-dm-pink">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={6}
                    value={formData.message} onChange={handleChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className={`${inputBase} resize-none`} />
                </div>

                {status === "error" && (
                  <div role="alert" className="rounded-xl border border-lm-pink/30 dark:border-dm-pink/30
                               bg-lm-bg-pink dark:bg-dm-bg-pink px-4 py-3
                               text-sm text-lm-pink dark:text-dm-pink">
                    Invio non riuscito. Riprova o scrivi direttamente a{" "}
                    <a href="mailto:info@gaia-game.eu" className="font-semibold underline">
                      info@gaia-game.eu
                    </a>.
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-lm-text-secondary dark:text-dm-text-secondary">
                    <span aria-hidden="true" className="text-lm-pink dark:text-dm-pink">* </span>
                    Campi obbligatori
                  </p>
                  <Button type="submit" variant="primary" color="blue" size="md"
                    disabled={status === "loading"} aria-busy={status === "loading"}>
                    {status === "loading" ? "Invio in corso…" : "Invia messaggio"}
                  </Button>
                </div>
              </form>
            )}
          </section>

        </div>
      </div>
    </>
  );
}