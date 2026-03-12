export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-lm-text-primary dark:text-dm-text-primary mb-4">
        Cookie Policy
      </h1>
      <p className="text-lm-text-secondary dark:text-dm-text-secondary mb-8">
        Informativa sull'uso dei cookie su questo sito. Testo definitivo in attesa di redazione...
      </p>
      <div className="flex flex-col gap-6">
        {['Cosa sono i cookie', 'Cookie tecnici', 'Cookie di terze parti', 'Come disabilitare i cookie'].map((section) => (
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