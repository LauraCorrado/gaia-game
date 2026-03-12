export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        Privacy Policy
      </h1>
      <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8">
        Informativa sul trattamento dei dati personali ai sensi del Regolamento
        UE 2016/679 (GDPR). Testo definitivo in attesa di redazione.
      </p>
      <div className="flex flex-col gap-6">
        {['Titolare del trattamento', 'Dati raccolti', 'Finalità del trattamento', 'Diritti dell\'interessato'].map((section) => (
          <section key={section} aria-labelledby={section}>
            <h2 id={section} className="text-lm-text-primary dark:text-dm-text-primary mb-2">
              {section}
            </h2>
            <p className="text-lm-text-secondary dark:text-dm-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}