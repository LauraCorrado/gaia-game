export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        Cookie Policy
      </h1>

      <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8">
        La presente Cookie Policy descrive le modalità di utilizzo dei cookie e di altre tecnologie di tracciamento da parte del sito <em>GAIA – Giochi Accessibili ed Inclusivi per bambini con Autismo</em>.
      </p>

      <div className="flex flex-col gap-6">

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            Cosa sono i cookie
          </h2>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell’utente durante la navigazione. Possono essere utilizzati per garantire il corretto funzionamento del sito o per raccogliere informazioni sull’utilizzo dei servizi.
          </p>
        </section>

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            Cookie tecnici (necessari)
          </h2>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Questo sito utilizza esclusivamente strumenti tecnici necessari al suo funzionamento. In particolare:
          </p>
          <ul className="list-disc pl-5 text-lm-text-secondary dark:text-dm-text-secondary">
            <li>
              salvataggio delle preferenze relative ai cookie (tramite localStorage del browser)
            </li>
            <li>
              memorizzazione delle preferenze di visualizzazione, come la modalità chiara o scura
            </li>
          </ul>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Questi strumenti non richiedono il consenso dell’utente, in quanto necessari al funzionamento del sito.
          </p>
        </section>

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            Risorse di terze parti (Google Fonts)
          </h2>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            Il sito utilizza, previo consenso dell’utente, il servizio Google Fonts fornito da Google LLC per la visualizzazione dei caratteri tipografici.
          </p>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            L’utilizzo di questo servizio può comportare la trasmissione di dati personali, tra cui l’indirizzo IP, ai server di Google.
          </p>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Il caricamento di Google Fonts avviene solo dopo che l’utente ha espresso il proprio consenso tramite il banner dei cookie.
          </p>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary mt-2">
            Per maggiori informazioni è possibile consultare la privacy policy di Google:
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            Base giuridica del trattamento
          </h2>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            I cookie tecnici sono trattati sulla base del legittimo interesse del titolare a garantire il corretto funzionamento del sito.
            L’utilizzo di servizi di terze parti, come Google Fonts, avviene invece esclusivamente previo consenso dell’utente.
          </p>
        </section>

        <section>
          <h2 className="text-lm-text-primary dark:text-dm-text-primary mb-2">
            Gestione delle preferenze
          </h2>
          <p className="text-lm-text-secondary dark:text-dm-text-secondary">
            L’utente può modificare o revocare in qualsiasi momento le proprie preferenze relative all’utilizzo dei cookie, cancellando i dati salvati nel proprio browser o tramite le impostazioni del sito, se disponibili.
          </p>
        </section>

      </div>
    </div>
  )
}