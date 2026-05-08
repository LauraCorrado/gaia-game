import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <section
      aria-labelledby="cookie-policy-title"
      className="max-w-3xl mx-auto px-4 py-16"
    >
      <h1
        id="cookie-policy-title"
        className="text-lm-text-primary dark:text-dm-text-primary mb-4"
      >
        Cookie Policy
      </h1>

      <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8">
        Questo sito utilizza tecnologie che consentono di raccogliere e
        memorizzare informazioni sul dispositivo dell’utente durante la
        navigazione (ad esempio tramite cookie o strumenti simili). Per
        semplicità, nel presente documento tali tecnologie sono indicate come
        “cookie”, salvo ove diversamente specificato.
      </p>

      <div className="flex flex-col gap-8">
        {/* 1 */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            1. Introduzione
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            I cookie possono essere:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>di prima parte, gestiti direttamente dal Titolare del sito</li>
            <li>di terze parti, forniti da soggetti esterni</li>
          </ul>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Alcuni cookie sono necessari per il corretto funzionamento del sito,
            mentre altri possono essere utilizzati solo previo consenso
            dell’utente, ove richiesto dalla normativa.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            2. Cosa sono i cookie
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            I cookie sono piccoli file di testo che i siti web inviano al
            dispositivo dell’utente durante la navigazione. Essi permettono al
            sito di funzionare correttamente e, in alcuni casi, di migliorare
            l’esperienza utente.
          </p>
        </section>

        {/* 3 (nota: numerazione originale incoerente → mantenuta) */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            3. Cookie e tecnologie utilizzati
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Questo sito utilizza esclusivamente strumenti tecnici necessari al
            proprio funzionamento.
          </p>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            In particolare:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>
              memorizzazione delle preferenze relative ai cookie (tramite
              localStorage del browser)
            </li>
            <li>
              salvataggio delle preferenze di visualizzazione (es. modalità
              chiara/scura)
            </li>
          </ul>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Questi strumenti:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>non richiedono il consenso dell’utente</li>
            <li>sono utilizzati esclusivamente per finalità tecniche</li>
            <li>non effettuano attività di tracciamento o profilazione</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            4. Servizi di terze parti
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Il sito utilizza, previo consenso dell’utente, il servizio Google
            Fonts fornito da Google LLC per la visualizzazione dei caratteri
            tipografici.
          </p>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            L’utilizzo di tale servizio può comportare:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>la trasmissione dell’indirizzo IP</li>
            <li>la connessione ai server di Google</li>
            <li>la raccolta di dati tecnici relativi al browser</li>
          </ul>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Il caricamento di Google Fonts avviene esclusivamente dopo che
            l’utente ha espresso il proprio consenso tramite il banner dei
            cookie.
          </p>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Per maggiori informazioni:
          </p>

          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consulta la Privacy Policy di Google. Si apre in una nuova scheda"
            className="underline text-lm-blue dark:text-dm-blue"
          >
            https://policies.google.com/privacy
          </a>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            5. Base giuridica del trattamento
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Il trattamento dei dati tramite cookie e tecnologie analoghe si basa
            su:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>
              Strumenti tecnici (necessari): utilizzo consentito senza consenso
              ai sensi della normativa ePrivacy (art. 122 Codice Privacy) e del
              legittimo interesse del Titolare a garantire il funzionamento del
              sito
            </li>
            <li>
              Servizi di terze parti (es. Google Fonts): consenso libero,
              specifico e informato dell’utente (art. 6(1)(a) GDPR), espresso
              tramite banner cookie
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            6. Gestione delle preferenze
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            L’utente può in qualsiasi momento:
          </p>

          <ul className="list-disc pl-6 mt-2 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>modificare o revocare il consenso prestato</li>
            <li>
              cancellare i dati salvati tramite le impostazioni del browser
            </li>
            <li>
              gestire le preferenze tramite gli strumenti eventualmente messi a
              disposizione dal sito
            </li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            7. Collegamento alla Privacy Policy
          </h2>

          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Per ulteriori informazioni sul trattamento dei dati personali, si
            invita a consultare la{" "}
            <Link
              to="/privacy-policy"
              className="underline text-lm-blue dark:text-dm-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lm-blue/40 dark:focus-visible:ring-dm-blue/40 rounded-sm"
            >
              Privacy Policy
            </Link>{" "}
            del sito.
          </p>
        </section>
        <section>
          <p className="text-sm text-lm-green dark:text-dm-green mb-8">
            Ultimo aggiornamento: <strong>maggio 2026</strong>
          </p>
        </section>
      </div>
    </section>
  );
}