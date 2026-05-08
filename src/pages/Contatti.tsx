import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Hero from "../components/ui/Hero";
import Button from "../components/ui/Button";
import heroContatti from "../assets/img/hero/contatti_hero.webp";
import { partners } from "../data/partners";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MapPinIcon,
  WebsiteIcon,
} from "../components/shared/SocialIcons";

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

type FormErrors = Partial<Record<keyof FormData, string>> & {
  privacy?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: keyof FormData, value: string): string {
  switch (name) {
    case "name":
      return value.trim().length < 2 ? "Inserisci nome e cognome." : "";
    case "email":
      return !EMAIL_RE.test(value.trim())
        ? "Inserisci un indirizzo email valido."
        : "";
    case "subject":
      return value.trim().length < 3
        ? "Inserisci l'oggetto del messaggio."
        : "";
    case "message":
      return value.trim().length < 10
        ? "Il messaggio deve contenere almeno 10 caratteri."
        : "";
    default:
      return "";
  }
}

function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(data) as (keyof FormData)[]).forEach((key) => {
    const msg = validateField(key, data[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

export default function Contatti() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name as keyof FormData, value),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormData, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);
    const newErrors = validateAll(formData);
    if (!privacyAccepted) {
      newErrors.privacy = "Devi prima accettare la Privacy Policy";
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setPrivacyAccepted(false);
      setErrors({});
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const inputBase = (field: keyof FormData) =>
    "w-full rounded-xl px-4 py-3 text-sm bg-lm-bg-primary dark:bg-dm-bg-secondary " +
    "text-lm-text-primary dark:text-dm-text-primary " +
    "placeholder:text-lm-text-secondary/50 dark:placeholder:text-dm-text-secondary/50 " +
    "focus:outline-none focus:ring-2 transition-all duration-200 " +
    (errors[field] && touched[field]
      ? "border border-lm-pink dark:border-dm-pink focus:ring-lm-pink/40 dark:focus:ring-dm-pink/40"
      : "border border-lm-text-secondary/20 dark:border-dm-text-secondary/20 focus:ring-lm-blue/40 dark:focus:ring-dm-blue/40 focus:border-lm-blue dark:focus:border-dm-blue");

  const FieldError = ({ field }: { field: keyof FormData }) =>
    errors[field] && touched[field] ? (
      <p role="alert" className="text-xs text-lm-pink dark:text-dm-pink mt-1">
        {errors[field]}
      </p>
    ) : null;

  return (
    <>
      <Hero
        badge="GAIA · Contatti"
        title="Restiamo in contatto"
        subtitle="Hai domande o vuoi collaborare con noi? Compila il modulo, ti risponderemo il prima possibile!"
        image={heroContatti}
        accentColor="blue"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <section aria-labelledby="form-title" className="lg:col-span-3">
            <h2
              id="form-title"
              className="text-lm-text-primary dark:text-dm-text-primary mb-2"
            >
              Invia un messaggio
            </h2>
            <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8 leading-relaxed">
              Compila il modulo per richiedere informazioni, entrare in contatto
              con il team GAIA o iscriverti alla newsletter.
            </p>

            {status === "success" ? (
              <div
                role="alert"
                className="rounded-2xl border border-lm-green/30 dark:border-dm-green/30 bg-lm-bg-green dark:bg-dm-bg-green px-6 py-8 text-center"
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  ✓
                </div>
                <p className="font-semibold text-lm-green dark:text-dm-green mb-1">
                  Messaggio inviato con successo!
                </p>
                <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                  Ti risponderemo al più presto all'indirizzo fornito.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-lm-blue dark:text-dm-blue hover:underline cursor-pointer"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary"
                    >
                      Nome e cognome{" "}
                      <span
                        aria-hidden="true"
                        className="text-lm-pink dark:text-dm-pink"
                      >
                        *
                      </span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Mario Rossi"
                      aria-describedby={
                        errors.name && touched.name ? "error-name" : undefined
                      }
                      aria-invalid={!!(errors.name && touched.name)}
                      className={inputBase("name")}
                    />
                    <span id="error-name">
                      <FieldError field="name" />
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary"
                    >
                      Email{" "}
                      <span
                        aria-hidden="true"
                        className="text-lm-pink dark:text-dm-pink"
                      >
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="mario@esempio.it"
                      aria-describedby={
                        errors.email && touched.email
                          ? "error-email"
                          : undefined
                      }
                      aria-invalid={!!(errors.email && touched.email)}
                      className={inputBase("email")}
                    />
                    <span id="error-email">
                      <FieldError field="email" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary"
                  >
                    Oggetto{" "}
                    <span
                      aria-hidden="true"
                      className="text-lm-pink dark:text-dm-pink"
                    >
                      *
                    </span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Richiesta di informazioni"
                    aria-describedby={
                      errors.subject && touched.subject
                        ? "error-subject"
                        : undefined
                    }
                    aria-invalid={!!(errors.subject && touched.subject)}
                    className={inputBase("subject")}
                  />
                  <span id="error-subject">
                    <FieldError field="subject" />
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-lm-text-secondary dark:text-dm-text-secondary"
                  >
                    Messaggio{" "}
                    <span
                      aria-hidden="true"
                      className="text-lm-pink dark:text-dm-pink"
                    >
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Scrivi qui il tuo messaggio..."
                    aria-describedby={
                      errors.message && touched.message
                        ? "error-message"
                        : undefined
                    }
                    aria-invalid={!!(errors.message && touched.message)}
                    className={`${inputBase("message")} resize-none`}
                  />
                  <span id="error-message">
                    <FieldError field="message" />
                  </span>
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-xl border border-lm-pink/30 dark:border-dm-pink/30 bg-lm-bg-pink dark:bg-dm-bg-pink px-4 py-3 text-sm text-lm-pink dark:text-dm-pink"
                  >
                    Invio non riuscito. Riprova o scrivi direttamente a{" "}
                    <a
                      href="mailto:info@gaia-game.eu"
                      className="font-semibold underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
                    >
                      info@gaia-game.eu
                    </a>
                    .
                  </div>
                )}

                <div className="flex items-start gap-2">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    aria-invalid={!!errors.privacy}
                    aria-describedby={
                      errors.privacy ? "error-privacy" : undefined
                    }
                    className="mt-1"
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-lm-text-secondary dark:text-dm-text-secondary"
                  >
                    Acconsento al trattamento dei dati personali secondo la{" "}
                    <Link
                      to="/privacy-policy"
                      className="underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
                    >
                      Privacy Policy
                    </Link>
                    <span
                      aria-hidden="true"
                      className="text-lm-pink dark:text-dm-pink"
                    >
                      *
                    </span>
                  </label>
                </div>

                {errors.privacy && (
                  <p
                    id="error-privacy"
                    role="alert"
                    className="text-xs text-lm-pink dark:text-dm-pink mt-1"
                  >
                    {errors.privacy}
                  </p>
                )}

                {/* submit */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                    <span
                      aria-hidden="true"
                      className="text-lm-pink dark:text-dm-pink"
                    >
                      *{" "}
                    </span>
                    Campi obbligatori
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    color="blue"
                    size="md"
                    disabled={status === "loading"}
                    aria-busy={status === "loading"}
                  >
                    {status === "loading"
                      ? "Invio in corso…"
                      : "Invia messaggio"}
                  </Button>
                </div>
              </form>
            )}
          </section>

          <aside
            className="lg:col-span-2 flex flex-col gap-8 
                  lg:border-l lg:border-lm-text-secondary/10 
                  lg:dark:border-dm-text-secondary/10 
                  lg:pl-10"
          >
            <div>
              <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
                Informazioni di contatto
              </h2>
              <p className="text-lm-text-secondary dark:text-dm-text-secondary leading-relaxed">
                Il progetto GAIA è un'iniziativa di ricerca collaborativa.
                Scopri chi siamo e seguici sui social.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="rounded-2xl border border-lm-blue/20 dark:border-dm-blue/20
                              bg-lm-bg-secondary dark:bg-dm-bg-secondary px-5 py-4 max-w-fit text-center"
              >
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

            <ul className="flex flex-col divide-y divide-lm-text-secondary/10 dark:divide-dm-text-secondary/10">
              {partners.map((p) => (
                <li key={p.name} className="py-4 flex items-start gap-4">
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-semibold text-lm-text-primary dark:text-dm-text-primary">
                      {p.name}
                    </p>
                    {p.address && (
                      <p className="text-lm-text-secondary dark:text-dm-text-secondary">
                        {p.address}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Vai al sito web di ${p.name}. Si apre in una nuova scheda`}
                        className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
                      >
                        <WebsiteIcon
                          aria-hidden="true"
                          className="w-3.5 h-3.5"
                        />
                        <span>Sito web</span>
                      </a>
                      {p.address && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Apri la posizione di ${p.name} su Google Maps. Si apre in una nuova scheda`}
                          className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
                        >
                          <MapPinIcon
                            aria-hidden="true"
                            className="w-3.5 h-3.5"
                          />
                          <span>Mappa</span>
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
                            aria-label={`Vai alla pagina ${socialLabels[s.platform]} di ${p.name}. Si apre in una nuova scheda`}
                            className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
                          >
                            <Icon aria-hidden="true" className="w-3.5 h-3.5" />
                            <span>{socialLabels[s.platform]}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}